import axios from 'axios';

class TmdbApi {
  constructor() {
    this.httpClient = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      params: { api_key: import.meta.env.VITE_API_KEY, language: 'ko' },
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

  async getMovieDetail(movieId) {
    return await this.httpClient
      .get(`${movieId}`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN_AUTH}`,
        },
      })
      .then((res) => res.data);
  }

  async getTopRatedMovieList(page) {
    return await this.httpClient
      .get('/top_rated', {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN_AUTH}`,
        },
        params: { page },
      })
      .then((res) => res.data);
  }
}

export default new TmdbApi();
