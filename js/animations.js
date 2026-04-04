export function Animations() {

    const aboutTitle = document.querySelector(".about-title");
    const aboutContent = document.querySelector(".about-content");
    const movieListCon = document.querySelector(".movie-list-con");
    const movieButtons = document.querySelectorAll("#movie-list li");
    const movieInfo = document.querySelector(".movie-info");
    const footer = document.querySelector(".footer");

    function registerPlugins() {
        if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
            return false;
        }

        gsap.registerPlugin(ScrollTrigger);
            return true;
    }

    function animateAboutTitle() {
        if (!aboutTitle) {
            return;
        }

        gsap.from(aboutTitle, {
            scrollTrigger: {
                trigger: aboutContent,
                start: "top 85%"
            },
            opacity: 0,
            y: 30,
            duration: 2,
            ease: "power2.out"
        });
    }

    function animateAboutContent() {
        if (!aboutContent) {
            return;
        }

        gsap.from(aboutContent, {
            scrollTrigger: {
                trigger: aboutContent,
                start: "top 85%"
            },
            opacity: 0,
            y: 30,
            duration: 2,
            ease: "power2.out"
        });
    }

    function animateMovieListCon() {
        if (!movieListCon) {
            return;
        }

        gsap.from(movieListCon, {
            scrollTrigger: {
                trigger: movieListCon,
                start: "top 85%"
            },
            opacity: 0,
            y: 50,
            duration: 0.9,
            ease: "power2.out"
        });
    }

    function animateMovieButtons() {
        if (movieButtons.length === 0) {
            return;
        }

        gsap.from(movieButtons, {
            scrollTrigger: {
                trigger: movieButtons[0],
                start: "top 88%"
            },
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.08,
            ease: "power1.out"
        });
    }

    function animateMovieInfo() {
        if (!movieInfo) {
            return;
        }

        gsap.from(movieInfo, {
            scrollTrigger: {
                trigger: movieInfo,
                start: "top 85%"
            },
            opacity: 0,
            x: 40,
            duration: 0.9,
            ease: "power2.out"
        });
    }

    function animateFooter() {
        if (!footer) {
            return;
        }

        gsap.from(footer, {
            scrollTrigger: {
                trigger: footer,
                start: "top 90%"
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power2.out"
        });
    }

    function initAnimations() {
        const gsapReady = registerPlugins();

        if (!gsapReady) {
            return;
        }

        animateAboutTitle();
        animateAboutContent();
        animateMovieListCon();
        animateMovieButtons();
        animateMovieInfo();
        animateFooter();
    }

    initAnimations();

}