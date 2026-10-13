import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHomeViewModel } from "@/viewmodel/useHomeViewModel";

export default function Home() {
  const [state, actions] = useHomeViewModel();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.content}>
        <View style={styles.brand}>
          <View style={styles.mark} accessible={false} />
          <Text accessibilityRole="header" style={styles.title}>Ipebook</Text>
        </View>
        <Text style={styles.subtitle}>Um lugar para descobrir sua próxima leitura.</Text>
        <Text accessibilityRole="header" style={styles.heading}>Livros</Text>
        {state.loading ? (
          <View style={styles.status}>
            <ActivityIndicator color="#243D31" accessibilityLabel="Carregando livros" />
            <Text style={styles.body}>Carregando livros…</Text>
          </View>
        ) : state.error ? (
          <View style={styles.status}>
            <Text accessibilityRole="alert" style={styles.body}>{state.error}</Text>
            <Pressable accessibilityRole="button" onPress={() => void actions.reload()} style={styles.button}>
              <Text style={styles.buttonText}>Tentar novamente</Text>
            </Pressable>
          </View>
        ) : (
          <FlatList
            data={state.books}
            keyExtractor={(book) => book.id}
            contentContainerStyle={styles.list}
            ListEmptyComponent={
              <View style={styles.empty}>
                <Text style={styles.emptyTitle}>Ainda não há livros por aqui.</Text>
                <Text style={styles.body}>Quando houver livros disponíveis, eles aparecerão neste espaço.</Text>
              </View>
            }
            renderItem={({ item }) => (
              <View style={styles.book}>
                <Text style={styles.emptyTitle}>{item.title}</Text>
                <Text style={styles.body}>{item.author}</Text>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FAF8F2" },
  content: { flex: 1, width: "100%", maxWidth: 720, alignSelf: "center", padding: 24, paddingTop: 48 },
  brand: { flexDirection: "row", alignItems: "center", gap: 12 },
  mark: { width: 16, height: 36, backgroundColor: "#E9BE4A", borderTopRightRadius: 12 },
  title: { fontSize: 36, fontWeight: "700", color: "#243D31" },
  subtitle: { fontSize: 17, lineHeight: 26, color: "#58665D", marginTop: 14, marginBottom: 48 },
  heading: { fontSize: 24, fontWeight: "600", color: "#243D31", marginBottom: 24 },
  list: { paddingBottom: 24 },
  empty: { borderTopWidth: 1, borderTopColor: "#D7DDD6", paddingTop: 28, gap: 10 },
  emptyTitle: { fontSize: 19, fontWeight: "600", color: "#243D31" },
  body: { fontSize: 16, lineHeight: 25, color: "#58665D" },
  status: { gap: 18, alignItems: "flex-start" },
  button: { minHeight: 48, justifyContent: "center", paddingHorizontal: 20, borderRadius: 8, backgroundColor: "#243D31" },
  buttonText: { color: "#FAF8F2", fontSize: 16, fontWeight: "600" },
  book: { paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: "#D7DDD6", gap: 6 },
});
