# Tarefas: Autenticação e Cadastro de Anúncio

- [ ] T001 Criar `src/model/entities/user.ts` e estender `src/model/entities/book.ts` com
      `modality` e `price` opcional (FR-004, FR-005).
- [ ] T002 Criar `src/model/validators/authValidator.ts` (e-mail e senha) e estender
      `src/model/validators/bookValidator.ts` com a regra condicional de preço por modalidade,
      com testes unitários em `tests/unit/`.
- [ ] T003 Criar `src/model/datasources/iAuthDataSource.ts`.
- [ ] T004 Criar `src/usecase/authUseCases.ts` (`IAuthUseCases`: signUp, signIn, signOut,
      getSession) com testes unitários cobrindo duplicidade de e-mail (FR-002) e credenciais
      inválidas.
- [ ] T005 Estender `src/usecase/bookUseCases.ts` com `createListing`, exigindo sessão (FR-006),
      com testes unitários.
- [ ] T006 Criar `src/infra/datasources/memoryAuthDataSource.ts` com testes.
- [ ] T007 Estender `src/infra/datasources/memoryBookDataSource.ts` para aceitar criação de
      anúncio, com testes.
- [ ] T008 Atualizar `src/di/container.ts` para compor `IAuthUseCases` junto ao `IBookUseCases`.
- [ ] T009 Criar `src/viewmodel/useAuthViewModel.ts` com testes (`renderHook`), cobrindo sucesso
      e erro de criar conta/entrar/sair.
- [ ] T010 Criar `src/viewmodel/useCreateListingViewModel.ts` com testes, cobrindo validação de
      preço por modalidade e exigência de sessão.
- [ ] T011 Criar telas `src/view/auth/signIn.tsx` e `src/view/auth/signUp.tsx` com testes RNTL
      (estados de carregamento, erro e sucesso, rótulos de acessibilidade).
- [ ] T012 Criar tela `src/view/listings/createListing.tsx` com testes RNTL, incluindo o campo
      de preço condicional à modalidade.
- [ ] T013 Atualizar `src/view/home.tsx` com indicador de sessão e botão "Anunciar" condicional,
      com testes RNTL.
- [ ] T014 Criar rotas `src/app/entrar.tsx`, `src/app/criar-conta.tsx`, `src/app/anunciar.tsx`.
- [ ] T015 Criar teste de integração cobrindo o fluxo completo (SC-001): criar conta → entrar →
      cadastrar anúncio de cada modalidade → ver na listagem.
- [ ] T016 Atualizar `docs/arquitetura.md`, `docs/produto.md` (tabela "Escopo e situação") e
      `docs/estado.md` refletindo a jornada implementada.
- [ ] T017 Executar `npm run validate` e registrar evidências em
      `specs/003-autenticacao-e-cadastro-de-anuncio/validacao.md`.
