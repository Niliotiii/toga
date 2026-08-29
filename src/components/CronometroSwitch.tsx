import { useState, useEffect } from "react";
import { Pressable, View, Text, StyleSheet, TextInput } from "react-native";
import { colors, radius, spacing } from "../theme/tokens";

interface Props {
  active: boolean;
  onToggle: () => void;
  tempo: number;
  onTempoSubmit: (val: number) => void;
}

export function CronometroSwitch({ active, onToggle, tempo, onTempoSubmit }: Props) {
  const [localTempo, setLocalTempo] = useState(tempo.toString());

  useEffect(() => {
    setLocalTempo(tempo.toString());
  }, [tempo]);

  const handleBlur = () => {
    let parsed = parseInt(localTempo, 10);
    if (isNaN(parsed)) {
      parsed = tempo;
    } else {
      parsed = Math.max(10, Math.min(300, parsed));
    }
    setLocalTempo(parsed.toString());
    onTempoSubmit(parsed);
  };
  return (
    <Pressable
      onPress={onToggle}
      style={styles.row}
      accessibilityRole="switch"
      accessibilityState={{ checked: active }}
    >
      <View>
        <Text style={styles.title}>Contrarrelógio</Text>
        <View style={styles.tempoRow}>
          <TextInput
            style={[styles.input, !active && styles.inputDisabled]}
            value={localTempo}
            onChangeText={setLocalTempo}
            onBlur={handleBlur}
            keyboardType="numeric"
            editable={active}
            selectTextOnFocus
          />
          <Text style={styles.sub}>s por questão</Text>
        </View>
      </View>
      <View style={[styles.track, active && styles.trackOn]}>
        <View style={[styles.thumb, active && styles.thumbOn]} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: spacing.md, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, backgroundColor: colors.surface, minHeight: 44 },
  title: { fontSize: 14.5, fontWeight: "600", color: colors.fg },
  sub: { fontSize: 12, color: colors.muted },
  tempoRow: { flexDirection: "row", alignItems: "center", marginTop: 2 },
  input: {
    fontSize: 12,
    color: colors.fg,
    fontWeight: "600",
    paddingVertical: 0,
    paddingHorizontal: 4,
    minWidth: 28,
    textAlign: "center",
    backgroundColor: colors.bg,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 4
  },
  inputDisabled: { opacity: 0.5 },
  track: { width: 44, height: 26, borderRadius: radius.pill, backgroundColor: colors.border, justifyContent: "center" },
  trackOn: { backgroundColor: colors.accent },
  thumb: { width: 22, height: 22, borderRadius: 11, backgroundColor: "#fff", marginLeft: 2 },
  thumbOn: { marginLeft: 20 }
});
