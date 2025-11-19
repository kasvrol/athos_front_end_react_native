import { useSportStore } from '@/store/SportStore'
import { CheckEsportesViewModelProps } from '@/utils/interfaces/esportes'
import { useEffect, useState } from 'react'

export const CheckEsportesViewModel = ({ setSelectedSports }: CheckEsportesViewModelProps) => {
  const { sports: sportsFromStore } = useSportStore()
  const [listaEsportes, setListaEsportes] = useState<any[]>(sportsFromStore || [])

  useEffect(() => {
    if (sportsFromStore.length > 0) {
      setListaEsportes(sportsFromStore)
    }
  }, [sportsFromStore])

  const toggleSport = (sportName: string) => {
    setSelectedSports(currentSports => {
      const isSelected = currentSports.includes(sportName)
      if (isSelected) {
        return currentSports.filter(name => name !== sportName)
      } else {
        return [...currentSports, sportName]
      }
    })
  }

  return {
    toggleSport,
    listaEsportes
  }
}
