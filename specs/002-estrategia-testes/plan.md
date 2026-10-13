# Plano de Implementação: Estratégia de Testes

Objetivo: Implementar todos os tipos de testes exigidos pela disciplina e alcançar a cobertura mínima de 80%, documentando as características da ISO/IEC 25010.
Decisão arquitetural: [ADR 0003](../../docs/adr/0003-estrategia-testes-iso25010.md).

## Estrutura das Suítes de Teste
A pasta `tests/` será reorganizada por responsabilidade e categoria:
```text
tests/
├── unit/
│   ├── bookValidators.test.ts      # Funções puras, validações de entidade e formatação (sucesso, falha, borda)
│   └── bookUseCases.test.ts        # Regras de negócio dos casos de uso
├── hooks/
│   └── useHomeViewModel.test.tsx   # Hook próprio com renderHook (ciclo de vida, concorrência, estados)
├── components/
│   └── homeView.test.tsx           # Teste de componente com RNTL (conteúdo, acessibilidade, renderização)
├── components-mocked/
│   └── homeViewMocked.test.tsx     # Componente com mock do hook de ViewModel (isolamento com motivo explícito)
└── integration/
    └── homeIntegration.test.tsx    # Integração real entre View + ViewModel + UseCase + Datasource

.maestro/
├── 01-catalogo-inicial.yaml         # Fluxo E2E: Abertura e checagem de catálogo
├── 02-recuperacao-erro.yaml        # Fluxo E2E: Recuperação de falha com retry
└── 03-navegacao-acessibilidade.yaml # Fluxo E2E: Verificação semântica e acessibilidade
```

## Dependências e Ferramentas
1. `@testing-library/react-native`: Para testes de componentes e de hooks com `renderHook`.
2. `@vitest/coverage-v8`: Para cobertura de código nativa do Vitest.
3. `maestro`: Configuração declarativa dos fluxos mobile.

## Sequência de Execução e Commits Planejados
1. Instalação e configuração de ferramentas (`@testing-library/react-native`, `@vitest/coverage-v8`, scripts).
2. Criação do módulo de validação do domínio (`src/model/validators/bookValidator.ts`) e seus testes unitários (`tests/unit/`).
3. Reestruturação e aprimoramento dos testes de hooks (`tests/hooks/useHomeViewModel.test.tsx`) usando `renderHook`.
4. Implementação de testes de componentes com RNTL (`tests/components/`).
5. Implementação de testes de componentes com mock (`tests/components-mocked/`).
6. Implementação de testes de integração (`tests/integration/`).
7. Criação dos fluxos E2E com Maestro em `.maestro/`.
8. Documentação completa no `README.md` e `docs/qualidade.md`, cobrindo ISO/IEC 25010 e guia da defesa oral.
