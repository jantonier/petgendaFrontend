
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/login/LoginScreen';
import HomeScreen from '../screen/home/HomeScreen';
import SettingsScreen from '../screen/settings/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyPetsScreen from '../screen/home/MyPetsScreen';
import CalendarScreen from '../screen/calendar/CalendarScreen';
import PetInfoScreen from '../screen/pet/PetInfoScreen';
import AddPetScreen from '../screen/pet/AddPetScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="My Pets"
        component={MyPetsScreen}
        options={{
          headerTitleAlign: 'center',
          title: 'My Pets',
          tabBarLabel: 'My Pets',
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: 'Calendar',
          tabBarLabel: 'Calendar',
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="login" component={LoginScreen} />
        <Stack.Screen name="tabsHome" component={MyTabs} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen options={{ headerShown: false }} name="petinfo" component={PetInfoScreen} />
        <Stack.Screen options={{ headerShown: false }} name="addpet" component={AddPetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
