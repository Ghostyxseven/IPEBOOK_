# Button

Botão em pílula para ações; uma ação Preenchida por tela.

- **filled** (Preenchido): a ação principal da tela, uma só ("Enviar proposta", "Publicar anúncio").
- **outlined** (Contornado): alternativa à principal ("Salvar rascunho") e ação de estado vazio.
- **text** (Texto): ações discretas e as de diálogo ("Cancelar").
- **danger** (Perigo): ação destrutiva ("Excluir anúncio"), sempre seguida de Dialog destrutivo.
- Estados no Figma: Padrão, Pressionado (camada de 12% no Preenchido, 10% nos demais), Foco (anel de 3 px em `focus-ring`), Desabilitado (`on-surface` 12% no fundo e 38% no rótulo).
- Altura 52 px (Texto e Perigo 48 px); área de toque mínima 48 px. Rótulo em verbo no infinitivo, sem caixa-alta, sem ponto final.
- O consumidor fornece o rótulo como children e o `onClick`. Não desabilite para esconder erro: deixe clicar e mostre o erro no campo.
