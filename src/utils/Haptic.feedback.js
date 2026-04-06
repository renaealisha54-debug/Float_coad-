import * as Haptics from 'expo-haptics';

/**
 * Utility for triggering different levels of physical feedback
 */
export const HapticFeedback = {
  // Use for light interactions, like picking up the buddy
  light: () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  },

  // Use for standard interactions or menu selections
  medium: () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  },

  // Use for collisions or when the buddy "drops"
  heavy: () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  },

  // Use for success states (e.g., buddy finished a task)
  success: () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  },

  // Use for errors or if the buddy is "annoyed"
  error: () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  },
};

export default HapticFeedback;
