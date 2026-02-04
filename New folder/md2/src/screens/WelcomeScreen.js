import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AnimatedLogo from '../components/AnimatedLogo';
import ButtonAnimation from '../components/ButtonAnimation';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* App Logo/Title */}
        <View style={styles.logoContainer}>
          <AnimatedLogo size={80} color="#8B4513" />
          <Text style={styles.appTitle}>MyApp</Text>
          <Text style={styles.tagline}>Warm & Cozy Experience</Text>
        </View>

        {/* Welcome Message */}
        <Text style={styles.welcomeText}>Welcome to MyApp!</Text>
        
        {/* Login Button */}
        <ButtonAnimation 
          title="Login"
          backgroundColor="#8B4513"
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
        />

        {/* Sign Up Button */}
        <ButtonAnimation 
          title="Sign Up"
          backgroundColor="#A1887F"
          onPress={() => navigation.navigate('SignUp')}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5e9dc',
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
  },
  welcomeText: {
    fontSize: 20,
    textAlign: 'center',
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});