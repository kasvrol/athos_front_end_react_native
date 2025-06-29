// app/(tabs)/events.tsx

import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Text, Card, Title, Button, Modal, Portal, Provider, TextInput, RadioButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Dados de exemplo
const eventsData = [
    { id: 1, name: 'Futebol de Fim de Tarde', date: '30/06/2025', sport: 'Futebol', status: 'Aberto' },
    { id: 2, name: 'Vôlei na Lagoa', date: '05/07/2025', sport: 'Vôlei', status: 'Cheio' },
    { id: 3, name: 'Corrida Matinal', date: '12/07/2025', sport: 'Corrida', status: 'Aberto' },
    { id: 4, name: 'Basquete 3x3', date: '15/07/2025', sport: 'Basquete', status: 'Cancelado' },
];

export default function EventsScreen() {
    const [filterVisible, setFilterVisible] = useState(false);
    const [sortOrder, setSortOrder] = useState('date'); // 'date' ou 'name'

    const showFilterModal = () => setFilterVisible(true);
    const hideFilterModal = () => setFilterVisible(false);

    return (
        <Provider>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Title>Eventos</Title>
                    <Button icon="filter-variant" mode="contained-tonal" onPress={showFilterModal}>
                        Filtrar
                    </Button>
                </View>

                <ScrollView>
                    {eventsData.map(event => (
                        <Card key={event.id} style={styles.eventCard}>
                            <Card.Title
                                title={event.name}
                                subtitle={`${event.sport} - ${event.date}`}
                                left={(props) => <MaterialCommunityIcons {...props} name="calendar" size={24} />}
                            />
                            <Card.Content>
                                <Text style={{ alignSelf: 'flex-end' }} variant="bodyMedium">{event.status}</Text>
                            </Card.Content>
                        </Card>
                    ))}
                </ScrollView>

                <Portal>
                    <Modal visible={filterVisible} onDismiss={hideFilterModal} contentContainerStyle={styles.modalContainer}>
                        <Title>Filtro e Ordenação</Title>
                        <TextInput label="Data" style={styles.input} />
                        <TextInput label="Local" style={styles.input} />
                        <TextInput label="Status" style={styles.input} />
                        <TextInput label="Esporte" style={styles.input} />

                        <Title style={{marginTop: 20}}>Ordenar por:</Title>
                        <RadioButton.Group onValueChange={newValue => setSortOrder(newValue)} value={sortOrder}>
                            <View style={styles.radioItem}>
                                <RadioButton value="date" />
                                <Text>Data mais próxima</Text>
                            </View>
                            <View style={styles.radioItem}>
                                <RadioButton value="name" />
                                <Text>Nome do evento (ordem alfabética)</Text>
                            </View>
                        </RadioButton.Group>

                        <View style={styles.modalActions}>
                            <Button onPress={hideFilterModal} style={styles.modalButton}>Cancelar</Button>
                            <Button mode="contained" onPress={hideFilterModal} style={styles.modalButton}>Filtrar</Button>
                        </View>
                    </Modal>
                </Portal>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },
    eventCard: {
        marginHorizontal: 15,
        marginVertical: 8,
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 8,
    },
    input: {
        marginBottom: 10,
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    modalActions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20,
    },
    modalButton: {
        marginLeft: 10,
    },
});