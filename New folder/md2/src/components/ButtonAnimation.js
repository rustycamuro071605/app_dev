import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

export default function ButtonAnimation({ 
  title, 
  onPress, 
  backgroundColor = '#8B4513', 
  style,
  ...props 
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      {...props}
    >
      <Animatable.View 
        animation="bounceIn" 
        duration={800}
        style={[
          styles.button, 
          { backgroundColor },
          style
        ]}
      >
        <Text style={styles.buttonText}>{title}</Text>
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
    shadowColor: '#8B4513',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});