import axios from 'axios'

const request = async (url: string) => {
  return await axios
    .get(`${url}`)
    .then(res => res.data)
    .catch(err => console.error(err.response?.status, err.message))
}

export const getAdress = async (cep: string) => {
  return await request(`https://viacep.com.br/ws/${cep}/json/`)
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
