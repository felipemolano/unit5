// HEADER
// create a form and append it to the header container

// form
const myForm = document.createElement("form");
const searchContainer = document.getElementsByClassName("search-container")[0];
myForm.action ="#";
myForm.method="GET";

// input for search
const inputSearch = document.createElement("input");
inputSearch.className = "search-input";
inputSearch.placeholder = "Search ...";
inputSearch.id = "search-input";
inputSearch.type = "search";

// input for submit
const inputSubmit = document.createElement("input");
inputSubmit.className = "search-submit";
inputSubmit.id = "search-submit";
inputSubmit.type = "submit";
inputSubmit.value = "Q";


// append the inputs to the form
myForm.appendChild(inputSearch);
myForm.appendChild(inputSubmit);


// append the form to the search container 
searchContainer.appendChild(myForm);


//test log ------------------------------------------------------------------------------------------------ <<<<  
console.log(searchContainer);



// GALLERY


const gallery = document.getElementsByClassName("gallery")[0];

// lets call the addToGallery function just to add some card elements to it x12

for(let i = 0 ; i<12 ; i++)
{
    addToGallery();
}




// MODAL CONTAINER

//create the parent modal container
const modalContainer = document.createElement("div");

const modal = document.createElement("div");
const button = document.createElement("button");
button.id = "modal-close-btn";
button.className = "modal-close-btn";
button.textContent ="X";
modal.className = "modal";



const modalInfoContainer = document.createElement("div");
modalInfoContainer.className = "modal-info-container";


//create the image
const imageModal = document.createElement("img");
imageModal.className = "modal-img";
imageModal.src = "https://placehold.it/125x125";
imageModal.alt = "profile picture";



//create the H3 element
const h3Modal = document.createElement("h3");
h3Modal.id ="name";
h3Modal.className ="modal-name";
h3Modal.classList.add("cap");
h3Modal.textContent = "name";



// create the 5 p elements
const p1modal = document.createElement("p");
p1modal.className ="modal-text";
p1modal.textContent ="email";
const p2modal = document.createElement("p");
p2modal.className ="modal-text";
p2modal.textContent ="city";
const p3modal = document.createElement("p");
p3modal.className ="modal-text";
p3modal.textContent ="(555) 555 - 5555";
const p4modal = document.createElement("p");
p4modal.className ="modal-text";
p4modal.textContent ="123 Portland Ave. ,Portland, OR 97204";
const p5modal = document.createElement("p");
p5modal.className ="modal-text";
p5modal.textContent ="Birthday: 10/21/2015";




// append each element to its parent
modalInfoContainer.appendChild(imageModal);
modalInfoContainer.appendChild(h3Modal);
modalInfoContainer.appendChild(p1modal);
modalInfoContainer.appendChild(p2modal);
modalInfoContainer.appendChild(p3modal);
modalInfoContainer.appendChild(p4modal);
modalInfoContainer.appendChild(p5modal);



modal.appendChild(button);
modal.appendChild(modalInfoContainer);
modalContainer.appendChild(modal);


// append the modal container to the body
const body = document.getElementsByTagName("body")[0];
body.appendChild(modalContainer);



/// **********************************************************************  USEFUL FUNCTIONS 

// this is a function that add a card element to the gallery

function addToGallery(){

        const cardElement = document.createElement("div");
        cardElement.className = "card";




        const cardImage = document.createElement("div");
        cardImage.className = "card-img-container";
        const image = document.createElement("img");
        image.className = "card-img";
        image.src = "https://placehold.it/90x90";
        image.alt = "profile picture";


        cardImage.appendChild(image);


        const cardinfo = document.createElement("div");
        cardinfo.className = "card-info-container";



        const h3 = document.createElement("h3");
        h3.className = "card-name";
        h3.id = "name";
        h3.textContent = "first last"
        const p1 = document.createElement("p");
        p1.className = "card-text";
        p1.textContent="email"
        const p2 = document.createElement("p");
        p2.className = "card-text";
        p2.textContent = "city, state";

        cardinfo.appendChild(h3);
        cardinfo.appendChild(p1);
        cardinfo.appendChild(p2);


        cardElement.appendChild(cardImage);
        cardElement.appendChild(cardinfo);
        gallery.appendChild(cardElement);


}