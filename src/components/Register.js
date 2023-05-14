import { Link } from 'react-router-dom';
import { useState } from 'react';

function Register({ onRegister }) {
    const [id, setId] = useState("");
    const [token, setToken] = useState("");

    function handleId(event) {
        setId(event.target.value);
    }

    function handleToken(event) {
        setToken(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        onRegister(id, token);
    }

    return (
        <section className="auth">
            <h1 className="auth__title">Регистрация</h1>
            <form className="auth__form" onSubmit={handleSubmit}>
                <label className="auth__field">
                <input
                        className="auth__input auth__input_type_id"
                        id="id"
                        name="id"
                        type="text"
                        value={id || ""}
                        placeholder="ID"
                        required
                        onChange={handleId}
                    />
                </label>
                <label className="auth__field">
                <input
                        className="auth__input auth__input_type_token"
                        id="token"
                        name="token"
                        type="text"
                        value={token || ""}
                        placeholder="Token"
                        required
                        onChange={handleToken}
                    />
                </label>
                <button className="auth__submit-button" type="submit">Зарегистрироваться</button>
                <Link to="/signin" className="auth__link">
                    <p>Уже зарегистрированы? Войти</p>
                </Link>
            </form>
        </section>
    )
}

export default Register;