# Como usar esta pasta

Conteúdo trazido em 2026-10-14 do Design System do IpêBook publicado como Artifact
(`https://claude.ai/artifact/DL8SuFjyx3YpgAer81fvoh`), para a equipe usar ao implementar as
telas das specs 003 e 004 (`specs/003-autenticacao-e-cadastro-de-anuncio/`,
`specs/004-negociacao-simples/`).

## O que tem aqui

- `README.md` — o brand book: cor, tipografia, espaçamento, estados, plataformas,
  acessibilidade e iconografia do IpêBook. Leitura obrigatória antes de estilizar qualquer tela.
- `tokens.json` — os tokens de design (cor, tipografia, espaçamento, raio, elevação, movimento)
  no formato padrão do sistema — mesma estrutura de `design-tokens.json` na raiz do repositório.
  **Atenção:** são dois arquivos de tokens diferentes (um já existia aqui, outro veio do
  artifact) — ver "Atenção" abaixo antes de decidir qual usar.
- `components/<Nome>/README.md` — guia de uso de cada um dos 23 componentes (Button, TextField,
  BookCover, BookRow, Dialog, EmptyState, NavigationBar, Snackbar, TopAppBar etc.).
- `components/<Nome>/preview.html` — exemplo visual de cada componente, renderizado com o
  bundle abaixo (eles rodam dentro do artifact original; aqui servem como referência de marcação
  e classes CSS, não para abrir direto no navegador fora do artifact).
- `components/bundle.js` / `bundle.css` / `index.d.ts` — implementação de referência em React
  Web (`window.React`/`window.ReactDOM` globais) dos 23 componentes, com classes CSS prefixadas
  `ipb-*` que consomem os tokens via `var(--token)`. **É React Web, não React Native** — o
  Ipebook é Expo/React Native, então isto não roda direto no app; serve como referência de
  nomes de classe, estrutura e regras de acessibilidade (rótulos, `aria-*`, alvo de toque) para
  recriar os componentes equivalentes em `src/view/components/`.

## Atenção: dois arquivos de tokens

Este repositório já tinha `design-tokens.json` na raiz e `src/view/tokens.ts` (ver ADR 0004).
O `tokens.json` desta pasta é uma versão mais recente/completa vinda do artifact (inclui tags de
modalidade Venda/Troca/Doação/Reservado/Concluído, capas ilustrativas, tema escuro). **Antes de
usar em código, reconciliar os dois** — não presumir qual prevalece sem decisão da equipe. Isso
não foi decidido aqui; é trabalho para quem for implementar a camada visual das specs 003/004.

## Como usar ao implementar

1. Ler `README.md` (este README do design-kit) para entender voz, cor, tipografia e regras de
   acessibilidade antes de montar uma tela nova.
2. Para cada componente novo de UI (botão, campo de texto, diálogo etc.), abrir o
   `components/<Nome>/README.md` correspondente e seguir a nota de uso.
3. Recriar o componente em `src/view/components/` como componente React Native, usando os
   tokens (depois de reconciliados — ver acima acima) em vez de valores soltos, seguindo o
   padrão já usado em `src/view/components/AppIcon.tsx`, `IconBadge.tsx` e `Icon.tsx`.
4. Não copiar o HTML/CSS Web diretamente — ele é referência de estrutura e acessibilidade, não
   código para colar no app.
