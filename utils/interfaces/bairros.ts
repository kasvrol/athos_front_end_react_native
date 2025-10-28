import { Dispatch } from "react"

export type bairros = {
    name: string
    id: number
}

export interface CheckBairrosInterface {
bairros?: bairros[]
  message?: string,
  selectedBairros: any[]
  setSelectedBairros: (current: bairros[]) => (string | bairros)[]
}