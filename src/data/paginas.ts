// Páginas de serviço (uma por assunto que o povo procura no Google).
// Cada item aqui vira uma página do site, no endereço do `slug`:
// { slug: 'cnh-moto' } → cfcquerencia.com/cnh-moto/
// Para criar uma página nova, copie um item, troque os textos e pronto.
//
// Dica de SEO: o Google mostra o `titulo` (texto azul) e a `descricao` (resumo cinza).
// Título com até ~60 letras e descrição com até ~155, sempre falando "Querência-MT".

import type { Categoria } from '@/data/pacotes';

export interface PaginaServico {
  slug: string;
  /** Texto azul no Google e nome da aba do navegador. */
  titulo: string;
  /** Resumo que aparece embaixo do título no Google. */
  descricao: string;
  /** Nome curto do serviço: aparece no menu do rodapé e no "Início › ..." */
  nome: string;
  h1: string;
  chamada: string;
  /** Se tiver, mostra o "a partir de" e os planos dessa categoria. */
  categoria?: Categoria;
  paraQuem: string[];
  /** Passo a passo próprio. Sem ele, a página mostra o da primeira habilitação. */
  passos?: { titulo: string; texto: string }[];
  mensagemWhatsApp: string;
  duvidas: { pergunta: string; resposta: string }[];
}

export const paginas: PaginaServico[] = [
  {
    slug: 'primeira-habilitacao',
    titulo: 'Primeira habilitação em Querência-MT: moto e carro | CFC Querência',
    descricao:
      'Tire sua primeira CNH de moto, carro ou os dois em Querência-MT. Você escolhe quantas aulas faz, em até 6x no cartão. Fale com o CFC Querência no WhatsApp.',
    nome: 'Primeira habilitação',
    h1: 'Primeira habilitação em Querência-MT',
    chamada:
      'Do curso teórico até a prova prática, a gente acompanha cada etapa da sua primeira CNH. Moto, carro ou os dois juntos, com aulas no percurso real da prova aqui em Querência.',
    categoria: 'AB',
    paraQuem: [
      'Quem vai tirar a carteira de motorista pela primeira vez',
      'Quem quer moto e carro juntos (categoria AB) e economizar no processo',
      'Quem nunca dirigiu e quer aprender com calma, sem pressão',
    ],
    mensagemWhatsApp: 'Olá! Vim pelo site e quero tirar minha primeira habilitação.',
    duvidas: [
      {
        pergunta: 'Vale mais a pena tirar moto e carro juntos?',
        resposta:
          'Para quem vai usar os dois, sim: você faz um processo só no Detran e o plano AB sai mais barato do que tirar cada categoria separada.',
      },
      {
        pergunta: 'Quanto tempo demora para tirar a CNH?',
        resposta:
          'Depende de quando você faz os exames e passa na prova teórica, e de quantas aulas práticas escolher. Chame no WhatsApp que a gente faz a previsão para o seu caso.',
      },
    ],
  },
  {
    slug: 'cnh-moto',
    titulo: 'CNH de moto em Querência-MT (categoria A) | CFC Querência',
    descricao:
      'Tire a carteira de moto em Querência-MT. Planos de aula de moto a partir de R$ 600, com exame prático incluso. Fale com o CFC Querência no WhatsApp.',
    nome: 'CNH de moto',
    h1: 'CNH de moto em Querência-MT',
    chamada:
      'Aprenda a pilotar com instrutor do lado, na pista com cones e no trânsito da cidade. Você escolhe quantas aulas quer fazer até se sentir pronto para a prova.',
    categoria: 'A',
    paraQuem: [
      'Quem vai tirar a primeira habilitação só de moto (categoria A)',
      'Quem já anda de moto e quer ficar com a documentação em dia',
      'Quem quer moto para trabalhar ou ir para a fazenda',
    ],
    mensagemWhatsApp: 'Olá! Vim pelo site e quero tirar a CNH de moto.',
    duvidas: [
      {
        pergunta: 'Preciso ter moto para fazer as aulas?',
        resposta: 'Não. As aulas e a prova são feitas com a moto da autoescola.',
      },
      {
        pergunta: 'Já tenho CNH de carro. Esta é a página certa?',
        resposta: 'Para quem já tem carteira de carro, o caminho é a adição de categoria, que é mais curto.',
      },
    ],
  },
  {
    slug: 'cnh-carro',
    titulo: 'CNH de carro em Querência-MT (categoria B) | CFC Querência',
    descricao:
      'Tire a carteira de carro em Querência-MT. Planos de aula de carro com exame prático incluso, em até 5x no cartão. Fale com o CFC Querência no WhatsApp.',
    nome: 'CNH de carro',
    h1: 'CNH de carro em Querência-MT',
    chamada:
      'Aulas práticas em carro da autoescola, com instrutor experiente e treino no mesmo percurso da prova. Você escolhe quantas aulas faz, do jeito que precisar.',
    categoria: 'B',
    paraQuem: [
      'Quem vai tirar a primeira habilitação só de carro (categoria B)',
      'Quem tem medo de dirigir e quer aprender no seu ritmo',
      'Quem precisa da carteira para trabalhar',
    ],
    mensagemWhatsApp: 'Olá! Vim pelo site e quero tirar a CNH de carro.',
    duvidas: [
      {
        pergunta: 'O carro da prova é o mesmo das aulas?',
        resposta: 'Sim. Você faz a prova prática com o carro da autoescola, o mesmo que usou para treinar.',
      },
      {
        pergunta: 'Já tenho CNH de moto. Esta é a página certa?',
        resposta: 'Para quem já tem carteira de moto, o caminho é a adição de categoria, que é mais curto.',
      },
    ],
  },
  {
    slug: 'adicao-de-categoria',
    titulo: 'Adição de categoria em Querência-MT: moto ou carro | CFC Querência',
    descricao:
      'Já tem CNH de carro e quer moto, ou tem de moto e quer carro? Faça a adição de categoria com o CFC Querência, em Querência-MT. Fale no WhatsApp.',
    nome: 'Adição de categoria',
    h1: 'Adição de categoria em Querência-MT',
    chamada:
      'Já tem carteira de carro e quer a de moto, ou o contrário? Com a adição de categoria você coloca a nova categoria na mesma CNH, sem começar tudo do zero.',
    paraQuem: [
      'Quem tem CNH de carro (B) e quer pilotar moto (A)',
      'Quem tem CNH de moto (A) e quer dirigir carro (B)',
    ],
    // TODO: conferir com o CFC se as etapas abaixo estão certas para o Detran-MT hoje.
    passos: [
      { titulo: 'Abertura do processo', texto: 'Aqui na autoescola, com a sua CNH atual em mãos.' },
      { titulo: 'Exame médico', texto: 'Em Ribeirão Cascalheira. A gente explica tudo antes.' },
      { titulo: 'Aulas práticas', texto: 'Você escolhe quantas aulas quer fazer na nova categoria.' },
      { titulo: 'Prova prática', texto: 'Com o veículo da autoescola. Aprovado, a nova categoria entra na sua CNH.' },
    ],
    mensagemWhatsApp: 'Olá! Vim pelo site e quero fazer adição de categoria.',
    duvidas: [
      {
        pergunta: 'Preciso fazer a prova teórica de novo?',
        resposta: 'Não. Quem já é habilitado faz só as etapas da nova categoria. Chame no WhatsApp que a gente confirma o seu caso.',
      },
      {
        pergunta: 'Quanto custa a adição de categoria?',
        resposta: 'Depende de quantas aulas você quiser fazer. Chame no WhatsApp que a gente passa o valor certinho.',
      },
    ],
  },
];
