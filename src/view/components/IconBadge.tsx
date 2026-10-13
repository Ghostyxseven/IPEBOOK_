import React from "react";
import { StyleSheet, View } from "react-native";
import { tokens } from "@/view/tokens";
import { AppIcon, type AppIconName } from "./AppIcon";

export type IconBadgeTone = "action" | "trade" | "donation" | "error" | "neutral";

const tones: Record<IconBadgeTone, { background: string; icon: string }> = {
  action: { background: tokens.colors.action, icon: tokens.colors.surface },
  trade: { background: tokens.colors.badge.trade.background, icon: tokens.colors.badge.trade.text },
  donation: { background: tokens.colors.badge.donation.background, icon: tokens.colors.badge.donation.text },
  error: { background: tokens.colors.errorContainer, icon: tokens.colors.error },
  neutral: { background: tokens.colors.soft, icon: tokens.colors.secondaryText },
};

export interface IconBadgeProps {
  icon: AppIconName;
  tone: IconBadgeTone;
}

export function IconBadge({ icon, tone }: IconBadgeProps) {
  const { background, icon: iconColor } = tones[tone];
  return (
    <View style={[styles.badge, { backgroundColor: background }]}>
      <AppIcon name={icon} size={18} color={iconColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    width: 32,
    height: 32,
    borderRadius: tokens.radius.small,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IconBadge;
