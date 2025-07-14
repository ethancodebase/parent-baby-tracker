import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import DashboardWidget from "../components/DashboardWidget";
import { useMemo } from "react";

export default function Dashboard() {
  const router = useRouter();

  // Dynamic greeting based on time of day
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning!";
    if (hour < 18) return "Good afternoon!";
    return "Good evening!";
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.subtitle}>How can I help you today?</Text>
      </View>

      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => router.push("/chat")}
      >
        <Text style={styles.chatButtonText}>💬 Chat with AI Assistant</Text>
      </TouchableOpacity>

      <View style={styles.widgets}>
        <DashboardWidget
          title="Daily Tip"
          content={
            <Text style={styles.tipText}>
              Tummy time helps strengthen your baby's neck and shoulder muscles.
              Try 3-5 minutes several times a day.
            </Text>
          }
          backgroundColor="#fde68a" // More visually distinct
        />

        <DashboardWidget
          title="Today's Routine"
          content={
            <View>
              <Text style={styles.routineItem}>
                ⏰ Morning feeding - 7:00 AM
              </Text>
              <Text style={styles.routineItem}>⏰ Tummy time - 10:00 AM</Text>
              <Text style={styles.routineItem}>⏰ Afternoon nap - 1:00 PM</Text>
            </View>
          }
          onPress={() => router.push("/routines")}
        />

        <DashboardWidget
          title="Baby Logs"
          content={
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={styles.logItem}>Last feeding: 2 hours ago</Text>
                <Text style={styles.logItem}>
                  Last diaper change: 45 min ago
                </Text>
                <Text style={styles.logItem}>Sleep: 3 hours last night</Text>
              </View>
              <TouchableOpacity
                onPress={() => router.push("/logs")}
                style={styles.seeAllButton}
              >
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
          }
          backgroundColor="#dbeafe"
        />

        <View style={styles.quickActions}>
          <TouchableOpacity
            style={[styles.actionButton, styles.actionButtonShadow]}
            onPress={() => router.push("/meals")}
          >
            <Text style={styles.actionText}>🍼 Meals</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.actionButtonShadow]}
            onPress={() => router.push("/sleep")}
          >
            <Text style={styles.actionText}>😴 Sleep</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.actionButtonShadow]}
            onPress={() => router.push("/wellbeing")}
          >
            <Text style={styles.actionText}>💚 Wellbeing</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9ff",
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#64748b",
  },
  chatButton: {
    backgroundColor: "#6366f1",
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  chatButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  widgets: {
    paddingHorizontal: 20,
  },
  tipText: {
    fontSize: 14,
    color: "#92400e",
    lineHeight: 20,
  },
  routineItem: {
    fontSize: 14,
    color: "#475569",
    marginBottom: 4,
  },
  logItem: {
    fontSize: 14,
    color: "#1e40af",
    marginBottom: 4,
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  actionButton: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 8,
    alignItems: "center",
  },
  actionButtonShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  seeAllButton: {
    backgroundColor: "#6366f1",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginLeft: 10,
  },
  seeAllText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
});
