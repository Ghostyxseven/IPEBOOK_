# 0002 — Adotar Expo e MVVM sofisticado

Data: 2026-10-13. Status: aceito.

## Contexto
O usuário solicitou uma nova base Ipebook em pasta vazia com o padrão MVVM sofisticado da skill `skill_mvvm_simplificado`.

## Decisão
Usar Expo/React Native, TypeScript estrito e Expo Router. Organizar `src` em `app`, `view`, `viewmodel`, `usecase`, `model`, `infra` e `di`. Alias `@/` aponta para src. Somente container compõe implementações concretas. Hooks recebem casos de uso por contrato e retornam `[state, actions]`.
O catálogo vazio em memória é um exemplo mínimo de integração, sem persistência remota. A pasta `model/services` fica reservada para contratos necessários futuramente; não inventar serviços.

## Alternativas
MVVM somente com três pastas reduz arquivos, mas não atende à separação solicitada. Acesso direto a backend pelas telas viola inversão de dependência. Migrar o projeto existente não corresponde à pasta escolhida.

## Consequências
Mais arquivos pequenos, porém responsabilidades explícitas e testes isolados. Banco e autenticação exigirão especificações próprias. O SDK 57 e versões compatíveis são registrados no lockfile; não há backend nem credenciais.

Vínculos: [especificação](../../specs/001-estrutura-mvvm/spec.md), [plano](../../specs/001-estrutura-mvvm/plan.md). Referência técnica: https://docs.expo.dev/router/installation/.
