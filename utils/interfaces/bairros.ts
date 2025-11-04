import { Dispatch, SetStateAction } from 'react'

export type bairros = {
    name: string
    id: number
}

export interface CheckBairrosInterface {
  bairros?: bairros[]
  message?: string,
  selectedBairros: any[]
  setSelectedBairros: Dispatch<SetStateAction<string[]>>
}