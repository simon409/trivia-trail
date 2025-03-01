import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const categories = [
    '📚 General Knowledge', '🎬 Movies & TV', '🎶 Music', '⚽ Sports', '🔬 Science',
    '🏛️ History', '📖 Literature', '🎨 Art & Culture', '🌍 Geography', '🍔 Food & Drink',
    '🎮 Video Games', '🌟 Pop Culture', '🏛️ Politics', '🐾 Nature & Animals', '🚀 Space',
    '👗 Fashion', '⚡ Mythology', '💼 Business', '🗣️ Languages', '🧸 Kids Trivia',
  ];

  const toggleSelection = (category: string) => {
    setSelected(prev =>
      prev.includes(category) ? prev.filter(item => item !== category) : [...prev, category]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>
          Hey 👋, Welcome to <Text style={styles.textBold}>Trivia Trail</Text>
        </Text>

        <View style={styles.descriptionBox}>
          <Text style={styles.description}>
            Test your knowledge with this fun trivia game! Choose categories, answer correctly, and climb the leaderboard. Good luck! 🍀
          </Text>
        </View>

        <Text style={styles.description}>
          Please <Text style={styles.textBold}>select at least 3 categories</Text> to get started.
        </Text>

        {/* Full-Width Selection Indicator */}
        <View style={styles.indicatorContainer}>
          {[...Array(3)].map((_, index) => (
            <View key={index} style={[styles.indicator, index < selected.length ? styles.indicatorActive : null]} />
          ))}
        </View>

        <FlatList
          data={categories}
          numColumns={2}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={[styles.categoryButton, selected.includes(item) && styles.selectedCategory]} 
              onPress={() => toggleSelection(item)}
            >
              <Text style={[styles.categoryText, selected.includes(item) && styles.selectedText]}>{item}</Text>
            </TouchableOpacity>
          )}
          scrollEnabled={false} // Disable scrolling inside FlatList so ScrollView takes control
        />

        {/* Confirm Button */}
        <TouchableOpacity 
          style={[styles.confirmButton, selected.length >= 3 ? styles.confirmButtonActive : null]}
          disabled={selected.length < 3}
          onPress={() => console.log('Selected Categories:', selected)}
        >
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  textBold: {
    fontWeight: 'bold',
    color: '#56ADD2',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  descriptionBox: {
    backgroundColor: '#E3F2FD',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#64B5F6',
    marginBottom: 10,
  },
  indicatorContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
    height: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  indicator: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#D3D3D3',
  },
  indicatorActive: {
    backgroundColor: '#56ADD2',
  },
  categoryButton: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 12,
    margin: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  selectedCategory: {
    backgroundColor: '#56ADD2',
  },
  categoryText: {
    fontSize: 16,
  },
  selectedText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#B0BEC5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonActive: {
    backgroundColor: '#56ADD2',
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Index;
