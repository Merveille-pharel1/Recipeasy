export default class UserCredentials{

    constructor({username, password}){
        this.username = username
        this.password = password
    }

    checkErrors(){
        console.log("name: ", this.username, " pass: ", this.password)
        let errors = ""

        if(this.username == ""){
            errors += "Username requis!\n"
        }

        if(this.password == ""){
            errors += "Password requis!\n"
        }

        return errors
    }

}