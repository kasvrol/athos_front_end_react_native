import React from 'react';
import { Form, YStack, XStack, Button, Spinner, Text, Theme } from 'tamagui';
import { useSignupViewModel } from './SignupViewModel';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

export default function SignupView() {
  const { form, currentStep, isLoading, submitError, handleNext, handleBack } = useSignupViewModel();
  const { control, formState: { errors }, setValue, watch } = form;
  
  const selectedSports = watch('selectedSports'); // Observa o valor para o Step3

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 control={control} errors={errors} />;
      case 2:
        return <Step2 control={control} errors={errors} />;
      case 3:
        return <Step3 control={control} errors={errors} setValue={setValue} currentValues={selectedSports} />;
      default:
        return null;
    }
  };

  return (
    <Theme name="sporty">
      <YStack f={1} bg="$background" ai="center" jc="center" p="$4">
        <Form onSubmit={handleNext} w="100%" maxWidth={400} gap="$4">
          <Text fontSize={28} fontWeight="700" color="$primary" mb="$2" ta="center">
            Cadastro
          </Text>

          <Text fontSize={16} color="$colorMuted" mb="$4" textAlign="center">
            Passo {currentStep} de 3
          </Text>

          {renderStep()}
          
          {submitError && (
            <Text color="$danger" textAlign="center" mt="$3">
              {submitError}
            </Text>
          )}

          <XStack justifyContent="space-between" mt="$5">
            {currentStep > 1 ? (
              <Button size="$4" theme="alt2" onPress={handleBack} br="$2">
                Voltar
              </Button>
            ) : <YStack flex={1} />}

            <Form.Trigger asChild>
                <Button
                  size="$5"
                  br="$2"
                  disabled={isLoading}
                  onPress={handleNext}
                  flex={1}
                  ml={currentStep > 1 ? '$3' : 0}
                  icon={isLoading ? () => <Spinner color="white" /> : undefined}
                >
                  {currentStep === 3 ? 'Finalizar' : 'Próximo'}
                </Button>
            </Form.Trigger>
          </XStack>
        </Form>
      </YStack>
    </Theme>
  );
}