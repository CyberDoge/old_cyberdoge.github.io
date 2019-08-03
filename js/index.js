(() => {
    let search_btn = document.querySelector('#search-btn');
    let inputs = document.querySelectorAll('.search-container input');
    let icon = document.querySelector('.ic-search');
    inputs.forEach((i) => i.addEventListener('transitionend', () => {
        i.classList.remove('box-transition');
        console.log(i)
    }, false));

    search_btn.onclick = (e) => {
        if (inputs[0].classList.contains('box-hidden')) {
            // show
            search_btn.textContent = "❌"
            //icon.style.display = "inline";
            inputs.forEach((i) => i.classList.add('box-transition'));
            inputs.forEach((i) => i.clientWidth);
            inputs.forEach((i) => i.classList.remove('box-hidden'));

        } else {
            // hide
            search_btn.textContent = "🔎"
            //icon.style.display = "none";
            inputs.forEach((i) => i.classList.add('box-transition'));
            inputs.forEach((i) => i.classList.add('box-hidden'));
        }
    }

})();