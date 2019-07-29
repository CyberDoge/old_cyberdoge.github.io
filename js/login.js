document.onload((e) => {
    let image = document.querySelector(".image");
    image.onmouseover = () => {
        image.setAttribute("transform", "skew("); //todo
    }
})