import React from 'react';
import { YStack, ListItem, Separator, Text } from 'tamagui';
import { useRouter } from 'expo-router';
import { History, Mail, Bell, User } from '@tamagui/lucide-icons'; 
import LayoutComponent from '@/components/atoms/layout'; 

export default function MenuScreen() {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        console.log(`Navegar para: ${path}`);
        
    };

    return (
        <LayoutComponent>
            <YStack flex={1} paddingTop="$4" space="$3">
                 <Text fontSize="$7" fontWeight="bold" color="$color10" marginBottom="$4" paddingHorizontal="$4">Menu</Text>

                <ListItem
                    hoverTheme
                    pressTheme
                    title="Histórico de Jogos"
                    icon={<History size="$1" color="$colorFocus" />} 
                    onPress={() => handleNavigation('/game-history')}
                    paddingVertical="$3"
                    paddingHorizontal="$4"
                    backgroundColor="$background" 
                    borderBottomWidth={1}
                    borderColor="$borderColor" 
                />

                <ListItem
                    hoverTheme
                    pressTheme
                    title="Convites"
                    icon={<Mail size="$1" color="$colorFocus" />}
                    onPress={() => handleNavigation('/invitations')} 
                    paddingVertical="$3"
                    paddingHorizontal="$4"
                    backgroundColor="$background"
                    borderBottomWidth={1}
                    borderColor="$borderColor"
                />

                <ListItem
                    hoverTheme
                    pressTheme
                    title="Notificações"
                    icon={<Bell size="$1" color="$colorFocus" />}
                    onPress={() => handleNavigation('/notifications')} 
                    paddingVertical="$3"
                    paddingHorizontal="$4"
                    backgroundColor="$background"
                    borderBottomWidth={1}
                    borderColor="$borderColor"
                />

                <ListItem
                    hoverTheme
                    pressTheme
                    title="Perfil"
                    icon={<User size="$1" color="$colorFocus" />}
                    onPress={() => handleNavigation('/profile')} 
                    paddingVertical="$3"
                    paddingHorizontal="$4"
                    backgroundColor="$background"
                    borderBottomWidth={1} 
                    borderColor="$borderColor"
                />

            </YStack>
        </LayoutComponent>
    );
}