import { Platform, ToastAndroid, Alert } from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

/**
 * Show a toast notification (for Android only).
 * @param message - The message to show in the toast.
 */
export const showToast = (message: string): void => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }
};

/**
 * Trigger haptic feedback (iOS only).
 */
export const triggerHapticFeedback = (): void => {
  if (Platform.OS === 'ios') {
    const options = {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: true,
    };
    ReactNativeHapticFeedback.trigger('notificationSuccess', options);
  }
};

/**
 * Show a confirmation alert before deleting a task.
 * @param taskTitle - Title of the task to be deleted.
 * @param onDelete - Function to call on confirmation.
 */
export const showDeleteConfirmation = (taskTitle: string, onDelete: () => void): void => {
  Alert.alert(
    "Delete Task",
    `Are you sure you want to delete the task "${taskTitle}"?`,
    [
      { text: "No", style: "cancel" },
      { text: "Yes", onPress: onDelete },
    ],
    { cancelable: true }
  );
};
