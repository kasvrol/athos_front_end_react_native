import { Dispatch } from 'react'

export interface UserLogin {
  login: string
  password: string
}

export interface UserInformations {
  setIsLoading: Dispatch<boolean>
  setValues: Dispatch<any>
  values: any
  setIsButtonDisabled: Dispatch<boolean>
}
