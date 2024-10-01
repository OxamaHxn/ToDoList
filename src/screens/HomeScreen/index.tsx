import React, { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { Appearance, FlatList, RefreshControl, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from '../../redux/slices/apiSlice';
import { updateTask } from '../../redux/slices/taskSlice';
import { RootState, AppDispatch } from '../../redux/store';
import TaskItem from '../../components/TaskItem';
import { Task } from '../../types/Task';
import { HomeScreenProps } from '../../types/types';
import { QUOTE_COLORS, TASK_ITEM_HEIGHT } from '../../constants/themeConstants';
import { styles } from '../../styles/homeScreenStyles';
import { getQuoteTextColor } from '../../helpers/conditionalHelpers';

const TaskModal = lazy(() => import('../../components/TaskModal'));

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const quote = useSelector((state: RootState) => state.api.quote); 
  const status = useSelector((state: RootState) => state.api.status); 
  const dispatch = useDispatch<AppDispatch>();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(fetchQuote()).then(() => setRefreshing(false));
  }, [dispatch]);

  const handleEditTask = useCallback((task: Task) => {
    setCurrentTask(task);
    setModalVisible(true);
  }, []);

  const handleUpdateTask = useCallback((updatedTask: Task) => {
    dispatch(updateTask(updatedTask));
    setModalVisible(false);
    setCurrentTask(null);
  }, [dispatch]);

  const getItemLayout = useCallback(
    (data: ArrayLike<Task> | null | undefined, index: number) => ({
      length: TASK_ITEM_HEIGHT,
      offset: TASK_ITEM_HEIGHT * index,
      index,
    }),
    []
  );

  const dynamicStyles = styles(theme ?? 'light');

  return (
    <SafeAreaView style={dynamicStyles.container}>
      <View style={dynamicStyles.container}>
        <View style={dynamicStyles.header}>
          <Text style={dynamicStyles.title}>To-Do List</Text>
        </View>

        <LinearGradient colors={QUOTE_COLORS} style={dynamicStyles.quoteCard}>
          <Text style={[dynamicStyles.quoteText, { color: getQuoteTextColor(status) }]}>
            {status === 'loading'
              ? 'Fetching motivational quote...'
              : status === 'failed'
              ? quote
              : `"${quote}"`}
          </Text>
        </LinearGradient>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItem task={item} onEdit={() => handleEditTask(item)} />
          )}
          initialNumToRender={5}
          getItemLayout={getItemLayout}
          contentContainerStyle={dynamicStyles.taskList}
          ListEmptyComponent={() => <Text style={dynamicStyles.emptyText}>No tasks available</Text>}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />

        <TouchableOpacity
          style={dynamicStyles.fab}
          activeOpacity={0.7}
          onPress={() => {
            setCurrentTask(null);
            setModalVisible(true);
          }}
        >
          <Text style={{ color: '#fff', fontSize: 16 }}>Add new task</Text>
        </TouchableOpacity>

        <Suspense fallback={<Text>Loading modal...</Text>}>
          {modalVisible && (
            <TaskModal
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              task={currentTask}
              onSave={(task) => currentTask && handleUpdateTask(task)}
            />
          )}
        </Suspense>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
