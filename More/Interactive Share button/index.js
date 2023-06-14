let share = document.getElementById('share')
let close = document.getElementById('close')
let insta = document.getElementById('insta')
let snap = document.getElementById('snap')
let twitter = document.getElementById('twitter')

share.addEventListener('click', ()=> {
    close.style.zIndex = '1';
    insta.style.transform = 'translate(-100px)';
    snap.style.transform = 'translate(0, -100px)';
    twitter.style.transform = 'translate(100px)';
})

close.addEventListener('click', ()=> {
    close.style.zIndex = 0;
    insta.style.transform = 'translate(0)';
    snap.style.transform = 'translate(0)';
    twitter.style.transform = 'translate(0)';
})