export default class UserCredentials{

    constructor({username, password}){
        this.username = username
        this.password = password
    }

    checkErrors(){
        let errors = ""

        if(this.username.trim() == ""){
            errors += "Username requis!\n"
        }

        if(this.password.trim() == ""){
            errors += "Password requis!\n"
        }

        return errors
    }

}