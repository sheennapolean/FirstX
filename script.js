document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);  // Make sure both plugins are registered

    // Select all sections
    const sections = document.querySelectorAll(".section");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function () {
        console.log("clicked");
        navLinks.classList.toggle("active");
    });

    sections.forEach((section, index) => {
        gsap.fromTo(
            section,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "top 30%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    });

    // Scroll snapping to next section
    let scrollTimeout;
    document.querySelector(".wrapper").addEventListener("wheel", (event) => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }

        scrollTimeout = setTimeout(() => {
            const direction = event.deltaY > 0 ? "down" : "up";
            snapToNextSection(direction);
        }, 200);
    });

    function snapToNextSection(direction) {
        const sections = document.querySelectorAll(".section");
        const currentScroll = document.querySelector(".wrapper").scrollTop;
        let targetSection;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (direction === "down" && sectionTop > currentScroll + 10) {
                targetSection = section;
                return;
            } else if (direction === "up" && sectionTop < currentScroll - 10) {
                targetSection = section;
            }
        });

        if (targetSection) {
            gsap.to(".wrapper", {
                scrollTo: targetSection,  // Scroll to the section directly
                duration: 1,
                ease: "power2.inOut"
            });
        }
    }
});
