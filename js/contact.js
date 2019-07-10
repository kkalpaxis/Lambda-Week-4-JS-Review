const nameColor = document.querySelector('h1');
nameColor.addEventListener('mouseover', () => {
    nameColor.style.color = '#8aa1b8';
});

document.getElementById("name").addEventListener('click', nameExample());
function nameExample() {
    var nameEx = document.getElementById("name").value;
    nameEx = "FirstName LastName";
} 

document.getElementById("email").addEventListener('click', emailExample());
function emailExample() {
    var emailEx = document.getElementById("email").value;
    emailEx = "email@address.com";
} 





