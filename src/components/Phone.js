import { useState } from 'react';

function Phone({ onPhone }) {
	const [phone, setPhone] = useState("");

    function handlePhone(event) {
        setPhone(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        onPhone(phone);
    }

	return (
		<section className="">
			<h1 className="auth__title">Введите номер телефона</h1>
			<form className="auth__form" onSubmit={handleSubmit}>
                <label className="auth__field">
					<input className="auth__input auth__input_type_id"
						id="phone"
						name="phone"
						type="tel"
						value={phone || ""}
						placeholder="Телефон"
						required
						onChange={handlePhone}>
					</input>
				</label>
            	<button className="auth__submit-button" type="submit">Войти</button>
            </form>
		</section> 
	);
}

export default Phone;
