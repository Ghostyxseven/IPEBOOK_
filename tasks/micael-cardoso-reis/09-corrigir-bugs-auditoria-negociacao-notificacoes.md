# Tarefa 9 (Micael) — [Projeto grande] Corrigir bugs da auditoria em Negociação e Notificações

Responsável: Micael Cardoso Reis
Repositório: `/home/usermicael/Projetos/IpeBook`
Depende de: —
Área: Negociação (assumida desde 02/10/2026) + Configurações/Notificações

## Contexto

Ver [00b-achados-projeto-ipebook-grande.md](../00b-achados-projeto-ipebook-grande.md), achado A.
A auditoria de 13/10/2026
(`/home/usermicael/Projetos/IpeBook/docs/auditoria-adb-2026-10-13.md`) encontrou dois bugs nas
suas áreas:

1. **Título de conclusão da negociação assume o papel errado do usuário**
   (`bookRequestFormat.ts`) — prioridade média.
2. **Switches de notificações com alvo de toque abaixo do mínimo de acessibilidade**
   (~47×27dp em vez de 48×48dp, `SettingsScreen.tsx`) — prioridade alta de acessibilidade.

## O que fazer

- Reproduzir os dois bugs antes de corrigir (ver a auditoria para o cenário exato de cada um).
- Corrigir `bookRequestFormat.ts` para identificar corretamente qual papel (quem pediu, quem
  ofereceu) o título de conclusão deve exibir.
- Corrigir o alvo de toque dos switches em `SettingsScreen.tsx` para 48×48dp mínimo.
- Adicionar teste de regressão para cada correção.

## O que não fazer

- Não aproveitar para refatorar a tela de configurações além do necessário.

## Entregável

Os dois bugs corrigidos com teste de regressão, PR aberto no repositório
`/home/usermicael/Projetos/IpeBook` (uma vez que o remoto do GitHub esteja restaurado — ver
Tarefa 12).

---

## Registro de execução

- Data:
- O que foi corrigido:
- Testes adicionados:
- Pendências:
