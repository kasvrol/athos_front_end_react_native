import axios from 'axios'
require('dotenv').config()

export const getAdress = async (cep: string) => {
  return await axios
    .get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.data)
    .catch(err => console.error(err.response?.status, err.message))
}

export const getBairros = async (ibgeCode: string) => {
  return await axios
    .get(`https://api.brasilaberto.com/v1/districts-by-ibge-code/${ibgeCode}`, {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN_BRASIL_ABERTO}`,
      },
    })
    .then(res => res.data)
    .catch(err => console.error(err.response?.status, err.message))
}
