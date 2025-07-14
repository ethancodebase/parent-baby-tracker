import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

interface SleepLog {
  id: string;
  type: string;
  duration: string;
  time: string;
}

export default function Sleep() {
  const [sleepLogs, setSleepLogs] = useState<SleepLog[]>([
    { id: '1', type: 'Night Sleep', duration: '8 hours', time: '7:00 PM - 3:00 AM' },
    { id: '2', type: 'Morning Nap', duration: '2 hours', time: '9:00 AM - 11:00 AM' },
    { id: '3', type: 'Afternoon Nap', duration: '1.5 hours', time: '1:00 PM - 2:30 PM' },
  ]);

  const addSleepLog = () => {
    const newLog: SleepLog = {
      id: Date.now().toString(),
      type: 'Quick Nap', // More descriptive than just 'Sleep'
      duration: '30 min',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setSleepLogs(prev => [newLog, ...prev]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sleep Journal</Text>
        <Text style={styles.subtitle}>Track your baby's sleep patterns</Text>
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={addSleepLog}
        accessibilityLabel="Log a new sleep entry"
      >
        <Text style={styles.addButtonText}>😴 Log Sleep</Text>
      </TouchableOpacity>

      <View style={styles.statsCard}>
        <Text style={styles.statsTitle}>Today's Sleep Summary</Text>
        <Text style={styles.statText}>Total: 11.5 hours</Text>
        <Text style={styles.statText}>Night sleep: 8 hours</Text>
        <Text style={styles.statText}>Naps: 3.5 hours</Text>
      </View>

      <View style={styles.logsList}>
        <Text style={styles.logsTitle}>Recent Sleep</Text>
        {sleepLogs.length === 0 ? (
          <Text style={styles.emptyText}>No sleep logs yet. Tap "Log Sleep" to add one!</Text>
        ) : (
          sleepLogs.map(log => (
            <View key={log.id} style={[styles.logItem, styles.logItemShadow]}>
              <View style={styles.logIcon}>
                <Text style={styles.logIconText}>😴</Text>
              </View>
              <View style={styles.logContent}>
                <Text style={styles.logType}>{log.type}</Text>
                <Text style={styles.logDuration}>{log.duration}</Text>
                <Text style={styles.logTime}>{log.time}</Text>
              </View>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9ff' },
  header: { padding: 20, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1e293b', marginBottom: 4 },
  subtitle: { fontSize: 16, color: '#64748b' },
  addButton: { backgroundColor: '#6366f1', marginHorizontal: 20, paddingVertical: 16, borderRadius: 12, alignItems: 'center', marginBottom: 20 },
  addButtonText: { color: 'white', fontSize: 18, fontWeight: '600' },
  statsCard: { backgroundColor: '#dbeafe', margin: 20, padding: 16, borderRadius: 12 },
  statsTitle: { fontSize: 16, fontWeight: '600', color: '#1e40af', marginBottom: 8 },
  statText: { fontSize: 14, color: '#1e40af', marginBottom: 4 },
  logsList: { paddingHorizontal: 20 },
  logsTitle: { fontSize: 18, fontWeight: '600', color: '#1e293b', marginBottom: 16 },
  logItem: { flexDirection: 'row', backgroundColor: 'white', padding: 16, marginBottom: 8, borderRadius: 12 },
  logItemShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  logIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#f1f5f9', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  logIconText: { fontSize: 18 },
  logContent: { flex: 1 },
  logType: { fontSize: 16, fontWeight: '600', color: '#1e293b' },
  logDuration: { fontSize: 14, color: '#10b981', marginTop: 2 },
  logTime: { fontSize: 14, color: '#64748b', marginTop: 2 },
  emptyText: {
    color: '#64748b',
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 20,
  },
});