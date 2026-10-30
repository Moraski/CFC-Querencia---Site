# Site do CFC Querência

Site novo da autoescola, feito com **Astro + TypeScript + Tailwind**, usando **React** só onde precisa de interação.

## Como rodar no seu computador

1. Instale o [Node.js](https://nodejs.org) versão 24 (LTS).
2. No terminal, dentro desta pasta:

```bash
npm install      # baixa as dependências (só na primeira vez)
npm run dev      # abre o site em http://localhost:4321 e atualiza sozinho quando você salva
npm run build    # confere os tipos e gera o site final na pasta dist/
npm run preview  # mostra o site final, igual vai ficar no ar
```

## Onde fica cada coisa

```
src/
├── data/          ← CONTEÚDO. É aqui que você edita no dia a dia
│   ├── site.ts       telefone, WhatsApp, endereço, horários, números
│   ├── pacotes.ts    pacotes e preços (hoje com valores de exemplo)
│   ├── faq.ts        perguntas frequentes
│   └── servicos.ts   cards de objetivo, passos e diferenciais
├── components/    ← pedaços da página, um arquivo por seção
│   ├── Hero.astro          topo com título e botões
│   ├── Pacotes.astro       cards de pacote
│   ├── Simulador.tsx       componente React interativo
│   └── ...
├── layouts/
│   └── Base.astro    estrutura comum: <head>, SEO, menu, rodapé
├── lib/
│   └── whatsapp.ts   monta o link do WhatsApp com a mensagem
├── pages/         ← cada arquivo aqui vira uma página do site
│   ├── index.astro   a home (/)
│   └── 404.astro     página de "não encontrado"
└── styles/
    └── global.css    cores, fontes e classes de botão
public/            ← arquivos servidos como estão (favicon, imagens, robots.txt)
```

Procure por `TODO` no projeto para ver tudo que ainda falta preencher (preços, fotos, mapa, logo).

## Por que cada escolha

- **Astro**: gera páginas HTML prontas. O Google lê tudo na hora e o site abre rápido até no 4G. React puro montaria a página no navegador, o que é pior para SEO e mais lento.
- **Ilhas de React**: só o simulador usa React. O `client:visible` em `Pacotes.astro` faz o navegador baixar o React apenas quando o simulador aparece na tela. O resto do site não carrega nenhum JavaScript.
- **TypeScript**: os arquivos em `src/data/` têm tipos. Se você esquecer um campo de um pacote ou digitar um texto onde era número, o `npm run build` avisa antes de ir para o ar.
- **Tailwind**: estilos direto no HTML (`class="rounded-2xl p-6"`). As cores da marca estão em `src/styles/global.css`, em `@theme`. Trocou ali, mudou no site inteiro.
- **Conteúdo separado do layout**: para mudar um preço você não mexe em componente nenhum, só em `src/data/pacotes.ts`.
- **SEO local**: `Base.astro` coloca título, descrição, Open Graph e um bloco JSON-LD dizendo ao Google que somos uma autoescola (`DrivingSchool`) em Querência-MT. A home também envia o FAQ nesse formato. O sitemap é gerado sozinho.

## Exercícios para aprender mexendo

1. Mude a cor `--color-marca` em `global.css` e veja o site todo mudar.
2. Adicione uma pergunta em `faq.ts`.
3. Crie `src/pages/primeira-habilitacao.astro` usando o `Base` como layout. Ele vira a página `/primeira-habilitacao`.
4. Quando tiver os preços, preencha `precos` em `pacotes.ts` e faça o simulador mostrar o valor estimado.
5. Crie um componente `Depoimentos.astro` com as avaliações reais do Google.

## Publicar

**Teste:** a Vercel, ligada ao repositório do GitHub, publica uma versão de teste a cada `git push`.

**Site oficial (Hostinger, no lugar do WordPress):**

1. Rode `npm run build`. O site pronto fica na pasta `dist/`.
2. No painel da Hostinger, abra o Gerenciador de Arquivos e faça backup do `public_html` atual (o WordPress).
3. Apague o conteúdo do `public_html` e envie **todo o conteúdo** da pasta `dist/`, incluindo o arquivo oculto `.htaccess`.
4. Abra cfcquerencia.com e teste. Os endereços antigos (`/primeira-habilitacao/`, `/renovacao-de-cnh/` etc.) redirecionam sozinhos para o site novo, pelo `.htaccess`.
5. No Google Search Console (mesmo domínio, não precisa cadastrar de novo), envie o sitemap `https://cfcquerencia.com/sitemap-index.xml`.

O Perfil da Empresa no Google (avaliações, mapa, horário) não muda nada: ele é ligado ao negócio, não ao site.
