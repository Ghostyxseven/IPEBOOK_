# Especificação: estrutura inicial MVVM

Data: 2026-10-13. Branch: `develop`. Tipo: fundação de projeto novo.
Pedido: iniciar o Ipebook na pasta vazia `~/IPEBOOK_` com MVVM sofisticado.

## Objetivo e usuário
Oferecer ao desenvolvedor uma base executável e organizada para futuras funcionalidades do Ipebook.

## Escopo
Expo, React Native, TypeScript, Expo Router e as sete camadas. Um catálogo inicialmente vazio em memória demonstra a ligação entre elas. O modelo mínimo de livro tem identificador, título e autor; não representa ainda um cadastro completo.
Fora do escopo: autenticação, cadastro, busca, banco, migração do outro Ipebook e publicação.

## História US1 — iniciar e evoluir a base (P1)
Como desenvolvedor, quero executar a base e localizar cada responsabilidade sem acoplar telas à infraestrutura.

## Critérios de aceite
- CA01: existem `app`, `view`, `viewmodel`, `usecase`, `model`, `infra` e `di` em `src`; dependências obedecem às camadas.
- CA02: a rota inicial exibe Ipebook e estado vazio; carregamento, erro e nova tentativa são tratados pela ViewModel. O exemplo em memória inicia sem livros.
- CA03: o caso de uso aceita um datasource por contrato, permitindo testar lista vazia, lista preenchida e erro sem rede.
- CA04: instalação reproduzível com npm, tipagem estrita, testes e exportação web passam. Há CI localmente configurada com os mesmos comandos.
- CA05: constituição, plano, tarefas, ADRs e instruções estão em português; repositório local em `develop`, sem remoto.

## Verificação
CA01: verificador de imports e revisão. CA02: teste da ViewModel e inspeção do navegador em tela larga e estreita. CA03: testes unitários. CA04: `npm run validate` e `npm run build:web`. CA05: inspeção de arquivos e Git.

## Riscos e suposições
Expo adotado conforme a skill solicitada. Persistência em memória é temporária e não salva dados entre execuções. SDK escolhido a partir do template oficial disponível; validação nativa em dispositivo não faz parte desta fundação. Não existe código anterior nem falha preexistente nesta pasta.
