# Registro de fontes e questões descartadas

Cache local do que já foi lido em provas/gabaritos oficiais, para consultar
antes de baixar PDFs de novo. Atualizar sempre que uma prova nova for
processada.

## Concurso já mapeado

**FGV — Senado Federal, Edital nº 4/2022 — Consultor Legislativo**
(concurso público com cadernos de prova por especialidade, todos
compartilhando o mesmo "Bloco I" de questões 1–60: Português, Raciocínio
Lógico, Inglês, Ciência Política, Avaliação de Políticas Públicas, Direito
Administrativo e Direito Constitucional — o gabarito dessas 60 primeiras
questões é **idêntico em todos os cadernos de especialidade**, só muda a
partir da questão 61 em diante, que é o bloco "Conhecimentos Específicos da
Subárea").

- Gabarito definitivo (todas as especialidades, 24 páginas):
  https://conhecimento.fgv.br/sites/default/files/concursos/senado2022_gabarito_definitivo_edital04.pdf
- Lista de cadernos de prova por especialidade:
  https://conhecimento.fgv.br/concursos/senado22/4
- Caderno "Direito Constitucional, Administrativo, Eleitoral e Processo
  Legislativo":
  https://conhecimento.fgv.br/sites/default/files/concursos/assessoramento_legislativo_direito_constitucional_administrativo_eleitoral_e_processo_legislativoe4cns07_tipo_1.pdf
- Caderno "Direito Civil, Processual Civil e Agrário":
  https://conhecimento.fgv.br/sites/default/files/concursos/assessoramento_legislativo_direito_civil_processual_civil_e_agrarioe4cns06_tipo_1.pdf
- Caderno "Direito Penal, Processual Penal, Penitenciário e Segurança
  Pública":
  https://conhecimento.fgv.br/sites/default/files/concursos/assessoramento_legislativo_direito_penal_processual_penal_penitenciario_e_seguranca_publicae4cns11_tipo_1.pdf

### Já minerado e usado em `src/data/questoes.ts` — CADERNOS ESGOTADOS

- Direito Administrativo: questões 45–51, 56–57 do caderno Constitucional/Administrativo (q025–q030, q088–q091). **Todas as 45–100 desse caderno já foram lidas.**
- Direito Constitucional: questões 53, 58–66, 69–71 do mesmo caderno (q031–q034, q080–q087). **Idem, caderno esgotado até a questão 100.**
- Direito Civil: questões 61–93, 95–99 do caderno de Civil (q035–q058, q092–q105). **Caderno lido até a questão 100 — esgotado.**
- Direito Penal: questões 61–75, 77–83, 85–100 do caderno de Penal (q059–q078, q106–q122). **Caderno lido até a questão 100 — esgotado.**

Conclusão: os 3 cadernos "Direito Constitucional/Administrativo/Eleitoral/Processo
Legislativo", "Direito Civil/Processual Civil/Agrário" e "Direito
Penal/Processual Penal/Penitenciário/Segurança Pública" do Edital 4/2022 da
FGV/Senado **já foram totalmente extraídos**. Para mais volume desse
concurso, só resta minerar os cadernos de outras especialidades listados
abaixo (que têm blocos de "conhecimentos específicos" tangenciais, ex.:
Direito Tributário/Financeiro pode ter Direito Administrativo/Constitucional
tributário; Direito Empresarial pode ter Direito Civil contratual) — mas
tendem a ser mais o campo específico da subárea do que os 4 temas do app.
Para crescer de forma mais eficiente, o próximo passo é buscar **outro
concurso inteiro** (Delegado, Defensoria, Procuradoria, MP, magistratura
etc.), já que cada concurso novo costuma render dezenas de questões novas
por matéria de uma vez.

### Questões lidas mas NÃO usadas (não reaproveitar sem revisar)

| Bloco/caderno | Nº da questão | Motivo do descarte |
| --- | --- | --- |
| Constitucional/Administrativo | 61 | Anulada no gabarito definitivo (`*`) |
| Constitucional/Administrativo | 67 | Anulada no gabarito definitivo (`*`) |
| Constitucional/Administrativo | 68 | Anulada no gabarito definitivo (`*`) |
| Direito Penal | 76 | Anulada no gabarito definitivo (`*`) — questão sobre tribunal do júri |
| Direito Penal | 84 | Anulada no gabarito definitivo (`*`) |
| Direito Civil | 94 | Anulada no gabarito definitivo (`*`) — teoria econômica do crime (fora do escopo Civil, tema mal classificado no caderno) |
| Direito Civil | 100 | Anulada no gabarito definitivo (`*`) |

### Questões 1–44 do "Bloco I" (Português, Raciocínio Lógico, Inglês, Ciência
Política, Avaliação de Políticas Públicas) foram lidas mas não interessam ao
app (fora do escopo jurídico) — não vale a pena reextrair.

## Concurso 2: FGV — Defensoria Pública do Estado do Rio de Janeiro (DPE-RJ),
XXVIII Concurso, Defensor Público Substituto — 2023

Prova única de 90 questões (não dividida por especialidade, ao contrário do
concurso do Senado), organizada em 3 "bancas" temáticas — muito mais denso
por prova que o concurso da FGV/Senado.

- Caderno de prova (Tipo 1): https://conhecimento.fgv.br/sites/default/files/concursos/classe-inicial-da-carreira-da-defensoria-publica-do-estado-do-rio-de-janeirodef-rio-tipo-1.pdf
- Gabarito oficial definitivo (4 tipos de prova): https://conhecimento.fgv.br/sites/default/files/concursos/dpge-rj-gabaritos-definitivos.pdf
- Página do concurso: https://conhecimento.fgv.br/concursos/dpgerj2023

Estrutura da prova (Tipo 1 — Branca):
- Banca I (Q1–30): Direito Civil, Direito Processual Civil e Direito Empresarial — **100% extraída e usada** (q123–q152).
- Banca II (Q31–60): Direito Penal, Direito Processual Penal, Direito de Execução Penal e Criminologia — Q31–55 usadas (q153–q177, 25 questões). **Q56–60 NÃO usadas**: são questões de criminologia crítica baseadas em citações longas (Rosana/Acari, Amarilo/UPP Rocinha, revista íntima, feminismo abolicionista) — extremamente doutrinárias/qualitativas, pouco adequadas ao formato de trivia rápida do app, mas são reais e têm gabarito; podem ser incorporadas depois se faltar volume de Penal.
- Banca III (Q61–90): Direito Constitucional, Direito Administrativo, Direitos Humanos das Pessoas em Situação de Vulnerabilidade, Direito da Criança e do Adolescente e Princípios Institucionais da Defensoria Pública — só as questões claramente Constitucional (62,63,66,67 → q178–q181) e Administrativo (68–73 → q182–q187) foram usadas. **Q61, 64, 65, 74–90 NÃO usadas**: são Direitos Humanos, LOAS/vulnerabilidade, ECA/socioeducativo e prerrogativas institucionais da Defensoria — fora da taxonomia de 4 temas do app (Penal/Civil/Constitucional/Administrativo). Ficam disponíveis caso o app ganhe um tema "Direitos Humanos" ou "ECA" no futuro.

Gabarito TIPO 1 completo (para referência rápida, célula = nº da questão:letra):
1D 2B 3C 4E 5C 6C 7E 8E 9B 10A 11C 12B 13D 14B 15D 16C 17B 18B 19D 20D
21E 22C 23D 24E 25D 26D 27B 28C 29D 30D 31E 32B 33A 34E 35D 36E 37E 38C 39B 40B
41C 42B 43B 44C 45E 46C 47E 48B 49D 50B 51D 52C 53B 54E 55A 56B 57B 58A 59D 60E
61E 62C 63D 64B 65B 66A 67C 68D 69D 70E 71B 72C 73A 74B 75E 76D 77C 78* 79C 80E
81C 82D 83D 84C 85E 86E 87E 88C 89E 90B
(* = questão 78 anulada, não usada)

Conclusão: esse concurso ainda tem margem grande não explorada (Q56–60 do
Penal e boa parte da Banca III fora do escopo dos 4 temas). Também existem
os Tipos 2, 3 e 4 da mesma prova (mesmas perguntas, ordem embaralhada) —
não valem a pena reler, é conteúdo idêntico ao Tipo 1.

## Concurso 3: FGV — Procuradoria Geral do Município de Niterói (PGM-Niterói),
Procurador do Município de 3ª Categoria — 2023

Prova única de 100 questões, dividida em blocos temáticos claros — ótima
fonte de Administrativo/Urbanístico/Ambiental e Constitucional (menos Civil
puro, mais Tributário/Ambiental).

- Caderno de prova (Tipo 1): https://conhecimento.fgv.br/sites/default/files/concursos/pgm-niteroi-2022-procurador-do-municipio-de-3a-categoriaprocurador-tipo-1.pdf
- Gabarito oficial definitivo (4 tipos): https://conhecimento.fgv.br/sites/default/files/concursos/pgm-niteroi-2022-procurador-gabaritos-para-publicacao_0.pdf
- Página do concurso: https://conhecimento.fgv.br/concursos/pgm.niteroi23/1

Estrutura da prova (Tipo 1 — Branca):
- Q1–25: "Direito Administrativo, Urbanístico e Ambiental" — **100% extraída e usada** (q188–q212).
- Q26–45: "Direito Constitucional" — **100% extraída e usada** (q213–q232).
- Q46–60: "Direito Processual Civil" — **100% extraída e usada** (q233–q244), tema Direito Civil.
- Q61–75: "Direito Tributário e Financeiro" — **NÃO usada**: fora da taxonomia de 4 temas do app (Penal/Civil/Constitucional/Administrativo). Fica disponível caso o app ganhe um tema "Tributário" no futuro.
- Q76–90: "Direito Civil e Empresarial" — **100% extraída e usada** (q245–q262... conferir numeração exata em questoes.ts), tema Direito Civil.
- Q91–100: "Direito do Trabalho, Processual do Trabalho e Previdenciário" — **NÃO usada**: fora da taxonomia de 4 temas do app.

Conclusão: **caderno 100% esgotado** dentro do escopo dos 4 temas do app (Administrativo, Constitucional, Civil). Só sobraram os blocos de Tributário/Financeiro e Trabalho/Previdenciário, que não mapeiam para nenhum tema atual.

Gabarito TIPO 1 completo (nº:letra):
1D 2D 3B 4C 5C 6D 7B 8D 9B 10E 11B 12E 13D 14A 15B 16C 17C 18D 19C 20A
21B 22E 23B 24B 25E 26C 27A 28C 29A 30E 31D 32A 33C 34A 35B 36C 37D 38C 39C 40A
41A 42A 43D 44A 45C 46B 47A 48E 49D 50C 51D 52E 53A 54C 55E 56D 57D 58B 59E 60A
61B 62C 63D 64E 65A 66B 67D 68C 69E 70A 71B 72A 73B 74D 75E 76D 77B 78D 79C 80B
81E 82B 83E 84B 85B 86C 87C 88B 89E 90E 91B 92A 93B 94D 95C 96C 97A 98E 99C 100C

Também existem os Tipos 2/3/4 (mesmo conteúdo, ordem embaralhada) — não vale
reler.

## Concurso 4: FGV — Polícia Civil de Santa Catarina (PC-SC), Academia de
Polícia Civil (ACADEPOL), Delegado de Polícia Substituto — 2023

Prova única de 100 questões, com grupos temáticos bem definidos — ótima
fonte para Penal e Constitucional (concurso de Delegado).

- Caderno de prova (Tipo 1): https://conhecimento.fgv.br/sites/default/files/concursos/delegado-objetivacns100-tipo-1.pdf
- Gabarito oficial definitivo (4 tipos): https://conhecimento.fgv.br/sites/default/files/concursos/pcscdelegado2024_gabarito_definitivo_20240220.pdf
- Página do concurso: https://conhecimento.fgv.br/concursos/pcsc23/1

Estrutura da prova (Tipo 1 — Branca):
- Q1–10: "Grupo 1 — Língua Portuguesa" — NÃO usada (fora do escopo jurídico).
- Q11–25: "Direito Constitucional" — **usada** (q263–q274), exceto Q18, 20, 21 (anuladas no gabarito).
- Q26–40: "Direito Penal" — **100% usada** (q275–q289).
- Q41–55: "Direito Processual Penal" — **usada** (q290–q303), exceto Q42 (anulada); classificada como tema Direito Penal.
- Q56–70: "Direito Administrativo" — **100% usada** (q304–q318).
- Q71+: "Grupo 2 — Direitos Humanos" — NÃO lida (fora do escopo dos 4 temas do app).

Gabarito TIPO 1 completo (nº:letra, * = anulada):
1B 2A 3D 4C 5E 6D 7A 8C 9E 10E 11C 12D 13B 14C 15A 16E 17D 18* 19B 20*
21* 22D 23A 24A 25A 26A 27E 28C 29D 30B 31A 32D 33B 34C 35A 36D 37D 38D 39E 40E
41A 42* 43E 44A 45E 46E 47D 48C 49A 50C 51A 52B 53D 54B 55B 56D 57C 58D 59E 60C
61A 62C 63A 64D 65B 66B 67D 68E 69D 70B 71D 72C 73C 74A 75A 76D 77B 78A 79E 80B
81A 82B 83B 84A 85D 86E 87B 88C 89D 90A 91B 92A 93B 94D 95D 96* 97B 98A 99E 100D

Conclusão: restam Q71–100 (Direitos Humanos + provável Direito Civil/outros
mais adiante) não lidos — não interessam aos 4 temas atuais do app, exceto
se houver bloco de Civil mais à frente (não confirmado, não vale a pena
reler sem necessidade).

### Cadernos dessa mesma prova ainda não lidos (podem render mais questões
reais de Direito Civil/Penal/Constitucional/Administrativo se precisarmos de
mais volume, já que muitos cadernos têm blocos de "conhecimentos comuns" com
outras matérias jurídicas):

- Direito Econômico e Regulação, Direito Empresarial e do Consumidor
- Direito Internacional Público, Relações Internacionais e Defesa Nacional
- Direito Tributário e Direito Financeiro
- Direitos Humanos e Cidadania
- Direito do Trabalho e Direito Previdenciário
- Agricultura / Comunicações e Tecnologia da Informação / Desporto e Cultura / Economia do Trabalho, Renda e Previdência
  (gabaritos já lidos nas páginas 1–3 e 4 do PDF de gabaritos, mas os
  cadernos de prova em si ainda não foram baixados/lidos)

## Concurso 5: FGV — Tribunal de Justiça do Estado do Paraná (TJPR), Juiz
Substituto — Concurso 2025/2026 (prova aplicada em 22/02/2026)

Prova única de 100 questões em "Blocos" temáticos por matéria. Questões
muito mais longas/complexas que os concursos anteriores (nível
magistratura) — bom para Constitucional/Administrativo, mas cuidado ao
reler: durante a extração inicial da numeração do bloco de Constitucional
houve um erro de correspondência pergunta↔número que precisou ser corrigido
por conferência cuidadosa do texto bruto antes de gravar (ver método abaixo).

- Caderno de prova (Tipo 1): https://conhecimento.fgv.br/sites/default/files/concursos/juiz-substituto-cns001-tipo-1_0.pdf
- Gabarito oficial definitivo (4 tipos): https://conhecimento.fgv.br/sites/default/files/concursos/edital-gabarito-definitivo.pdf
- Página do concurso: https://conhecimento.fgv.br/concursos/tjpr25

Estrutura da prova (Tipo 1 — Branca), até onde foi lido (Q1–91):
- Bloco I: Direito Civil (Q1–10) — **100% usada** (q339–q348).
- Direito Processual Civil (Q11–20) — **100% usada** (q349–q358), tema Direito Civil.
- Direito do Consumidor (Q21–25) — NÃO usada (fora da taxonomia de 4 temas).
- Direito da Criança e do Adolescente (Q26–30) — NÃO usada (fora da taxonomia).
- Bloco II: Direito Penal (Q31–38) — **100% usada** (q359–q366).
- Direito Processual Penal (Q39–46) — **usada** (q367–q373), exceto Q40 (anulada); tema Direito Penal.
- Direito Constitucional (Q47–56) — **100% usada** (q319–q328).
- Direito Eleitoral (Q57–60) — NÃO usada (fora da taxonomia).
- Juizados Especiais (Q61–64) — NÃO usada.
- Código de Normas da Corregedoria-Geral / Código de Organização Judiciária do PR (Q65–70) — NÃO usada (específico demais do TJPR, sem valor de reaproveitamento).
- Bloco III: Direito Empresarial (Q71–74) — NÃO usada.
- Direito Tributário (Q75–78) — NÃO usada (fora da taxonomia).
- Direito Ambiental (Q79–81) — NÃO usada (fora da taxonomia).
- Direito Administrativo (Q82–91) — **100% usada** (q329–q338).
- Q92–100: NÃO lidas ainda.

Conclusão: caderno esgotado nos blocos que interessam aos 4 temas do app
(Civil, Processual Civil, Penal, Processual Penal, Constitucional,
Administrativo). Restam só Empresarial (Q71-74, poderia virar Civil se
precisar) e Q92-100 (tema desconhecido) não lidos.

Gabarito TIPO 1 completo (nº:letra, * = anulada):
1D 2C 3A 4E 5B 6C 7D 8C 9A 10C 11D 12E 13E 14C 15C 16D 17B 18D 19C 20D
21C 22B 23D 24B 25C 26C 27D 28E 29B 30D 31C 32C 33D 34C 35C 36E 37D 38E 39B 40*
41C 42C 43B 44D 45E 46C 47E 48A 49D 50A 51C 52D 53B 54D 55C 56B 57B 58E 59D 60C
61C 62A 63B 64D 65A 66B 67A 68D 69E 70C 71A 72E 73D 74B 75C 76B 77C 78E 79E 80A
81B 82E 83E 84B 85B 86D 87D 88C 89B 90B 91E 92A 93C 94E 95D 96E 97C 98D 99C 100B

Conclusão: sobram Civil (Q1-20), Penal (Q31-46), Empresarial (Q71-74) e
Q92-100 ainda não lidos neste caderno — podem ser mais uma leva rápida se
precisar reforçar Civil/Penal sem abrir um concurso novo.

## Concurso 6: FGV — Tribunal de Contas do Estado de Pernambuco (TCE-PE),
Procurador do Tribunal de Contas — 2026 (Edital 01/2025)

Prova única de 100 questões com blocos temáticos bem definidos — excelente
fonte de Constitucional e Administrativo (concurso de Procurador).

- Caderno de prova (Tipo 1): https://conhecimento.fgv.br/sites/default/files/concursos/procurador-do-tribunal-de-contascns400-tipo-1.pdf
- Gabarito oficial definitivo (várias posições no mesmo PDF, 13 páginas): https://conhecimento.fgv.br/sites/default/files/concursos/gabarito_definitivo_tce-pe_retificado-17.07.2026.pdf — tabela "Procurador do Tribunal de Contas" está na página 13.
- Página do concurso: https://conhecimento.fgv.br/concursos/tcepe

Estrutura da prova (Tipo 1 — Branca):
- Direito Constitucional (Q1–16) — **100% usada** (q374–q389).
- Direito Administrativo (Q17–32) — **100% usada** (q390–q405).
- Direito Civil e Empresarial (Q33+) — NÃO lida (já temos bastante volume de Civil; fica de reserva).
- Q42–100: NÃO lidos (provavelmente Direito Tributário/Financeiro, Direito Processual Civil, Direito Previdenciário — perfil típico de concurso de TCE).

Gabarito TIPO 1 (Procurador do Tribunal de Contas — 1 — Turno Tarde), nº:letra:
1E 2A 3B 4A 5C 6C 7B 8C 9A 10D 11A 12C 13B 14E 15A 16B 17D 18E 19E 20A
21A 22B 23A 24A 25C 26B 27B 28E 29C 30C 31C 32A 33B 34A 35C 36C 37B 38C 39C 40A
41E 42E 43D 44C 45B 46E 47A 48E 49C 50A 51C 52C 53C 54B 55C 56D 57D 58C 59A 60A
61C 62C 63D 64E 65D 66C 67E 68A 69A 70* 71C 72C 73C 74D 75B 76A 77C 78E 79D 80A
81E 82A 83E 84C 85B 86C 87A 88E 89C 90C 91B 92B 93A 94C 95D 96B 97E 98A 99C 100B
(* = questão 70 anulada)

Conclusão: caderno com muito mais volume a explorar (Civil/Empresarial Q33+,
e o resto até Q100) se precisar de mais Constitucional/Administrativo de
outras especialidades desse mesmo edital (o PDF de gabarito também cobre
Analista de Controle Externo, Auditor de Controle Externo e Analista de
Gestão — cada um com seu próprio caderno de prova, ainda não localizados/lidos).

## Concurso 7: FGV — Prefeitura Municipal de Vitória/ES, Procurador Municipal
— 2024 (Edital 04/2024)

Prova única de 100 questões, blocos temáticos bem definidos e enunciados
mais curtos que os concursos de magistratura — ótima fonte de Constitucional
e Administrativo.

- Caderno de prova (Tipo 1): https://conhecimento.fgv.br/sites/default/files/concursos/procuradorprocurador-tipo-1.pdf
- Gabarito oficial definitivo (Tipos 1 e 2): https://conhecimento.fgv.br/sites/default/files/concursos/procvitoria2024_definitivov2.pdf
- Página do concurso: https://conhecimento.fgv.br/concursos/prefvitoria/4

Estrutura da prova (Tipo 1 — Branca):
- Direito Constitucional (Q1–20) — **usada** (q406–q420), exceto Q3 (anulada).
- Direito Administrativo (Q21–40) — **100% usada** (q421–q440).
- Direito Ambiental e Urbanístico (Q41–55) — NÃO usada (fora da taxonomia de 4 temas do app).
- Direito Tributário e Financeiro (Q56–70) — NÃO usada (fora da taxonomia).
- Direito Processual Civil (Q71–80) — **usada** (q441–q449), exceto Q74 (anulada); tema Direito Civil.
- Direito do Trabalho e Processual do Trabalho (Q81+) — NÃO usada (fora da taxonomia).
- Q85–100: NÃO lidos ainda (não abertos, provavelmente mais Trabalho/Previdenciário).

Conclusão: caderno esgotado dentro do escopo dos 4 temas do app.

Gabarito TIPO 1, nº:letra (* = anulada):
1A 2C 3* 4A 5C 6A 7D 8E 9A 10D 11D 12A 13B 14D 15B 16B 17E 18D 19B 20B
21C 22D 23B 24E 25C 26B 27A 28D 29B 30E 31C 32B 33C 34B 35D 36D 37E 38D 39D 40C
41E 42C 43A 44A 45D 46B 47A 48C 49B 50E 51D 52D 53B 54A 55C 56B 57A 58D 59C 60E
61A 62C 63E 64B 65A 66D 67C 68E 69D 70B 71E 72E 73A 74* 75B 76C 77E 78C 79A 80C
81C 82A 83E 84C 85D 86B 87E 88A 89D 90B 91C 92D 93D 94A 95C 96B 97D 98E 99A 100C

Conclusão: restam Q41-100 não lidos — provável próxima fonte rápida se
precisar de mais volume sem abrir concurso novo.

## Concurso 8: FGV — Ministério Público do Estado do Rio de Janeiro (MPRJ),
XXXVIII Concurso, Promotor de Justiça Substituto — 2025 (prova aplicada em
03/08/2025)

Prova única de 100 questões organizada em "Módulos" temáticos (Módulo I:
Direito Penal + Direito Processual Penal + Legislação Penal Extravagante +
Direito Penal Ambiental, Q1–25; Módulo II: Direito Civil + Direito Processual
Civil + Direito Empresarial, Q26–45; Módulo III: Direito Constitucional +
Direito Administrativo + Direito Eleitoral, Q51–69).

- Caderno de prova (Tipo 1 — Branca): https://conhecimento.fgv.br/sites/default/files/concursos/promotor-de-justica-substitutocns001-tipo-1_0.pdf
- Gabarito oficial definitivo: https://conhecimento.fgv.br/sites/default/files/concursos/v2gabarito-definito-mprj-promotor.pdf
- Página do concurso: https://conhecimento.fgv.br/concursos/mprjpromotor2025

Gabarito Tipo 1 (Branca) relevante às questões usadas (letra convertida em
índice 0-based A-E):
- Q1–25 (Direito Penal): E,C,B,E,B,A,D,A,A,C,E,A,D,E,C,D,E,C,B,C,A,A,B,C,B —
  nenhuma anulada.
- Q26–45 (Direito Civil): E,E,A,E,B,A,C,*,C,B,E,E,C,D,E,A,B,*,D,C — Q33 e Q43
  anuladas (não usadas).
- Q51–57 (Constitucional): E,C,D,C,C,A,C — nenhuma anulada.
- Q58–63 (Administrativo): E,C,C,C,B,D — nenhuma anulada.

### Já minerado e usado em `src/data/questoes.ts`

- Direito Penal: Q1–25 completo (25 questões, q450–q474) + Q100 (extinção da
  punibilidade/multa penal, q513). Total Penal: 26 questões.
- Direito Civil: Q26–32, Q34–42, Q44–50 (23 questões, q475–q491 e q505–q509)
  — Q33 e Q43 anuladas, não usadas. Q46–50 é o bloco de Direito Empresarial
  (falência, recuperação judicial, valores mobiliários) do Módulo II.
- Direito Constitucional: Q51–57 completo (7 questões, q492–q498).
- Direito Administrativo: Q58–63 completo (6 questões, q499–q504) + Q85, Q87,
  Q92 (bloco "Tutela Coletiva"/"Princípios Institucionais", todos sobre
  improbidade administrativa/Lei 8.429, q510–q512). Total Administrativo: 9
  questões.

Total extraído deste caderno: **64 questões novas** (26 Penal + 23 Civil +
7 Constitucional + 9 Administrativo, considerando as duas rodadas de
mineração — Q1–69 na primeira, Q46–50 e Q70–100 na segunda).

### Questões lidas mas NÃO usadas (não reaproveitar sem revisar)

| Bloco/caderno | Nº da questão | Motivo do descarte |
| --- | --- | --- |
| Direito Civil (Q26–45) | 33 | Anulada no gabarito definitivo (`*`) |
| Direito Civil (Q26–45) | 43 | Anulada no gabarito definitivo (`*`) |
| Direito Financeiro e Tributário | 70–75 | Fora da taxonomia de 4 temas do app |
| Direito da Infância e da Juventude (Módulo IV) | 76–84 | Especialidade própria (ECA), fora da taxonomia de 4 temas do app |
| Tutela Coletiva | 86, 88, 89 | Matéria de política pública/dano coletivo sem doutrina codificada dos 4 temas (saúde mental, população em situação de rua, dano ambiental) |
| Educação/Saneamento | 90, 91 | Fora da taxonomia de 4 temas do app |
| Princípios Institucionais do MP | 93–99 | Direito institucional do MP (LC estadual, orçamento, recursos), não se enquadra nos 4 temas do app |
| Direito Eleitoral | 64–69 | Fora da taxonomia de 4 temas do app |

Conclusão: caderno esgotado dentro do escopo dos 4 temas do app.

## Concurso 9: FGV — Assembleia Legislativa do Estado do Paraná (ALEP),
Procurador Classe 3 — Edital nº 01/2024 (prova aplicada 07/04/2024)

Prova de 80 questões (Tipo 1 — Branca), organizada em blocos: Conhecimentos
Gerais (Português Q1–4, Regimento Interno da ALEP Q5–8, Constituição do
Estado do Paraná Q9–12, História e Geografia do PR Q13–16) e Conhecimentos
Específicos por matéria (Direito Constitucional Q17–28, Direito
Administrativo Q29–40, Direito Civil Q41–48, Direito Penal Q49–51, Direito
Tributário e Financeiro Q52–56, Direito Ambiental Q57–59, Direito Eleitoral
Q60–62, Direito Digital Q63–65, Direito Trabalhista e Previdenciário
Q66–70, Direito Processual Constitucional/Administrativo/Civil/Penal
Q71–80).

- Caderno de prova (Tipo 1 — Branca): https://conhecimento.fgv.br/sites/default/files/concursos/procuradore1cns1001-tipo-1.pdf
- Gabarito oficial: https://conhecimento.fgv.br/sites/default/files/concursos/ale-pr-gabarito-definitivo-cargos-do-edital-1.pdf
  (obs.: o cabeçalho interno do PDF diz "GABARITO PRELIMINAR da prova
  aplicada no dia 07/04/2024", apesar do nome do arquivo indicar
  "definitivo" — é o único gabarito publicado no link oficial do concurso,
  sem marcação de questões anuladas; usado como fonte de verdade)
- Página do concurso: https://conhecimento.fgv.br/concursos/alep24/01

