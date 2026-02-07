import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { brownTheme } from '../themes/brownTheme';

export default function AnimatedLogo({ size = 70, color = brownTheme.primary }) {
  return (
    <View style={styles.container}>
      <Animatable.View 
        animation="pulse" 
        iterationCount="infinite"
        direction="alternate"
        duration={1500}
        style={[styles.circle, { width: size, height: size, backgroundColor: color }]}
      >
        <Animatable.Text 
          animation="rotate" 
          iterationCount="infinite"
          direction="alternate"
          duration={3000}
          style={[styles.icon, { fontSize: size * 0.6, color: brownTheme.textPrimary }]}
        >
          ☕
        </Animatable.Text>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: brownTheme.shadowColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 2,
    borderColor: brownTheme.secondary,
  },
  icon: {
    fontWeight: 'bold',
    textShadowColor: brownTheme.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});