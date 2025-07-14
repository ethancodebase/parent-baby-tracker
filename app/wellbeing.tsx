import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function Wellbeing() {
  const [moodScore, setMoodScore] = useState(0);
  const [energyLevel, setEnergyLevel] = useState(0);

  const moods = ["😢", "😕", "😐", "😊", "😄"];
  const energyLevels = ["🔋", "🔋🔋", "🔋🔋🔋", "🔋🔋🔋🔋", "🔋🔋🔋🔋🔋"];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Wellbeing Check</Text>
        <Text style={styles.subtitle}>How are you feeling today?</Text>
      </View>

      <View style={styles.checkCard}>
        <Text style={styles.checkTitle}>Your Mood</Text>
        <View style={styles.moodSelector}>
          {moods.map((mood, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.moodButton,
                moodScore === index && styles.selectedMood,
              ]}
              onPress={() => setMoodScore(index)}
            >
              <Text style={styles.moodEmoji}>{mood}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.checkCard}>
        <Text style={styles.checkTitle}>Energy Level</Text>
        <View style={styles.energySelector}>
          {energyLevels.map((energy, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.energyButton,
                energyLevel === index && styles.selectedEnergy,
              ]}
              onPress={() => setEnergyLevel(index)}
            >
              <Text style={styles.energyText}>{energy}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.tipsCard}>
        <Text style={styles.tipsTitle}>💚 Self-Care Tips</Text>
        <Text style={styles.tipItem}>• Take short breaks when baby sleeps</Text>
        <Text style={styles.tipItem}>
          • Stay hydrated and eat nutritious meals
        </Text>
        <Text style={styles.tipItem}>• Ask for help when you need it</Text>
        <Text style={styles.tipItem}>• Practice deep breathing exercises</Text>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Check-in</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9ff" },
  header: { padding: 20, paddingTop: 60 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 4,
  },
  subtitle: { fontSize: 16, color: "#64748b" },
  checkCard: {
    backgroundColor: "white",
    margin: 20,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
  },
  checkTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: 16,
  },
  moodSelector: { flexDirection: "row", justifyContent: "space-between" },
  moodButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f1f5f9",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedMood: { backgroundColor: "#6366f1" },
  moodEmoji: { fontSize: 24 },
  energySelector: { flexDirection: "row", justifyContent: "space-between" },
  energyButton: {
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 2,
    borderRadius: 8,
    backgroundColor: "#f1f5f9",
    alignItems: "center",
  },
  selectedEnergy: { backgroundColor: "#10b981" },
  energyText: { fontSize: 12 },
  tipsCard: {
    backgroundColor: "#dcfce7",
    margin: 20,
    padding: 16,
    borderRadius: 12,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#166534",
    marginBottom: 12,
  },
  tipItem: { fontSize: 14, color: "#166534", marginBottom: 8, lineHeight: 20 },
  saveButton: {
    backgroundColor: "#6366f1",
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 40,
  },
  saveButtonText: { color: "white", fontSize: 18, fontWeight: "600" },
});
