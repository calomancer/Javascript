// Globals    
const jsonSaurus = [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
    }]
//NOTE: JSON is already an array of Objects!   
// Create Dino Constructor
const Dino = {};
// Create Dino Objects
const ObjectifiedDinos = jsonSaurus.map(function (object) {
    return Object.assign(object, Dino)

})
// Create Human Object
function Human(name, height, weight, diet) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.diet = diet
}
// Use IIFE to get human data from form
const human = new Human();
const getHuman = () => {
    human.name = document.getElementById('name').value;
    human.height = (document.getElementById('feet').value * 12) + (document.getElementById('inches').value);
    human.weight = document.getElementById('weight').value;
    human.diet = document.getElementById('diet').value;
    tiles();
    humTile = () => {
        humTile = document.createElement('DIV');
        image = document.createElement('IMG');
        image.src = `images/human.png`
        text = document.createElement('P');
        text.innerHTML = human.name.toString();
        humTile.appendChild(text)
        humTile.appendChild(image)
        humTile.classList.add('grid-item')
        dinoiles.splice(4, 0, humTile)
    }
    appendChildren()
    form_remove()
};




// Create Dino Compare Method 1
// NOTE: Height Difference
compareHeight = (h, d) => {
    var human = h.height;
    var dino = d.height;
    var diff = dino - human;
    if (diff < 0) {
        return `${h.name} is taller than ${d.species} by ${diff * (-1)} inches!`
    } else {
        return `${d.species} is ${diff} inchest taller than ${h.name}!`
    }
}
// Create Dino Compare Method 2
// NOTE: Weight Difference
compareWeight = (h, d) => {
    var human = h.weight;
    var dino = d.weight;
    var diff = dino - human;
    if (diff < 0) {
        return `${h.name} is heavier than ${d.species} by ${diff * (-1)} pounds!`
    } else {
        return `${d.species} is ${diff} pounds beavier than ${h.name}!`
    }
}

// Create Dino Compare Method 3
// NOTE: Diet Difference
compareDiet = (h, d) => {
    return `${h.name} is ${h.diet} and ${d.species} is a d.diet.`
}

fact = (d) => {
    return d.fact
}

// Generate Tiles for each Dino in Array
tiles = () => dinoTiles = ObjectifiedDinos.map(
    (dino, index) => {
        dinoTile = document.createElement('DIV');
        image = document.createElement('IMG');
        image.src = `images/${dino.species.toLowerCase()}.png`
        text = document.createElement('P');
        //TODO: sub function to choose a random fact and return it to text.innerHTML
        text.innerHTML = dino.fact.toString();
        dinoTile.appendChild(text)
        dinoTile.appendChild(image);
        dinoTile.classList.add('grid-item')
    }
)
// Add tiles to DOM
const grid = document.getElementById('grid');
const appendChildren = () => {
    dinoTiles.map((index) => {
        grid.appendChild(index)
    })
}
// Remove form from screen
const form = document.getElementById('dino-compare')
const form_remove = () => {
    form.remove()
}
// On button click, prepare and display infographic
const btn = document.getElementById('btn');
btn.addEventListener('click', getHuman);
