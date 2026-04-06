import React, { useRef } from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';
import { HapticFeedback } from './Haptic.feedback';

const BuddyView = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        HapticFeedback.light();
        pan.setOffset({ x: pan.x._value, y: pan.y._value });
      },
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        HapticFeedback.medium();
        pan.flattenOffset();
      },
    })
  ).current;

  return (
    <Animated.View
      style={[styles.buddy, { transform: pan.getTranslateTransform() }]}
      {...panResponder.panHandlers}
    >
      <View style={styles.avatar} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buddy: { position: 'absolute', width: 70, height: 70 },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00FFCC',
    borderWidth: 2,
    borderColor: '#FFF'
  }
});

export default BuddyView;
