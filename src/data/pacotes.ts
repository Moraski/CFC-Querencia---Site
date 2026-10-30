// Planos de aulas práticas da Primeira Habilitação.
// Preços conferidos com o CFC em 29/10/2026.

/** Aparece em letra miúda embaixo dos planos. Atualize junto com os preços. */
export const validadePrecos = 'outubro de 2026';

export type Categoria = 'AB' | 'B' | 'A';

export const categorias: Record<Categoria, { nome: string; curto: string }> = {
  AB: { nome: 'Moto + carro (AB)', curto: 'Moto + carro' },
  B: { nome: 'Só carro (B)', curto: 'Só carro' },
  A: { nome: 'Só moto (A)', curto: 'Só moto' },
};

export interface Plano {
  id: string;
  categoria: Categoria;
  nome: string;
  aulasMoto: number;
  aulasCarro: number;
  aVista: number; // R$
  cartao: number; // R$ total no cartão
  parcelas: number; // máximo de parcelas no cartão
  destaque?: boolean;
}

export const planos: Plano[] = [
  // Moto + carro
  { id: 'ab-basico', categoria: 'AB', nome: 'Básico', aulasMoto: 2, aulasCarro: 2, aVista: 1150, cartao: 1170, parcelas: 4 },
  { id: 'ab-complementar', categoria: 'AB', nome: 'Complementar', aulasMoto: 5, aulasCarro: 5, aVista: 1800, cartao: 1850, parcelas: 4 },
  { id: 'ab-intermediario', categoria: 'AB', nome: 'Intermediário', aulasMoto: 10, aulasCarro: 10, aVista: 2650, cartao: 2700, parcelas: 6, destaque: true },
  { id: 'ab-avancado', categoria: 'AB', nome: 'Avançado', aulasMoto: 15, aulasCarro: 15, aVista: 3350, cartao: 3450, parcelas: 6 },
  // Só carro
  { id: 'b-basico', categoria: 'B', nome: 'Básico', aulasMoto: 0, aulasCarro: 2, aVista: 640, cartao: 680, parcelas: 4 },
  { id: 'b-complementar', categoria: 'B', nome: 'Complementar', aulasMoto: 0, aulasCarro: 5, aVista: 1000, cartao: 1050, parcelas: 4 },
  { id: 'b-intermediario', categoria: 'B', nome: 'Intermediário', aulasMoto: 0, aulasCarro: 10, aVista: 1550, cartao: 1700, parcelas: 5, destaque: true },
  // Só moto
  { id: 'a-basico', categoria: 'A', nome: 'Básico', aulasMoto: 2, aulasCarro: 0, aVista: 600, cartao: 640, parcelas: 4 },
  { id: 'a-complementar', categoria: 'A', nome: 'Complementar', aulasMoto: 5, aulasCarro: 0, aVista: 900, cartao: 950, parcelas: 4 },
  { id: 'a-intermediario', categoria: 'A', nome: 'Intermediário', aulasMoto: 10, aulasCarro: 0, aVista: 1400, cartao: 1500, parcelas: 5, destaque: true },
];

export const planosDa = (c: Categoria) => planos.filter((p) => p.categoria === c);

/** O que todo plano inclui, por categoria. */
export const incluido: Record<Categoria, string[]> = {
  AB: ['Matrícula', '1 exame prático de moto', '1 exame prático de carro'],
  B: ['Matrícula', '1 exame prático de carro'],
  A: ['Matrícula', '1 exame prático de moto'],
};

/** Taxas e exames pagos à parte (Detran e clínicas), fora do plano da autoescola. */
export interface Taxa {
  nome: string;
  valor: Record<Categoria, number>;
}

export const taxas: Taxa[] = [
  { nome: 'Taxa do Detran', valor: { AB: 320.9, B: 263.9, A: 263.9 } },
  { nome: 'Exame psicotécnico (Querência)', valor: { AB: 172, B: 172, A: 172 } },
  { nome: 'Exame médico (Ribeirão Cascalheira)', valor: { AB: 80, B: 80, A: 80 } },
  // Obrigatório na 1ª CNH A e B desde 2026 (Lei 15.153/2025).
  { nome: 'Exame toxicológico', valor: { AB: 150, B: 150, A: 150 } },
];

export const totalTaxas = (c: Categoria) => taxas.reduce((soma, t) => soma + t.valor[c], 0);

export const menorPreco = Math.min(...planos.map((p) => p.aVista));

export const formatarReais = (valor: number, casas = 2) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: casas, maximumFractionDigits: casas });
