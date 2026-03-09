import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GcashHome from './screens/GcashHome';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="#0066CC" />
      <GcashHome />
    </SafeAreaProvider>
  );
}
