(() => {
    const buttons = document.querySelectorAll('.projects-filter__btn');
    const filterBox = document.querySelectorAll('.projects__item');

    function filter(category, items) {
        items.forEach(item => {
            const isItemFiltered = !item.classList.contains(category);
            const isShowAll = category.toLowerCase() === 'all';
            if (isItemFiltered && !isShowAll) {
                item.classList.add('visually-hidden');
            } else {
                item.classList.remove('is-card-hidden');
                item.classList.remove('visually-hidden');
            }
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', event => {
            let currentCategory = event.target.dataset['filter'];
            buttons.forEach(button => {
                button.classList.remove('projects-filter__btn--current');
            });
            filterBox.forEach(box => {
                box.classList.add('is-card-hidden');
                box.ontransitionend = function () {
                    filter(currentCategory, filterBox);
                };
            });
            event.target.classList.add('projects-filter__btn--current');
        });
    });
})();
