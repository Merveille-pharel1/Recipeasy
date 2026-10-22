import auth from "./AuthService";
import Request from "../models/Request";
import Recipe from "../models/Recipe";

export class RecipeService{

    #recipes = null

    get recipes(){
        return this.#recipes
    }

    async loadRecipes(){
        let currentUser = auth.currentUser
        console.log("Load recipes: ", currentUser)

        if(currentUser != null){
            const request = Request.createPostRequest("/select-recipes/execute", currentUser.toJSON())

            const response = await fetch(request.url, request.options).then((r) => r.json())

            if(response.success){
                this.#recipes = response.data.map(({user_id, ...r}) => new Recipe(r));
                console.log(this.#recipes)
            }
        }else{
            console.log("Utilisateur non authentifié")
        }

        return !!this.#recipes
    }

    async insertRecipe(recipe){
        let currentUser = auth.currentUser
        let success = false
        console.log("Insert recipe: ", currentUser)

        if(currentUser != null){
            const request = Request.createPostRequest("/insert-recipe/execute", {user_id: currentUser.id, ...recipe})

            const response = await fetch(request.url, request.options).then((r) => r.json())
            success = response.success

            if(response.success){
                console.log("Recette ajoutée avec succès")
            }
            else{
                console.log("Erreur lors de l'ajout de la recette", response)
            }

        }else{
            console.log("Utilisateur non authentifié")
        }

        return success
    }

    async deleteRecipe(recipe){
        let currentUser = auth.currentUser
        let success = false
        console.log("Delete recipe: ", currentUser)

        if(currentUser != null){
            const request = Request.createPostRequest("/delete-recipe/execute", {user_id: currentUser.id, id: recipe.id})

            const response = await fetch(request.url, request.options).then((r) => r.json())
            success = response.success

            if(response.success){
                console.log("Recette supprimée avec succès")
            }
            else{
                console.log("Erreur lors de la suppression de la recette", response)
            }

        }else{
            console.log("Utilisateur non authentifié")
        }

        return success
    }

    async updateRecipe(recipe){
        let currentUser = auth.currentUser
        let success = false
        console.log("Update recipe: ", currentUser)

        if(currentUser != null){
            const request = Request.createPostRequest("/update-recipe/execute", {user_id: currentUser.id, ...recipe.toJSON()})

            const response = await fetch(request.url, request.options).then((r) => r.json())
            success = response.success

            if(response.success){
                console.log("Recette mise à jour avec succès")
            }
            else{
                console.log("Erreur lors de la mise à jour de la recette: ", response)
            }

        }else{
            console.log("Utilisateur non authentifié")
        }

        return success
    }
    
}

const recipeService = new RecipeService
export default recipeService