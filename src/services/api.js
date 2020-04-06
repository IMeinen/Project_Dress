const axios =  require('axios');

const instance = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/',
});

const endpoints = {
  getAll: '/characters',
};
class APIService {
  constructor() {

    this.getCharactersData = async () => {
      try {
        const url = endpoints.getAll;
        const require = await instance.get(url);
        return [null, require.data];
      } catch (error) {
        return [error, null];
      }
    };
  }
}


export const api = new APIService();
