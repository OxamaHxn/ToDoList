import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/taskItemConstants';

export const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'flex-start',
    height: 120,
  },
  taskDetails: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  createdTime: {
    fontSize: 14,
    color: COLORS.fadedText,
    marginVertical: 5,
  },
  details: {
    fontSize: 14,
    color: COLORS.text,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: COLORS.fadedText,
  },
  icon: {
    marginHorizontal: 5,
  },
});
