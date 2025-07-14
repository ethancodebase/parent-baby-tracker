import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Routines() {
  const [routines] = useState([
    { id: '1', title: 'Morning Routine', time: '7:00 AM', tasks: ['Feeding', 'Diaper change', 'Tummy time'], completed: true },
    { id: '2', title: 'Midday Routine', time: '12:00 PM', tasks: ['Lunch', 'Playtime', 'Nap'], completed: false },
    { id: '3', title: 'Evening Routine', time: '6:00 PM', tasks: ['Bath', 'Feeding', 'Bedtime story'], completed: false },
  ]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Daily Routines</Text>
        <Text style={styles.subtitle}>Stay on track with your baby's schedule</Text>
      </View>

      {routines.map(routine => (
        <View key={routine.id} style={styles.routineCard}>
          <View style={styles.routineHeader}>
            <Text style={styles.routineTitle}>{routine.title}</Text>
            <Text style={styles.routineTime}>{routine.time}</Text>
          </View>
          
          <View style={styles.tasksList}>
            {routine.tasks.map((task, index) => (
              <View key={index} style={styles.taskItem}>
                <Text style={styles.taskText}>{routine.completed ? '✅' : '⏰'} {task}</Text>
              </View>
            ))}
          </View>
          
          <TouchableOpacity style={[styles.statusButton, routine.completed && styles.completedButton]}>
            <Text style={[styles.statusText, routine.completed && styles.completedText]}>
              {routine.completed ? 'Completed' : 'Mark Complete'}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9ff' },
  header: { padding: 20, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1e293b', marginBottom: 4 },
  subtitle: { fontSize: 16, color: '#64748b' },
  routineCard: { backgroundColor: 'white', margin: 20, marginTop: 0, padding: 16, borderRadius: 12, elevation: 2 },
  routineHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  routineTitle: { fontSize: 18, fontWeight: '600', color: '#1e293b' },
  routineTime: { fontSize: 14, color: '#6366f1', fontWeight: '500' },
  tasksList: { marginBottom: 16 },
  taskItem: { marginBottom: 8 },
  taskText: { fontSize: 14, color: '#475569' },
  statusButton: { backgroundColor: '#f1f5f9', paddingVertical: 8, borderRadius: 6, alignItems: 'center' },
  completedButton: { backgroundColor: '#dcfce7' },
  statusText: { fontSize: 14, fontWeight: '500', color: '#64748b' },
  completedText: { color: '#166534' },
});