let app = document.getElementsByClassName('container')[0];

function createCard(name, title, desc, email) {

    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
            <div class="card">
                <img src="https://www.w3schools.com/w3images/team1.jpg" alt=""/>
                <div class="textBox">
                    <h2>${name}</h2>
                    <p class="title">${title}</p>
                    <p>${desc}</p>
                    <p class="email">${email}</p>
                    <button>Contact</button>
                </div>
            </div>
     `;
    return card;
}

app.append(createCard('AK', 'Front End Dev.', 'Phase aksjdf asd skdjf lsk sldkf faucibusas alsdjf sld', 'hackak4444@gmail.com'));
app.append(createCard('AK', 'Front End Dev.', 'Phase aksjdf asd skdjf lsk sldkf faucibusas alsdjf sld', 'hackak4444@gmail.com'));
app.append(createCard('AK', 'Front End Dev.', 'Phase aksjdf asd skdjf lsk sldkf faucibusas alsdjf sld', 'hackak4444@gmail.com'));