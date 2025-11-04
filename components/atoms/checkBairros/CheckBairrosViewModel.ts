import { bairros, CheckBairrosInterface } from '@/utils/interfaces/bairros'
import { useState } from 'react'

export const CheckBairrosViewModel = ({selectedBairros, setSelectedBairros}: CheckBairrosInterface) => {

 const toggleBairro = (bairroName: string) => {
    setSelectedBairros(currentSelected => {
      const isSelected = currentSelected.includes(bairroName)

      if (isSelected) {
        return currentSelected.filter(name => name !== bairroName)
      } else {
        return [...currentSelected, bairroName]
      }
    })
  }

  return {
    toggleBairro,
  }
}
