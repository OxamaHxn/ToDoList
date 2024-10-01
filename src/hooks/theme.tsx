import { useEffect, useState } from 'react';
//@ts-ignore
import { Appearance, AppearancePreferences } from 'react-native';

const useTheme = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    /**
     * Listener to handle changes in the system color scheme.
     * @param preferences - Object containing colorScheme (either 'light', 'dark', or null).
     */
    const listener = (preferences: AppearancePreferences) => {
      setTheme(preferences.colorScheme);
    };

    const subscription = Appearance.addChangeListener(listener);

    return () => subscription.remove();
  }, []);

  const isDarkMode = theme === 'dark';

  const themeStyles = {
    backgroundColor: isDarkMode ? '#121212' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',
    icon: isDarkMode ? 'moon' : 'sun',
  };

  return { theme: themeStyles, isDarkMode };
};

export { useTheme };
