import { useState } from 'react';

function Login({ onLogin }) {
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
        onLogin(id, token);
    }

    return (
        <section className="auth">
            <h1 className="auth__title">Вход</h1>
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
                <button className="auth__submit-button" type="submit">Войти</button>
            </form>
        </section>
    )
}

export default Login;