import React, { useState } from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, TextInput, Alert, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AnimatedLogo from '../components/AnimatedLogo';
import ButtonAnimation from '../components/ButtonAnimation';
=======
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, SafeAreaView, StatusBar } from 'react-native';
>>>>>>> f86f157f907ed0329baa3f88316eda5926916f7b

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
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
<<<<<<< HEAD
        {/* Logo/Title */}
        <AnimatedLogo size={80} color="#8B4513" />
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Create your account</Text>
=======
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>📝</Text>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join us today</Text>
        </View>
>>>>>>> f86f157f907ed0329baa3f88316eda5926916f7b

        {/* Form Container */}
        <View style={styles.formContainer}>
          {/* Name Input */}
          <View style={[styles.inputContainer, isFocused.name && styles.inputFocused]}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
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
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              value={id}
              onChangeText={setId}
              onFocus={() => setIsFocused({...isFocused, id: true})}
              onBlur={() => setIsFocused({...isFocused, id: false})}
            />
          </View>

          {/* Password Input */}
          <View style={[styles.inputContainer, isFocused.password && styles.inputFocused]}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
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
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              onFocus={() => setIsFocused({...isFocused, confirmPassword: true})}
              onBlur={() => setIsFocused({...isFocused, confirmPassword: false})}
            />
          </View>

<<<<<<< HEAD
        {/* Sign Up Button */}
        <ButtonAnimation 
          title="Sign Up"
          backgroundColor="#8B4513"
          onPress={handleSignUp}
          style={styles.signUpButton}
        />
=======
          {/* Terms and Conditions */}
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By signing up, you agree to our Terms and Privacy Policy
            </Text>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity 
            style={styles.signUpButton} 
            onPress={handleSignUp}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
>>>>>>> f86f157f907ed0329baa3f88316eda5926916f7b

        {/* Login Link */}
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#f5e9dc',
=======
    backgroundColor: '#4a6fc0', // Consistent darker blue
>>>>>>> f86f157f907ed0329baa3f88316eda5926916f7b
  },
  content: {
    flex: 1,
    padding: 35,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 35,
  },
  logo: {
    fontSize: 70,
    textAlign: 'center',
<<<<<<< HEAD
    marginBottom: 15,
    color: '#8B4513',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#8B4513',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#A1887F',
  },
  input: {
    height: 55,
    borderColor: '#D7CCC8',
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 18,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
    shadowColor: '#8B4513',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  signUpButton: {
    backgroundColor: '#8B4513',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
    shadowColor: '#8B4513',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
=======
    marginBottom: 20,
    color: '#ffffff',
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 25,
    padding: 30,
    marginBottom: 30,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 25,
    borderWidth: 3,
    borderColor: '#e0e0e0',
  },
  inputFocused: {
    borderColor: '#4a6fc0',
    backgroundColor: '#ffffff',
    shadowColor: '#4a6fc0',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  input: {
    height: 60,
    paddingHorizontal: 25,
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
  termsContainer: {
    marginBottom: 30,
    paddingHorizontal: 8,
  },
  termsText: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    fontWeight: '500',
  },
  signUpButton: {
    backgroundColor: '#4a6fc0',
    padding: 22,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#4a6fc0',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
>>>>>>> f86f157f907ed0329baa3f88316eda5926916f7b
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '800',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
<<<<<<< HEAD
    fontSize: 16,
    color: '#5D4037',
  },
  link: {
    fontSize: 16,
    color: '#8B4513',
    fontWeight: 'bold',
=======
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  link: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '800',
    textDecorationLine: 'underline',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
>>>>>>> f86f157f907ed0329baa3f88316eda5926916f7b
  },
});