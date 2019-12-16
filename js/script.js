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


//test log
console.log(searchContainer);



// GALLERY


const gallery = document.getElementsByClassName("gallery")[0];
addToGallery();
addToGallery();
addToGallery();
addToGallery();




// MODAL CONTAINER

const modalContainer = document.createElement("div");
const modal = document.createElement("div");
const button = document.createElement("button");
const modalInfoContainer = document.createElement("div");

const imageModal = document.createElement("img");
const h3Modal = document.createElement("h3");

const p1modal = document.createElement("p");
const p2modal = document.createElement("p");
const p3Modal = document.createElement("p");
const p4Modal = document.createElement("p");
const p5Modal = document.createElement("p");


/*
<div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
            <h3 id="name" class="modal-name cap">name</h3>
            <p class="modal-text">email</p>
            <p class="modal-text cap">city</p>
            <hr>
            <p class="modal-text">(555) 555-5555</p>
            <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
        </div>
    </div>
</div>
*/


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