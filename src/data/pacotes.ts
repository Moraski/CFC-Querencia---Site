// Planos de aulas práticas da Primeira Habilitação AB (moto + carro).
// Preços conferidos com o CFC em 29/10/2026.

/** Aparece em letra miúda embaixo dos planos. Atualize junto com os preços. */
export const validadePrecos = 'outubro de 2026';

export interface Plano {
  id: string;
  nome: string;
  aulasMoto: number;
  aulasCarro: number;
  aVista: number; // R$
  cartao: number; // R$ total no cartão
  parcelas: number; // máximo de parcelas no cartão
  destaque?: boolean;
}

export const planos: Plano[] = [
  { id: 'basico', nome: 'Básico', aulasMoto: 2, aulasCarro: 2, aVista: 1150, cartao: 1170, parcelas: 4 },
  { id: 'complementar', nome: 'Complementar', aulasMoto: 5, aulasCarro: 5, aVista: 1800, cartao: 1850, parcelas: 4 },
  { id: 'intermediario', nome: 'Intermediário', aulasMoto: 10, aulasCarro: 10, aVista: 2650, cartao: 2700, parcelas: 6, destaque: true },
  { id: 'avancado', nome: 'Avançado', aulasMoto: 15, aulasCarro: 15, aVista: 3350, cartao: 3450, parcelas: 6 },
];

/** Todo plano inclui a matrícula e 1 exame prático de moto e 1 de carro. */
export const incluidoEmTodos = ['Matrícula', '1 exame prático de moto', '1 exame prático de carro'];

/** Taxas pagas à parte (Detran e clínicas), fora do plano da autoescola. */
export const taxas: { nome: string; valor: number; aproximado?: boolean }[] = [
  { nome: 'Abertura do processo (Detran)', valor: 320.9 },
  { nome: 'Exame psicotécnico (Querência)', valor: 172 },
  { nome: 'Exame médico (Ribeirão Cascalheira)', valor: 80 },
  // Obrigatório na 1ª CNH A e B desde 2026 (Lei 15.153/2025). Valor varia por laboratório.
  { nome: 'Exame toxicológico', valor: 180, aproximado: true },
];

export const totalTaxas = taxas.reduce((soma, t) => soma + t.valor, 0);

export const formatarReais = (valor: number, casas = 2) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: casas, maximumFractionDigits: casas });
