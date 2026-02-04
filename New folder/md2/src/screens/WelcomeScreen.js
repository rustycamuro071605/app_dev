import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AnimatedLogo from '../components/AnimatedLogo';
import ButtonAnimation from '../components/ButtonAnimation';
=======
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
>>>>>>> f86f157f907ed0329baa3f88316eda5926916f7b

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        {/* App Logo/Title */}
        <View style={styles.logoContainer}>
<<<<<<< HEAD
          <AnimatedLogo size={80} color="#8B4513" />
          <Text style={styles.appTitle}>MyApp</Text>
          <Text style={styles.tagline}>Warm & Cozy Experience</Text>
=======
          <View style={styles.iconCircle}>
            <Text style={styles.logo}>📱</Text>
          </View>
          <Text style={styles.appTitle}>MyApp</Text>
          <Text style={styles.slogan}>Your Digital Experience</Text>
>>>>>>> f86f157f907ed0329baa3f88316eda5926916f7b
        </View>

        {/* Welcome Message */}
        <View style={styles.messageCard}>
          <Text style={styles.welcomeText}>Welcome to MyApp!</Text>
          <Text style={styles.subText}>Sign in to continue your journey</Text>
        </View>
        
        {/* Login Button */}
        <ButtonAnimation 
          title="Login"
          backgroundColor="#8B4513"
          onPress={() => navigation.navigate('Login')}
<<<<<<< HEAD
          style={styles.button}
        />
=======
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
>>>>>>> f86f157f907ed0329baa3f88316eda5926916f7b

        {/* Sign Up Button */}
        <ButtonAnimation 
          title="Sign Up"
          backgroundColor="#A1887F"
          onPress={() => navigation.navigate('SignUp')}
<<<<<<< HEAD
          style={styles.button}
        />
=======
          activeOpacity={0.8}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footerText}>© 2026 MyApp. All rights reserved.</Text>
>>>>>>> f86f157f907ed0329baa3f88316eda5926916f7b
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
    backgroundColor: '#4a6fc0', // Darker, more visible blue
>>>>>>> f86f157f907ed0329baa3f88316eda5926916f7b
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
    width: '100%',
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  logo: {
<<<<<<< HEAD
    fontSize: 70,
    marginBottom: 10,
    color: '#8B4513',
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#A1887F',
    fontStyle: 'italic',
    textAlign: 'center',
=======
    fontSize: 60,
    textAlign: 'center',
  },
  appTitle: {
    fontSize: 42,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  slogan: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  messageCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 25,
    padding: 30,
    marginBottom: 45,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
>>>>>>> f86f157f907ed0329baa3f88316eda5926916f7b
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
<<<<<<< HEAD
    marginBottom: 40,
    color: '#5D4037',
    lineHeight: 28,
  },
  button: {
    width: '100%',
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
  loginButton: {
    backgroundColor: '#8B4513',
  },
  signUpButton: {
    backgroundColor: '#A1887F',
=======
    color: '#ffffff',
    marginBottom: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '500',
    lineHeight: 26,
  },
  button: {
    width: '100%',
    padding: 22,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 25,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderWidth: 2,
  },
  loginButton: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  signUpButton: {
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: '#ffffff',
>>>>>>> f86f157f907ed0329baa3f88316eda5926916f7b
  },
  buttonText: {
    color: '#4a6fc0',
    fontSize: 20,
    fontWeight: '800',
  },
  signUpText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '800',
  },
  footerText: {
    position: 'absolute',
    bottom: 35,
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 14,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});