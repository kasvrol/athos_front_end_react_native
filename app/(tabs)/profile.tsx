// app/(tabs)/profile.tsx

import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Avatar, Title, Text, Button, List } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
    const router = useRouter();

    const handleLogout = () => {
        router.replace('/login');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileHeader}>
                <Avatar.Image size={80} source={{ uri: 'https://picsum.photos/200' }} />
                <Text style={styles.userName}>Nome do Usuário</Text>
                <Text>usuario@email.com</Text>
            </View>

            <View style={styles.menuContainer}>
                <List.Section>
                    <List.Item
                        title="Editar Perfil"
                        left={() => <List.Icon icon="account-edit-outline" />}
                        onPress={() => console.log('Editar Perfil')}
                    />
                    <List.Item
                        title="Meus Eventos"
                        left={() => <List.Icon icon="calendar-star" />}
                        onPress={() => console.log('Meus Eventos')}
                    />
                    <List.Item
                        title="Configurações"
                        left={() => <List.Icon icon="cog-outline" />}
                        onPress={() => console.log('Configurações')}
                    />
                </List.Section>
            </View>

            <Button
                mode="contained"
                onPress={handleLogout}
                style={styles.logoutButton}
                icon="logout"
            >
                Sair
            </Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileHeader: {
        alignItems: 'center',
        marginTop: 30,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    userName: {
        marginTop: 10,
        fontSize: 22,
    },
    menuContainer: {
        flex: 1,
        marginTop: 20,
    },
    logoutButton: {
        margin: 20,
    },
});