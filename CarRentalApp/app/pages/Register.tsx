import React, { useState } from "react";
import { TextInput, Button, StyleSheet } from "react-native";
import { ThemedText } from "../current_components/ThemedText";
import { ThemedView } from "../current_components/ThemedView";

export default function Register() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);

    const handleRegister = () => {
        console.log("Email:", email);
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
    };

    return (
        <ThemedView>
            <ThemedText type="title">Register</ThemedText>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
            />
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
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <Button title="Register" onPress={handleRegister} />
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