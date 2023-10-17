import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Home from '../screens/Home/Home';
import Explore from '../screens/Explore/Explore';
import Profile from '../screens/Profile/Profile';
import { AntIcon, MaterialCommunityIcon } from '../component/Icons/Icons';
import { colors } from '../colors/colors';

const Tab = createBottomTabNavigator();

const BottomTab = (props) => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.secondary_black,
          height: 80,
          paddingBottom: 25,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 8,
                backgroundColor: focused ? colors.primary_orange: 'transparent',
                borderRadius: 32,
                width: 64,
                height: 64
              }}>
              <MaterialCommunityIcon
                name="clipboard-play-outline"
                size={30}
                color={colors.third_white}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 8,
                backgroundColor: focused ? colors.primary_orange: 'transparent',
                borderRadius: 32,
                width: 64,
                height: 64
              }}>
              <AntIcon
                name="search1"
                size={30}
                color={colors.third_white}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 8,
                backgroundColor: focused ? colors.primary_orange: 'transparent',
                borderRadius: 32,
                width: 64,
                height: 64
              }}>
              <AntIcon
                name="user"
                size={30}
                color={colors.third_white}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
