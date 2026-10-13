# Ipebook

Base independente em Expo, React Native e TypeScript, com MVVM sofisticado em sete camadas. A versão atual exibe um catálogo vazio em memória; não possui cadastro, autenticação ou banco.

## Começar

Na raiz do projeto, com Node.js 24 (versão usada pela CI) e npm:

```bash
npm ci
npm run web
```

Abrir a URL exibida pelo Expo. A primeira validação local foi feita com Node 26.8.2. O código atual não exige variáveis de ambiente. Orientações de Android/iOS e solução de problemas estão no [guia de desenvolvimento](docs/desenvolvimento.md).

## Verificar

```bash
npm run validate
npm run build:web
```

A validação reúne tipos, imports entre camadas e testes. O build exporta a web para `dist/`; isso não publica o aplicativo nem comprova funcionamento nativo. Consultar [cobertura e limitações](docs/qualidade.md).

## Documentação

- [Índice completo](docs/README.md)
- [Produto, público, requisitos e decisões pendentes](docs/produto.md)
- [Arquitetura, contratos e fluxo MVVM](docs/arquitetura.md)
- [Instalação, configuração e contribuição](docs/desenvolvimento.md)
- [Testes e integração contínua](docs/qualidade.md)
- [Guia de uso da versão atual](docs/uso.md)
- [Estado da entrega e continuidade](docs/estado.md)

## Organização

`src/app` define rotas; `view` renderiza; `viewmodel` gerencia estado e ações; `usecase` orquestra o domínio; `model` contém entidades e contratos; `infra` implementa dados/serviços; `di` compõe dependências.

Seguir [AGENTS.md](AGENTS.md), a [constituição](.specify/memory/constitution.md), as [especificações](specs/001-estrutura-mvvm/spec.md) e os [ADRs](docs/adr/README.md). O [Spec Kit](https://github.com/github/spec-kit) está inicializado para Codex em `.agents/skills`. Usar Superpowers conforme as instruções do projeto e manter os artefatos em português.

O repositório acompanha `origin/develop`. Desenvolver em `develop` ou branches derivadas; integração de novas entregas remotas por PR autorizado para `develop`. `main` fica reservada a versões revisadas e aprovadas. O estado local do Git não comprova CI remota aprovada ou aplicação publicada.
