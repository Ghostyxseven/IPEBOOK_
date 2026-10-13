# Qualidade e validação

## Comandos e alcance

Executar na raiz:

```bash
npm run validate
npm run build:web
```

O primeiro comando encadeia `typecheck`, `check:architecture` e `test` com `&&`: falha de uma etapa impede as seguintes. Vitest usa [vitest.config.mts](../vitest.config.mts) e procura `tests/**/*.test.ts` e `tests/**/*.test.tsx`. Não há lint, auditoria de acessibilidade automatizada ou teste nativo incluído no agregador atual.

O segundo comando exporta a web. Build aprovado comprova empacotamento, não o funcionamento de todos os fluxos em navegador ou celular.

## Rastreabilidade da fundação

| Critério da especificação 001 | Evidência existente | Limite |
| --- | --- | --- |
| CA01 — camadas e dependências | Verificador de arquitetura e revisão do código | Não comprova responsabilidades apenas pelo nome de pasta |
| CA02 — vazio, carregamento, erro e nova tentativa | [Testes da ViewModel](../tests/homeViewModel.test.tsx); inspeção web inicial | Inspeção visual realizada no estado vazio |
| CA03 — datasource injetável | [Testes do caso de uso](../tests/bookUseCases.test.ts) | Não há integração real de rede ou banco |
| CA04 — tipos, testes e exportação | `validate`, `build:web` e workflow configurado | CI remota e reinstalação limpa não foram verificadas nesta revisão documental |
| CA05 — documentação e Git | Constituição, ADRs e histórico | O requisito histórico “sem remoto” descrevia a entrega inicial; já houve envio posterior |

A suíte possui nove testes: quatro de catálogo/datasource e cinco da ViewModel. Cobre lista vazia e preenchida, erro de domínio, isolamento de cópias, carregamento, repetição após erro, mensagem genérica e descarte de resposta antiga. Não há teste específico de desmontagem, de renderização da View ou de autenticação.

## Conferência manual

1. Executar `npm run web` ou servir `dist/` conforme o [guia de desenvolvimento](desenvolvimento.md).
2. Abrir a rota inicial: deve exibir “Ipebook”, “Livros” e “Ainda não há livros por aqui.” após carregar.
3. Conferir leitura e ausência de rolagem horizontal em larguras de 390 e 1280 pixels.
4. Conferir erros no console e legibilidade com ampliação do texto.
5. Para futuros fluxos com interação, conferir teclado, foco, rótulos acessíveis e estados de sucesso, erro, vazio e carregamento.

Não usar Playwright. A inspeção anterior usou Chromium via CDP. Para experimentar erro ou atraso, usar dependências controladas nos testes; não introduzir falhas em produção nem credenciais reais em fixtures.

## Integração contínua

[validacao.yml](../.github/workflows/validacao.yml) roda em push para `develop` e PRs destinados a `develop` ou `main`. No Ubuntu com Node 24, executa `npm ci`, `npm run validate` e `npm run build:web`. A configuração não comprova uma execução remota bem-sucedida; conferir o resultado no GitHub quando necessário.

## Revisão e registro

Revisar contra requisitos, procurando dependências indevidas, mensagens com dados técnicos, respostas assíncronas antigas, estados inacessíveis e mudanças fora do escopo. Não enfraquecer testes para obter aprovação. Documentar comando, resultado, data e ambiente, distinguindo teste automatizado, inspeção manual e revisão independente.

O [registro original](../specs/001-estrutura-mvvm/validacao.md) preserva evidências da criação. Resultados desta revisão documental estão em [estado.md](estado.md). Não executar testes ou builds repetidos apenas por alterações de texto; validar links, comandos referenciados e consistência com o código.
