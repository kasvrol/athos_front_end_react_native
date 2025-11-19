import { Dispatch, SetStateAction } from 'react'

export type bairros = {
  name: string
  id: number
}

export interface CheckBairrosInterface {
  bairros?: bairros[]
  selectedBairros: any[]
  setSelectedBairros: Dispatch<SetStateAction<string[]>>
}
