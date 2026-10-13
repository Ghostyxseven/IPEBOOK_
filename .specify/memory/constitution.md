# Constituição do Ipebook

Versão: 1.0.0. Ratificada em 2026-10-13.

## Princípios
1. Português em documentação, comunicação e textos da interface.
2. MVVM sofisticado: rotas → Views → ViewModels → casos de uso → contratos do domínio. Infraestrutura implementa contratos; `di/container.ts` compõe dependências.
3. Domínio puro, TypeScript estrito, erros de domínio e dependências por interfaces. ViewModels retornam `[state, actions]` e aceitam casos de uso injetáveis.
4. Spec Kit obrigatório: constituição, especificação, plano, tarefas, implementação e validação. Usar Superpowers proporcionalmente, sem duplicar documentos nem pedir aprovações intermediárias já autorizadas.
5. Decisões arquiteturais em ADRs numerados, preservando histórico e vínculos.
6. Critérios verificáveis, testes pertinentes, revisão do diff e registro honesto de limitações. Não usar Playwright.
7. Desenvolver em `develop` ou branches derivadas; nunca fazer commits em `main`. Publicação e envio remoto somente quando autorizados.

## Governança
Mudanças nestes princípios exigem atualizar este arquivo, as especificações afetadas e os ADRs pertinentes. Registrar versão e data. Não incluir credenciais nem criar dependências ou funcionalidades sem necessidade.
