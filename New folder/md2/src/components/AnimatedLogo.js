import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function AnimatedLogo({ size = 70, color = '#8B4513' }) {
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
          style={[styles.icon, { fontSize: size * 0.6, color: '#fff' }]}
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
    shadowColor: '#8B4513',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  icon: {
    fontWeight: 'bold',
  },
});