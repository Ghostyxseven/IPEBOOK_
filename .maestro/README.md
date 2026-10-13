# Testes End-to-End (E2E) com Maestro

Este diretório contém os 3 fluxos de testes de ponta a ponta (E2E) exigidos para a avaliação de Engenharia de Software III, executados sobre o aplicativo Ipebook em dispositivo móvel ou emulador Android/iOS.

## Ferramenta Escolhida: Maestro

O [Maestro](https://maestro.mobile.dev/) é a ferramenta de automação mobile recomendada para React Native e Expo, operando por acessibilidade e visão de tela de forma determinística e tolerante a pequenas variações de tempo.

## Fluxos Automatizados

1. **`01-catalogo-inicial.yaml` (Fluxo Crítico 1 — Catálogo e Ausência de Livros):**
   * Inicializa o aplicativo (`launchApp`).
   * Valida título institucional "Ipebook" e subtítulo.
   * Confirma renderização do cabeçalho da seção "Livros".
   * Assegura que o estado vazio informativo é exibido corretamente ("Ainda não há livros por aqui.").

2. **`02-recuperacao-erro-retry.yaml` (Fluxo Crítico 2 — Resiliência e Recuperação):**
   * Valida a detecção de estados de indisponibilidade ou erro.
   * Localiza o botão "Tentar novamente" (`tapOn`).
   * Aciona a recuperação e confirma retorno ao estado operacional.

3. **`03-acessibilidade-e-elementos.yaml` (Fluxo Crítico 3 — Usabilidade e Acessibilidade):**
   * Inspeciona hierarquia de acessibilidade da Home.
   * Exercita rolagem (`scroll`) sem perda de conteúdo ou transbordamento.
   * Assegura estabilidade visual da interface.

## Como Executar no Emulador/Dispositivo

### Pré-requisitos:
1. Ter o Maestro instalado na máquina:
   ```bash
   curl -FsSL "https://get.maestro.mobile.dev" | bash
   ```
2. Iniciar o aplicativo no emulador Android ou simulador iOS:
   ```bash
   npm run android  # ou npm run ios
   ```

### Executar os fluxos:
```bash
# Executar todos os fluxos da pasta
maestro test .maestro/

# Ou executar um fluxo individualmente
maestro test .maestro/01-catalogo-inicial.yaml
maestro test .maestro/02-recuperacao-erro-retry.yaml
maestro test .maestro/03-acessibilidade-e-elementos.yaml
```

## Como Gerar Evidência / Gravação de Vídeo

Para apresentar ao professor conforme solicitado no edital:
1. **Pelo próprio Maestro Studio / CLI:**
   ```bash
   maestro record .maestro/01-catalogo-inicial.yaml
   ```
2. **Pelo Android Debug Bridge (ADB):**
   ```bash
   adb shell screenrecord /sdcard/ipebook_e2e.mp4
   # (executar o maestro test em outro terminal)
   # Parar com Ctrl+C e puxar o vídeo:
   adb pull /sdcard/ipebook_e2e.mp4 ./docs/evidencias/
   ```

## Resposta para a Defesa Oral:
* **Como o E2E evita instabilidade (flakiness)?**
  *O Maestro aguarda automaticamente elementos ficarem visíveis antes de realizar qualquer interação (tolerância assíncrona inteligente), sem pausas arbitrárias (`sleep`), e pesquisa elementos por texto semântico visível ao usuário.*
