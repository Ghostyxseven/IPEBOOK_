Design system do IpêBook, a plataforma para vender, trocar e doar livros entre pessoas do mesmo bairro, em Android, iOS e Web. A fonte da verdade visual é o arquivo Figma [IpêBook](https://www.figma.com/design/cxEisNRzOQR6krv8Ow7HCa/Ip%C3%AABook): variáveis em "IpêBook · Cor", "IpêBook · Dimensão" e "IpêBook · Movimento", componentes na página "05 · Componentes". Os nomes dos tokens aqui são os mesmos do Figma e do código (`var(--primary)` na Web, `primary` no app).

## Como o IpêBook fala

- Escreva em português do Brasil, tratando a pessoa por **você**, em frases curtas e concretas.
- Botões dizem o que acontece, com verbo: "Anunciar livro", "Enviar proposta", "Combinar encontro", "Tentar de novo". Nunca "OK", "Clique aqui" ou caixa-alta.
- Diálogos perguntam e explicam a consequência: "Excluir anúncio?" / "O anúncio sai da busca e as conversas abertas são encerradas. Não dá para desfazer."
- Erros dizem como corrigir, no próprio campo: "Use um e-mail como nome@exemplo.com".
- Estados vazios dizem o próximo passo: "Sua estante está vazia. Anuncie um livro que você já leu para vender, trocar ou doar para alguém do seu bairro."
- Fale de **bairro**, não de cidade nem distância: o app mostra "Centro", não "a 1,2 km". Não mostre dados que o app não tem (notas, distância, avaliações).
- Sem emoji na interface. Modalidades sempre pelo nome: Venda, Troca, Doação.

## Cor

- Fundo de tela em `surface`; cartões e campos em `surface-container-low`; busca, diálogo e bolha recebida em `surface-container-high`.
- Texto principal em `on-surface`; apoio e ícones inativos em `on-surface-variant`. Os dois passam de 7:1 nos dois temas.
- `primary` (verde ipê-do-cerrado) só para a ação principal, item ativo, links e progresso. Uma ação Preenchida por tela.
- Modalidades: Venda em `secondary-container`, Troca em `tertiary-container`, Doação em `doacao-container`, Reservado em `surface-container-highest`, Concluído em `primary`. A tag sempre leva o nome, então a cor nunca é o único sinal.
- `brand-brown` é a cor do logotipo e de títulos da marca; `brand-amber` e `cover-sun` são o sol das capas e nunca viram texto.
- Erro em `error` sobre `surface`; destrutivo usa o botão Perigo.
- Tema escuro: todos os tokens têm valor escuro; não troque cores à mão. As cores das capas (`cover-*`) são iguais nos dois temas.
- Borda de controle em `outline` (4,2:1); `outline-variant` só para divisórias que não carregam significado.

## Tipografia

- **Source Serif 4 Bold** é a voz da marca: logotipo, título grande de tela raiz (`brand-large-title`), título do livro (`brand-title`, `brand-card-title`) e título de estado vazio. Não use serifa em texto corrido nem em botões.
- **Roboto Flex** é a interface no Android e na Web: escala do Material 3 (`m3-*`) e da Web (`web-*`).
- **SF Pro** (fonte do sistema) é a interface no iOS: escala `ios-*`, respeitando o Dynamic Type.
- Rótulos de botão em `m3-label-lg`; texto de campo e de mensagem em `m3-body-lg`; descrições em `m3-body-md`.
- Respeite o tamanho de fonte do sistema até 200%: nada de altura fixa em texto; listas e cartões crescem.

## Espaço, forma e elevação

- Grade de 4 px: use só `space-*`. Margem lateral das telas móveis `space-4`; padding de diálogo `space-6`; entre seções `space-8`. Web: conteúdo com margem de 80 px a 1440 px e layout móvel abaixo de 840 px.
- Raios: pílula (`radius-full`) para botões, busca, avatar e badge; `radius-sm` para chip e tag; `radius-lg` para cartões e FAB; `radius-xl` para bolhas; `radius-xxl` para diálogos. No iOS, `radius-ios-cell`, `radius-ios-sheet` e `radius-ios-alert`.
- Elevação só onde algo flutua: `elevation-1` em capas, `elevation-3` em FAB, diálogo e snackbar. Superfícies comuns são planas e se separam pela cor de `surface-container-*`.
- Movimento com `duration-*`: toque e foco em `duration-short2`, chips e abas em `duration-short4`, diálogo e snackbar em `duration-medium2`. Com Reduzir movimento, troque deslocamentos por esmaecimento.

## Estados

- Pressionado: camada da cor do conteúdo a 12% (Preenchido) ou 10% (demais) sobre o componente. Hover na Web: 8%.
- Foco: anel sólido de 3 px em `focus-ring`, por fora, com 2 px de folga. Tem 3,9:1 sobre `surface` no claro e 4,6:1 no escuro. Nunca remova o anel.
- Desabilitado: fundo `on-surface` a 12% e conteúdo a 38%, sem foco. Prefira deixar o botão ativo e explicar o erro.
- Erro: borda e rótulo em `error`, mensagem com ícone embaixo do campo.

## Plataformas

- **Android**: Material 3. Barra de navegação com cinco destinos (Início, Explorar, Estante, Conversas, Perfil), barra superior pequena, FAB estendido só na Estante.
- **iOS 26**: componentes oficiais da Apple (tab bar de vidro com os mesmos cinco destinos, listas agrupadas, folhas, alertas). Vidro (`glass-fill`, `glass-stroke`) só em controles flutuantes, nunca em conteúdo. Com Reduzir transparência, o vidro vira `surface-container`.
- **Web**: cabeçalho com busca e "Anunciar", grade de 4 colunas de cartões no desktop, mesmos tokens via variáveis CSS e `[data-theme="dark"]`.
- Os apps não têm layout de tablet nem de iPad.

## Acessibilidade

- Contraste: texto 4,5:1 (3:1 a partir de 24 px ou 19 px em negrito), bordas de controle, ícones e anel de foco 3:1, em claro e escuro. Os pares do sistema passam; os valores estão na nota de cada token.
- Alvo de toque mínimo de 48 dp no Android e na Web, 44 pt no iOS, mesmo quando o desenho é menor (chip de 32, tag de 20).
- Todo controle tem rótulo acessível: ícone sozinho ganha nome ("Voltar", "Limpar busca"); badges entram no rótulo do destino ("Conversas, 3 não lidas").
- Ordem de leitura igual à visual. Diálogo prende o foco e o devolve ao fechar. Mensagens de status usam `role="status"`.
- Cor nunca é o único sinal: tags têm texto, chip selecionado tem check, erro tem ícone e mensagem, mensagem lida tem ícone diferente.
- Capas ilustrativas têm texto alternativo com o título; ilustrações decorativas ficam ocultas do leitor de tela.

## Iconografia

- **Material Symbols Outlined**, 24 px, no Android e na Web; **SF Symbols** no iOS. Ícones herdam a cor do texto ao lado (`on-surface-variant` quando inativos).
- Os ícones locais do Figma ficam em "05 · Componentes › 03 · Componentes de apoio › Ícones Material locais" (home, chat_bubble, delete, lock, description, event, help, logout, close, done_all, error).
- Nos componentes desta página os ícones são os desenhos do Material Symbols embutidos no `IpeBook.Icon`. A Estante usa um desenho próprio de livros na prateleira.

## Capas ilustrativas

- Quando o anúncio não tem foto, use `BookCover`: cinco cores (`cover-navy`, `cover-brown`, `cover-forest`, `cover-wine`, `cover-ochre`) × quatro motivos (montanhas, ipê, ondas, estrelas), com sol em `cover-sun` e texto em `cover-on`.
- Escolha cor e motivo a partir do id do anúncio para a capa ser sempre a mesma.

## O que não está aqui

- Arquivos de fonte: Roboto Flex e Source Serif 4 vêm do Google Fonts; SF Pro é a fonte do sistema da Apple.
- Os componentes oficiais do iOS (Apple Design Resources) e do Material 3 ficam na página "04 · Bibliotecas oficiais" do Figma; aqui só o que é do IpêBook.
- As notas de uso dos componentes resumem as descrições do Figma com outras palavras.
