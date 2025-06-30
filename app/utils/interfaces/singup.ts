import { Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import { SignUpFormData } from "../zod-schemas/singup";

export interface ViewModelInterface {
  control: Control<SignUpFormData>;
  handleSubmit: UseFormHandleSubmit<SignUpFormData>;
  onSubmit: (data: SignUpFormData) => void;
  errors: FieldErrors<SignUpFormData>;
  isSubmitting: boolean;
}