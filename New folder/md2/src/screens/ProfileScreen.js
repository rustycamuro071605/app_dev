import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { brownTheme } from '../themes/brownTheme';

export default function ProfileScreen({ route, navigation }) {
  const { userEmail, userId } = route.params || {};
  
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

  const handleBack = () => {
    navigation.goBack();
  };

  const handleEditProfile = () => {
    // Handle profile editing
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
        {/* Header with Back Button and animations */}
        <Animatable.View 
          animation="fadeInDown"
          duration={800}
          style={styles.header}
        >
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>My Profile</Text>
        </Animatable.View>

        {/* Profile Card with bounce animation */}
        <Animatable.View 
          animation="bounceIn"
          delay={200}
          duration={800}
          style={styles.profileCard}
        >
          <View style={styles.avatarContainer}>
            <Text style={styles.avatar}>{userEmail ? userEmail.charAt(0).toUpperCase() : '👤'}</Text>
          </View>
          <Text style={styles.profileName}>
            {userEmail || 'User Name'}
          </Text>
          <Text style={styles.profileId}>
            @{userId || 'username'}
          </Text>
        </Animatable.View>

        {/* Profile Info with staggered animations */}
        <Animatable.View 
          animation="fadeInUp"
          delay={400}
          duration={800}
          style={styles.infoContainer}
        >
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>
              {userEmail ? `${userEmail}@myapp.com` : 'user@example.com'}
            </Text>
          </View>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Member Since</Text>
            <Text style={styles.infoValue}>January 2026</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Projects</Text>
            <Text style={styles.infoValue}>12 Active Projects</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Status</Text>
            <Text style={styles.infoValueActive}>Premium Member</Text>
          </View>
        </Animatable.View>

        {/* Action Buttons with slide animations */}
        <Animatable.View 
          animation="slideInUp"
          delay={600}
          duration={700}
          style={styles.actionsContainer}
        >
          <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingsButton}>
            <Text style={styles.settingsButtonText}>Account Settings</Text>
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  backButton: {
    padding: 10,
    marginRight: 15,
  },
  backIcon: {
    fontSize: 28,
    color: brownTheme.textPrimary,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: brownTheme.textPrimary,
    textShadowColor: brownTheme.shadowColor,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  profileCard: {
    backgroundColor: brownTheme.secondaryLight,
    borderRadius: 25,
    padding: 35,
    alignItems: 'center',
    marginBottom: 40,
    elevation: 12,
    shadowColor: brownTheme.shadowColor,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    borderWidth: 2,
    borderColor: brownTheme.secondary,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: brownTheme.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    borderWidth: 4,
    borderColor: brownTheme.secondary,
    elevation: 8,
    shadowColor: brownTheme.shadowColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  avatar: {
    fontSize: 60,
    color: brownTheme.textPrimary,
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 28,
    fontWeight: '800',
    color: brownTheme.textDark,
    marginBottom: 8,
  },
  profileId: {
    fontSize: 18,
    color: brownTheme.textSecondary,
    fontWeight: '600',
  },
  infoContainer: {
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
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: brownTheme.secondary,
  },
  infoLabel: {
    fontSize: 18,
    color: brownTheme.textSecondary,
    fontWeight: '600',
    flex: 1,
  },
  infoValue: {
    fontSize: 18,
    color: brownTheme.textDark,
    fontWeight: '600',
    flex: 1,
    textAlign: 'right',
  },
  infoValueActive: {
    fontSize: 18,
    color: brownTheme.primary,
    fontWeight: '800',
    flex: 1,
    textAlign: 'right',
  },
  actionsContainer: {
    gap: 20,
  },
  editButton: {
    backgroundColor: brownTheme.primary,
    padding: 22,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 6,
    shadowColor: brownTheme.primaryDark,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  editButtonText: {
    color: brownTheme.textPrimary,
    fontSize: 20,
    fontWeight: '800',
  },
  settingsButton: {
    backgroundColor: brownTheme.backgroundOverlay,
    padding: 22,
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
  settingsButtonText: {
    color: brownTheme.textPrimary,
    fontSize: 20,
    fontWeight: '800',
    textShadowColor: brownTheme.shadowColor,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});