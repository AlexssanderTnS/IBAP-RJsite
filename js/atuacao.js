document.addEventListener('DOMContentLoaded', () => {

    /*
     * Ano automático
     */

    const year = document.getElementById('year');

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /*
     * Reveal das seções
     */

    const revealElements =
        document.querySelectorAll('.reveal');


    if (
        'IntersectionObserver' in window &&
        !window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.classList.add(
                            'is-visible'
                        );

                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        '0px 0px -50px 0px'
                }
            );


        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add(
                'is-visible'
            );
        });

    }


    /*
     * Rolagem suave entre as
     * frentes e os destaques
     */

    const internalLinks =
        document.querySelectorAll(
            '.frente-card[href^="#"]'
        );


    internalLinks.forEach((link) => {

        link.addEventListener(
            'click',
            (event) => {

                const targetId =
                    link.getAttribute('href');

                if (
                    !targetId ||
                    targetId === '#'
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });


                history.replaceState(
                    null,
                    '',
                    targetId
                );

            }
        );

    });

});