let hmi = document.getElementById('hmi');
let menus = document.getElementById('menus');
console.log('script worked')

let menusVisible = false;
const openMenu = ()=> {
    if(menusVisible) {
        menus.style.height = '0vh';
        menusVisible = ! menusVisible;
    } else {
        menus.style.height = 'auto';
        menusVisible = ! menusVisible;
    }
    
    console.log('function worked')
}

hmi.addEventListener('click', openMenu)