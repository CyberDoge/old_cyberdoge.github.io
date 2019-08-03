(() => {
    let search_btn = document.querySelector('#search-btn');
    let inputs = document.querySelectorAll('.search-container *');
    let search_div = document.querySelector('.search-input');
    let icon = document.querySelector('.ic-search');
    inputs.forEach((i) => i.addEventListener('transitionend', () => {
        i.classList.remove('box-transition');
        search_div.focus();
    }, false));

    search_btn.onclick = (e) => {
        if (inputs[0].classList.contains('box-hidden')) {
            // show
            search_div.style.textContent = '';
            search_btn.textContent = "❌"
            inputs.forEach((i) => i.classList.add('box-transition'));
            inputs.forEach((i) => i.clientWidth);
            inputs.forEach((i) => i.classList.remove('box-hidden'));

        } else {
            // hide
            search_div.style.textContent = '';

            search_btn.textContent = "🔎"
            //icon.style.display = "none";
            search_div.textContent = '';
            inputs.forEach((i) => i.classList.add('box-transition'));
            inputs.forEach((i) => i.classList.add('box-hidden'));
        }
    }

})();