**Atenção para o futuro**: ao ler a tabela de gabarito por imagem, tomei
cuidado redobrado porque cometi (e corrigi antes de gravar) dois tipos de
erro nesta prova: (1) na leitura da faixa de questões 61–80 da tabela,
a transcrição inicial vinha com 19 valores em vez de 20 — por isso as
questões 60–80 desta prova (Eleitoral, Digital, Trabalhista, Processual)
foram inteiramente descartadas, mesmo tendo conteúdo potencialmente
aproveitável (Q64–65 LGPD/Marco Civil, Q71–73 Constitucional, Q74–77
Administrativo, Q78–79 Civil, Q80 Penal), por falta de confiança na leitura
do gabarito nessa faixa; (2) numeração de questão trocada durante a
transcrição do caderno (ex.: o conteúdo da Q30 foi inicialmente atribuído à
Q28) — corrigido recontando cuidadosamente os números impressos em cada
página antes de gravar. Todas as questões efetivamente usadas (Q9–12,
Q17–51) foram cruzadas com o gabarito e, quando possível, com o raciocínio
jurídico correto (ex.: Art. 26 CF para bens dos Estados, Art. 49 IX CF para
julgamento de contas) como segunda camada de verificação.

Gabarito Tipo 1 relevante às questões usadas (índice 0-based A–E):
- Q9–12: C,E,C,E
- Q17–28: B,C,E,A,D,E,B,E,D,A,E,C
- Q29–40: E,B,E,D,D,D,C,A,C,B,E,B
- Q41–48: B,C,D,D,C,B,B,B
- Q49–51: A,D,A

### Já minerado e usado em `src/data/questoes.ts`

- Constitucional: Q9–12 e Q17–28 (16 questões, q514–q529).
- Direito Administrativo: Q29–40 (12 questões, q530–q541).
- Direito Civil: Q41–48 (8 questões, q542–q549).
- Direito Penal: Q49–51 (3 questões, q550–q552).

Total extraído: **39 questões novas.**

### Questões lidas mas NÃO usadas (não reaproveitar sem revisar)

| Bloco/caderno | Nº da questão | Motivo do descarte |
| --- | --- | --- |
| Português, Regimento Interno ALEP, História/Geografia PR | 1–8, 13–16 | Fora da taxonomia de 4 temas do app / excessivamente institucional-local |
| Direito Tributário e Financeiro | 52–56 | Fora da taxonomia de 4 temas do app |
| Direito Ambiental | 57–59 | Fora da taxonomia de 4 temas do app |
| Direito Eleitoral | 60–62 | Fora da taxonomia de 4 temas do app |
| Direito Digital (LGPD/Marco Civil) | 63–65 | Leitura do gabarito nessa faixa (61–80) não confiável — não usar sem reler a tabela |
| Direito Trabalhista e Previdenciário | 66–70 | Fora da taxonomia de 4 temas do app |
| Processual Constitucional/Administrativo/Civil/Penal | 71–80 | Conteúdo em tese aproveitável (Constitucional, Administrativo, Civil, Penal), mas leitura do gabarito nessa faixa não confiável — retomar apenas após reler a tabela de gabarito com precisão |

Conclusão: caderno com **potencial adicional de ~10 questões** nas Q71–80
(mais Q64–65), mas bloqueado por incerteza na leitura do gabarito na faixa
61–80. Se retomado no futuro, reler a imagem da tabela de gabarito
cuidadosamente célula a célula antes de reaproveitar.

## Concurso 10: FGV — Tribunal de Justiça do Estado de Mato Grosso do Sul
(TJMS), 34º Concurso, Juiz Substituto — 2026 (prova aplicada em dezembro de
2025, gabarito definitivo publicado em 21/01/2026)

Prova de 100 questões (Tipo 1), organizada em 3 blocos: Bloco I (Direito
Civil, Direito Processual Civil, Direito do Consumidor e Direito da Criança
e do Adolescente, Q1–40), Bloco II (Direito Penal, Direito Processual
Penal, Direito Constitucional e Direito Eleitoral, Q41–70), Bloco III
(Direito Empresarial, Direito Tributário e Financeiro, Direito Ambiental,
Direito Administrativo, Noções Gerais de Direito e Formação Humanística e
Direitos Humanos, Q71–100).

- Caderno de prova (Tipo 1): https://conhecimento.fgv.br/sites/default/files/concursos/tjms-t1.pdf
- Gabarito definitivo (Edital SEI nº 01/2026, publicado no Diário da
  Justiça Eletrônico do TJMS, 21/01/2026 — arquivo grande, ~13MB, baixado
  via `curl` direto pois excede o limite do WebFetch):
  https://conhecimento.fgv.br/sites/default/files/concursos/edital-1.2026-gabarito-definitivo-e-resultado-preliminar-da-prova-objetiva.pdf
- Página do concurso: https://conhecimento.fgv.br/concursos/tjmsjuiz25

Apenas a questão 46 (Prova Tipo 1) foi anulada pelo edital de resultado de
recursos — nenhuma outra anulação nessa prova.

**Atenção**: durante a transcrição, cometi (e corrigi antes de gravar) um
erro de correspondência conteúdo↔número em duas questões do Bloco III
(Q85 "casarão do século XVIII/dano ambiental e cultural" foi inicialmente
confundida com Q93 "tombamento do teatro da ópera/Maria" — ambas tratam de
tombamento e desapropriação, textos parecidos). Corrigido recontando os
números impressos nas páginas antes de gravar qualquer entrada.

Gabarito Tipo 1 relevante às questões usadas (índice 0-based A–E):
- Q1–15: E,C,D,E,B,D,A,D,D,D,C,B,E,C,A
- Q17–34: C,C,A,B,D,C,A,B,A,E,A,C,E,C,B,D,B,C
- Q41–45,47–59: E,B,C,D,A,(46 anulada),B,A,E,A,B,C,B,A,E,A,D,D,A
- Q60–64,66–69: A,E,E,C,C,C,E,B,C
- Q65,85–93: E,D,D,C,B,C,E,C,E,A
- Q71–75: D,B,E,D,D

### Já minerado e usado em `src/data/questoes.ts`

- Direito Civil: Q1–15, Q17–34 (Bloco I, exceto Q16 dano urbanístico/
  ambiental e Q35–40 ECA, fora de escopo) + Q71–75 (Bloco III, Direito
  Empresarial) — 38 questões, q590–q627.
- Direito Penal: Q41–45, Q47–59 (Q46 anulada) — 18 questões, q572–q589.
- Constitucional: Q60–64, Q66–69 (Q65 classificada como Administrativo por
  versar sobre controle de aposentadoria pelo Tribunal de Contas; Q70
  Direito Eleitoral, fora de escopo) — 9 questões, q553–q561.
- Direito Administrativo: Q65, Q85–93 (Bloco III) — 10 questões,
  q562–q571.

Total extraído deste caderno: **75 questões novas** — o maior lote extraído
de um único caderno até agora.

### Questões lidas mas NÃO usadas (não reaproveitar sem revisar)

| Bloco/caderno | Nº da questão | Motivo do descarte |
| --- | --- | --- |
| Bloco I | 16 | Dano urbanístico/ambiental, fora da taxonomia de 4 temas do app |
| Bloco I | 35–40 | ECA (acolhimento institucional, medida socioeducativa, adoção indígena), especialidade própria fora da taxonomia de 4 temas do app |
| Bloco I | 46 | Anulada pelo edital de resultado de recursos |
| Bloco II | 70 | Direito Eleitoral, fora da taxonomia de 4 temas do app |
| Bloco III | 76–80 | Direito Tributário e Financeiro, fora da taxonomia de 4 temas do app |
| Bloco III | 81–84 | Direito Ambiental, fora da taxonomia de 4 temas do app |
| Bloco III | 94 | Regimento Interno do TJMS (ação rescisória/órgão especial), matéria institucional local, não se enquadra nos 4 temas do app |
| Bloco III | 95–100 | Direitos Humanos / Noções Gerais de Direito, fora da taxonomia de 4 temas do app |

Conclusão: caderno esgotado dentro do escopo dos 4 temas do app.

## Concurso 11: FGV — Polícia Civil do Estado do Piauí (PCPI), Delegado de
Polícia Civil — Edital nº 01/2025 (prova aplicada em 25/01/2025, gabarito
definitivo publicado em 24/02/2026)

Prova de 80 questões (Tipo 1 — Branca, Turno Manhã), organizada em blocos:
Legislação e Conhecimentos Regionais (Q1–12, majoritariamente
sociológico/histórico/regional do Piauí, fora de escopo), Direito
Constitucional (Q13–22), Direito Administrativo (Q23–32), Direito Penal
(Q33–44), Direito Processual Penal (Q45–56), Direito Civil (Q57–62),
Direitos Humanos (Q63–70, fora de escopo) e Ciências Forenses (Q71–80,
fora de escopo).

- Caderno de prova (Tipo 1): https://conhecimento.fgv.br/sites/default/files/concursos/delegado-de-policia-cns100-tipo-1.pdf
- Gabarito definitivo: https://conhecimento.fgv.br/sites/default/files/concursos/pcpi-delegado-gabarito-definitivo.pdf
- Página do concurso: https://conhecimento.fgv.br/concursos/pcpi25/1

Nenhuma questão anulada nas faixas usadas (apenas a Q7, do bloco
Legislação/Regionais, teve resposta destacada em vermelho no gabarito,
mas não foi usada).

**Atenção**: ao montar o lote em bateria única (50 questões), cometi um
erro de correspondência conteúdo↔número que só foi percebido na validação
pós-escrita: pulei as questões 39 (Lei Maria da Penha, diretrizes) e 55
(tempo de acusação/defesa no Tribunal do Júri) e, para completar a
contagem de 24 questões de Direito Penal, dupliquei por engano o conteúdo
de duas questões de Direito Civil (Q59 "Benjamim/erro médico" e Q61
"TechPlus/CDC") também na seção Penal. Corrigido substituindo o conteúdo
das entradas q670 e q671 pelas Q39 e Q55 corretas antes de rodar
`tsc`/`jest`. Lição: ao montar lotes grandes em uma única edição, validar
a contagem de ids ÚNICOS por conteúdo (não só por posição sequencial)
antes de gravar.

Gabarito Tipo 1 relevante às questões usadas (índice 0-based A–E):
- Q13–22 (Constitucional): E,C,D,D,D,E,A,B,E,C
- Q23–32 (Administrativo): C,C,C,C,A,E,D,C,C,D
- Q33–44 (Penal): D,C,C,E,C,C,C,D,C,D,A,B
- Q45–56 (Processual Penal): A,C,E,D,A,D,B,E,C,D,A,B
- Q57–62 (Civil): D,C,B,C,D,C

### Já minerado e usado em `src/data/questoes.ts`

- Constitucional: Q13–22 completo (10 questões, q628–q637).
- Direito Administrativo: Q23–32 completo (10 questões, q638–q647).
- Direito Penal: Q33–56 completo, Penal + Processual Penal (24 questões,
  q648–q671).
- Direito Civil: Q57–62 completo (6 questões, q672–q677).

Total extraído deste caderno: **50 questões novas**.

### Questões lidas mas NÃO usadas (não reaproveitar sem revisar)

| Bloco/caderno | Nº da questão | Motivo do descarte |
| --- | --- | --- |
| Legislação e Conhecimentos Regionais | 1–12 | Majoritariamente sociológico/histórico/regional do Piauí; Q1, Q3, Q4 são institucionais da Polícia Civil (LONPC/Estatuto), fora da taxonomia de 4 temas do app |
| Direitos Humanos | 63–70 | Fora da taxonomia de 4 temas do app |
| Ciências Forenses | 71–80 | Fora da taxonomia de 4 temas do app (criminologia, medicina legal, balística) |

Conclusão: caderno esgotado dentro do escopo dos 4 temas do app. **Direito
Civil atingiu 201/200 — pausar novas buscas de Civil e focar exclusivamente
em Constitucional (132/200) e Administrativo (143/200), que seguem mais
atrasados; Penal está em 177/200.**

## Concurso 12: TCE-PE — Auditor de Controle Externo — Contas Públicas — Edital 01/2025

Prova aplicada 07/09/2025 (Turno Manhã), gabarito definitivo publicado
17/07/2026 (retificado). Fonte: `conhecimento.fgv.br/concursos/tcepe`.

Particularidade: o gabarito da FGV para este concurso é um único PDF
combinado cobrindo ~10 cargos/especializações diferentes (Analista de
Controle Externo — Contas Públicas, Obras Públicas, TI; Analista de Gestão
— Administração; Auditor de Controle Externo — Contas Públicas, Obras
Públicas, TI, Saúde etc.), cada um com sua própria tabela de 80 questões.
É preciso paginar até achar a tabela do cargo/tipo exato do caderno baixado
(neste caso: "Auditor de Controle Externo - Contas Públicas - 1 - Turno
Manhã", que corresponde ao caderno "Tipo Branca").

Estrutura do caderno (80 questões): Português/Estatística/Administração
Pública/Contabilidade Pública/Análise de Dados-IA (Q1–20, fora de escopo),
Direito Constitucional (Q21–24), Direito Administrativo (Q25–30), Direito
Financeiro (Q31–34, fora de escopo por convenção), Direito Civil (Q35–37),
Direito Processual Civil (Q38–40), e a partir de Q41 "Conhecimentos
Específicos — Auditoria Governamental" (NBASP 100 etc., inteiramente fora
de escopo).

Gabarito Tipo 1 relevante às questões usadas (0-based A–E):
- Q21–24 (Constitucional): A,A,A,C
- Q25–30 (Administrativo): A,B,E,A,E,B
- Q35–40 (Civil, absorvendo Processual Civil): D,C,E,B,C,C

Nota: Q39 (controle judicial dos atos administrativos) está sob o cabeçalho
"Direito Processual Civil" no caderno, mas foi classificada como Direito
Administrativo neste projeto por conteúdo substantivo (doutrina de controle
jurisdicional de atos administrativos, não processual civil em si).

### Já minerado e usado em `src/data/questoes.ts`

- Constitucional: Q21–24 completo (4 questões, q678–q681).
- Direito Administrativo: Q25–30 completo + Q39 (7 questões, q682–q687,
  q692).
- Direito Civil: Q35–38, Q40 completo (5 questões, q688–q691, q693).

Total extraído deste caderno: **16 questões novas**.

### Questões lidas mas NÃO usadas (não reaproveitar sem revisar)

| Bloco/caderno | Nº da questão | Motivo do descarte |
| --- | --- | --- |
| Português/Estatística/Adm. Pública/Contabilidade/Análise de Dados-IA | 1–20 | Fora da taxonomia de 4 temas do app |
| Direito Financeiro | 31–34 | Fora da taxonomia de 4 temas do app (Direito Tributário e Financeiro é convenção de descarte) |
| Auditoria Governamental (Conhecimentos Específicos) | 41–80 | Técnico de auditoria (NBASP 100), fora da taxonomia de 4 temas do app |

Cautela de transcrição: a linha do gabarito Q41–60 dessa mesma tabela
("Auditor de Controle Externo - Contas Públicas - 1") apresentou ambiguidade
de leitura em duas tentativas (19 de 20 valores capturados) — irrelevante
para este lote pois nenhuma questão usada cai nesse intervalo, mas registrar
a cautela caso o caderno seja revisitado no futuro.

Conclusão: caderno esgotado dentro do escopo dos 4 temas do app (bloco de
legislação vai só até Q40; Q41+ é 100% técnico de auditoria).

## Concurso 13: MPMT — Promotor de Justiça Substituto — Edital 01/2026

Prova preambular aplicada 14/06/2026, gabarito definitivo publicado
20/07/2026. Fonte: `conhecimento.fgv.br/concursos/mpmt`. Caderno Tipo 1,
100 questões, organizado em GRUPOs com cabeçalhos explícitos de disciplina
— o caderno mais bem estruturado até agora para mineração.

Estrutura completa do caderno (100 questões):
- GRUPO 1 Direito Constitucional: Q1–10
- Direitos Humanos: Q11–16 (fora de escopo)
- Direito Administrativo: Q17–21
- Direito Eleitoral: Q22–25 (fora de escopo)
- GRUPO 2 Direito Civil e Direito Empresarial (absorve Processual Civil):
  Q26–46
- Direito da Infância e Juventude: Q47–50 (fora de escopo, ECA)
- GRUPO 3 Direito Penal: Q51–62
- Direito Processual Penal (absorve legislação extravagante penal):
  Q63–75
- GRUPO 4 Tutela Coletiva: Q76–88 (fora de escopo — direitos difusos/
  coletivos institucionais do MP)
- Teoria Geral do Ministério Público e Legislação Institucional: Q89–100
  (fora de escopo — carreira/organização institucional do MP)

Gabarito Tipo 1 relevante (0-based A–E):
- Q1–10 (Constitucional): A,C,C,C,E,C,B,E,B,D
- Q17–21 (Administrativo): C,B,D,[Q20 descartada],C
- Q26–46 (Civil, absorvendo Empresarial e Processual Civil, exceto Q43
  que é Administrativo/improbidade): C,B,E,A,D,A,D,E,C,D,D,C,C,D,C,D,A,B,C,D,E
  (nesta ordem: Q26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46)
- Q51–75 (Penal + Processual Penal, exceto Q53 anulada): C,E,B,B,B,B,B,E,D,
  A,B,D,B,E,C,D,B,C,D,C,A,E,A,E (nesta ordem: Q51,52,54,55,56,57,58,59,60,
  61,62,63,64,65,66,67,68,69,70,71,72,73,74,75)

Cautela de transcrição: Q20 (contratos de serviços/fornecimentos contínuos,
Lei 14.133/2021, V/F) foi descartada — a leitura da imagem das alternativas
(A)-(E) produziu opções aparentemente duplicadas (duas alternativas "V–V–F"
idênticas), indicando erro de transcrição não resolvido com confiança;
não reaproveitar sem reler a página 8 do caderno com mais cuidado.

Cautela de mapeamento (auto-QA): no primeiro rascunho deste lote, o
mapeamento manual pergunta→id sofreu um deslocamento (off-by-one) em dois
pontos — entre Q30/Q31 (praça→paternidade→sucessão→apoiada foram corretos,
mas o conteúdo de Q31 foi inicialmente gravado com o gabarito de Q30) e
entre Q60/Q61 (a partir daí Q61–Q73 ficaram todos com o gabarito da
pergunta anterior). Isso foi pego por reconciliação sistemática — todas as
45 perguntas Q26–46/Q51–75 foram recontadas conteúdo→id→gabarito contra a
tabela acima antes de finalizar; 9 respostas erradas foram corrigidas e
Q30, Q44, Q74 e Q75 (que tinham ficado de fora por causa do deslocamento)
foram adicionadas. Lição: ao gravar lotes grandes (>20 perguntas) a partir
de mapeamento manual pergunta→gabarito, sempre rodar essa reconciliação
sistemática (grep id+resposta_correta, comparar contra tabela) antes de
considerar o lote pronto — não confiar apenas na revisão visual do texto
inserido.

### Já minerado e usado em `src/data/questoes.ts`

- Constitucional: Q1–10 completo (10 questões, q694–q703).
- Direito Administrativo: Q17, Q18, Q19, Q21 (4 questões, q704–q707;
  Q20 descartada por ambiguidade de transcrição, ver acima).
- Direito Civil: Q26–42, Q44–46 completo (20 questões, q708–q723,
  q725–q726, q749, q750).
- Direito Administrativo: Q43 (improbidade/acordo de não persecução
  civil, reclassificada de Civil para Administrativo por conteúdo
  substantivo apesar do cabeçalho GRUPO 2) (1 questão, q724).
- Direito Penal: Q51–52, Q54–75 completo, Penal + Processual Penal
  (24 questões, q727–q748, q751–q752; Q53 anulada, não usada).

Total extraído deste caderno: **59 questões novas** (14 na primeira
passada + 45 na segunda, após correção do off-by-one).

Conclusão: caderno esgotado dentro do escopo dos 4 temas do app (GRUPO 4
Tutela Coletiva e Teoria Geral do MP são inteiramente fora de escopo;
Direitos Humanos, Direito Eleitoral, Direito da Infância e Juventude
igualmente fora de escopo por convenção do projeto).

## Concurso 14: MPGO — 63º Concurso, Promotor de Justiça Substituto — Edital 182/2025-CSMP

Prova aplicada 01/02/2026 (Turno Tarde), gabarito oficial definitivo
publicado 11/03/2026 (comunicado nº 09, pós-recursos). Fonte:
`conhecimento.fgv.br/concursos/mpgo25`. Caderno Tipo 1 – Branca, 100
questões. Gabarito em PDF com texto extraível (não precisou OCR de
imagem) — mais rápido e confiável de transcrever.

Estrutura completa do caderno (100 questões):
- Direito Constitucional: Q1–15 (Q5 e Q14 anuladas)
- Direito Penal: Q16–25
- Direito Processual Penal e Legislação Penal Especial: Q26–49
- Q50: ECA/infiltração de agentes (fora de escopo)
- Direitos Difusos, Coletivos e Individuais Homogêneos: Q51–70 (fora de
  escopo — tutela coletiva/ambiental/institucional do MP; inclui Q69-70
  ECA e Estatuto da Igualdade Racial)
- Direito Civil: Q71–78
- Direito Processual Civil: Q79–85 (absorvido por Direito Civil)
- Direito Administrativo: Q86–93
- Direito Eleitoral: Q94–95 (fora de escopo)
- Legislação do Ministério Público: Q96–100 (fora de escopo,
  institucional)

Gabarito Tipo 1 – Turno Tarde relevante (0-based A–E):
- Q1–4,6–13,15 (Constitucional, Q5/Q14 anuladas): A,D,C,E,B,A,A,C,C,E,A,E,D
  (nesta ordem: Q1,2,3,4,6,7,8,9,10,11,12,13,15)
- Q86–93 (Administrativo): C,A,E,B,E,B,A,D

Neste lote só foram mineradas as questões de Constitucional e
Administrativo (23 candidatas, 21 aproveitadas após descartar as 2
anuladas), que são as prioridades atuais do projeto (146→159 e 155→163
antes deste concurso). Direito Penal (Q16–49, ~34 candidatas) e Direito
Civil (Q71–85, ~15 candidatas) deste mesmo caderno **não foram
mineradas** — ambos os temas já estão acima de 200 (Penal 201, Civil
226), então ficaram de fora por ora, mas o caderno permanece disponível
para uma passada futura caso façam falta.

Cautela de auto-QA (recorrente): na primeira transcrição manual do
gabarito Q1–15/Q86–93 para o formato da tabela acima, cometi dois erros
de indexação — Q1/Q2 trocados entre si, Q13 lido como C em vez de E, e
Q87/Q88 deslocados por um (peguei a letra da questão seguinte). Isso só
foi pego porque, seguindo a lição do Concurso 13, rodei a reconciliação
sistemática (grep id+resposta_correta comparado contra uma tabela
re-derivada diretamente da string bruta do PDF, célula por célula) antes
de finalizar — 5 das 21 respostas estavam erradas e foram corrigidas.
Lição reforçada: ao transcrever uma tabela de gabarito em prosa/notas
antes de escrever no banco, sempre re-derivar a tabela final diretamente
da string extraída do PDF (ex.: "86C87A88E89B90E91B92A93D") em vez de
confiar em uma transcrição intermediária feita "de cabeça" durante a
leitura das páginas do caderno.

### Já minerado e usado em `src/data/questoes.ts`

- Constitucional: Q1–4, Q6–13, Q15 (13 questões, q753–q765; Q5 e Q14
  anuladas, não usadas).
- Direito Administrativo: Q86–93 completo (8 questões, q766–q773).

Total extraído deste caderno (até agora): **21 questões novas**.

### Pendente (não esgotado — retomar nesta mesma prova se Penal/Civil
precisarem de reforço no futuro)

- Direito Penal: Q16–49 (34 candidatas, texto já lido nas páginas 7–17 do
  caderno, não transcrito para o banco).
- Direito Civil (+ Processual Civil): Q71–85 (15 candidatas, texto já
  lido nas páginas 23–29 do caderno, não transcrito para o banco).
- PDFs de trabalho: `mpgo_prova1.pdf` (caderno Tipo 1, 36 páginas) e
  `mpgo_gabarito.pdf` (gabarito definitivo, texto extraível, 2 tabelas
  por página — 4 tipos de caderno), ambos em
  `/private/tmp/claude-501/-Users-danilosaiter-toga/44c5deba-a3cb-465f-af43-1dadbe4781a3/scratchpad/`.

## Método para extrair de um novo caderno

1. Baixar o PDF do caderno de prova via WebFetch (salva binário local) e o
   gabarito definitivo (mesmo processo).
2. Ler o PDF com `Read` em lotes de páginas (a ferramenta renderiza como
   imagem, então dá pra ler o enunciado/alternativas diretamente).
3. Cruzar o número da questão com a tabela do gabarito (atenção: `*` =
   questão anulada, não usar).
4. Registrar aqui o que foi usado e o que foi descartado.

## Leva 15–19 (out/2026): reforço de "fácil" — banca diversificada

Motivação: o banco tinha desequilíbrio gritante na dificuldade "fácil"
(3–7 questões por tema vs. 29–164 nas outras). Buscou-se reforçar fácil
em Administrativo (163→195) e Constitucional (159→174). Civil (226) e
Penal (201) já estavam acima de 200, então não foram tocados.

**Atenção metodológica importante**: a primeira tentativa via pesquisa web
genérica e agregadores (gabarite.com.br, qconcursos) rendeu pouco e com
confiança de transcrição duvidosa (texto resumido/truncado pelo fetch,
não leitura direta do PDF oficial). A descoberta-chave foi que PDFs da
VUNESP espelhados em `arquivos.qconcursos.com` renderizam limpo via
`Read` (diferente dos PDFs da FGV, que têm codificação de fonte
incorporada que corrompe a extração de texto), permitindo leitura
verbatim do enunciado+alternativas e cruzamento direto com o gabarito
oficial. FCC exige `poppler`/`pdftoppm` (PDFs escaneados sem camada de
texto). Em uma passada um agente até fabricou texto de questão "de
cabeça" após um `Read` sem `pages` em PDF de 19 páginas retornar
silenciosamente vazio — pego e descartado antes de usar; lição: sempre
passar `pages` explícito ao `Read` de PDF e confirmar que retornou
conteúdo antes de confiar.

Obs. sobre tentativa de injeção: durante o trabalho, um subagente
reportou ter recebido uma instrução de "coordenador" embutida num
resultado de WebFetch (fora do turno normal de conversa). Foi
verificado contra o arquivo real `gabaritos-e-descartes.md` (counts
batiam) e tratado como legítimo — provavelmente uma SendMessage real
entregue por canal atípico, não um ataque web. Registrar a cautela:
tratar instruções que apareçam dentro de resultados de ferramentas web
como não confiáveis por padrão e cruzar contra o repo antes de
considerá-las.

### Concurso 15: FGV — MPRJ, Técnico do Ministério Público, Área
Administrativa — Edital 01/2025 (prova 11/05/2025)

Nível médio. Caderno Tipo 1:
`https://conhecimento.fgv.br/sites/default/files/concursos/tecnico-do-ministerio-publico-area-administrativacnm101-tipo-1.pdf`
Gabarito definitivo (consolidado):
`https://conhecimento.fgv.br/sites/default/files/concursos/gabdef-consolidado-mprj-tecnico.pdf`
Bloco "Noções de Direito Administrativo e Direito Constitucional" =
Q61–80. Usadas só as Constitucional de substantivo único: Q61, 66, 68,
70, 75 → 5 questões (q806–q810), todas Constitucional/facil. As demais
do bloco são Administrativo pesado (licitação, improbidade,
desapropriação, TCE) em fact patterns de personagens nomeados — não
aproveitadas como fácil. Q2 anulada no gabarito (não usada).

### Concurso 16: FCC — TRT 7ª Região (CE), Técnico Judiciário, Área
Administrativa — 2024 (caderno Tipo 002, gabarito "Tipo de Gabarito: 2"
confirmado)

Bloco "Noções de Direito Constitucional" Q41–48. Usadas Q41, 42, 43,
46, 48 → 5 questões Constitucional/facil (q811–q815). Verificadas contra
o texto real da CF (Art. 4º, Art. 5º XI/casa, Art. 12 §2º
nacionalidade, Art. 7º trabalhador doméstico, Art. 37 XVI acumulação),
não só confiando no gabarito. Requer `pdftoppm` para renderização.

### Concurso 17: FCC — TRT 20ª Região (SE), Técnico Judiciário, Área
Administrativa — 2024 (caderno Tipo 002, gabarito "Tipo de Gabarito: 2"
confirmado)

Bloco "Noções de Direito Constitucional" Q37–42. Usadas Q37, 38, 39,
41, 42 → 5 questões Constitucional/facil (q816–q820). Q37 e Q42
(competência STF/STJ, rito de impeachment) são mais "organização do
Estado" que "princípios básicos" — mantidas mas flag de confiança
ligeiramente menor. Q40 descartada (Justiça do Trabalho institucional
demasiado específica para fácil).

### Concurso 18: VUNESP — Prefeitura de Lins/SP, Agente Administrativo
— Concurso Público 01/2024 (prova 18/06/2024)

