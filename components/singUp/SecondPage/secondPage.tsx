import React from 'react';
import { YStack, Checkbox, Text } from 'tamagui';
import { Control, Controller, FieldErrors, UseFormSetValue } from 'react-hook-form';
import { SignupFormData, sportsList } from '../SignupModel';

interface Props {
  control: Control<SignupFormData>;
  errors: FieldErrors<SignupFormData>;
  setValue: UseFormSetValue<SignupFormData>;
  currentValues: string[];
}

export default function Step3({ control, errors, setValue, currentValues }: Props) {
    
  const toggleSport = (sport: string) => {
    const newSports = currentValues.includes(sport)
      ? currentValues.filter(s => s !== sport)
      : [...currentValues, sport];
    setValue('selectedSports', newSports, { shouldValidate: true });
  };
    
  return (
    <YStack gap="$3">
      <Text color="$color" fontWeight="600" mb="$2">
        Escolha os esportes de seu interesse
      </Text>
      {sportsList.map(sport => (
          <XStack ai="center" gap="$3" key={sport}>
            <Checkbox
              id={sport}
              checked={currentValues.includes(sport)}
              onCheckedChange={() => toggleSport(sport)}
              size="$4"
            >
              <Checkbox.Indicator />
            </Checkbox>
            <Label htmlFor={sport}>{sport}</Label>
          </XStack>
      ))}
       {errors.selectedSports && <Text color="$red10" fontSize={12} mt="$1">{errors.selectedSports.message}</Text>}
    </YStack>
  );
}