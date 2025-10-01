import { z } from 'zod'

export const singUpStep1FormSchema = z
  .object({
    name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres.'),
    email: z.string().email('Endereço de e-mail inválido.'),
    password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres.'),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem.',
    path: ['confirmPassword'],
  })

export type SignUpStep1FormData = z.infer<typeof singUpStep1FormSchema>

export const singUpStep2FormSchema = z.object({
  cep: z.string().length(8, 'O CEP deve conter exatamente 8 dígitos.'),
  neighborhoods: z.array(z.string()).min(1, 'Selecione pelo menos um bairro.'),
})

export type SignUpStep2FormData = z.infer<typeof singUpStep2FormSchema>

export const singUpStep3FormSchema = z.object({
  sports: z.array(z.string()).min(1, 'Selecione pelo menos um esporte.'),
})

export type SignUpStep3FormData = z.infer<typeof singUpStep3FormSchema>
