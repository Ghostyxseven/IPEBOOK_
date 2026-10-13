# Plano de implementação: estrutura MVVM

Objetivo: entregar a base executável descrita em [spec.md](spec.md).
Arquitetura: sete camadas conforme [ADR 0002](../../docs/adr/0002-adotar-expo-mvvm.md).
Stack: Expo SDK 57, React 19, React Native 0.86 e TypeScript; versões exatas no lockfile npm.

## Sequência
1. Inicializar Spec Kit para Codex e Git em develop; escrever constituição, especificação e ADRs.
2. Criar `package.json`, `app.json` e `tsconfig.json`; instalar Expo e dependências compatíveis usando `expo install`. Usar npm sem bibliotecas de estado, DI ou backend adicionais.
3. Criar domínio (`book.ts`, `errors.ts`, `iBookDataSource.ts`), contrato e implementação de casos de uso, datasource em memória e container.
4. Criar `useHomeViewModel.ts`, `view/home.tsx` e rotas finas. ViewModel injeta caso de uso, retorna tupla e trata erros; Views apenas renderizam. Evitar atualizações após desmontagem e corridas entre requisições.
5. Criar testes de contratos e estados e verificador de imports; configurar `validate` e CI para propagar falhas.
6. Executar validação, exportar web, inspecionar a tela e revisar as alterações. Atualizar tarefas e resultados.

## Apresentação mínima
Fundo papel #FAF8F2, texto #243D31, acento ipê #E9BE4A e texto secundário #58665D. Tipografia do sistema para evitar downloads. Conteúdo alinhado à esquerda, largura máxima 720, margem de 24 no celular. Sem animação, navegação fictícia ou botões sem ação.

## Dependências e licenças
Expo, React, React Native e TypeScript: ecossistema oficial com licença MIT e sem custo de serviço obrigatório. Testes com Vitest e react-test-renderer, apenas em desenvolvimento, para execução do hook sem navegador nem Playwright. Não adicionar serviço pago. Usar versões compatíveis com o SDK.

## Conformidade
Princípios da constituição atendidos pelo escopo. ADRs somente para adoção de registros e stack/arquitetura. Planejamento e verificação seguem Superpowers consultado via catálogo; documentos permanecem no Spec Kit por preferência do usuário.

## Fontes
- https://github.com/github/spec-kit
- https://github.com/architecture-decision-record/architecture-decision-record
- https://docs.expo.dev/router/installation/
- Context7: `/websites/expo_dev`, instalação do Router e alias de src.
