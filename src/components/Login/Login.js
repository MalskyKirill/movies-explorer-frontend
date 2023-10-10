import { Link } from 'react-router-dom';
import './Login.css';
import { useState, useEffect } from 'react';

function Login({ isApiError, handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false); // показать ошибку емаила
  const [passwordError, setPasswordError] = useState(false); //показать ошибку пароля

  const [inputsValid, setInputsValid] = useState(false); // проверка валидности всех инпутов

  const handleSubmit = (evt) => {
    evt.preventDefault();

    handleLogin(email, password);

    setEmail('');
    setPassword('');
    setInputsValid(false);
  };

  const passwordHandler = (evt) => {
    setPassword(evt.target.value);

    if (evt.target.value.length < 4 || evt.target.value.length > 8) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const emailHandler = (evt) => {
    setEmail(evt.target.value);

    if (!/^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/.test(evt.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setInputsValid(false);
    } else {
      setInputsValid(true);
    }
    if(!email || !password) setInputsValid(false);
  }, [emailError, passwordError, email, password]);

  return (
    <>
      <main className='content content_main'>
        <section className='registration'>
          <form
            className='registration__form'
            id='login-field'
            name='registration-form'
            onSubmit={handleSubmit}
          >
            <label className='registration__field-wrap registration__field-wrap_login'>
              <span className='registration__label'>E-mail</span>
              <input
                id='emailLog'
                type='email'
                className='registration__field registration__field_next_email'
                placeholder='email'
                name='registrationEmail'
                minLength='2'
                maxLength='200'
                required
                value={email}
                onChange={emailHandler}
              />
              {emailError && (
                <span className='registration__field-error registration__field-error-email'>
                  ошибка email
                </span>
              )}
            </label>
            <label className='registration__field-wrap registration__field-wrap_login'>
              <span className='registration__label'>Пароль</span>
              <input
                id='passwordLog'
                type='password'
                className='registration__field registration__field_next_email'
                placeholder='пароль'
                name='registrationEmail'
                minLength='4'
                maxLength='8'
                required
                value={password}
                onChange={passwordHandler}
              />
              {passwordError && (
                <span className='registration__field-error registration__field-error-email'>
                  ошибка пароля
                </span>
              )}
            </label>
            <div className='registration__save-wrap'>
              {isApiError && (
                <span className='registration__field-error'>
                  При входе произошла ошибка.
                </span>
              )}
              <button
                className='registration__save'
                type='submit'
                disabled={!inputsValid}
              >
                Войти
              </button>
            </div>
          </form>
          <p className='registration__subtitle'>
            Ещё не зарегистрированы?
            <Link to={'/signup'} className='registration__sign-link'>
              Регистрация
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}

export default Login;
