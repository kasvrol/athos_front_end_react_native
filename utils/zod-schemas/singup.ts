import { z } from "zod";

export const singUpFormSchema = z.object({
  name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres."),
  cpf: z.string().length(11, "O CPF deve conter exatamente 11 dígitos."),
  email: z.string().email("Endereço de e-mail inválido."),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
  confirmPassword: z.string(),
  cep: z.string().length(8, "O CEP deve conter exatamente 8 dígitos."),
  sports: z.array(z.string()).min(1, "Selecione pelo menos um esporte."),
  neighborhoods: z.array(z.string()).min(1, "Selecione pelo menos um bairro."),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem.",
  path: ["confirmPassword"],
});

export type SignUpFormData = z.infer<typeof singUpFormSchema>;