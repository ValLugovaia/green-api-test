function MessageList({ messages }) {
	return (
		<section className="">
            <h1 className="auth__title">Чат с абонентом</h1>
            <ul className="message-list">
                {messages.map(message => {
                    return (
                        <li key={message.id}>
                            <div>
                                {message.senderId}
                            </div>
                            <div>
                                {message.text}
                            </div>
                        </li>
                    )
                })}
            </ul>
		</section> 
	);
}

export default MessageList;