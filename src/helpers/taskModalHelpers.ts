import { Platform, ToastAndroid } from 'react-native';
import moment from 'moment';

/**
 * Generate a unique ID for the task.
 * @returns {string} A randomly generated unique string ID.
 */
export const generateUniqueId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Show a toast message (Android only).
 * @param message The message to display.
 */
export const showToast = (message: string): void => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }
};

/**
 * Get the current date and time formatted using Moment.js.
 * @returns {Object} Formatted date and time.
 */
export const getFormattedDateTime = () => {
  return {
    createdAt: moment().toISOString(),
    createdDate: moment().format('YYYY-MM-DD'),
    createdTime: moment().format('HH:mm:ss'),
  };
};
