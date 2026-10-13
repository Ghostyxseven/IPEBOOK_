# Guia de uso da versão atual

A versão 0.1.0 é uma base inicial do Ipebook. A única tela de produto é a listagem de livros. Ela ainda não oferece cadastro, conta de usuário ou pesquisa.

## Abrir

Quem desenvolve o projeto pode iniciá-lo seguindo o [guia de desenvolvimento](desenvolvimento.md). Não existe endereço público de aplicação verificado nesta documentação.

## O que aparece

| Estado | O que a tela mostra | O que fazer |
| --- | --- | --- |
| Carregando | Indicador e “Carregando livros…” | Aguardar a consulta |
| Catálogo vazio | “Ainda não há livros por aqui.” | Nenhuma ação necessária; é a configuração inicial |
| Livros disponíveis | Título e autor de cada livro | Consultar a lista; não há tela de detalhes |
| Falha | Mensagem e “Tentar novamente” | Acionar o botão para repetir a consulta |

O catálogo padrão é vazio. A tela sabe renderizar livros fornecidos pela camada de dados, mas não há opção para adicioná-los pela interface. Não é preciso criar conta ou fornecer informações pessoais para abrir esta base.

## Limitações

Não é possível cadastrar, editar ou excluir livros, salvar biblioteca pessoal, trocar ou doar exemplares, conversar com pessoas, ler arquivos digitais ou sincronizar dados. Essas ações não devem ser inferidas do nome Ipebook. O escopo do produto final está descrito, com suas pendências, em [produto.md](produto.md).
