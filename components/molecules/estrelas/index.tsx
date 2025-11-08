import { StarSelected } from '@/components/atoms/star'
import { Dispatch, SetStateAction, useState } from 'react'
import { XStack } from 'tamagui'

interface StarsProps {
  setCount: Dispatch<SetStateAction<number>>
}

export const Stars = ({ setCount }: StarsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const arrayStars = new Array(5)

  const onClickStar = (index: number) => {
    setActiveIndex(prev => (prev === index ? -1 : index))
    setCount((prev: number) => (prev === index ? -1 : index))
  }

  return (
    <XStack>
      {arrayStars.map((_, index) => {
        return <StarSelected isActive={index <= activeIndex} onClick={onClickStar} />
      })}
    </XStack>
  )
}
