import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function HomeScreen({ route, navigation }) {
  const { userEmail, userId } = route.params || {};

  const handleLogout = () => {
    // Navigate back to Welcome screen
    navigation.replace('Welcome');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        {/* Header Section - More Prominent */}
        <View style={styles.headerSection}>
          <View style={styles.headerCard}>
            <Text style={styles.logo}>🏠</Text>
            <Text style={styles.title}>Dashboard</Text>
            <Text style={styles.welcomeMessage}>
              Welcome back, {userEmail || 'User'}!
            </Text>
          </View>
        </View>

        {/* Stats Section - Enhanced Visibility */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Your Overview</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <View style={styles.statIconContainer}>
                <Text style={styles.statIcon}>📋</Text>
              </View>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Projects</Text>
            </View>
            
            <View style={styles.statCard}>
              <View style={styles.statIconContainer}>
                <Text style={styles.statIcon}>✅</Text>
              </View>
              <Text style={styles.statNumber}>8</Text>
              <Text style={styles.statLabel}>Tasks</Text>
            </View>
            
            <View style={styles.statCard}>
              <View style={styles.statIconContainer}>
                <Text style={styles.statIcon}>👥</Text>
              </View>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Teams</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions - Clearer Buttons */}
        <View style={styles.actionsSection}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.profileButton]}
              onPress={() => navigation.navigate('Profile', { userEmail, userId })}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonIcon}>👤</Text>
              <Text style={styles.buttonText}>View Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.button, styles.settingsButton]}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonIcon}>⚙️</Text>
              <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.button, styles.logoutButton]}
              onPress={handleLogout}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonIcon}>🚪</Text>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footerText}>MyApp v1.0</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a6fc0',
  },
  content: {
    flex: 1,
    padding: 25,
    justifyContent: 'flex-start',
  },
  // Header Section
  headerSection: {
    marginBottom: 30,
    marginTop: 20,
  },
  headerCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 25,
    padding: 30,
    alignItems: 'center',
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  logo: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 15,
    color: '#4a6fc0',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
    color: '#333',
  },
  welcomeMessage: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    lineHeight: 26,
    fontWeight: '500',
  },
  
  // Section Titles
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  
  // Stats Section
  statsSection: {
    marginBottom: 35,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '31%',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  statIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f5ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  statIcon: {
    fontSize: 24,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: '#4a6fc0',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  
  // Actions Section
  actionsSection: {
    marginBottom: 25,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    borderWidth: 2,
  },
  buttonIcon: {
    fontSize: 24,
    marginRight: 15,
    width: 30,
    textAlign: 'center',
  },
  profileButton: {
    backgroundColor: '#ffffff',
    borderColor: '#4a6fc0',
  },
  settingsButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderColor: 'rgba(255, 255, 255, 0.7)',
  },
  logoutButton: {
    backgroundColor: '#ff5252',
    borderColor: '#ff5252',
  },
  buttonText: {
    color: '#4a6fc0',
    fontSize: 18,
    fontWeight: '700',
  },
  footerText: {
    position: 'absolute',
    bottom: 25,
    alignSelf: 'center',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 14,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});