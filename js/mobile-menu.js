(() => {
    const refs = {
        openMobileMenulBtn: document.querySelector('[mobile-menu-open]'),
        closeMobileMenulBtn: document.querySelector('[mobile-menu-close]'),
        mobileMenu: document.querySelector('[mobile-menu]'),
    };

    refs.openMobileMenulBtn.addEventListener('click', toggleMobile);
    refs.closeMobileMenulBtn.addEventListener('click', toggleMobile);

    function toggleMobile() {
        refs.mobileMenu.classList.toggle('is-open');
        refs.closeMobileMenulBtn.classList.toggle('is-open');
        document.body.classList.toggle('modal-open');
    }

    window.matchMedia('(max-width: 767px)').addEventListener('change', e => {
        if (!e.matches) return;
        refs.mobileMenu.classList.remove('is-open');
    });
})();
