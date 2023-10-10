import { Link } from 'react-router-dom';
import './Register.css';
import { useState, useEffect } from 'react';

function Register({ handleRegistration, isApiRegisterError }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState(false); // показать ошибку имени
  const [emailError, setEmailError] = useState(false); // показать ошибку емаила
  const [passwordError, setPasswordError] = useState(false); //показать ошибку пароля

  const [inputsValid, setInputsValid] = useState(false); // проверка валидности всех инпутов

  const nameHandler = (evt) => {
    setName(evt.target.value);

    if (!/^[A-Za-zА-Яа-яЁё /s -]{2,}/.test(evt.target.value)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
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

  const handleSubmit = (evt) => {
    evt.preventDefault();

    handleRegistration(email, password, name);

    setName('')
    setEmail('')
    setPassword('')
    setInputsValid(false)
  };

  useEffect(() => {
    if (nameError || emailError || passwordError) {
      setInputsValid(false);
    } else {
      setInputsValid(true);
    }
  }, [nameError, emailError, passwordError]);

  return (
    <main className='content content_main'>
      <section className='registration'>
        <form
          className='registration__form'
          id='registration-field'
          name='registration-form'
          noValidate
          onSubmit={handleSubmit}
        >
          <label className='registration__field-wrap'>
            <span className='registration__label'>Имя</span>
            <input
              id='nameReg'
              type='text'
              className='registration__field registration__field_next_name'
              placeholder='Имя'
              name='registrationName'
              minLength='2'
              maxLength='40'
              required
              value={name}
              onChange={nameHandler}
            />
            {nameError && (
              <span className='registration__field-error registration__field-error-name registration__field-error_visible '>
                ошибка имени
              </span>
            )}
          </label>
          <label className='registration__field-wrap'>
            <span className='registration__label'>E-mail</span>
            <input
              id='emailReg'
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
          <label className='registration__field-wrap'>
            <span className='registration__label'>Пароль</span>
            <input
              id='passwordReg'
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
                пароль должен содержать от 4 до 8 символов
              </span>
            )}
          </label>
          <div className='registration__save-wrap'>
          {isApiRegisterError && <span className='registration__field-error'>
            При регистрации профиля произошла ошибка.
          </span>}
          <button
            className='registration__save'
            type='submit'
            disabled={!inputsValid}
          >
            Зарегистрироваться
          </button>
          </div>
        </form>
        <p className='registration__subtitle'>
          Уже зарегистрированы?
          <Link to={'/signin'} href='' className='registration__sign-link'>
            Войти
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Register;
