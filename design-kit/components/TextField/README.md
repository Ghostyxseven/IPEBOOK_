# TextField

Campo contornado com rótulo sempre visível, mensagem de ajuda e erro.

- Estados: Normal (borda `outline`), Foco (borda `primary` 2 px e rótulo `primary`), Erro (borda e rótulo `error`, mensagem com ícone), Desabilitado (38%).
- A mensagem de erro diz como corrigir ("Use um e-mail como nome@exemplo.com"), aparece embaixo e é ligada ao campo por `aria-describedby`.
- Placeholder nunca substitui o rótulo.
- O consumidor fornece `label`, o valor e a validação.
