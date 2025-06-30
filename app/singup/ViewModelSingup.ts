import { useRouter } from "expo-router";
import {
	SignUpFormData,
	singUpFormSchema,
} from "@/utils/zod-schemas/singup";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ViewModelInterface } from "@/utils/interfaces/singup";
import { useState } from "react";

export const ViewModelSingup = (): ViewModelInterface => {
	const router = useRouter();
	const {
		control, 
		handleSubmit,
		formState: { errors, isSubmitting }, 
	} = useForm<SignUpFormData>({
		resolver: zodResolver(singUpFormSchema),
		defaultValues: {
			name: "",
			cpf: "",
			email: "",
			password: "",
			confirmPassword: "",
			cep: "",
			sports: [],
			neighborhoods: [],
		},
	});
	const [sportsOpen, setSportsOpen] = useState(false);
	const [neighborhoodsOpen, setNeighborhoodsOpen] = useState(false);
	const sportItems = [
		{ label: "Futebol", value: "futebol" },
		{ label: "Vôlei", value: "volei" },
		{ label: "Basquete", value: "basquete" },
		{ label: "Tênis", value: "tenis" },
	]

	const neighborhoodItems = [
		{ label: "Água Verde", value: "agua-verde" },
		{ label: "Batel", value: "batel" },
		{ label: "Centro", value: "centro" },
		{ label: "Rebouças", value: "reboucas" },
	]

	const onSubmit = (data: SignUpFormData) => {
		console.log("Dados do formulário válidos:", data);

		// Aqui você faria a chamada para a sua API de cadastro
		// Ex: await api.post('/signup', data);

		// Após o sucesso, navega para outra tela
		console.log("Cadastro realizado com sucesso!");
		router.back();
	};

	return {
		control,
		handleSubmit,
		onSubmit,
		errors,
    isSubmitting,
    sportItems,
		neighborhoodItems,
		sportsOpen,
		setSportsOpen,
		neighborhoodsOpen,
		setNeighborhoodsOpen,
	};
};
