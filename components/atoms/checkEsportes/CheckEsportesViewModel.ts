export const CheckEsportesViewModel = ({selectedSports, setSelectedSports}) => {
  const toggleSport = (sportName: string) => {
    const isSelected = selectedSports.includes(sportName)

    if (isSelected) {
      let filtrarEsportes = selectedSports.filter(name => name !== sportName)
      setSelectedSports(filtrarEsportes)
    } else {
      let selecionarEsporte = [...selectedSports, sportName]
      setSelectedSports(selecionarEsporte)
    }
  }

  return {
    toggleSport,
  }
}
