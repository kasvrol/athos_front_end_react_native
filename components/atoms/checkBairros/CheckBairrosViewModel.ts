import { bairros, CheckBairrosInterface } from '@/utils/interfaces/bairros'
import { useState } from 'react'

export const CheckBairrosViewModel = ({selectedBairros, setSelectedBairros}: CheckBairrosInterface) => {

  const toggleBairro = (bairroName: string) => {
    const isSelected = selectedBairros.includes(bairroName)

    if (isSelected) {
      setSelectedBairros((current: bairros[]) => current.filter(name => name !== bairroName))
    } else {
      setSelectedBairros((current: bairros[]) => [...current, bairroName])
    }
  }


  return {
    toggleBairro,
  }
}
