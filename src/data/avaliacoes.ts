// Avaliações do Google. TODO: copiar avaliações REAIS do Perfil da Empresa no Google
// (com autorização) e preencher a nota. Enquanto a lista estiver vazia, a seção só
// aparece no `npm run dev`, com exemplos marcados, e fica escondida no site publicado.

export interface Avaliacao {
  nome: string;
  texto: string;
  estrelas: 1 | 2 | 3 | 4 | 5;
  quando?: string; // ex.: "há 2 meses"
}

export const google = {
  nota: null as number | null, // ex.: 4.9
  total: null as number | null, // ex.: 187
  link: 'https://share.google/7S2TEWFKNRBllfcO5',
};

export const avaliacoes: Avaliacao[] = [];

/** Só para visualizar o layout durante o desenvolvimento. Nunca vai para o ar. */
export const exemplos: Avaliacao[] = [
  { nome: 'Exemplo de aluna', estrelas: 5, quando: 'há 1 mês', texto: 'Passei de primeira! Os instrutores têm muita paciência e o treino no percurso da prova fez toda a diferença.' },
  { nome: 'Exemplo de aluno', estrelas: 5, quando: 'há 3 meses', texto: 'Atendimento rápido pelo WhatsApp e resolveram tudo no Detran. Recomendo.' },
  { nome: 'Exemplo de mãe de aluno', estrelas: 5, quando: 'há 5 meses', texto: 'Meu filho tinha medo de dirigir e saiu de lá confiante. Equipe muito atenciosa.' },
];
