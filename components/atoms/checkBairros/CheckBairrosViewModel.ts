import { useState } from 'react'

export const CheckBairrosViewModel = ({selectedBairros, setSelectedBairros}) => {

  const toggleBairro = (bairroName: string) => {
    const isSelected = selectedBairros.includes(bairroName)

    if (isSelected) {
      setSelectedBairros(current => current.filter(name => name !== bairroName))
    } else {
      setSelectedBairros(current => [...current, bairroName])
    }
  }


  return {
    toggleBairro,
  }
}
