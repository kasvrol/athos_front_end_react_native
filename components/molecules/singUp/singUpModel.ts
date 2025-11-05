import { z } from 'zod'

// A lista de esportes continua a mesma
export const sportsList = [
  'Bocha',
  'Corrida de Rua',
  'Basquete',
  'Futebol',
  'Natação',
  'Vôlei',
] as const

// 1. Defina o schema base como um ZodObject puro
const baseSignupSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres.'),
  phone: z.string().min(10, 'Digite um número de telefone válido.'),
  email: z.string().email('Digite um e-mail válido.'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres.'),
  confirmPassword: z.string(),
  selectedSports: z.array(z.enum(sportsList)).min(1, 'Escolha pelo menos um esporte.'),
})

// 2. Use .pick() no schema base, que é um ZodObject e possui o método
export const step1Schema = baseSignupSchema.pick({ name: true, phone: true })
export const step2Schema = baseSignupSchema.pick({
  email: true,
  password: true,
  confirmPassword: true,
})
export const step3Schema = baseSignupSchema.pick({ selectedSports: true })

// 3. Agora, crie o schema final aplicando o .refine() ao schema base.
// Este será usado para a validação completa do formulário.
export const signupSchema = baseSignupSchema.refine(
  data => data.password === data.confirmPassword,
  {
    message: 'As senhas não coincidem.',
    path: ['confirmPassword'], // Atribui o erro ao campo de confirmação
  },
)

// A inferência de tipo continua funcionando perfeitamente
export type SignupFormData = z.infer<typeof signupSchema>
