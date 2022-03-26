let popped = 0;

document.addEventListener('mouseover', function(e) {
    if (e.target.className === 'balloon') {
e.target.style.backgroundColor = '#ededed';
e.target.textContext = 'POP!';
popped++;
removeEvent(e);
allBalloonsPopped();
    }
});

function removeEvent(e) {
    e.target.removeEventListener('mouseover', function() {

    })
};

function allBalloonsPopped() {
    if(popped ===24){
    console.log('all popped!');
    let message = document.querySelector('#yay-no-balloons');
    let gallery = document.querySelector('#balloon-gallery');
    message.style.display = 'block';
    gallery.innerHTML='';
}

};