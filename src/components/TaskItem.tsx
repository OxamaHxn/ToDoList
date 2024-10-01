import React, { useRef, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { Task } from '../types/Task';
import { deleteTask, markTaskAsCompleted } from '../redux/slices/taskSlice';
import { ICONS, COLORS, ICON_SIZE, ANIMATION_DURATION } from '../constants/taskItemConstants';
import { showToast, triggerHapticFeedback, showDeleteConfirmation } from '../helpers/taskItemHelpers';
import { styles } from '../styles/taskItemStyles';
import { TaskDetailsNavigationProp } from '../types/navigationTypes';


interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<TaskDetailsNavigationProp>();

  const slideAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: ANIMATION_DURATION,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const handleNavigateToDetails = useCallback(() => {
    //@ts-ignore
    navigation.navigate('TaskDetails', { taskId: task.id });
  }, [navigation, task.id]);

  const handleDelete = useCallback(() => {
    showDeleteConfirmation(task.title, () => {
      dispatch(deleteTask(task.id));
      showToast(`Task "${task.title}" deleted!`);
    });
  }, [dispatch, task.id, task.title]);

  const handleCompleteTask = useCallback(() => {
    Animated.timing(slideAnim, {
      toValue: -100,
      duration: ANIMATION_DURATION,
      useNativeDriver: true,
    }).start(() => {
      dispatch(markTaskAsCompleted(task.id));
      triggerHapticFeedback();
    });
  }, [dispatch, task.id, slideAnim]);

  const formattedTime = moment(task.createdAt).format('h:mm A');

  return (
    <TouchableOpacity onPress={handleNavigateToDetails}>
      <Animated.View style={[styles.taskContainer, { transform: [{ translateX: slideAnim }] }]}>
        <View style={styles.taskDetails}>
          <Text style={[styles.title, task.isCompleted && styles.completed]}>{task.title}</Text>
          <Text style={styles.details}>
            {task.details ? `${task.details.substring(0, 20)}${task.details.length > 20 ? '...' : ''}` : 'No details available'}
          </Text>

          <Text style={styles.createdTime}>{formattedTime}</Text>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleCompleteTask}>
            <Icon name={ICONS.checkmark} size={ICON_SIZE} color={COLORS.completed} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onEdit(task)}>
            <Icon name={ICONS.edit} size={ICON_SIZE} color={COLORS.edit} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleDelete}>
            <Icon name={ICONS.delete} size={ICON_SIZE} color={COLORS.delete} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default React.memo(TaskItem);