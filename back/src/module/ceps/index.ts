import axios from 'axios'

const ceps = async (addresses: string[]) => {
  try {
    const requests = await Promise.all(addresses.map((value) => {
      return axios.get(`https://viacep.com.br/ws/${value}/json/`)
    }))
    const result = []
    for (const element of requests) {
      result.push(element.data)
    }
    return result
  } catch ({message}) {
    console.log(message)
  }
}

export default ceps