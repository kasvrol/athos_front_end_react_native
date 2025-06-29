// app/(tabs)/home.tsx

import React, {useState} from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import {Text, Card, Title, Portal, Dialog, Paragraph, Button} from 'react-native-paper';
import { useRouter } from 'expo-router';

const logo = require('../../assets/images/logo.png');

export default function HomeScreen() {
    const router = useRouter();

    const [dialogVisible, setDialogVisible] = useState(false);

    const showDialog = () => setDialogVisible(true);
    const hideDialog = () => setDialogVisible(false);

    const recommendedEvents = [
        { id: 1, title: 'Futebol de Sábado', url: 'https://i.ibb.co/q3jqFLK8/futebol.jpg' },
        { id: 2, title: 'Vôlei de Praia', url: 'https://i.ibb.co/TqTQ86n9/volei.jpg'},
        { id: 3, title: 'Basquete Amistoso', url: 'https://i.ibb.co/6cf53LMt/basquete.jpg' },
    ];

    const menuItems = [
        { title: 'Equipes', icon: 'account-group-outline', action: showDialog }, // Mostra o diálogo
        { title: 'Eventos', icon: 'calendar-search', action: () => router.push('/events') }, // Mantém a navegação
        { title: 'Campeonatos', icon: 'trophy-outline', action: showDialog }, // Mostra o diálogo
    ];


    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
            </View>

            <View style={styles.section}>
                <Text variant="titleMedium">Eventos Recomendados</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carousel}>
                    {recommendedEvents.map(event => (
                        <Card key={event.id} style={styles.carouselCard}>
                            <Card.Content>
                                <Card.Cover source={{ uri: event.url }} />
                                <Text variant="labelLarge" style={styles.carouselTitle}>{event.title}</Text>
                            </Card.Content>
                        </Card>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.menuGrid}>
                {menuItems.map((item, index) => (
                    <Card key={index} style={styles.menuCard} onPress={item.action}>
                        <Card.Content style={styles.menuCardContent}>
                            <MaterialCommunityIcons name={item.icon as any} size={50} color="#003B73" />
                        </Card.Content>
                        <Text variant="labelMedium" style={styles.menuCardTitle}>{item.title}</Text>
                    </Card>
                ))}
            </View>

            <Portal>
                <Dialog visible={dialogVisible} onDismiss={hideDialog}>
                    <Dialog.Title>Funcionalidade Indisponível</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Função ainda não implementada no Protótipo.</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideDialog}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </ScrollView>
    );
}

import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        alignItems: 'center',
        marginTop: 50
    },
    logo: {
        width: 200,
        height: 200,
    },
    section: {
        marginTop: 20,
        paddingHorizontal: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    carousel: {
        paddingRight: 15,
    },
    carouselCard: {
        width: 300,
        margin: 5,
        textAlign: 'center',
    },
    carouselTitle: {
        textAlign: 'center',
        marginTop: 5
    },
    menuGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 15,
        marginTop: 10,
    },
    menuCard: {
        width: '30%',
        marginBottom: 15,
        height: 120
    },
    menuCardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: 10  ,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 3
    },
    menuCardTitle: {
        marginTop: 4,
    },
});