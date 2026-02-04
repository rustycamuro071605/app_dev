import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AnimatedLogo from '../components/AnimatedLogo';
import ButtonAnimation from '../components/ButtonAnimation';
=======
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
>>>>>>> f86f157f907ed0329baa3f88316eda5926916f7b

export default function ProfileScreen({ route, navigation }) {
  const { userEmail, userId } = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
<<<<<<< HEAD
        {/* Logo/Title */}
        <AnimatedLogo size={80} color="#8B4513" />
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>Your personal information</Text>
=======
        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatar}>👤</Text>
          </View>
          <Text style={styles.title}>My Profile</Text>
          <Text style={styles.subtitle}>Personal Information</Text>
        </View>
>>>>>>> f86f157f907ed0329baa3f88316eda5926916f7b

        {/* User Info Card */}
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>👤</Text>
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.label}>Full Name</Text>
              <Text style={styles.value}>{userEmail || 'John Doe'}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>🆔</Text>
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.label}>User ID</Text>
              <Text style={styles.value}>{userId || '12345'}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>✉️</Text>
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>{userEmail || 'john@example.com'}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>📅</Text>
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.label}>Member Since</Text>
              <Text style={styles.value}>January 2026</Text>
            </View>
          </View>
        </View>

<<<<<<< HEAD
        {/* Back Button */}
        <ButtonAnimation 
          title="Back to Home"
          backgroundColor="#8B4513"
          onPress={() => navigation.goBack()}
          style={styles.button}
        />
=======
        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.editButton]}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.backButton]}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#4a6fc0', // Consistent darker blue
>>>>>>> f86f157f907ed0329baa3f88316eda5926916f7b
  },
  content: {
    flex: 1,
    padding: 35,
    justifyContent: 'center',
  },
<<<<<<< HEAD
  logo: {
    fontSize: 70,
    textAlign: 'center',
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
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 25,
    marginBottom: 30,
    shadowColor: '#8B4513',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#D7CCC8',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5D4037',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#3E2723',
    paddingVertical: 5,
  },
  button: {
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#8B4513',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  backButton: {
    backgroundColor: '#8B4513',
=======
  header: {
    alignItems: 'center',
    marginBottom: 35,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  avatar: {
    fontSize: 60,
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
  infoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 25,
    padding: 30,
    marginBottom: 35,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#f0f2f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  icon: {
    fontSize: 24,
  },
  infoContent: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#666',
    marginBottom: 5,
  },
  value: {
    fontSize: 20,
    fontWeight: '800',
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    padding: 22,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    borderWidth: 2,
  },
  editButton: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.6)',
>>>>>>> f86f157f907ed0329baa3f88316eda5926916f7b
  },
  buttonText: {
    color: '#4a6fc0',
    fontSize: 20,
    fontWeight: '800',
  },
});