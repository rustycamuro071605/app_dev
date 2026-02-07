import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { brownTheme } from '../themes/brownTheme';

export default function LoadingDots({ size = 12, color = brownTheme.primary }) {
  return (
    <View style={styles.container}>
      <Animatable.View 
        animation="bounce" 
        iterationCount="infinite"
        duration={600}
        delay={0}
        style={[styles.dot, { width: size, height: size, backgroundColor: color }]}
      />
      <Animatable.View 
        animation="bounce" 
        iterationCount="infinite"
        duration={600}
        delay={200}
        style={[styles.dot, { width: size, height: size, backgroundColor: color }]}
      />
      <Animatable.View 
        animation="bounce" 
        iterationCount="infinite"
        duration={600}
        delay={400}
        style={[styles.dot, { width: size, height: size, backgroundColor: color }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  dot: {
    borderRadius: 6,
    marginHorizontal: 4,
    shadowColor: brownTheme.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    borderWidth: 1,
    borderColor: brownTheme.secondary,
  },
});