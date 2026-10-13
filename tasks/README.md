# Tarefas da equipe — Ipebook

Esta pasta organiza o trabalho pendente do Ipebook em tarefas individuais, a partir de uma
análise completa do que já foi feito no projeto (`src/`, `docs/`, `specs/`, `docs/adr/`).

**Leitura obrigatória antes de qualquer tarefa:** [00-achados-da-analise.md](00-achados-da-analise.md)
— resume o que já está pronto e os 3 problemas encontrados (contradição de documentação sobre
modalidade, componentes visuais sem uso, link quebrado para ADR inexistente).

Cada integrante tem sua própria subpasta, nomeada conforme [docs/equipe.md](../docs/equipe.md),
com as tarefas que lhe cabem.

## Como usar

1. Ler [00-achados-da-analise.md](00-achados-da-analise.md) primeiro.
2. Cada integrante abre a sua subpasta e os arquivos de tarefa dentro dela.
3. Lê o contexto, as perguntas a responder e o entregável dentro do próprio arquivo.
4. Ao concluir, preenche a seção **"Registro de execução"** no final do arquivo da tarefa —
   não apagar nem resumir demais; registrar o que foi decidido, por quê, e o que ficou pendente.
5. Decisões que mudam arquitetura (modelo de dados, autenticação, backend) devem virar um ADR
   em `docs/adr/` além do registro na tarefa.
6. Depois que as tarefas 1 a 4 (decisões de produto) estiverem concluídas, seguem as tarefas 5
   a 8 (reconciliação de documentação, integração de componentes e especificação da primeira
   jornada funcional).

## Ordem de dependência

```
Tarefa 1 (problema e público) — Micael
      │
      ▼
Tarefa 2 (modalidade e origem dos livros) — Maria Clara
      │
      ├──▶ Tarefa 7 (reconciliar documentação de modalidade) — Maria Clara
      │
      ▼
Tarefa 3 (escopo do MVP e conta/autenticação) — Antonio
      │
      ▼
Tarefa 8 (especificar primeira jornada funcional) — Antonio

Tarefa 4 (plataformas) — Eric            ─┐ podem ser feitas em paralelo,
Tarefa 5 (integrar componentes visuais) — Eric ─┘ não dependem das demais
Tarefa 6 (resolver ADR 0019 ausente) — Micael  ─ pode começar já
```

## Tarefas por integrante

| Integrante | Pasta | Tarefas | Depende de |
| --- | --- | --- | --- |
| Micael Cardoso Reis | [micael-cardoso-reis/](micael-cardoso-reis/) | [01 — Problema e público-alvo](micael-cardoso-reis/01-problema-e-publico.md) | — |
| | | [06 — Resolver referência ADR 0019](micael-cardoso-reis/06-resolver-referencia-adr-0019.md) | — |
| Maria Clara Almeida Martins | [maria-clara-almeida-martins/](maria-clara-almeida-martins/) | [02 — Modalidade e origem dos livros](maria-clara-almeida-martins/02-modalidade-e-origem-dos-livros.md) | Tarefa 1 |
| | | [07 — Reconciliar documentação de modalidade](maria-clara-almeida-martins/07-reconciliar-documentacao-de-modalidade.md) | Tarefa 2 |
| Antonio Carlos Gomes | [antonio-carlos-gomes/](antonio-carlos-gomes/) | [03 — Escopo do MVP e conta/autenticação](antonio-carlos-gomes/03-escopo-mvp-e-conta.md) | Tarefas 1 e 2 |
| | | [08 — Especificar primeira jornada funcional](antonio-carlos-gomes/08-especificar-primeira-jornada-funcional.md) | Tarefas 1, 2, 3, 7 |
| Eric Vinícius dos Santos Oliveira | [eric-vinicius-dos-santos-oliveira/](eric-vinicius-dos-santos-oliveira/) | [04 — Plataformas suportadas inicialmente](eric-vinicius-dos-santos-oliveira/04-plataformas.md) | — |
| | | [05 — Integrar componentes visuais na Home](eric-vinicius-dos-santos-oliveira/05-integrar-componentes-visuais-na-home.md) | — |
