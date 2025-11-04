import { Dispatch, SetStateAction } from "react"

export type Sport = {
  id: number | string 
  name: string
}

export interface CheckEsportesScreenProps {
  sportList: Sport[]
  selectedSports: string[]
  setSelectedSports: Dispatch<SetStateAction<string[]>>
}

export interface CheckEsportesViewModelProps {
  setSelectedSports: Dispatch<SetStateAction<string[]>>
}