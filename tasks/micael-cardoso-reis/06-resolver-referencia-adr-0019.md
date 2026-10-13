# Tarefa 6 — Resolver referência quebrada ao ADR 0019

Responsável: Micael Cardoso Reis
Depende de: — (pode começar já)
Bloqueia: nada diretamente, mas é uma inconsistência de documentação ativa

## Contexto

Ver [00-achados-da-analise.md](../00-achados-da-analise.md), achado 3.
`docs/design-system.md` (linha 81) referencia `[ADR 0019](adr/0019-serifa-da-marca-e-superficies-do-figma.md)`
para justificar o uso da fonte Source Serif 4 Bold na marca, mas esse arquivo não existe em
`docs/adr/` — só existem os ADRs 0001 a 0004.

## O que investigar

- Confirmar se a decisão sobre a serifa da marca foi de fato tomada (ex.: no Figma, em
  conversa da equipe) mas nunca virou ADR, ou se o número "0019" foi um erro de digitação/
  numeração ao escrever o design system.
- Verificar se há outros ADRs "fantasmas" referenciados em `docs/` que também não existem.

## Ação esperada

- Se a decisão foi tomada e só falta o registro: criar o ADR seguindo o padrão de
  [docs/adr/0004-design-system-e-tokens-ihc.md](../../docs/adr/0004-design-system-e-tokens-ihc.md),
  com o número sequencial correto (não necessariamente 0019 — seguir a numeração real, que
  hoje está em 0004) e atualizar `docs/adr/README.md`.
- Se foi erro de referência: corrigir o link em `docs/design-system.md` para apontar ao ADR
  correto (criando-o se necessário, pelo processo acima).

## O que não fazer

- Não inventar um ADR 0005–0018 "para preencher a lacuna" — só criar o que corresponde a uma
  decisão real.

## Entregável

Link correto e funcional em `docs/design-system.md`, e ADR correspondente criado (se aplicável)
em `docs/adr/`, com índice atualizado.

---

## Registro de execução

_(preencher ao concluir: o que foi decidido, por quê, data, e o que ficou pendente)_

- Data:
- Causa encontrada:
- Ação tomada:
- ADR criado/corrigido (link):
- Pendências:
