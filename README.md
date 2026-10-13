# Ipebook

Base nova em Expo e TypeScript com MVVM sofisticado. O exemplo inicial lista um catálogo vazio em memória; não possui autenticação, cadastro ou banco.

## Executar

Pré-requisitos: Node.js 24 LTS e npm. A instalação inicial também foi executada com Node 26.8.2. Android/iOS precisam de emulador, dispositivo e ambiente Expo compatível com o SDK 57; iOS local requer macOS.

```bash
npm ci
npm run web
```

Para iniciar o Expo: `npm start`. Atalhos: `npm run android` e `npm run ios`.

## Estrutura e responsabilidades

```text
src/
├── app/                 # Rotas finas e layout de navegação
├── view/                # Renderização e eventos da interface
├── viewmodel/           # Hooks: estado, ações e navegação
├── usecase/             # Contratos e orquestração do domínio
├── model/
│   ├── entities/        # Tipos puros
│   ├── datasources/     # Contratos de persistência
│   ├── services/        # Contratos futuros, quando necessários
│   └── errors.ts        # Erros de domínio
├── infra/
│   ├── datasources/     # Implementação em memória
│   └── services/        # Implementações futuras
└── di/container.ts      # Composição das dependências
```

Fluxo inicial: `app/index.tsx` → `view/home.tsx` → `useHomeViewModel` → `IBookUseCases` → `IBookDataSource`. O container conecta `BookUseCases` a `MemoryBookDataSource`. Os dados não persistem. A ausência de livros é intencional.

Usar alias `@/`, contratos `I...` em arquivos `i...`, hooks `use...ViewModel` retornando `[state, actions]`. Apenas o container importa infraestrutura fora da própria camada. `_layout.tsx` pode configurar navegação; as demais rotas reexportam Views. Testes podem importar implementações para verificá-las.

## Verificar

```bash
npm run validate
npm run build:web
```

`validate` executa TypeScript estrito, verificação dos imports entre camadas e testes de comportamento. Interrompe no primeiro comando que falhar. A verificação de imports não substitui revisão das responsabilidades. O build exporta a versão web para `dist/`.

CI configurada em `.github/workflows/validacao.yml` com os mesmos comandos, Node 24 e `npm ci`. Não foi executada remotamente. Não há publicação nem remoto Git configurado.

## Desenvolvimento

Usar `develop` como base; não fazer commits diretamente em `main`. Esta entrega não cria commits.
Seguir [AGENTS.md](AGENTS.md), [constituição](.specify/memory/constitution.md), [especificação](specs/001-estrutura-mvvm/spec.md), [plano](specs/001-estrutura-mvvm/plan.md), [tarefas](specs/001-estrutura-mvvm/tasks.md) e [ADRs](docs/adr/README.md).

O [Spec Kit](https://github.com/github/spec-kit) foi inicializado com integração Codex em `.agents/skills`. Templates de documentos foram adaptados para português; scripts e skills de terceiros mantêm os identificadores originais. Usar Superpowers proporcionalmente por catálogo ou instalação disponível, mantendo os planos no Spec Kit.

Resultados e limitações da entrega: [validação](specs/001-estrutura-mvvm/validacao.md).
