const nameColor = document.querySelector('h1');
nameColor.addEventListener('mouseover', () => {
    nameColor.style.color = '#8aa1b8';
});

const byeBanner = document.querySelector('.banner-text');
byeBanner.addEventListener('click', () => {
    byeBanner.style.display = 'none';
});


/* Wednesday Guided Lecture Accordion Practice */
const panelData = [
    {
        title: "Early Foundations: Understanding Git",
        content: "In this project I learned how to use git and GitHub for the first time by forking, cloning, adding, commiting, and pushing changes to a repo. It was a challenging and rewarding experience."
    },
    {
        title: "Early Foundations: Understanding Git",
        content: "In this project I learned how to use git and GitHub for the first time by forking, cloning, adding, commiting, and pushing changes to a repo. It was a challenging and rewarding experience."
    },
    {
        title: "Early Foundations: Understanding Git",
        content: "In this project I learned how to use git and GitHub for the first time by forking, cloning, adding, commiting, and pushing changes to a repo. It was a challenging and rewarding experience."
    },  
]

const accordion = document.querySelector('.accordion')

accordion.appendChild(createPanel2('hi rosie', 'best cat award'))

panelData.forEach(data => {
    console.log('creating panel:', data.title)
    accordion.appendChild(createPanel2(data.title, data.content))
})

function createPanel(title, content) {
    // define new elements
    const panel = document.createElement('div');
    const panelBar = document.createElement('div');
    const title = document.createElement('h3');
    const panelButton = document.createElement('div');
    const buttonOpen = document.createElement('button');
    const buttonClose = document.createElement('button');
    const panelContent = document.createElement ('div');

    // set up structure of elements
    panel.appendChild(panelBar)
    panel.appendChild(panelContent)
    panelBar.appendChild(title)
    panelBar.appendChild(button)
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
    buttonPanel.addEventListener('click', event => {
        console.log('button clicked', event.target)
        // 1. toggle hide-btn on BOTH buttons
        buttonOpen.classList.toggle('hide-btn')
        buttonClose.classList.toggle('hide-btn')
        // 2. change visibility of the content w/ 'toggle-on'
        panelContent.classList.toggle('toggle-on')
    }) 
    return panel
}

function createPanel2(title, content) {
    const panel = document.createElement('div')
    panel.innerHTML = `<div class="panel">
    <div class="panel-bar">
      <h3>${title}</h3>
      <div class="panel-buttons">
        <button class="panel-btn-open">Open</button>
        <button class="panel-btn-close hide-btn">Close</button>
      </div>
    </div>
    <div class="panel-content">
      ${content}
    </div>
  </div>`
    return panel
  }