import axios from 'axios';

class TmdbApi {
  constructor() {
    this.httpClient = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      params: { api_key: import.meta.env.VITE_API_KEY },
    });
  }

  async getPopularMovieList() {
    return await this.httpClient
      .get('/popular', {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN_AUTH}`,
        },
      })
      .then((res) => res.data.results);
  }
}

export default new TmdbApi();
