import axios from 'axios'

const getRequest = async (url: string) => {
  return await axios
    .get(url)
    .then(res => res.data)
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


export interface UsuarioBackDTO {
  id: string | null
  nome: string
  email: string
  cpf: string | null
  foto: string | null
  dtCadastro: string
  cep: string
  bairros: string[]
  esportes: string[]
}
export const registerUser = async (dadosFront: any) => {
  const host = process.env.EXPO_PUBLIC_API_GATEWAY?.replace(/\/$/, '');

  if (!host) {
    console.error("❌ ERRO: API Gateway não definido no .env");
    return;
  }

  const url = `${host}/api/auth/register`;

  const payload = {
    id: null, 
    nome: dadosFront.nome,
    email: dadosFront.email,
    senha: dadosFront.senha, 
    confirmacaoSenha: dadosFront.senha,    
    dtCadastro: new Date().toISOString().split('T')[0],
    cep: dadosFront.cep || "00000000", 
    bairros: dadosFront.bairros || [],
    esportes: dadosFront.sportList || []
  };


  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log('fw Status da Resposta:', response.status);

    const responseText = await response.text();
    console.log('📦 Corpo da Resposta:', responseText || '(Vazio)');

    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${responseText}`);
    }

    return responseText ? JSON.parse(responseText) : null;

  } catch (error: any) {
    console.error("❌ Erro no registro:", error.message);
    return null;
  }
};
