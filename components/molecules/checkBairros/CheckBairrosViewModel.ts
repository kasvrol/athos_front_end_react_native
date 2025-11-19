import { useLocalStore } from '@/store/LocalStore'
import { CheckBairrosInterface } from '@/utils/interfaces/bairros'
import { useEffect, useState } from 'react'

export const CheckBairrosViewModel = ({
  selectedBairros,
  setSelectedBairros,
}: CheckBairrosInterface) => {
  const { bairros: bairrosStore } = useLocalStore()
  const [listaBairros, setListaBairros] = useState<any[]>(bairrosStore || [])

  useEffect(() => {
     if (bairrosStore.length > 0) {
         setListaBairros(bairrosStore)
     }
  }, [bairrosStore])
  
  const toggleBairro = (bairroNome: string) => {
    if (selectedBairros.includes(bairroNome)) {
      setSelectedBairros(selectedBairros.filter(b => b !== bairroNome))
    } else {
      setSelectedBairros([...selectedBairros, bairroNome])
    }
  }

  return {
    listaBairros,    
    toggleBairro,
  }
}
