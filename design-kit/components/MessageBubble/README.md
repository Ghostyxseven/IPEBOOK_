# MessageBubble

Bolha da conversa com estado de envio.

- Recebida: `surface-container-high` à esquerda. Enviada: `primary-container` à direita. Canto de saída em `radius-xs`.
- Estados da enviada: entregue (check), lida (dois checks em `primary`), falha (ícone `error` e "Tentar de novo" na própria bolha, sem tela de erro).
- Largura máxima de 75% da tela. O leitor de tela lê "Você, 14:32, lida: …".
