// Lógica compartilhada do microapp — 100% offline (localStorage simula AsyncStorage)
(function () {
  'use strict';

  var HIST_KEY = '@app_direito_historico';
  var META_KEY = '@app_direito_meta_diaria';
  var CRONOMETRO_KEY = '@app_direito_cronometro';
  var ROUND_SIZE = 5;
  var META_ALVO = 15;
  var TEMPO_QUESTAO = 20;
  var POWERUP_MAX = 2;

  var TEMAS = [
    'Direito Penal',
    'Constitucional',
    'Direito Civil',
    'Direito Administrativo',
  ];
  var DIFICULDADES = [
    { value: 'facil', label: 'Fácil' },
    { value: 'media', label: 'Média' },
    { value: 'dificil', label: 'Difícil' },
  ];

  // Identidade visual por categoria — cor + ícone monoline próprios.
  var TEMA_INFO = {
    'Direito Penal': {
      color: '#a53e00',
      iconInner:
        '<g transform="rotate(-45 12 12)"><rect x="7.5" y="4" width="9" height="5.5" rx="1.6"/><line x1="12" y1="9.5" x2="12" y2="16.5"/></g><line x1="6" y1="20" x2="18" y2="20"/>',
    },
    Constitucional: {
      color: '#724aab',
      iconInner:
        '<path d="M12 4.5c-1.8-1-4.3-1.4-6-1v13.5c1.7-.4 4.2 0 6 1 1.8-1 4.3-1.4 6-1V3.5c-1.7-.4-4.2 0-6 1z"/><line x1="12" y1="4.5" x2="12" y2="18"/>',
    },
    'Direito Civil': {
      color: '#007a5f',
      iconInner:
        '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="15.5" x2="15" y2="15.5"/>',
    },
    'Direito Administrativo': {
      color: '#33607e',
      iconInner:
        '<rect x="3.5" y="8.5" width="17" height="11" rx="1.8"/><path d="M8.5 8.5V6.3A2.3 2.3 0 0 1 10.8 4h2.4a2.3 2.3 0 0 1 2.3 2.3v2.2"/><line x1="3.5" y1="13.5" x2="20.5" y2="13.5"/>',
    },
  };

  var FRASES = {
    acerto: ['Boa!', 'Isso aí!', 'Mandou bem!', 'Show de bola!'],
    erro: ['Quase!', 'Próxima você pega!', 'Segue o jogo.'],
    tempo: ['O tempo voou!', 'Foi por pouco!'],
    powerup: ['Power-up liberado!'],
  };

  var TIERS = [
    { min: 100, headline: 'Impecável.', tag: 'perfect' },
    { min: 80, headline: 'Mandou muito bem!', tag: 'great' },
    { min: 60, headline: 'Bom trabalho!', tag: 'good' },
    { min: 40, headline: 'Quase lá.', tag: 'meh' },
    { min: 0, headline: 'Vamos tentar de novo?', tag: 'low' },
  ];

  var state = {
    tema: 'Direito Penal',
    dificuldade: 'media',
    rodada: [],
    indice: 0,
    acertos: 0,
    combo: 0,
    comboMax: 0,
    respondida: false,
    cronometroAtivo: false,
    powerups: { pular: 1, eliminar: 1 },
    eliminadasQuestaoAtual: false,
  };

  var timerHandle = null;
  var timerRestante = 0;
  var mascotTimeout = null;

  function $(id) {
    return document.getElementById(id);
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }
  function slug(s) {
    return s
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/\s+/g, '-');
  }

  function screen(name) {
    ['home', 'game', 'result', 'history'].forEach(function (s) {
      var el = $('screen-' + s);
      if (el) el.classList.toggle('is-active', s === name);
    });
    window.scrollTo(0, 0);
  }

  function temaIconSvg(tema, size) {
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', String(size));
    svg.setAttribute('height', String(size));
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '1.7');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = (TEMA_INFO[tema] && TEMA_INFO[tema].iconInner) || '';
    return svg;
  }

  // ---------- Home ----------
  function buildHome() {
    var temaWrap = $('tema-options');
    var difWrap = $('dificuldade-options');
    if (!temaWrap || !difWrap) return;

    temaWrap.innerHTML = '';
    TEMAS.forEach(function (t) {
      var info = TEMA_INFO[t];
      var b = document.createElement('button');
      b.type = 'button';
      b.className =
        'chip chip--tema' + (t === state.tema ? ' is-selected' : '');
      b.setAttribute('data-od-id', 'tema-chip-' + slug(t));
      if (t === state.tema && info) {
        b.style.setProperty('--tema-color', info.color);
        b.style.setProperty(
          '--tema-tint',
          'color-mix(in srgb, ' + info.color + ' 14%, white)',
        );
      }
      var icon = temaIconSvg(t, 16);
      icon.classList.add('chip-icon');
      b.appendChild(icon);
      var label = document.createElement('span');
      label.textContent = t;
      b.appendChild(label);
      b.addEventListener('click', function () {
        state.tema = t;
        buildHome();
      });
      temaWrap.appendChild(b);
    });

    difWrap.innerHTML = '';
    DIFICULDADES.forEach(function (d) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className =
        'chip chip--dif chip--' +
        d.value +
        (d.value === state.dificuldade ? ' is-selected' : '');
      b.textContent = d.label;
      b.setAttribute('data-od-id', 'dificuldade-chip-' + d.value);
      b.addEventListener('click', function () {
        state.dificuldade = d.value;
        buildHome();
      });
      difWrap.appendChild(b);
    });

    var pool = window.QUESTOES_DB.filter(function (q) {
      return q.tema === state.tema && q.dificuldade === state.dificuldade;
    });
    var countEl = $('pool-count');
    if (countEl) {
      countEl.textContent = pool.length + ' questões disponíveis nesse filtro';
    }
    var startBtn = $('btn-iniciar');
    if (startBtn) startBtn.disabled = pool.length === 0;

    renderMetaDiaria();
    renderToggleCronometro();
  }

  function sortearTemaEDificuldade() {
    var combos = [];
    TEMAS.forEach(function (t) {
      DIFICULDADES.forEach(function (d) {
        var count = window.QUESTOES_DB.filter(function (q) {
          return q.tema === t && q.dificuldade === d.value;
        }).length;
        if (count > 0) combos.push({ tema: t, dificuldade: d.value });
      });
    });
    if (!combos.length) return;

    var escolha = combos[Math.floor(Math.random() * combos.length)];
    state.tema = escolha.tema;
    state.dificuldade = escolha.dificuldade;
    buildHome();

    var icon = $('dice-icon');
    if (icon) {
      icon.classList.remove('is-spinning');
      void icon.offsetWidth;
      icon.classList.add('is-spinning');
    }
    var temaChip = document.querySelector(
      '[data-od-id="tema-chip-' + slug(escolha.tema) + '"]',
    );
    var difChip = document.querySelector(
      '[data-od-id="dificuldade-chip-' + escolha.dificuldade + '"]',
    );
    [temaChip, difChip].forEach(function (el) {
      if (!el) return;
      el.classList.remove('just-picked');
      void el.offsetWidth;
      el.classList.add('just-picked');
    });
  }

  // ---------- Meta diária ----------
  function hojeStr() {
    return new Date().toISOString().slice(0, 10);
  }

  function lerMeta() {
    try {
      var raw = JSON.parse(localStorage.getItem(META_KEY) || 'null');
      if (!raw || raw.data !== hojeStr())
        return { data: hojeStr(), respondidas: 0 };
      return raw;
    } catch (e) {
      return { data: hojeStr(), respondidas: 0 };
    }
  }

  function registrarRespostaMeta() {
    try {
      var m = lerMeta();
      m.respondidas++;
      localStorage.setItem(META_KEY, JSON.stringify(m));
    } catch (e) {
      // armazenamento indisponível — meta some da sessão, mas não trava o app
    }
  }

  function renderMetaDiaria() {
    var m = lerMeta();
    var pct = Math.min(100, Math.round((m.respondidas / META_ALVO) * 100));
    var fill = $('meta-fill');
    var label = $('meta-label');
    var card = $('meta-diaria');
    if (fill) fill.style.width = pct + '%';
    if (label)
      label.textContent =
        Math.min(m.respondidas, META_ALVO) + ' / ' + META_ALVO + ' hoje';
    if (card) card.classList.toggle('is-complete', m.respondidas >= META_ALVO);
  }

  // ---------- Cronômetro ----------
  function lerCronometroPref() {
    try {
      return localStorage.getItem(CRONOMETRO_KEY) === '1';
    } catch (e) {
      return false;
    }
  }
  function salvarCronometroPref(v) {
    try {
      localStorage.setItem(CRONOMETRO_KEY, v ? '1' : '0');
    } catch (e) {}
  }
  function renderToggleCronometro() {
    var btn = $('toggle-cronometro');
    if (!btn) return;
    btn.classList.toggle('is-on', state.cronometroAtivo);
    btn.setAttribute('aria-checked', state.cronometroAtivo ? 'true' : 'false');
  }
  function iniciarCronometro(q) {
    timerRestante = TEMPO_QUESTAO;
    atualizarTimerUI();
    timerHandle = setInterval(function () {
      timerRestante -= 0.1;
      if (timerRestante <= 0) {
        timerRestante = 0;
        atualizarTimerUI();
        pararCronometro();
        responder(-1, q);
        return;
      }
      atualizarTimerUI();
    }, 100);
  }
  function pararCronometro() {
    if (timerHandle) {
      clearInterval(timerHandle);
      timerHandle = null;
    }
  }
  function atualizarTimerUI() {
    var fill = $('timer-fill');
    var num = $('timer-num');
    var pct = Math.max(0, (timerRestante / TEMPO_QUESTAO) * 100);
    if (fill) {
      fill.style.width = pct + '%';
      fill.classList.toggle('is-urgent', timerRestante <= 5);
    }
    if (num) num.textContent = String(Math.ceil(timerRestante));
  }

  // ---------- Mascote ----------
  function reagirMascote(tipo) {
    var bubble = $('mascot-bubble');
    var avatar = $('mascot-avatar');
    var wrap = $('mascot');
    var frases = FRASES[tipo];
    if (!bubble || !avatar || !wrap || !frases || !frases.length) return;
    bubble.textContent = frases[Math.floor(Math.random() * frases.length)];
    wrap.classList.add('is-visible');
    avatar.classList.remove('is-happy', 'is-sad');
    void avatar.offsetWidth;
    avatar.classList.add(
      tipo === 'acerto' || tipo === 'powerup' ? 'is-happy' : 'is-sad',
    );
    clearTimeout(mascotTimeout);
    mascotTimeout = setTimeout(function () {
      bubble.textContent = '';
    }, 2200);
  }

  // ---------- Power-ups ----------
  function resetPowerups() {
    state.powerups = { pular: 1, eliminar: 1 };
    state.eliminadasQuestaoAtual = false;
  }

  function concederPowerupSeElegivel() {
    if (
      state.combo > 0 &&
      state.combo % 3 === 0 &&
      state.powerups.eliminar < POWERUP_MAX
    ) {
      state.powerups.eliminar++;
      reagirMascote('powerup');
    }
  }

  function renderPowerups() {
    var btnPular = $('btn-powerup-pular');
    var btnEliminar = $('btn-powerup-eliminar');
    var countPular = $('powerup-pular-count');
    var countEliminar = $('powerup-eliminar-count');
    if (btnPular)
      btnPular.disabled = state.respondida || state.powerups.pular <= 0;
    if (btnEliminar)
      btnEliminar.disabled =
        state.respondida ||
        state.powerups.eliminar <= 0 ||
        state.eliminadasQuestaoAtual;
    if (countPular) countPular.textContent = String(state.powerups.pular);
    if (countEliminar)
      countEliminar.textContent = String(state.powerups.eliminar);
  }

  function usarPular() {
    if (state.respondida || state.powerups.pular <= 0) return;
    state.powerups.pular--;
    state.respondida = true;
    pararCronometro();
    var buttons = $('game-alternativas').querySelectorAll('.alt');
    buttons.forEach(function (b) {
      b.disabled = true;
    });
    var proxima = $('btn-proxima');
    proxima.textContent =
      state.indice + 1 < state.rodada.length
        ? 'Próxima questão'
        : 'Ver resultado';
    proxima.classList.add('is-visible');
    renderPowerups();
  }

  function usarEliminar() {
    var q = state.rodada[state.indice];
    if (
      state.respondida ||
      state.powerups.eliminar <= 0 ||
      state.eliminadasQuestaoAtual ||
      !q
    )
      return;
    state.powerups.eliminar--;
    state.eliminadasQuestaoAtual = true;
    var errados = [];
    q.alternativas.forEach(function (_, idx) {
      if (idx !== q.resposta_correta) errados.push(idx);
    });
    var remover = shuffle(errados).slice(0, 2);
    var buttons = $('game-alternativas').querySelectorAll('.alt');
    remover.forEach(function (idx) {
      buttons[idx].disabled = true;
      buttons[idx].classList.add('is-eliminada');
    });
    renderPowerups();
  }

  // ---------- Game ----------
  function iniciarRodada() {
    var pool = window.QUESTOES_DB.filter(function (q) {
      return q.tema === state.tema && q.dificuldade === state.dificuldade;
    });
    state.rodada = shuffle(pool).slice(0, Math.min(ROUND_SIZE, pool.length));
    state.indice = 0;
    state.acertos = 0;
    state.combo = 0;
    state.comboMax = 0;
    state.respondida = false;
    resetPowerups();
    screen('game');
    renderQuestao();
  }

  function renderQuestao() {
    var q = state.rodada[state.indice];
    if (!q) return;
    state.respondida = false;
    state.eliminadasQuestaoAtual = false;

    $('game-progress').textContent =
      'Questão ' + (state.indice + 1) + ' de ' + state.rodada.length;
    var temaDot = $('game-tema-dot');
    if (temaDot)
      temaDot.style.background =
        (TEMA_INFO[state.tema] && TEMA_INFO[state.tema].color) ||
        'var(--muted)';
    $('game-combo').textContent = 'Combo ' + state.combo;
    $('game-combo').classList.toggle('is-hot', state.combo >= 2);
    $('game-fonte').textContent = q.fonte;
    $('game-enunciado').textContent = q.enunciado;

    var barFill = $('game-progress-fill');
    if (barFill)
      barFill.style.width = (state.indice / state.rodada.length) * 100 + '%';

    var wrap = $('game-alternativas');
    wrap.innerHTML = '';
    q.alternativas.forEach(function (alt, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'alt';
      b.setAttribute('data-od-id', 'alternativa-' + i);
      var letra = document.createElement('span');
      letra.className = 'alt-letra';
      letra.textContent = String.fromCharCode(65 + i);
      var texto = document.createElement('span');
      texto.className = 'alt-texto';
      texto.textContent = alt;
      b.appendChild(letra);
      b.appendChild(texto);
      b.addEventListener('click', function () {
        responder(i, q);
      });
      wrap.appendChild(b);
    });

    $('btn-proxima').classList.remove('is-visible');
    var mascotWrap = $('mascot');
    if (mascotWrap) mascotWrap.classList.remove('is-visible');
    var bubble = $('mascot-bubble');
    if (bubble) bubble.textContent = '';

    pararCronometro();
    var timerWrap = $('timer-wrap');
    if (timerWrap)
      timerWrap.classList.toggle('is-active', state.cronometroAtivo);
    if (state.cronometroAtivo) iniciarCronometro(q);

    renderPowerups();
  }

  function responder(i, q) {
    if (state.respondida) return;
    state.respondida = true;
    pararCronometro();
    registrarRespostaMeta();

    var buttons = $('game-alternativas').querySelectorAll('.alt');
    var acertou = i === q.resposta_correta;

    buttons.forEach(function (b, idx) {
      b.disabled = true;
      if (idx === q.resposta_correta) b.classList.add('is-correct');
      else if (idx === i) b.classList.add('is-wrong');
    });

    if (acertou) {
      state.acertos++;
      state.combo++;
      if (state.combo > state.comboMax) state.comboMax = state.combo;
      reagirMascote('acerto');
      concederPowerupSeElegivel();
    } else {
      state.combo = 0;
      reagirMascote(i === -1 ? 'tempo' : 'erro');
    }
    $('game-combo').textContent = 'Combo ' + state.combo;
    $('game-combo').classList.toggle('is-hot', state.combo >= 2);
    renderPowerups();

    var proxima = $('btn-proxima');
    proxima.textContent =
      state.indice + 1 < state.rodada.length
        ? 'Próxima questão'
        : 'Ver resultado';
    proxima.classList.add('is-visible');
  }

  function avancar() {
    state.indice++;
    if (state.indice >= state.rodada.length) {
      finalizarRodada();
    } else {
      renderQuestao();
    }
  }

  // ---------- Result ----------
  function tierFor(pct) {
    for (var i = 0; i < TIERS.length; i++)
      if (pct >= TIERS[i].min) return TIERS[i];
    return TIERS[TIERS.length - 1];
  }

  function finalizarRodada() {
    pararCronometro();
    var total = state.rodada.length;
    var pct = total ? Math.round((state.acertos / total) * 100) : 0;
    var estrelas = pct >= 90 ? 3 : pct >= 60 ? 2 : pct > 0 ? 1 : 0;

    var historicoAntes = lerHistorico();
    var melhorAnterior = historicoAntes
      .filter(function (r) {
        return r.tema === state.tema && r.dificuldade === state.dificuldade;
      })
      .reduce(function (max, r) {
        return Math.max(max, r.aproveitamento);
      }, -1);
    var recorde = melhorAnterior >= 0 && pct > melhorAnterior;

    var tier = tierFor(pct);
    var headlineEl = $('result-headline');
    if (headlineEl) headlineEl.textContent = tier.headline;
    var recordeEl = $('result-recorde');
    if (recordeEl) recordeEl.classList.toggle('is-visible', recorde);
    var mascotResult = $('result-mascot');
    if (mascotResult) {
      mascotResult.className = 'result-mascot tier-' + tier.tag;
    }

    $('result-score').textContent = state.acertos + ' / ' + total;
    $('result-pct').textContent = pct + '%';
    renderResultTema();

    var starsWrap = $('result-stars');
    starsWrap.innerHTML = '';
    for (var s = 0; s < 3; s++) {
      var svg = starSvg(s < estrelas);
      starsWrap.appendChild(svg);
    }

    var confetti = $('result-confetti');
    confetti.innerHTML = '';
    confetti.classList.toggle('is-active', pct > 70);
    if (pct > 70) {
      for (var c = 0; c < 24; c++) {
        var piece = document.createElement('i');
        piece.style.left = Math.random() * 100 + '%';
        piece.style.animationDelay = Math.random() * 0.6 + 's';
        piece.style.background =
          c % 2 === 0 ? 'var(--accent)' : 'var(--success)';
        confetti.appendChild(piece);
      }
    }

    screen('result');
    salvarHistorico(total, pct);
  }

  function renderResultTema() {
    var el = $('result-tema');
    if (!el) return;
    el.innerHTML = '';
    var dot = document.createElement('span');
    dot.className = 'tema-dot';
    dot.style.background =
      (TEMA_INFO[state.tema] && TEMA_INFO[state.tema].color) || 'var(--muted)';
    el.appendChild(dot);
    var difLabel = DIFICULDADES.filter(function (d) {
      return d.value === state.dificuldade;
    })[0].label;
    el.appendChild(document.createTextNode(state.tema + ' · ' + difLabel));
  }

  function starSvg(filled) {
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', '36');
    svg.setAttribute('height', '36');
    svg.setAttribute('class', 'star' + (filled ? ' is-filled' : ''));
    var path = document.createElementNS(ns, 'path');
    path.setAttribute(
      'd',
      'M12 2.5l2.9 6.1 6.6.7-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.2 1.3-6.6-4.9-4.6 6.6-.7L12 2.5z',
    );
    path.setAttribute('fill', filled ? 'currentColor' : 'none');
    path.setAttribute('stroke', 'currentColor');
    path.setAttribute('stroke-width', '1.6');
    path.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(path);
    return svg;
  }

  function salvarHistorico(total, pct) {
    try {
      var hist = lerHistorico();
      hist.unshift({
        id_rodada: String(Date.now()),
        data_hora: new Date().toISOString(),
        tema: state.tema,
        dificuldade: state.dificuldade,
        questoes_total: total,
        acertos: state.acertos,
        aproveitamento: pct,
      });
      localStorage.setItem(HIST_KEY, JSON.stringify(hist));
    } catch (e) {
      // armazenamento indisponível (ex.: preview em iframe restrito) — não deve travar a tela de resultado
    }
  }

  function lerHistorico() {
    try {
      return JSON.parse(localStorage.getItem(HIST_KEY) || '[]');
    } catch (e) {
      return [];
    }
  }

  // ---------- History ----------
  var DIF_LABEL = { facil: 'Fácil', media: 'Média', dificil: 'Difícil' };

  function renderHistorico() {
    var hist = lerHistorico();
    var wrap = $('history-list');
    var empty = $('history-empty');
    wrap.innerHTML = '';

    if (!hist.length) {
      empty.classList.add('is-active');
      return;
    }
    empty.classList.remove('is-active');

    hist.forEach(function (r) {
      var card = document.createElement('div');
      card.className = 'hist-card';
      card.setAttribute('data-od-id', 'historico-card-' + r.id_rodada);

      var d = new Date(r.data_hora);
      var dataFmt =
        d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }) +
        ' · ' +
        d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      var corTema =
        (TEMA_INFO[r.tema] && TEMA_INFO[r.tema].color) || 'var(--muted)';

      card.innerHTML =
        '<div class="hist-card-top">' +
        '<span class="hist-tema"><span class="tema-dot" style="background:' +
        corTema +
        '"></span>' +
        r.tema +
        '</span>' +
        '<span class="hist-dif hist-dif--' +
        r.dificuldade +
        '">' +
        (DIF_LABEL[r.dificuldade] || r.dificuldade) +
        '</span>' +
        '</div>' +
        '<div class="hist-card-bottom">' +
        '<span class="hist-data">' +
        dataFmt +
        '</span>' +
        '<span class="hist-score">' +
        r.acertos +
        '/' +
        r.questoes_total +
        ' · ' +
        r.aproveitamento +
        '%</span>' +
        '</div>' +
        '<div class="hist-bar"><i style="width:' +
        r.aproveitamento +
        '%"></i></div>';
      wrap.appendChild(card);
    });
  }

  // ---------- Wiring ----------
  function init() {
    state.cronometroAtivo = lerCronometroPref();
    buildHome();

    $('btn-iniciar').addEventListener('click', iniciarRodada);
    $('btn-ver-historico').addEventListener('click', function () {
      renderHistorico();
      screen('history');
    });
    $('btn-proxima').addEventListener('click', avancar);
    $('btn-jogar-novamente').addEventListener('click', function () {
      buildHome();
      iniciarRodada();
    });
    $('btn-voltar-inicio').addEventListener('click', function () {
      buildHome();
      screen('home');
    });
    $('btn-historico-voltar').addEventListener('click', function () {
      screen('home');
    });
    var toggleCronometro = $('toggle-cronometro');
    if (toggleCronometro) {
      toggleCronometro.addEventListener('click', function () {
        state.cronometroAtivo = !state.cronometroAtivo;
        salvarCronometroPref(state.cronometroAtivo);
        renderToggleCronometro();
      });
    }
    var btnPular = $('btn-powerup-pular');
    if (btnPular) btnPular.addEventListener('click', usarPular);
    var btnEliminar = $('btn-powerup-eliminar');
    if (btnEliminar) btnEliminar.addEventListener('click', usarEliminar);
    var btnAleatorio = $('btn-aleatorio');
    if (btnAleatorio)
      btnAleatorio.addEventListener('click', sortearTemaEDificuldade);

    screen('home');
  }

  document.addEventListener('DOMContentLoaded', init);
})();
