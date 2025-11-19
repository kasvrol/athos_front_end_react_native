import { useNotificationStore } from '@/store/NotificationStore'
import { CheckCircle, AlertTriangle, Info, XCircle } from '@tamagui/lucide-icons'
import { YStack, Text, XStack, Button } from 'tamagui'

export const NotificationComponent = () => {
  const { visible, message, type, hideNotification } = useNotificationStore()

  if (!visible) return null

  const getConfig = () => {
    switch (type) {
      case 'success':
        return {
          bg: '$color9',
          text: '$background',
          icon: <CheckCircle color="$background" />,
          borderColor: '$color10'
        }
      case 'error':
        return {
          bg: '$backgroundError', 
          text: '$colorError',
          icon: <XCircle color="$colorError" />,
          borderColor: '$borderColorError'
        }
      case 'warning':
        return {
          bg: '#FFF8E1', 
          text: '#FF8F00',
          icon: <AlertTriangle color="#FF8F00" />,
          borderColor: '#FFD54F'
        }
      default: 
        return {
          bg: '$backgroundPress',
          text: '$color',
          icon: <Info color="$color" />,
          borderColor: '$borderColor'
        }
    }
  }

  const config = getConfig()

  return (
    <YStack
      position="absolute"
      top={60} 
      left={20}
      right={20}
      zIndex={9999}
      enterStyle={{ opacity: 0, y: -20, scale: 0.9 }}
      exitStyle={{ opacity: 0, y: -20, scale: 0.9 }}
      opacity={1}
      scale={1}
      y={0}
    >
      <XStack
        backgroundColor={config.bg}
        paddingVertical="$3"
        paddingHorizontal="$4"
        borderRadius="$4"
        borderWidth={1}
        borderColor={config.borderColor}
        alignItems="center"
        justifyContent="space-between"
        shadowColor="$shadowColor"
        shadowRadius={10}
        shadowOffset={{ width: 0, height: 4 }}
        elevation={5}
      >
        <XStack gap="$3" alignItems="center" flex={1}>
          {config.icon}
          <Text 
            color={config.text} 
            fontSize="$4" 
            fontWeight="600"
            flex={1}
            numberOfLines={2}
          >
            {message}
          </Text>
        </XStack>
        
        <Button 
          size="$2" 
          circular 
          chromeless 
          onPress={hideNotification}
          color={config.text}
          opacity={0.7}
        >
          ✕
        </Button>
      </XStack>
    </YStack>
  )
}