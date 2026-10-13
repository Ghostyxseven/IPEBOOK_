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

- Data: 2026-10-13
- Causa encontrada: `docs/design-system.md` foi escrito com base no projeto irmão
  (`/home/usermicael/Projetos/IpeBook`), que tem um ADR 0019 real — mas o link foi copiado sem
  que o ADR correspondente existisse neste repositório, que segue numeração própria (parada em
  0006).
- Ação tomada: criado ADR local com o recorte específico que se aplica aqui (só a decisão da
  serifa da marca); o ADR 0019 do projeto irmão decide um escopo bem mais amplo que não existe
  neste projeto (superfícies Figma, capa ilustrativa, navegação de 5 destinos) e não devia ser
  replicado aqui.
- ADR criado/corrigido (link): [docs/adr/0007-serifa-da-marca.md](../../docs/adr/0007-serifa-da-marca.md);
  link em `docs/design-system.md` corrigido para apontar para ele.
- Pendências: nenhuma. Não há outras referências a ADRs inexistentes neste repositório (único
  achado dessa natureza na análise).
