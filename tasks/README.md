# Tarefas da equipe — Ipebook

Esta pasta organiza o trabalho pendente da equipe em **dois repositórios**:

- **Tarefas 1 a 8** — este projeto (`IPEBOOK_`, fundação pequena): decisões de produto e
  pendências técnicas locais.
- **Tarefas 9 a 22** — o projeto grande da equipe, em `/home/usermicael/Projetos/IpeBook`
  (42 specs, 41 ADRs), organizado pela mesma divisão de telas/features que a equipe já usa lá.
- **Tarefas 23 a 25** — implementação das specs do MVP deste projeto (`IPEBOOK_`):
  [specs/003-autenticacao-e-cadastro-de-anuncio/](../specs/003-autenticacao-e-cadastro-de-anuncio/)
  e [specs/004-negociacao-simples/](../specs/004-negociacao-simples/), que fecham os 4 itens do
  escopo do MVP decidido na Tarefa 3.

## Leitura obrigatória antes de qualquer tarefa

- [00-achados-da-analise.md](00-achados-da-analise.md) — achados do `IPEBOOK_` (tarefas 1–8).
- [00b-achados-projeto-ipebook-grande.md](00b-achados-projeto-ipebook-grande.md) — achados do
  projeto grande (tarefas 9–22), incluindo um achado crítico: o remoto do GitHub de lá está
  quebrado.

Cada integrante tem sua própria subpasta, nomeada conforme [docs/equipe.md](../docs/equipe.md),
com as tarefas de ambos os projetos juntas.

Todas as tarefas ainda em aberto (5, 6, 8 e 9 a 22, mais o checklist compartilhado) também têm
uma issue correspondente no GitHub (repositório `Ghostyxseven/IPEBOOK_`, já que o remoto do
projeto grande está quebrado — ver achado crítico em
[00b-achados-projeto-ipebook-grande.md](00b-achados-projeto-ipebook-grande.md)), com labels por
integrante (`pessoa:micael`, `pessoa:maria-clara`, `pessoa:antonio`, `pessoa:eric`) e por origem
(`projeto-grande`). As tarefas 1, 2, 3, 4 e 7 não têm issue — já estão decididas, não precisam
de acompanhamento de execução.

**Atualização de 2026-10-13:** as tarefas 1, 2, 3, 4 e 7 (decisões de produto do `IPEBOOK_`) já
têm decisão registrada em "Registro de execução", trazida do que a equipe já validou no projeto
irmão (`/home/usermicael/Projetos/IpeBook`) — ver `docs/produto.md`, seção "Decisões já
tomadas". Não é preciso reunião para respondê-las de novo; só revisar se alguém discordar. Isso
libera a Tarefa 8 (especificar a primeira jornada funcional) para começar, e a equipe pode focar
em código a partir daí.

## Como usar

1. Ler os dois arquivos de achados primeiro.
2. Cada integrante abre a sua subpasta; tarefas com "[Projeto grande]" no título usam caminhos
   absolutos para `/home/usermicael/Projetos/IpeBook/...` — confira que está no repositório
   certo antes de mexer.
3. Lê o contexto, o que fazer e o entregável dentro do próprio arquivo.
4. Ao concluir, preenche a seção **"Registro de execução"** no final do arquivo da tarefa.
5. Decisões que mudam arquitetura devem virar ADR no repositório correspondente.
6. [00c-checklist-apresentacao-final-projeto-grande.md](00c-checklist-apresentacao-final-projeto-grande.md)
   é compartilhado, não é tarefa individual.

## Ordem de dependência — tarefas 1 a 8 (IPEBOOK_)

```
Tarefa 1 (problema e público) — Micael
      │
      ▼
Tarefa 2 (modalidade e origem dos livros) — Maria Clara
      │
      ├──▶ Tarefa 7 (reconciliar documentação de modalidade) — Maria Clara
      │
      ▼
Tarefa 3 (escopo do MVP e conta/autenticação) — Antonio
      │
      ▼
Tarefa 8 (especificar primeira jornada funcional) — Antonio

Tarefa 4 (plataformas) — Eric            ─┐ podem ser feitas em paralelo,
Tarefa 5 (integrar componentes visuais) — Eric ─┘ não dependem das demais
Tarefa 6 (resolver ADR 0019 ausente) — Micael  ─ pode começar já
```

