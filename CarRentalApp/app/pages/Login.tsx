import React, { useState } from "react";
import { TextInput, Button, StyleSheet } from "react-native";
import { ThemedText } from "../current_components/ThemedText";
import { ThemedView } from "../current_components/ThemedView";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <ThemedView>
            <ThemedText type="title">Login</ThemedText>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});