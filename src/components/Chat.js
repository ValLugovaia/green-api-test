import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

function Chat({ handleSendMessage, messages }) {
	return (
        <>
            <MessageList messages={messages}/>
            <MessageForm handleSendMessage={handleSendMessage} /> 
        </>
	);
}

export default Chat;