import moment from 'moment';
import { Task } from '../types/Task';

/**
 * Get the status of the task.
 * @param task - The task object.
 * @returns {string} - Task status as 'Completed' or 'Pending'.
 */
export const getTaskStatus = (task: Task | null): string => {
  return task?.isCompleted ? 'Completed' : 'Pending';
};

/**
 * Get the formatted date using moment.js.
 * @param createdAt - ISO formatted date.
 * @returns {string} - Formatted date string.
 */
export const getFormattedDate = (createdAt: string | undefined): string => {
  return createdAt ? moment(createdAt).format('MMMM Do YYYY, h:mm A') : 'N/A';
};
