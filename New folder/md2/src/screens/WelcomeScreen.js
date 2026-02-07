import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { brownTheme } from '../themes/brownTheme';

export default function WelcomeScreen({ navigation }) {
  // Animation refs
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const slideAnim = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    // Entrance animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={brownTheme.background} />
      <Animated.View 
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [
              { scale: scaleAnim },
              { translateX: slideAnim }
            ]
          }
        ]}
      >
        {/* App Logo/Title with animations */}
        <Animatable.View 
          animation="fadeInDown"
          duration={1200}
          style={styles.logoContainer}
        >
          <Animatable.View 
            animation="bounceIn" 
            duration={1500}
            style={styles.iconCircle}
          >
            <Animatable.Text 
              animation="rotate" 
              iterationCount="infinite"
              direction="alternate"
              duration={4000}
              style={styles.logo}
            >
              ☕
            </Animatable.Text>
          </Animatable.View>
          <Text style={styles.appTitle}>MyApp</Text>
          <Text style={styles.slogan}>Your Digital Experience</Text>
        </Animatable.View>

        {/* Welcome Message with fade animation */}
        <Animatable.View 
          animation="fadeInUp"
          delay={500}
          duration={800}
          style={styles.messageCard}
        >
          <Text style={styles.welcomeText}>Welcome to MyApp!</Text>
          <Text style={styles.subText}>Sign in to continue your journey</Text>
        </Animatable.View>
        
        {/* Login Button with bounce animation */}
        <Animatable.View 
          animation="bounceIn" 
          delay={800}
          duration={600}
        >
          <TouchableOpacity 
            style={[styles.button, styles.loginButton]}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Login')}
          >
            <Animatable.Text 
              animation="pulse"
              iterationCount="infinite"
              duration={2000}
              style={styles.buttonText}
            >
              Login
            </Animatable.Text>
          </TouchableOpacity>
        </Animatable.View>

        {/* Sign Up Button with slide animation */}
        <Animatable.View 
          animation="slideInUp"
          delay={1000}
          duration={700}
        >
          <TouchableOpacity 
            style={[styles.button, styles.signUpButton]}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </Animatable.View>

        {/* Footer with fade animation */}
        <Animatable.Text 
          animation="fadeIn"
          delay={1200}
          duration={600}
          style={styles.footerText}
        >
          © 2026 MyApp. All rights reserved.
        </Animatable.Text>
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
    backgroundColor: brownTheme.backgroundOverlay,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    borderWidth: 3,
    borderColor: brownTheme.secondary,
    elevation: 8,
    shadowColor: brownTheme.shadowColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  logo: {
    fontSize: 60,
    textAlign: 'center',
    color: brownTheme.secondary,
  },
  appTitle: {
    fontSize: 42,
    fontWeight: '800',
    color: brownTheme.textPrimary,
    marginBottom: 12,
    textShadowColor: brownTheme.shadowColor,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  slogan: {
    fontSize: 20,
    color: brownTheme.textSecondary,
    fontWeight: '600',
    textShadowColor: brownTheme.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  messageCard: {
    backgroundColor: brownTheme.backgroundOverlay,
    borderRadius: 25,
    padding: 30,
    marginBottom: 45,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: brownTheme.secondary,
    elevation: 6,
    shadowColor: brownTheme.shadowColor,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    color: brownTheme.textPrimary,
    marginBottom: 15,
    textShadowColor: brownTheme.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subText: {
    fontSize: 18,
    textAlign: 'center',
    color: brownTheme.textSecondary,
    fontWeight: '500',
    lineHeight: 26,
  },
  button: {
    paddingVertical: 25,
    paddingHorizontal: 40,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 25,
    elevation: 8,
    shadowColor: brownTheme.shadowColor,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderWidth: 2,
    alignSelf: 'center',
    minWidth: '85%',
  },
  loginButton: {
    backgroundColor: brownTheme.secondary,
    borderColor: brownTheme.secondary,
  },
  signUpButton: {
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: brownTheme.secondary,
  },
  buttonText: {
    color: brownTheme.primaryDark,
    fontSize: 20,
    fontWeight: '800',
  },
  signUpText: {
    color: brownTheme.textPrimary,
    fontSize: 20,
    fontWeight: '800',
  },
  footerText: {
    position: 'absolute',
    bottom: 35,
    color: brownTheme.textSecondary,
    fontSize: 14,
    fontWeight: '600',
    textShadowColor: brownTheme.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});