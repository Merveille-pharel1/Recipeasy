import Request from "../models/Request"
import User from "../models/User"
import {Base64} from "js-base64"

export class AuthService{
    #currentUser = null

    get currentUser(){
        return this.#currentUser
    }

    #createRequest(query, credentials){
        const baseUrl = import.meta.env.VITE_BASE_URL
        const auth = Base64.encode(import.meta.env.VITE_MARTHA_USERNAME + ":" + import.meta.env.VITE_MARTHA_PASSWORD)

        const url = baseUrl + "query"
        options = {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'auth': auth
            }
        }

        return new Request({url, options})
    }

    async singUp(credentials){
        
        const request = createRequest("insert-user/execute", credentials)

        const response = await fetch(request.url, request.options).then((r) => r.json())
            
        if (response.success)  {
            this.#currentUser = new User({ id: response.lastInsertId, username: credentials.username })
            console.log(JSON.stringify(this.#currentUser))
        }

        return !!this.#currentUser
    }

    async login(credentials){
        const request = createRequest("select-user-auth/execute", credentials)

        const response = await fetch(request.url, request.options).then((r) => r.json())

        if (response.success && response.data.lenght == 1)  {
            const user = response.data[0]

            this.#currentUser = new User({ id: user.id, username: user.username })
            console.log(JSON.stringify(this.#currentUser))
        }
        else{
            this.#currentUser = null
        }

        return !!this.#currentUser
    }

    logOut() {
      this.#currentUser = null
    }
}

const service = new AuthService();
export default service;