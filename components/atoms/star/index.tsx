// components/atoms/star/index.tsx
import { Star, StarFull } from '@tamagui/lucide-icons'
import { Button } from 'tamagui'

interface StarSelectedProps {
  isActive: boolean
  onPress: () => void
}

export const StarSelected = ({ isActive, onPress }: StarSelectedProps) => {
  return (
    <Button onPress={onPress} chromeless unstyled padding="$2" pressStyle={{ opacity: 0.7 }}>
      {isActive ? <StarFull color="$color10" size={35} /> : <Star color="$color5" size={35} />}
    </Button>
  )
}