## Ordem de dependência — tarefas 23 a 25 (implementação do MVP neste repositório)

```
Tarefa 23 (implementar autenticação, spec 003) — Maria Clara ─┐ podem ser feitas em paralelo,
Tarefa 24 (implementar cadastro de anúncio, spec 003) — Eric ─┘ combinar antes de mexer em
                                                                src/view/home.tsx e
                                                                src/di/container.ts
      │
      ▼
Tarefa 25 (implementar negociação simples, spec 004) — Antonio
```

## Ordem de dependência — tarefas 9 a 22 (projeto grande)

```
Tarefa 9, 10 (bugs negociação/notificações, catálogo+validação) — Micael — podem começar já
Tarefa 11 (acordar ADR 0011) — Micael, com Antonio e Eric
Tarefa 12 (infra: remoto, build, Vercel, README) — Micael — pode começar já

Tarefa 13 (Google/iOS autenticação) — Maria Clara — pode começar já
Tarefa 14 (validar autenticação em aparelho) — Maria Clara

Tarefa 16 (corrigir acesso moderação) — Antonio, com Micael
Tarefa 17 (validar segurança em aparelho) — Antonio

Tarefa 19 (corrigir métrica reputação) — Eric — pode começar já
Tarefa 20 (completar spec 031 perfil completo) — Eric
Tarefa 21 (validar anúncio/perfil em aparelho) — Eric, depende da 20

Tarefas 15, 18, 22 (web responsiva, cada um sua parte) — podem ser feitas em paralelo
```

## Tarefas por integrante

### No `IPEBOOK_` (este projeto)

