# Achados da análise do projeto (2026-10-13)

Leitura obrigatória para todos antes de iniciar qualquer tarefa desta pasta. Resume o
levantamento feito em toda a árvore do projeto (`src/`, `docs/`, `specs/`, `docs/adr/`) para
embasar a divisão de tarefas abaixo.

## O que já está feito e validado

- Arquitetura MVVM de sete camadas (`app`, `view`, `viewmodel`, `usecase`, `model`, `infra`,
  `di`) implementada e sem violações pelo verificador (`scripts/verificar-arquitetura.mjs`).
  Ver [docs/arquitetura.md](../docs/arquitetura.md).
- Pirâmide de testes aprovada: 31 testes em 6 arquivos, cobertura > 98% statements. Três fluxos
  E2E declarativos no Maestro (`.maestro/`).
- Fundamentação formal ISO/IEC 25010 documentada em [docs/qualidade.md](../docs/qualidade.md).
- Design system formal documentado em [docs/design-system.md](../docs/design-system.md): paleta
  de cores, tipografia, espaçamento, badges de modalidade (Venda/Troca/Doação/Reservado/
  Concluído), regras de acessibilidade (WCAG 2.1/2.2 AA, touch target 48×48dp). Contratos em
  `design-tokens.json` e `src/view/tokens.ts`.
- Única tela funcional hoje: listagem de livros (`src/view/home.tsx`) com estados de
  carregamento, vazio, erro e nova tentativa. Sem cadastro, busca, conta ou persistência real
  (dados em memória, somem ao encerrar a execução).

## Problemas encontrados (não corrigidos — viram tarefa)

1. **Contradição entre documentos sobre a modalidade do produto.**
   `docs/produto.md` lista "Qual modalidade: troca/doação, biblioteca pessoal, leitura digital
   ou outra?" como decisão **pendente**. Mas `docs/design-system.md` já descreve o Ipebook como
   "aplicativo móvel comunitário de venda, troca e doação de livros em Piripiri (PI)", com
   badges de modalidade (Venda, Troca, Doação, Reservado, Concluído) já desenhados no Figma e
   documentados. Os dois documentos não podem estar certos ao mesmo tempo — ver Tarefa 07.

2. **Componentes visuais importados mas não usados.**
   `src/view/components/AppIcon.tsx`, `IconBadge.tsx` e `Icon.tsx` existem desde o último
   commit, mas nenhuma tela (`src/view/home.tsx` ou outra) os referencia. Ver Tarefa 05.

3. **Link quebrado para ADR inexistente.**
   `docs/design-system.md` linha 81 referencia `ADR 0019` (serifa da marca), mas `docs/adr/`
   só tem os ADRs 0001 a 0004. Ou o ADR precisa ser criado, ou a referência está com número
   errado e precisa ser corrigida. Ver Tarefa 06.

## Como isso se encaixa nas tarefas já existentes

As tarefas 01 a 04 (decisões de produto: problema/público, modalidade/origem, escopo do MVP/
conta, plataformas) continuam válidas e devem ser feitas primeiro — elas são pré-requisito para
as tarefas 05 a 08 abaixo, que tratam de execução e correção com base no que foi encontrado.
