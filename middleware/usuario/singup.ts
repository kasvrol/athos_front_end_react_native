import axios from 'axios'

const getRequest = async (url: string) => {
  return await axios
    .get(url)
    .then(res => res.data)
    .catch(err => console.error(err.response?.status, err.message))
}

const postRequest = async (url: string, information: any) => {
  return await axios
    .post(url, information)
    .then(function (response) {
      console.log(response)
      return response
    })
    .catch(err => console.error(err.response?.status, err.message))
}

export const getAdress = async (cep: string) => {
  return await getRequest(`https://viacep.com.br/ws/${cep}/json/`)
}

export const getBairros = async (ibgeCode: string) => {
  const token = process.env.EXPO_PUBLIC_TOKEN_BRASIL_ABERTO
  return await axios
    .get(`https://api.brasilaberto.com/v1/districts-by-ibge-code/${ibgeCode}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => res.data)
    .catch(err => console.error(err.response?.status, err.message))
}

export const postInformationUser = async (user: any) => {
  return await postRequest('', user)
}

export interface UsuarioBackDTO {
  id: string | null;
  nome: string;
  email: string;
  cpf: string | null;
  foto: string | null;
  dtCadastro: string; 
  cep: string;
  bairros: string[];
  esportes: string[];
}

export const registerUser = async (dadosFront: any) => {
  const url = `localhost/api/auth/register`;

  const payload = {
    id: null, 
    nome: dadosFront.nome,
    email: dadosFront.email,
    senha: dadosFront.senha, 
    cpf: null, 
    foto: null, 
    dtCadastro: new Date().toISOString().split('T')[0],
    cep: dadosFront.cep, 
    bairros: dadosFront.bairros,
    esportes: dadosFront.sportList
  };

  console.log("📡 Enviando request para:", url);
  console.log("📦 Payload:", JSON.stringify(payload, null, 2));

  try {
    const response = await axios.post(url, payload)
console.log("✅ Resposta recebida:", response);
    // if (response) {
    //   const errorBody = await response
    //   throw new Error(`Erro ${response.status}: ${errorBody}`);
    // }

    // const data = await response.data 
    // return data;

  } catch (error) {
    console.error("❌ Erro no registro:", error);
  }
};
