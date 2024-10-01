import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../types/Task';
import { findTaskById } from '../../helpers/taskHelpers';

/**
 * Interface for the task slice's state.
 */
interface TaskState {
  tasks: Task[];
  completedTasks: Task[];
  total: number;
  completed: number;
}

/**
 * Initial state for the task slice.
 */
const initialState: TaskState = {
  tasks: [],
  completedTasks: [],
  total: 0,
  completed: 0,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    /**
     * Add a new task to the state.
     * @param state - Current task state.
     * @param action - Payload containing the task to add.
     */
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
      state.total += 1;
    },

    /**
     * Delete a task from the state by its ID.
     * @param state - Current task state.
     * @param action - Payload containing the ID of the task to delete.
     */
    deleteTask(state, action: PayloadAction<number>) {  // Ensure the ID is a number
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      state.total -= 1;
    },

    /**
     * Mark a task as completed by its ID.
     * @param state - Current task state.
     * @param action - Payload containing the ID of the task to mark as completed.
     */
    markTaskAsCompleted(state, action: PayloadAction<number>) {  // ID as number
      //@ts-ignore
      const task = findTaskById(state.tasks, action.payload);
      if (task && !task.isCompleted) {
        // Remove from tasks array and add to completedTasks
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
        task.isCompleted = true;
        state.completedTasks.push(task);
        state.completed += 1;
      }
    },

    /**
     * Update an existing task's details.
     * @param state - Current task state.
     * @param action - Payload containing the updated task details.
     */
    updateTask(state, action: PayloadAction<Task>) {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
      }
    },
  },
});

export const { addTask, deleteTask, markTaskAsCompleted, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
