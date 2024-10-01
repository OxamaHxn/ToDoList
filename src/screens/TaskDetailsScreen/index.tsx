import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import moment from 'moment'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { TaskDetailsNavigationProp, TaskDetailsRouteProp } from '../../types/navigationTypes';
import { useDynamicTheme } from '../../helpers/themeHelpers';
import { styles } from '../../styles/taskDetailsStyles';


/**
 * TaskDetailsScreen component for displaying details of a task.
 * @param route - Contains the taskId parameter for identifying the task.
 * @param navigation - Used for navigating back or to other screens.
 */
interface TaskDetailsScreenProps {
  navigation: TaskDetailsNavigationProp;
  route: TaskDetailsRouteProp;
}

const TaskDetailsScreen: React.FC<TaskDetailsScreenProps> = ({ route, navigation }) => {
  const { taskId } = route.params;
  const task = useSelector((state: RootState) =>
    //@ts-ignore
    state.tasks.tasks.find((task) => task.id === taskId)
  );
  const theme = useDynamicTheme();

  // Memoized navigation callback to go back
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  // Dynamically apply the styles based on the theme
    //@ts-ignore
  const dynamicStyles = styles(theme);

  if (!task) {
    return (
      <SafeAreaView style={dynamicStyles.container}>
        <Text style={dynamicStyles.title}>Task not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={dynamicStyles.container}>
      <View style={dynamicStyles.innerContainer}>
        <View style={dynamicStyles.header}>
          <TouchableOpacity onPress={goBack} style={dynamicStyles.backButton}>
            <Icon name="arrow-back" size={24} color={theme === 'dark' ? '#fff' : '#007BFF'} />
          </TouchableOpacity>
          <Text style={dynamicStyles.title}>{task.title}</Text>
        </View>
        <View style={dynamicStyles.detailsContainer}>
          <Text style={dynamicStyles.details}>
            Details: {task.details || 'No details available'}
          </Text>
          <Text style={dynamicStyles.date}>
            Created At: {moment(task.createdAt).format('MMMM Do YYYY, h:mm A')}
          </Text>
          <Text style={dynamicStyles.status}>
            Status: {task.isCompleted ? 'Completed' : 'Pending'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(TaskDetailsScreen);
