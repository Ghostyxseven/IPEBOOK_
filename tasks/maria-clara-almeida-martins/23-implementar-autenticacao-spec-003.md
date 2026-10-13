# Tarefa 23 (Maria Clara) — Implementar autenticação da spec 003

Responsável: Maria Clara Almeida Martins
Depende de: —
Bloqueia: Tarefa 24 (Eric) na parte conjunta (T013, T015-T017)
Domínio: Autenticação e Experiência Inicial (mesma divisão do projeto irmão)

## Contexto

[specs/003-autenticacao-e-cadastro-de-anuncio/](../../specs/003-autenticacao-e-cadastro-de-anuncio/)
já está especificada (spec.md, plan.md, tasks.md). As tarefas de autenticação (criar conta,
entrar, sair) são suas: T001 (parte), T002 (parte), T003, T004, T009, T011, T014 (rotas de
entrar/criar-conta), conforme marcado em `tasks.md`.

## O que fazer

Seguir `specs/003-autenticacao-e-cadastro-de-anuncio/plan.md` e as tarefas marcadas como
**Maria Clara** em `specs/003-autenticacao-e-cadastro-de-anuncio/tasks.md`, na ordem: modelo →
caso de uso → infraestrutura → ViewModel → View → rota. Escrever teste antes ou junto de cada
unidade de código (TDD), seguindo o padrão já usado em `tests/unit/` e `tests/hooks/`.

Combinar com o Eric antes de mexer em `src/view/home.tsx` (T013) e `src/di/container.ts`
(T008) — são arquivos compartilhados.

## O que não fazer

- Não implementar login com Google — está fora do escopo da spec 003 (ver "Fora do escopo" em
  `spec.md`).
- Não mexer no cadastro de anúncio (parte do Eric) além do necessário para a sessão funcionar.

## Entregável

Tarefas T001 (parte), T002 (parte), T003, T004, T009, T011 e T014 (rotas de autenticação) de
`specs/003-autenticacao-e-cadastro-de-anuncio/tasks.md` marcadas como concluídas, com testes
passando.

---

## Registro de execução

- Data:
- O que foi implementado:
- Testes executados e resultado:
- Pendências:
