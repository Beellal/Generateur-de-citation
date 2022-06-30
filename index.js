// Global Variable used to store the quotes 
// fetched from the API
/*var data;
let front = true;
  
// Getting the front and the back author boxes
const authors = document.querySelectorAll(".author");
  
// Getting the front and the back texts
const texts = document.querySelectorAll(".text");
  
// Getting the body
const body = document.getElementById("body");
  
// Getting the buttons
const button = document.querySelectorAll(".new-quote");
  
const blockFront = document.querySelector(".block__front");
const blockBack = document.querySelector(".block__back");
  
const authorFront = authors[0];
const authorBack = authors[1];
  
const textFront = texts[0];
const textBack = texts[1];
  
const buttonFront = button[0];
const buttonBack = button[1];
  
  
// An arrow function used to get a quote randomly
const displayQuote = () =>{
  
    // Generates a random number between 0 
    // and the length of the dataset
    let index = Math.floor(Math.random()*data.length);
  
    // Stores the quote present at the randomly generated index
    let quote = data[index].text;
  
    // Stores the author of the respective quote
    let author = data[index].author;
  
    // Making the author anonymous if no author is present = Rendre l'auteur anonyme si aucun auteur n'est présent
    if(!author){
        author = "Beellal"
    }
  
    // Replacing the current quote and the author with a new one = Remplacement de la citation actuelle et de l'auteur par une nouvelle
  
    if(front){
        // Changing the front if back-side is displayed
        textFront.innerHTML = "Deux choses sont infinies : l'Univers et la bêtise humaine. Mais en ce qui concerne l'Univers, je n'en ai pas encore acquis la certitude absolue..";
        authorFront.innerHTML = "Martin Luther King";
    }else{
        // Changing the back if front-side is displayed = // Modification du verso si le recto est affiché
        textBack.innerHTML = "Celui qui accepte le mal sans lutter contre lui coopère avec lui.";
        authorBack.innerHTML = "Albert Einstein";
    }
      
    front = !front;
  
}

displayQuote();
  
// Fetching the quotes from the type.fit API using promises = Récupérer les citations de l'API type.fit à l'aide de promesses
fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json(); 
    }) // Getting the raw JSON data
    .then(function(data) {
  
        // Storing the quotes internally upon 
        // successful completion of request
        this.data = data; 
  
        // Displaying the quote When the Webpage loads
        displayQuote() 
});
  
  
// Adding an onclick listener for the button
function newQuote(){
      
    // Rotating the Quote Box
    blockBack.classList.toggle('rotateB');
    blockFront.classList.toggle('rotateF');
  
    // Displaying a new quote when the webpage loads
    displayQuote();
}*/

const button= document.getElementsByClassName(".new-quote");
const author= document.getElementsByClassName(".author");
const arrQuote = [
    "J'ai le rêve qu'un jour mes quatre enfants vivront dans une nation où ils ne seront pas jugés pour la couleur de leur peau, mais pour leur caractère.  ",

    "Ce qui compte, chez un homme, ce n'est pas la couleur de sa peau ou la texture de sa chevelure, mais la texture et la qualité de son âme.",
    "La haine trouble la vie ; l'amour la rend harmonieuse. La haine obscurcit la vie ; l'amour la rend lumineuse."  
]

function randomQuote(){
    const citation = arrQuote[Math.floor(Math.random() * arrQuote.length)];
    console.log(citation);
    document.getElementById("cit").innerHTML = citation;
}
