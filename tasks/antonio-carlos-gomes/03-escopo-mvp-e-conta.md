# Tarefa 3 — Escopo da primeira entrega e conta/autenticação

Responsável: Antonio Carlos Gomes
Depende de: Tarefa 1 (problema e público) — Micael Cardoso Reis; Tarefa 2 (modalidade e origem dos livros) — Maria Clara Almeida Martins
Bloqueia: abertura da próxima especificação em `specs/`

## Contexto

Com o problema, o público e a modalidade definidos, falta priorizar quais ações compõem o
primeiro incremento útil e decidir se haverá conta de usuário — o que define acesso,
privacidade e recuperação de dados.

## Perguntas a responder

- Quais ações o usuário final precisa conseguir fazer na primeira entrega (ex.: cadastrar
  livro, buscar, solicitar troca)? Priorizar a lista — nem tudo cabe no primeiro incremento.
- Haverá conta de usuário? Se sim, quais dados mínimos ela exige?
- Se houver conta, como funciona recuperação de acesso e privacidade dos dados?

## O que não fazer

- Não incluir funcionalidade sem prioridade clara só porque parece natural.
- Não escolher tecnologia de autenticação/backend aqui — isso é consequência da decisão, não o
  foco desta tarefa (fica para quando a especificação técnica for feita).

## Entregável

Atualização da tabela de decisões pendentes em [docs/produto.md](../../docs/produto.md), lista
priorizada do escopo do MVP na seção "Escopo e situação", e — se envolver
autenticação/persistência — um ADR em `docs/adr/` registrando a decisão.

---

## Registro de execução

- Data: 2026-10-13
- Decisão (escopo priorizado): (1) autenticação de conta, (2) cadastrar anúncio de livro,
  (3) catálogo/listagem (já implementado), (4) solicitar e responder negociação simples. Busca/
  filtros avançados e segurança/moderação ficam para depois do primeiro incremento.
- Decisão (conta/autenticação): haverá conta, com e-mail/senha (ou código) e login Google;
  dados mínimos nome e e-mail.
- Justificativa: ordem de implementação já validada no projeto irmão
  (`/home/usermicael/Projetos/IpeBook`), que entregou autenticação → catálogo → anúncios →
  negociação nessa sequência e com sucesso.
- ADR criado (link, se aplicável): [docs/adr/0006-conta-com-email-e-google.md](../../docs/adr/0006-conta-com-email-e-google.md)
- Pendências: a tecnologia concreta de autenticação/persistência não foi escolhida aqui —
  fica para a especificação técnica da Tarefa 8.
