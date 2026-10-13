# Identificação da Equipe e Contexto Acadêmico

Este projeto integra as atividades avaliativas do curso de Tecnologia em Análise e Desenvolvimento de Sistemas do Instituto Federal de Educação, Ciência e Tecnologia do Piauí (IFPI) — Campus Piripiri.

---

## 🏫 Dados Acadêmicos

* **Instituição:** Instituto Federal de Educação, Ciência e Tecnologia do Piauí (IFPI) — Campus Piripiri
* **Curso:** Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)
* **Disciplina:** Engenharia de Software III (em conjunto com Programação para Dispositivos Móveis)
* **Professor(a) Responsável:** Prof. Jeferson Soares
* **Projeto:** Ipebook — Aplicativo Móvel de Descoberta e Gestão de Livros
* **Semestre Letivo / Ano:** 2026

---

## 👥 Integrantes da Equipe e Papéis no Projeto

### 1. Micael Cardoso Reis
* **GitHub:** [@Ghostyxseven](https://github.com/Ghostyxseven)
* **E-mails no Git:** `cardosomicael245@gmail.com` / `104681133+Ghostyxseven@users.noreply.github.com` (ativo no ambiente local)
* **Papel principal no projeto:** Exploração e Descoberta de Livros (Catálogo), Mapa Interativo, Favoritos, Arquitetura MVVM em 7 Camadas, Estratégia de Testes Automatizados e continuidade de Negociação/Segurança.

### 2. Maria Clara Almeida Martins
* **GitHub:** [@clarinhamartins](https://github.com/clarinhamartins)
* **E-mail no Git:** `mariaclaraalmeidamartins06@gmail.com`
* **Papel principal no projeto:** Autenticação, Onboarding, Telas de Acesso, Recuperação de Conta e Estados Globais da Interface.

### 3. Antonio Carlos Gomes
* **GitHub:** [@gomes738](https://github.com/gomes738)
* **E-mail no Git:** `carlosgoms738@gmail.com`
* **Papel principal no projeto:** Base inicial de Negociação de Livros, Chat/Comunicação e Diretrizes de Segurança.

### 4. Eric Vinícius dos Santos Oliveira
* **GitHub:** [@Eric2025gh](https://github.com/Eric2025gh)
* **E-mails no Git:** `contalpessoal2024@gmail.com` / `eric.vinicius@12min.com`
* **Papel principal no projeto:** Anúncios de Livros (Cadastro, Upload de Fotos, Rascunhos, ISBN e Ciclo de Vida do Anúncio) e Perfil de Usuário.

---

## 🎯 Matriz de Responsabilidades do Trabalho Final de Engenharia de Software III

Para atender rigorosamente aos critérios de avaliação da disciplina, as responsabilidades da entrega técnica foram consolidadas nos seguintes eixos:

1. **Arquitetura de Software e Domínio Puro (MVVM em 7 Camadas):**
   * Desacoplamento entre `app/`, `view/`, `viewmodel/`, `usecase/`, `model/`, `infra/` e `di/`.
   * Contratos de injeção de dependência (`iBookDataSource`, `iBookUseCases`) e composição única em `di/container.ts`.
   * Implementação de funções puras de validação, limites de caracteres e formatação em `src/model/validators/bookValidator.ts`.

2. **Estratégia de Testes Automatizados e Alta Cobertura (v8):**
   * **Testes Unitários:** 17 testes em `tests/unit/` protegendo regras de negócio e validações de borda.
   * **Testes de Hooks:** 5 testes em `tests/hooks/` cobrindo ciclo de vida de `useHomeViewModel`, estados de carregamento, erro, retry e condições de corrida.
   * **Testes de Componentes (RNTL):** 4 testes em `tests/components/` validando acessibilidade semântica (`accessibilityRole="header"`, `accessibilityLabel`) e estado de catálogo vazio.
   * **Testes de Componentes com Mocks:** 3 testes em `tests/components-mocked/` isolando serviços com motivo explicitado para simular falhas forçadas e reconexão.
   * **Testes de Integração:** 2 testes em `tests/integration/` exercitando o fluxo real integrado entre View + ViewModel + Casos de Uso + Datasource em memória.
   * **Relatório de Cobertura:** Atingimento de **98.46% statements**, **95.65% branches**, **100% functions** e **100% lines** via `@vitest/coverage-v8`.

3. **Testes End-to-End (E2E) com Maestro:**
   * Três fluxos declarativos mobile em `.maestro/`: Catálogo Inicial, Resiliência/Retry e Acessibilidade/Rolagem.
   * Roteiro de execução em emulador e gravação de vídeo para demonstração à banca.

4. **Qualidade de Software (ISO/IEC 25010) e Defesa Oral:**
   * Mapeamento comprovado de 3 características da norma: *Adequação Funcional*, *Confiabilidade* e *Usabilidade/Acessibilidade*.
   * Registro histórico das decisões em Architecture Decision Records ([ADR 0001](adr/0001-adotar-adrs.md), [ADR 0002](adr/0002-adotar-expo-mvvm.md) e [ADR 0003](adr/0003-estrategia-testes-iso25010.md)).
   * Roteiro de perguntas e respostas para a defesa oral com o Prof. Jeferson Soares.
