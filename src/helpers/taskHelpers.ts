import { Task } from '../types/Task';

/**
 * Helper function to find a task by its ID.
 * @param tasks - Array of tasks to search through.
 * @param id - ID of the task to find (as a string).
 * @returns The found task, or undefined if no task is found.
 */
export const findTaskById = (tasks: Task[], id: string): Task | undefined => 
      //@ts-ignore
  tasks.find(task => task.id === id);
