import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function ProfileScreen({ route, navigation }) {
  const { userEmail, userId } = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo/Title */}
        <Text style={styles.logo}>👤</Text>
        <Text style={styles.title}>Profile</Text>

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
        <TouchableOpacity 
          style={[styles.button, styles.backButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
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
    marginBottom: 30,
    color: '#1e88e5',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 5,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#757575',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});