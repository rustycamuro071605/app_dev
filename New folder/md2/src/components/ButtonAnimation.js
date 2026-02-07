import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { brownTheme } from '../themes/brownTheme';

export default function ButtonAnimation({ 
  title, 
  onPress, 
  backgroundColor = brownTheme.primary, 
  textColor = brownTheme.textPrimary,
  style,
  animation = "bounceIn",
  duration = 800,
  ...props 
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      {...props}
    >
      <Animatable.View 
        animation={animation} 
        duration={duration}
        style={[
          styles.button, 
          { backgroundColor },
          style
        ]}
      >
        <Animatable.Text 
          animation="pulse"
          iterationCount="infinite"
          duration={2000}
          style={[styles.buttonText, { color: textColor }]}
        >
          {title}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: brownTheme.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: brownTheme.secondary,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: brownTheme.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});