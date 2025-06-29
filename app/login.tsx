// app/login.tsx
import React from 'react';
import { View, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';

const logo = require('../assets/images/logo.png');

export default function LoginScreen() {
    const router = useRouter();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.innerContainer}>
                <Image source={logo} style={styles.logo} />
                <Text variant="headlineLarge" style={styles.title}>ATHOS</Text>

                <TextInput
                    label="E-mail"
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    label="Senha"
                    style={styles.input}
                    secureTextEntry
                />

                {/* Ao pressionar "Entrar", usamos `replace` para navegar para o grupo de abas. */}
                {/* `replace` impede que o usuário volte para o login com o botão "voltar". */}
                <Button mode="contained" onPress={() => router.replace('/home')} style={styles.button}>
                    Entrar
                </Button>

                {/* `push` navega para a tela de cadastro, permitindo voltar. */}
                <Button mode="contained-tonal" onPress={() => router.push('/signup')} style={styles.button}>
                    Cadastrar-se
                </Button>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 10,
    },
    title: {
        textAlign: 'center',
        marginBottom: 30,
        fontWeight: 'bold',
        color: '#003B73', // Azul escuro
        letterSpacing: 5,
    },
    input: {
        marginBottom: 15,
    },
    button: {
        marginTop: 10,
        paddingVertical: 4,
    },
});