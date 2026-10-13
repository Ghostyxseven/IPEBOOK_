# Tarefa 7 — Reconciliar contradição sobre a modalidade do produto

Responsável: Maria Clara Almeida Martins
Depende de: Tarefa 2 (modalidade e origem dos livros) — é parte da mesma decisão
Bloqueia: Tarefa 8 (especificar primeira jornada funcional)

## Contexto

Ver [00-achados-da-analise.md](../00-achados-da-analise.md), achado 1.
`docs/produto.md` lista a modalidade do produto (troca/doação, biblioteca pessoal, leitura
digital ou outra) como decisão **pendente**. Mas `docs/design-system.md` já descreve o Ipebook
como "aplicativo móvel comunitário de venda, troca e doação de livros em Piripiri (PI)", com
badges de modalidade prontos no Figma: Venda, Troca, Doação, Reservado, Concluído.

Os dois documentos não podem estar certos ao mesmo tempo. Isso provavelmente significa que a
decisão já foi tomada na prática (pelo trabalho de design/Figma) mas nunca foi formalizada em
`docs/produto.md` nem documentada com ADR — ou significa que o design system avançou além do
que foi de fato aprovado como escopo do produto.

## O que investigar

- Com quem a decisão de "venda + troca + doação" foi tomada (Figma da equipe, discussão não
  registrada)? Foi uma decisão de produto real ou um rascunho visual do design system que foi
  longe demais?
- Se foi uma decisão real: ela é compatível com a Tarefa 1 (problema e público) já respondida
  por Micael Cardoso Reis?

## Ação esperada

- Se a decisão "venda + troca + doação" é de fato o que a equipe quer: formalizar isso em
  `docs/produto.md` (tabela de decisões pendentes e seção de escopo), e abrir um ADR em
  `docs/adr/` registrando a modalidade escolhida, alternativas consideradas e consequências
  (isso substitui/complementa a Tarefa 2).
- Se não é: ajustar `docs/design-system.md` para não apresentar como decidido algo que não foi,
  ou re-escopar os badges de modalidade para a modalidade real escolhida.

## O que não fazer

- Não deixar os dois documentos contradizendo um ao outro — a reconciliação é o entregável
  principal desta tarefa, não uma escolha nova do zero.

## Entregável

`docs/produto.md` e `docs/design-system.md` consistentes entre si sobre a modalidade, com ADR
registrando a decisão final em `docs/adr/`.

---

## Registro de execução

- Data: 2026-10-13
- Decisão final sobre a modalidade: venda, troca e doação de livros físicos — confirma o que
  `docs/design-system.md` já descrevia.
- Qual documento estava desatualizado e o que foi corrigido: `docs/produto.md` estava
  desatualizado (listava a modalidade como pendente); atualizado para refletir a decisão, com
  a tabela de "Decisões de produto pendentes" movendo o item para "Decisões já tomadas".
- ADR criado (link): [docs/adr/0005-modalidade-venda-troca-doacao.md](../../docs/adr/0005-modalidade-venda-troca-doacao.md)
- Pendências: nenhuma quanto à modalidade em si; resta especificar o modelo de dados na
  primeira jornada funcional (Tarefa 8).
