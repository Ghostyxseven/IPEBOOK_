# Plano de Implementação: Autenticação e Cadastro de Anúncio

Objetivo: implementar a US1 (criar conta/entrar), US2 (cadastrar anúncio) e US3 (sair),
seguindo a arquitetura MVVM de sete camadas já estabelecida (ver
[docs/arquitetura.md](../../docs/arquitetura.md)), com persistência em memória.

## Modelo (camada `model`)

- `src/model/entities/user.ts`: `type User = Readonly<{ id: string; email: string }>`. Senha
  nunca é exposta nesta entidade — fica só na infraestrutura.
- `src/model/entities/book.ts`: estender `Book` com `modality: 'sale' | 'trade' | 'donation'` e
  `price?: number` (obrigatório e > 0 só quando `modality === 'sale'`), e `ownerId: string`
  (conta que cadastrou).
- `src/model/validators/bookValidator.ts`: estender para validar `modality` e a regra
  condicional de `price`.
- `src/model/validators/authValidator.ts` (novo): validar formato de e-mail e tamanho mínimo de
  senha.
- `src/model/errors.ts`: já tem `AuthError` e `ValidationError` — reaproveitar, sem criar novos
  tipos de erro.
- `src/model/datasources/iAuthDataSource.ts` (novo): contrato `signUp`, `signIn`, `signOut`,
  `currentUser`.

## Casos de uso (camada `usecase`)

- `src/usecase/authUseCases.ts` (novo): `IAuthUseCases` com `signUp(email, password)`,
  `signIn(email, password)`, `signOut()`, `getSession()`. Converte erros da infraestrutura em
  `AuthError`/`ValidationError` de domínio.
- `src/usecase/bookUseCases.ts`: estender `IBookUseCases` com `createListing(input, sessionUserId)`,
  validando com `bookValidator` e exigindo `sessionUserId` não nulo (FR-006).

## Infraestrutura (camada `infra`)

- `src/infra/datasources/memoryAuthDataSource.ts` (novo): mapa e-mail→conta em memória, com
  checagem de duplicidade (FR-002) e sessão atual em variável de instância.
- `src/infra/datasources/memoryBookDataSource.ts`: estender `list()`/adicionar `create()` para
  aceitar o anúncio novo, mantendo a cópia defensiva já existente.

## Composição (camada `di`)

- `src/di/container.ts`: instanciar `MemoryAuthDataSource`, compor `AuthUseCases`, e expor junto
  com o `IBookUseCases` já existente.

## ViewModel

- `src/viewmodel/useAuthViewModel.ts` (novo): estado de sessão (`user | null`, `loading`,
  `error`), ações `signUp`, `signIn`, `signOut`.
- `src/viewmodel/useCreateListingViewModel.ts` (novo): estado do formulário de anúncio
  (`title`, `author`, `modality`, `price`, `loading`, `error`), ação `submit()` que chama
  `createListing` com o `sessionUserId` da sessão atual.
- `src/viewmodel/useHomeViewModel.ts`: sem mudança de contrato; passa a refletir anúncios novos
  porque o datasource em memória é compartilhado via `di/container.ts`.

## View e rotas (camadas `view` e `app`)

- `src/view/auth/signIn.tsx`, `src/view/auth/signUp.tsx` (novas): formulários de entrar/criar
  conta, com estados de carregamento e erro conforme o design system já documentado.
- `src/view/listings/createListing.tsx` (novo): formulário de cadastro de anúncio, com campo de
  preço que só aparece quando a modalidade é venda.
- `src/view/home.tsx`: acrescentar botão "Anunciar" visível só quando há sessão ativa, e um
  indicador de sessão (e-mail logado / botão sair).
- `src/app/entrar.tsx`, `src/app/criar-conta.tsx`, `src/app/anunciar.tsx` (novas rotas): cada
  uma reexporta a View correspondente, seguindo o padrão de `src/app/index.tsx`.

## Sequência de implementação e commits planejados

1. Modelo: entidade `User`, extensão de `Book`, `authValidator.ts`, extensão de
   `bookValidator.ts`, `iAuthDataSource.ts`.
2. Casos de uso: `authUseCases.ts` e extensão de `bookUseCases.ts`, com testes unitários.
3. Infraestrutura: `memoryAuthDataSource.ts` e extensão de `memoryBookDataSource.ts`, com testes.
4. Composição: atualizar `di/container.ts`.
5. ViewModel: `useAuthViewModel.ts` e `useCreateListingViewModel.ts`, com testes (`renderHook`,
   seguindo o padrão de `useHomeViewModel.test.tsx`).
6. View: telas de entrar/criar conta/cadastrar anúncio, com testes RNTL seguindo o padrão de
   `homeView.test.tsx`.
7. Rotas em `src/app/` e botão "Anunciar"/sessão na Home.
8. Teste de integração cobrindo o fluxo completo de SC-001 (criar conta → entrar → cadastrar as
   3 modalidades → ver na listagem).
9. Atualizar `docs/arquitetura.md`, `docs/produto.md` (mover Escopo e situação de "não
   implementada" para "implementada") e `docs/estado.md`.
10. Rodar `npm run validate`, registrar evidências em `validacao.md` desta spec.

## Dependências e ferramentas

Nenhuma dependência nova — reaproveita Vitest, RNTL e os mocks já configurados no projeto. Não
há escolha de backend nesta especificação (persistência continua em memória, ver spec.md).
