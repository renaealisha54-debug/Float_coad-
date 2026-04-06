import { Accelerometer } from 'expo-sensors';

export const subscribeToMotion = (onShake) => {
  Accelerometer.setUpdateInterval(100);
  return Accelerometer.addListener(({ x, y, z }) => {
    const acceleration = Math.sqrt(x**2 + y**2 + z**2);
    if (acceleration > 3.0) { // Shake sensitivity
      onShake();
    }
  });
};
