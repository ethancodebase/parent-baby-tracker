import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Onboarding() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [parentName, setParentName] = useState('');
  const [babyName, setBabyName] = useState('');
  const [babyAge, setBabyAge] = useState('');

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      router.push('/dashboard');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Welcome! What's your name?</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={parentName}
              onChangeText={setParentName}
              placeholderTextColor="#94a3b8"
            />
          </View>
        );
      case 2:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>What's your baby's name?</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter baby's name"
              value={babyName}
              onChangeText={setBabyName}
              placeholderTextColor="#94a3b8"
            />
          </View>
        );
      case 3:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>How old is {babyName}?</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., 6 months"
              value={babyAge}
              onChangeText={setBabyAge}
              placeholderTextColor="#94a3b8"
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Setup Your Profile</Text>
        <Text style={styles.subtitle}>Step {step} of 3</Text>
      </View>
      
      {renderStep()}
      
      <TouchableOpacity
        style={styles.button}
        onPress={handleNext}
      >
        <Text style={styles.buttonText}>
          {step === 3 ? 'Complete Setup' : 'Next'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9ff',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
  },
  stepContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  stepTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  button: {
    backgroundColor: '#6366f1',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});