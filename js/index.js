const nameColor = document.querySelector('h1');
nameColor.addEventListener('mouseover', () => {
    nameColor.style.color = '#8aa1b8';
});

const bigBanner = document.querySelector('.banner-text');
bigBanner.addEventListener('mouseover', () => {
    bigBanner.style.fontSize = '2rem';
    bigBanner.style.transition = '0.5s ease';
});



/* Wednesday Guided Lecture Accordion Practice */
const panelData = [
    {
        title: "Early Foundations: Understanding Git",
        content: "In this project I learned how to use git and GitHub for the first time by forking, cloning, adding, commiting, and pushing changes to a repo. It was a challenging and rewarding experience."
    },
    {
        title: "Learning the Ropes: Flexbox",
    content: "In this project, I learned the importance of flexbox in CSS. Flexbox is a great tool that allows us to apply key attributes to parent tags."
    },
    {
        title: "Sprint Challenge: Creating A Home and About Page",
        content: "Here is my completed code from a Lambda School Sprint Challenge. In my first week, in under three hours, I was able to build and style a home and about page from scratch."
    },
    {
        title: "Oh So Meta: My First Website!",
        content: "In my favorite assignment so far, I learned how to edit the HTML and CSS of a pre-existing template to create my own porfolio website."
    }
]

const accordion = document.querySelector('.accordion')

panelData.forEach(data => {
    console.log('creating panel:', data.title)
    accordion.appendChild(createPanel(data.title, data.content))
})

function createPanel(title, content) {
    // define new elements
    const panel = document.createElement('div');
    const panelBar = document.createElement('div');
    const panelTitle = document.createElement('h3');
    const panelButton = document.createElement('div');
    const buttonOpen = document.createElement('button');
    const buttonClose = document.createElement('button');
    const panelContent = document.createElement ('div');

    // set up structure of elements
    panel.appendChild(panelBar)
    panel.appendChild(panelContent)
    panelBar.appendChild(panelTitle)
    panelBar.appendChild(panelButton)
    panelButton.appendChild(buttonOpen)
    panelButton.appendChild(buttonClose)

    // set class names
    panel.classList.add('features-panel')
    panelBar.classList.add('panel-bar')
    panelButton.classList.add('panel-buttons')
    buttonOpen.classList.add('panel-btn-open')
    buttonClose.classList.add('panel-btn-close', 'hide-btn')
    panelContent.classList.add('panel-content')

    // set text context
    buttonOpen.textContent = 'Open'
    buttonClose.textContent = 'Close'
    panelContent.textContent = content
    panelTitle.textContent = title

    // button events
    panelButton.addEventListener('click', event => {
        console.log('button clicked', event.target)
        // 1. toggle hide-btn on BOTH buttons
        buttonOpen.classList.toggle('hide-btn')
        buttonClose.classList.toggle('hide-btn')
        // 2. change visibility of the content w/ 'toggle-on'
        panelContent.classList.toggle('toggle-on')
    }) 
    return panel
}
