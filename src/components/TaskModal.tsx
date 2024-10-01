import React, { useState, useCallback, useEffect } from 'react';
import { Modal, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../redux/slices/taskSlice';
import { Task } from '../types/Task';
import { styles } from '../styles/taskModalStyles';
import { generateUniqueId, showToast, getFormattedDateTime } from '../helpers/taskModalHelpers';
import { MODAL_COLORS } from '../constants/taskModalConstants';
import LinearGradient from 'react-native-linear-gradient';

/**
 * Props for the TaskModal component.
 */
interface TaskModalProps {
  visible: boolean;
  onClose: () => void;
  task: Task | null;
  onSave: (task: Task) => void;
}

/**
 * TaskModal component for adding or editing tasks.
 * @param visible - Whether the modal is visible.
 * @param onClose - Function to call when closing the modal.
 * @param task - The task being edited, or null for adding a new task.
 * @param onSave - Function to call when saving a task.
 */
const TaskModal: React.FC<TaskModalProps> = ({ visible, onClose, task }) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDetails(task.details || ''); 
    } else {
      setTitle('');
      setDetails('');
    }
  }, [task]);

  // Handle adding a new task
  const handleAddTask = useCallback(() => {
    const newTask: Task = {
      //@ts-ignore
      id: generateUniqueId(),
      title,
      details,
      isCompleted: false,
      ...getFormattedDateTime(),
    };

    dispatch(addTask(newTask));
    showToast(`Task "${title}" added!`);

    setTitle('');
    setDetails('');
    onClose();
  }, [dispatch, title, details, onClose]);

  // Handle updating an existing task
  const handleUpdateTask = useCallback(() => {
    if (task) {
      const updatedTask: Task = { ...task, title, details };
      dispatch(updateTask(updatedTask));
      onClose();
    }
  }, [dispatch, task, title, details, onClose]);

  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.modalContainer}>
        <LinearGradient colors={MODAL_COLORS.gradient} style={styles.modalView}>
          {/* Task Title Input */}
          <TextInput
            placeholder="Task Title"
            value={title}
            onChangeText={setTitle}
            style={styles.input}
            placeholderTextColor={MODAL_COLORS.inputTextColor}
          />

          {/* Task Details Input */}
          <TextInput
            placeholder="Task Details"
            value={details}
            onChangeText={setDetails}
            style={[styles.input, styles.detailsInput]}
            placeholderTextColor={MODAL_COLORS.inputTextColor}
            multiline
          />

          {/* Button Container */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={task ? handleUpdateTask : handleAddTask} style={styles.button}>
              <Text style={styles.buttonText}>{task ? 'Update Task' : 'Add Task'}</Text>
            </TouchableOpacity>

            {/* Close Button */}
            <TouchableOpacity onPress={onClose} style={[styles.button, styles.closeButton]}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default React.memo(TaskModal);
