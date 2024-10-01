import { StackScreenProps } from '@react-navigation/stack';
import { ComponentType } from 'react';
import { RootStackParamList } from './index';

export interface TScreen<T> {
  key: string; 
  name: keyof RootStackParamList; 
  component: ComponentType<T>; 
  options?: { [key: string]: any }; 
}

export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;
export type TaskDetailsScreenProps = StackScreenProps<RootStackParamList, 'TaskDetails'>;
