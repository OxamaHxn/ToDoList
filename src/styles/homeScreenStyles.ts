import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/themeConstants';


export const styles = (theme: 'dark' | 'light') => 
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS[theme].background,
      paddingHorizontal: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: COLORS[theme].text,
    },
    quoteText: {
      fontSize: 16,
      fontStyle: 'italic',
      textAlign: 'center',
      marginVertical: 10,
      color: COLORS[theme].quoteText,
    },
    taskList: {
      paddingTop: 10,
    },
    emptyText: {
      textAlign: 'center',
      fontSize: 16,
      color: COLORS[theme].emptyText,
      marginTop: 20,
    },
    quoteCard: {
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
      marginVertical: 15,
    },
    fab: {
      position: 'absolute',
      bottom: 10,
      left: 10,
      right: 10,
      backgroundColor: COLORS[theme].fabBackground,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 30,
      elevation: 5,
    },
  });
