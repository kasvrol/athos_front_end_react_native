// components/molecules/estrelas/index.tsx
import { StarSelected } from '@/components/atoms/star'
import { Dispatch, SetStateAction, useState } from 'react'
import { XStack } from 'tamagui'

interface StarsProps {
  setCount: Dispatch<SetStateAction<number>>
}

export const Stars = ({ setCount }: StarsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1)

  // Array de 5 posições preenchido
  const arrayStars = Array.from({ length: 5 })

  const onClickStar = (index: number) => {
    // Se clicar na mesma estrela já ativa, desmarca (volta para -1). Se não, marca até o índice.
    const newValue = activeIndex === index ? -1 : index
    setActiveIndex(newValue)

    // Define a nota (index 0 = nota 1, etc)
    setCount(newValue + 1)
  }

  return (
    <XStack gap="$2" justifyContent="center" paddingVertical="$4">
      {arrayStars.map((_, index) => (
        <StarSelected
          key={index}
          isActive={index <= activeIndex}
          onPress={() => onClickStar(index)}
        />
      ))}
    </XStack>
  )
}
