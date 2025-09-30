import { useRouter } from "expo-router";
import { useState } from "react";
import { useTheme } from "tamagui";

export const ModelViewLogin = () =>{
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
const theme = useTheme();
  const handleLogin = () => {
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (email.toLowerCase() === 'user@tamagui.dev' && password === '123456') {
        router.replace('/(tabs)'); 
      } else {
        setError('E-mail ou senha inválidos. Tente novamente.');
      }
      setIsLoading(false);
    }, 1500);
  };

  // Desabilita o botão se os campos estiverem vazios ou durante o loading
  const isButtonDisabled = !email || !password || isLoading;

  return{
    isButtonDisabled,
        password,
    showPassword,
    email,
    error,
    router,
    isLoading,
    theme,
    handleLogin,
    setShowPassword,
    setEmail,
    setPassword
  }
}