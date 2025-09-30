import React from 'react';
import { YStack, Input, Label, Text } from 'tamagui';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { SignupFormData } from '../SignupModel';

interface Props {
  control: Control<SignupFormData>;
  errors: FieldErrors<SignupFormData>;
}

export default function Step1({ control, errors }: Props) {
  return (
    <YStack gap="$3">
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <YStack>
            <Label htmlFor="name" color="$color">Nome</Label>
            <Input
              id="name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Seu nome completo"
            />
            {errors.name && <Text color="$red10" fontSize={12} mt="$1">{errors.name.message}</Text>}
          </YStack>
        )}
      />
      
      <Controller
        control={control}
        name="phone"
        render={({ field: { onChange, onBlur, value } }) => (
          <YStack>
            <Label htmlFor="phone" color="$color">Telefone</Label>
            <Input
              id="phone"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="(99) 99999-9999"
              keyboardType="phone-pad"
            />
            {errors.phone && <Text color="$red10" fontSize={12} mt="$1">{errors.phone.message}</Text>}
          </YStack>
        )}
      />
    </YStack>
  );
}