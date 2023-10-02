import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return(
    <main class="content content_main">
      <section class="registration">
        <form class="registration__form" id="registration-field" name="registration-form" novalidate>
          <label class="registration__field-wrap">
            <span class="registration__label">Имя</span>
            <input id="nameReg" type="text" class="registration__field registration__field_next_name" placeholder="Имя"
              name="registrationName" minLength="2" maxLength="40" required />
            <span
              class="registration__field-error registration__field-error-name registration__field-error_visible ">ошибка
              имени</span>
          </label>
          <label class="registration__field-wrap">
            <span class="registration__label">E-mail</span>
            <input id="emailReg" type="email" class="registration__field registration__field_next_email"
              placeholder="email" name="registrationEmail" minLength="2" maxLength="200" required />
            <span class="registration__field-error registration__field-error-email">ошибка email</span>
          </label>
          <label class="registration__field-wrap">
            <span class="registration__label">Пароль</span>
            <input id="passwordReg" type="password" class="registration__field registration__field_next_email"
              placeholder="пароль" name="registrationEmail" minLength="2" maxLength="200" required />
            <span class="registration__field-error registration__field-error-email">ошибка пароля</span>
          </label>
          <button class="registration__save" type="submit" form="registrationField">Зарегистрироваться</button>
        </form>
        <p class="registration__subtitle">
          Уже зарегистрированы?
          <Link to={'/signin'} href="" class="registration__sign-link">
            Войти
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Register;
