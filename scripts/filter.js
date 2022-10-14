(function () {
    const elem = document.querySelector('.products__list');
    const iso = new Isotope( elem, {
      itemSelector: '.products__item',
      filter: '.popular'
    });

    const controlls = document.querySelectorAll('.filter_link');
    const activeFilter = 'filter_link--active';

    controlls.forEach(function(control) {
        control.addEventListener('click', function(e) {
            e.preventDefault();

            const filterName = control.getAttribute("data-filter");
            
            controlls.forEach(function(link) {
                link.closest('.filter_item').classList.remove(activeFilter);
            })
            
            control.closest('.filter_item').classList.add(activeFilter);

            iso.arrange({
                filter: `.${filterName}`
            })
        });
    });

})();