import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AnimatedLogo from '../components/AnimatedLogo';
import ButtonAnimation from '../components/ButtonAnimation';

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
        <AnimatedLogo size={80} color="#8B4513" />
        <Text style={styles.title}>Home</Text>
        <Text style={styles.welcomeMessage}>
          Welcome, {userEmail || 'User'}!
        </Text>
        <Text style={styles.subtitle}>Enjoy your cozy space</Text>

        {/* View Profile Button */}
        <ButtonAnimation 
          title="View Profile"
          backgroundColor="#8B4513"
          onPress={() => navigation.navigate('Profile', { userEmail, userId })}
          style={styles.button}
        />

        {/* Logout Button */}
        <ButtonAnimation 
          title="Logout"
          backgroundColor="#A1887F"
          onPress={handleLogout}
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
    padding: 20,
    justifyContent: 'center',
  },
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
    marginBottom: 15,
    color: '#8B4513',
  },
  welcomeMessage: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 15,
    color: '#5D4037',
    lineHeight: 28,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    color: '#A1887F',
    fontStyle: 'italic',
  },
  button: {
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
  profileButton: {
    backgroundColor: '#8B4513',
  },
  logoutButton: {
    backgroundColor: '#A1887F',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});