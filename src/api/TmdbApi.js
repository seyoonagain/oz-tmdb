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
      .get('/movie/popular', {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN_AUTH}`,
        },
      })
      .then((res) => res.data.results);
  }

  async getMovieDetail(movieId) {
    return await this.httpClient
      .get(`/movie/${movieId}`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN_AUTH}`,
        },
      })
      .then((res) => res.data);
  }

  async getTopRatedMovieList(page) {
    return await this.httpClient
      .get('/movie/top_rated', {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN_AUTH}`,
        },
        params: { page },
      })
      .then((res) => res.data);
  }

  async searchMovies(query, page) {
    return await this.httpClient
      .get('/search/movie', {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN_AUTH}`,
        },
        params: { query, page },
      })
      .then((res) => res.data);
  }
}

export default new TmdbApi();
