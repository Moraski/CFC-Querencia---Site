// Passo a passo do processo e diferenciais da home.
// Os ícones vêm do Lucide (https://lucide.dev/icons): para trocar, procure o nome lá e importe aqui.
import {
  Smartphone,
  FileCheck,
  Brain,
  Stethoscope,
  FlaskConical,
  BookOpenCheck,
  CarFront,
  Award,
  ShieldCheck,
  MessageCircle,
  CalendarCheck,
} from '@lucide/astro';

export const passos = [
  {
    titulo: 'Curso teórico grátis',
    icone: Smartphone,
    texto: 'Faça o curso teórico pelo aplicativo CNH do Brasil.',
  },
  {
    titulo: 'Abertura do processo',
    icone: FileCheck,
    texto: 'Aqui na autoescola ou no Detran.',
    valor: 'Taxa R$ 320,90',
  },
  {
    titulo: 'Exame psicotécnico',
    icone: Brain,
    texto: 'Feito aqui em Querência.',
    valor: 'R$ 172,00',
  },
  {
    titulo: 'Exame médico',
    icone: Stethoscope,
    texto: 'Em Ribeirão Cascalheira, sempre depois do psicotécnico.',
    valor: 'R$ 80,00',
    alerta: true,
  },
  {
    titulo: 'Exame toxicológico',
    icone: FlaskConical,
    texto: 'Obrigatório na primeira CNH desde 2026. O resultado precisa sair antes da CNH provisória.',
    valor: 'Cerca de R$ 180,00',
  },
  {
    titulo: 'Prova teórica',
    icone: BookOpenCheck,
    texto: 'Com os dois exames feitos, agende a prova no Detran.',
  },
  {
    titulo: 'Aulas e prova prática',
    icone: CarFront,
    texto: 'Aprovado na teórica, faça a matrícula aqui e escolha quantas aulas quer fazer até estar pronto para a prova.',
    final: true,
  },
];

export const diferenciais = [
  { titulo: '11 prêmios ACEQ', icone: Award, texto: 'Eleita entre os Melhores do Ano da ACEQ em vários anos.' },
  { titulo: 'Desde 2004 em Querência', icone: ShieldCheck, texto: 'A gente conhece cada rua do percurso da prova.' },
  { titulo: 'Você escolhe as aulas', icone: CalendarCheck, texto: 'Planos prontos ou monte o seu, do jeito que precisar.' },
  { titulo: 'Atendimento no WhatsApp', icone: MessageCircle, texto: 'Tire dúvidas e acompanhe seu processo sem sair de casa.' },
];
