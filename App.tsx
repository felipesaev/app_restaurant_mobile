import { useFonts } from 'expo-font';
import { Text } from './src/components/Text';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Main } from './src/Main';
import React from 'react';

export default function App() {
  const [isFontLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontLoaded) {
    return null;
  }
  return (
    <Main />
  );
}