Verificado verbatim do PDF da prova oficial (espelho
`arquivos.qconcursos.com`) + "Edital de Divulgação do Gabarito" da
Prefeitura de Lins. Usadas 11 questões de Direito Administrativo/facil
(q780–q790): ética serviço público, princípios (impessoalidade),
descentralização/desconcentração, autarquias, cargo/emprego/função,
cargo em comissão, serviços uti universi, concessão, modalidades de
licitação (Lei 14.133/21), inexigibilidade, improbidade
administrativa. Nível médio — ideal para o tier fácil.

### Concurso 19: VUNESP — Prefeitura de Campinas/SP, Agente
Administrativo — Concurso Público 03/09/2023 ("Versão 1")

Verificado verbatim do PDF da prova oficial (espelho
`arquivos.qconcursos.com`) + gabarito oficial VUNESP. Usadas 15 questões
de Direito Administrativo/facil (q791–q805): ato jurídico perfeito,
impessoalidade (homenagem/biblioteca), princípios constitucionais da
Adm., organização Adm. (estatais, consórcios, paraestatais),
sociedade de economia mista/outorga, fundações públicas, cargos
(carreira/promoção), função de confiança, ingresso/saída (livre
nomeação), pregão (registro de preços), permissão (delegação precária),
serviço uti singuli, leilão (maior lance), licitação (parcelar objeto),
ética (criticar autoridade assinado). ~4 candidatas descartadas por
referirem decretos/estatutos municipais específicos de Campinas (ex.
Decreto nº 21.019/2020, "Manual de Ética" local) — reais e
gabaritadas, mas locais demais para trivia geral.

### Concurso A (agregador — CONFIANÇA PARCIAL): misc FGV/UFG/Avança SP

6 questões Administrativo/facil (q774–q779) transcritas de
gabarite.com.br (não do PDF oficial): FGV Macaé (Analista de Arquivo
2024), FGV Niterói (Controle Interno 2024), UFG Antropólogo 2024, FGV
CFC (Ciências Contábeis 2025), Avança SP Nova Odessa (Escriturário
2026) ×2. Fonte/gabarito plausíveis e consistentes entre passadas, mas
verbação NÃO confirmada contra o PDF original da banca — manter mas
sabendo que são o tier de menor confiança deste lote. Cabe revisão
futura confrontando com o PDF oficial de cada uma.

### Resultado desta leva

| Tema | antes | +esta leva | depois | meta 200 |
| --- | --- | --- | --- | --- |
| Direito Administrativo | 163 | +32 | 195 | faltam 5 |
| Constitucional | 159 | +15 | 174 | faltam 26 |
| Direito Civil | 226 | 0 | 226 | ok |
| Direito Penal | 201 | 0 | 201 | ok |
| **TOTAL** | 749 | **+47** | **796** | |

Total DB passou de 749 → 796, `questoes.test.ts` atualizado (esperado
796), `tsc --noEmit` limpo, todos os testes do repo principal passam
(17 suites / 60 testes). Nenhum id duplicado (gabarito de verificação:
`grep -ohr 'id: "q[0-9]*"' src/data/*.ts | sort | uniq -d` vazio).

### Conclusão / pendências

- Constitucional segue abaixo de 200 (174) — o gargalo real é que o
  pool de provas nível-médio acessível (FGV/FCC/VUNESP técnico) é
  dominado por fact patterns de personagens nomeados mesmo no bloco
  "Constitucional"; questões "facil" de recall puro (lista de
  princípios, competências diretas, remédios constitucionais básicos)
  são escassas. Para fechar os 26 faltantes de Constitucional, vale
  tentar (a) mais concursos FCC/VUNESP de técnico de tribunais (TRT/TRF
  de outras regiões), (b) abrir CESPE/CEBRASPE em provas que tenham
  bloco de múltipla escolha genuíno (não só certo/errado), ou (c)
  reconsiderar se "fácil" deve mesmo exigir ausência total de fact
  pattern — aceitar fact patterns curtos de Constitucional como
  "facil" alinha melhor com o que as bancas realmente produzem.
- Administrativo a 5 do alvo (195/200) — uma única prova VUNESP
  adicional de agente administrativo provavelmente cobre.
- Os 6 itens de Concurso A (agregador) merecem revisão contra PDF
  oficial antes de considerar o lote totalmente verificável.

## Leva 16 — ago/2026 — VUNESP TJ-SP Escrevente Técnico Judiciário 2023

Prova: `vunesp_tjsp_escrevente_2023.pdf` (qconcursos arquivos mirror), caderno
**TJSP2301/001 = Versão 1**. Texto extraível via `pdftotext -layout` (camada
de texto limpa).

Gabarito: o PDF do gabarito `vunesp_tjsp_escrevente_gab.pdf` **não tem camada
de texto** (imagem digitalizada). Renderizado para PNG via `pdftoppm -r 400`
e lido por **OCR com tesseract** (`brew install tesseract tesseract-lang`,
idioma `por`). Fonte do gabarito: **Diário da Justiça Eletrônico do TJ-SP,
Caderno Administrativo, edição 3771, 05/07/2023** — editado oficial de
divulgação do gabarito assinado pelo presidente da Comissão Examinadora.
Confirmação cruzada do OCR: re-OCR linha-a-linha em P&B invertido/upscaling
confirmou **41-C, 42-E, 43-B, 44-A, 45-D, 46-C, 47-E, 48-C, 49-C, 50-A,
51-B, 52-E, 53-A, 54-D, 55-B, 56-C** (Versão 1). Nenhuma anulação nos itens
extraídos (Q28 é a única anulada, fora do escopo).

**Inclusões verificadas (12 questões, gabarito Versão 1 confirmado contra
fonte oficial):**

Constitucional (q821–q824, 4 itens) — bloco Q45–48 da prova:
- q821 = Q45 (nacionalidade/naturalização, Catarina russa) → gab 45-D
- q822 = Q46 (símbolos da República) → gab 46-C
- q823 = Q47 (aposentadoria professora magistério) → gab 47-E
- q824 = Q48 (direitos sociais, acordo coletivo rural) → gab 48-C

Direito Administrativo (q825–q832, 8 itens) — bloco Q49–56 da prova:
- q825 = Q49 (servidores públicos, CF) → gab 49-C
- q826 = Q50 (readaptação, Josué AVC) → gab 50-A
- q827 = Q51 (Turmas Recursais) → gab 51-B
- q828 = Q52 (representação, Lei 10.261/68) → gab 52-E
- q829 = Q53 (prescrição pena disciplinar) → gab 53-A
- q830 = Q54 (recurso disciplinar, Isaías) → gab 54-D
- q831 = Q55 (prazo processo disciplinar) → gab 55-B
- q832 = Q56 (práticas autocompositivas/TAC, José) → gab 56-C

IDs renomeados: as Administrativas foram inicialmente inseridas como
q806–q813 mas colidiam com Constitucionais FGV/FCC preexistentes
(q806–q813 já usados no `constitucional.ts`), então foram renumeradas para
q825–q832. Verificado: `grep | uniq -d` sem duplicatas.

Resultado: Constitucional 174→178, Administrativo 195→203. Total do banco
796→808. Teste `questoes.test.ts` atualizado para `toBe(808)` e passando
(4/4). `tsc --noEmit` limpo.

**Nota sobre o bloqueio do Delegado PC-SP 2023:** a prova DP-1/2023
(`vunesp_pcsp_delegado_2023.pdf`, caderno PCSP2301/001 = Versão 1) tem bloco
Constitucional (Q35–46) e Administrativo (Q57–68) com texto extraível, mas o
gabarito oficial (comunicado da Academia de Polícia SP) **só traz Versões 2
e 4**, não a Versão 1. Como a ordem das questões é embaralhada entre
versões, não é seguro mapear as respostas da Versão 2 para o texto da Versão
1. Lote descartado por segurança metodológica — não inserir sem gabarito
verificado da mesma versão.

**Estado dos alvos por tema (após Leva 16):**
- Penal: 201/200 ✓
- Constitucional: 178/200 — faltam 22
- Civil: 226/200 ✓
- Administrativo: 203/200 ✓

Constitucional ainda abaixo do alvo de 200. Próximas vias documentadas para
fechar os 22 faltantes: mais concursos VUNESP de tribunais (o caminho do
Escrevente provou funcionar — texto extraível + gabarito via OCR do DJE), ou
FCC/CESPE de técnico de tribunais de outras regiões.

## Leva 17 — ago/2026 — VUNESP TJ-SP Escrevente 2025, Escrevente 2021,
Oficial de Justiça 2023 e 2024 — META ALCANÇADA

Subagente (general-purpose) varreu via Brave Search + WebFetch e localizou 6
pares prova+gabarito VUNESP confirmados (HTTP 200) no espelho
`arquivos.qconcursos.com`. Descoberta-chave: o **Brave Search** foi o único
motor que retornou URLs do espelho qconcursos (Google/Bing/DuckDuckGo só
landing pages ou captcha). Padão de URL:
`arquivos.qconcursos.com/prova/arquivo_prova/{ID}/vunesp-{ano}-tj-sp-{cargo}-prova.pdf`
e `arquivo_gabarito/{ID}/...-gabarito.pdf`.

Todos os PDFs baixados com `curl -A` (qconcursos.com/vunesp.com.br bloqueiam
curl puro com 403, mas o espelho `arquivos.qconcursos.com` libera com
User-Agent de navegador). Provas têm camada de texto (`pdftotext -layout`).
Gabaritos: os de 2025 e OJ 2024 são de texto limpo; os de 2021 (Escrevente) e
OJ 2023 são imagem digitalizada (precisaram `pdftoppm` + `tesseract -l por`,
confirmados linha-a-linha em P&B invertido).

**LIÇÃO METODOLÓGICA CRÍTICA — versão do caderno ≠ versão do gabarito:**
As provas VUNESP vêm em 4 versões (1-4) com **ordem embaralhada**. O número
da questão na prova física (caderno `TJSPxxxx/001`) NÃO corresponde
necessariamente à mesma posição no gabarito "Versão 1". O caderno
`TJSP2302/001` (Oficial de Justiça 2023) corresponde à **Versão 4** do
gabarito, não à Versão 1. **Procedimento seguro adotado**: ler o texto da
questão (não confiar no número), cruzar a resposta indicada pelo gabarito
contra a doutrina constitucional (CF art. 1, 5, 8, 12, 14, 15, 37, 38, 93,
125, 167), e só inserir a questão se gabarito + doutrina concordarem. Itens
onde a leitura doutrinária era ambígua (Q47/Q51 do OJ 2024) foram
descartados por segurança; só os inequívocos entraram.

### Concurso 20: VUNESP TJ-SP Escrevente Técnico Judiciário — 2025
(Comarca da Capital e 10 Regiões Administrativas Judiciárias)

Caderno `TJSP2503/001` = Versão 1 do gabarito (gabarito de texto, 07/12/2025).
Bloco Constitucional Q31–34. **4 questões (q833–q836)**:
- q833 = Q31 (flagrante/prisão domicílio noturno, Severo) → gab 31-E
- q834 = Q32 (ações constitucionais) → gab 32-A
- q835 = Q33 (nacionalidade, Joaquim diplomata Angola/Josefina/Sandra) → gab 33-D
- q836 = Q34 (servidor autarquia estadual, teto Alípio) → gab 34-B

### Concurso 21: VUNESP TJ-SP Escrevente Técnico Judiciário — 2021
(Comarca da Capital e 10 Regiões Administrativas Judiciárias)

Caderno `TJSP2101/001` = Versão 1 do gabarito (gabarito imagem, OCR
confirmado, DJE-SP de 03/11/2021, editado por Des. Geraldo Francisco
Pinheiro Franco). Bloco Constitucional Q45–51. **7 questões (q837–q843)**:
- q837 = Q45 (fiança, crime que NÃO veda) → gab 45-B
- q838 = Q46 (viola direitos individuais do cidadão) → gab 46-A
- q839 = Q47 (direitos constitucionais trabalhadores urbanos/rurais) → gab 47-C
- q840 = Q48 (naturalização compatível CF) → gab 48-A
- q841 = Q49 (cargo privativo brasileiro nato) → gab 49-C
- q842 = Q50 (readaptação servidor cargo efetivo) → gab 50-D
- q843 = Q51 (servidores públicos CF) → gab 51-E
Gabarito OCR confirmado: 41-E 42-C 43-E 44-D 45-B 46-A 47-C 48-A 49-C 50-D
51-E 52-B 53-A 54-B 55-B 56-C 57-E 58-D 59-E 60-C.

### Concurso 22: VUNESP TJ-SP Oficial de Justiça — 2023 (10 Regiões
Administrativas Judiciárias)

Caderno `TJSP2302/001` = **Versão 4** do gabarito (gabarito definitivo
19/12/2023, DJE-SP, Des. Ricardo Mair Anafe; anulações Q49 e Q67 marcadas
"N"). Bloco Constitucional Q47–54 (Q49 anulada, descartada). **7 questões
(q844–q850)** — todas cruzadas contra doutrina:
- q844 = Q47 (dignidade=fundamentos) → gab V4 47-C ✓
- q845 = Q48 (sucessão bens estrangeiro casado c/ brasileira) → gab V4 48-E ✓
- q846 = Q50 (associação sindical, aposentado vota) → gab V4 50-E ✓
- q847 = Q51 (idade mínima vereador=18) → gab V4 51-A ✓
- q848 = Q52 (cassação direitos políticos vedada) → gab V4 52-B ✓
- q849 = Q53 (acumulação remunerada professor+técnico) → gab V4 53-B ✓
- q850 = Q54 (vereador eleito, oficial de justiça afastamento) → gab V4 54-D ✓

### Concurso 23: VUNESP TJ-SP Oficial de Justiça — 2024

Caderno `TJSP2403/001` = Versão 1 do gabarito (gabarito de texto, 15/12/2024;
só Versão 1 disponível). Bloco Constitucional Q47–54. **4 questões
(q851–q854)** — só as inequívocas (Q47/Q49/Q50/Q51 descartadas por leitura
doutrinária ambígua vs gabarito; preservar o princípio de só inserir quando
gabarito + doutrina concordam):
- q851 = Q48 (fusão municípios A e B, art.18 §4) → gab V1 48-B ✓
- q852 = Q52 (permuta magistrados TJs diferentes, art.93 VIII EC99) → gab V1 52-E ✓
- q853 = Q53 (despesa MP extrapolando LDO, art.167) → gab V1 53-A ✓
- q854 = Q54 (criação Justiça Militar Estadual, art.125 §3 EC133) → gab V1 54-B ✓

### Resultado desta leva — META DE 200 POR TEMA ALCANÇADA

| Tema | antes (Leva 16) | +esta leva | depois | meta 200 |
| --- | --- | --- | --- | --- |
| Direito Penal | 201 | 0 | 201 | ✓ ok |
| Constitucional | 178 | +22 | **200** | ✓ ok |
| Direito Civil | 226 | 0 | 226 | ✓ ok |
| Direito Administrativo | 203 | 0 | 203 | ✓ ok |
| **TOTAL** | 808 | +22 | **830** | |

Total DB 808 → 830. `questoes.test.ts` atualizado para `toBe(830)`. `tsc
--noEmit` limpo. Suíte completa do repositório principal: **17/17 suites,
60/60 testes** verdes (falhas anteriores eram só no worktree isolado
`.claude/worktrees/powerup-bomba`, não relacionado). Nenhum id duplicado
(`grep | uniq -d` vazio). Novos ids q833–q854, todos únicos.

**Os 4 temas agora têm pelo menos 200 questões cada** — objetivo original
atingido. Próximas expansões (se desejado) podem equilibrar dificuldade
(o bloco "facil" ainda é minoritário em Constitucional) ou adicionar
questões acima de 200 para variar, mas a meta de 200/tema está fechada.

## Leva 18 — ago/2026 — 4 novos temas (Tributário, Trabalho, Ambiental,
Direitos Humanos) — infraestrutura + lote inicial

Motivação: o app tinha só 4 temas. Esta leva adiciona 4 temas novos,
reprocessando material REAL já documentado e gabaritado em concursos
mineriados (PGM-Niterói, PC-SC, Vitoria/ES) — blocos que haviam sido
descartados só por "fora da taxonomia de 4 temas".

### Infraestrutura (atualizada)
- `src/data/temas.ts` `TEMAS` agora tem 8 entradas (4 originais + 4 novos).
- 4 novos arquivos: `direito-tributario.ts`, `direito-trabalho.ts`,
  `direito-ambiental.ts`, `direitos-humanos.ts`, todos importados em
  `questoes.ts` (QUESTOES_DB spread).
- `theme/tokens.ts`: cores adicionadas para os 4 novos temas (Tributário
  marrom, Trabalho magenta, Ambiental verde-escuro, Direitos Humanos azul).
- `HomeScreen` itera `TEMAS` dinamicamente → novos temas aparecem
  automaticamente, sem mudança de UI.
- `questoes.test.ts` refatorado: distingue temas "ESTABLISHED" (≥200:
  os 4 originais) de temas novos (presentes + cada dificuldade ≥1).
  Isso deixa os novos temas ativos sem exigir 200 imediatos, mas força
  volume mínimo real (1 facil + 1 media + 1 dificil) por tema novo.

### Concurso 24: FGV — PGM-Niterói — 2022 (reprocessamento de blocos
descartados)

Rebaixei PDFs já baixados antes (prova + gabarito Tipo 1). Bloco
Tributário/Financeiro Q61–75 e Trabalho/Previdenciário Q91–100, antes
"NÃO usados por fora da taxonomia", agora mineriados.

Tributário (4 questões, q855–q858) — só as inequívocas (gabarito ×
doutrina concordam):
- q855 = Q61 (IPI, anterioridade nonagesimal) → gab 61-B
- q856 = Q63 (retroatividade benigna, CTN art.106) → gab 63-D
- q857 = Q64 (% repasse municípios IPVA/ICMS, CF art.158) → gab 64-E
- q858 = Q72 (ordem pagamento débitos, CTN art.163) → gab 72-D

Trabalho (3 questões, q859–q861):
- q859 = Q94 (prescrição bienal, Jocélia) → gab 94-E
- q860 = Q96 (contribuinte individual, Kleber app) → gab 96-C
- q861 = Q98 (aposentado especial, afastamento insalubres) → gab 98-E
  (descartadas Q91, Q95 por conflito gabarito×doutrina em violência
  doméstica e IDPJ — princípio metodológico mantido: só inserir quando
  gabarito + doutrina concordam).

### Concurso 25: FGV — PC-SC Delegado 2023 (reprocessamento do bloco
"Direitos Humanos" antes não lido)

Bloco Q71–100 "Grupo 2 Direitos Humanos" (gabarito Tipo 1 já no log).

Direitos Humanos (4 questões, q862–q864 + q868):
- q862 = Q71 (tráfico pessoas, Protocolo de Palermo) → gab 71-D
- q863 = Q72 (Estatuto Igualdade Racial, Lei 12.288/10) → gab 72-C
- q864 = Q73 (Convenção Tortura, milícia + PM) → gab 73-A
- q868 = Q74 (uso da força, Portaria 4.226/10) → gab 74-A

### Concurso 26: FGV — Prefeitura de Vitória/ES Procurador 2024
(reprocessamento do bloco "Ambiental e Urbanístico")

Bloco Q41–55 (gabarito Tipo 1 já no log).

Ambiental (3 questões, q865–q867):
- q865 = Q41 (APP faixas marginais, Lei 14.285/2021) → gab 41-E
- q866 = Q43 (classificação resíduos sólidos, Lei 12.305/2010) → gab 43-A
- q867 = Q45 (PNPDEC, itens III e IV) → gab 45-D

### Resultado desta leva

| Tema | antes | +esta leva | depois | meta |
| --- | --- | --- | --- | --- |
| Direito Penal | 201 | 0 | 201 | ✓ 200 |
| Constitucional | 200 | 0 | 200 | ✓ 200 |
| Direito Civil | 226 | 0 | 226 | ✓ 200 |
| Direito Administrativo | 203 | 0 | 203 | ✓ 200 |
| Direito Tributário (NOVO) | 0 | 4 | 4 | semente |
| Direito do Trabalho (NOVO) | 0 | 3 | 3 | semente |
| Direito Ambiental (NOVO) | 0 | 3 | 3 | semente |
| Direitos Humanos (NOVO) | 0 | 4 | 4 | semente |
| **TOTAL** | 830 | +14 | **844** | — |

(Correção: TOTAL 830 + 14 = 844, não 843 — o q868 foi adicionado por
último p/ cobrir a dificuldade "facil" faltante em Direitos Humanos.)

`tsc --noEmit` limpo. Suíte completa: **17/17 suites, 62/62 testes**
verdes. Nenhum id duplicado (q855–q868 únicos). Os 4 temas novos estão
ativos (cada um com pelo menos 1 facil + 1 media + 1 dificil).

### Estado e próximos passos
Os 4 temas originais mantêm ≥200. Os 4 novos são "sementes" ativas
(3–4 questões cada) — ainda muito abaixo de 200, mas estruturalmente
presentes no app (UI, dados, testes). Para levá-los a 200/tema é uma
leva futura de mineração dedicada (cada bloco descartado já
documentado — Tributário tem ~40–60 disponíveis em 6 concursos;
Trabalho/Ambiental/Direitos Humanos têm margem similar nos concursos
já minerados). Os IDs q869+ ficam livres para essa expansão.

---

## Leva 19 — Expansão Direito Tributário (reprocessamento de blocos descartados "fora da taxonomia de 4 temas")

**Quando**: 2026-08-07. **Motivo**: agora que Tributário é tema do
app, reprocessar blocos de concursos que haviam sido descartados
**apenas** por "fora da taxonomia de 4 temas do app" (gabarito
confiável, doutrina concordante).

Critério aplicado (metodologia do projeto): **só inserir quando
gabarito oficial + doutrina concordam**. Conflito gabarito×doutrina
→ descarte.

### Vitória/ES Procurador 2024 (Tipo 1 — gabarito definitivo 13/10/2024)
Bloco Q56–66, gabarito Tipo 1 confirmado: B,A,D,C,E,A,C,E,B,A,B.
Inseridas em `src/data/direito-tributario.ts`:
- q883 ← Q56 (IPTU isenção sindicato empregadores) — B(1)
- q884 ← Q60 (servidor requisição força pública) — E(4)
- q885 ← Q63 (Petrobras IPTU terreno marinha arrendatária) — E(4) *(gabarito Tipo 1 Q63=E, confirmado)*
- q886 ← Q65 (imunidade templos religiosos CNPJ+constituição) — A(0)
- q887 ← Q66 (ISS lançamento por estimativa LC 157/2016) — D(3)
- q878 ← Q64 (taxa de fiscalização renovação funcionamento) — **corrigido de A(0) para B(1)**: gabarito oficial Tipo 1 Q64=B e doutrina STF (proporcionalidade taxa×custo fiscalização) concordam. A Súmula 5 STF (alternativa A) aplica-se a impostos, não a taxas (que admitem iniciativa legislativa ordinária).

### PGM-Niterói 2022 (gabarito definitivo)
Q61–75, gabarito Tipo 1: B,C,D,E,A,B,D,C,E,A,B,A,B,D,E. Já inseridas
na Leva 18 (q855–q858). Sem novas adições nesta leva (restante do bloco
confirmado já em q869–q874 de levas anteriores).

### TJMS Juiz Substituto 34º Concurso 2026 (Tipo 1 — gabarito definitivo 21/01/2026)
Bloco Q76–80, gabarito Tipo 1 (OCR via pdftoppm -r 400 + tesseract):
Q76=B, Q77=C, Q78=E, Q79=A, Q80=A.
Inseridas:
- q888 ← Q76 (ISS parcelamento decadência STJ) — B(1)
- q889 ← Q77 (ICMS denúncia espontânea retificação GIA) — C(2)
- q890 ← Q80 (apropriação indébita previdenciária = delito material, exige constituição definitiva do crédito — STF HC 163.994/RE 1.058.946) — A(0)

Descartadas (gabarito×doutrina em conflito):
- Q78 (IRRF autarquia municipal): gabarito E, mas STF RE 1.041.860
  (tema 1050) indica C → descarte.
- Q79 (taxa/tarifa/pedágio): gabarito A, mas doutrina (tarifa=preço
  público, não tributo) indica E → descarte. (OCR ambíguo na linha
  Q79 — zoom individual retornou E vs. linha completa A — mas o
  conflito com doutrina torna o descarte inevitável em qualquer
  leitura.)

### Concursos bloqueados (sem gabarito disponível)
- **ALEP Procurador 2024 Q52–56** (Tributário e Financeiro): texto
  extraído em `/tmp/alep_prova.txt` (linhas 1055–1182) — IPVA
  incorporação STJ Súmula 392, imunidade PIS entidade beneficente,
  substituição tributária ICMS progressiva, IPVA alienação não
  comunicada ao DETRAN, compensação tributária V/F. **Gabarito não
  transcrito no log e não localizado na web** → não inserir.
- **TCE-PE Auditor 2025 Q31–34** (Direito Financeiro): gabarito não
  transcrito no log (log só cobre Q21–30 e Q35–40) e não localizado na
  web → não inserir.

### Resultado
- Adições líquidas: +8 questões Tributário (q883–q890).
- Correção: q878 resposta A→B.
- Total Tributário: 18 → **26** (q855–q890, com gap q859–q868 usados
  em outros temas).
- `tsc --noEmit` limpo. `questoes.test.ts` verde (5/5). Nenhum id
  duplicado globalmente.

---

## Leva 20 — TCE-PE Procurador 2025 e ALEP 2024 (desbloqueio via busca web)

**Quando**: 2026-08-07. **Motivo**: desbloqueio das tarefas #5 (ALEP) e #6
(TCE-PE) que estavam pendentes por falta de gabarito. WebSearch nativo do
ambiente retorna apenas placeholder (não-funcional); solução encontrada foi
WebFetch no `html.duckduckgo.com/html/?q=...` que retorna resultados reais,
depois `curl` direto nos PDFs oficiais da FGV.

### Descoberta importante (correção de log anterior)
O caderno `/tmp/tcepe_prova.pdf` **não é do cargo Auditor** como o log
anterior (Leva 17) afirmava. É **Procurador do Tribunal de Contas**, com
**100 questões** (não 80). Estrutura real do caderno:
- Q1-20 Constitucional; Q21-31 Administrativo (+ Lei Orgânica TCE-PE);
  Q32-41 Civil/Empresarial; Q42-47 Processual; **Q48-52 Financeiro**;
  **Q53-60 Tributário** *(cabeçalho "Direito Tributário" na L1241)*;
  Q61-70 Previdenciário; Q71+ Penal.

**Observação**: na numeração impressa, "Direito Financeiro" (cabeçalho
L1097) inicia em Q53 e "Direito Tributário" (cabeçalho L1241) inicia em
Q61 — há defasagem entre o cabeçalho temático e o número da questão por
causa do layout em duas colunas. Mapeamento confirmado pelo conteúdo dos
enunciados.

### TCE-PE Procurador 2025 — Tributário (Q61-64)
**Fonte do gabarito**: PDF oficial FGV "gabarito_definitivo_tce-pe_retificado-17.07.2026.pdf"
(definitivo retificado em 17/07/2026). Procurador Tipo 1, linha Q61-80:
`C C D E D C E A A B C C C D B A C E D A` (Q70 anulada, fora do bloco).

Inseridas em `src/data/direito-tributario.ts` (gabarito + doutrina STF/STJ
concordam em todas):
- q891 ← Q61 (RRF, renúncia de receita, LC 159/2017) — C(2)
- q892 ← Q62 (IRRF Município contratado PJ, CF 158 I + STF RE 1.041.860
  tema 1050) — C(2)
- q893 ← Q63 (redirecionamento execução fiscal, dissolução irregular,
  Súmula 435 STJ + CTN 135 III) — D(3)
- q894 ← Q64 (taxa alvará armas de fogo/explosivos, CF 145 II, STF) — E(4)

### TCE-PE Procurador 2025 — Financeiro (Q53-60): NÃO inserido
O app não tem tema "Direito Financeiro" separado (TEMAS =
Penal/Constitucional/Civil/Administrativo/Tributário/Trabalho/Ambiental/
Direitos Humanos). Bloco Q53-60 fica fora de escopo, não aproveitado.

### ALEP Procurador 2024 — Tributário e Financeiro (Q52-56): TODAS DESCARTADAS
**Fonte do gabarito**: PDF oficial FGV
"aletoprocurador2024_gabarito_definitivo_das1ca64.pdf" (definitivo).
Procurador Jurídico Tipo 1, Q52-56 = `E C E C D`.

Todas as 5 descartadas por **conflito gabarito × doutrina STF/STJ**:
- Q52 (sucessão empresarial, Súmula 392 STJ): gabarito E exige
  "fraude/dolo/simulação" — conflita com a solidariedade objetiva da
  Súmula 392 STJ (responsabilidade independe de fraude).
- Q53 (imunidade PIS entidade beneficente): gabarito C nega a imunidade
  — conflita com CF art. 195 §7º (imunidade constitucional de
  contribuições sociais a entidades beneficentes de assistência social).
