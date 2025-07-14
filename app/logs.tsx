import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

interface LogEntry {
  id: string;
  type: "feeding" | "diaper" | "sleep" | "play";
  time: string;
  notes?: string;
}

export default function Logs() {
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: "1",
      type: "feeding",
      time: "7:00 AM",
      notes: "Breast milk, 15 minutes",
    },
    { id: "2", type: "diaper", time: "7:30 AM", notes: "Wet diaper" },
    { id: "3", type: "sleep", time: "9:00 AM", notes: "Nap time, 2 hours" },
    {
      id: "4",
      type: "play",
      time: "11:30 AM",
      notes: "Tummy time, 10 minutes",
    },
  ]);

  const getLogIcon = (type: string) => {
    switch (type) {
      case "feeding":
        return "🍼";
      case "diaper":
        return "👶";
      case "sleep":
        return "😴";
      case "play":
        return "🎮";
      default:
        return "📝";
    }
  };

  const addQuickLog = (type: LogEntry["type"]) => {
    const newLog: LogEntry = {
      id: Date.now().toString(),
      type,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setLogs((prev) => [newLog, ...prev]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Baby Care Logs</Text>
        <Text style={styles.subtitle}>Track your baby's daily activities</Text>
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.quickButton}
          onPress={() => addQuickLog("feeding")}
        >
          <Text style={styles.quickButtonText}>🍼 Fed</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.quickButton}
          onPress={() => addQuickLog("diaper")}
        >
          <Text style={styles.quickButtonText}>👶 Diaper</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.quickButton}
          onPress={() => addQuickLog("sleep")}
        >
          <Text style={styles.quickButtonText}>😴 Sleep</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.quickButton}
          onPress={() => addQuickLog("play")}
        >
          <Text style={styles.quickButtonText}>🎮 Play</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logsList}>
        <Text style={styles.logsTitle}>Recent Activities</Text>
        {logs.map((log) => (
          <View key={log.id} style={styles.logItem}>
            <View style={styles.logIcon}>
              <Text style={styles.logIconText}>{getLogIcon(log.type)}</Text>
            </View>
            <View style={styles.logContent}>
              <Text style={styles.logType}>
                {log.type.charAt(0).toUpperCase() + log.type.slice(1)}
              </Text>
              <Text style={styles.logTime}>{log.time}</Text>
              {log.notes && <Text style={styles.logNotes}>{log.notes}</Text>}
            </View>
          </View>
        ))}
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#64748b",
  },
  quickActions: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  quickButton: {
    flex: 1,
    backgroundColor: "#6366f1",
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 8,
    alignItems: "center",
  },
  quickButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  logsList: {
    paddingHorizontal: 20,
  },
  logsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: 16,
  },
  logItem: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 16,
    marginBottom: 8,
    borderRadius: 12,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  logIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f1f5f9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  logIconText: {
    fontSize: 18,
  },
  logContent: {
    flex: 1,
  },
  logType: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
  },
  logTime: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 2,
  },
  logNotes: {
    fontSize: 14,
    color: "#475569",
    marginTop: 4,
  },
});
