import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, Modal, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors, spacing, radius, type } from "../theme/tokens";
import { shouldOfferIOSInstallPrompt, shouldOfferSwitchToSafariPrompt } from "../lib/pwa";
import { getInstallPromptDismissed, setInstallPromptDismissed } from "../services/storage";

type Variant = "install" | "switch-to-safari" | "android";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallPrompt() {
  const insets = useSafeAreaInsets();
  const [variant, setVariant] = useState<Variant | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [androidPrompt, setAndroidPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    if (Platform.OS !== "web") return;

    const iosVariant: Variant | null = shouldOfferIOSInstallPrompt()
      ? "install"
      : shouldOfferSwitchToSafariPrompt()
        ? "switch-to-safari"
        : null;
    if (iosVariant) {
      getInstallPromptDismissed().then((dismissed) => {
        if (!dismissed) setVariant(iosVariant);
      });
      return;
    }

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      getInstallPromptDismissed().then((dismissed) => {
        if (dismissed) return;
        setAndroidPrompt(event as BeforeInstallPromptEvent);
        setVariant("android");
      });
    };
    const onAppInstalled = () => {
      setVariant(null);
      setAndroidPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  const dismiss = () => {
    setVariant(null);
    setInstallPromptDismissed();
  };

  const handleBannerAction = async () => {
    if (variant === "android" && androidPrompt) {
      await androidPrompt.prompt();
      await androidPrompt.userChoice;
      setAndroidPrompt(null);
      setVariant(null);
      return;
    }
    setModalVisible(true);
  };

  if (!variant) return null;

  return (
    <>
      <View style={[styles.banner, { bottom: spacing.lg + insets.bottom }]}>
        <MaterialCommunityIcons
          name={variant === "switch-to-safari" ? "compass-outline" : "cellphone-arrow-down"}
          size={22}
          color={colors.accentText}
        />
        <Text style={styles.bannerText}>
          {variant === "install"
            ? "Instale o Toga na tela de início do seu iPhone"
            : variant === "switch-to-safari"
              ? "Abra este link no Safari para instalar o Toga como app"
              : "Instale o Toga como app no seu celular"}
        </Text>
        <Pressable onPress={handleBannerAction} accessibilityRole="button" accessibilityLabel="Instalar app">
          <Text style={styles.bannerAction}>
            {variant === "install" ? "Como instalar" : variant === "switch-to-safari" ? "Como fazer" : "Instalar"}
          </Text>
        </Pressable>
        <Pressable onPress={dismiss} hitSlop={8} accessibilityRole="button" accessibilityLabel="Fechar aviso">
          <MaterialCommunityIcons name="close" size={18} color={colors.muted} />
        </Pressable>
      </View>

      <Modal visible={modalVisible} transparent animationType="fade" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.overlay}>
          <View style={styles.card}>
            {variant === "install" ? (
              <>
                <Text style={styles.cardTitle}>Adicionar à tela de início</Text>

                <View style={styles.step}>
                  <View style={styles.stepIcon}>
                    <MaterialCommunityIcons name="export-variant" size={20} color={colors.accentText} />
                  </View>
                  <Text style={styles.stepText}>
                    Toque no ícone de <Text style={styles.bold}>Compartilhar</Text> na barra do Safari
                  </Text>
                </View>

                <View style={styles.step}>
                  <View style={styles.stepIcon}>
                    <MaterialCommunityIcons name="plus-box-outline" size={20} color={colors.accentText} />
                  </View>
                  <Text style={styles.stepText}>
                    Role a lista e toque em <Text style={styles.bold}>"Adicionar à Tela de Início"</Text>
                  </Text>
                </View>

                <View style={styles.step}>
                  <View style={styles.stepIcon}>
                    <MaterialCommunityIcons name="check-bold" size={20} color={colors.accentText} />
                  </View>
                  <Text style={styles.stepText}>
                    Toque em <Text style={styles.bold}>"Adicionar"</Text> — pronto, o Toga vira um app na sua tela
                  </Text>
                </View>
              </>
            ) : (
              <>
                <Text style={styles.cardTitle}>Use o Safari para instalar</Text>
                <Text style={styles.stepText}>
                  No iPhone, apenas o <Text style={styles.bold}>Safari</Text> consegue instalar o Toga como app —
                  outros navegadores (Chrome, Firefox etc.) não têm essa opção.
                </Text>

                <View style={styles.step}>
                  <View style={styles.stepIcon}>
                    <MaterialCommunityIcons name="dots-horizontal" size={20} color={colors.accentText} />
                  </View>
                  <Text style={styles.stepText}>
                    Toque no menu <Text style={styles.bold}>•••</Text> (ou no ícone de compartilhar) deste navegador
                  </Text>
                </View>

                <View style={styles.step}>
                  <View style={styles.stepIcon}>
                    <MaterialCommunityIcons name="compass-outline" size={20} color={colors.accentText} />
                  </View>
                  <Text style={styles.stepText}>
                    Escolha <Text style={styles.bold}>"Abrir no Safari"</Text>
                  </Text>
                </View>

                <View style={styles.step}>
                  <View style={styles.stepIcon}>
                    <MaterialCommunityIcons name="export-variant" size={20} color={colors.accentText} />
                  </View>
                  <Text style={styles.stepText}>
                    No Safari, toque em <Text style={styles.bold}>Compartilhar</Text> →{" "}
                    <Text style={styles.bold}>"Adicionar à Tela de Início"</Text>
                  </Text>
                </View>
              </>
            )}

            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Entendi</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    position: "absolute",
    left: spacing.lg,
    right: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4
  },
  bannerText: { ...type.small, color: colors.fg, flex: 1 },
  bannerAction: { fontSize: 13, fontWeight: "700", color: colors.accentText },
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.4)", alignItems: "center", justifyContent: "center", padding: spacing.xl },
  card: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.xl, width: "100%", maxWidth: 360, gap: spacing.lg },
  cardTitle: { ...type.title, fontSize: 19, color: colors.fg },
  step: { flexDirection: "row", alignItems: "flex-start", gap: spacing.md },
  stepIcon: {
    width: 32,
    height: 32,
    borderRadius: radius.sm,
    backgroundColor: colors.bg,
    alignItems: "center",
    justifyContent: "center"
  },
  stepText: { ...type.body, color: colors.fg, flex: 1 },
  bold: { fontWeight: "700" },
  closeButton: { backgroundColor: colors.accent, borderRadius: radius.md, paddingVertical: spacing.md, alignItems: "center", marginTop: spacing.sm },
  closeButtonText: { color: "#fff", fontSize: 15, fontWeight: "600" }
});
