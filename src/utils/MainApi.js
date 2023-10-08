const URL = 'https://api.movie-malsky.nomoredo.nomoredomainsrocks.ru';

class MainApi {
  constructot(url) {
    this.url = url;
  }

  //проверка ответа запроса
  _getResponseData = (res) => {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }

    return res.json();
  };

  //регистрация(создание) пользователя
  register(email, password, name) {
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  //авторизация пользователя
  authorize(email, password) {
    return fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        return this._getResponseData(res);
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          return data;
        } else {
          return;
        }
      });
  }

  //проверка токена
  getContent(token) {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }.then((res) => {
        return this._getResponseData(res);
      }),
    });
  }

  //получить данные о юзере с сервера
  getCurrentUser() {
    return fetch(`${this.url}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((res) => {
      return this._getResponseData(res);
    })
  }

  //отправляет изменeнные данные профайла на сервер
  changeProfileData(name, email) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  //создать фильм на нашем сервере
  createMovie(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN
  ) {
    return fetch(`${this.url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  //удалить фильм
  deleteMovie(_id) {
    return fetch(`${this.url}/movies/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  //получить сохраненные фильмы с нашего сервера
  getSavedMovies() {
    return fetch(`${this.url}/movies`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      return this._getResponseData(res)
    })
  }

}

export const mainApi = new MainApi(URL);
