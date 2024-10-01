
export type RootStackParamList = {
  Home: undefined; 
  TaskDetails: { taskId: string }; 
};

export interface TScreen<T> {
  key: string; 
  name: keyof RootStackParamList; 
  component: React.ComponentType<T>; 
  options?: { [key: string]: any }; 
}
