import { Questao } from "../types";
import { QUESTOES_DIREITO_ADMINISTRATIVO } from "./direito-administrativo";
import { QUESTOES_CONSTITUCIONAL } from "./constitucional";
import { QUESTOES_DIREITO_CIVIL } from "./direito-civil";
import { QUESTOES_DIREITO_PENAL } from "./direito-penal";

export const QUESTOES_DB: Questao[] = [
  ...QUESTOES_DIREITO_ADMINISTRATIVO,
  ...QUESTOES_CONSTITUCIONAL,
  ...QUESTOES_DIREITO_CIVIL,
  ...QUESTOES_DIREITO_PENAL,
];

