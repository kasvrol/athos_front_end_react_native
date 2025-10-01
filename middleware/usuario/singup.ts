import axios from 'axios'

export const getAdress = async (cep: string) => {
  return await axios({
    method: 'get',
    url: `viacep.com.br/ws/${cep}/json/`,
  })
}

export const getBairros = async (ibgeCode: string) => {
  return await axios
    .get(`https://api.brasilaberto.com/v1/districts-by-ibge-code/${ibgeCode}`, {
      headers: {
        Authorization: `Bearer 3dP9KKi8UaSkr2jOCs8YB3iquvB6meHMXNjhP8tLg5dvpBYFGz93kjNcKhm8SBW4`,
      },
    })
    .then(res => res.data)
    .catch(err => console.error(err.response?.status, err.message))
}
