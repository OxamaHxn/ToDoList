
  export interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export type RootStackParamList = {
    Home: undefined;
    TaskDetails: { task: Task };
  };
  
  /**
 * Represents a task in the to-do list.
 */

/**
 * Represents a task in the to-do list.
 */
export interface Task {
  id: number;
  title: string;
  details?: string; 
  isCompleted: boolean;
  createdAt: string; 
  createdDate?: string; 
  createdTime?: string; 
}
