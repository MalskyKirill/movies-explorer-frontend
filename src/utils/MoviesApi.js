const URL = 'https://api.nomoreparties.co/beatfilm-movies';

class MoviesApi {
  constructor(url) {
    this.url = url;
  }

  _getResponceData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  // получить фильмы со стороннего апи
  getMovies() {
    return fetch(this.url, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      return this._getResponceData(res);
    });
  }
}

export const moviesApi = new MoviesApi(URL);
