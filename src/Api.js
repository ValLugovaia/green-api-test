class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers
    }
  
    _handleResponse(res) {
        return (res.ok) ? (res.json()) : (Promise.reject(`Ошибка: ${res.status}`))
    }
    
    sendMessage(chatId, message, quotedMessageId, archiveChat, linkPreview) {
        return fetch(`${this._baseUrl}/waInstance{{idInstance}}/SendMessage/{{apiTokenInstance}}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ chatId, message, quotedMessageId, archiveChat, linkPreview })
    })
        .then(this._handleResponse)
    }

    receiveNotification() {
        return fetch(`${this._baseUrl}/waInstance{{idInstance}}/ReceiveNotification/{{apiTokenInstance}}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        })
        .then(this._handleResponse)
    }

    deleteNotification(receiptId) {
        return fetch(`${this._baseUrl}/waInstance{{idInstance}}/DeleteNotification/{{apiTokenInstance}}/${receiptId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        })
        .then(this._handleResponse)
    }
}
  
const api = new Api({
    baseUrl: 'https://api.green-api.com',
    headers: {
      'Content-Type': 'application/json'
    }
});
  
export default api;