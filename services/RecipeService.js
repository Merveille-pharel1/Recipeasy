import auth from "./AuthService";
import Request from "../models/Request";
import Recipe from "../models/Recipe";

export class RecipeService{

    #recipes = null

    get recipes(){
        return this.#recipes
    }

    async loadRecipes(){
        const currentUser = auth.currentUser
        console.log(currentUser)

        if(currentUser != null){
            const request = Request.createPostRequest("/select-recipes/execute", currentUser.toJson())

            const response = await fetch(request.url, request.options).then((r) => r.json())
            console.log(response.data)

            if(response.success){
                this.#recipes = response.data.map(({user_id, ...r}) => Recipe.Map(r)); // user_id peut également être trié par le constructeur
                console.log(this.#recipes)
            }
        }else{
            console.log("Utilisateur non authentifié")
        }

        return !!this.#recipes
    }
}

const recipeService = new RecipeService
export default recipeService