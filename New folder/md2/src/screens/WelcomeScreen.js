import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* App Logo/Title */}
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>📱</Text>
          <Text style={styles.appTitle}>MyApp</Text>
        </View>

        {/* Welcome Message */}
        <Text style={styles.welcomeText}>Welcome to MyApp!</Text>
        
        {/* Login Button */}
        <TouchableOpacity 
          style={[styles.button, styles.loginButton]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Button */}
        <TouchableOpacity 
          style={[styles.button, styles.signUpButton]}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f9',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    fontSize: 60,
    marginBottom: 10,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e88e5',
  },
  welcomeText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
    lineHeight: 28,
  },
  button: {
    width: '100%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#1e88e5',
  },
  signUpButton: {
    backgroundColor: '#4caf50',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});