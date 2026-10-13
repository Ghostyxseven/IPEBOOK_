# Validação da estrutura inicial

Data: 2026-10-13. Registro histórico da criação: entrega implementada e validada localmente. Naquele momento, branch `develop`, sem commits e sem remoto.

Atualização documental: posteriormente foi criado o commit `bb97d37` e configurado o acompanhamento de `origin/develop`. As evidências abaixo são da criação; situação corrente em [estado e continuidade](../../docs/estado.md).

## Evidências
- `npm run validate`: código 0; TypeScript estrito, 11 arquivos na checagem de imports e 9 testes em 2 arquivos aprovados.
- Testes: catálogo vazio, lista preenchida, propagação de erro de domínio, isolamento da memória, carregamento, nova tentativa, mensagem segura para erro inesperado e rejeição de resposta antiga.
- Controle negativo do verificador: importação temporária de infraestrutura em View rejeitada com código 1; arquivo removido antes da validação final.
- `npm run build:web`: código 0, três rotas exportadas para `dist/`.
- `npm ls --depth=0`: código 0. `expo install --check`: versões compatíveis conforme mapa local do SDK; endpoint remoto indisponível no ambiente restrito.
- Chromium headless via CDP, sem Playwright: tela carregada por HTTP local, estado vazio renderizado em 1280×800 e 390×844; sem transbordamento horizontal e sem exceções JavaScript. Capturas inspecionadas visualmente em `/tmp/ipebook-base-desktop.png` e `/tmp/ipebook-base-celular.png` (temporárias, não versionadas).
- Autorrevisão separada: contratos e direção dos imports conferidos, View sem regras de negócio/try-catch, hook injetável com tupla e proteção contra respostas antigas, container como ponto de composição. Nenhuma aprovação independente foi realizada.

## Ajustes durante a validação
O template consultado apontou Expo 57.0.28, indisponível no registro. Foi usado Expo 57.0.23, confirmado como publicado. Reanimated 4.5.1 e Worklets 0.10.1 foram fixados conforme o mapa do SDK para resolver conflito de dependências pares trazidas pelo Router. Não há animações implementadas.
A configuração do Vitest usa `.mts` para evitar ambiguidade entre CommonJS e módulos ES.

## Limitações
- Android e iOS não foram executados em dispositivo ou emulador; verificação visual cobre navegador em duas larguras.
- Erro, nova tentativa e carregamento foram verificados nos testes da ViewModel; o navegador foi conferido com o datasource padrão vazio.
- CI está configurada, porém não foi executada remotamente. Não há integração ou publicação.
- Lockfile gerado pela instalação npm; uma reinstalação limpa com `npm ci` não foi executada nesta sessão.
- O datasource é um exemplo sem persistência. Autenticação, cadastro e banco ficam para especificações futuras.

## Reproduzir
Executar `npm ci`, `npm run validate` e `npm run build:web`. Servir `dist/` com `python3 -m http.server 8089 --bind 127.0.0.1 --directory dist`. Abrir `http://127.0.0.1:8089`, verificar texto de ausência de livros e redimensionar para as larguras acima. Não usar Playwright.
