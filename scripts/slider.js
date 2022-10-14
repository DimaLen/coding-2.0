(function () {
    const slider = document.querySelectorAll('.fade-slider-item');
    const activeClass = "fade-slider-item--visible";
    let index = 0;

    setInterval(function() {
        slider[index].classList.remove(activeClass);
        index++;

        if (index + 1 > slider.length) {
            index = 0;
        } 

        slider[index].classList.add(activeClass);

    }, 2000);

}())