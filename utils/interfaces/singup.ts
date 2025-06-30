import { Dispatch, SetStateAction } from "react";
import { Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import { ItemType } from "react-native-dropdown-picker";
import { SignUpFormData } from "../zod-schemas/singup";

export interface ViewModelInterface {
  control: Control<SignUpFormData>;
  handleSubmit: UseFormHandleSubmit<SignUpFormData>;
  onSubmit: (data: SignUpFormData) => void;
  errors: FieldErrors<SignUpFormData>;
  isSubmitting: boolean;
  sportsOpen: boolean;
  setSportsOpen: Dispatch<SetStateAction<boolean>>;
  sportItems: ItemType<string>[]; 
  neighborhoodsOpen: boolean;
  setNeighborhoodsOpen: Dispatch<SetStateAction<boolean>>;
  neighborhoodItems: ItemType<string>[];
}