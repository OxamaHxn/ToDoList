import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import TaskDetailsScreen from '../screens/TaskDetailsScreen';
import { TScreen, RootStackParamList } from '../types'; 

const Stack = createStackNavigator<RootStackParamList>();

const screens: TScreen<any>[] = [
  {
    key: 'HomeScreen',
    name: 'Home', 
    component: HomeScreen,
  },
  {
    key: 'TaskDetailsScreen',
    name: 'TaskDetails', 
    component: TaskDetailsScreen,
  },
];

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animationEnabled: false }}
      initialRouteName="Home">
      {screens.map(s => (
        <Stack.Screen
          key={s.key}
          name={s.name}
          component={s.component}
          options={s?.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeStack;
