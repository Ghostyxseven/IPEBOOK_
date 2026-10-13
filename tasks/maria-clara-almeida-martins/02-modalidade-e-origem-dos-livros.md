# Tarefa 2 — Modalidade do produto e origem dos livros

Responsável: Maria Clara Almeida Martins
Depende de: Tarefa 1 (problema e público) — Micael Cardoso Reis
Bloqueia: Tarefa 3

## Contexto

O [docs/produto.md](../../docs/produto.md) lista a modalidade (troca/doação, biblioteca pessoal,
leitura digital ou outra) e a origem dos livros como decisões que mudam entidades, permissões
e integrações. O modelo atual de `Book` só tem `id`, `title` e `author` — sem regras de
cadastro, duplicidade, ISBN ou direitos de uso.

## Perguntas a responder

- Qual modalidade o Ipebook vai adotar: troca/doação, biblioteca pessoal, leitura digital ou
  outra?
- De onde vêm os livros (cadastro manual do usuário, importação de catálogo externo, upload de
  arquivo digital)?
- Há implicação de direitos de uso/propriedade intelectual na origem escolhida?
- Que campos novos o modelo `Book` precisa (além de `id`, `title`, `author`)?

## O que não fazer

- Não implementar o modelo de dados ainda — esta tarefa é de decisão, não de código.
- Não definir regras de duplicidade/moderação que não sejam pertinentes à modalidade escolhida.

## Entregável

Atualização da tabela de decisões pendentes em [docs/produto.md](../../docs/produto.md) e, por
mudar arquitetura (modelo de dados), um novo ADR em `docs/adr/` registrando a modalidade
escolhida, alternativas consideradas e consequências.

---

## Registro de execução

- Data: 2026-10-13
- Decisão: modalidade = venda, troca e doação de livros físicos (sem biblioteca pessoal,
  leitura digital ou empréstimo). Origem = cadastro manual pelo usuário (anúncio), sem
  importação de catálogo externo.
- Justificativa: alinhar com o design system já existente neste projeto (que já previa badges
  de Venda/Troca/Doação) e com o produto já validado em produção pelo projeto irmão
  (`/home/usermicael/Projetos/IpeBook`).
- ADR criado (link): [docs/adr/0005-modalidade-venda-troca-doacao.md](../../docs/adr/0005-modalidade-venda-troca-doacao.md)
- Confirmação: **o usuário solicitante confirmou diretamente em 2026-10-13** que venda+troca+
  doação é a modalidade correta, encerrando a necessidade de reconciliar com o projeto irmão.
- Pendências: extensão exata do modelo `Book` (campo de modalidade e demais campos de anúncio)
  fica para a especificação da primeira jornada funcional (Tarefa 8).
