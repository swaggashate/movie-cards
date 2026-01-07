let genreSelect = document.getElementById('genre');
let cards = document.getElementsByClassName('card');

genreSelect.addEventListener("change", function() {
    let selected = genreSelect.value;
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let g = card.getAttribute('data-genre');
        if (selected === 'all' || g === selected) {
            card.classList.remove('hidden')
        } else {
            card.classList.add('hidden')
        }
    }
})