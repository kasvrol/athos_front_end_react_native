import { CheckEsportesViewModelProps } from "@/utils/interfaces/esportes"

export const CheckEsportesViewModel = ({ setSelectedSports }: CheckEsportesViewModelProps) => {

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
  }
}
