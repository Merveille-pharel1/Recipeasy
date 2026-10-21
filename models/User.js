export default class User{

    #id

    constructor({id, username}){
        this.#id = id
        this.username = username
    }

    get id(){
        return this.#id
    }

    toJson(){
        return {
            id: this.#id,
            ...this
        }
    }
}