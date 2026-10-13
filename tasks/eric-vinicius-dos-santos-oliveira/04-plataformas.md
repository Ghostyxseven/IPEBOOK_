# Tarefa 4 — Plataformas suportadas inicialmente

Responsável: Eric Vinícius dos Santos Oliveira
Depende de: — (pode ser feita em paralelo às demais)
Bloqueia: validação e distribuição da primeira entrega

## Contexto

O Ipebook é um app Expo. Falta decidir quais plataformas precisam ser suportadas já na primeira
entrega aos usuários, o que define o que precisa ser validado (dispositivos, versões de SO) e
como será distribuído.

## Perguntas a responder

- A primeira entrega precisa suportar Android, iOS, ou ambos?
- Há versão mínima de SO a respeitar?
- Como a entrega será distribuída na primeira versão (ex.: build interna, loja, TestFlight/APK
  direto)?

## O que não fazer

- Não configurar pipelines de distribuição ainda — esta tarefa é de decisão, não de execução.

## Entregável

Atualização da tabela de decisões pendentes em [docs/produto.md](../../docs/produto.md) com a
plataforma-alvo definida e a justificativa (ex.: disponibilidade de dispositivos da equipe,
exigência da disciplina).

---

## Registro de execução

- Data: 2026-10-13
- Decisão: Plataformas suportadas inicialmente são **Android e Web**. iOS fica de fora da
  primeira entrega por enquanto.
- Justificativa: decisão do usuário solicitante (responsável pelo produto até outra definição).
  É consistente com o projeto grande da equipe (`/home/usermicael/Projetos/IpeBook`), cujo
  ADR 0040 já registra "iOS fora do mínimo desta entrega".
- Pendências: versão mínima de SO (Android) e forma de distribuição (build interna, loja,
  APK direto) ainda não definidas — continuam em aberto para quem assumir a configuração de
  build/distribuição.
