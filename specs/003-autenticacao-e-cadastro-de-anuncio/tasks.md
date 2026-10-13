# Tarefas: Autenticação e Cadastro de Anúncio

Atribuição por domínio (ver [docs/DIVISAO_FEATURES.md do projeto irmão](/home/usermicael/Projetos/IpeBook/docs/DIVISAO_FEATURES.md)
e `tasks/` deste repositório): **Maria Clara Almeida Martins** — autenticação (T001 parte,
T002 parte, T003, T004, T009, T011, T014 rotas de entrar/criar-conta); **Eric Vinícius dos
Santos Oliveira** — cadastro de anúncio (T001 parte, T002 parte, T005, T006, T007, T008, T010,
T012, T014 rota de anunciar). T013, T015, T016 e T017 são conjuntas (tocam a Home e a validação
final) — combinar entre os dois antes de mexer em `src/view/home.tsx` para não haver conflito.

## Modelo e validação

- [ ] T001 Criar `src/model/entities/user.ts` (**Maria Clara**) e estender
      `src/model/entities/book.ts` com `modality` e `price` opcional (FR-004, FR-005)
      (**Eric**).
- [ ] T002 Criar `src/model/validators/authValidator.ts` (e-mail e senha) (**Maria Clara**) e
      estender `src/model/validators/bookValidator.ts` com a regra condicional de preço por
      modalidade, com testes unitários em `tests/unit/` (**Eric**).
- [ ] T003 Criar `src/model/datasources/iAuthDataSource.ts`. **Maria Clara**

## Casos de uso e infraestrutura

- [ ] T004 Criar `src/usecase/authUseCases.ts` (`IAuthUseCases`: signUp, signIn, signOut,
      getSession) com testes unitários cobrindo duplicidade de e-mail (FR-002) e credenciais
      inválidas. **Maria Clara**
- [ ] T005 Estender `src/usecase/bookUseCases.ts` com `createListing`, exigindo sessão (FR-006),
      com testes unitários. **Eric**
- [ ] T006 Criar `src/infra/datasources/memoryAuthDataSource.ts` com testes. **Maria Clara**
- [ ] T007 Estender `src/infra/datasources/memoryBookDataSource.ts` para aceitar criação de
      anúncio, com testes. **Eric**
- [ ] T008 Atualizar `src/di/container.ts` para compor `IAuthUseCases` junto ao `IBookUseCases`.
      **Eric** (quem mexer por último avisa o outro para evitar conflito no mesmo arquivo)

## ViewModel e View

- [ ] T009 Criar `src/viewmodel/useAuthViewModel.ts` com testes (`renderHook`), cobrindo sucesso
      e erro de criar conta/entrar/sair. **Maria Clara**
- [ ] T010 Criar `src/viewmodel/useCreateListingViewModel.ts` com testes, cobrindo validação de
      preço por modalidade e exigência de sessão. **Eric**
- [ ] T011 Criar telas `src/view/auth/signIn.tsx` e `src/view/auth/signUp.tsx` com testes RNTL
      (estados de carregamento, erro e sucesso, rótulos de acessibilidade). **Maria Clara**
- [ ] T012 Criar tela `src/view/listings/createListing.tsx` com testes RNTL, incluindo o campo
      de preço condicional à modalidade. **Eric**
- [ ] T013 Atualizar `src/view/home.tsx` com indicador de sessão e botão "Anunciar" condicional,
      com testes RNTL. **Conjunta** (Maria Clara faz o indicador de sessão, Eric o botão
      "Anunciar" — combinar para não editar o arquivo ao mesmo tempo)
- [ ] T014 Criar rotas `src/app/entrar.tsx`, `src/app/criar-conta.tsx` (**Maria Clara**),
      `src/app/anunciar.tsx` (**Eric**).

## Integração e fechamento

- [ ] T015 Criar teste de integração cobrindo o fluxo completo (SC-001): criar conta → entrar →
      cadastrar anúncio de cada modalidade → ver na listagem. **Conjunta**
- [ ] T016 Atualizar `docs/arquitetura.md`, `docs/produto.md` (tabela "Escopo e situação") e
      `docs/estado.md` refletindo a jornada implementada. **Conjunta**
- [ ] T017 Executar `npm run validate` e registrar evidências em
      `specs/003-autenticacao-e-cadastro-de-anuncio/validacao.md`. **Conjunta**
