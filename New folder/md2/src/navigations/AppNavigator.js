import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { brownTheme } from '../themes/brownTheme';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: brownTheme.background,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: brownTheme.textPrimary,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 20,
            color: brownTheme.textPrimary,
          },
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ 
            headerShown: false,
            animationEnabled: true,
            gestureEnabled: true
          }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ 
            title: 'Sign In',
            headerShown: false,
            animationEnabled: true,
            gestureEnabled: true
          }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{ 
            title: 'Create Account',
            headerShown: false,
            animationEnabled: true,
            gestureEnabled: true
          }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Dashboard',
            headerShown: false,
            animationEnabled: true,
            gestureEnabled: true
          }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ 
            title: 'My Profile',
            headerShown: false,
            animationEnabled: true,
            gestureEnabled: true
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}