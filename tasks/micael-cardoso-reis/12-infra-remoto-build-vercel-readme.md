# Tarefa 12 (Micael) — [Projeto grande] Infra: remoto do GitHub, build Android, Vercel, README

Responsável: Micael Cardoso Reis
Repositório: `/home/usermicael/Projetos/IpeBook`
Depende de: —
Bloqueia: qualquer PR/issue no GitHub, publicação Android, publicação Web

## Contexto

Ver [00b-achados-projeto-ipebook-grande.md](../00b-achados-projeto-ipebook-grande.md), achado
crítico e item C.

1. **Remoto quebrado:** `origin` aponta para `Ghostyxseven/IpeBook`, que não existe mais no
   GitHub (só existe `Ghostyxseven/IPEBOOK_`, este projeto). Issues e PRs citados em commits
   (#10, #38, #39, #40, #54 etc.) não puderam ser consultados.
2. **ADR 0015** (build e distribuição Android): nenhum build gerado ainda.
3. **ADR 0025** (app completo na web): falta configurar o Vercel.
4. **README desatualizado:** a seção "Estado atual" ainda diz que "Negociação, encontro,
   denúncia e bloqueio ainda não implementados", mas `specs/027` e `specs/028` já mostram quase
   tudo implementado.

## O que fazer

1. Investigar o remoto: repositório renomeado, privado ou apagado? Corrigir
   `git remote set-url origin <url correta>` e confirmar que push/`gh issue list`/`gh pr list`
   voltam a funcionar. **Ação externa — confirmar com o restante da equipe antes de mudar o
   remoto**, já que afeta todos os clones.
2. Gerar o build Android via EAS (conforme `docs/build-android.md` do projeto grande) e marcar
   ADR 0015 como fechado quando o build existir.
3. Configurar o deploy no Vercel e marcar ADR 0025 como fechado.
4. Atualizar o `README.md` do projeto grande ("Estado atual") para refletir o que `specs/027` e
   `specs/028` já mostram como implementado.

## O que não fazer

- Não forçar um novo remoto sem confirmar com a equipe.
- Não declarar o README "atualizado" sem checar spec por spec o que já está de fato pronto.

## Entregável

Remoto do GitHub funcional (ou decisão registrada de usar outro), build Android gerado, Vercel
configurado, README com estado atual fiel às specs.

---

## Registro de execução

- Data:
- Remoto corrigido (novo valor, se mudou):
- Build Android gerado (link/versão):
- Vercel configurado (URL):
- README atualizado:
- Pendências:
