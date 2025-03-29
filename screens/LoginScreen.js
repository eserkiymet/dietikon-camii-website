import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { storeUser, getUser } from '../storage/AuthStorage';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const storedUser = await getUser();
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      navigation.navigate('Main', { username });
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  const handleRegister = async () => {
    await storeUser(username, password);
    Alert.alert('Registration Successful');
  };

  return (
    <View style={{ padding: 30 }}>
      <View style={{ marginVertical: 100 }} />
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 10, padding: 8 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 10, padding: 8 }}
      />
      <Button title="Register" onPress={handleRegister} />
      <View style={{ marginVertical: 3 }} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
