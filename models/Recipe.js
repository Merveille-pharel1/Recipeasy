export const EMPTY_RECIPE = {
    id: 1,
    category: null, 
    name: "", 
    durationHours: 0, 
    durationMinutes: 0, 
    description: ""
}

export const SEED_RECIPE = [
    {
        id: 1,
        category: 1,
        name: "Soupe",
        durationHours: 1,
        durationMinutes: 5,
        description: "Soupe aux lentilles",
    },

    {
        id: 2,
        category: 0,
        name: "Crêpes au sirop d'érable",
        durationHours: 0,
        durationMinutes: 25,
        description: "Crêpesservies avec du sirop d'érable.",
    },

    {
        id: 3,
        category: 0,
        name: "Omelette aux légumes",
        durationHours: 0,
        durationMinutes: 15,
        description: "Aux poivrons, oignons",
    },

    {
        id: 4,
        category: 1,
        name: "Salade César",
        durationHours: 0,
        durationMinutes: 30,
        description: "Laitue romaine, croûtons et parmesan.",
    },
    
    {
        id: 5,
        category: 2,
        name: "Pâté chinois",
        durationHours: 1,
        durationMinutes: 15,
        description: "Bœuf haché et purée de pommes de terre.",
    },

    {
        id: 6,
        category: 2,
        name: "Saumon au four",
        durationHours: 0,
        durationMinutes: 40,
        description: "Filet de saumon au citron",
    },
]
