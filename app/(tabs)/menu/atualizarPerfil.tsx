import LayoutComponent from '@/components/atoms/layout'
import { useUserStore } from '@/store/UserStore'
import { useEffect, useState } from 'react'
import { Text, H2 } from 'tamagui'
import { router } from 'expo-router'
import EditStep1 from '@/components/templates/atualizarPerfil/EditStep1'
import EditStep2 from '@/components/templates/atualizarPerfil/EditStep2'
import EditStep3 from '@/components/templates/atualizarPerfil/EditStep3'

export default function AtualizarPerfil() {
  const user = useUserStore(state => state.user)
  const setUser = useUserStore(state => state.setUser)

  const [currentStep, setCurrentStep] = useState(1)
  const [values, setValues] = useState<any>(null)

  useEffect(() => {
    if (user) {
      setValues({
        ...user,
      })
    }
  }, [user])

  const handleFinalSave = () => {
    console.log("Salvando dados:", values);
    if(user) {
        setUser({ ...user, ...values });
    }
    alert("Perfil atualizado!");
    router.back();
  }

  if (!values) return <LayoutComponent><Text>Carregando...</Text></LayoutComponent>;

  return (
    <LayoutComponent>
      <H2 color="$color10" width={'100%'} textAlign="center" fontWeight="700" marginBottom="$4">
        Editar Perfil
      </H2>

      {currentStep === 1 && (
        <EditStep1
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          values={values}
          setValues={setValues}
        />
      )}

      {currentStep === 2 && (
        <EditStep2
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            values={values}
            setValues={setValues}
        />
      )}

      {currentStep === 3 && (
        <EditStep3
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            values={values}
            setValues={setValues}
            onFinalSubmit={handleFinalSave} 
        />
      )}
    </LayoutComponent>
  )
}