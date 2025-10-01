import { SignUpStep1FormData, singUpStep1FormSchema } from '@/utils/zod-schemas/singup'
import { useState } from 'react'

const userDataObj = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const ModelViewFirstPage = () => {
  const [formValues, setFormValues] = useState(userDataObj)
  const [erros, setErros] = useState(userDataObj)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({})

  const handleChange = (name: string, value: string) => {
    const updatedForm = { ...formValues, [name]: value }
    setFormValues(updatedForm)
    const result = singUpStep1FormSchema.safeParse(updatedForm)
    if (!result.success) {
      const formatted: any = result.error.format()
      const errors: Record<string, string> = {}
      for (const key in formatted) {
        if (formatted[key]?._errors?.length) {
          errors[key] = formatted[key]._errors[0]
        }
      }

      console.log(errors)
      //setErros(errors)
    } else {
      console.log('Dados válidos:', result.data)
    }
  }

  const handleBlur = (name: keyof SignUpStep1FormData) => {
    setTouchedFields(prev => ({ ...prev, [name]: true }))
  }

  const submitForm = () => {
    console.log(formValues)
    //aplicar use context
  }

  const showError = (field: keyof SignUpStep1FormData) => touchedFields[field] && erros[field]

  return {
    erros,
    showPassword,
    showConfirmPassword,
    formValues,
    showError,
    handleBlur,
    setShowPassword,
    setShowConfirmPassword,
    handleChange,
    submitForm,
  }
}
