import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import MoodButton from './Lemoodbtn.js';

export default function App() {
  const [counts, setCounts] = useState({
    happy: 0,
    sad: 0,
    tired: 0,
    excited: 0,
  });

  // Helper function to increase count for a specific mood
  const addMood = (mood) => {
    setCounts((prev) => ({
      ...prev,
      [mood]: prev[mood] + 1,
    }));
  };

  // Reset all counts back to 0
  const resetCounts = () => {
    setCounts({ happy: 0, sad: 0, tired: 0, excited: 0 });
  };

  // Find the highest number to highlight the top mood
  const maxCount = Math.max(counts.happy, counts.sad, counts.tired, counts.excited);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Mood Tracker</Text>

      {/* Mood Buttons */}
      <View style={styles.row}>
        <MoodButton emoji="😊" label="Happy" onPress={() => addMood('happy')} />
        <MoodButton emoji="😢" label="Sad" onPress={() => addMood('sad')} />
      </View>
      <View style={styles.row}>
        <MoodButton emoji="😴" label="Tired" onPress={() => addMood('tired')} />
        <MoodButton emoji="🔥" label="Excited" onPress={() => addMood('excited')} />
      </View>

      {/* Count Logs */}
      <View style={styles.logBox}>
        <Text style={[
          styles.logText,
          counts.happy > 0 && counts.happy === maxCount && styles.topMood
        ]}>
          😊 Happy: {counts.happy}
        </Text>

        <Text style={[
          styles.logText,
          counts.sad > 0 && counts.sad === maxCount && styles.topMood
        ]}>
          😢 Sad: {counts.sad}
        </Text>

        <Text style={[
          styles.logText,
          counts.tired > 0 && counts.tired === maxCount && styles.topMood
        ]}>
          😴 Tired: {counts.tired}
        </Text>

        <Text style={[
          styles.logText,
          counts.excited > 0 && counts.excited === maxCount && styles.topMood
        ]}>
          🔥 Excited: {counts.excited}
        </Text>
      </View>

      {/* Reset Button */}
      <Button title="Reset" color="red" onPress={resetCounts} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  logBox: {
    marginVertical: 20,
    alignItems: 'flex-start',
  },
  logText: {
    fontSize: 18,
    marginVertical: 4,
  },
  topMood: {
    fontWeight: 'bold',
    color: 'orange',
    fontSize: 22,
  },
});