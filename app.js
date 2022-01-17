// Globals
/**
 * @description Dino Data in Json Format
 */
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
    }];
// Create Dino Constructor
/**
 * @description Dino Object, empty
 * @constructor
 */
const Dino = {};
// Create Dino Objects
/**
 * @description Create Arry of Dino Objects from jsonSaurus
 * @param {Object} object - Current Index of jsonSaurus Array
 * @param {Object} Dino - Dino Object to Mix with object
 * @returns {Object[]} ObjectifiedDinos - Array of Dino Object
 */
const ObjectifiedDinos = jsonSaurus.map(function (object) {
    return Object.assign(object, Dino)
});
// Create Human Object
/**
 * @description Human Object
 * @constructor
 */
function Human(name, height, weight, diet) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.diet = diet
};
// Use IIFE to get human data from form
/**
 * @description New Human Object
 */
const human = new Human();
/**
 * @description Gets Human data from Form - also strings together other methods to achieve DOM updates.
 * @param {Object} human - human object 
 * @param {string} human.name - human name from DOM Form
 * @param {string|int} human.height - human height, in inches, from DOM Form
 * @param {string} human.weight - human weight, in pounds, from DOM Form
 * @param {string} human.diet - human diet from DOM Form
 * @returns {Object[]} Returns object array to print to screen
 */
const getHuman = () => {
    human.name = document.getElementById('name').value;
    human.height = parseInt(document.getElementById('feet').value * 12) + parseInt(document.getElementById('inches').value);
    human.weight = document.getElementById('weight').value;
    human.diet = document.getElementById('diet').value;
    tiles();
    (humTile = () => {
        humTile = document.createElement('DIV');
        image = document.createElement('IMG');
        image.src = `images/human.png`
        text = document.createElement('P');
        text.innerHTML = human.name.toString();
        humTile.appendChild(text)
        humTile.appendChild(image)
        humTile.classList.add('grid-item')
        dinoTiles.splice(4, 0, humTile)
    })();
    appendChildren();
    form_remove();
};




// Create Dino Compare Method 1
// NOTE: Height Difference
/**
 * @description Array of Fact Methods to Randomize text in grid - Add New Fact Methods to Array.
 * @param {Object} d - Dino Object 
 * @param {string} d.height - Height from Dino Object
 * @param {string} d.weight - Weight from Dino Object
 * @param {string} d.diet - Diet from Dino Object
 * @param {string} d.fact - Fact from Dino Object
 * @param {string} d.species - Species name from Dino Object
 * @param {Object} human - Global Human Object from DOM
 * @param {string} human.height - Height from Human Object
 * @param {string} human.weight - Weight from Human Object
 * @param {string} human.diet - Diet from Human Object
 * @param {string} human.name - Name from Human Object
 * @returns {string} - Returns fact string
 */
facts = [
    compareHeight = (d) => {
        var diff = d.height - human.height;
        if (diff < 0) {
            return `${human.name} is taller than ${d.species} by ${diff * (-1)} inches!`
        } else {
            return `${d.species} is ${diff} inches taller than ${human.name}!`
        }
    },
    // Create Dino Compare Method 2
    // NOTE: Weight Difference
    compareWeight = (d) => {
        var diff = d.weight - human.weight;
        if (diff < 0) {
            return `${human.name} is heavier than ${d.species} by ${diff * (-1)} pounds!`
        } else {
            return `${d.species} is ${diff} pounds beavier than ${human.name}!`
        }
    },

    // Create Dino Compare Method 3
    // NOTE: Diet Difference
    compareDiet = (d) => {
        return `${human.name} is ${human.diet} and ${d.species} is a ${d.diet}.`
    },

    fact = (d) => {
        return d.fact;
    }

];


// Generate Tiles for each Dino in Array
/**
 * @description Generate tile array of HTML Object for Dinosaurs. Human tile is spliced in when getHuman is called.
 * @param {Object[]} ObjectifiedDinos - Array of Dino Objects
 * @param {Object} dino - Single dino from current index of ObjectifiedDinos
 * @param {Object} dinoTile - HTML Object, base DIV of a single Grid Tile
 * @param {Object} image - HTML Object, Image of Grid Tile
 * @param {string} image.src - URL for Image
 * @param {Object} text - HTML Object for Grid Tile fact
 * @param {string} text.innerHTML - Text Node for Grid Tile fact
 * @param {Object} facts - Array of Functions which return text
 * @returns {Object[]} - Array Of HTML Nodes 
 */
tiles = () => dinoTiles = ObjectifiedDinos.map(
    (dino) => {
        dinoTile = document.createElement('DIV');
        image = document.createElement('IMG');
        image.src = `images/${dino.species.toLowerCase()}.png`
        text = document.createElement('P');
        //TODO: sub function to choose a random fact and return it to text.innerHTML
        if (dino.species != 'Pigeon') {
            //pic a random number that is based on the length of the facts array
            text.innerHTML = facts[Math.floor(Math.random() * facts.length)](dino)
        }
        else {
            text.innerHTML = fact(dino);
        };

        dinoTile.appendChild(text)
        dinoTile.appendChild(image);
        dinoTile.classList.add('grid-item')
        return dinoTile
    }
);
// Add tiles to DOM
/**
 * @description Loops through tile array and appends each to the DOM
 * @param {Object} grid - Main object from DOM with the ID of 'grid'
 * @param {Object[]} dinoTiles - Array of HTML objects to append to the DOM
 * @param {Object} index - Current indext Object 
 */
const grid = document.getElementById('grid');
const appendChildren = () => {
    dinoTiles.map((index) => {
        grid.appendChild(index)
    })
};
// Remove form from screen
/**
 * @description Removes form from DOM
 * @param {Object} form - Form Object from DOM with the ID of 'dion-compare'
 */
const form = document.getElementById('dino-compare')
const form_remove = () => {
    form.remove()
};
// On button click, prepare and display infographic
/**
 * @description Adds Event listen to Form Button
 * @param {Object} btn - Button Object from DOM with ID of 'btn'
 * @param {Object} getHuman - function to get Human data from DOM Form
 */
const btn = document.getElementById('btn');
btn.addEventListener('click', getHuman);
