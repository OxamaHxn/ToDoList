// types/navigationTypes.ts
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type StackParamList = {
  TaskDetails: { taskId: string };
};

export type TaskDetailsNavigationProp = StackNavigationProp<StackParamList, 'TaskDetails'>;
export type TaskDetailsRouteProp = RouteProp<StackParamList, 'TaskDetails'>;
