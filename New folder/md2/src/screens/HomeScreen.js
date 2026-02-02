import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function HomeScreen({ route, navigation }) {
  const { userEmail, userId } = route.params || {};

  const handleLogout = () => {
    // Navigate back to Welcome screen
    navigation.replace('Welcome');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Welcome Message */}
        <Text style={styles.logo}>🏠</Text>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.welcomeMessage}>
          Welcome, {userEmail || 'User'}!
        </Text>

        {/* View Profile Button */}
        <TouchableOpacity 
          style={[styles.button, styles.profileButton]}
          onPress={() => navigation.navigate('Profile', { userEmail, userId })}
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity 
          style={[styles.button, styles.logoutButton]}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>Logout</Text>
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
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1e88e5',
  },
  welcomeMessage: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
    lineHeight: 28,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  profileButton: {
    backgroundColor: '#1e88e5',
  },
  logoutButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});