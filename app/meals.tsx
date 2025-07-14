import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

// Define age group type for type safety
const ageGroups = ['6-8 months', '8-10 months', '10-12 months', '12+ months'] as const;
type AgeGroup = typeof ageGroups[number];

interface MealSuggestion {
  id: string;
  title: string;
  description: string;
  ageGroup: AgeGroup;
  ingredients: string[];
  emoji?: string;
}

export default function Meals() {
  const [selectedAge, setSelectedAge] = useState<AgeGroup>('6-8 months');
  
  const mealSuggestions: MealSuggestion[] = [
    {
      id: '1',
      title: 'Sweet Potato Puree',
      description: 'Smooth, naturally sweet first food',
      ageGroup: '6-8 months',
      ingredients: ['Sweet potato', 'Breast milk or formula'],
      emoji: '🍠',
    },
    {
      id: '2',
      title: 'Banana Mash',
      description: 'Easy to digest, rich in potassium',
      ageGroup: '6-8 months',
      ingredients: ['Ripe banana'],
      emoji: '🍌',
    },
    {
      id: '3',
      title: 'Avocado Fingers',
      description: 'Perfect for baby-led weaning',
      ageGroup: '8-10 months',
      ingredients: ['Ripe avocado'],
      emoji: '🥑',
    },
    {
      id: '4',
      title: 'Mini Meatballs',
      description: 'Soft protein-rich finger food',
      ageGroup: '10-12 months',
      ingredients: ['Ground chicken', 'Breadcrumbs', 'Egg'],
      emoji: '🍖',
    },
  ];

  const filteredMeals = mealSuggestions.filter(meal => meal.ageGroup === selectedAge);

  const handleTryRecipe = (mealTitle: string) => {
    Alert.alert('Recipe', `You selected: ${mealTitle}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meal Suggestions</Text>
        <Text style={styles.subtitle}>Age-appropriate recipes for your baby</Text>
      </View>

      <View style={styles.ageSelector}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {ageGroups.map(age => (
            <TouchableOpacity
              key={age}
              style={[styles.ageButton, selectedAge === age && styles.selectedAgeButton]}
              onPress={() => setSelectedAge(age)}
              accessibilityLabel={`Select age group ${age}`}
            >
              <Text style={[styles.ageButtonText, selectedAge === age && styles.selectedAgeButtonText]}>
                {age}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.mealsContainer}>
        {filteredMeals.length === 0 ? (
          <Text style={styles.emptyText}>No meals found for this age group. Check back soon!</Text>
        ) : (
          filteredMeals.map(meal => (
            <View key={meal.id} style={styles.mealCard}>
              <View style={styles.mealHeader}>
                <Text style={styles.mealEmoji}>{meal.emoji || '🍽️'}</Text>
                <Text style={styles.mealTitle}>{meal.title}</Text>
              </View>
              <Text style={styles.mealDescription}>{meal.description}</Text>
              <View style={styles.ingredientsContainer}>
                <Text style={styles.ingredientsTitle}>Ingredients:</Text>
                {meal.ingredients.map((ingredient, index) => (
                  <Text key={index} style={styles.ingredient}>• {ingredient}</Text>
                ))}
              </View>
              <TouchableOpacity
                style={styles.tryButton}
                onPress={() => handleTryRecipe(meal.title)}
                accessibilityLabel={`Try recipe for ${meal.title}`}
              >
                <Text style={styles.tryButtonText}>Try This Recipe</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>

      <View style={styles.tipCard}>
        <Text style={styles.tipTitle}>💡 Feeding Tip</Text>
        <Text style={styles.tipText}>
          Always supervise your baby during meals and introduce new foods one at a time to watch for allergic reactions.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9ff',
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
  },
  ageSelector: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  ageButton: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  selectedAgeButton: {
    backgroundColor: '#6366f1',
    borderColor: '#6366f1',
  },
  ageButtonText: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
  selectedAgeButtonText: {
    color: 'white',
  },
  mealsContainer: {
    paddingHorizontal: 20,
  },
  mealCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  mealHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  mealEmoji: {
    fontSize: 24,
    marginRight: 8,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  mealDescription: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 12,
  },
  ingredientsContainer: {
    marginBottom: 16,
  },
  ingredientsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  ingredient: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 2,
  },
  tryButton: {
    backgroundColor: '#10b981',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  tryButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  tipCard: {
    backgroundColor: '#fef3c7',
    margin: 20,
    padding: 16,
    borderRadius: 12,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#92400e',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#92400e',
    lineHeight: 20,
  },
  emptyText: {
    color: '#64748b',
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 20,
  },
});