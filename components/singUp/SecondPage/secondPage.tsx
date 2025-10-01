import React from 'react'
import { YStack, Checkbox, Text, XStack, Form, Label, Input } from 'tamagui'
import { ModelViewSecondPage } from './ModelViewSecondPage'

export default function Step2() {
  const { isLoading, bairros, handleCEP, cep, dataCEP } = ModelViewSecondPage()
  // const toggleSport = (sport: string) => {
  //   const newSports = currentValues.includes(sport)
  //     ? currentValues.filter(s => s !== sport)
  //     : [...currentValues, sport]
  //   setValue('selectedSports', newSports, { shouldValidate: true })
  // }

  // return (
  //   <YStack gap="$3">
  //     <Text color="$color" fontWeight="600" mb="$2">
  //       Escolha os esportes de seu interesse
  //     </Text>
  //     {sportsList.map(sport => (
  //       <XStack ai="center" gap="$3" key={sport}>
  //         <Checkbox
  //           id={sport}
  //           checked={currentValues.includes(sport)}
  //           onCheckedChange={() => toggleSport(sport)}
  //           size="$4"
  //         >
  //           <Checkbox.Indicator />
  //         </Checkbox>
  //         <Label htmlFor={sport}>{sport}</Label>
  //       </XStack>
  //     ))}
  //     {errors.selectedSports && (
  //       <Text color="$red10" fontSize={12} mt="$1">
  //         {errors.selectedSports.message}
  //       </Text>
  //     )}
  //   </YStack>
  // )

  return (
    <YStack flex={1} justifyContent="center" padding="$4" gap="$4" backgroundColor="$background">
      <Text color="$color" fontWeight="600" mb="$2">
        Digite seu CEP e buscaremos bairros da sua cidade
      </Text>
      <Form minWidth={300} gap="$3">
        <YStack gap="$1">
          <Label htmlFor="cep" color="$color">
            CEP:
          </Label>
          <Input
            id="cep"
            onChangeText={(text: string) => handleCEP(text)}
            value={cep ? cep : ''}
            size="$4"
            placeholder="00000000"
            borderColor="$borderColorFocus"
            autoComplete="postal-address"
            keyboardType="numeric"
          />
          {/* {showError('name') && (
              <Text color="$red10" fontSize="$2" textAlign="center" paddingHorizontal="$2">
                {erros.name}
              </Text>
            )} */}
        </YStack>
        <YStack gap="$1">
          <Label htmlFor="adress" color="$color">
            Logradouro:
          </Label>
          <Input id="adress" value={dataCEP?.logradouro} size="$4" placeholder="Rua" disabled />
        </YStack>
        <YStack gap="$1">
          <Label htmlFor="bairro" color="$color">
            Bairro:
          </Label>
          <Input id="bairro" value={dataCEP?.bairro} size="$4" placeholder="Bairro" disabled />
        </YStack>
        <YStack gap="$1">
          <Label htmlFor="city" color="$color">
            Bairro:
          </Label>
          <Input id="city" value={dataCEP?.localidade} size="$4" placeholder="Cidade" disabled />
        </YStack>
      </Form>
      <YStack gap="$1">
        {bairros.map(bairro => (
          <XStack ai="center" gap="$3" key={bairro.id}>
            <Checkbox
              id={bairro.id}
              //  checked={currentValues.includes(sport)}
              //  onCheckedChange={() => toggleSport(sport)}
              size="$4"
            >
              <Checkbox.Indicator />
            </Checkbox>
            <Label htmlFor={bairro.name}>{bairro.name}</Label>
          </XStack>
        ))}
        {/* {errors.selectedSports && (
         <Text color="$red10" fontSize={12} mt="$1">
           {errors.selectedSports.message}
         </Text>
       )} */}
      </YStack>
    </YStack>
  )
}
