import { Questao } from "../types";
import { QUESTOES_DIREITO_ADMINISTRATIVO } from "./direito-administrativo";
import { QUESTOES_CONSTITUCIONAL } from "./constitucional";
import { QUESTOES_DIREITO_CIVIL } from "./direito-civil";
import { QUESTOES_DIREITO_PENAL } from "./direito-penal";
import { QUESTOES_DIREITO_TRIBUTARIO } from "./direito-tributario";
import { QUESTOES_DIREITO_TRABALHO } from "./direito-trabalho";
import { QUESTOES_DIREITO_AMBIENTAL } from "./direito-ambiental";
import { QUESTOES_DIREITOS_HUMANOS } from "./direitos-humanos";

export const QUESTOES_DB: Questao[] = [
  ...QUESTOES_DIREITO_ADMINISTRATIVO,
  ...QUESTOES_CONSTITUCIONAL,
  ...QUESTOES_DIREITO_CIVIL,
  ...QUESTOES_DIREITO_PENAL,
  ...QUESTOES_DIREITO_TRIBUTARIO,
  ...QUESTOES_DIREITO_TRABALHO,
  ...QUESTOES_DIREITO_AMBIENTAL,
  ...QUESTOES_DIREITOS_HUMANOS,
];
