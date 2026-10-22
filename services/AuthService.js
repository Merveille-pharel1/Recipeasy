import Request from "../models/Request"
import User from "../models/User"

export class AuthService{
    #currentUser = null

    get currentUser(){
        return this.#currentUser
    }

    async singUp(credentials){

        const request = Request.createPostRequest("/insert-user/execute", credentials)

        const response = await fetch(request.url, request.options).then((r) => r.json())
            
        if (response.success)  {
            this.#currentUser = new User({ id: response.lastInsertId, username: credentials.username })
            console.log(JSON.stringify(this.#currentUser))
        }

        return !!this.#currentUser
    }

    async login(credentials){
        const request = Request.createPostRequest("/select-user-auth/execute", credentials)

        const response = await fetch(request.url, request.options).then((r) => r.json())    
        
        if (response.success && response.data.length == 1)  {
            const user = response.data[0]

            this.#currentUser = new User({ id: user.id, username: user.username })
            console.log("Login: ", JSON.stringify(this.#currentUser))
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