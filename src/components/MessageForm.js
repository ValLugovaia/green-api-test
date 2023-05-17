import { useState } from 'react';

function MessageForm({ handleSendMessage }) {
	const [message, setMessage] = useState("");

    function handleMessage(event) {
        setMessage(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleSendMessage(message);
    }

	return (
		<section className="">
			<form className="auth__form" onSubmit={handleSubmit}>
                <label className="auth__field">
					<input className="auth__input auth__input_type_id"
						id="message"
						name="message"
						type="text"
						value={message || ""}
						placeholder="Сообщение"
						required
						onChange={handleMessage}>
					</input>
				</label>
            	<button className="auth__submit-button" type="submit">Войти</button>
            </form>
		</section> 
	);
}

export default MessageForm;