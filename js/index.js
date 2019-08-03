(() => {
    let search_btn = document.querySelector('#search-btn');
    let input = document.querySelector('.search-input');
    let container = document.querySelector('.search-container');

    search_btn.onclick = (e) => {
        if (input.classList.contains('box-hidden')) {
            // show
            input.classList.add('box-transition');
            input.clientWidth
            input.classList.remove('box-hidden');

        } else {
            // hide
            input.classList.add('box-transition');
            input.classList.add('box-hidden')
        }
    }
    input.addEventListener('transitionend', () => {
        input.classList.remove('box-transition');

    }, false);

})();