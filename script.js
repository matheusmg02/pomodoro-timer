const playButton = document.querySelector('.clock-buttons button');

function changeIcon(event) {
    const buttonIcon = event.currentTarget.querySelector('i')
    buttonIcon.classList.toggle('fi-sr-play');
    buttonIcon.classList.toggle('fi-sr-pause');
}

playButton.addEventListener('click', changeIcon)