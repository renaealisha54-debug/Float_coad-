import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { startBuddyService } from './Foreground';
import { subscribeToMotion } from './Accelerometer.logic';
import { HapticFeedback } from './Haptic.feedback';
import BuddyView from './Buddy.view';

export default function App() {
  useEffect(() => {
    // Start background service
    startBuddyService();

    // Trigger haptic when phone is shaken
    const subscription = subscribeToMotion(() => {
      HapticFeedback.heavy();
      console.log("Buddy is dizzy!");
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <BuddyView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' }
});
