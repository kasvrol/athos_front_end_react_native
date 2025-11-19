import { Dispatch, SetStateAction } from 'react'

export type SingUpViewProps = {
  children: React.ReactNode
  onPress: () => boolean | null | Promise<boolean | null | undefined | void>;
  isLoading: boolean
  values: any
  setValues: Dispatch<any>
  currentStep: number
  setCurrentStep: Dispatch<number>
}

export type SingUpModelViewProps = {
  onPress: () => any
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
  handleNext?:()=>void
}
