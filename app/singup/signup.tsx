import { ScrollView, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import styles from "./singup.module..css";
import { ViewModelSingup } from "./ViewModelSingup";
import { Controller } from "react-hook-form";
import DropDownPicker from "react-native-dropdown-picker";

export default function SignupScreen() {
	const {
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
	} = ViewModelSingup();

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text variant="headlineMedium" style={styles.title}>
				Crie sua conta
			</Text>
			<View style={styles.formContainer}>
				<Controller
					control={control}
					name="name"
					render={({
						field: {
							onChange,
							onBlur,
							value,
						},
					}) => (
						<TextInput
							label="Nome"
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							style={styles.input}
							error={!!errors.name}
						/>
					)}
				/>
				{errors.name && (
					<Text style={styles.errorText}>
						{errors.name.message}
					</Text>
				)}

				<Controller
					control={control}
					name="cpf"
					render={({
						field: {
							onChange,
							onBlur,
							value,
						},
					}) => (
						<TextInput
							label="CPF"
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							style={styles.input}
							keyboardType="numeric"
							maxLength={11}
							error={!!errors.cpf}
						/>
					)}
				/>
				{errors.cpf && (
					<Text style={styles.errorText}>
						{errors.cpf.message}
					</Text>
				)}

				<Controller
					control={control}
					name="email"
					render={({
						field: {
							onChange,
							onBlur,
							value,
						},
					}) => (
						<TextInput
							label="E-mail"
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							style={styles.input}
							keyboardType="email-address"
							autoCapitalize="none"
							error={!!errors.email}
						/>
					)}
				/>
				{errors.email && (
					<Text style={styles.errorText}>
						{errors.email.message}
					</Text>
				)}

				<Controller
					control={control}
					name="password"
					render={({
						field: {
							onChange,
							onBlur,
							value,
						},
					}) => (
						<TextInput
							label="Senha"
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							style={styles.input}
							secureTextEntry
							error={
								!!errors.password
							}
						/>
					)}
				/>
				{errors.password && (
					<Text style={styles.errorText}>
						{errors.password.message}
					</Text>
				)}

				<Controller
					control={control}
					name="confirmPassword"
					render={({
						field: {
							onChange,
							onBlur,
							value,
						},
					}) => (
						<TextInput
							label="Confirmação de Senha"
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							style={styles.input}
							secureTextEntry
							error={
								!!errors.confirmPassword
							}
						/>
					)}
				/>
				{errors.confirmPassword && (
					<Text style={styles.errorText}>
						{errors.confirmPassword.message}
					</Text>
				)}
				<View style={{ zIndex: 2000 }}>
					<Controller
						control={control}
						name="sports"
						render={({
							field: {
								onChange,
								value,
							},
						}) => (
							<DropDownPicker
								open={
									sportsOpen
								}
								value={value}
								items={
									sportItems
								}
								setOpen={
									setSportsOpen
								}
								setValue={
									onChange
								}
								multiple={true}
								mode="BADGE"
								placeholder="Selecione seus esportes"
								style={
									styles.input
								}
							/>
						)}
					/>
				</View>
				{errors.sports && (
					<Text style={styles.errorText}>
						{errors.sports.message}
					</Text>
				)}
				<View style={{ zIndex: 1000 }}>
					<Controller
						control={control}
						name="neighborhoods"
						render={({
							field: {
								onChange,
								value,
							},
						}) => (
							<DropDownPicker
								open={
									neighborhoodsOpen
								}
								value={value}
								items={
									neighborhoodItems
								}
								setOpen={
									setNeighborhoodsOpen
								}
								setValue={
									onChange
								}
								multiple={true}
								mode="BADGE"
								placeholder="Selecione os bairros de interesse"
								style={
									styles.input
								}
							/>
						)}
					/>
				</View>
				{errors.neighborhoods && (
					<Text style={styles.errorText}>
						{errors.neighborhoods.message}
					</Text>
				)}
				<Button
					mode="contained"
					onPress={handleSubmit(onSubmit)}
					style={styles.button}
					disabled={isSubmitting}
					loading={isSubmitting}
				>
					{isSubmitting
						? "Cadastrando..."
						: "Cadastrar"}
				</Button>
			</View>
		</ScrollView>
	);
}
