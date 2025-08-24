import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (username === "user" && password === "password") {
      try {
        // เก็บ Token ลง AsyncStorage
        await AsyncStorage.setItem("token", "sampleToken");
        // ไปหน้า Profile
        navigation.navigate("Profile");
      } catch (error) {
        console.log("Error saving token:", error);
      }
    } else {
      Alert.alert("Login Failed", "Invalid username or password");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    marginBottom: 12,
    padding: 10,
    borderRadius: 5,
  },
});
