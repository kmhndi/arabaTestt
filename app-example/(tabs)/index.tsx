// App.tsx or app/index.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import ArabaScreen from './screens/arabaScreen'; // Import Araba screen
import ProfileScreen from './screens/profileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Araba"
          component={ArabaScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="car-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
