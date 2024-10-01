import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/taskDetailsConstants';

export const styles = (theme: 'light' | 'dark') => StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme === 'dark' ? COLORS.darkBackground : COLORS.lightBackground,
  },
  innerContainer: {
    backgroundColor: theme === 'dark' ? COLORS.darkBackground : COLORS.lightBackground,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme === 'dark' ? COLORS.darkText : COLORS.lightText,
    flex: 1,
  },
  detailsContainer: {
    backgroundColor: theme === 'dark' ? '#222' : '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: COLORS.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  details: {
    fontSize: 16,
    color: theme === 'dark' ? '#ccc' : '#555',
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: theme === 'dark' ? '#aaa' : '#777',
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    fontWeight: '500',
    color: theme === 'dark' ? '#00FF00' : COLORS.completedStatus,
  },
});
