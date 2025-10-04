import { Dispatch } from 'react'

export type SingUpViewProps = {
  children: React.ReactNode
  onPress: () => boolean | null
  isLoading: boolean
  values: any
  setValues: Dispatch<any>
  currentStep: number
  setCurrentStep: Dispatch<number>
}

export type SingUpModelViewProps = {
  onPress: () => boolean | null
  values: any
  setValues: Dispatch<any>
  currentStep: number
  setCurrentStep: Dispatch<number>
}

export type ManterUsuarioViewProps = {
  currentStep: number
  setCurrentStep: Dispatch<number>
  values: any
  setValues: Dispatch<any>
}
