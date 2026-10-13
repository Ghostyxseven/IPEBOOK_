# Tarefa 19 (Eric) — [Projeto grande] Corrigir métrica de reputação (venda aparece como troca)

Responsável: Eric Vinícius dos Santos Oliveira
Repositório: `/home/usermicael/Projetos/IpeBook`
Depende de: —
Área: Perfil/Identidade

## Contexto

A auditoria de 13/10/2026 encontrou que uma negociação de **venda** aparece como **troca** nas
métricas de reputação do perfil (`ProfileScreen.tsx`, `reputationFormat.ts`).

## O que fazer

- Reproduzir o bug: criar/observar uma negociação de venda e conferir como ela é contabilizada
  nas métricas de reputação.
- Corrigir `reputationFormat.ts` (e `ProfileScreen.tsx` se necessário) para classificar
  corretamente o tipo de negociação (venda vs. troca vs. doação).
- Adicionar teste de regressão cobrindo os três tipos de negociação.

## O que não fazer

- Não mudar o modelo de dados de negociação — o bug é de formatação/exibição.

## Entregável

Métrica de reputação corrigida com teste de regressão cobrindo venda, troca e doação.

---

## Registro de execução

- Data:
- Causa do bug:
- Correção aplicada:
- Teste adicionado:
- Pendências:
