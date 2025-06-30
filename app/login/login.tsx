// app/login.tsx
import React from 'react';
import { View, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import styles from './login.module.css';
import logo from '../assets/images/logo.png';

export default function LoginScreen() {
    const router = useRouter();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className={styles.container}
        >
            <View className={styles.innerContainer}>
                <Image source={logo} className={styles.logo} />
                <Text variant="headlineLarge" className={styles.title}>ATHOS</Text>

                <TextInput
                    label="E-mail"
                    className={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    label="Senha"
                    className={styles.input}
                    secureTextEntry
                />

                {/* Ao pressionar "Entrar", usamos `replace` para navegar para o grupo de abas. */}
                {/* `replace` impede que o usuário volte para o login com o botão "voltar". */}
                <Button mode="contained" onPress={() => router.replace('/home')} className={styles.button}>
                    Entrar
                </Button>

                {/* `push` navega para a tela de cadastro, permitindo voltar. */}
                <Button mode="contained-tonal" onPress={() => router.push('/signup')} className={styles.button}>
                    Cadastrar-se
                </Button>
            </View>
        </KeyboardAvoidingView>
    );
}