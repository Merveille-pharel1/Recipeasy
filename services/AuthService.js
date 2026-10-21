import Request from "../models/Request"
import User from "../models/User"
import {encode} from "base-64"

export class AuthService{
    #currentUser = null

    get currentUser(){
        return this.#currentUser
    }

    #createRequest(query, credentials){
        const baseUrl = process.env.EXPO_PUBLIC_BASE_URL
        const auth = encode(process.env.EXPO_PUBLIC_MARTHA_USERNAME + ":" + process.env.EXPO_PUBLIC_MARTHA_PASSWORD)

        const url = baseUrl + query
        const options = {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'auth': auth
            }
        }

        return new Request({url, options})
    }

    async singUp(credentials){

        const request = this.#createRequest("/insert-user/execute", credentials)

        const response = await fetch(request.url, request.options).then((r) => r.json())
            
        if (response.success)  {
            this.#currentUser = new User({ id: response.lastInsertId, username: credentials.username })
            console.log(JSON.stringify(this.#currentUser))
        }

        return !!this.#currentUser
    }

    async login(credentials){
        const request = this.#createRequest("/select-user-auth/execute", credentials)

        const response = await fetch(request.url, request.options).then((r) => r.json())    
        
        if (response.success && response.data.length == 1)  {
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

const auth = new AuthService();
export default auth;