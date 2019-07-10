const nameColor = document.querySelector('h1');
nameColor.addEventListener('mouseover', () => {
    nameColor.style.color = '#8aa1b8';
});

function nameExample(event) {
    document.getElementById("name").value = "FirstName LastName";
}

function emailExample(event) {
    document.getElementById("email").value = "email@address.com";
} 

function nameClear (event) {
    document.getElementById("name").value = "";
}

function emailClear (event) {
    document.getElementById("email").value = "";
}

const formName = document.getElementById("name");
formName.addEventListener('mouseover', nameExample);
formName.addEventListener('click', nameClear);

const formEmail = document.getElementById("email");
formEmail.addEventListener('mouseover', emailExample);
formEmail.addEventListener('click', emailClear);

const formSubmit = document.getElementById("submit");
formSubmit.addEventListener('click', () => {
    alert('Thank you!');
});






