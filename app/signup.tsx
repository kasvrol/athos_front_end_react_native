// app/(auth)/signup.tsx

import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function SignupScreen() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [sports, setSports] = useState('');
    const [cep, setCep] = useState('');
    const [neighborhoods, setNeighborhoods] = useState('');

    const handleSignup = () => {
        // Lógica de cadastro
        // Navega de volta para o login após o sucesso
        router.back();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text variant="headlineMedium" style={styles.title}>Crie sua conta</Text>

            <TextInput label="Nome" value={name} onChangeText={setName} style={styles.input} />
            <TextInput label="CPF" value={cpf} onChangeText={setCpf} style={styles.input} keyboardType="numeric" />
            <TextInput label="E-mail" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" />
            <TextInput label="Senha" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
            <TextInput label="Confirmação de Senha" value={confirmPassword} onChangeText={setConfirmPassword} style={styles.input} secureTextEntry />

            {/* Para o protótipo, usaremos campos de texto. Em uma versão final, seriam seletores/dropdowns. */}
            <TextInput label="Esportes (separados por vírgula)" value={sports} onChangeText={setSports} style={styles.input} />
            <TextInput label="CEP" value={cep} onChangeText={setCep} style={styles.input} keyboardType="numeric" />
            <TextInput label="Bairros de interesse (separados por vírgula)" value={neighborhoods} onChangeText={setNeighborhoods} style={styles.input} />

            <Button mode="contained" onPress={handleSignup} style={styles.button}>
                Cadastrar
            </Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        marginBottom: 12,
    },
    button: {
        marginTop: 15,
    },
});