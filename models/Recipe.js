import { v4 as uuidv4 } from 'uuid';

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

export const EMPTY_RECIPE = {
    id: "",
    category: null, 
    name: "", 
    duration_hours: 0, 
    duration_minutes: 0, 
    description: ""
}

export const SEED_RECIPE = [
    new Recipe({
        id: uuidv4(),
        category: 1,
        name: "Soupe",
        duration_hours: 1,
        duration_minutes: 5,
        description: "Soupe aux lentilles",
    }),

    new Recipe({
        id: uuidv4(),
        category: 0,
        name: "Crêpes au sirop d'érable",
        duration_hours: 0,
        duration_minutes: 25,
        description: "Crêpesservies avec du sirop d'érable.",
    }),

    new Recipe({
        id: uuidv4(),
        category: 0,
        name: "Omelette aux légumes",
        duration_hours: 0,
        duration_minutes: 15,
        description: "Aux poivrons, oignons",
    }),

    new Recipe({
        id: uuidv4(),
        category: 1,
        name: "Salade César",
        duration_hours: 0,
        duration_minutes: 30,
        description: "Laitue romaine, croûtons et parmesan.",
    }),
    
    new Recipe({
        id: uuidv4(),
        category: 2,
        name: "Pâté chinois",
        duration_hours: 1,
        duration_minutes: 15,
        description: "Bœuf haché et purée de pommes de terre.",
    }),

    new Recipe({
        id: uuidv4(),
        category: 2,
        name: "Saumon au four",
        duration_hours: 0,
        duration_minutes: 40,
        description: "Filet de saumon au citron",
    }),
]
