import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, SafeAreaView, StatusBar, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { brownTheme } from '../themes/brownTheme';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFocused, setIsFocused] = useState({ 
    name: false, 
    id: false, 
    password: false, 
    confirmPassword: false 
  });
  
  // Animation refs
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    // Entrance animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const handleSignUp = () => {
    // Validation checks
    if (!name.trim() || !id.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Validation Error', 'Passwords do not match');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Validation Error', 'Password must be at least 6 characters');
      return;
    }

    // In a real app, you would register with backend here
    // For this demo, we'll just navigate to home
    navigation.navigate('Home', { 
      userEmail: name,
      userId: id 
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={brownTheme.background} />
      <Animated.View 
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        {/* Header with animations */}
        <Animatable.View 
          animation="fadeInDown"
          duration={1000}
          style={styles.header}
        >
          <Animatable.Text 
            animation="pulse"
            iterationCount="infinite"
            direction="alternate"
            duration={2500}
            style={styles.logo}
          >
            ☕
          </Animatable.Text>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join us today</Text>
        </Animatable.View>

        {/* Form Container with slide animation */}
        <Animatable.View 
          animation="fadeInUp"
          delay={300}
          duration={800}
          style={styles.formContainer}
        >
          {/* Name Input */}
          <View style={[styles.inputContainer, isFocused.name && styles.inputFocused]}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor={brownTheme.textDark}
              value={name}
              onChangeText={setName}
              onFocus={() => setIsFocused({...isFocused, name: true})}
              onBlur={() => setIsFocused({...isFocused, name: false})}
            />
          </View>

          {/* ID Input */}
          <View style={[styles.inputContainer, isFocused.id && styles.inputFocused]}>
            <TextInput
              style={styles.input}
              placeholder="User ID"
              placeholderTextColor={brownTheme.textDark}
              value={id}
              onChangeText={setId}
              autoCapitalize="none"
              onFocus={() => setIsFocused({...isFocused, id: true})}
              onBlur={() => setIsFocused({...isFocused, id: false})}
            />
          </View>

          {/* Password Input */}
          <View style={[styles.inputContainer, isFocused.password && styles.inputFocused]}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={brownTheme.textDark}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              onFocus={() => setIsFocused({...isFocused, password: true})}
              onBlur={() => setIsFocused({...isFocused, password: false})}
            />
          </View>

          {/* Confirm Password Input */}
          <View style={[styles.inputContainer, isFocused.confirmPassword && styles.inputFocused]}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor={brownTheme.textDark}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              onFocus={() => setIsFocused({...isFocused, confirmPassword: true})}
              onBlur={() => setIsFocused({...isFocused, confirmPassword: false})}
            />
          </View>

          {/* Sign Up Button with bounce animation */}
          <Animatable.View 
            animation="bounceIn" 
            delay={600}
            duration={600}
          >
            <TouchableOpacity 
              style={styles.signUpButton} 
              onPress={handleSignUp}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </Animatable.View>
        </Animatable.View>

        {/* Login Link with fade animation */}
        <Animatable.View 
          animation="fadeIn"
          delay={900}
          duration={600}
          style={styles.linkContainer}
        >
          <Text style={styles.linkText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </Animatable.View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: brownTheme.background,
  },
  content: {
    flex: 1,
    padding: 35,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 45,
  },
  logo: {
    fontSize: 70,
    textAlign: 'center',
    marginBottom: 20,
    color: brownTheme.secondary,
    textShadowColor: brownTheme.shadowColor,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
    color: brownTheme.textPrimary,
    textShadowColor: brownTheme.shadowColor,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: brownTheme.textSecondary,
    fontWeight: '600',
    textShadowColor: brownTheme.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  formContainer: {
    backgroundColor: brownTheme.secondaryLight,
    borderRadius: 25,
    padding: 30,
    marginBottom: 35,
    elevation: 10,
    shadowColor: brownTheme.shadowColor,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: brownTheme.secondary,
  },
  inputContainer: {
    backgroundColor: brownTheme.textPrimary,
    borderRadius: 15,
    marginBottom: 25,
    borderWidth: 3,
    borderColor: brownTheme.secondary,
  },
  inputFocused: {
    borderColor: brownTheme.primary,
    backgroundColor: brownTheme.textPrimary,
    shadowColor: brownTheme.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  input: {
    height: 60,
    paddingHorizontal: 25,
    fontSize: 18,
    color: brownTheme.textDark,
    fontWeight: '600',
  },
  signUpButton: {
    backgroundColor: brownTheme.primary,
    paddingVertical: 25,
    paddingHorizontal: 40,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 6,
    shadowColor: brownTheme.primaryDark,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    marginTop: 10,
    alignSelf: 'center',
    minWidth: '80%',
  },
  buttonText: {
    color: brownTheme.textPrimary,
    fontSize: 20,
    fontWeight: '800',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 18,
    color: brownTheme.textSecondary,
    fontWeight: '600',
    textShadowColor: brownTheme.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  link: {
    fontSize: 18,
    color: brownTheme.textPrimary,
    fontWeight: '800',
    textDecorationLine: 'underline',
    textShadowColor: brownTheme.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});