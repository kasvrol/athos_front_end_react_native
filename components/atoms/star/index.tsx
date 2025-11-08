import { Star, StarFull } from '@tamagui/lucide-icons'
import { Button } from 'tamagui'

interface StarSelectedProps {
  isActive: boolean
  onClick: (index: number) => void
}

export const StarSelected = ({ isActive, onClick }: StarSelectedProps) => {
  return <Button onPress={() => onClick}>{isActive ? <StarFull /> : <Star />}</Button>
}
