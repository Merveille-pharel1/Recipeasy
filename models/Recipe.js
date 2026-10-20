import { v4 as uuidv4 } from 'uuid';

export const EMPTY_RECIPE = {
    id: "",
    category: null, 
    name: "", 
    durationHours: 0, 
    durationMinutes: 0, 
    description: ""
}

export function CheckErrors(recipe){
  const MAX_DURATION = 12 * 60 + 59;
  const durationRecipe = recipe.durationHours * 60 + recipe.durationMinutes;

  let errors = ""

  if(recipe.category === null)
    errors += "Catégorie requise!\n";

  if(recipe.name.trim() == "")
    errors += "Nom requis (non vide)!\n";

  if(durationRecipe <= 0 || durationRecipe > MAX_DURATION)
    errors += "La durée doit être valide (Durée > 0)";

  return errors
}

export const SEED_RECIPE = [
    {
        id: uuidv4(),
        category: 1,
        name: "Soupe",
        durationHours: 1,
        durationMinutes: 5,
        description: "Soupe aux lentilles",
    },

    {
        id: uuidv4(),
        category: 0,
        name: "Crêpes au sirop d'érable",
        durationHours: 0,
        durationMinutes: 25,
        description: "Crêpesservies avec du sirop d'érable.",
    },

    {
        id: uuidv4(),
        category: 0,
        name: "Omelette aux légumes",
        durationHours: 0,
        durationMinutes: 15,
        description: "Aux poivrons, oignons",
    },

    {
        id: uuidv4(),
        category: 1,
        name: "Salade César",
        durationHours: 0,
        durationMinutes: 30,
        description: "Laitue romaine, croûtons et parmesan.",
    },
    
    {
        id: uuidv4(),
        category: 2,
        name: "Pâté chinois",
        durationHours: 1,
        durationMinutes: 15,
        description: "Bœuf haché et purée de pommes de terre.",
    },

    {
        id: uuidv4(),
        category: 2,
        name: "Saumon au four",
        durationHours: 0,
        durationMinutes: 40,
        description: "Filet de saumon au citron",
    },
]