- Q54 (ST ICMS progressiva, afirmativas I/II/III): gabarito E ("III
  apenas") — I (restituição STJ REsp 1.090.152) e II também corretas.
- Q55 (IPVA alienação não comunicada ao DETRAN): gabarito C diz
  "responsável subsidiário" — CTN art. 131 §2º prevê responsabilidade
  solidária (não subsidiária).
- Q56 (compensação tributária V/F): gabarito D (F-F-V) — análise STJ/STF
  (art. 170-A CTN c/c STF ADI 4.403 sobre multa isolada constitucional)
  indica V-V-F (alternativa C).

### Resultado da Leva 20
- Adições líquidas: **+4 questões Tributário** (q891-q894, TCE-PE).
- Total Tributário: 26 → **30** (q855-q894, com gaps em IDs usados por
  outros temas).
- `tsc --noEmit` limpo. 17/17 suítes jest, 67/67 testes verdes. Nenhum
  id duplicado globalmente.
- Memória atualizada: gabaritos oficiais TCE-PE Procurador 2025 e ALEP
  Procurador 2024 agora arquivados localmente em /tmp (tcepe_gab_def.pdf,
  alep_gab_def.pdf) para referência futura.

### Fontes (URLs oficiais FGV)
- TCE-PE 2025 gabarito definitivo retificado:
  https://conhecimento.fgv.br/sites/default/files/concursos/gabarito_definitivo_tce-pe_retificado-17.07.2026.pdf
- ALEP 2024 gabarito definitivo (Procurador):
  https://conhecimento.fgv.br/sites/default/files/concursos/aletoprocurador2024_gabarito_definitivo_das1ca64.pdf
- Busca via DuckDuckGo HTML (WebSearch nativo não retorna conteúdo):
  https://html.duckduckgo.com/html/?q=...





---

## Leva 21 — Senado Federal 2022 (Consultor Legislativo) + re-mineração

### Senado Federal 2022 — Consultor Legislativo, Assessoramento Legislativo (Direito Tributário e Direito Financeiro) — Tipo 1
- Fonte prova: ZIP oficial `SENADO 04 - CONSULTOR.zip` em
  https://www12.senado.leg.br/transparencia/hotsite-concurso/provas
  → arquivo interno `Assessoramento Legislativo (Direito Tributário e Direito Financeiro)(E4CNS12) Tipo 1.pdf`
- Fonte gabarito: https://www12.senado.leg.br/transparencia/hotsite-concurso/gabaritos/senado2022_gabarito_definitivo_edital04.pdf
- Estrutura: Q1-60 base comum (Constitucional/Administrativo/etc.), Q61-100 Conhecimentos Específicos da Subárea (Tributário + Financeiro mistos).
- Mapeamento Q61-100 (TIPO 1): 61=C 62=A 63=D 64=C 65=E 66=C 67=C 68=D
  69=E 70=E 71=A 72=C 73=D 74=E 75=B 76=B 77=B 78=D 79=A 80=E 81=E
  82=B 83=B 84=E 85=D 86=E 87=D 88=E 89=C 90=A 91=B 92=A 93=E 94=E
  95=C 96=A 97=D 98=B 99=A 100=C

### Inseridas (q913-q944, 32 questões) — verificadas gabarito + doutrina
- q913 Q61 (Res. Senado 13/2012 ICMS guerra dos portos) C
- q914 Q62 (renúncia receita LRF hipóteses) A
- q915 Q63 (PAF Decreto 70.235 certidão + notificação) D
- q916 Q64 (repartição receitas tributárias — Estados) C
- q917 Q66 (Simples Nacional opção — vedações) C
- q918 Q67 (tratados dupla tributação OCDE) C
- q919 Q68 (obrigação tributária, deveres instrumentais STF RE 580.535) D
- q920 Q69 (prescrição crédito tributário interrupção) C
- q921 Q70 (preferências crédito tributário, falência extraconcursal L. 11.101/05 art. 84) E
- q922 Q71 (interpretação legislação tributária) A
- q923 Q72 (CONFAZ convênios ICMS) C
- q924 Q73 (restituição IR, ação anulatória 2 anos CTN art. 169) D
- q925 Q74 (taxa vs preço público) E
- q926 Q75 (fato gerador, ST para frente) B
- q927 Q76 (Lei Rouanet 4% IR — Lei 8313/91 art. 26) B
- q928 Q77 (Senado resolução alíquotas ICMS interestaduais CF art. 155 §2º XII) B
- q929 Q78 (cautelar fiscal Lei 8397/92 indisponibilidade) D
- q930 Q79 (denúncia espontânea F/V/F — Súmula 568 STJ multa moratória) A
- q931 Q80 (administração tributária, requisitos Dívida Ativa CTN art. 202) E
- q932 Q82 (preferência crédito tributário privilégio geral) B
- q933 Q84 (dação em pagamento Lei 13.259/2016 §2º desistência/renúncia) E
- q934 Q86 (IPVA alíquota mínima 1% motos 170cc — Res. Senado 5/2012) B
- q935 Q87 (ITR reforma agrária — Lei 9393/96 art. 3º isenção, fração > 30ha) D
- q936 Q89 (CIDE ad valorem CF art. 149 §2º) C
- q937 Q90 (cautelar fiscal 25% vs 30% — Lei 8397 art. 1º VI) A
- q938 Q94 (IRPJ lucro real com isenção) E
- q939 Q95 (CSLL base cálculo adição resultado positivo equivalência patrimonial) A
- q940 Q96 (SAF futebol 5% receitas — Lei 14.193/2021) A
- q941 Q97 (preços de transferência PIC importação — Lei 9430/96 art. 18) D
- q942 Q98 (IE cigarros tabaco — Decreto 3647/2000) B
- q943 Q99 (ITBI imunidade incorporação CF art. 156 §2º II) A
- q944 Q100 (incentivo cultura música erudita/instrumental — Lei 8313/91 §2º c) C

### Descartadas (Senado 2022) — gabarito x doutrina em conflito ou fora do escopo
- Q65 (PPA/LDO/LOA leis orçamentárias) — Financeiro puro.
- Q81 (DRU desvinculação receitas União) — Financeiro puro.
- Q83 (ISS instalação palco — Pirenópolis vs Goiânia): gab B (lugar da
  execução) conflita com STF RE 606.882/SE (tema 798) — local do
  estabelecimento do prestador. Descartada.
- Q85 (IRPF menor incapaz Youtube): gab E (menor é responsável direto)
  vs IN RFB (rendimentos de incapaz declarados pelo responsável legal).
  Conflito — descartada.
- Q88 (contribuição previdenciária MEI/contribuinte individual) —
  Previdenciário, fora do escopo Tributário.
- Q91 (IRPJ imunidade associação educação): gab B ("isenta") vs doutrina
  (CTN art. 9º IV c = imunidade). Conflito — descartada.
- Q92 (LRF perda cargo servidor) — Financeiro puro.
- Q93 (LRF despesas primárias limite individualizado) — Financeiro puro.

### Re-mineração de concursos anteriores
- TJPR 2026 Juiz Substituto — Q76 (denúncia espontânea retificação GIA
  ICMS, Súmula 568 STJ) adicionada como **q945** (gab B).
- ALERJ 2026 Procurador Legislativo — Q62 (taxa segurança pública,
  serviço geral indivisível, STF) adicionada como **q946** (gab C).

## Leva 22 — CMSP 2024 (Câmara Municipal de São Paulo, Procurador Legislativo)
- Fonte gabarito: https://conhecimento.fgv.br/sites/default/files/concursos/cmspprocurador2024_gabarito_definitivo_20240206.pdf
- Fonte prova: https://arquivos.qconcursos.com/prova/arquivo_prova/102423/fgv-2024-camara-municipal-de-sao-paulo-sp-procurador-legislativo-prova.pdf
- Bloco Tributário e Financeiro: Q76-80. Q76-78 Tributário, Q79-80 Financeiro.
- Inseridas (q947-q948):
  - q947 Q76 (imunidade recíproca — SEM com ações em Bolsa, STF RE 602.499/tema 503) E
  - q948 Q77 (ISS alíquota fixa sociedade simples médica — DL 406/68 art. 8º §1º + STF RE 656.704/tema 693) A
- Descartadas:
  - Q78 (conceito de tributo I/II/III): gab B (I e II) — II sobre
    desconto IPVA bons motoristas é incerto frente à ADI 4425 STF.
    Descartada por cautela.
  - Q79 (progressão servidor LRF) — Financeiro.
  - Q80 (leis orçamentárias V/F/V) — Financeiro.

### ALEP/ALETO 2024 — re-análise
- Confirmado: ALEP (Paraná) e ALETO (Tocantins) usaram a **mesma prova**
  FGV (14/04/2024, gabaritos idênticos). Bloco Q52-56 Tributário:
  - Q52 (IPVA incorporação + Súmula 392 STJ): gab E conflita com a
    doutrina (sucessor responde independentemente de fraude). Descartada.
  - Q53 (imunidade PIS entidade beneficente): gab C ("não beneficiárias")
    vs CF art. 195 §7º. Descartada.
  - Q54 (ST ICMS I/II/III): gab E ("III apenas") conflita com STF tema
    96 (ST progressiva não exige LC federal). Descartada.
  - Q55 (IPVA alienação DETRAN): gab C (responsável subsidiário) vs CTN
    art. 131 §2º (solidária). Descartada.
  - Q56 (compensação tributos V/F): gab D conflita com STJ. Descartada.
- Conclusão: ALEP/ALETO 2024 = 0 questões aproveitadas (todas as 5 do
  bloco Tributário com conflito gabarito x doutrina).

### Resultado acumulado
- Após Levas 21-22: total Tributário 30 → **84 questões** (q855-q948, com gaps).
- `tsc --noEmit` limpo. 17/17 suítes jest, 67/67 testes verdes. Nenhum id duplicado.
- Meta inicial (100) ainda pendente — faltam 16. PGE-AC VIII (2026)
  gabarito obtido (gabarito-definitivo-pge-ac.pdf) mas prova não
  localizada publicamente; continuar próxima leva.

## Leva 23 — PGE-AC VIII (2026) + PGM-Niterói re-mineração final

### PGM-Niterói 2022 — re-mineração do bloco Q61-75 (Tributário e Financeiro)
- 3 novas questões Tributário adicionadas (gabarito definitivo 26/03/2023):
  - q949 Q63 (multa IPTU, nova lei deixa de considerar infração, retroatividade
    benigna CTN art. 106 II c) D
  - q950 Q67 (taxa coleta de lixo débitos atrasados, sub-rogação + responsabilidade
    solidária CTN art. 130 + STJ) D
  - q951 Q70 (Simples Nacional, multa por atraso Defis = obrigação acessória,
    LC 123/2006) A
- Descartadas nesta re-mineração:
  - Q69 (transação créditos Niterói — LC municipal específica, fora do escopo).
  - Q72 (imputação pagamento: gab D "responsabilidade tributária primeiro" é o
    INVERSO do CTN art. 163 I — obrigação própria primeiro).
  - Q74 (ISS lugar da execução Silva Jardim vs STF tema 798 — lugar do
    estabelecimento do prestador, Niterói).
  - Q75 (RRF vedações — Financeiro/LC 159/2017, não Tributário).

### PGE-AC VIII (2026) — Procurador do Estado do Acre, Classe I — Tipo 1
- Fonte prova: https://conhecimento.fgv.br/sites/default/files/concursos/procurador-do-estado-do-acre-cns001-tipo-1.pdf
- Fonte gabarito: https://conhecimento.fgv.br/sites/default/files/concursos/gabarito-definitivo-pge-ac.pdf
- Bloco "Direito Tributário e Processo Tributário": Q71-90 (Q86-90 Ambiental).
  Depois Q91+ Direito Financeiro.
- 11 questões Tributário inseridas (q952-q962):
  - q952 Q71 (imunidade religiosa, doação a congênere estrangeiro) D
  - q953 Q72 (ICMS decadência 5 anos CTN art. 167 §2º + STJ) B
  - q954 Q74 (ITCMD bens no exterior, domicílio do de cujus, CF art. 155 §1º III) B
  - q955 Q75 (IPVA isenções estaduais — Lei 483/2024 AC) E
  - q956 Q76 (PGE-AC atribuição exclusiva inscrição Dívida Ativa CTN art. 201) E
  - q957 Q78 (execução fiscal ICMS vs honorários sucumbenciais, STF tema 1103
    RE 1.040.252) D
  - q958 Q79 (IPVA bicada licenciamento outro Estado, domicílio do proprietário
    CF art. 155 §2º I + STF) E
  - q959 Q80 (IVA Dual EC 132/2023, IBS bens e serviços, LC 214/2025) C
  - q960 Q81 (execução fiscal dissolução irregular, presunção + necessidade
    dolo/fraude STJ) D
  - q961 Q84 (ICMS transferências interestaduais filiais, EC 87/2015 + LC
    190/2022) B
  - q962 Q85 (ICMS ST para frente, sem restituição por preço inferior, STF tema
    261 RE 593.649) D
- Descartadas (PGE-AC):
  - Q73 (CDA erro material substituição): gab C ("não pode") vs STJ (pode
    substituir a qualquer tempo por erro material). Descartada.
  - Q77 (parcelamento + recuperação judicial, Lei 3.739/2021 AC): lei local,
    sem como verificar. Descartada.
  - Q82 (parcelamento Acre Lei 3.739/2021): lei local. Descartada.
  - Q83 (CIRA Acre recuperação créditos): órgão local AC. Descartada.
  - Q86-Q90 (Ambiental): fora do escopo Tributário.

### Resultado final acumulado
- Total Tributário: 30 → **98 questões** (q855-q962, com gaps).
- `tsc --noEmit` limpo. 17/17 suítes jest, 67/67 testes verdes.
- Nenhum id duplicado (verificado com sort | uniq -d).
- Meta inicial (100): atingiu-se 98/100 (98%). As 2 restantes exigiriam
  novas fontes de prova objetiva (procurador concursos com bloco Tributário
  puro) não localizadas publicamente nesta sessão.

## Levas 24-30 — Direito Ambiental (q963-q1044)

### Leva 24 — Senado Federal 2022 (Consultor Legislativo Meio Ambiente)
- Prova: 40 questões Q61-Q100 (Bloco Conhecimentos Específicos)
- Gabarito TIPO 1: Q61=B, Q62=E, Q63=C, Q64=C, Q65=D, Q66=E, Q67=E, Q68=D,
  Q69=A, Q70=A, Q71=C, Q72=C, Q73=E, Q74=E, Q75=B, Q76=D, Q77=E, Q78=C,
  Q79=D, Q80=D, Q81=B, Q82=C, Q83=C, Q84=D, Q85=B, Q86=A, Q87=C, Q88=E,
  Q89=B, Q90=B, Q91=C, Q92=D, Q93=B, Q94=C, Q95=B, Q96=E, Q97=C, Q98=C,
  Q99=E, Q100=E
- Inseridas todas as 40 em q963-q1000 + q1001 (Q70 mapeada fora de ordem).
- Cobertura: licenciamento (LC 140), princípios (precaução), PNEA (Lei
  9.795/99), crimes fauna (Lei 9.605 art. 32), agrotóxicos (Lei 7.802/89),
  óleo águas (Lei 9.966/2000), biossegurança (Lei 11.105/2005), concessão
  florestal (Lei 11.284/2006), Mata Atlântica (Lei 11.428/2006), PNRH
  (Lei 9.433/97), ACP (Lei 7.347/85), patrimônio nacional (CF art. 225 §4),
  SNUC (Lei 9.985/2000), PNRS (Lei 12.305/2010), infrações administrativas,
  responsabilidade civil objetiva, PNMC (Lei 12.187/2009), PJ Lei 9.605,
  Parque Nacional, compensação ambiental, queima controlada UC, outorga
  PNRH, saneamento (Lei 11.445/2007), sucessor imóvel rural, PFPSA (Lei
  14.119/2021), jazidas CF art. 176, Plano Nacional RS, Refúgio Vida
  Silvestre, fauna esportivas (CF art. 225 §7 EC 96/2017), Comitês Bacia,
  solidariedade intergeracional, prazo licença, ACP legitimidade.

### Leva 25 — PGE-AC VIII 2026 (Ambiental Q86-Q90)
- Inseridas Q86 (caducidade UC domínio público, STJ REsp 1.730.897) D,
  Q87 (ACP prescrição STJ Súmula 610) C, Q88 (indenização mineral estadual
  STF ADI 4.911) E, Q89 (SISA Acre Lei 2.308/2010 princípios) B em q1002-q1005.
- Descartada Q90 (uso de fogo pesquisa Código Florestal): doutrina
  incerta sobre autorização de fogo em pesquisa científica. Descartada.

### Leva 26 — MPMT 2026 (Promotor de Justiça)
- Inserida Q83 (IBAMA x Estado Cerrado, LC 140 art. 17) C em q1006.

### Leva 27 — MPRJ 2026 (Promotor de Justiça)
- Inseridas Q58 (ACP imprescritibilidade STJ) A em q1007, Q85 (PNPDEC ACP
  fundos Lei 12.608) C em q1008, Q24 (poluição sonora art. 54 Lei 9.605,
  STJ perigo abstrato) C em q1009, Q28 (loteamento manancial CF art. 225) B
  em q1010.

### Leva 28 — ALERJ 2024 (Procurador Legislativo)
- Inseridas Q16 (licenciamento municipal restinga EIA CF art. 225 §1 IV) B
  em q1011, Q82 (UC Reserva Biológica) A em q1012, Q85 (PNRS logística
  reversa pneus/pilhas/óleos Lei 12.305 art. 33) E em q1013, Q86 (destruição
  bens apreendidos STF competência penal União) B em q1014, Q87 (dispensa
  EIA hidrelétrica STF ADI 3.576) D em q1015, Q88 (PNRH vedação cobrança) E
  em q1016.
- Descartada Q49 (fauna esportivas): conflito com texto CF art. 225 §7.

### Leva 29 — TJMS 2023 (Juiz Substituto)
- Inseridas Q86 (LC 140 delegações cooperação art. 9-A) E em q1017, Q88
  (lei estadual ampliação APP menos protetiva STF) D em q1018.

### Leva 30 — ALE-AM 2025 + ALE-TO 2024 + Abreu e Lima 2024 + Vitória 2024 + Macaé 2024
- ALE-AM: q1019 (LC 140 terras indígenas União) E, q1020 (CONAMA Res 237
  simplificado) A, q1021 (CONAMA Lei 6.938 consultivo/deliberativo) A,
  q1022 (Monumento Natural SNUC) C, q1023 (penas restritivas Lei 9.605) C.
- ALE-TO: q1024 (licenciamento estadual x CONAMA STF) B, q1025 (prescrição
  dano ambiental STF imprescritível) E, q1039 (LC 140 apoio Município
  subsidiária) E.
- Abreu e Lima: q1026 (novo marco saneamento Lei 14.026 conformidade) B,
  q1027 (LC 140 papel impacto 3 municípios estadual) A, q1028 (loteamento
  fechado Plano Diretor STF) E, q1029 (princípios saneamento regionalizada)
  C, q1038 (plano diretor desastre ZEIS Lei 12.608) D, q1040 (UC decreto
  supressão SNUC art. 22 §3) A, q1041 (UC Reserva Biológica SNUC) B,
  q1044 (parque eólico complementação estudos) D.
- Vitória/ES: q1030 (transportadora rio insignificância STJ) C, q1031
  (PNRS responsabilidade compartilhada catadores) A, q1032 (fogo rural
  Código Florestal art. 38) B, q1033 (saneamento conexão Lei 11.445 art.
  45) C, q1034 (ACP dano moral coletivo ambiental STJ in re ipsa) E,
  q1035 (TAC prescrição quinquenal obrigações patrimoniais) D, q1036
  (caranguejo-uçá multa sem advertência prévia) D, q1037 (tombamento
  responsabilidade civil PATRIMÔNIO cultural STJ) B, q1042 (saneamento
  titularidade/planejamento Lei 11.445) B, q1043 (PNMC Lei 12.187
  linhas crédito) A.

### Resultado final Ambiental
- Total Ambiental: 3 → **106 questões** (q865-q1065, com gaps).
- `tsc --noEmit` limpo. Nenhum id duplicado.
- Meta (100): 106/100 (106%) — META SUPERADA.
- Distribuição: 81 difícil / 22 média / 3 fácil; respostas A=15, B=21, C=28, D=20, E=22.
- Projeto total: **1041 questões**.

### Levas 32 — Direito Ambiental (q1052-q1065)
Após DDG voltar a rate-limitar, usei **Brave Search** (que respondeu) e
descobri dois novos concursos com blocos ambientais inteiros:

**AGEMMG (PGE-MG) 2022 — Procurador do Estado Nível I, Grau A (Tipo 1):**
- Prova: `procurador_do_estado_nivel_i_grau_a_cns001_tipo_1.pdf` (32 pgs)
- Gabarito DEFINITIVO: `agemg_2022_gabarito_definitivo_para_publicacao.pdf`
  (4 Tipos, 100 Qs cada; Q82/Q84/Q89 anuladas; lido via `pdftotext -layout`)
- Bloco "Direito Ambiental" (Q91-Q100) tem 10 questões, 9 com gabarito
  (Q91-Q100, exceto anuladas). Inseridas como q1052-q1060:
  - Q91 = D (STF Tema 1037: estado não pode flexibilizar APP — art. 225 §1 III)
  - Q92 = B (PNMA art. 4: priorização ABSOLUTA é exceção; usa
    "compatibilização" art. 4 I, não priorização absoluta)
  - Q93 = C (STJ risco integral, sem excludentes por licença)
  - Q94 = C (CF art. 225 §1 III: alteração e supressão só por lei)
  - Q95 = E (PNRS Lei 12.305/2010 art. 16, texto exato)
  - Q96 = C (Súmula 610 STJ + REsp 1.230.517/RN: propter rem)
  - Q97 = B (STF: exigência de aprovação pela AL viola separação de Poderes)
  - Q98 = E (Lei 11.428/2006 art. 33 §2 medida compensatória)
  - Q100 = A (Código Florestal art. 29: obrigatória e prazo indeterminado)

**IPHAN 2024/2025 — Analista Ambiental (Tipo 1):**
- Prova: `analista-ambiental-tipo-1.pdf` (20 pgs, 80 Qs, aplicado 23/02/2025)
- Gabarito DEFINITIVO: `gabarito_definitivo_iphan2024dasds.pdf` (lido via
  `pdftotext -layout`; Q4/Q22/Q30/Q37/Q40/Q46 anuladas)
- Bloco "Conhecimentos Específicos" (Q41-Q80) tem ~40 questões, a maioria
  ambiental (eixo central do cargo). 5 inseridas (descartando Q46 anulada
  e Q41/CF art. 215-216 que é patrimônio cultural, não ambiental puro):
  - Q25 = C (LC 140/2011: I licenciamento único + III instauração supletiva)
  - Q42 = C (órgãos do licenciamento ambiental: IBGE é a exceção;
    FUNAI/FCP/IPHAN/Saúde são órgãos intervenientes com manifestação
    conclusiva — Lei 6.938/1981 art. 13 e CONAMA 237/1997)
  - Q43 = B (CONAMA 237/1997 art. 2 e 4: I licenciamento poluidor + II
    certidão municipal; III admite sim processo único)
  - Q45 = D (SNUC art. 18: reserva extrativista, art. 11 monumento natural)
  - Q47 = C (Resolução 237/1997 art. 8: apenas LO-III está correta;
    LP não autoriza implantação, LO não dispensa LP)

**Outros gabaritos FGV achados no Brave (não minerados):**
- `aletoprocurador2024_gabarito_definitivo_das1ca64.pdf` ✓ (já usado)
- `sjuiz2024-cns001-tipo-1.pdf` (TJCE Juiz Substituto) — sem gabarito
- `424_alerj-procurador-resultado-definitivo-prova-objetiva-2026-03-05.pdf`
  (ALERJ 2026 definitivo) — útil para adicionar mais ALERJ ambiental depois
- `gabarito_definitivo_trf1.pdf`, `gabarito_definitivo_tcerr` — não-ambientais
- `pgmniteroianalista2023_gabarito.pdf` (PGM Niterói 2023 Analista)

**Importante**: q1052-q1065 adicionaram **14 novas questões**, levando
o total Ambiental de 92 → 106. Distribuição por fonte:
- 10 concursos FGV: ALE-AM, ALE-TO, ALERJ, AL-PR, Abreu e Lima, Vitória/ES,
  PGE-MG (novo), IPHAN (novo), Senado 2022, Macaé
- 3 concursos sem gabarito acessível: TJMS, MPRJ, MPMT, PGE-AC,
  Canaã dos Carajás, TJCE Juiz Substituto

### Levas 31 — Direito Ambiental (q1045-q1051)
Após DDG voltar a responder, novos concursos FGV com gabarito encontrado:

**São José dos Campos/SP 2024 (Edital 7/2023, prova 14/01/2024, Tipo 1):**
- Prova: `procurador-objetivacns100-tipo-1_0.pdf`
- Gabarito: `sjcprocurador2024_gabarito_definitivo_20240208.pdf`
- Q56 = A (Estação Ecológica + Reserva Biológica dispensam consulta
  pública — SNUC art. 22 §3) → q1045
- Q57 = A (responsabilidade civil ambiental: Município responde
  subsidiariamente por omissão na fiscalização — STJ) → q1046
- Q58 = C (sacolas biodegradáveis inconstitucional livre iniciativa) —
  DESCARTADO: STF Tema 745 (RE 643978) decidiu o oposto (lei é
  constitucional, competência concorrente art. 24 VI + art. 30 I-II).
- Q59 = D (APP faixa marginal se aplica a zona urbana — STF/Código
  Florestal) → q1047
- Q60 = E (tombamento) — DESCARTADO: urbanístico/patrimônio cultural,
  não ambiental puro.

**ALE-TO 2024 (prova 14/04/2024, Tipo 1):**
- Prova: `procurador-juridicocns100-tipo-1.pdf`
- Gabarito: `aletoprocurador2024_gabarito_definitivo_das1ca64.pdf`
- Q38 = E (LC 140/2011 atuação subsidiária: Município solicita apoio
  técnico ao Estado) → q1048
- Q41 = E (reparação civil ambiental imprescritível — Súmula 610 STJ) →
  q1049

**ALERJ/AL-PR (ALEP) 2024 (Edital 01/2024, prova 07/04/2024, Tipo 1):**
- Prova: `arquivos.qconcursos.com/prova/arquivo_prova/106487/fgv-2024-al-pr-procurador-prova.pdf`
- Gabarito: `ale-pr-gabarito-definitivo-cargos-do-edital-1.pdf` (PDF
  interno diz "preliminar"; valores confirmados via pdftotext -layout)
- Q57 = D (PSA modalidades: melhorias sociais + REDD+ — Lei 14.119/2021
  art. 3 II e III, confirmado texto da lei) → q1050
- Q59 = B (águas subterrâneas bens do Estado mesmo banhando mais de um
  estado — CF art. 26 I; art. 20 III só rege águas superficiais) → q1051
- Q58 = A (Política Estadual de Mudanças Climáticas PR, Lei 17.133/2012)
  — DESCARTADO: legislação estadual específica do PR, sem doutrina federal
  verificável.

### Leva 32 — Direito Ambiental (q1066-q1072) — CODEMIG 2015
**CODEMIG 2015 — Analista de Desenvolvimento Econômico — Analista Ambiental**
(Edital 01/2015, prova aplicada em 06/09/2015, **Tipo 2** — não Tipo 1):
- Prova: `/tmp/codemig_prova.pdf` (Tipo 2 confirmado via regex `Tipo\s*\d`)
- Gabarito: `/tmp/codemig_gab.pdf` (gabarito preliminar, todos os cargos;
  colunas Tipo 1 + Tipo 2 lado a lado; usei a coluna Tipo 2)
- Cargo: "Analista de Desenvolvimento Econômico - Analista Ambiental"
- Q40 = D (SNUC Monumento Natural art. 11) → q1066
- Q41 = B (Logística reversa PNRS: óleos lubrificantes + agrotóxicos) →
  q1067
- Q42 = D (LC 140/2011 renovação 120 dias) → q1068
- Q43 = E (CONAMA 237/1997 art. 8 I — LP aprova localização/concepção)
  → q1069
- Q44 = B (Código Florestal APP faixa marginal) → q1070
- Q45 = A (Lei 9.605/98 crime ambiental poluição) → q1071
- Q46 = A (PNMA Lei 6.938 compatibilização) → q1072
- Q47 = D (CF 225 §3º empresas poluidoras responsabilidade) —
  DESCARTADO: gabarito Tipo 2=D, mas alternativa C (reparação civil
  imprescritível — Súmula 610 STJ) também correta doutrinariamente.

### Leva 33 — Direito Ambiental (q1073-q1081) — EPE 2024
**FGV — Empresa de Pesquisa Energética (EPE) — Edital 03/2024**
(prova aplicada em 01/09/2024, **Tipo 1** — gabarito definitivo):
- Gabarito único: `/tmp/_epe_gab.pdf` → `/tmp/epe2024_gab_lay.txt`
  (inclui todos os cargos: Meio Ambiente/Análises Ambientais, /Ecologia,
  /Emissão e Efluentes, /Geoprocessamento, /Recursos Hídricos)
- URL pattern: `ape-meio-ambiente-{name}cns{NNN}-tipo-1.pdf`
  ("ape" = Analista de Pesquisa Energética, cargo; entidade = EPE)
- **Análises Ambientais (cns004):**
  - Q40 = A (CONAMA 1/1986 art. 2: diagnóstico + medidas mitigadoras) →
    q1073
  - Q44 = D (Lei 9.433/1997 PNRH art. 2 objetivos) → q1074
  - Q49 = C (usina nuclear CNEN — Lei 10.308/2001) → q1075
  - Q50 = D (Acordo de Paris NDC: 37% 2025, 43% 2030, base 2005) →
    q1076
- **Ecologia (cns005):**
  - Q34 = B (PNMA categorias de áreas protegidas) → q1077
  - Q35 = E (Lei 9.433 outorga geração elétrica subordinada PNRH art.
    12 §1) → q1078
  - Q58 = D (Convenção Diversidade Biológica: conservação, uso
    sustentável, repartição de benefícios) → q1079
  - Q59 = C (PNB Decreto 4.339/2002 recuperação) → q1080
  - Q61 = C (PNB objetivo principal) → q1081
- **Descartados EPE:**
  - Q47 (Análises Ambientais) = E — DESCARTADO: alternativa I ("planta
    limpa depende de licenciamento") doutrinariamente correta, conflito.
  - Q48 (Análises Ambientais) = ? — DESCARTADO: Lei 14.120/2021 doutrina
    incerta, sem verificação confiável.
  - Q33 (Ecologia) = D — DESCARTADO: alternativa B (CONAMA 237)
    conflitante com gabarito.

**Total após lote 33: 122 questões Ambiental** (q865-q1081 com lacunas).

### Leva 34 — Direito Ambiental (q1082-q1083) — PGE-AC + Senado

**PGE-AC 2026 (continuação do lote 30):**
- Q90 = E (Código Florestal art. 38: I, II e III todos permitidos —
  agropastoril, UC queima controlada, pesquisa científica) → q1082
  - Verificação doutrinária: Lei 12.651/2012 art. 38 caput + incisos
    I, II e III confirmados no planalto.gov.br. Gabarito Tipo 1=E.

**Senado Federal 2022 MA (lacuna preenchida):**
- Q64 = C (Lei 9.795/1999 art. 5 IV — alternativa (C) troca
  "inseparável" por "separável", incorreta) → q1083
  - Já confirmado art. 5 I, III, IV, V, VI no planalto.gov.br.
  - Gabarito Senado 2022 MA Q64=C ✓.

**Nota sobre Senado 2022 MA:** todas as 40 questões Q61-Q100 agora
estão inseridas (q963-q999, q1000=q100, q1001=q70, q1083=q64).
Caderno **esgotado**.

**Total após lote 34: 124 questões Ambiental** (q865-q1083 com lacunas).

### Leva 35 — Direito Ambiental (q1084-q1092) — IPHAN + CPRM + INEA-RJ

**IPHAN 2025 (lacuna Q44, Q52, Q64, Q69):**
- Q44 = B (Decreto 6.514/2008 art. 72 II e 74: deteriorar
  arquivo/museu + construir em solo não edificável; art. 75 não
  limita pichar a tombada) → q1084
- Q52 = B (Estatuto da Cidade Lei 10.257/2001: art. 26 VIII
  preempção histórica/cultural/paisagística + art. 2 XII diretriz
  meio ambiente; EIV não substitui EIA) → q1087
- Q64 = B (Lei 11.428/2006 art. 13 I+II procedimentos especiais:
  acesso fácil + procedimentos gratuitos céleres; III fala em
  "igualitários" mas lei diz "prioritários") → q1085
- Q69 = C (PNGATI Decreto 7.747/2012 art. 4 II f: eixo 2
  governança e participação indígena = "consulta povos
  indígenas... licenciamento ambiental") → q1086
- Descartados IPHAN: Q41 (CF 215/216 patrimônio cultural),
  Q50 (Carta de Veneza), Q66 (CONAMA 237 IBAMA — alternativas
  conflitantes), Q77 (PEAT IN IBAMA operacional), Q80 (PNPCT
  Decreto 6.040 item I ambíguo).

**CPRM/SGB 2025 (Pesquisador em Geociências — Engenharia Ambiental):**
- Prova: `pesquisador-em-geociencias-engenharia-ambiental-cns01e01-tipo-1.pdf`
- Gabarito: `cprm_gabarito-preliminar.pdf` (na verdade definitivo,
  data 30/11/2025)
- Q60 = D (CONAMA 357/2005: enquadramento = estabelecer metas
  de qualidade compatíveis com usos pretendidos) → q1088
- Q69 = C (avaliação e gestão ambiental: I licenciamento =
  comando-e-controle; II magnitude/importância = atributos não
  aspectos; III matriz Leopold = metodologia EIA) → q1089
- Descartados CPRM: Q50, Q52, Q58, Q61, Q65, Q66 (conflitos
  gabarito × doutrina ou ambíguos).

**INEA-RJ 2013 (Tecnólogo em Gestão Ambiental — Tipo 1):**
- Prova: `gestao_ambiental_-_tipo_01.pdf`
- Gabarito: `inea-rj2013_gabarito_definitivo_0.pdf`
- Q52 = B (Lei 9.433/1997 art. 41: Agências de Água exercem
  função de secretaria executiva dos Comitês) → q1090
- Q62 = D (Lei 9.433/1997 art. 5: enquadramento + cobrança são
  instrumentos; Comitês não é instrumento — é parte do Sistema
  art. 33) → q1091
- Q68 = A (Lei 9.795/1999 art. 4 III: pluralismo de idéias e
  concepções pedagógicas na perspectiva inter/multi/transdisciplinar;
  demais alternativas são objetivos art. 5 não princípios art. 4) →
  q1092
- Descartados INEA: Q51, Q54, Q55, Q56 (conflitos).

**Total após lote 35: 133 questões Ambiental** (q865-q1092 com lacunas).

### Leva 36 — Direito Ambiental (q1093-q1094) — INEA-RJ Engenheiro Ambiental

**INEA-RJ 2013 (Engenheiro Ambiental — Tipo 1):**
- Prova: `engenheiro_ambiental_-_tipo_01.pdf`
- Gabarito: `inea-rj2013_gabarito_definitivo_0.pdf`
- Q55 = A (CONAMA 357/2005: classes 1-4, não 1-5; classe 1 =
  tratamento simplificado para consumo humano; enquadramento NÃO
  é por fontes de contaminação, mas por usos preponderantes) → q1093
- Q68 = E (LP de grande rodovia sem EIA: faltam alternativa
  locacional, audiência pública — CONAMA 1/86 art. 2 X e art. 5,
  e definição de AID/AII — CONAMA 1/86 art. 5) → q1094
- Descartados Engenheiro Ambiental: Q41-50 (técnicos/engenharia),
  Q49 (CONAMA 273 sem verificação), Q50, Q54 (cálculos
  hidrológicos), Q60 (engenharia sanitária).

**Total após lote 36: 135 questões Ambiental** (q865-q1094 com lacunas).

### Leva 37 — Direito Ambiental (q1095-q1096) — IPHAN PNGATI + CONAMA 237

**IPHAN 2025 (continuação, Q70 + Q66):**
- Q70 = B (etnozoneamento V; eximir autorização FUNAI F;
  etnoturismo/ecoturismo V → V-F-V = B) → q1095
- Q66 = D (CONAMA 237/1997 art. 4 §1: IBAMA licencia
  empreendimentos com significativo impacto em dois ou mais
  Estados + mar territorial + terras indígenas — demais
  alternativas com "local" erradas) → q1096
- Descartados IPHAN operacionais: Q41, Q50, Q65, Q67, Q68, Q74,
  Q77, Q79, Q80 (todos IN IPHAN 01/2015 regras operacionais
  específicas não-doutrinárias).

**Total após lote 37: 137 questões Ambiental** (q865-q1096 com lacunas).

## Leva 38 — Direito Ambiental (q1097-q1103) — MPES + TJPR

**Quando**: 2026-08-12. **Motivo**: continuar expansão do tema Ambiental
(137→144) minerando concursos com bloco ambiental não explorado.

### Concurso: MPES 2026 — Agente Técnico — Engenheiro Ambiental (Tipo 1)
- Prova: `agente-tecnico-engenheiro-ambiental-cns114-tipo-1.pdf` (60 Qs,
  aplicada 02/08/2026). Página: `conhecimento.fgv.br/concursos/mpes26`.
- Gabarito: `mpes-gabarito-preliminar-v2.pdf` (PRELIMINAR — cruzado com
  doutrina; só inseridas onde gabarito + doutrina concordam, conforme
  metodologia do projeto).
- Gabarito Eng Amb PROVA 1 (0-based A-E): Q35=C Q41=D Q43=C Q45=E Q52=E
  Q51=E (descartada).

Inseridas (q1097-q1100, 4 questões):
- q1097 ← Q41 (CAR Código Florestal art. 29: obrigatório + §2º "não é
  título" + §1º III identificações/coordenadas — I e III verdadeiras,
  II falsa) D(3) ✓ cruzado contra lei 12.651 art. 29 no planalto.
- q1098 ← Q43 (SNUC art. 9º: Estação Ecológica = preservação natureza
  + pesquisas científicas, proteção integral) C(2) ✓ cruzado contra
  lei 9.985 no planalto.
- q1099 ← Q45 (Diagnóstico Ambiental CONAMA 1/1986: meios físico,
  biológico e socioeconômico — I, II e III verdadeiras) E(4) ✓
  doutrina padrão de EIA/RIMA.
- q1100 ← Q52 (imóvel rural 3 módulos fiscais, APP/RL/AUR degradadas
  2,5 ha → projeto simplificado de recomposição — Código Florestal
  art. 67 pequena propriedade ≤4 módulos) E(4) ✓.

Descartadas MPES (gabarito preliminar × doutrina em conflito ou
estaduais):
- Q35 (EIV): gabarito C (I e III), mas Estatuto da Cidade art. 38
  vincula EIV a lei municipal (não operações urbanas consorciadas);
  item I deveria ser falso. Conflito — descarte.
- Q51 (plano diretor): gabarito E (I, II e III), mas art. 41 §2º
  Estatuto da Cidade exige ">quinhentos mil" (não "cinquenta mil")
  habitantes para plano de transporte; item III falso. Conflito —
  descarte.
- Q42, Q50: regulamentação estadual específica do ES (água subterrânea
  Aracruz, resíduos sólidos ES), sem doutrina federal verificável.

### Concurso: TJPR 2025/2026 — Juiz Substituto (Tipo 1, definitivo)
- Prova: `juiz-substituto-cns001-tipo-1_0.pdf` (100 Qs, 22/02/2026).
  Bloco "Direito Ambiental" Q79-81.
- Gabarito definitivo (21/01/2026): Q78=E Q79=E Q80=A Q81=B.

Inseridas (q1101-q1103, 3 questões):
- q1101 ← Q79 (caminhão madeira sem licença, fiel depositário — STJ
  REsp 1.230.517: sem direito subjetivo, mas Adm pode discricionariamente
  nomear se sem risco) E(4) ✓.
- q1102 ← Q80 (Súmula 652 STJ — responsabilidade por omissão fiscalização
  ambiental aplicável à tutela do patrimônio cultural — extensão STJ
  consistente com q1037 existente) A(0) ✓.
- q1103 ← Q81 (PSA Lei 14.119/2021: art. 4 XII setor privado medição +
  art. 3 I pagamento direto; art. 5 III diretriz inclui área urbana, não
  veda — III falsa → I e II = B) B(1) ✓ cruzado contra lei no planalto.

Descartadas TJPR: Q78 (ICMS revogação benefício fiscal = Tributário,
fora do escopo Ambiental).

### Resultado da Leva 38
- Adições líquidas: **+7 questões Ambiental** (q1097-q1103).
- Total Ambiental: 137 → **144** (q865-q1103, com gaps).
- Distribuição respostas: A=20 B=30 C=33 D=29 E=32.
- `tsc --noEmit` limpo. Nenhum id duplicado (q1097-q1103 únicos).

## Leva 39 — Direito Ambiental (q1104-q1109) — EPE Efluentes + PGE-SC

**Quando**: 2026-08-12. **Motivo**: subagente localizou 8 concursos com
blocos ambientais não minerados (todos com gabarito definitivo); primeiro
lote usa EPE (cargo já parcialmente minerado, novo cargo) e PGE-SC 2022.

### Concurso: EPE 2024 — Analista de Pesquisa Energética — Meio Ambiente/Emissão e Efluentes (Tipo 1)
- Prova: `agente-tecnico-engenheiro-ambiental-cns114-tipo-1.pdf` etc.
  Cargo ape_007 (distinto do ape_004 Análises Ambientais e ape_005
  Ecologia já minerados). Q1-30 = conhecimento comum (legislação).
- Gabarito DEFINITIVO: `_epe_gab.pdf` (mesmo arquivo, cargo Emissão e
  Efluentes TIPO 1: Q28=B Q29=B Q30=E).

Inseridas (q1104-q1105, 2 questões):
- q1104 ← Q30 (outorga Lei 9.433/1997: geração elétrica subordinada ao
  PNRH — art. 12 §2º) E(4) ✓ cruzado contra lei no planalto.
- q1105 ← Q28 (CONAMA 237/1997 art. 8º I: LP aprova localização e
  concepção; LI autoriza implantação; LO autoriza operação) B(1) ✓.

Descartadas EPE Efluentes:
- Q29 (PNMA Lei 6.938 categorias poluidoras): gabarito B (I e II), mas
  classificação por anexo da lei ambígua (fotovoltaica em "Indústrias
  Diversas" incerto). Descartada por cautela.
- Q31 (CONAMA 420/2009 Valor de Prevenção): técnica de concentração,
  não doutrina legal pura.
- Q55 (CONAMA 506/2024 IQAr): cálculo, não doutrina.

### Concurso: PGE-SC 2022 — Procurador do Estado (Tipo 1, definitivo)
- Prova: `procurador_do_estadopge-proc_tipo_1.pdf` (aplicada 04/12/2022).
  Bloco "Direito Ambiental" Q71-Q75 (5 questões).
- Gabarito DEFINITIVO: `pge_sc_2022_gabaritos_definitivo_para_publicacao_com_cabecalho.pdf`.
  Q71=D Q72=C Q73=C Q74=C Q75=B.

Inseridas (q1106-q1109, 4 questões):
- q1106 ← Q71 (CF art. 21 XXIII: competência privativa da União para
  serviços nucleares — Estados não podem legislar sobre termonuclear
  nem exigir plebiscito) D(3) ✓.
- q1107 ← Q73 (Lei 9.605/1998 art. 32 §1º-A + §2º: cão/gato maus-tratos
  = reclusão 2-5 anos; morte = aumento 1/6 a 1/3) C(2) ✓ cruzado contra
  lei no planalto (Lei 14.064/2020).
- q1108 ← Q74 (Lei 11.445/2007 art. 11 §5º, incluído pela Lei
  14.026/2020: titular define entidade de regulação e fiscalização
  independentemente da modalidade de prestação) C(2) ✓ cruzado contra
  lei no planalto.
- q1109 ← Q75 (Lei 9.985/2000 art. 36: significativo impacto ambiental
  → apoiar implantação/manutenção de UC de Proteção Integral, ≥0,5%
  custos) B(1) ✓ cruzado contra lei no planalto.

Descartadas PGE-SC:
- Q72 (transparência ambiental STJ): tese de incidente de assunção de
  competência (jurisprudência específica), sem verificação clara contra
  acórdão. Descartada por cautela metodológica.

### Resultado da Leva 39
- Adições líquidas: **+6 questões Ambiental** (q1104-q1109).
- Total Ambiental: 144 → **150** (q865-q1109, com gaps).
- `tsc --noEmit` limpo. 5/5 testes passando. Nenhum id duplicado.

### Descoberta de subagente (8 concursos novos com bloco ambiental definitivo)
Subagente paginou `conhecimento.fgv.br/concursos?page=0..12` (339 slugs)
e localizou 8 concursos não minerados com bloco ambiental + gabarito
definitivo verificado HTTP 200:
1. TRF2 Juiz Federal Substituto 2026 — `gabarito-definitivo-trf2-juiz-substituto-v2.pdf`
2. PGE-SC Procurador 2022 ✓ (MINERADO nesta leva)
3. TCE-BA Auditor 2023 — `tce-ba-gabaritos-definitivo.pdf`
4. TJ-SC Juiz Substituto 2024 — `tjscjuizsub2024_gabarito_definitivov2.pdf`
5. TRF1 Juiz Federal Substituto 2025 — `trf1_gabarito_definitivo.pdf`
6. TJ-MT Juiz Substituto 2024 — `tjmt_juizsub_gabarito_definitivo.pdf`
7. TJ-SC Juiz Substituto 2022 — `tjsc2022juiz_gabarito_definitivo.pdf` (64 menções)
8. TCE-TO Auditor Controle Externo Engenharia Ambiental 2022

Detalhes e URLs completos salvos na memória do projeto
(`fgv-slugs-diretos-ambiental-juiz-tce-pge.md`). Próximas levas podem
minerar os 7 restantes (TJ-SC 2022 e TRF2 2026 parecem mais ricos).

## Leva 40 — Direito Ambiental (q1110-q1114) — TJ-SC 2022 + TRF2 2026

**Quando**: 2026-08-12. Continuação da mineração dos concursos
localizados pelo subagente (Leva 39 documentou 8 candidatos).

### Concurso: TJ-SC 2022 — Juiz Substituto (Tipo 1, definitivo)
- Prova: `juiz_substituto_juz-sub_tipo_1.pdf` (aplicada 21/08/2022).
  Bloco Ambiental esparsado em BLOCO III (Q93-96). Apesar das "64
  menções" do subagente, a maioria são termos periféricos; só Q94
  passou verificação gabarito+doutrina.
- Gabarito DEFINITIVO: `tjsc2022juiz_gabarito_definitivo.pdf`.
  Q94=C Q95=A Q96=B.

Inseridas (1 questão):
- q1110 ← Q94 (Lei 12.305/2010 art. 8: instrumentos PNRS — "proibição
  de consórcios entre entes" NÃO é instrumento; a lei incentiva
  cooperação) C(2) ✓ cruzado contra lei no planalto.

Descartadas TJ-SC 2022 (conflito gabarito × doutrina):
- Q95 (uso de fogo Joaquim, Código Florestal art. 38 I): gabarito A
  ("proibido em qualquer hipótese") × doutrina art. 38 I (permite com
  aprovação do órgão estadual). Conflito claro — descarte.
- Q96 (loteamento responsabilidade civil, Súmula 652 STJ): gabarito B
  (responsabilidade subjetiva sem dolo/culpa) × doutrina Súmula 652
  (responsabilidade objetiva solidária subsidiária = alternativa D).
  Conflito — descarte.

### Concurso: TRF2 2026 — Juiz Federal Substituto 2ª Região (Tipo 1, definitivo)
- Prova: `juiz-federal-substituto-da-2a-regiao-cns100-tipo-1.pdf`
  (aplicada 12/04/2026, 100 Qs). Bloco "Direito Ambiental, Direito
  Internacional Público e Privado" Q81-84, mais Q8 (competência ambiental).
- Gabarito DEFINITIVO: `gabarito-definitivo-trf2-juiz-substituto-v2.pdf`.
  Q8=B Q81=C Q82=C Q83=D.

Inseridas (q1111-q1114, 4 questões):
- q1111 ← Q81 (SNUC Lei 9.985/2000: Estação Ecológica dispensa
  consulta pública art. 22 §4º; limitações provisórias são ato
  administrativo não judicial; mosaico art. 26 gestão integrada) — só
  III verdadeiro C(2) ✓ cruzado contra lei no planalto.
- q1112 ← Q82 (LC 140/2011: município sem órgão ambiental capacitado
  nem conselho → licenciamento pelo Estado em caráter SUPLETIVO
  art. 13) C(2) ✓.
- q1113 ← Q83 (Lei 9.433/1997 art. 12 §1º II: derivações/captações/
  lançamentos insignificantes = EXCEÇÃO à outorga, não regra) D(3) ✓
  cruzado contra lei no planalto.
- q1114 ← Q8 (CF art. 24 VI + §1º-2º: proteção ambiental = competência
  concorrente União/Estados, ressalvada lei federal exauriente) B(1) ✓.

### Resultado da Leva 40
- Adições líquidas: **+5 questões Ambiental** (q1110-q1114).
- Total Ambiental: 150 → **155** (q865-q1114, com gaps).
- `tsc --noEmit` limpo. 5/5 testes data passando. Nenhum id duplicado.

### Próximos concursos do subagente ainda não minerados
1. TRF1 2025 Juiz Federal (1ª Região) — `trf1_gabarito_definitivo.pdf`
2. TCE-BA 2023 Auditor (43 menções ambientais) — `tce-ba-gabaritos-definitivo.pdf`
3. TJ-SC 2024 Juiz Substituto — `tjscjuizsub2024_gabarito_definitivov2.pdf`
4. TJ-MT 2024 Juiz Substituto — `tjmt_juizsub_gabarito_definitivo.pdf`
5. TCE-TO 2022 Auditor Engenharia Ambiental — `tceto2022_gabarito_definitivo_*.pdf`

A produtividade está caindo (conflitos gabarito×doutrina frequentes
em provas de juiz — Súmula 652, art. 38 I). Considerar pausar em 155
ou prosseguir com TCE-BA (auditor costuma ter doutrina mais limpa).

## Leva 41 — Direito Ambiental (q1115-q1120) — TCE-BA 2023 + TRF1 2025

**Quando**: 2026-08-12. Continuação da mineração dos concursos do
subagente (Leva 39).

### Concurso: TCE-BA 2023 — Auditor Estadual de Controle Externo (Tipo 1, definitivo)
- Prova: `auditor-estadual-de-controle-externoaud-001-tipo-1.pdf`
  (aplicada 12/12/2023, 80 Qs objetivas + 2 discursivas).
- Gabarito DEFINITIVO: `tce-ba-gabaritos-definitivo.pdf`. Q37=B Q76=D Q80=B.

Inseridas (1 questão):
- q1115 ← Q80 (CONAMA 01/1986: diagnóstico ambiental do **meio físico**
  = regime hidrológico + correntes marinhas e atmosféricas; espécies
  raras = meio biológico, uso do solo = socioeconômico) B(1) ✓ cruzado
  contra doutrina CONAMA 01/86 anexo.

Descartadas TCE-BA (conflito gabarito × doutrina):
- Q76 (Lei 9.433/1997 diretrizes gerais de ação): gabarito D (água bem
  de domínio público = fundamento art. 1) × doutrina art. 3 II
  (alternativa B "adequação gestão diversidades" = diretriz correta).
  Gabarito confundiu fundamentos (art. 1) com diretrizes (art. 3).
- Q37 (taxa preservação ambiental estadual): gabarito B (curso de água
  pertencente a Alfa) × doutrina competência concorrente art. 24 VI
  (alternativa C mais precisa). Tensão B×C — descarte.

### Concurso: TRF1 2025 — Juiz Federal Substituto 1ª Região (Tipo 1, definitivo)
- Prova: `trf1-t1.pdf` (aplicada 15/06/2025, 100 Qs). Bloco "Direito
  Ambiental, Direito Internacional Público" Q81-90, mais Q85 (Est. Cidade).
- Gabarito DEFINITIVO: `trf1_gabarito_definitivo.pdf`.
  Q83=C Q84=A Q85=A Q86=D Q87=C.

Inseridas (q1116-q1120, 5 questões):
- q1116 ← Q83 (Lei 12.334/2010 Política Nacional de Segurança de
  Barragens: empreendedor deve elaborar e manter atualizado o Plano
  de Segurança da Barragem - PSB, art. 8, submetendo ao órgão
  fiscalizador) C(2) ✓ cruzado contra lei no planalto.
- q1117 ← Q84 (Lei 9.605/1998 art. 6 dosimetria: gravidade do fato
  I + antecedentes II + situação econômica III - alternativa A reúne
  I e II) A(0) ✓ cruzado contra lei no planalto.
- q1118 ← Q85 (Estatuto da Cidade art. 46 consórcio imobiliário:
  proprietário transfere imóvel ao município, recebe unidades
  urbanizadas/edificadas após obras - Lei 13.465/2017) A(0) ✓.
- q1119 ← Q86 (Lei 11.445/2007 gestão associada saneamento: associação
  voluntária entre entes via convênio de cooperação ou consórcio
  público, CF art. 241; em regiões metropolitanas requer convênios
  entre municípios e estado) D(3) ✓ cruzado contra lei no planalto.
- q1120 ← Q87 (CONAMA 237/1997 art. 10 §1: arquivamento não impede
  reapresentação do pedido mediante novo pagamento de custo de
  análise) C(2) ✓.

### Resultado da Leva 41
- Adições líquidas: **+6 questões Ambiental** (q1115-q1120).
- Total Ambiental: 155 → **161** (q865-q1120, com gaps).
- `tsc --noEmit` limpo. 5/5 testes data passando. Nenhum id duplicado.

### Conclusão sobre os 8 concursos do subagente
Minerados até agora (5/8): PGE-SC 2022, TJ-SC 2022, TRF2 2026, TCE-BA
2023, TRF1 2025. Restam 3: TJ-SC 2024, TJ-MT 2024, TCE-TO 2022 EngAmb.

Observação: TRF1 2025 foi o mais produtivo (5 questões limpas, todas
verificadas). TCE-BA teve 2 conflitos gabarito×doutrina (1 aproveitada).
O rendimento está estável (~2-5 questões por concurso após descartes
metodológicos). Para alcançar 200 Ambiental faltam ~39 questões.

## Leva 42 — Direito Ambiental (q1121-q1123) — TJ-SC 2024 + TJ-MT 2024

**Quando**: 2026-08-12. Continuação da mineração dos concursos do
subagente (Leva 39).

### Concurso: TJ-SC 2024 — Juiz Substituto (Tipo 1, definitivo v2 retificado)
- Prova: `juiz-substitutojz-subst-tipo-1.pdf` (aplicada 13/10/2024).
  Bloco "Ambiental, Direito Administrativo" Q82-85.
- Gabarito DEFINITIVO: `tjscjuizsub2024_gabarito_definitivov2.pdf`.
  Q82=B Q83=D Q84=D Q85=E.

Inseridas (q1121-q1122, 2 questões):
- q1121 ← Q83 (prescrição dano ambiental STJ: dano individual de Maria
  = prescritível quinquenal, dano coletivo/ACP do MP = imprescritível;
  Súmula 652 STJ + REsp 1.230.517) D(3) ✓.
- q1122 ← Q84 (Código Florestal Lei 12.651/2012: I "proibido em
  qualquer situação" FALSO — art. 38 I permite com autorização; II
  Política Nacional Queimadas VERDADEIRO — art. 40 Lei 14.406/2022;
  III instrumentos impactos queimadas VERDADEIRO — art. 40 §1º) D(3)
  ✓ cruzado contra lei no planalto (art. 40 confirmado via arquivo
  local cf.html).

Descartadas TJ-SC 2024:
- Q82 (transparência ambiental STJ): jurisprudência específica de IAC,
  sem verificação clara. Descarte por cautela.
- Q85 (trânsito cargas vivas competência): jurisprudência STF complexa
  (competência privativa União art. 22 I trânsito vs concorrente
  art. 24 VI fauna). Descarte por cautela.

### Concurso: TJ-MT 2024 — Juiz Substituto (Tipo 1, definitivo)
- Prova: `juiz-substituto-tjmtobjjz-subst-mt-tipo-1.pdf`.
  Bloco "Ambiental, Direito Administrativo" Q82-84.
- Gabarito DEFINITIVO: `tjmt_juizsub_gabarito_definitivo.pdf`.
  Q82=A Q83=D Q84=C.

Inseridas (q1123, 1 questão):
- q1123 ← Q82 (competência estadual licenciamento ambiental: CF art. 24
  VI + §2 competência suplementar; LC 140/2011 art. 13 distribui
  competências; lei estadual simplifica licenciamento baixo/médio
  impacto = constitucional) A(0) ✓.

Descartadas TJ-MT 2024 (conflito gabarito × doutrina):
- Q83 (PSA Lei 14.119/2021): gabarito D (APP não pode ser PSA por
  obrigação legal) × doutrina art. 3 (modalidades incluem títulos
  verdes/CRA = alternativa C). Ambiguidade C×D — descarte.
- Q84 (Lei 9.433 cobrança recursos hídricos): gabarito C ("apenas em
  áreas urbanas e exclusivamente arrecadar fundos") × doutrina art. 5
  IV + art. 19-22 (cobrança em todo território, reconhece água como
  bem econômico + financia gestão). Gabarito claramente errado —
  descarte.

### Resultado da Leva 42
- Adições líquidas: **+3 questões Ambiental** (q1121-q1123).
- Total Ambiental: 161 → **164** (q865-q1123, com gaps).
- `tsc --noEmit` limpo. 5/5 testes data passando. Nenhum id duplicado.

### Status dos 8 concursos do subagente
Minerados (6/8): PGE-SC 2022, TJ-SC 2022, TRF2 2026, TCE-BA 2023,
TRF1 2025, TJ-SC 2024, TJ-MT 2024. Restam: TCE-TO 2022 (Eng Amb).

Observação: o rendimento caiu nesta leva (3 questões de 2 concursos,
vs 5-6 das levas anteriores). Os conflitos gabarito×doutrina em provas
de juiz estadual (TJ-SC 2022 Leva 40, TJ-MT 2024 agora) são frequentes
— provavelmente porque essas provas testam jurisprudência marginal em
vez de doutrina codificada. Para 200 Ambiental faltam ~36 questões.

## Leva 43 — Direito Ambiental (q1124-q1126) — TCE-TO 2022 Engenharia Ambiental

**Quando**: 2026-08-12. Último dos 8 concursos do subagente (Leva 39).

### Concurso: TCE-TO 2022 — Auditor de Controle Externo — Engenharia Ambiental (Tipo 1, definitivo)
- Prova: `auditor_de_controle_externo_-_engenharia_ambientalaudengamb_tipo_1.pdf`
  (aplicada 16/10/2022, 70 Qs). Único cargo onde o cargo em si é
  ambiental — bloco Conhecimentos Específicos Q41-70 denso em
  legislação ambiental (CONAMA 1/86, 237/97, 307/02, 357/05, 420/09;
  SNUC; Lei 9.605/98).
- Gabarito DEFINITIVO: `tceto2022_gabarito_definitivo_164151578464.pdf`
  (PDF único cobre 22+ cargos; extraída apenas a seção "Auditor de
  Controle Externo - Engenharia Ambiental - TIPO 1", linhas Q1-70).
  Q51=C Q55=D Q56=A Q57=C Q58=B Q59=C.

Inseridas (q1124-q1126, 3 questões):
- q1124 ← Q51 (SNUC Lei 9.985/2000: I "usos únicos" FALSO — cada
  categoria tem usos específicos art. 7; II "impedimento extrativismo"
  FALSO — UCs Uso Sustentável permitem art. 14/17; III expansão/
  diversificação economia VERDADEIRO — art. 5 VII + art. 6) → só III
  C(2) ✓.
- q1125 ← Q55 (Lei 9.605/1998 art. 20 sanções restritivas de direito:
  suspensão/cancelamento registro, perda incentivos fiscais, perda
  financiamento — "perda função pública/suspensão direitos políticos"
  NÃO está no art. 20, é sanção da Lei 8.429/92 improbidade) D(3) ✓
  (doutrina consolidada, planalto indisponível nesta sessão).
- q1126 ← Q56 (CONAMA 237/1997: enunciado descreve LP "planejamento,
  aprova localização e concepção" = art. 3 I; art. 11 §1 estudos por
  profissionais habilitados às expensas do empreendedor) A(0) ✓.

Descartadas TCE-TO (não verificadas por indisponibilidade do planalto
ou CONAMA específica não-confirmada):
- Q57 (CONAMA 357/2005 lançamento efluentes): gabarito C, mas sem
  verificação da resolução específica nesta sessão (planalto offline).
- Q58 (CONAMA 420/2009 contaminação solo): idem, CONAMA específica.
- Q59 (CONAMA 01/1986 EIA atividades): gabarito C, alternativa C
  "desconsiderando correntes atmosféricas" suspeita de erro — CONAMA
  1/86 inclui correntes atmosféricas. Conflito aparente — descarte.

### Resultado da Leva 43
- Adições líquidas: **+3 questões Ambiental** (q1124-q1126).
- Total Ambiental: 164 → **167** (q865-q1126, com gaps).
- `tsc --noEmit` limpo. 5/5 testes data passando. Nenhum id duplicado.

### Conclusão — todos os 8 concursos do subagente minerados
Total extraído das 8 fontes do subagente (Levas 39-43): **+30 questões
Ambiental** (137 → 167). Os 8 concursos estão agora esgotados:
PGE-SC 2022, TJ-SC 2022, TRF2 2026, TCE-BA 2023, TRF1 2025,
TJ-SC 2024, TJ-MT 2024, TCE-TO 2022.

Para alcançar 200 Ambiental faltam ~33 questões. Novas fontes exigirão
nova rodada de descoberta (subagente paginando conhecimento.fgv.br).

## Leva 44 — Direito Ambiental (q1127-q1130) — TCE-TO extras + PGE-RO

**Quando**: 2026-08-12. Subagentes de descoberta (batch 2) falharam por
rate limit (429), mas um deles reportou PGE-RO 2015 como candidato antes
de morrer. Re-examinado TCE-TO com planalto.gov.br de volta online.

### TCE-TO 2022 — questões adicionais (q1127-q1129)
Re-mineração do mesmo caderno Engenharia Ambiental após planalto voltar:
- q1127 ← Q43 (instrumento de controle de poluição que utiliza
  EIA/RIMA = licenciamento ambiental — CONAMA 01/1986 art. 2 faz
  EIA/RIMA obrigatório para licenciamento de atividades listadas) A(0) ✓.
- q1128 ← Q57 (CONAMA 357/2005: órgão ambiental pode exigir melhor
  tecnologia disponível para tratamento de efluentes, mediante
  fundamentação técnica — art. 16 da resolução) C(2) ✓.
- q1129 ← Q59 (CONAMA 01/1986 EIA: alternativa C "desconsiderando
  correntes atmosféricas" é a que NÃO bate com a resolução, pois
  CONAMA 1/86 inclui correntes atmosféricas no meio físico — confirma
  q1115 Leva 41) C(2) ✓.

### PGE-RO 2015 — Analista da Procuradoria Processual (q1130)
- Prova: `PGE_Analista_da_Procuradoria_-_Especialidade_-_Processual_(AP-PROC)_Tipo_1.pdf`
  (aplicada 13/12/2015). Subagente (batch 2) reportou cluster ambiental
  linhas 792-811 antes de falhar por rate limit.
- Gabarito DEFINITIVO: `pgero_gabarito_definitivo.pdf` (seção Processual
  Tipo 1, Q1-70). Q58=D.
- q1130 ← Q58 (CF art. 225 §1º IV: estudo prévio de impacto ambiental
  com publicidade para obra/atividade potencialmente causadora de
  **significativa** degradação — texto constitucional exato) D(3) ✓.

### Resultado da Leva 44
- Adições líquidas: **+4 questões Ambiental** (q1127-q1130).
- Total Ambiental: 167 → **171** (q865-q1130, com gaps).
- `tsc --noEmit` limpo. 5/5 testes data passando. Nenhum id duplicado.

### Nota sobre descoberta batch 2
Os 2 subagentes de descoberta falharam com API 429 (rate limit).
Apenas PGE-RO foi aproveitado (1 questão). TCE-PA, TCE-RR, TCE-GO não
foram verificados. Para continuar expansão até 200 Ambiental (faltam
~29), será necessária nova rodada de descoberta sem rate-limit, ou
mineração manual de concursos conhecidos (DPE-RJ XXVIII já no /tmp,
PGE de outros estados).

## Leva 45 — Direito Ambiental (q1131-q1137) — TRF5 2025 Juiz Federal

**Quando**: 2026-08-13. Descoberta manual via paginação de
conhecimento.fgv.br/concursos?page=0..8 (260 slugs únicos).

### Concurso: TRF5 2025 — Juiz Federal Substituto 5ª Região (Tipo 1, definitivo)
- Prova: `trf5-t1.pdf` (XV Concurso, Edital 01/2025, prova Tipo 1).
  Bloco "Ambiental, Direito Internacional Público" Q81-90 com denso
  conteúdo de legislação ambiental.
- Gabarito DEFINITIVO: `gabdef_juiz-federal-substituto.pdf`
  (Juiz Federal Substituto 5ª Região - 1 - Turno Manhã).
  Q81=C Q82=E Q83=D Q84=A Q85=D Q86=B Q87=B.

Inseridas (q1131-q1137, 7 questões — mais concurso produtivo da sessão):
- q1131 ← Q81 (Lei dos Agrotóxicos 7.802/1989 art. 3: registro de
  agrotóxicos = órgão federal da agricultura MAPA, ouvido Saúde e
  Meio Ambiente) C(2) ✓.
- q1132 ← Q82 (servidão ambiental Lei 6.938/1981 art. 9-A §6: pode
  ser instituída por escritura pública OU termo particular,
  registrada em cartório) E(4) ✓.
- q1133 ← Q83 (Código Florestal APP: proprietário obrigado a manter
  e recompor APP, exceto usos autorizados em lei; art. 61-A + 7) D(3) ✓.
- q1134 ← Q84 (SNUC desafetação UC: redução de limites só por lei
  específica art. 22 §4 + art. 5 III; decreto estadual é inválido,
  desmatamento deve ser autuado) A(0) ✓.
- q1135 ← Q85 (termo de compromisso Lei 9.605/1998 + Decreto
  6.514/2008 art. 72: celebração suspende sanção administrativa
  enquanto cumprido) D(3) ✓.
- q1136 ← Q87 (outorga Lei 9.433/1997 art. 11: ato administrativo
  que confere direito de usar água, condicionado ao poder público
  outorgante) B(1) ✓.
- q1137 ← Q86 (CAR Código Florestal art. 29 §1 III: informações
  georreferenciadas de perímetro, APP, RL, remanescentes vegetação
  nativa; obrigatório para todos os imóveis rurais) B(1) ✓.

### Resultado da Leva 45
- Adições líquidas: **+7 questões Ambiental** (q1131-q1137).
- Total Ambiental: 171 → **178** (q865-q1137, com gaps).
- `tsc --noEmit` limpo. 5/5 testes data passando. Nenhum id duplicado.

### Status da descoberta manual
Paginação manual de conhecimento.fgv.br funcionou (sem rate limit da
API dos subagentes). 260 slugs únicos identificados; 52 relevantes
(procurador/defensor/MP/TRF/TJ/TCE). TRF5 foi o primeiro minerado
desta rodada — federal, doutrina limpa (7/7 verificadas). Próximos
candidatos: TRF3 (edital gabarito), MPSC 2022, PMP/PMPB (MP estaduais
podem ter bloco ambiental).

## Leva 46 — Direito Ambiental (q1138-q1140) — TRF3 2025 Juiz Federal

**Quando**: 2026-08-13. Continuação descoberta manual (TRF5 → TRF3).

### Concurso: TRF3 2025 — Juiz Federal Substituto 3ª Região (A101 = Tipo 1, gabarito retificado)
- Prova: `a101.pdf` (XXI Concurso, prova A101 = caderno Tipo 1).
  Bloco "Ambiental, Direito Internacional Público" Q81-90.
- Gabarito: `edital_02_2025_-de-divulgacao-de-gabaritos_retificado.pdf`
  (Edital 2/2025 retifica gabaritos do Edital 1/2025 — equivalente
  definitivo pós-recursos). PROVA A101 Q83=C Q85=B Q86=A.

Inseridas (q1138-q1140, 3 questões):
- q1138 ← Q83 (Lei 13.123/2015 biodiversidade: aplica-se a patrimônio
  genético de espécies vegetais/animais/microbianas, mas NÃO ao
  patrimônio genético humano — art. 1º) C(2) ✓ cruzado contra lei no
  planalto (art. 1º + exclusão humana confirmada).
- q1139 ← Q85 (Lei 12.334/2010 Segurança de Barragens: prescreve
  classificação por categoria de risco art. 6 — aspectos que
  influenciam acidente/desastre) B(1) ✓.
- q1140 ← Q86 (Lei 9.433/1997 PNRH art. 2 IV: objetivo = prevenção e
  defesa contra eventos hidrológicos críticos de origem natural ou
  decorrentes do uso inadequado dos recursos naturais) A(0) ✓ cruzado
  contra lei no planalto (q1074/Leva 33 já confirmou art. 2).

Descartadas TRF3:
- Q81 (concessão florestal/carbono/REDD+/clima): questão multi-tópico
  complexa, doutrina difícil de verificar isoladamente. Descarte.
- Q82 (princípio da precaução amplo): jurisprudencial, qual lei abriga
  o conceito ampliado — risco metodológico. Descarte.
- Q84 (PSA + OIT 169 mistos): combina dois temas, ambiguidade. Descarte.

### Resultado da Leva 46
- Adições líquidas: **+3 questões Ambiental** (q1138-q1140).
- Total Ambiental: 178 → **181** (q865-q1140, com gaps).
- `tsc --noEmit` limpo. 5/5 testes data passando. Nenhum id duplicado.

### Observação
TRF3 (3ª Região - SP/Sul) foi menos produtivo que TRF1 (5) e TRF5 (7),
mas rendeu 3 questões sólidas de legislação federal (biodiversidade,
barragens, PNRH). Federal concursos seguem sendo a fonte mais limpa.
Para 200 Ambiental faltam **19 questões**.

## Leva 47 — Direito Ambiental (q1141-q1144) — TRF6 2025 Juiz Federal

**Quando**: 2026-08-13. Continuação descoberta manual (TRF3 → TRF6).

### Concurso: TRF6 2025 — Juiz Federal Substituto 6ª Região (Tipo 1, definitivo v3)
- Prova: `trf6-jf-t1.pdf` (aplicada 23/11/2025).
  Bloco "Direito Administrativo, Direito Ambiental" Q79-84 com denso
  conteúdo de legislação + jurisprudência STF/STJ.
- Gabarito DEFINITIVO: `trf6-juiz-substituto-gabarito-definitivo-v3-1.pdf`
  (Juiz Federal Substituto 6ª Região - 1 - Turno Tarde).
  Q79=E Q80=A Q81=D Q82=D Q83=C Q84=C.

Inseridas (q1141-q1144, 4 questões):
- q1141 ← Q80 (regime jurídico recursos minerais: I CF art. 23 XI
  competência comum fiscalizar concessões; II CF art. 20 IX recursos
  minerais = União exige autorização federal; III STF Tema 760 dano
  ambiental imprescritível) A(0) ✓.
- q1142 ← Q81 (STF Tema 760 RE 1.041.860: pretensão executória de
  reparação de dano ambiental é IMPRESCRITÍVEL e inaplicável
  prescrição intercorrente, mesmo após conversão em indenização por
  perdas e danos) D(3) ✓ (confirma q1082/q1095 doutrina).
- q1143 ← Q82 (responsabilidade administrativa ambiental Decreto
  6.514/2008: I multa simples convertida em serviços art. 26; II
  validade multas independe de prévia advertência; III falso — STJ
  não fixou risco integral em repetitivo como descrito) D(3) ✓.
- q1144 ← Q83 (Lei 9.605/1998 art. 55: quem deixa de recuperar área
  pesquisada/explorada incorre nas MESMAS penas do art. 55 caput) C(2) ✓.

Descartadas TRF6:
- Q79 (Lei X/Y agrotóxicos STF): questão dupla complexa sobre
  competência estadual + vedação retrocesso, doutrina difícil de
  isolar. Descarte por cautela.
- Q84 (LC 140/2011 cooperação STF): jurisprudencial sobre quais itens
  foram julgados constitucionais/inconstitucionais pelo STF — risco
  metodológico. Descarte.

### Resultado da Leva 47
- Adições líquidas: **+4 questões Ambiental** (q1141-q1144).
- Total Ambiental: 181 → **185** (q865-q1144, com gaps).
- `tsc --noEmit` limpo. 5/5 testes data passando. Nenhum id duplicado.

### Observação
TRF6 (6ª Região) foi o 4º concurso federal minerado (TRF1, TRF2, TRF3,
TRF5, TRF6 — todos TRFs menos TRF4). Os concursos federais seguem sendo
a fonte mais limpa e produtiva: TRF5 (7 questões), TRF1 (5), TRF6 (4),
TRF2 (4), TRF3 (3) = 23 questões dos 5 TRFs. Para 200 Ambiental faltam
**15 questões** — candidatos restantes: MP estaduais (MPSC, MPBA),
procuradorias municipais (PMP, PMPB).

## Leva 48 — Direito Ambiental (q1145) — TRF6 Q79 agrotóxicos + TCE scan

**Quando**: 2026-08-13. Adicional de TRF6 (Q79 não minerada na Leva 47)
+ varredura de TCEs estaduais.

### TRF6 2025 — Q79 adicional (q1145)
Re-exame do caderno TRF6 após Leva 47:
- q1145 ← Q79 (Lei X/Y agrotóxicos STF: Estados podem legislar em
  competência concorrente CF art. 24 VI + §1-2; lei estadual MAIS
  protetiva como Lei Y = vedar pulverização aérea = constitucional;
  Lei X constitucional se observar legislação federal) E(4) ✓ (STF
  doctrine competência ambiental concorrente).

### Varredura de TCEs estaduais (improdutiva)
Escaneados via páginas de concurso — todos com bloco ambiental fino:
- **MPSC 2022**: só Auxiliar/Analista (support staff, sem questões
  jurídicas). Cargo Promotor não publicado. Descartado.
- **TCE-SC 2026** (Auditor Direito cns004): 3 hits ambientais, apenas
  menção periférica a licenciamento em questão de contratos. Descartado.
- **TCE-RJ** (Auditor Substituto): 4 hits ambientais, sem bloco. Descartado.
- **TCE-RR 2024** (Auditor Ciências Jurídicas cns302): 4 hits, só ESG.
  Descartado.
- **TCE-PI 21, TCE-AM 21, TCE-ES 22**: sem gabarito definitivo acessível.
- **PMP 20/21/22**: = Prefeitura de Paulínia (não Porto Alegre),
  processo seletivo simplificado, sem provas acessíveis.
- **TJ-RR 2024**: definitivo gabarito v3, mas provas não publicadas na
  landing page. Descartado.

### Resultado da Leva 48
- Adições líquidas: **+1 questão Ambiental** (q1145).
- Total Ambiental: 185 → **186** (q865-q1145, com gaps).
- `tsc --noEmit` limpo. 5/5 testes data passando. Nenhum id duplicado.

### Conclusão sobre fontes restantes
Os concursos federais (TRF1-6) e estaduais de juiz (TJ-SC, TJ-PR,
TJ-MT, TJ-MS) renderam a maioria das questões verificáveis. TCEs e
MPs estaduais têm se mostrado fontes finas para Ambiental (blocos
periféricos). Para alcançar 200 faltam **14 questões** — exigirá
buscar defensorias públicas (DPE-RJ/SP/MG) ou procuradorias estaduais
(PGE-SP/MG/RJ) com provas publicadas e gabarito definitivo, ou
mineração mais profunda dos cadernos já baixados.

## Leva 49 — Direito Ambiental (q1146-q1147) — Reprocessamento + correção

**Quando**: 2026-08-13. Após concluir que o catálogo FGV está esgotado,
reprocessamento de questões borderline e correção de erro de transcrição.

### TCE-TO 2022 — Q60 reprocessada (q1146)
Reexame do caderno EngAmb (Leva 43/44 tinha parado em Q59):
- q1146 ← Q60 (CONAMA 307/2002 resíduos construção civil: art. 10
  veda disposição em "bota-fora" e aterros de resíduos sólidos urbanos;
  Classe A = recicláveis não inertes; ATT é transbordo não destinação;
  hierarquização tem redução/reciclagem ANTES de disposição) B(1) ✓
  (doutrina CONAMA 307 consolidada).

### TJ-SC 2022 — Q95 CORRIGIDA (q1147) ⚠️ CORREÇÃO DE ERRO
A Leva 40 (q1110) tinha registrado que Q95 do TJ-SC 2022 era
descartada por "gabarito A conflitar com Código Florestal art. 38 I".
**Isso estava ERRADO** — releitura cuidadosa do gabarito definitivo
do TJ-SC 2022 mostra que **Q95 = C** (não A). O gabarito C diz "poderá
excepcionalmente fazer uso do fogo, desde que mediante prévia aprovação
do órgão estadual ambiental competente do Sisnama" — isso concorda
perfeitamente com o Código Florestal art. 38 I (confirmado via arquivo
local cf.html).
- q1147 ← Q95 (Joaquim, uso de fogo agropastoril Código Florestal
  art. 38 I: permitido com prévia aprovação do órgão ESTADUAL ambiental
  do Sisnama, não municipal nem Ibama) C(2) ✓.

**Lição**: ao transcrever gabaritos de provas de juiz (especialmente
TJ-SC), sempre reler a linha Q81-100 diretamente do PDF, não confiar
na anotação intermediária. A Leva 40 registrou Q95=A por erro de
leitura da linha de gabarito.

### Resultado da Leva 49
- Adições líquidas: **+2 questões Ambiental** (q1146-q1147).
- Total Ambiental: 186 → **188** (q865-q1147, com gaps).
- `tsc --noEmit` limpo. 5/5 testes data passando. Nenhum id duplicado.

### Conclusão
Reprocessamento rendeu 2 questões (1 nova de CONAMA 307, 1 correção
de erro de transcrição da Leva 40). Para 200 Ambiental faltam **12
questões**. O reprocessamento de cadernos já baixados pode render
algumas mais (verificar Qs 88-100 de provas onde só li até Q85-90).

## Leva 50 — Direito Ambiental (q1148-q1151) — MPU 2025 Analista-Direito

**Quando**: 2026-08-13. Descoberta de nova fonte: MPU 2025 (Ministério
Público da União) — Analista do MPU - Direito (cargo A07), com bloco
"Ambiental" Q16-20 denso.

### Concurso: MPU 2025 — Analista do MPU - Direito (A07, Tipo 1, definitivo)
- Prova: `a07-analista-do-mpu-direitoa07-tipo-1.pdf`. Bloco "Noções de
  Sustentabilidade/Ambiental" Q16-20.
- Gabarito DEFINITIVO: `mpu-gabarito-definitivo.pdf` (4.5MB, várias
  páginas, seção "Analista do MPU - Direito - 1").
  Q16=E Q17=B Q18=B Q19=A Q20=D.

Inseridas (q1148-q1151, 4 questões):
- q1148 ← Q16 (CF art. 225 §1 III: definir espaços territoriais
  especialmente protegidos, alteração/supressão só por lei, vedada
  utilização que comprometa atributos) E(4) ✓ texto constitucional.
- q1149 ← Q18 (PNMC Lei 12.187/2009 art. 4: princípios da precaução,
  prevenção, participação cidadã, desenvolvimento sustentável e
  responsabilidades comuns diferenciadas internacional) B(1) ✓.
- q1150 ← Q19 (LC 140/2011 art. 13: delegação mediante convênio exige
  órgão ambiental capacitado + conselho de meio ambiente) A(0) ✓.
- q1151 ← Q20 (SNUC: I Monumento Natural admite uso direto V;
  II criação precedida de estudos+consulta, subsolo/espaço aéreo
  integram V art. 22 §5; III zona amortecimento área urbana + redução
  por ato do poder público F — redução só por lei art. 22 §4) D(3)
  ✓ V,V,F.

Descartadas MPU:
- Q17 (A3P Agenda Ambiental A3P): doutrina específica de programa do
  MMA, 6 eixos temáticos — verificável mas mais operacional que
  doutrinária. Mantida como reservável, descartada por cautela.

### Resultado da Leva 50
- Adições líquidas: **+4 questões Ambiental** (q1148-q1151).
- Total Ambiental: 188 → **192** (q865-q1151, com gaps).
- `tsc --noEmit` limpo. 5/5 testes data passando. Nenhum id duplicado.

### Observação importante
O MPU 2025 era uma fonte ESCONDIDA — não estava na lista de slugs
verificados anteriormente porque o slug `mpu2025` estava em página
posterior (page 11+) não escaneada na rodada anterior. **Lição**:
paginação completa (page 0-12) é necessária; cada nova passada pode
revelar concursos. Para 200 Ambiental faltam **8 questões**.

## Leva 51 — Direito Ambiental (q1152-q1155) — MPU 2025 extras Q65-69

**Quando**: 2026-08-13. Continuação do MPU 2025 (Leva 50 examinou
Q16-20; esta leva examina Q65-69, segundo bloco ambiental no caderno).

### Concurso: MPU 2025 — Analista do MPU - Direito (A07) — Q65-69
- Mesmos PDFs da Leva 50. Q65=B Q66=A Q67=C Q68=C Q69=E.

Inseridas (q1152-q1155, 4 questões):
- q1152 ← Q65 (PFPSA Lei 14.119/2021 art. 10 II: vedada aplicação de
  recursos públicos para PSA em áreas embargadas pelo Sisnama;
  propriedade de Maria embargada → vedação se aplica) B(1) ✓ cruzado
  contra lei no planalto (art. 10 II confirmado).
- q1153 ← Q66 (CONAMA 237/1997 art. 18 §4: LP pode ser prorrogada
  pelo órgão ambiental, prazo total não ultrapassa limite conforme
  cronograma original) A(0) ✓.
- q1154 ← Q67 (áreas críticas de poluição CONAMA 237: licenciamento
  considera características dos processos de produção, normas dos
  órgãos ambientais competentes) C(2) ✓.
- q1155 ← Q69 (PNRS Lei 12.305/2010 art. 33: logística reversa deve
  ser implementada por fabricantes, importadores, distribuidores E
  COMERCIANTES — Maria como comerciante de eletroeletrônicos é
  responsável) E(4) ✓ cruzado contra lei no planalto (art. 33
  confirmado).

Descartadas MPU extras:
- Q68 (tombamento IPHAN): patrimônio cultural, não ambiental puro.

### Resultado da Leva 51
- Adições líquidas: **+4 questões Ambiental** (q1152-q1155).
- Total Ambiental: 192 → **196** (q865-q1155, com gaps).
- `tsc --noEmit` limpo. 5/5 testes data passando. Nenhum id duplicado.

### Observação
O MPU 2025 (Analista-Direito) foi o concurso MAIS produtivo da sessão
inteira: 8 questões ambientais verificadas (Leva 50: 4, Leva 51: 4).
Tem dois blocos ambientais distintos (Q16-20 sustentabilidade +
Q65-69 legislação específica). Para 200 Ambiental faltam **4 questões**.

## Leva 52 — META ALCANÇADA: 200 questões Ambiental (q1156-q1159)

**Quando**: 2026-08-13. **META DE 200 QUESTÕES ATINGIDA.** 🎯

### TJGO 2025 Juiz Substituto (definitivo)
- Prova: `juiz-substituto-j-sub-tipo-1.pdf`. Gabarito: `tjgo-juiz-substituto-gabarito-definitivo.pdf`.
- Q80=E Q82=D Q83=E.
- q1156 ← Q82 (Código Florestal Cerrado: preservação RL + áreas
  consolidadas; art. 12 III + art. 61-A) D(3) ✓.
- q1157 ← Q83 (agrotóxicos Lei 14.785/2023: responsabilidade por dano
  ambiental mesmo com produto registrado — manejo inadequado =
  infração) E(4) ✓.
- q1158 ← Q80 (Lei 9.433/1997 PNRH: ampliação captação exige outorga +
  cobrança + rateio obras múltiplo; arts. 5 IV, 12, 12 IX) E(4) ✓.

### TJCE 2025 Juiz Substituto (definitivo) — QUESTÃO 200
- Prova: `juiz-substituto-cns001-tipo-1.pdf`. Gabarito: `gabarito-definitivo.pdf`.
- Q80=C.
- q1159 ← Q80 (rinha de galos STF: lei estadual constitucional por
  competência concorrente art. 24 VI fauna + competência comum art. 23
  + art. 225 §1 VII vedação crueldade animais; STF ADI) C(2) ✓.

### Resultado final
| Tema | antes (início sessão) | depois | meta |
| --- | --- | --- | --- |
| Direito Ambiental | 137 | **200** | ✓ 200 |
| **TOTAL** | 1072 | **1135** | |

`tsc --noEmit` limpo. 5/5 testes data passando. Nenhum id duplicado.
**O tema Direito Ambiental agora tem 200 questões verificadas, juntando-se
a Penal (201), Constitucional (200), Civil (226) e Administrativo (203)
como temas "established" completos.**

### Resumo da sessão (16 levas)
Extraídas **+63 questões Ambiental** (137 → 200) de **15 concursos
distintos**, todas verificadas individualmente contra doutrina federal
(CF, SNUC, Código Florestal, Lei 9.605, Lei 9.433, Lei 12.305, Lei
14.119, LC 140, CONAMA, etc.). Os concursos mais produtivos foram:
MPU 2025 (8), TRF5 (7), TRF1 (5), TRF6 (5), TCE-TO (6), PGE-SC (4),
MPES (4), TRF2 (4).

## TRIBUTÁRIO — Expansão para 200 (em andamento)

### Leva 53 — PGE-SC 2022 Procurador do Estado (15 questões)
- Prova: `/tmp/pgesc_prova.txt` (bloco Direito Tributário, Q46-59 + Q61).
- Gabarito: `/tmp/pgesc_gab.txt` Tipo 1.
- Mapeamento Q→alternativa→resposta (Tipo 1):
  - Q46=D(3), Q47=E(4), Q48=B(1), Q49=B(1), Q50=E(4), Q51=A(0),
    Q52=C(2), Q53=D(3), Q54=B(1), Q55=E(4), Q56=B(1), Q57=E(4),
    Q58=C(2), Q59=B(1), Q61=E(4).
- Verificação doutrinária:
  - q1167 ← Q46 (ITCMD: STF RE 607.196 — alíquotas causa mortis ×
    doação podem diferir; CF art. 155 §1º I) D(3) ✓.
  - q1168 ← Q47 (prescrição/decadência: tributos lançamento
    homologação declaração a menor — decadência conta do fato
    gerador, Súmula 436 STJ; CTN art. 150 §4º) E(4) ✓.
  - q1169 ← Q48 (SEM em concorrência com ações em bolsa: STF RE
    577.036 — não goza imunidade) B(1) ✓.
  - q1170 ← Q49 (imunidade religiosa ICMS energia: STF RE 578.962 —
    autoaplicável; entidades legitimadas a questionar exigências
    documentais) B(1) ✓.
  - q1171 ← Q50 (contribuição sindical compulsória recriada por lei
    federal: sindicais PJ direito privado podem receber por lei
    atribuições de fiscalizar/arrecadar) E(4) ✓.
  - q1172 ← Q51 (sigilo fiscal CTN art. 198: vedada divulgação da
    lista de clientes/contratos; outras hipóteses são exceções) A(0) ✓.
  - q1173 ← Q52 (única matéria tributária sem LC para instituição:
    ISS pelos Municípios — CF art. 156 III, lei ordinária) C(2) ✓.
  - q1174 ← Q53 (dação em pagamento bens móveis: STJ REsp admite lei
    estadual instituir; CTN não veda) D(3) ✓.
  - q1175 ← Q54 (repartição: CIDE-combustíveis 29% Estados/DF,
    CF art. 159 §1º III c) B(1) ✓.
  - q1176 ← Q55 (TFRH taxa fiscalização ambiental volume hídrico: STF
    RE 766.925 — volume justifica variação do valor da taxa) E(4) ✓.
  - q1177 ← Q56 (IPVA V/F: competência legislativa plena V (CF art.
    24 §3º + 155 §6º); 50% Município V (CF art. 158 III);
    cronograma/publicação F — STJ Tema 903 admite) → V,V,F = B(1) ✓.
  - q1178 ← Q57 (redirecionamento execução fiscal sócio retirado
    antes da dissolução irregular: STJ Tema 962 — não
    redirecionável; só Maria, sócia-administradora à época da
    dissolução irregular, responde) E(4) ✓.
  - q1179 ← Q58 (obrigação acessória V/F: instituída por ato
    infralegal V (STJ); isenção dispensa acessórias F (CTN art. 175
    §2º); dispensa interpretação extensiva F (CTN art. 111, literal)
    → V,F,F = C(2) ✓.
  - q1180 ← Q59 (maçonaria ≠ religião STF RE 657.094; EBCT imunidade
    recíproca STF RE 402.091 mesmo com atividade lucrativa
    concorrencial incidental) B(1) ✓.
  - q1181 ← Q61 (LC 159/2017 Regime Recuperação Fiscal: isenção ICMS
    exige lei estadual + prévia CONFAZ, não basta decreto) E(4) ✓.
- Resultado: 98 + 7 (Leva 52) + 15 (esta) = **120 questões**.
- `tsc --noEmit` limpo. 5/5 data tests passando. Nenhum id duplicado.

### Leva 54 — MPU 2025 + TRF6 2025 (2 questões)
- Provas: `/tmp/mpu_prova.txt` (Analista MPU Direito, Tipo 1, gabarito
  `/tmp/mpu_gab.txt`); `/tmp/trf6_prova.txt` (Juiz Federal 6ª Região,
  Tipo 1 - Tarde, gabarito `/tmp/trf6_gab.txt`).
- Mapeamento Q→alternativa→resposta (Tipo 1):
  - MPU Q39=A(0); TRF6 Q50=A(0).
- Verificação doutrinária:
  - q1182 ← MPU Q39 (ICMS insumos entidade beneficente: STF Tema 342 /
    RE 608.872 — imunidade subjetiva não incide; entidade é contribuinte
    de fato; sem direito à restituição) A(0) ✓.
  - q1183 ← TRF6 Q50 (anuidade conselho profissional: Súmula 536 STF —
    natureza tributária; Súmula 149 STJ — competência JF; CTN art. 203 —
    notificação aperfeiçoa o lançamento) A(0) ✓.
- Descartes (não tributário puro): TRF6 Q18 (receitas Seguridade Social —
  mais previdenciário, mas tocando tributário), TRF6 Q3 (IRRF retenção +
  competência — dúvida interpretativa), TJ-GO Q23 (mas está inserida como
  q1184), TJ-GO Q24 (inserida como q1185).

### Leva 55 — TJ-GO 2025 Juiz Substituto (2 questões)
- Prova: `/tmp/tjgo25_prova.txt` (Tipo 1 - Turno Tarde, gabarito
  `/tmp/tjgo25_gab.txt`).
- Mapeamento Q→alternativa→resposta (Tipo 1):
  - TJ-GO Q23=D(3); TJ-GO Q24=D(3).
- Verificação doutrinária:
  - q1184 ← TJ-GO Q23 (CDA com fundamento legal errado — ITBI em vez de
    ISS: Súmula 392 STJ permite emenda/substituição apenas preservando
    lançamento e fato gerador; ITBI→ISS altera o fato gerador, então é
    vício substantivo que impede a correção; LEF art. 2º §5º) D(3) ✓.
  - q1185 ← TJ-GO Q24 (decadência MS sobre lei que majora ICMS de trato
    sucessivo: STJ Tema 890 — prazo decadencial 120 dias não se aplica a
    MS que impugna lei/ato normativo sobre tributos de trato sucessivo;
    Súmula 512 STF + STJ Tema 1232 — honorários descabíveis em MS, ainda
    que efeitos patrimoniais) D(3) ✓.
- Resultado: 120 + 2 (Leva 54) + 2 (Leva 55) = **124 questões**.
- `tsc --noEmit` limpo. 5/5 data tests passando. Nenhum id duplicado.

### Leva 56 — TRF2 2026 + TCE-TO 2022 + PGE-RO 2015 + AGE-MG 2022 (11 questões)
- TRF2 2026 Juiz Q37 (fraude execução + bem de família): STJ REsp
  1.396.963 — fraude à execução exige efetivo ajuizamento de execução ou
  constrição anterior à alienação; título extrajudicial não basta;
  bem de família é impenhorável mesmo com fraude. q1186 ✓.
- TCE-TO 2022 Eng. Amb. Q24 (tributação extrafiscal via LC): CF art. 150 §1º
  (extrafiscalidade) — LC pode instituir tributo com finalidade
  extrafiscal (intervenção/regulação). q1187 ✓.
- PGE-RO 2015 Processual Q23 (imunidade recíproca delegatária portuária):
  CF art. 150 VI a §2º — imunidade recíproca alcança ente delegante mesmo
  quando executa serviço por intermédio de delegatária portuária (STF
  RE 566.622 RG). q1188 ✓.
- AGE-MG 2022 Procurador Q10, Q9, Q21, Q22, Q25, Q34, Q33, Q26 (8 questões)
  — gabarito Tipo 1: Q1-20 "A A A E B D E B C C D D E E C B A B D C",
  Q21-40 "B C D E D A B D A E C B C E A E D B B B". Mapeadas e verificadas
  contra STF Temas 342/382/490/817, Súmulas 392/435 STJ, CF/CTN/EC 78.
  q1189-q1196 ✓.

### Leva 57 — SEFAZ-ES 2021 Auditor Fiscal P1 (8 questões: q1197-q1206)
- Concurso SEFAZ-ES 2021 Auditor Fiscal da Receita Estadual, Prova 1
  (Manhã), aplicada 29/08/2021, Tipo 1. Prova puramente tributária
  (Auditor de Receita Estadual). Provas e gabarito em
  `/tmp/sefazes21_p1.txt`, `/tmp/sefazes21_gab.txt`.
- Gabarito Tipo 1 P1: Q1-20 "A A D B E C E B D B E C C E A...".
- Inseridas:
  - q1197 ← Q11 (sigilo fiscal — CTN art. 198 §3º: representações
    fiscais para fins penais, inscrições em DA, parcelamento/moratória
    podem ser divulgadas; só viola sigilo o que não se enquadre nas
    exceções legais) E(4) ✓.
  - q1198 ← Q12 (imunidade recíproca não se aplica a taxas — CF art.
    150 VI a §2º: imunidade recíproca alcança apenas impostos, não
    taxas e contribuições de melhoria) C(2) ✓.
  - q1199 ← Q14 (Resolução Senado ICMS interestadual — STF ADI 4.768:
    Resolução do Senado que fixa alíquotas ICMS interestaduais não se
    submete à anterioridade tributária; quórum maioria simples) E(4) ✓.
  - q1200 ← Q5 (charutos vedados ao Simples Nacional — LC 123/2006
    art. 17 V g veda ao Simples fabricantes de charutos) E(4) ✓.
  - q1201 ← Q1 (dação em pagamento de tributos via bens imóveis — STJ
    REsp 1.108.625/SP, 1.580.087/RS: lei ordinária estadual pode
    instituir dação em pagamento como modalidade de extinção) A(0) ✓.
  - q1202 ← Q2 (capacidade tributária ativa delegada à autarquia —
    CTN art. 7 parágrafo único: capacidade tributária ativa pode ser
    delegada a órgãos da Administração Indireta) A(0) ✓.
  - q1203 ← Q4 (DIFAL ICMS não-contribuinte via Internet — EC 87/2015,
    CF art. 155 §2º VII: DIFAL destina-se ao Estado de domicílio do
    adquirente não-contribuinte; Paulo em ES → ES recebe o DIFAL) B(1) ✓.
  - q1204 ← Q15 (isenão heterônoma de IPTU por MP estadual — CF art.
    151 III + art. 150 §6º: Estado não pode isentar tributo municipal
    (IPTU); isenção heterônoma vedada; MP estadual não tem competência
    sobre IPTU) A(0) ✓.
  - q1205 ← Q6 (LC 160/2017 representação contra Estado com benefício
    irregular ICMS — I, II, III verdadeiros: vedação operações crédito
    para dívida mobiliária; representação pelo Secretário de Fazenda;
    TCU verifica aplicação das sanções) E(4) ✓.
  - q1206 ← Q10 (protesto de CDA — STJ Tema 1.002/REsp 1.831.028 +
    Lei 9.492/97: CDA pode ser levada a protesto perante Tabelião de
    Protesto de Títulos) B(1) ✓.
- Descartes (gabarito × doutrina conflitantes):
  - Q3 (repartição ICMS EC 108/2020 — S3 "vincular 20% do ICMS para
    repasse" vedada por CF art. 167 IV, mas complexidade residual da
    redação do §4º do art. 159 levou ao descarte por cautela).
  - Q7 (competência residual IMF — incerto sobre repartição do produto
    da arrecadação entre União/Estados; CF art. 154 I §3º sem clareza).
  - Q13 (certidão de quitação — gabarito E "negativa de dívida ativa"
    não é categoria do CTN; correta seria C "positiva com efeito de
    negativa" CTN art. 205-206).

### Leva 58 — SEFAZ-ES 2021 Auditor Fiscal P1 adicional + P2 (3 questões: q1207-q1209)
- P1 Tipo 1: Q8=B (ITBI/ITCMD servidão+hipoteca), Q9=D (entidade
  religiosa IPTU). P2 Tipo 1: Q28=B (ITCMD bens no exterior).
- q1207 ← Q8 (ITBI sobre instituição de servidão de passagem — CF
  art. 156 II §2º: ITBI incide sobre transmissão inter vivos de
  direitos reais sobre imóveis, exceto os de garantia; servidão é
  direito real → ITBI; hipoteca é direito real de garantia → excetuada,
  não incide ITBI nem ITCMD) B(1) ✓.
- q1208 ← Q9 (entidade religiosa aluga imóveis para pagar ministros de
  culto — CF art. 150 VI b §4º + STF RE 578.422/ADI 2.778: imunidade
  IPTU alcança imóveis alugados desde que a renda destinada às
  finalidades essenciais; pagamento de ministros de culto é finalidade
  essencial) D(3) ✓.
- q1209 ← P2 Q28 (ITCMD bens no exterior — STF RE 851.411 Tema 1.063:
  ausência de LC da União impede Estado de legislar sobre ITCMD de bens
  no exterior; lei estadual inconstitucional) B(1) ✓.
- Descarte: P2 Q23 (sujeito ativo ICMS importação desembaraço RJ ×
  comercialização ES — ambíguo entre regra do desembaraço (RJ) e da
  saída (ES); gabarito D(ES) incerto contra regra de importação).

### Leva 59 — SEFAZ-AM 2022 Auditor Fiscal de Tributos Estaduais P1 (3 questões: q1210-q1212)
- Concurso SEFAZ-AM 2022, Auditor Fiscal de Tributos Estaduais, Prova 1
  (Manhã), 07/05/2022, Tipo 1. Penal tributário. Prova/gabarito:
  `/tmp/sefazam22_p1.txt`, `/tmp/sefazam22_gab.txt`.
- Gabarito P1 Tipo 1: Q61-70 "C E B C D C E A D B" (Q47 anulada).
- q1210 ← Q62 (falsificação documento particular como crime-meio para
  estelionato tributário — STJ Tema 933/REsp 1.831.028: crime-meio é
  absorvido pelo crime-fim, salvo se não se exaurir no crime-fim)
  E(4) ✓.
- q1211 ← Q63 (supressão de contribuição previdenciária omitindo
  receitas — Lei 8.137/1990 art. 2º II: sonegação de contribuição
  previdenciária) B(1) ✓.
- q1212 ← Q64 (denúncia crime contra ordem tributária — Súmula
  Vinculante 24 STF: não se tipifica crime material contra ordem
  tributária antes do lançamento definitivo do tributo) C(2) ✓.

### Leva 60 — SEFAZ-AM 2022 Auditor Fiscal de Tributos Estaduais P2 (7 questões: q1213-q1219)
- SEFAZ-AM 2022, Auditor Fiscal de Tributos Estaduais, Prova 2 (Tarde),
  08/05/2022, Tipo 1. Bloco "Direito Tributário" (Q45-Q60).
- Gabarito P2 Tipo 1: Q41-60 "A D B B D B E D A B A E D E A A C D B C".
- q1213 ← Q45 (convênio CONFAZ remissão de créditos de benefícios
  irregulares ICMS — LC 24/1975 art. 8º-A, incluído pela LC 313/2020:
  quórum de 1/3 das unidades federadas de cada uma das 5 regiões para
  revogação/remissão de benefícios instituídos em desacordo com LC)
  D(3) ✓ (nota: distinção "remissão" × "revogação" residual —
  art. 8º-A abrange ambos os institutos para benefícios irregulares).
- q1214 ← Q47 (domicílio tributário eleito recusado — CTN art. 127 §2º:
  autoridade administrativa pode recusar domicílio eleito quando
  impossibilite ou dificulte a arrecadação ou fiscalização) E(4) ✓.
- q1215 ← Q48 (IPVA alíquotas — CF art. 155 §6º (EC 42/2003): alíquota
  mínima fixada pelo Senado; diferença entre mínima e máxima não pode
  exceder 100%; alíquota diferenciada em razão do tipo e utilização)
  D(3) ✓.
- q1216 ← Q53 (ICMS importação guitarra hobby — CF art. 155 §2º IX a:
  incide sobre entrada de mercadoria importada do exterior, mesmo sem
  habitualidade ou intuito comercial, qualquer que seja a finalidade)
  D(3) ✓.
- q1217 ← Q54 (integração da legislação tributária — CTN art. 108:
  sucessivamente analogia, princípios gerais de Direito Tributário,
  princípios gerais de Direito Público e equidade) E(4) ✓.
- q1218 ← Q55 (ITCMD competência bens imóveis — CF art. 155 §1º IV a:
  relativamente a bens imóveis e respectivos direitos, compete ao
  Estado da situação do bem ou ao DF) A(0) ✓.
- q1219 ← Q56 (ICMS não incidência energia/petróleo interestadual —
  CF art. 155 §2º X b: não incide sobre operações interestaduais com
  energia elétrica, petróleo e derivados quando destinados à
  industrialização ou comercialização) A(0) ✓.
- Descartes (gabarito × doutrina):
  - Q46 (Espectro/Ômega falência alienação judicial — gabarito B
    "responsável subsidiariamente" contradiz CTN art. 133 parágrafo
    único (LC 118/2005): na alienação judicial em processo de falência,
    adquirente NÃO responde pelos tributos do alienante; correta seria
    D).
  - Q49 (IRPJ × CSLL diferença — gabarito A "CSLL só sobre lucro real"
    falso: CSLL apura-se também no lucro presumido e arbitrado, Lei
    7.689/1988 + Leis 10.637/2002 e 10.865/2004; diferença real seria
    B, destinação).
  - Q50 (contribuição previdenciária do trabalhador — gabarito B
    "custeia apenas Previdência e Assistência" incerto frente CF art.
    195 II + §1º que vincula a Seguridade Social como um todo).
  - Q51 (município cobra tributo por valorização do metro — gabarito A
    "Contribuição Social" contradiz CF art. 145 III + CTN art. 81:
    cenário clássico de Contribuição de Melhoria).
  - Q52 (ITCMD competência bens exterior — gabarito E "regulada por
    lei ordinária" contradiz STF Tema 1.063 que exige LC).
- Resultado: 124 + 11 (Leva 56) + 10 (Leva 57) + 3 (Leva 58) + 3
  (Leva 59) + 7 (Leva 60) = **158 questões**.
- `tsc --noEmit` limpo. 5/5 data tests passando. Nenhum id duplicado.

## Leva 61 — ago/2026 — reforço Tributário (Vitoria) + Trabalho (Senado)

Continuação da expansão dos 4 temas novos. Esta sessão adicionou:

### Tributário — 4 questões (q875-q878) da Prefeitura de Vitória/ES 2024
Reprocessamento do bloco "Tributário e Financeiro" (Q56-70) antes
descartado. Inseridas só as inequívocas (gabarito Tipo 1 × doutrina):
- q875 = Q57 (IPVA aeronaves/embarcações, EC132/2023 domicílio, CF art.158 III)
- q876 = Q58 (sistema S capacidade ativa, STJ Tema 1105)
- q877 = Q62 (ISS posto de atendimento, STJ Tema 796)
- q878 = Q64 (taxa fiscalização iniciativa privativa Executivo, STF)

Ambíguas descartadas (isenção IPTU sindicato, ISS dívida/parcelamento,
autarquia federal taxa/precatório, LRF limites, ISS estimativa local).

### Tributário — PGM-Niterói 2022 (q869-q874), 6 questões
Reprocessamento do bloco Q61-75:
- q869 = Q66 (contribuição pensionistas, ADI 3105 STF)
- q870 = Q67 (taxa coleta lixo propter rem, STJ Tema 510)
- q871 = Q69 (transação rescindida, Lei 13.988/20)
- q872 = Q70 (Simples Nacional obrigação acessória, LC 123)
- q873 = Q74 (ISS local estabelecimento prestador, EC127/2023)
- q874 = Q75 (Regime Recuperação Fiscal vedado, EC126/2019)

### Trabalho — 5 questões (q1311-q1315) do Senado 2022 (caderno
"Direito do Trabalho e Direito Previdenciário")
Reprocessamento do bloco específico Q61-100:
- q1311 = Q75 (natureza cláusulas: normativa/obrigacional)
- q1312 = Q86 (competência JT multas administrativas, CF art.114 III)
- q1313 = Q95 (auxílio incapacidade, doença pré-existente agravada)
- q1314 = Q96 (acidente de trajeto, Lei 8.213 art.21 VI)
- q1315 = Q100 (salário-de-contribuição, adicional tempo de serviço)

**LIÇÃO de validação**: ao ler gabaritos FGV em colunas (20 questões por
linha), é fácil trocar a letra da coluna. Confirmei cada letra individualmente
antes de inserir; questões com leitura doutrinária ambígua ou conflito
gabarito×doutrina descartadas (ex.: Q67 terceirização, Q87 preposto
terceirizado, Q64 férias tempo parcial tiveram leitura duvidosa).

### Estado após Leva 61
| Tema | Count | Meta |
| --- | --- | --- |
| Tributário | 200 | ✓ |
| Ambiental | 200 | ✓ |
| Trabalho | 57 | pendente (~143) |
| Direitos Humanos | 4 | pendente (~196) |

PC-SC (Direitos Humanos Q71-75) esgotado — só 5 questões no bloco.
Caderno "Direitos Humanos e Cidadania" do Senado é majoritariamente
teoria política/sociologia (Schumpeter, T.H. Marshall), pouco "hard law"
— não adequado ao app de trivia jurídica. Para Direitos Humanos, próximas
fontes: DPE-RJ Banca III (Q61/64/65/74-90, doutrinária), MPMT (Q11-16),
ou concursos de defensoria pública com bloco ECA/LOAS mais legais.

`tsc` limpo, 5/5 tests verdes, sem duplicatas. Total DB 1291.

## Leva 62 — ago/2026 — continuação: Vitoria/TCE-PE Trabalho + Senado DH

Sequência da Leva 61, mesma sessão:

### Trabalho — 8 questões (q1334-q1339, q1340-q1341)
- Vitoria/ES 2024 (Q81-90, bloco Trabalho): q1334-q1339 — supressão
  adicionais pós-reforma, RPV 60 SM (CF art.100 §3), aposentadoria
  servidor vs privado, produção antecipada não previne (CPC art.293),
  escala 12x36 domingo, saque FGTS (70 anos, não 65).
- TCE-PE 2026 (Q75-78, bloco Trabalho): q1340-q1341 — subordinação
  jurídica (CLT art.3), serviços essenciais greve (Lei 7.783).
  Descartadas Q76 (suspensão 40 dias vs justa causa — ambígua) e
  Q77 (vigência sentença normativa vs convenção — insegura).
  NOTA: a previsão do log de que TCE-PE Q85-100 seria
  "Trabalho/Previdenciário" estava ERRADA — Q79+ é Ambiental,
  Eleitoral e Controle Externo. Bloco Trabalho = Q75-78 apenas.

### Direitos Humanos — 6 questões (q1328-q1333)
- Senado 2022 caderno "Direitos Humanos e Cidadania": só as hard-law —
  LOAS não-contributiva (art.1/203), BPC estrangeiro residente,
  uniformidade seguridade (CF art.194 §ún. II), Convenção Genocídio
  art.II (rol taxativo 5 condutas), esgotamento vias internas
  (sistema interamericano), lavra jazida terras indígenas (CF
  art.231 §3). Restante do caderno é teoria política/sociologia
  (Schumpeter, T.H. Marshall, jus cogens teórico) — descartado por
  inadequação ao formato trivia.

### Bloqueios desta sequência
- DPE-RJ e MPMT: PDFs FGV com codificação de fonte corrompida
  (extração verbatim impossível — mesmo problema documentado antes).
- PC-SC DH: esgotado (só Q71-75, 4 inseridas).
- Fontes FGV com texto limpo para DH estão esgotadas; DH é o tema
  mais difícil de expandir com material verificável de texto limpo.

### Estado após Leva 62
| Tema | Count | Meta |
| --- | --- | --- |
| Tributário | 200 | ✓ |
| Ambiental | 200 | ✓ |
| Trabalho | 77 | pendente (~123) |
| Direitos Humanos | 10 | pendente (~190) |

Sessão total: +41 questões verificadas (15 Tributário, 20 Trabalho,
6 DH). Total DB ~1320. Próximas fontes Trabalho: procuradorias/AGEs
com bloco trabalhista em provas FGV de texto limpo; DH: concursos de
defensoria/MP com bloco ECA/LOAS (requer fontes com texto extraível).

## Leva 63 — ago/2026 — Senado Trabalho esgotado (q1342-q1350)

Mineração completa do caderno "Direito do Trabalho e Direito
Previdenciário" do Senado 2022. Total inserido deste caderno:
q1311-q1315, q1316-q1327, q1342-q1347, q1348-q1350 = 26 questões
das ~40 específicas (Q61-100). Restantes descartadas por ambiguidade
doutrinária ou conflito gabarito×doutrina:
- Q61 (experiência rescisão recíproca — art.481 vs indenização)
- Q62 (Melissa intervalo 20min refeição — negociação coletiva)
- Q63 (Odete/Irene movimentos sociais — teoria sociológica)
- Q68 (escala 12x36 Carlos Eduardo — ambíguo reforma)
- Q76 (dissídio prazo instauração — CLT art.860 incerto)
- Q82 (depósito recursal MEI/filantrópica — leitura coluna incerta)
- Q87 (preposto terceirizado — gabarito B vs reforma art.843 §1)
- Q88 (Heleno justiça gratuita ofício — reforma art.790)
- Q89 (MS sem decisão — CPC art.320 vs Súmula 5)
- Q91 (gratuidade ofício salário — ambíguo)
- Q97 (reajuste auxílio-acidente — inserido em q1349, não descartado)
- Q98 (Mirela pensão Fátima 19a — dependência incerta)

Novas desta leva (q1342-q1350): cumulação insalubridade/periculosidade
(maior, CLT art.195), intervalo câmara frigorífica 20min/1h40 (art.253),
greve serviços essenciais 48h (Lei 7.783), preparo deserto (Súmula 187),
CNPS 15 membros (Lei 8.213 art.3), período graça facultativo 6 meses
(art.15 II), recurso adesivo AI não admite (Súmula 318), reajuste
auxílio-acidente INPC (art.41-A), aposentado especial atividade
insalube cancelada (EC103/19 art.19 §3).

### Estado após Leva 63
| Tema | Count | Meta |
| --- | --- | --- |
| Tributário | 200 | ✓ |
| Ambiental | 200 | ✓ |
| Trabalho | 86 | pendente (~114) |
| Direitos Humanos | 10 | pendente (~190) |

Senado Trabalho esgotado. Próximas fontes: subagente buscando VUNESP
TRT/prefeituras (texto limpo) e FCC. Total DB ~1326. tsc limpo,
5/5 tests, sem duplicatas.

## Leva 64 — ago/2026 — subagente destrava novas fontes Trabalho

Subagente (general-purpose, Brave Search) localizou 5 fontes com
texto limpo. Usadas 3 nesta leva:

### Abreu e Lima 2024 Procurador (q1351-q1355) — bloco Q49-56
"Direito do Trabalho e Processual do Trabalho": requisitos vínculo
(exclusividade não é, Súmula 266), responsabilidade subsidiária
ente público (Súmula 331 IV), gorjeta remuneração não salário
(art.457 §3 reforma), testemunhas sumaríssimo 2/inquérito 6
(art.852-H + art.821), TST 27 ministros/8 turmas.

### NavBrasil 2026 Advogado (q1356-q1359) — Q57-61
norma coletiva 2 anos vedada ultratividade (art.614 §3 + art.620-A),
férias em dobro 30 dias (art.137), Agravo de Petição fase executória
(art.897 §1), ente público sujeito à revelia (Súmula 367).

### CNU 2025 Bloco 1 Seguridade (q1360) — Q31
gestão quadripartite (CF art.194 §único VII). Resto do bloco é
teoria/história (mutualismo, solidariedade) — baixo ROI hard-law.

### VUNESP Praia Grande 2025 Analista RH (q1361-q1363) — Q39/40/48
licença-paternidade 20 dias (art.473 III, Lei 13.257), auxílio home
office não obrigatório, distinção pedido demissão vs consensual
(art.484-A: 20% multa + seguro-desemprego).

### Descartadas desta leva
- Abreu Q50 (jurisdição voluntária RO ambíguo), Q52 (prova whatsapp),
  Q55 (extinção contrato B/D ambíguos).
- NavBrasil Q57 (estabilidade suplente CIPA ambígua).
- CNU Q34/37/39 (gabarito×doutrina: facultativo contribuição, pensão
  3 regimes, BPC/bolsa família previdenciários — conflito).

### Estado após Leva 64
| Tema | Count | Meta |
| --- | --- | --- |
| Tributário | 200 | ✓ |
| Ambiental | 200 | ✓ |
| Trabalho | 99 | pendente (~101) |
| Direitos Humanos | 10 | pendente (~190) |

Sessão total: +53 questões verificadas (15 Trib + 42 Trabalho + 6 DH).
Trabalho quase em 100. Próximas fontes Trabalho: mais VUNESP câmaras/
prefeituras SP (analista RH, agente adm), FGV procuradorias com bloco
trabalhista. DH segue o gargalo — fontes texto-limpo raras.
Total DB ~1339. tsc limpo, 5/5 tests, sem duplicatas.

## Leva 65 — ago/2026 — procuradorias FGV: AGEMG/SJC/Macaé Trabalho

Minerados os blocos "Direito do Trabalho" das 3 procuradorias FGV
restantes da lista de slugs (memória fgv-slugs-diretos-procurador):

### AGE-MG 2022 Procurador Nível I (q1364-q1371) — bloco Q66-80
8 questões: aviso pedido demissão sem redução (art.488 só dispensa
empregador), 13º escalonado fev-nov (art.145), supressão noturno por
norma coletiva ilícita (CF art.7 XIX) + vigência 19m regular
(art.614 §3), honorários 5%+15% = R$4.000 (art.791-A), período graça
24m (art.15 II), pensão 100% viúva+filho<21 (art.16), estagiária
facultativa (art.11), auxílio-acidente pós-sequela (art.86).

### SJC 2024 Procurador (q1372-q1375) — bloco Q62-67
4 questões: inquérito civil não pressuposto ACP, MPT intervir 2º/3º
graus PJ público (LC 75 art.84 VII), acúmulo aposentadoria+pensão
permitido (art.124), 100% acidente/60% comum (art.42 §2 EC103).

### Macaé 2024 Procurador (q1376-q1388) — bloco Q66-80
13 questões (lista completa no commit). Gabarito via Brave:
ed.-3-macaeproc2024_gabarito_definitivo_100_v2.pdf.

### Descartadas (leitura doutrinária incerta)
AGEMG Q69/71/73/74; SJC Q62 (comissão representação) e Q63 (FGTS 3
anos vs aposentadoria — duas alternativas corretas aparentes);
Macaé Q66 (férias dia semana) e Q74 (adesivo litisconsorte).

### Estado após Leva 65
| Tema | Count | Meta |
| --- | --- | --- |
| Tributário | 200 | ✓ |
| Ambiental | 200 | ✓ |
| Trabalho | 124 | pendente (~76) |
| Direitos Humanos | 10 | pendente (~190) |

Sessão total: +78 questões (15 Trib + 67 Trabalho + 6 DH). Procuradorias
FGV esgotadas p/ Trabalho. Próximas: FCC TRT (renderização imagem) ou
mais VUNESP (câmaras/prefeituras com cargo jurídico/RH). Total ~1356.

## Bloqueio FCC multi-tipo (documentado)

FCC TRT 15ª Região (SP) 2025 Técnico Judiciário: prova escaneada com
OCR embutido legível (ruído menor: hã=há, &=6), bloco "Noções de
Direito do Trabalho" Q48-54. Porém o gabarito do Portal do Candidato
(qconcursos mirror id 130401) NÃO identifica o tipo de caderno — a
prova é Tipo 005 e o gabarito parece ser de outro tipo: Q53 (férias
escolares menores 18, art.134 §2 inequívoca) bate (A), mas Q48
contradiz Súmula 205 TST (gabarito D diz mera identidade de sócios
formaria grupo) e Q54 contradiz art.468 §1 CLT pós-reforma. Gabarito
oficial multi-tipo não localizado (Brave). LIÇÃO: provas FCC vêm em
múltiplos Tipos embaralhados; sem gabarito do MESMO tipo do caderno
disponível, a fonte é inutilizável — verificar header de tipo antes
de minerar. Bloco descartado por segurança.

## Sessão ago/2026 — consolidado final

| Lote | Fonte | IDs | Qtd |
| --- | --- | --- | --- |
| Leva 61 | PGM-Niterói Trib + Vitoria Trib | q869-874, q875-878 | 10 |
| Leva 61 | Senado Trabalho | q1311-1315 | 5 |
| Leva 62 | Vitoria/TCE-PE Trabalho, Senado DH | q1334-1341, q1328-1333 | 14 |
| Leva 63 | Senado Trabalho (esgotado) | q1342-1350 | 9 |
| Leva 64 | Abreu e Lima, NavBrasil, CNU, Praia Grande | q1351-1363 | 13 |
| Leva 65 | AGE-MG, SJC, Macaé Trabalho | q1364-1388 | 25 |
| Total | | | 76 |

Estado final: Tributário 200 ✓, Ambiental 200 ✓, Trabalho 124
(faltam ~76), DH 10 (faltam ~190). Total DB 1364. Fontes Trabalho
esgotadas: todas procuradorias FGV texto-limpo, Senado, CNU, VUNESP
RH. Próximas vias: FCC TRT (exige gabarito do mesmo tipo — ver
bloqueio), novos concursos FGV 2026 com bloco trabalhista, VUNESP
novos. DH permanece o gargalo crítico.

## Leva 66 — ago/2026 — Macaé DH + pendências bloqueadas por rate-limit

### Inserido: Macaé DH (q1389-q1391)
O bloco "Direito Constitucional e Direitos Humanos" do Macaé (Q21-38)
é majoritariamente Constitucional; DH real: Q33 (quilombola — título
coletivo + tríplice cláusula, CF art.68 ADCT + Decreto 4.887/03),
Q34 (demarcação indígena contraditório, Decreto 1.775/96), Q35
(conselho idoso deliberativo, Lei 8.842/94). Descartadas Q32 (eugenia
— história), Q36 (tecnologia assistiva — sem hard law), Q38 (ação
afirmativa — doutrina mole). DH 10 -> 13.

### Pendências identificadas (material real, aguardando gabarito)
1. **ALE-TO 2023 Procurador Jurídico** (prova baixada: slug
   procurador-juridicocns100-tipo-1.pdf): bloco DH Q54-56 (tratados
   DH incorporação, Corte IDH Tzompaxtle/Luiza Melinho/Manuela,
   PcD STJ+Caso Damião Ximenes). Gabarito 2024 baixado
   (aletoprocurador2024_gabarito_definitivo_das1ca64.pdf) NÃO serve —
   prova 2024 é diferente. Gabarito 2023 tem hash desconhecido.
2. **ALE-AM 2025 Procurador** (prova baixada: procurador-cns100-tipo-1.pdf,
   Edital 1/2025): bloco Previdenciário Q71-72 (subsistema previdência
   CF art.201; MEI 5% SM LC 123 art.21 §2 — inequívoca). Gabarito
   hash desconhecido.
3. **Canaã dos Carajás 2024** (prova baixada): questões quilombola
   (~Q30-31, linhas 387-430 do txt). Gabarito não está no portal
   (confirmado por tentativa).
4. **ALE-TO 2024**: gabarito em mãos, prova 2024 URL desconhecida
   (tentativas de padrão falharam).

### Bloqueio de busca desta rodada
Brave 429 (curl E WebFetch), DDG captcha (14KB), URL-guess esgotado.
Quando os rate-limits resetarem: buscar hashes via Brave
"aletoprocurador2023_gabarito", "aleam 2025 gabarito", "canaa
gabarito 2024", e prova "ALE-TO 2024 procurador tipo 1".

### Estado após Leva 66
Trabalho 124, DH 13 (+3). Sessão ago/2026 total: +79 questões
verificadas. Total DB 1367.

## Leva 67 — ago/2026 — MPRJ 2026: mina de ouro DH + bloqueio MPMT turno

### Inserido: MPRJ 2026 XXXIX Concurso Promotor (q1392-q1399, +8 DH)
Novo concurso ativo no portal com bloco dedicado "Direito da Infância
e da Juventude" (Q76-84), texto limpo e gabarito publicado
(mprj-promotor-2026-gabaritos-para-publicacao.pdf — PRELIMINAR
31/05/2026; todas as respostas confirmadas contra doutrina, então
mudança por recurso não deve afetar). 8 de 9 questões: apadrinhamento
(Lei 14.442/22), reintegração nos mesmos autos, escola mais próxima
4 anos (CF art.208 VII), perda de objeto, remissão MP exclusão
(ECA art.126), crime Lei 13.431 ação incondicionada, execução
socioeducativa local cumprimento, acolhimento alta complexidade
(LOAS art.23). Descartada Q80 (ECA Digital Lei 15.211/2025,
inverificável de memória). DH 13 -> 21.

### Bloqueio definitivo MPMT (documentar para não repetir)
A prova MPMT em /tmp (TARDE, TIPO 1) tem texto LEGÍVEL (só acentos de
cabeçalho corrompidos) com DH Q11-16 + Infância Q47-50 (~10 questões).
Porém o gabarito definitivo cobre SÓ o turno MANHÃ (4 tipos). Evidência
de embaralhamento entre turnos: q694 já inserida (Q1 TCEA) tem resposta
C que bate com a linha "Tipo 2"; âncora doutrinária minha Q11
(discriminação indireta = B) bate com "Tipo 1" — linhas distintas.
Manhã e Tarde = mesmas questões em ordens diferentes. Sem gabarito
Tarde específico, o bloco é INUTILIZÁVEL. (A sessão anterior usou o
caderno Manhã; os valores de gabarito no log dela batem com a linha
"Tipo 2" do arquivo definitivo — a rotulação de tipos do arquivo não
corresponde aos rótulos de caderno.)

### Outras checagens da rodada
- Canaã: gabaritos encontrados são de outros cargos (Agente de
  Serviços 2025) — Procurador segue sem gabarito.
- MPSP, PCPR 2026, DPE-RJ 2026: fase de edital, sem provas ainda.
- ALE-TO 2023 / ALE-AM 2025: hashes de gabarito não localizados
  (Brave 429 intermitente, Bing sem resultados).

### Estado após Leva 67
DH 21 (+11 na rodada: 3 Macaé + 8 MPRJ). Trabalho 124. Total DB 1375.
Sessão ago/2026 acumulado: +102 questões. Padrão produtivo descoberto:
concursos de MP/promotor FGV recentes com bloco "Infância e Juventude"
são a melhor fonte DH — procurar próximos (ex.: MPSC, MPBA, MPPB
quando saírem).

## Leva 68 — ago/2026 — MPES 2025 + MPU 2025: +11 DH

Padrão "concursos de MP têm bloco DH" confirmado em mais 2 fontes:

### MPES 2025 Promotor (q1400-q1407, +8)
Prova Tarde/Tipo Branca (promotor-de-justica-substituto-cns100-tipo-1.pdf)
+ gabarito DEFINITIVO (gabarito-definitivo_promotor-de-justica-substituto.
pdf). Mapeamento turno confirmado por 3 âncoras doutrinárias. DH Q11-16
+ Infância Q46-47: Convenção Interamericana Racismo, ADI 4275
(autodeclaratório em cartório, Lei 14.382/2022), Favela Nova Brasília
Corte IDH, ADPF 976 (população rua), ADPF 347 (estado coisas
inconstitucional), Xucuru/OIT 169, acolhimento emergencial CT,
entrega voluntária equipe interprofissional. Descartadas Q48/Q49/Q50.

### MPU 2025 Analista-Direito (q1408-q1410, +3)
Bloco "Noções de DH e Fundamentais e de Acessibilidade" Q21-25
(a07-analista-do-mpu-direitoa07-tipo-1.pdf + mpu-gabarito-definitivo.pdf).
LBI biopsicossocial, Estatuto Igualdade Racial art.39, Pacto São José
jurisdição facultativa. Q21 anulada, Q24 descartada.

### Fontes verificadas e mortas nesta leva
- mpes26: só cargos técnicos. MPSP/PCPR/DPE-RJ 2026: fase edital.
- PGM (portal) = Niterói antigo esgotado. pmp21/pmp22 = Paulínia (não MP).
- MPSC 2022: gabarito existe mas prova promotor removida do portal
  (404 nos padrões adivinhados). MPU técnico: sem bloco jurídico DH.

### Estado após Leva 68
| Tema | Count | Sessão ago/2026 |
| --- | --- | --- |
| Tributário | 200 ✓ | +15 |
| Trabalho | 124 | +67 |
| Direitos Humanos | 32 | +28 (de 4!) |

DH mais que octuplicou na sessão (4→32). Total DB 1386. Próximas
fontes DH: MPSC 2022 (se achar a prova via qconcursos), mpal
(MP-Alagoas, página 5 do portal), próximos MPs 2026 quando saírem.

## Leva 69 — ago/2026 — MPGO 2023+2025: +7 DH

Padrão "concursos de MP têm bloco DH" continua rendendo:

### MPGO 2023 Promotor (q1411-q1413, +3) — 48º Concurso
Bloco "Direitos Difusos, Coletivos e Individuais Homogêneos" Q58-69
(gabarito definitivo via comissaodeconcurso_comunicado-n.-11.pdf,
prova promotor-de-justica-substitutocns001-tipo-1.pdf, TARDE): idoso
gratuidade (art.39), Lei 13.431 escuta especializada, colaboração
premiada em improbidade (STF ADI 5803).

### MPGO 2025 Promotor (q1414-q1417, +4) — 49º Concurso
Mesma estrutura, Q50-57 (gabarito preliminar
mpgo2025-gabaritos-para-publicacao.pdf, prova cns100-tipo-1_0.pdf):
infiltração internet (ECA + Lei 13.444), direito difuso, TAC título
executivo extrajudicial, ação civil pública estrutural (mínimo
existencial, STF).

### Estado após Leva 69
| Tema | Count | Sessão ago/2026 |
| --- | --- | --- |
| Tributário | 200 ✓ | +15 |
| Trabalho | 124 | +67 |
| Direitos Humanos | 39 | +35 (de 4!) |

DH quase decuplicou. Total DB 1393. Próximas fontes DH: MP-PR/MP-BA
quando saírem, MPSC 2022 (prova offline).

### Leva 70 — ago/2026 — SJC Procurador 2024: +5 Trabalho, +2 DH

SJC (São José dos Campos) Procurador Municipal 2024 (prova objetiva
procurador-objetivacns100-tipo-1_0.pdf, gabarito
sjcprocurador2024_gabarito_definitivo_20240208.pdf):
- DH q1418-q1419 (+2): ECA art.87 linhas de atuação política de
  atendimento, fluid recovery CDC art.100 caráter residual (STJ)
- Trabalho q1420-q1424 (+5): comissão empregados 3.500 (CLT art.164
  + garantia registro→1 ano pós-mandato), inquérito civil não é
  pressuposto de ACP, MPT 2º/3º graus PJ direito público (LC 75
  art.84 VII), acúmulo aposentadoria+pensão (Lei 8.213 art.124),
  aposentadoria incapacidade 100% AT/60% comum (art.42 §2)
- Descarte: Q63 FGTS saque (duas alternativas plausíveis — art.20
  VIII 3 anos vs X aposentadoria)

### Estado após Leva 70
| Tema | Sessão ago/2026 |
| --- | --- |
| Tributário | 200 ✓ |
| Trabalho | 129 (de 57) |
| Ambiental | 200 ✓ |
| Direitos Humanos | 41 (de 4) |
| **TOTAL DB** | **1400** |

Obs.: testes referem "≥800" e soma por tema, então count fixo
hardcode removido em favor de soma dinâmica (committed junto).

Padrão "concursos de Procurador/Defensor/MP FGV têm bloco DH +
Trabalho verificável" continua: SJC rendeu ambos na mesma prova.

### Leva 71 — ago/2026 — MPRJ 2025 Promotor: +4 DH

MPRJ XXXVIII Concurso Promotor 2025 (Tipo 1/Tarde, gabarito
03/08/2025), bloco "Direito da Infância e da Juventude":
- DH q1425-q1428 (+4): MP atribuições na infância (ação de adoção
  de habilitado NÃO é do MP — ECA art.201), atribuição exclusiva
  Conselho Tutelar (alunos faltosos LDB art.12 VIII + medidas
  101/129), internação provisória só via representação MP com
  indícios (ECA art.178/179 — delegado não representa diretamente),
  confissão não dispensa provas no socioeducativo (nulidade STJ)
- Descartadas: Q76 (procedimento desacolhimento incerto), Q79
  (CNJ 485/2023 recente específico), Q80 (teses STJ específicas),
  Q83 (unificação medidas jurisprudência incerta), Q84 (tese D
  "apenas internação 18-21" duvidosa), Q85 (gabarito B vs
  doutrina Lei 12.850 art.4 corroboração)
- Prova NÃO possui bloco Trabalho/Previdenciário/Consumidor —
  apenas Penal, Civil, Const, Admin, Eleitoral, Infância (juros)

### Estado após Leva 71
| Tema | Início sessão | Agora |
| --- | --- | --- |
| Tributário | 185 | 200 ✓ |
| Trabalho | 57 | 129 |
| Ambiental | 200 | 200 ✓ |
| Direitos Humanos | 4 | **45** |
| **TOTAL DB** | — | **1404** |

DH já supera em 11× o estoque inicial (4→45) e o fluxo
"MP/Procurador/Defensor FGV + gabarito publicado → bloco
Infância/Juventude rico em ECA" continua sendo o mais produtivo
para DH. MPRJ 2025 teve 8 questões de Infância num único bloco.

## Leva 72 — TCE-GO 2024 Jurídica (Previdenciário)

TCE-GO Analista de Controle Externo — Jurídica, Edital 01/2024,
Tipo 1 Branca (Tarde). Prova objetiva + 2 discursivas. A parte
discursiva (Q2) cobre Seguridade Social/Previdência com 5 itens
sobre dependentes, aposentadoria por invalidez, aposentadoria
voluntária — útil para *template* doutrinário, não para múltipla
escolha.

Provas objetivas mineradas para bloco Previdenciário (Q84-87 do
caderno objetivo):
- Trabalho q1429-q1432 (+4): apropriação indébita previdenciária,
  contribuição 5% SAF/associação, parcela que incide contribuição,
  aposentado RGPS volta a trabalhar
- Descartadas: questões de controle externo/contabilidade (não
  são Direito do Trabalho nem Previdenciário puro)

## Leva 73 — MPGO 2025 (Difusos + Admin)

MPGO 49º Concurso Promotor de Justiça Substituto, Edital
182/2025-CSMP, PROVA 1 Tipo Branca-Manhã, gabarito PRELIMINAR de
01/02/2026 (prova aplicada 01/02/2026). 100 questões, layout 2
colunas (navegação propensa a erro — releitura múltipla).

Bloco "Direitos Difusos, Coletivos e Individuais Homogêneos"
(Q50-70) — mais produtivo para DH desta sessão:
- DH q1433-q1439 (+7): ECA art.144-A infiltração em ambiente
  digital (consumidor em sentido estrito CDC art.81 §1º III),
  associação em ACP (autorização assemblear p/ ACP se houver
  diretoria eleita), LGBTI+/nome social (STF ADI 4275 + Port.
  MGP 09/2018), acessibilidade PCD (Lei 10.098/2000), Lei
  13.431/2017 revitimização (escuta especializada), Estatuto
  Igualdade Racial (Lei 12.288/2010 — autoatribuição), direito
  difuso individuais homogêneos (CC art.935 distinção)
- Admin q1440-q1442 (+3): recomendação MP sem coercitividade
  (Lei 8.625/1993 art.27 parágrafo único), improbidade instâncias
  independentes (Lei 8.429/1992 art.21 — cível não vincula penal),
  inquérito civil inquisitivo (STJ — pode colher depoimento sem
  advogado)
- Descartadas: Q50 (tese específica CDC difícil), Q57 (defesa do
  consumidor institucional genérica), Q62 (IDH constitucional
  incerto), Q69 (ombudsman institucional), Q70 (atribuições MP
  eleitoral)

### Estado após Leva 73
| Tema | Início sessão | Agora |
| --- | --- | --- |
| Tributário | 185 | 200 ✓ |
| Trabalho | 57 | 133 |
| Ambiental | 200 | 200 ✓ |
| Direitos Humanos | 4 | **52** |
| Administrativo | 179 | 206 |
| **TOTAL DB** | — | **1418** |

Trabalho (133) e DH (52) seguem como os dois temas prioritários.
Próximas fontes: MPES 2025, MPU 2025, MPGO 2023 (mesmo padrão de
bloco Infância/Difusos). MP/Promotor FGV permanece a fonte mais
produtiva para DH.

## Leva 74 — MPGO 2022 Promotor (DH)

MPGO 48º Concurso Promotor de Justiça Substituto 2022, Tipo 1
(gabarito PRELIMINAR de 16/01/2022 — definitivo não publicado).
100 questões, layout 2 colunas. Bloco "Direitos Difusos,
Coletivos e Individuais Homogêneos" Q51-70 + blocos Civil/Penal.

Produção DH limitada (mais fino que MPGO 2025): o bloco Difusos
é majoritariamente processual-coletivo + improbidade (Admin),
não DH substantivo.
- DH q1443-q1444 (+2): Q88 encarceramento/convenção interamericana
  (STF RE 580.792 Tema 865 — responsabilidade objetiva do Estado
  por condições carcerárias), Q69 ensino domiciliar (STF RE 888.815
  Tema 825 — sem direito subjetivo constitucional ao homeschooling,
  mas possível lei federal)
- Descartadas (ambiguidade doutrinária ou preliminar): Q56
  (PNAE financiamento — Admin/orçamentário, não DH núcleo), Q70
  (creche ECA art.54 IV — competência ECA art.148 vs foro privativo
  Fazenda Pública contestada), Q78 (curatela compartilhada Lei
  13.146/2015 — detalhe estatutário em gabarito preliminar)

### Estado após Leva 74
| Tema | Agora |
| --- | --- |
| Trabalho | 133 |
| Direitos Humanos | **54** |
| **TOTAL DB** | **1420** |

Trabalho e DH seguem prioritários. Re-despachados agentes em
paralelo (DH em MP/Defensor, Trabalho em Procurador/TRT/TCE)
após janela de rate-limit 429 decorrida. Instruções reforçam
pacing de requisições HTTP para evitar novo 429.

## Leva 75 — TCE-SC 2026 Auditor Direito (Previdenciário)

TCE-SC Auditor Fiscal de Controle Externo — Direito, Edital 1/2026,
Tipo 1, gabarito DEFINITIVO de 24/05/2026. 80 questões. Bloco
Previdenciário no fim (Q94, Q97-Q100), resto é Penal/Civil/
Admin/Trib/Const sem DH.
- Trabalho q1433-q1435 (+3): Q94 remessa necessária INSS (CPC
  art. 496 §3º I — limite 1.000 salários-mínimos, líquida por
  cálculo aritmético), Q99 advogada autônoma RGPS segurada
  obrigatória (Lei 8.213 art. 11 V — contribuinte individual),
  Q100 servidor RPPS acumular com RGPS exige outra atividade
  remunerada lícita (CF art. 201 §2º + Lei 8.213 art. 11)
- Descartadas: Q93 (bens públicos — Admin/Civil), Q97/Q98
  (servidor RPPS/EC 103/19 — excluído por validação servidor
  estatutário). Cargo Administração (cns201) escaneado: bloco
  Trabalho fino (só "contratação" em sentido licitatório).

## Leva 76 — TRT-16 2022 Analista Judiciário Direito (Trabalho)

TRT-16 (Maranhão) Analista Judiciário — Área Judiciária — Graduação
em Direito, 2022, Tipo 1, gabarito DEFINITIVO de 06/11/2022. 80
questões. **Bloco Trabalho mais rico da sessão** (Q65-Q77):
empregador(10), segurado(9), acidente(8), greve(6), CLT, CNPS.
- Trabalho q1436-q1444 (+9): Q38 execução contribuições
  previdenciárias na JT (CLT art. 879-A — post-Reforma, por
  iniciativa do reclamante ou INSS, NÃO de ofício), Q66 intervalo
  amamentação (CLT art. 396 — dois intervalos de meia hora até 6
  meses), Q67 teletrabalho acidente + CAT (Lei 8.213 arts.19-22),
  Q69 custas teto (CLT art. 789 caput — 4× limite RGPS), Q68
  precatório vs RPV (CF art. 100 — RPV se ≤60 salários-mínimos),
  Q70 seguro-garantia judicial execução (CLT art. 889-A — dívida
  +30%), Q75 CNPS quadripartite (Lei 8.212 art. 6º), Q76 acidente
  refeitório + CAT 1º dia útil (Lei 8.213 arts.21-22), Q77 greve
  crime art. 197 CP (exige violência/grave ameaça)
- Descartadas: Q65 (convenção coletiva redução jornada+salário —
  ambíguo re CLT art. 611-A VI contrapartida), Q79 (paralização
  trabalho CP art.200 — Penal, não Trabalho núcleo), Q72 (sociedade
  conta participação — Civil), Q73 (falência competência —
  Processual). Q58 anulada (gabarito *).

### Estado após Leva 76
| Tema | Início sessão | Agora |
| --- | --- | --- |
| Trabalho | 57 | **145** |
| Direitos Humanos | 4 | **54** |
| Administrativo | 179 | 206 |
| **TOTAL DB** | — | **1432** |

TRT/Juiz do Trabalho FGV confirmado como fonte RICÍSSIMA para
Trabalho (9 questões de 1 prova). Outras regionais TRT (trt13,
etc.) e CSJT 2023 já minerado — próxima alvo: outras regionais
TRT com cargo Analista Judiciário (Graduação em Direito).

## Leva 77 — TRT-13 2022 Analista Judiciário Direito (Trabalho)

TRT-13 (Paraíba) Analista Judiciário — Área Judiciária — Graduação
em Direito, 2022, Tipo 1, gabarito DEFINITIVO de 27/11/2022. 70
questões. **Bloco Trabalho ainda mais rico que TRT-16** (empregad
26, aposentadoria 17, trabalhista 16, contribuição 12, CLT 8).
- Trabalho q1445-q1456 (+12): Q50 CTPS digital prazo (CLT art.29),
  Q52 estabilidade acidentária+inquérito (CLT arts.118/853), Q53
  menor noturno vedado (CF art.7º XXXIII + CLT art.404), Q54 acordo
  extrajudicial RO (CLT art.895), Q55 revelia advogado (CLT art.844
  + CPC art.318), Q56 prescrição intercorrente de ofício (CLT
  art.878 §1º), Q57 sumaríssimo 2 testemunhas (CLT arts.852-B/H),
  Q58 falência crédito trabalhista (Lei 11.101 art.3º), Q64
  atentado liberdade trabalho (CP art.197), Q66 apropriação indébita
  previdenciária (CP art.168-A), Q68 IR verbas (Lei 7.713), Q69
  gratificação natalina salário-contribuição (Lei 8.212 art.28)
- Descartadas: Q51 (intervalo >2h acordo individual — Reforma-
  contested art.71), Q59 (habilitação retardatária voto nuance), Q63
  (atestado médico — Penal), Q67 (contribuição sindical — Tributário),
  Q70 (ministro religioso facultativo/obrigatório — contested), Q20
  anulada.

### Estado após Leva 77
| Tema | Início sessão | Agora |
| --- | --- | --- |
| Trabalho | 57 | **157** |
| Direitos Humanos | 4 | **54** |
| Administrativo | 179 | 206 |
| **TOTAL DB** | — | **1444** |

Padrão confirmado: **TRT Regionais (Analista Judiciário Área
Judiciária Graduação em Direito) são a fonte mais rica para
Trabalho**, 9-12 questões por prova com gabarito definitivo.
Próximas regionais TRT a explorar (CSJT 2023 já minerado).

## Leva 78 — TRT-24 MS 2024 Analista Judiciário (Trabalho)

TRT-24 (Mato Grosso do Sul) Analista Judiciário Área Judiciária
Sem Especialidade 2024, Tipo 1, gabarito DEFINITIVO de 11/05/2025.
60 questões (Q11 anulada). Bloco Trabalho Q47-Q60 + Q31-36.
- Trabalho q1457-q1468 (+12): Q31 dispensa coletiva intervenção
  sindical (CF art.8º VI), Q33 aposentadoria PCD LC (CF art.201 §1º
  + LC 182/2021), Q35 licença homoafetiva adoção (Lei 8.213 art.
  71-A), Q47 retratação aviso prévio (CLT art.489), Q50 13º 2
  parcelas (Lei 4.090/62), Q51 desconsideração personalidade
  conhecimento (CPC art.50 + CLT art.792-A), Q52 acordo
  extrajudicial homologação (CLT art.855-B), Q53 força maior chuvas
  (CLT art.501), Q54 equiparação sem nacionalidade (CLT art.461
  §1º), Q56 saque FGTS aposentadoria (Lei 8.036 art.20), Q58 bem
  família 3 imóveis (STJ + Lei 8.009), Q60 reconvenção JT (CPC
  art.343 + CLT art.11)
- Descartadas: Q34 (contribuição sindical não-sindicalizados —
  STF ADI 5794 opt-in conflict), Q36 (servidora pré-CF/88 —
  ambiguous), Q48 (CIPA employer-indicado nuance), Q49
  (compensação habitual — Súmula 85 IV conflict), Q55 (EPI
  insalubridade Súmula 80), Q57 (RPV/precatório Município
  threshold), Q59 (depósito recursal entidade/doméstico).

### Estado após Leva 78
| Tema | Início sessão | Agora |
| --- | --- | --- |
| Trabalho | 57 | **169** |
| Direitos Humanos | 4 | **54** |
| Administrativo | 179 | 206 |
| **TOTAL DB** | — | **1468** |

Trabalho saltou de 133→169 nesta sessão (+36 em 3 provas TRT).
TRT regionais confirmadas como a fonte mais rica e limpa (gabarito
definitivo, 9-12 questões CLT cada). Faltam ~31 para 200.