| Integrante | Pasta | Tarefas | Depende de |
| --- | --- | --- | --- |
| Micael Cardoso Reis | [micael-cardoso-reis/](micael-cardoso-reis/) | [01 — Problema e público-alvo](micael-cardoso-reis/01-problema-e-publico.md) · [06 — Resolver referência ADR 0019](micael-cardoso-reis/06-resolver-referencia-adr-0019.md) ([#2](https://github.com/Ghostyxseven/IPEBOOK_/issues/2)) · [26 — Resolver pendências do design-kit](micael-cardoso-reis/26-resolver-pendencias-design-kit.md) | — |
| Maria Clara Almeida Martins | [maria-clara-almeida-martins/](maria-clara-almeida-martins/) | [02 — Modalidade e origem dos livros](maria-clara-almeida-martins/02-modalidade-e-origem-dos-livros.md) · [07 — Reconciliar documentação de modalidade](maria-clara-almeida-martins/07-reconciliar-documentacao-de-modalidade.md) | Tarefa 1 |
| Antonio Carlos Gomes | [antonio-carlos-gomes/](antonio-carlos-gomes/) | [03 — Escopo do MVP e conta/autenticação](antonio-carlos-gomes/03-escopo-mvp-e-conta.md) · [08 — Especificar primeira jornada funcional](antonio-carlos-gomes/08-especificar-primeira-jornada-funcional.md) ([#3](https://github.com/Ghostyxseven/IPEBOOK_/issues/3)) | Tarefas 1, 2, 7 |
| Eric Vinícius dos Santos Oliveira | [eric-vinicius-dos-santos-oliveira/](eric-vinicius-dos-santos-oliveira/) | [04 — Plataformas suportadas inicialmente](eric-vinicius-dos-santos-oliveira/04-plataformas.md) · [05 — Integrar componentes visuais na Home](eric-vinicius-dos-santos-oliveira/05-integrar-componentes-visuais-na-home.md) ([#1](https://github.com/Ghostyxseven/IPEBOOK_/issues/1)) | — |

### Implementação do MVP neste repositório

| Integrante | Tarefa | Spec |
| --- | --- | --- |
| Maria Clara Almeida Martins | [23 ([#19](https://github.com/Ghostyxseven/IPEBOOK_/issues/19)) — Implementar autenticação](maria-clara-almeida-martins/23-implementar-autenticacao-spec-003.md) | [specs/003](../specs/003-autenticacao-e-cadastro-de-anuncio/) |
| Eric Vinícius dos Santos Oliveira | [24 ([#20](https://github.com/Ghostyxseven/IPEBOOK_/issues/20)) — Implementar cadastro de anúncio](eric-vinicius-dos-santos-oliveira/24-implementar-cadastro-anuncio-spec-003.md) | [specs/003](../specs/003-autenticacao-e-cadastro-de-anuncio/) |
| Antonio Carlos Gomes | [25 ([#21](https://github.com/Ghostyxseven/IPEBOOK_/issues/21)) — Implementar negociação simples](antonio-carlos-gomes/25-implementar-negociacao-spec-004.md) | [specs/004](../specs/004-negociacao-simples/) |

### No projeto grande (`/home/usermicael/Projetos/IpeBook`)

| Integrante | Tarefas | Área |
| --- | --- | --- |
| Micael Cardoso Reis | [09 ([#4](https://github.com/Ghostyxseven/IPEBOOK_/issues/4)) — Corrigir bugs da auditoria](micael-cardoso-reis/09-corrigir-bugs-auditoria-negociacao-notificacoes.md) · [10 ([#5](https://github.com/Ghostyxseven/IPEBOOK_/issues/5)) — Finalizar catálogo e validar em aparelho](micael-cardoso-reis/10-finalizar-catalogo-e-validar-aparelho-real.md) · [11 ([#6](https://github.com/Ghostyxseven/IPEBOOK_/issues/6)) — Acordar ADR 0011](micael-cardoso-reis/11-acordar-adr-0011-notificacoes.md) · [12 ([#7](https://github.com/Ghostyxseven/IPEBOOK_/issues/7)) — Infra (remoto, build, Vercel, README)](micael-cardoso-reis/12-infra-remoto-build-vercel-readme.md) | Catálogo, Negociação, Notificações, Infra |
| Maria Clara Almeida Martins | [13 ([#8](https://github.com/Ghostyxseven/IPEBOOK_/issues/8)) — Fechar Google/iOS na autenticação](maria-clara-almeida-martins/13-fechar-pendencias-google-ios-autenticacao.md) · [14 ([#9](https://github.com/Ghostyxseven/IPEBOOK_/issues/9)) — Validar autenticação em aparelho](maria-clara-almeida-martins/14-validar-autenticacao-onboarding-aparelho-real.md) · [15 ([#10](https://github.com/Ghostyxseven/IPEBOOK_/issues/10)) — Web responsiva: sua parte](maria-clara-almeida-martins/15-web-responsiva-sua-parte.md) | Autenticação/Onboarding |
| Antonio Carlos Gomes | [16 ([#11](https://github.com/Ghostyxseven/IPEBOOK_/issues/11)) — Corrigir acesso ao menu de moderação](antonio-carlos-gomes/16-corrigir-acesso-menu-moderacao.md) · [17 ([#12](https://github.com/Ghostyxseven/IPEBOOK_/issues/12)) — Validar segurança em aparelho](antonio-carlos-gomes/17-validar-seguranca-aparelho-real.md) · [18 ([#13](https://github.com/Ghostyxseven/IPEBOOK_/issues/13)) — Web responsiva: sua parte](antonio-carlos-gomes/18-web-responsiva-sua-parte.md) | Segurança/Moderação |
| Eric Vinícius dos Santos Oliveira | [19 ([#14](https://github.com/Ghostyxseven/IPEBOOK_/issues/14)) — Corrigir métrica de reputação](eric-vinicius-dos-santos-oliveira/19-corrigir-metrica-reputacao.md) · [20 ([#15](https://github.com/Ghostyxseven/IPEBOOK_/issues/15)) — Completar spec 031 (perfil completo)](eric-vinicius-dos-santos-oliveira/20-completar-perfil-completo-spec-031.md) · [21 ([#16](https://github.com/Ghostyxseven/IPEBOOK_/issues/16)) — Validar anúncio/perfil em aparelho](eric-vinicius-dos-santos-oliveira/21-validar-anuncio-perfil-aparelho-real.md) · [22 ([#17](https://github.com/Ghostyxseven/IPEBOOK_/issues/17)) — Web responsiva: sua parte](eric-vinicius-dos-santos-oliveira/22-web-responsiva-sua-parte.md) | Anúncios, Perfil |

## Compartilhado

- [00c-checklist-apresentacao-final-projeto-grande.md](00c-checklist-apresentacao-final-projeto-grande.md) ([#18](https://github.com/Ghostyxseven/IPEBOOK_/issues/18))
