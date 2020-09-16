import axios from 'axios'


const serverURI = 'http://localhost:5000/'

const userUtils = {
  login: (email, password) => {
    const p = axios.post(serverURI + 'login', {
      email: email,
      password: password
    }, {
      withCredentials: true
    })
    return p
  },
  signUp: (email, password, confirmPassword) => {
    const p = axios.post(serverURI + 'signup', {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }, {
      withCredentials: true
    })
    return p
  },
  favoritePokemon: (favoritePokemons) => {
    const p = axios.post(serverURI + 'favorite-pokemon', {
      favoritePokemons: favoritePokemons
    }, {
      withCredentials: true
    })
    return p
  },
  getUserData: () => {
    const p = axios.post(serverURI + 'get-user-data', null, {
      withCredentials: true
    })
    return p
  },
  signOut: () => {
    const p = axios.post(serverURI + 'sign-out', null, {
      withCredentials: true
    })
    return p
  }
}



export default userUtils
