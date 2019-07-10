// Main Header	
const header = document.getElementsByTagName("h1")[0].innerHTML = "Karina Kalpaxis";

const button = document.getElementsByTagName("button")[0].innerHTML = `Home`;

const headerImg = document.getElementById("banner-img");
const headerImgFixed = headerImg.setAttribute("src", siteContent["heading"]["img-src"]);

// Main Content
const sectionHeaders = document.querySelectorAll("h4");
sectionHeaders[0].textContent = "Home";
sectionHeaders[1].textContent = "About";
sectionHeaders[2].textContent = "Resume";
sectionHeaders[3].textContent = "Contact";

const mainImg = document.getElementById("banner-img");
const mainImgFixed = mainImg.setAttribute("src", siteContent["about-content"]["img-src"]);