# Produto e requisitos do Ipebook

Revisão: 2026-10-13. Este documento descreve a base implementada e identifica decisões necessárias para especificar o produto final. Não é uma aprovação de funcionalidades futuras.

## Objetivo confirmado

O objetivo autorizado até aqui é iniciar um novo Ipebook com MVVM sofisticado, numa pasta independente, e documentar seu funcionamento. A entrega permite executar e evoluir uma aplicação Expo com uma listagem de livros de exemplo.

A frase da interface “Um lugar para descobrir sua próxima leitura” sugere descoberta de livros, mas não define se o produto será de troca/doação, organização de biblioteca ou leitura digital. Não adotar uma dessas modalidades como requisito sem definição do responsável pelo produto.

## Público e problema

O público comprovadamente atendido nesta etapa é quem desenvolve e valida a base do Ipebook. O leitor final pode visualizar a tela inicial, mas ainda não realiza uma jornada completa de descoberta ou gestão de livros.

O problema técnico desta etapa é separar responsabilidades e permitir evolução testável. O problema do usuário final, o público prioritário e a proposta de valor ainda precisam ser definidos. Não há pesquisa com usuários ou métricas de uso registradas.

## Escopo e situação

| Capacidade | Situação |
| --- | --- |
| Abrir a tela inicial | Implementada |
| Mostrar ausência de livros | Implementada e configuração padrão |
| Renderizar títulos e autores fornecidos pelo caso de uso | Implementada; dados de exemplo exercitados em testes |
| Tratar carregamento, erro e nova tentativa | Implementada |
| Cadastrar ou editar livros | Não implementada; escopo ainda não definido |
| Conta, autenticação e perfil | Não implementada; necessidade ainda não definida |
| Busca, filtros e detalhes | Não implementados; escopo ainda não definido |
| Troca, doação, empréstimo ou venda | Modalidade não definida |
| Leitura de arquivos digitais | Não implementada; necessidade ainda não definida |
| Banco e sincronização | Não implementados; tecnologia não decidida |

## Requisitos funcionais atuais

Os identificadores abaixo ajudam a navegar o comportamento existente; os critérios formais da fundação permanecem na [especificação 001](../specs/001-estrutura-mvvm/spec.md).

| ID | Requisito observável | Aceite |
| --- | --- | --- |
| RF01 | Abrir a listagem inicial sem exigir conta | A rota inicial renderiza Ipebook e a seção Livros |
| RF02 | Informar carregamento durante a consulta | `loading` começa verdadeiro e encerra em sucesso ou erro |
| RF03 | Representar catálogo vazio sem inventar conteúdo | A lista padrão tem zero livros e a View mostra a mensagem de ausência |
| RF04 | Mostrar título e autor dos livros recebidos | Cada item fornecido aparece com esses dois campos |
| RF05 | Exibir falha de forma compreensível | Erro de domínio usa mensagem segura; erro inesperado não expõe detalhes internos |
| RF06 | Permitir nova tentativa após falha | O botão dispara nova consulta e o sucesso limpa a mensagem de erro |
| RF07 | Manter o resultado da consulta mais recente | Uma resposta antiga não substitui os livros de consulta posterior |

Testes e limitações de cobertura estão em [qualidade.md](qualidade.md). Existir um requisito documentado não equivale a afirmar cobertura visual ou automatizada de todos os seus aspectos.

## Regras atuais e limites do domínio

- Não há autenticação ou controle de propriedade no fluxo atual.
- `Book` contém `id`, `title` e `author`. Esses campos não definem ainda regras de cadastro.
- A operação disponível é somente consulta; não há gravação nem persistência entre execuções.
- A base inicia vazia. Dados fictícios não devem ser apresentados como acervo real.
- Casos de uso dependem de contratos; detalhes da tecnologia de dados ficam na infraestrutura.

Não há regra definida para duplicidade, ISBN, limite de livros, moderação, disponibilidade, localização ou participação de menores. Esses pontos só devem virar requisitos se forem pertinentes à modalidade escolhida.

## Requisitos de qualidade

| Área | Compromisso atual | Verificação |
| --- | --- | --- |
| Manutenibilidade | Sete camadas, contratos injetáveis e TypeScript estrito | Checagem de imports, tipos e revisão |
| Confiabilidade | Erros e concorrência tratados na ViewModel | Testes de estado e resposta antiga |
| Interface | Textos em português; estados vazio, carregamento e erro explícitos | Revisão e inspeção dos estados afetados |
| Acessibilidade | Cabeçalhos e controles identificáveis; layout legível | Há propriedades de acessibilidade no código, sem certificação ou auditoria completa |
| Segurança | Não expor segredos e detalhes internos em mensagens inesperadas | Revisão e teste da mensagem genérica |
| Reprodutibilidade | Dependências registradas em lockfile e comandos locais definidos | Instalação e verificações conforme ambiente |

Não existem metas aprovadas de latência, disponibilidade, escala ou retenção. Evitar números arbitrários antes de definir o produto e o ambiente operacional.

## Decisões de produto pendentes

| Questão | Por que importa | Quando resolver |
| --- | --- | --- |
| Qual problema o Ipebook resolve e para quem? | Determina a jornada central | Antes de especificar a primeira funcionalidade de produto |
| Qual modalidade: troca/doação, biblioteca pessoal, leitura digital ou outra? | Muda entidades, permissões e integrações | Antes do modelo definitivo de livro |
| Quais ações compõem a primeira entrega útil? | Evita incluir funcionalidades sem prioridade | Antes do plano do primeiro incremento |
| Haverá conta? Quais dados serão necessários? | Define acesso, privacidade e recuperação | Antes de autenticação/persistência |
| De onde vêm os livros e como são disponibilizados? | Define cadastro, integridade e possíveis direitos de uso | Antes de importar conteúdo ou disponibilizar arquivos |

### Decisões já tomadas

| Questão | Decisão | Data |
| --- | --- | --- |
| Quais plataformas precisam ser suportadas inicialmente? | Android e Web. iOS fica fora da primeira entrega por enquanto (ver [tasks/eric-vinicius-dos-santos-oliveira/04-plataformas.md](../tasks/eric-vinicius-dos-santos-oliveira/04-plataformas.md)). | 2026-10-13 |

O responsável pelo produto é o usuário solicitante até outra definição. Nenhuma resposta foi presumida nesta revisão.

## Próxima especificação

Após definir as questões necessárias, escolher uma única jornada, descrever cenários de sucesso e erro em `specs/`, registrar ADRs pertinentes e elaborar plano/tarefas. A escolha de backend e autenticação deve decorrer dos requisitos; a documentação atual não autoriza implementação nem publicação dessas capacidades.
