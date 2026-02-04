import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function LoadingDots({ size = 12, color = '#8B4513' }) {
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
    shadowColor: '#8B4513',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
});