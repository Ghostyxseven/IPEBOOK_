# Tarefa 16 (Antonio) — [Projeto grande] Corrigir acesso indevido ao menu de moderação

Responsável: Antonio Carlos Gomes (correção de permissão em conjunto com Micael, dono do
arquivo `SettingsScreen.tsx`)
Repositório: `/home/usermicael/Projetos/IpeBook`
Depende de: —
Área: Segurança/Moderação

## Contexto

A auditoria de 13/10/2026 encontrou que o menu de moderação aparece em `SettingsScreen.tsx`
para usuários que não deveriam ter acesso — falha de controle de acesso, prioridade baixa
segundo a auditoria, mas é uma exposição real de função administrativa.

## O que fazer

- Reproduzir o bug: confirmar com que tipo de usuário (comum vs. moderador) o menu aparece
  indevidamente.
- Corrigir a condição de exibição do menu em `SettingsScreen.tsx`, coordenando com Micael (dono
  da tela).
- Adicionar teste de regressão verificando que um usuário sem permissão não vê o menu.

## O que não fazer

- Não remover o menu de moderação para todo mundo.

## Entregável

Controle de acesso corrigido com teste de regressão.

---

## Registro de execução

- Data:
- Causa do bug:
- Correção aplicada:
- Teste adicionado:
- Pendências:
