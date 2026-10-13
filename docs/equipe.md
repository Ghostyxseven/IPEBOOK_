# Identificação da Equipe e Contexto Acadêmico

Este projeto integra as atividades avaliativas do curso de Tecnologia em Análise e Desenvolvimento de Sistemas do Instituto Federal do Piauí (IFPI) - Campus Piripiri.

---

## 🏫 Dados Acadêmicos

* **Instituição:** Instituto Federal de Educação, Ciência e Tecnologia do Piauí (IFPI) — Campus Piripiri
* **Curso:** Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)
* **Disciplina:** Engenharia de Software III (em conjunto com Programação para Dispositivos Móveis)
* **Professor(a) Responsável:** Prof. Jeferson Soares
* **Projeto:** Ipebook — Aplicativo Móvel de Descoberta e Gestão de Livros
* **Semestre Letivo / Ano:** 2026

---

## 👥 Integrantes da Equipe

| Nome Completo | Matrícula / GitHub | Papel Principal na Equipe |
| :--- | :--- | :--- |
| **Micael Cardoso Reis** | [@Ghostyxseven](https://github.com/Ghostyxseven) | Arquitetura de Software (MVVM), Estratégia de Testes Automatizados e Implementação |
| *(Adicionar colega de equipe se houver)* | *(@usuario)* | *(Ex: Testes de Interface / E2E / Documentação)* |
| *(Adicionar colega de equipe se houver)* | *(@usuario)* | *(Ex: Integração / Qualidade ISO 25010)* |

*(Nota: Se o trabalho for individual ou em dupla/trio, basta preencher ou manter os integrantes correspondentes).*

---

## 🎯 Matriz de Responsabilidades do Trabalho Final

Para atender aos critérios de avaliação da disciplina, as responsabilidades foram distribuídas entre os seguintes eixos de trabalho:

1. **Arquitetura e Domínio (MVVM em 7 Camadas):**
   * Estruturação de `app/`, `view/`, `viewmodel/`, `usecase/`, `model/`, `infra/` e `di/`.
   * Isolamento de dependências através do container e contratos `iBookDataSource` e `iBookUseCases`.
   * Criação do validador de domínio puro (`src/model/validators/bookValidator.ts`).

2. **Estratégia de Testes Automatizados e Cobertura:**
   * **Testes Unitários:** Validação de regras de negócio, limites de caracteres e bordas (`tests/unit/`).
   * **Testes de Hooks:** Teste do ciclo de vida assíncrono e concorrência do `useHomeViewModel` (`tests/hooks/`).
   * **Testes de Componentes com RNTL:** Verificação semântica de interface e acessibilidade (`tests/components/`).
   * **Componentes com Mocks:** Simulação determinística de falhas e recuperação (`tests/components-mocked/`).
   * **Testes de Integração:** Integração real entre View, ViewModel e Casos de Uso (`tests/integration/`).
   * **Geração de Cobertura:** Configuração e alcance de métricas acima de 95% com `@vitest/coverage-v8`.

3. **Automação End-to-End (E2E) com Maestro:**
   * Elaboração dos 3 fluxos críticos mobile declarativos em `.maestro/`.
   * Roteiro de gravação e execução em emulador Android e simulador iOS.

4. **Qualidade de Software (ISO/IEC 25010) e Documentação:**
   * Mapeamento teórico e prático das três características da norma: *Adequação Funcional*, *Confiabilidade* e *Usabilidade*.
   * Redação dos ADRs ([ADR 0001](adr/0001-adotar-adrs.md), [ADR 0002](adr/0002-adotar-expo-mvvm.md) e [ADR 0003](adr/0003-estrategia-testes-iso25010.md)).
   * Elaboração do Guia de Apresentação e Defesa Oral com respostas para a banca avaliadora.
