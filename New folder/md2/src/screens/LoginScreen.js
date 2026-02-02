import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Basic validation - check if fields are not empty
    if (!email.trim() || !password.trim()) {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return;
    }

    // In a real app, you would authenticate with backend here
    // For this demo, we'll just navigate to home
    navigation.navigate('Home', { userEmail: email });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo/Title */}
        <Text style={styles.logo}>🔐</Text>
        <Text style={styles.title}>Login</Text>

        {/* Email/Username Input */}
        <TextInput
          style={styles.input}
          placeholder="Email or Username"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#1e88e5',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  linkText: {
    fontSize: 16,
    color: '#666',
  },
  link: {
    fontSize: 16,
    color: '#1e88e5',
    fontWeight: 'bold',
  },
});