import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AnimatedLogo from '../components/AnimatedLogo';
import ButtonAnimation from '../components/ButtonAnimation';

export default function ProfileScreen({ route, navigation }) {
  const { userEmail, userId } = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo/Title */}
        <AnimatedLogo size={80} color="#8B4513" />
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>Your personal information</Text>

        {/* User Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{userEmail || 'John Doe'}</Text>

          <Text style={styles.label}>ID:</Text>
          <Text style={styles.value}>{userId || '12345'}</Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{userEmail || 'john@example.com'}</Text>
        </View>

        {/* Back Button */}
        <ButtonAnimation 
          title="Back to Home"
          backgroundColor="#8B4513"
          onPress={() => navigation.goBack()}
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});