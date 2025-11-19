import { Dispatch } from 'react'

export interface UserLogin {
  email: string
  password: string
}

export interface UserInformations {
  setIsLoading: Dispatch<boolean>
  setValues: Dispatch<any>
  values: any
  setIsButtonDisabled: Dispatch<boolean>
}

export interface UserData {
  id: string
  nome: string
  email: string
  ibgeCode: string
}
