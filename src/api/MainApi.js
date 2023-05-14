class MainApi {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers
    }
  
    _handleResponse(res) {
        return (res.ok) ? (res.json()) : (Promise.reject(`Ошибка: ${res.status}`))
    }

    signup(idInstance, apiTokenInstance) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idInstance, apiTokenInstance })
    })
        .then(this._handleResponse)
    }

    signin(idInstance, apiTokenInstance) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ idInstance, apiTokenInstance })
        })
        .then(this._handleResponse)
    }
}
    
const mainApi = new MainApi({
    baseUrl: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json'
    }
});
  
export default mainApi;