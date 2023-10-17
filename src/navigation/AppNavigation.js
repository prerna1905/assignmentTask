import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from '../screens/LogIn/LogIn.js'
import BottomTab from './BottomTab.js';
import Video from '../screens/Video/Video.js';
import Register from '../screens/Register/Register.js';

const Stack = createStackNavigator();

function MainNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="LogIn">
      <Stack.Screen
        name="LogIn"
        component={LogIn}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
      />
      <Stack.Screen
        name="Video"
        component={Video}
      />
        <Stack.Screen
        name="Register"
        component={Register}
      />
    </Stack.Navigator>
  );
}

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
export default AppNavigator;
