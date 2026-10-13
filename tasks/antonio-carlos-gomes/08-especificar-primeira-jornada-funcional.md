# Tarefa 8 — Especificar a primeira jornada funcional do usuário

Responsável: Antonio Carlos Gomes
Depende de: Tarefa 1 (problema/público), Tarefa 2 (modalidade/origem), Tarefa 3 (escopo MVP/
conta), Tarefa 7 (reconciliação da modalidade)
Bloqueia: implementação de qualquer funcionalidade além da listagem atual

## Contexto

Hoje o Ipebook só tem uma tela: listagem de livros (vazia, carregando, com erro). Não há
cadastro, busca, conta ou persistência real — ver [docs/arquitetura.md](../../docs/arquitetura.md)
e [docs/produto.md](../../docs/produto.md). `docs/estado.md` já aponta como próximo passo
"Implementação da primeira jornada de usuário", mas essa especificação ainda não existe em
`specs/`.

## O que fazer

Com as decisões das Tarefas 1, 2, 3 e 7 em mãos, escrever a especificação da primeira jornada
funcional (provavelmente "cadastrar um livro" ou "ver detalhes de um livro", a depender do que
foi priorizado na Tarefa 3) em uma nova pasta `specs/003-<nome-da-jornada>/`, seguindo o
template já usado em `specs/001-estrutura-mvvm/` e `specs/002-estrategia-testes/`:

- `spec.md`: cenários de sucesso e erro, critérios de aceite verificáveis.
- `plan.md`: como a jornada atravessa as sete camadas (model → usecase → infra → di →
  viewmodel → view → app), reaproveitando os contratos existentes (`IBookDataSource`,
  `IBookUseCases`) e estendendo-os quando necessário.
- `tasks.md`: tarefas técnicas de implementação, uma por entrega pequena e verificável.

## O que não fazer

- Não implementar código nesta tarefa — é só especificação.
- Não incluir funcionalidade que a Tarefa 3 não priorizou para o primeiro incremento.
- Não decidir backend/persistência aqui — isso é consequência do escopo definido na Tarefa 3,
  não uma escolha nova.

## Entregável

Pasta `specs/003-<nome-da-jornada>/` completa (`spec.md`, `plan.md`, `tasks.md`), pronta para
implementação pela equipe, e `docs/estado.md` atualizado marcando esta especificação como feita.

---

## Registro de execução

- Data: 2026-10-13
- Jornada escolhida: autenticação (criar conta, entrar, sair) seguida de cadastro de anúncio de
  livro (título, autor, modalidade venda/troca/doação, preço condicional), aparecendo na
  listagem já existente.
- Pasta de spec criada (link): [specs/003-autenticacao-e-cadastro-de-anuncio/](../../specs/003-autenticacao-e-cadastro-de-anuncio/)
  (`spec.md`, `plan.md`, `tasks.md`)
- Justificativa: segue exatamente a ordem já decidida na Tarefa 3 ("(1) autenticação de conta,
  (2) cadastrar anúncio de livro, (3) catálogo/listagem já implementado, (4) negociação");
  busca/filtros, negociação e segurança/moderação ficam fora, para especificações futuras.
  Persistência continua em memória — nenhuma tecnologia de backend foi escolhida aqui.
- Pendências: implementação (17 tarefas técnicas em `tasks.md`) ainda não começou; esta tarefa
  cobre só a especificação.

---

## Especificação entregue

[specs/003-autenticacao-e-cadastro-de-anuncio/spec.md](../../specs/003-autenticacao-e-cadastro-de-anuncio/spec.md)
— 3 histórias (criar conta/entrar, cadastrar anúncio, sair), 7 requisitos funcionais, 3
critérios de sucesso, casos de erro e suposições documentados.

[specs/003-autenticacao-e-cadastro-de-anuncio/plan.md](../../specs/003-autenticacao-e-cadastro-de-anuncio/plan.md)
— plano por camada (model → usecase → infra → di → viewmodel → view → app), com sequência de
10 passos de implementação.

[specs/003-autenticacao-e-cadastro-de-anuncio/tasks.md](../../specs/003-autenticacao-e-cadastro-de-anuncio/tasks.md)
— 17 tarefas técnicas verificáveis, da camada de modelo até a validação final.
