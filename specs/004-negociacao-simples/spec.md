# Especificação: negociação simples (solicitar e responder)

Data: 2026-10-13. Branch: `develop`. Tipo: 4º e último item do escopo do MVP decidido em
[docs/produto.md](../../docs/produto.md) (Tarefa 3): "solicitar e responder negociação simples".
Depende de [specs/003-autenticacao-e-cadastro-de-anuncio/](../003-autenticacao-e-cadastro-de-anuncio/)
estar implementada (precisa de sessão autenticada e de anúncios cadastrados).

## Objetivo e usuário

Permitir que uma pessoa interessada em um anúncio solicite a negociação (venda, troca ou
doação), e que quem anunciou veja o pedido e responda aceitando ou recusando — sem logística de
encontro, conversa ou reagendamento, que ficam fora do MVP.

## Escopo

- Solicitar negociação de um anúncio: a pessoa interessada envia um pedido simples (sem
  mensagem livre nem proposta de troca por outro livro).
- Visualizar pedidos recebidos: quem anunciou vê a lista de pedidos para os seus anúncios.
- Responder: quem anunciou aceita ou recusa um pedido pendente.
- Estado do anúncio: ao aceitar um pedido, o anúncio muda para "reservado" e os demais pedidos
  pendentes para o mesmo anúncio são recusados automaticamente.
- Pessoa que pediu vê o status do seu próprio pedido (pendente, aceito, recusado).

### Fora do escopo

- Logística de encontro (local, data, hora), reagendamento, não comparecimento.
- Conversa/mensagens entre as partes.
- Contraproposta (oferecer outro livro em troca).
- Cancelar um pedido já aceito, concluir a negociação como "entregue".
- Denúncia, bloqueio, segurança (Trust & Safety) — fora do MVP decidido.
- Notificações (push ou in-app) sobre o pedido — fica para especificação futura.

## Histórias e cenários de aceite

### US1 — Solicitar negociação (P1)

Como pessoa autenticada interessada em um anúncio de outra pessoa, quero solicitar a
negociação, para manifestar interesse em adquirir o livro.

- Dado um anúncio de outra pessoa disponível, quando solicito a negociação, então um pedido é
  criado com status "pendente", visível para mim e para quem anunciou.
- Dado que o anúncio é meu, quando tento solicitar negociação dele, então a ação é bloqueada —
  não posso negociar com você mesmo.
- Dado um anúncio já reservado (com um pedido aceito), quando tento solicitar negociação dele,
  então a ação é bloqueada com mensagem informando que não está mais disponível.
- Dado que já tenho um pedido pendente para o mesmo anúncio, quando tento solicitar de novo,
  então a ação é bloqueada — não duplicar pedidos.

### US2 — Ver pedidos recebidos e responder (P1)

Como pessoa que anunciou um livro, quero ver os pedidos recebidos e responder a cada um, para
decidir com quem negociar.

- Dado que tenho pedidos pendentes para os meus anúncios, quando abro a lista de pedidos
  recebidos, então vejo cada um com o anúncio relacionado e quem pediu.
- Dado um pedido pendente, quando aceito, então o pedido muda para "aceito", o anúncio muda
  para "reservado", e os demais pedidos pendentes para o mesmo anúncio mudam para "recusado"
  automaticamente.
- Dado um pedido pendente, quando recuso, então o pedido muda para "recusado" e o anúncio
  continua disponível.
- Dado um pedido já respondido (aceito ou recusado), quando tento responder de novo, então a
  ação é bloqueada — uma resposta não pode ser desfeita nesta especificação.

### US3 — Acompanhar meu pedido (P2)

Como pessoa que solicitou uma negociação, quero ver o status do meu pedido, para saber se fui
aceito ou recusado.

- Dado um pedido que solicitei, quando abro minha lista de pedidos enviados, então vejo o
  status atual (pendente, aceito ou recusado) de cada um.

## Requisitos

- FR-001: o sistema deve impedir que o dono de um anúncio solicite negociação do próprio
  anúncio.
- FR-002: o sistema deve impedir pedidos duplicados da mesma pessoa para o mesmo anúncio
  enquanto houver um pedido pendente dela.
- FR-003: o sistema deve impedir solicitar negociação de um anúncio já reservado.
- FR-004: ao aceitar um pedido, o sistema deve recusar automaticamente os demais pedidos
  pendentes do mesmo anúncio e marcar o anúncio como reservado.
- FR-005: o sistema deve impedir responder (aceitar/recusar) um pedido que não está mais
  pendente.
- FR-006: todo pedido deve registrar o anúncio relacionado, quem pediu e o status atual
  (pendente, aceito, recusado).

## Critérios de sucesso

- SC-001: uma pessoa consegue, em uma única sessão, solicitar negociação de um anúncio de
  outra pessoa, e quem anunciou consegue ver e responder a esse pedido.
- SC-002: ao aceitar um pedido com outros pedidos pendentes concorrentes para o mesmo anúncio,
  todos os demais são recusados automaticamente e o anúncio fica reservado — verificado por
  teste automatizado.
- SC-003: `npm run validate` continua passando, sem regressão nos requisitos já documentados
  das specs 001, 002 e 003.

## Casos de erro e suposições

- Suposição: como a persistência é em memória (igual às specs anteriores), os pedidos somem ao
  encerrar a execução — aceitável para esta etapa.
- Suposição: não há limite de quantos anúncios diferentes uma pessoa pode ter pedidos pendentes
  simultâneos; o limite é só "um pedido pendente por pessoa por anúncio" (FR-002).
- Risco: esta especificação assume que a Tarefa 3 (autenticação, spec 003) já existe e fornece
  `sessionUserId` — não implementar nada de autenticação aqui, só reaproveitar.
- Não presumir estado "concluído"/"entregue" do anúncio — essa transição fica fora do MVP e
  será de uma especificação futura, quando a logística de encontro for decidida.
