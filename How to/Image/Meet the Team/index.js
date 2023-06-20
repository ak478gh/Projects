let container = document.getElementsByClassName('container')[0];

let submit = document.getElementById('submit')
submit.addEventListener('click', (event)=> {
    event.preventDefault();
    let image = document.getElementById('image').value
    let naam = document.getElementById('name').value;
    let desc = document.getElementById('desc').value;
    let title = document.getElementById('title').value
    let email = document.getElementById('email').value
    container.append(createCard(image, naam, desc, title, email));
})

// let heading = document.createElement('h1'); //create an element
function createCard(imgSrc, name, desig, desc, email) {
    let card = document.createElement('div');
    card.classList.add('card');

    let textBox = document.createElement('div');
    textBox.classList.add('textBox');

    let img = document.createElement('img');
    img.alt = 'Image';
    img.src = imgSrc;
    card.append(img);

    let name2 = document.createElement('h2');
    name2.innerHTML = name;
    let desig2 = document.createElement('p');
    desig2.innerHTML = desig;
    desig2.classList.add('title')
    let desc2 = document.createElement('p');
    desc2.innerHTML = desc;
    let email2 = document.createElement('p');
    email2.innerHTML = email;
    email2.classList.add('email')

    textBox.append(name2, desig2, desc2, email2);
    card.append(textBox);

    let button = document.createElement('button');
    button.innerHTML = 'Contact';
    textBox.append(button);

    return card;
}
// heading.innerHTML = 'Heading' // manipulate the element
container.append(createCard("https://www.w3schools.com/w3images/team1.jpg", 'Jane Doe', 'CEO & Foiunder', 'Phasellus eget enim eu lectus faucibus vestibulum.', 'example@example.com')) // append the element
container.append(createCard("https://www.w3schools.com/w3images/team1.jpg", 'Amit Kumar', 'CEO & Foiunder', 'Phasellus eget enim eu lectus faucibus vestibulum.', 'example@example.com'))
container.append(createCard("https://www.w3schools.com/w3images/team1.jpg", 'Jane Doe', 'CEO & Foiunder', 'Phasellus eget enim eu lectus faucibus vestibulum.', 'example@example.com'))
container.append(createCard("https://www.w3schools.com/w3images/team1.jpg", 'Jane Doe', 'CEO & Foiunder', 'Phasellus eget enim eu lectus faucibus vestibulum.', 'example@example.com'))

