# Tarefa 26 (Micael) — Resolver pendências técnicas do design-kit

Responsável: Micael Cardoso Reis
Depende de: —
Bloqueia: implementação das telas nas Tarefas 23 (Maria Clara) e 24 (Eric)

## Contexto

Ao trazer `design-kit/` para o repositório, ficaram pendentes 3 itens técnicos (dark mode e a
linguagem visual por plataforma já foram decididos — ver
[ADR 0008](../../docs/adr/0008-sem-dark-mode-android-md3-ios-liquid-glass.md)):

1. **Dois arquivos de tokens** (`design-tokens.json` na raiz e `design-kit/tokens.json`) sem
   decisão de qual usar — ver `design-kit/USO.md`.
2. **Carregamento de fontes**: `design-kit/components/bundle.css` carrega Source Serif 4 e
   Roboto Flex via `@import url(...)` do Google Fonts, que não funciona em React Native —
   ninguém decidiu como carregar essas fontes no Expo.
3. **Contraste não verificado**: o `README.md` do kit afirma contraste 4.5:1/3:1 em várias
   combinações, mas ninguém mediu os valores reais que o app vai usar (agora só tema claro,
   depois do ADR 0008).

## O que fazer

1. Decidir entre `design-tokens.json` (já em uso, `src/view/tokens.ts`) e `design-kit/tokens.json`
   (mais completo: modalidade, capas ilustrativas) — provavelmente migrar para o segundo,
   removendo os valores de tema escuro (fora de escopo pelo ADR 0008), e atualizar
   `src/view/tokens.ts` para consumir o resultado. Registrar a escolha num ADR novo.
2. Escolher e configurar o mecanismo de carregamento de fonte no Expo (`expo-font` com arquivo
   local, ou `@expo-google-fonts/source-serif-4` e `@expo-google-fonts/roboto-flex`, se
   existirem como pacotes) para a serifa da marca e a interface Android/Web.
3. Medir o contraste real das combinações de cor que o app vai usar (ex. com uma ferramenta de
   contraste) e corrigir no README do kit ou nos tokens qualquer valor que não bata com o que
   está documentado.

## O que não fazer

- Não implementar dark mode nem toggle de tema — fora de escopo (ADR 0008).
- Não implementar nada de iOS/Liquid Glass agora — fora do escopo de plataformas (Tarefa 4).

## Entregável

Token único em uso por `src/view/tokens.ts`, fontes carregando corretamente no Expo, e
contraste real verificado — para que Maria Clara e Eric não precisem decidir isso no meio da
implementação das telas.

---

## Registro de execução

- Data:
- Decisão de tokens:
- Mecanismo de fonte escolhido:
- Contraste verificado (resultado):
- Pendências:
