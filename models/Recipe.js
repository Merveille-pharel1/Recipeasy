export default class Recipe{

    #id

    constructor({id = "", category = null, name = "", duration_hours = 0 , duration_minutes = 0 , description = ""}){
        this.#id = id
        this.category = category
        this.name = name
        this.duration_hours = duration_hours
        this.duration_minutes = duration_minutes
        this.description = description
    }

    get id(){
        return this.#id
    }
    
    toJSON() {
        return {
            id: this.#id,
            ...this
        }
    }

    checkErrors() {
        const MAX_DURATION = 12 * 60 + 59;
        const durationRecipe = this.duration_hours * 60 + this.duration_minutes;

        let errors = ""

        if(this.category === null)
            errors += "Catégorie requise!\n";

        if(this.name.trim() == "")
            errors += "Nom requis (non vide)!\n";

        if(durationRecipe <= 0 || durationRecipe > MAX_DURATION)
            errors += "La durée doit être valide (Durée > 0)";

        return errors
    }

}