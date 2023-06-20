let buttons = document.getElementsByClassName('category')[0].children;
let album = document.getElementsByClassName('album')[0].children;

const sort = (event)=> {
    let category = event.target.innerHTML;
    
    for(let i=0; i<album.length; i++) {
        if(Array.from(album[i].classList).includes(category)) {
            album[i].style.display = 'block'
        } else {
            album[i].style.display = 'none'
        }
    }
}

for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', sort)
}

