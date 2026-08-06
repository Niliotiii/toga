# Power-up "Bomba" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a third power-up, "Bomba", that removes 3 of the 4 wrong
alternatives (vs. Eliminar's 2), earned via the same combo rule as Eliminar,
with a staggered bomb/explosion animation on the game screen.

**Architecture:** Mirrors the existing Eliminar power-up end-to-end: state in
`GameContext.tsx` (count, per-question usage guard, synchronous double-call
guard), a new icon component, and a new `PowerupButton` + animation
choreography in `GameScreen.tsx`. No new files beyond the icon addition —
everything else extends files that already implement the identical pattern
for Eliminar.

**Tech Stack:** React Native, `react-native-svg` for icons, `Animated` API
(already used for the scissors/parachute animations), Jest +
`@testing-library/react-native`.

## Global Constraints

- Bomba starts at 1, gains +1 every combo multiple of 3 correct answers in a
  row, capped at `POWERUP_MAX` (2) — identical parameters to Eliminar.
- Bomba removes exactly 3 of the 4 wrong alternatives (all questions have 5
  `alternativas`, 1 correct + 4 wrong).
- Bomba is additive: Pular and Eliminar behavior/parameters do not change.
- Animation must have a `reducedMotion` fallback that skips straight to the
  eliminated state, matching the existing Eliminar/Pular pattern.
- Follow existing code patterns exactly: synchronous ref-guard against
  double-invocation in the same tick, `stateRef`-based reads before
  `setState`, guard conditions re-checked inside the `setState` updater.

---

### Task 1: `GameContext` — Bomba state, combo reward, and `usarBomba()`

**Files:**
- Modify: `src/context/GameContext.tsx`
- Test: `src/context/GameContext.test.tsx`

**Interfaces:**
- Consumes: `shuffle` from `../lib/gameLogic` (already imported).
- Produces: `GameContextValue.usarBomba(): number[]` — returns the indices of
  the 3 wrong alternatives removed (empty array if the guard rejects the
  call). `GameState.powerups` becomes `{ pular: number; eliminar: number; bomba: number }`.
  `GameState.bombadasQuestaoAtual: boolean`.

- [ ] **Step 1: Write the failing tests**

Add to `src/context/GameContext.test.tsx` (after the existing `usarEliminar`
tests):

```tsx
test("iniciarRodada includes bomba in the initial powerups", async () => {
  const { result } = await renderHook(() => useGame(), { wrapper });
  await act(() => {
    result.current.setTema("Direito Penal");
    result.current.setDificuldade("facil");
  });
  await act(() => result.current.iniciarRodada());
  expect(result.current.state.powerups).toEqual({ pular: 1, eliminar: 1, bomba: 1 });
});

test("usarBomba removes three wrong alternatives and can only be used once per question", async () => {
  const { result } = await renderHook(() => useGame(), { wrapper });
  await act(() => {
    result.current.setTema("Direito Penal");
    result.current.setDificuldade("facil");
  });
  await act(() => result.current.iniciarRodada());
  const correta = result.current.state.rodada[0].resposta_correta;

  let removed: number[] = [];
  await act(() => { removed = result.current.usarBomba(); });
  expect(removed.length).toBe(3);
  expect(removed.every((i) => i !== correta)).toBe(true);
  expect(new Set(removed).size).toBe(3);
  expect(result.current.state.bombadasQuestaoAtual).toBe(true);
  expect(result.current.state.powerups.bomba).toBe(0);

  await act(() => { removed = result.current.usarBomba(); });
  expect(removed.length).toBe(0); // already used this question
});

test("usarBomba rejects a synchronous double-invocation with no render in between", async () => {
  const { result } = await renderHook(() => useGame(), { wrapper });
  await act(() => {
    result.current.setTema("Direito Penal");
    result.current.setDificuldade("facil");
  });
  await act(() => result.current.iniciarRodada());

  let first: number[] = [];
  let second: number[] = [];
  await act(() => {
    first = result.current.usarBomba();
    second = result.current.usarBomba();
  });

  expect(first.length).toBe(3);
  expect(second.length).toBe(0);
  expect(result.current.state.powerups.bomba).toBe(0);
});

test("bomba is granted on combo multiples of 3, capped at POWERUP_MAX", async () => {
  const { result } = await renderHook(() => useGame(), { wrapper });
  await act(() => {
    result.current.setTema("Direito Penal");
    result.current.setDificuldade("facil");
  });
  await act(() => result.current.iniciarRodada());

  for (let i = 0; i < 3; i++) {
    const correta = result.current.state.rodada[result.current.state.indice].resposta_correta;
    await act(() => result.current.responder(correta));
    await act(() => result.current.avancar());
  }
  expect(result.current.state.powerups.bomba).toBe(2);
});

test("avancar resets bombadasQuestaoAtual for the next question", async () => {
  const { result } = await renderHook(() => useGame(), { wrapper });
  await act(() => {
    result.current.setTema("Direito Penal");
    result.current.setDificuldade("facil");
  });
  await act(() => result.current.iniciarRodada());
  await act(() => { result.current.usarBomba(); });
  expect(result.current.state.bombadasQuestaoAtual).toBe(true);
  await act(() => result.current.avancar());
  expect(result.current.state.bombadasQuestaoAtual).toBe(false);
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx jest src/context/GameContext.test.tsx -t "bomba" -t "Bomba"`

Note: the round in this codebase uses `Direito Penal` / `facil` and may have
fewer than 5 questions in `rodada`. The `bomba is granted on combo multiples
of 3` test loops through `min(3, rodada.length)` implicitly by only using 3
iterations — if `rodada.length < 3` for this tema/dificuldade combo in the
current `QUESTOES_DB`, adjust the loop bound to `Math.min(3,
result.current.state.rodada.length)` and skip the assertion if it's below 3
(mirror how the existing `avancar` test already tolerates a variable
`rodada.length`). Confirm actual `rodada.length` by logging it once locally
before finalizing the test; do not hardcode a length that isn't guaranteed.

Expected: FAIL — `usarBomba` is not a function; `powerups.bomba` is
`undefined`.

- [ ] **Step 3: Implement `bomba` state and `usarBomba()`**

In `src/context/GameContext.tsx`:

Update the `GameState` interface (around line 21):

```tsx
  powerups: { pular: number; eliminar: number; bomba: number };
  eliminadasQuestaoAtual: boolean;
  bombadasQuestaoAtual: boolean;
```

Update `initialState` (around line 35):

```tsx
  powerups: { pular: 1, eliminar: 1, bomba: 1 },
  eliminadasQuestaoAtual: false,
  bombadasQuestaoAtual: false
```

Update `GameContextValue` interface (around line 48) to add:

```tsx
  usarBomba(): number[];
```

Inside `GameProvider`, alongside `usedEliminarThisQuestionRef` (around line 62):

```tsx
  const usedBombaThisQuestionRef = useRef(false);
```

Update `iniciarRodada` (around lines 96-109) to reset the new ref and state:

```tsx
  const iniciarRodada = useCallback(() => {
    usedEliminarThisQuestionRef.current = false;
    usedBombaThisQuestionRef.current = false;
    setState((s) => ({
      ...s,
      rodada: buildRodada(QUESTOES_DB, s.tema, s.dificuldade, ROUND_SIZE),
      indice: 0,
      acertos: 0,
      combo: 0,
      comboMax: 0,
      respondida: false,
      powerups: { pular: 1, eliminar: 1, bomba: 1 },
      eliminadasQuestaoAtual: false,
      bombadasQuestaoAtual: false
    }));
  }, []);
```

Update the combo-reward block inside `responder`'s `setState` updater
(around lines 124-139) to also grant `bomba`:

```tsx
    setState((s) => {
      if (s.respondida) return s;
      const combo = acertou ? s.combo + 1 : 0;
      let powerups = s.powerups;
      if (acertou && combo > 0 && combo % 3 === 0) {
        powerups = {
          ...powerups,
          eliminar: Math.min(POWERUP_MAX, powerups.eliminar + (powerups.eliminar < POWERUP_MAX ? 1 : 0)),
          bomba: Math.min(POWERUP_MAX, powerups.bomba + (powerups.bomba < POWERUP_MAX ? 1 : 0))
        };
      }
      return {
        ...s,
        respondida: true,
        acertos: acertou ? s.acertos + 1 : s.acertos,
        combo,
        comboMax: Math.max(s.comboMax, combo),
        powerups
      };
    });
```

(This preserves the exact existing behavior for `eliminar` — same condition,
same cap — while adding the identical rule for `bomba`. The
`Math.min(POWERUP_MAX, x + (x < POWERUP_MAX ? 1 : 0))` form is equivalent to
the original `if (... && s.powerups.eliminar < POWERUP_MAX) { +1 }` but
written so both fields share one code path without duplicating the `if`.)

Add `usarBomba`, placed after `usarEliminar` (after line 201), mirroring its
structure exactly but slicing 3 wrong indices instead of 2:

```tsx
  const usarBomba = useCallback((): number[] => {
    const s = stateRef.current;
    const q = s.rodada[s.indice];
    if (
      s.respondida ||
      s.powerups.bomba <= 0 ||
      s.bombadasQuestaoAtual ||
      usedBombaThisQuestionRef.current ||
      !q
    ) {
      return [];
    }
    usedBombaThisQuestionRef.current = true;

    const errados: number[] = [];
    q.alternativas.forEach((_, idx) => {
      if (idx !== q.resposta_correta) errados.push(idx);
    });
    const removidos = shuffle(errados).slice(0, 3);

    setState((curr) => {
      const currQ = curr.rodada[curr.indice];
      if (
        curr.respondida ||
        curr.powerups.bomba <= 0 ||
        curr.bombadasQuestaoAtual ||
        !currQ ||
        currQ.id !== q.id
      ) {
        return curr;
      }
      return {
        ...curr,
        bombadasQuestaoAtual: true,
        powerups: { ...curr.powerups, bomba: curr.powerups.bomba - 1 }
      };
    });

    return removidos;
  }, []);
```

Update `avancar` (around lines 203-210) to also reset the ref and state flag:

```tsx
  const avancar = useCallback(() => {
    usedEliminarThisQuestionRef.current = false;
    usedBombaThisQuestionRef.current = false;
    setState((s) => {
      const proximoIndice = s.indice + 1;
      if (proximoIndice >= s.rodada.length) return { ...s, indice: proximoIndice };
      return { ...s, indice: proximoIndice, respondida: false, eliminadasQuestaoAtual: false, bombadasQuestaoAtual: false };
    });
  }, []);
```

Add `usarBomba` to the context value object (around line 214):

```tsx
    <GameContext.Provider
      value={{ state, setTema, setDificuldade, toggleCronometro, sortearAleatorio, iniciarRodada, responder, usarPular, usarEliminar, usarBomba, avancar }}
    >
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx jest src/context/GameContext.test.tsx`

Expected: PASS (all tests in the file, including the pre-existing ones —
confirm `usarEliminar` and combo-reward behavior are unaffected).

- [ ] **Step 5: Commit**

```bash
git add src/context/GameContext.tsx src/context/GameContext.test.tsx
git commit -m "feat: add bomba power-up state and usarBomba to GameContext"
```

---

### Task 2: `BombIcon` component

**Files:**
- Modify: `src/components/icons.tsx`

**Interfaces:**
- Produces: `BombIcon({ size?: number; color?: string }): JSX.Element`, same
  `IconProps` shape as the other icons in this file.

- [ ] **Step 1: Add the icon**

The other icons in this file reuse a single Material Symbols glyph path on a
`"0 -960 960 960"` viewBox. There is no verified Material Symbols "bomb"
glyph path available to copy exactly, so this icon is hand-built from basic
shapes on a standard `"0 0 24 24"` viewBox instead of guessing an SVG path —
add a comment noting the difference so a future reader isn't confused about
the inconsistency.

Add to `src/components/icons.tsx`, update the import at the top:

```tsx
import Svg, { Path, Circle } from "react-native-svg";
```

Add after `FlameIcon` (after line 44):

```tsx
// Hand-built (not a Material Symbols glyph, unlike the icons above) —
// used for the Bomba power-up: a round body with a lit fuse.
export function BombIcon({ size = 24, color = "#000" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={14} r={7} fill={color} />
      <Path d="M12 8 L15.5 3.5" stroke={color} strokeWidth={2} strokeLinecap="round" />
      <Circle cx={16} cy={2.5} r={1.6} fill={color} />
    </Svg>
  );
}
```

- [ ] **Step 2: Verify it renders without errors**

Run: `npx jest src/components -t "renders"`

(No dedicated icon test exists for the other icons either — this step just
confirms nothing else broke by importing `Circle`. If any existing icon test
snapshot-renders `icons.tsx` indirectly, e.g. via `PowerupButton.test.tsx`,
run that suite too: `npx jest src/components/PowerupButton.test.tsx`.)

Expected: PASS, no import/render errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/icons.tsx
git commit -m "feat: add BombIcon for the Bomba power-up"
```

---

### Task 3: `GameScreen` — Bomba button and explosion animation

**Files:**
- Modify: `src/screens/GameScreen.tsx`
- Test: `src/screens/GameScreen.test.tsx`

**Interfaces:**
- Consumes: `useGame().state.powerups.bomba`, `state.bombadasQuestaoAtual`,
  `usarBomba(): number[]` (Task 1), `BombIcon` (Task 2).

- [ ] **Step 1: Write the failing test**

Add to `src/screens/GameScreen.test.tsx`:

```tsx
test("pressing the bomba power-up eliminates three alternatives and disables the button", async () => {
  await renderGame();
  const bombaBtn = screen.getByTestId("powerup-bomba");
  await act(async () => {
    fireEvent.press(bombaBtn);
  });
  const alternativas = screen.getAllByTestId("alternativa-button");
  const disabledCount = alternativas.filter((a) => a.props.accessibilityState?.disabled).length;
  expect(disabledCount).toBe(3);
  expect(bombaBtn.props.accessibilityState?.disabled).toBe(true);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx jest src/screens/GameScreen.test.tsx -t "bomba"`

Expected: FAIL — `getByTestId("powerup-bomba")` finds no element.

- [ ] **Step 3: Implement the button, state, and animation**

In `src/screens/GameScreen.tsx`:

Update imports (around lines 6-9):

```tsx
import { useGame } from "../context/GameContext";
import { AlternativaButton } from "../components/AlternativaButton";
import { PowerupButton } from "../components/PowerupButton";
import { ScissorsIcon, SkipIcon, FlameIcon, BombIcon } from "../components/icons";
```

Destructure `usarBomba` from `useGame()` (line 39):

```tsx
  const { state, responder, usarPular, usarEliminar, usarBomba, avancar } = useGame();
```

Add local animation state/refs alongside the existing scissors/paraquedas
ones (after line 58):

```tsx
  const [bombaActive, setBombaActive] = useState(false);
  const bombaY = useRef(new Animated.Value(0)).current;
  const bombaScale = useRef(new Animated.Value(0)).current;
  const bombaOpacity = useRef(new Animated.Value(0)).current;
  const bombaShake = useRef(new Animated.Value(0)).current;
  const explosaoScale = useRef(new Animated.Value(0)).current;
  const explosaoOpacity = useRef(new Animated.Value(0)).current;
```

Reset `bombaActive` in the per-question reset effect, alongside the other
per-question resets (around lines 90-99, inside the `useEffect` keyed on
`[state.indice, state.cronometroAtivo]`):

```tsx
    setEliminadas([]);
    setMascotTipo(null);
    setMascotMsg("");
    setTempoRestante(TEMPO_QUESTAO);
    setSelecionada(null);
    setScissorsActive(false);
    setPularAnimating(false);
    setBombaActive(false);
    scissorsOpacity.setValue(0);
    paraquedasOpacity.setValue(0);
```

Add `handleBomba` after `handlePular` (after line 205):

```tsx
  const handleBomba = async () => {
    if (scissorsActive || pularAnimating || bombaActive) return;
    const removidos = usarBomba();
    if (!removidos.length) return;

    if (reducedMotion) {
      setEliminadas((prev) => [...prev, ...removidos]);
      return;
    }

    setBombaActive(true);

    for (const idx of removidos) {
      bombaY.setValue(centerYFor(idx, ICON_SIZE));
      bombaScale.setValue(0);
      bombaOpacity.setValue(1);
      bombaShake.setValue(0);
      explosaoScale.setValue(0);
      explosaoOpacity.setValue(0);

      await animateTo(bombaScale, 1, 150);
      await new Promise<void>((resolve) => {
        Animated.sequence([
          Animated.timing(bombaShake, { toValue: 1, duration: 60, useNativeDriver: true }),
          Animated.timing(bombaShake, { toValue: -1, duration: 60, useNativeDriver: true }),
          Animated.timing(bombaShake, { toValue: 1, duration: 60, useNativeDriver: true }),
          Animated.timing(bombaShake, { toValue: 0, duration: 60, useNativeDriver: true })
        ]).start(() => resolve());
      });

      setEliminadas((prev) => [...prev, idx]);
      bombaOpacity.setValue(0);
      explosaoScale.setValue(0.3);
      explosaoOpacity.setValue(1);
      await animateTo(explosaoScale, 1.6, 180);
      await animateTo(explosaoOpacity, 0, 150);

      await wait(150);
    }

    setBombaActive(false);
  };
```

Add an interpolation for the shake rotation, alongside the existing
`scissorsRotate`/`paraquedasRotate` (around line 207):

```tsx
  const bombaRotate = bombaShake.interpolate({ inputRange: [-1, 1], outputRange: ["-12deg", "12deg"] });
```

Update the alternative buttons' `disabled` prop (around line 267) to also
block interaction during the bomb sequence:

```tsx
                  disabled={state.respondida || eliminadas.includes(i) || scissorsActive || bombaActive}
```

Add the bomb/explosion overlay right after the `pularAnimating` overlay
block (after line 308, still inside `altList`'s `<View>`):

```tsx
          {bombaActive && (
            <>
              <Animated.View
                pointerEvents="none"
                style={[
                  styles.bombaOverlay,
                  {
                    opacity: bombaOpacity,
                    transform: [{ translateY: bombaY }, { rotate: bombaRotate }, { scale: bombaScale }]
                  }
                ]}
              >
                <BombIcon size={ICON_SIZE} color={colors.fg} />
              </Animated.View>
              <Animated.View
                pointerEvents="none"
                style={[
                  styles.explosaoOverlay,
                  { opacity: explosaoOpacity, transform: [{ translateY: bombaY }, { scale: explosaoScale }] }
                ]}
              >
                <View style={styles.explosaoCircle} />
              </Animated.View>
            </>
          )}
```

Add the `PowerupButton` for Bomba to the `powerupsRow`, after the Pular
button (after line 335):

```tsx
          <PowerupButton
            testID="powerup-bomba"
            icon={<BombIcon size={24} color={colors.fg} />}
            label="Bomba"
            count={state.powerups.bomba}
            disabled={
              state.respondida ||
              state.powerups.bomba <= 0 ||
              state.bombadasQuestaoAtual ||
              scissorsActive ||
              pularAnimating ||
              bombaActive
            }
            onPress={handleBomba}
          />
```

Update the Eliminar and Pular buttons' `disabled` props to also account for
`bombaActive` (so all three power-ups are mutually exclusive while any
animation runs) — around lines 319-325 and 333:

```tsx
            disabled={
              state.respondida ||
              state.powerups.eliminar <= 0 ||
              state.eliminadasQuestaoAtual ||
              scissorsActive ||
              pularAnimating ||
              bombaActive
            }
```

```tsx
            disabled={state.respondida || state.powerups.pular <= 0 || pularAnimating || scissorsActive || bombaActive}
```

Also guard `handleEliminar` and `handlePular`'s early-return conditions
(lines 130 and 176) to include `bombaActive`:

```tsx
  const handleEliminar = async () => {
    if (scissorsActive || pularAnimating || bombaActive) return;
```

```tsx
  const handlePular = async () => {
    if (state.respondida || state.powerups.pular <= 0 || pularAnimating || scissorsActive || bombaActive) return;
```

Add styles for the new overlay, alongside `scissorsOverlay`/`paraquedasOverlay`
(around line 391-392):

```tsx
  bombaOverlay: { position: "absolute", left: "50%", marginLeft: -ICON_SIZE / 2, top: 0 },
  explosaoOverlay: { position: "absolute", left: "50%", marginLeft: -20, top: 0, alignItems: "center", justifyContent: "center" },
  explosaoCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: colors.danger },
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx jest src/screens/GameScreen.test.tsx`

Expected: PASS for the new test and all pre-existing `GameScreen` tests
(confirm the Eliminar/Pular tests, which don't set `reducedMotion`, still
pass — `renderGame()`'s environment doesn't mock `AccessibilityInfo`, so
verify whether `reducedMotion` resolves `true` or `false` in the test
environment by checking how the existing `usarEliminar`-via-UI test — if any
— asserts on `eliminadas`; the new test above only asserts on `disabled`
state, which holds under either animation path).

- [ ] **Step 5: Run full test suite**

Run: `npx jest`

Expected: PASS across the whole suite — no regressions in `PowerupButton`,
`AlternativaButton`, `ResultScreen`, or other consumers of `GameContext`.

- [ ] **Step 6: Commit**

```bash
git add src/screens/GameScreen.tsx src/screens/GameScreen.test.tsx
git commit -m "feat: add Bomba power-up button and explosion animation to GameScreen"
```

---

## Self-Review Notes

- **Spec coverage:** state model (Task 1), icon (Task 2), UI + animation +
  mutual-exclusion with other power-ups (Task 3), tests for all of the
  above — all spec sections have a corresponding task.
- **Type consistency:** `usarBomba(): number[]` matches `usarEliminar`'s
  signature and is added to `GameContextValue` in Task 1, then consumed with
  that exact name/signature in Task 3.
- **No placeholders:** every step includes literal code to write, not a
  description of intent.
