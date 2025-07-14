import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ReactNode } from 'react';

interface DashboardWidgetProps {
  title: string;
  content: ReactNode;
  onPress?: () => void;
  backgroundColor?: string;
}

export default function DashboardWidget({ 
  title, 
  content, 
  onPress, 
  backgroundColor = '#ffffff' 
}: DashboardWidgetProps) {
  const Widget = onPress ? TouchableOpacity : View;
  
  return (
    <Widget 
      style={[styles.widget, { backgroundColor }]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>{content}</View>
    </Widget>
  );
}

const styles = StyleSheet.create({
  widget: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  content: {
    flex: 1,
  },
});