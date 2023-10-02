import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return(
    <>
     <main className="content content_main">
      <section className="registration">
        <form className="registration__form" id="login-field" name="registration-form" >
          <label className="registration__field-wrap registration__field-wrap_login">
            <span className="registration__label">E-mail</span>
            <input id="emailLog" type="email" className="registration__field registration__field_next_email"
              placeholder="email" name="registrationEmail" minLength="2" maxLength="200" required />
            <span className="registration__field-error registration__field-error-email">ошибка email</span>
          </label>
          <label className="registration__field-wrap registration__field-wrap_login">
            <span className="registration__label">Пароль</span>
            <input id="passwordLog" type="password" className="registration__field registration__field_next_email"
              placeholder="пароль" name="registrationEmail" minLength="2" maxLength="200" required />
            <span className="registration__field-error registration__field-error-email">ошибка пароля</span>
          </label>
          <button className="registration__save" type="submit" form="registrationField">Войти</button>
        </form>
        <p className="registration__subtitle">
          Ещё не зарегистрированы?
          <Link to={'/signup'} className="registration__sign-link">
            Регистрация
          </Link>
        </p>
      </section>
    </main>
    </>
  )
}

export default Login;
