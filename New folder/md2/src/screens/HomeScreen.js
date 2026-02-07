import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { brownTheme } from '../themes/brownTheme';

export default function HomeScreen({ route, navigation }) {
  const { userEmail, userId } = route.params || {};
  
  // Animation refs
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const slideAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    // Entrance animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 6,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const handleLogout = () => {
    // Navigate back to Welcome screen
    navigation.replace('Welcome');
  };

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

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
              { translateY: slideAnim }
            ]
          }
        ]}
      >
        {/* Header with animation */}
        <Animatable.View 
          animation="fadeInDown"
          duration={1000}
          style={styles.header}
        >
          <Animatable.Text 
            animation="pulse" 
            iterationCount="infinite"
            direction="alternate"
            duration={2000}
            style={styles.logo}
          >
            ☕
          </Animatable.Text>
          <Text style={styles.title}>Welcome Home!</Text>
          <Text style={styles.subtitle}>
            {userEmail ? `Hello, ${userEmail}!` : 'Enjoy your experience'}
          </Text>
        </Animatable.View>

        {/* Stats Cards with staggered animations */}
        <Animatable.View 
          animation="fadeInUp"
          delay={300}
          duration={800}
          style={styles.statsContainer}
        >
          <Animatable.View 
            animation="bounceIn" 
            delay={400}
            duration={600}
            style={styles.statCard}
          >
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </Animatable.View>
          <Animatable.View 
            animation="bounceIn" 
            delay={500}
            duration={600}
            style={styles.statCard}
          >
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Tasks</Text>
          </Animatable.View>
          <Animatable.View 
            animation="bounceIn" 
            delay={600}
            duration={600}
            style={styles.statCard}
          >
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Hours</Text>
          </Animatable.View>
        </Animatable.View>

        {/* Quick Actions with hover effects */}
        <Animatable.View 
          animation="fadeInUp"
          delay={700}
          duration={800}
          style={styles.actionsContainer}
        >
          <TouchableOpacity style={styles.actionButton} onPress={handleProfile}>
            <Animatable.Text 
              animation="rubberBand" 
              iterationCount="infinite"
              delay={2000}
              duration={3000}
              style={styles.actionIcon}
            >
              👤
            </Animatable.Text>
            <Text style={styles.actionText}>My Profile</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIcon}>📊</Text>
            <Text style={styles.actionText}>Analytics</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIcon}>⚙️</Text>
            <Text style={styles.actionText}>Settings</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIcon}>💬</Text>
            <Text style={styles.actionText}>Support</Text>
          </TouchableOpacity>
        </Animatable.View>

        {/* Logout Button with pulse animation */}
        <Animatable.View 
          animation="fadeIn"
          delay={1000}
          duration={600}
        >
          <TouchableOpacity 
            style={styles.logoutButton} 
            onPress={handleLogout}
            activeOpacity={0.8}
          >
            <Animatable.Text 
              animation="pulse"
              iterationCount="infinite"
              duration={1500}
              style={styles.logoutText}
            >
              Logout
            </Animatable.Text>
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
    marginBottom: 50,
  },
  logo: {
    fontSize: 80,
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
    fontSize: 20,
    textAlign: 'center',
    color: brownTheme.textSecondary,
    fontWeight: '600',
    textShadowColor: brownTheme.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  statCard: {
    backgroundColor: brownTheme.secondaryLight,
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    width: '30%',
    elevation: 8,
    shadowColor: brownTheme.shadowColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderWidth: 2,
    borderColor: brownTheme.primaryLight,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: '800',
    color: brownTheme.primaryDark,
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 16,
    color: brownTheme.textDark,
    fontWeight: '600',
  },
  actionsContainer: {
    backgroundColor: brownTheme.secondaryLight,
    borderRadius: 25,
    padding: 25,
    marginBottom: 35,
    elevation: 10,
    shadowColor: brownTheme.shadowColor,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: brownTheme.secondary,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: brownTheme.secondary,
  },
  actionIcon: {
    fontSize: 28,
    marginRight: 20,
    width: 30,
    textAlign: 'center',
    color: brownTheme.primary,
  },
  actionText: {
    fontSize: 18,
    color: brownTheme.textDark,
    fontWeight: '600',
    flex: 1,
  },
  logoutButton: {
    backgroundColor: brownTheme.backgroundOverlay,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: brownTheme.secondary,
    elevation: 5,
    shadowColor: brownTheme.shadowColor,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  logoutText: {
    color: brownTheme.textPrimary,
    fontSize: 20,
    fontWeight: '800',
    textShadowColor: brownTheme.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});