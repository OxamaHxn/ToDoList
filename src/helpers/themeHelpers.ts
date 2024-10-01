import { Appearance } from 'react-native';
import { useState, useEffect } from 'react';

/**
 * Hook to detect and update the system color scheme (theme).
 * @returns The current theme (light or dark).
 */
export const useDynamicTheme = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });
    return () => subscription.remove();
  }, []);

  return theme;
};
