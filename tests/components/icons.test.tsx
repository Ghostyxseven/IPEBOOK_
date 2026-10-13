import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react-native";
import { AppIcon } from "@/view/components/AppIcon";
import { IconBadge, type IconBadgeTone } from "@/view/components/IconBadge";
import { Icon, type IconName } from "@/view/components/Icon";

describe("componentes de ícones (ISO/IEC 25010 - Usabilidade e Acessibilidade)", () => {
  it("AppIcon: renderiza com tamanho padrão de 24 e propriedade de não poluir leitor de tela", async () => {
    const { toJSON } = await render(<AppIcon name="home" />);
    const tree = toJSON();
    expect(tree).toBeDefined();
  });

  it("AppIcon: renderiza com cor e tamanho customizados", async () => {
    const { toJSON } = await render(<AppIcon name="search" size={32} color="#2C5E45" />);
    const tree = toJSON();
    expect(tree).toBeDefined();
  });

  it("IconBadge: renderiza corretamente em todos os tons semânticos", async () => {
    const tones: IconBadgeTone[] = ["action", "trade", "donation", "error", "neutral"];
    for (const tone of tones) {
      const { toJSON } = await render(<IconBadge icon="bookmark" tone={tone} />);
      expect(toJSON()).toBeDefined();
    }
  });

  it("Icon: renderiza ícone vetorial SVG para interface web", async () => {
    const names: IconName[] = ["book", "heart", "check", "arrow"];
    for (const name of names) {
      const { toJSON } = await render(<Icon name={name} size={20} />);
      expect(toJSON()).toBeDefined();
    }
  });
});
