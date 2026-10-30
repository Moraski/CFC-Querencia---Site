// Informações gerais do CFC. Mudou WhatsApp, horário ou endereço? É só editar aqui
// que o site inteiro é atualizado.

export const site = {
  nome: 'CFC Querência',
  fundacao: 2004,
  url: 'https://cfcquerencia.com',

  // Todo o contato é pelo WhatsApp (o telefone fixo foi desativado).
  whatsapp: '5566984240653', // só números: 55 (Brasil) + DDD + número
  whatsappFormatado: '(66) 98424-0653',
  instagram: 'cfc_querencia',

  endereco: {
    rua: 'Av. Oeste, Quadra 23, Lote 10, nº 283, Setor E',
    cidade: 'Querência',
    estado: 'MT',
    referencia: 'Próximo à Gazin',
    mapa: 'https://maps.app.goo.gl/HEAdZKCwNCinaLz6A',
    // Usado no mapa incorporado da seção de contato
    busca: 'CFC Querência, Av. Oeste 283, Setor E, Querência - MT',
  },

  horarios: [
    { dias: 'Segunda a sexta', horas: '07:30 às 11:30 e 13:00 às 18:00' },
    { dias: 'Sábado', horas: '07:30 às 11:30' },
  ],

  numeros: {
    aprovados: 2500,
    premios: 11, // prêmios "Melhores do Ano" da ACEQ, conquistados em vários anos
  },
} as const;

/** Anos de experiência calculados automaticamente, nunca mais fica desatualizado. */
export const anosDeExperiencia = new Date().getFullYear() - site.fundacao;
