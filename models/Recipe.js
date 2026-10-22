import { v4 as uuidv4 } from 'uuid';

export default class Recipe{

    #id

    constructor({id = "", category = null, name = "", durationHours = 0 , durationMinutes = 0 , description = ""}){
        this.#id = id
        this.category = category
        this.name = name
        this.durationHours = durationHours
        this.durationMinutes = durationMinutes
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

    static Map({ id, category, name, duration_hours, duration_minutes, description }){
        return new Recipe({
            id,
            category,
            name,
            durationHours: duration_hours,
            durationMinutes: duration_minutes,
            description
        })
    }

    checkErrors() {
        const MAX_DURATION = 12 * 60 + 59;
        const durationRecipe = this.durationHours * 60 + this.durationMinutes;

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
    durationHours: 0, 
    durationMinutes: 0, 
    description: ""
}

export const SEED_RECIPE = [
    new Recipe({
        id: uuidv4(),
        category: 1,
        name: "Soupe",
        durationHours: 1,
        durationMinutes: 5,
        description: "Soupe aux lentilles",
    }),

    new Recipe({
        id: uuidv4(),
        category: 0,
        name: "Crêpes au sirop d'érable",
        durationHours: 0,
        durationMinutes: 25,
        description: "Crêpesservies avec du sirop d'érable.",
    }),

    new Recipe({
        id: uuidv4(),
        category: 0,
        name: "Omelette aux légumes",
        durationHours: 0,
        durationMinutes: 15,
        description: "Aux poivrons, oignons",
    }),

    new Recipe({
        id: uuidv4(),
        category: 1,
        name: "Salade César",
        durationHours: 0,
        durationMinutes: 30,
        description: "Laitue romaine, croûtons et parmesan.",
    }),
    
    new Recipe({
        id: uuidv4(),
        category: 2,
        name: "Pâté chinois",
        durationHours: 1,
        durationMinutes: 15,
        description: "Bœuf haché et purée de pommes de terre.",
    }),

    new Recipe({
        id: uuidv4(),
        category: 2,
        name: "Saumon au four",
        durationHours: 0,
        durationMinutes: 40,
        description: "Filet de saumon au citron",
    }),
]
