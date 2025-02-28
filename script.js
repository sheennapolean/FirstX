
  window.onload = function () {
    // Ensure GSAP and plugins are registered
    if (typeof ScrollTrigger !== 'undefined' && typeof ScrollToPlugin !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

      // Select all fade-in elements
      const fadeInElements = document.querySelectorAll(".fade-in");

      // Ensure that fade-in elements exist
      if (fadeInElements.length > 0) {
        fadeInElements.forEach((element) => {
          gsap.from(element, {
            scrollTrigger: {
              trigger: element,
              start: "top bottom",  // Trigger when element comes into the viewport
              end: "top top",
              scrub: true,  // Smooth animation
            },
            opacity: 0,  // Fade in from 0 opacity
            y: 50,  // Move element up to its original position
            duration: 1,
          });
        });
      } else {
        console.error("No elements with the class 'fade-in' found.");
      }

      // Scroll snapping to next section
      let scrollTimeout;
      const wrapper = document.querySelector(".wrapper");

      // Check if wrapper exists before adding event listener
      if (wrapper) {
        wrapper.addEventListener("wheel", (event) => {
          if (scrollTimeout) {
            clearTimeout(scrollTimeout);
          }

          scrollTimeout = setTimeout(() => {
            const direction = event.deltaY > 0 ? "down" : "up";
            snapToNextSection(direction);
          }, 200);
        });
      } else {
        console.error("No element with class 'wrapper' found.");
      }

      function snapToNextSection(direction) {
        const sections = document.querySelectorAll(".section");
        const currentScroll = wrapper.scrollTop;
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
          gsap.to(wrapper, {
            scrollTo: targetSection,  // Scroll to the section directly
            duration: 1,
            ease: "back.out(0.7)"
          });
        }
      }
    } else {
      console.error("ScrollTrigger or ScrollToPlugin plugin is not loaded.");
    }
  };