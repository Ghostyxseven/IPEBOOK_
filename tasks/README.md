# Tarefas da equipe — Decisões de produto do Ipebook

Esta pasta organiza a divisão das questões pendentes em [docs/produto.md](../docs/produto.md)
(seção "Decisões de produto pendentes") em tarefas individuais para a equipe.

## Como usar

1. Cada integrante escolhe (ou recebe) um arquivo de tarefa abaixo.
2. Lê o contexto e as perguntas a responder dentro do próprio arquivo.
3. Ao concluir, preenche a seção **"Registro de execução"** no final do arquivo da tarefa —
   não apagar nem resumir demais; registrar o que foi decidido, por quê, e o que ficou pendente.
4. Decisões que mudam arquitetura (modelo de dados, autenticação, backend) devem virar um ADR
   em `docs/adr/` além do registro na tarefa.
5. Depois que as 4 tarefas estiverem concluídas, atualizar `docs/produto.md` com as decisões
   finais e abrir a próxima especificação em `specs/` para a primeira jornada do usuário.

## Ordem de dependência

```
Tarefa 1 (problema e público)
      │
      ▼
Tarefa 2 (modalidade e origem dos livros)
      │
      ▼
Tarefa 3 (escopo do MVP e conta/autenticação)

Tarefa 4 (plataformas) — pode ser feita em paralelo, depende pouco das demais
```

## Tarefas

| Arquivo | Tema | Depende de |
| --- | --- | --- |
| [01-problema-e-publico.md](01-problema-e-publico.md) | Problema que o Ipebook resolve e público-alvo | — |
| [02-modalidade-e-origem-dos-livros.md](02-modalidade-e-origem-dos-livros.md) | Modalidade do produto e origem dos livros | Tarefa 1 |
| [03-escopo-mvp-e-conta.md](03-escopo-mvp-e-conta.md) | Escopo da primeira entrega e conta/autenticação | Tarefas 1 e 2 |
| [04-plataformas.md](04-plataformas.md) | Plataformas suportadas inicialmente | — |
