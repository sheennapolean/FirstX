document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

  // GSAP Scroll Animations
  gsap.from(".Home-container h1", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".Home-container p", { opacity: 0, y: 30, duration: 1, delay: 0.5 });
  gsap.from(".globe", { opacity: 0, scale: 0.5, duration: 1, delay: 1 });
  gsap.from(".man2", { opacity: 0, scale: 0.5, duration: 1, delay: 1 });
  gsap.from(".man1", { opacity: 0, scale: 0.5, duration: 1, delay: 1 });

  gsap.from(".services-text h1", { 
      opacity: 0, 
      y: 50, 
      duration: 1, 
      scrollTrigger: {
          trigger: "#services",
          start: "top 80%", 
          end: "bottom 50%",
          toggleActions: "play reverse play reverse"
      }
  });
  gsap.from("#services .card", {
    opacity: 0,               // Start with opacity 0
    y: 50,                    // Start 50px below
    duration: 1,              // Duration of the animation
    stagger: 0.2,             // Delay of 0.2s between each card's animation
    scrollTrigger: {
      trigger: "#services",    // Trigger the animation when #services is in view
      start: "top 10%",         // Start the animation when the top of the container reaches 80% of the viewport
      end: "bottom 20%",       // End the animation when the bottom of the container reaches 20% of the viewport
      scrub: true,             // Makes the animation smooth and synced with scroll position
      toggleActions: "play reverse play reverse"  // Animation reverses when scrolling up
    },
    ease: "power3.out"         // Smooth easing function
  });

  gsap.utils.toArray(".card").forEach((card, index) => {
      gsap.to(card, {
          scrollTrigger: {
              trigger: card,
              start: "top 80%",   
              end: "bottom 20%",  
              scrub: true,       
              toggleActions: "play reverse play reverse"
          },
          opacity: 1,
          y: 0,
          duration: 1
      });
  });

  gsap.from("#benefits h1", { 
      opacity: 0, 
      x: -50, 
      duration: 1, 
      scrollTrigger: {
          trigger: "#benefits",
          start: "top 85%",
          toggleActions: "play reverse play reverse"
      }
  });

  // Adding Fade-In Effect to Benefits Section
  gsap.from("#benefits .fade-in", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,  // Adds stagger effect for the items in the benefits section
    scrollTrigger: {
      trigger: "#benefits",
      start: "top 80%",  // Trigger animation when the top of the section hits 80% of the viewport
      end: "bottom 20%",
      scrub: true,
      toggleActions: "play reverse play reverse"  // Animation reverses when scrolling up
    }
  });

  gsap.utils.toArray(".feature").forEach((feature, index) => {
      gsap.from(feature, { 
          opacity: 0, 
          x: -50, 
          duration: 1, 
          delay: index * 0.2, 
          scrollTrigger: {
              trigger: feature,
              start: "top 85%",
              toggleActions: "play reverse play reverse"
          }
      });
  });

  gsap.from("#about-us", { 
      opacity: 0, 
      y: 50, 
      duration: 1, 
      scrollTrigger: {
          trigger: "#about-us",
          start: "top 85%",
          toggleActions: "play reverse play reverse"
      }
  });

  // Contact Section Animation
  gsap.from("#contact h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",  // Trigger animation when the top of the section hits 80% of the viewport
      end: "bottom 100%",
      scrub: true,
      toggleActions: "play reverse play reverse"  // Animation reverses when scrolling up
    }
  });

  gsap.from("#contact p", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,  // Adds stagger effect for the paragraphs
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",  // Trigger animation when the top of the section is 80% of the viewport height
      end: "bottom 80%",  // End the animation when the bottom of the section reaches the top of the viewport
      scrub: true,
      toggleActions: "play none none none",  // Ensures the animation plays forward once when it enters the viewport
      once: true  // Ensures it plays only once when the section is in view
    }
  });

  gsap.from("#contact .flex", {
    opacity: 0,
    x: -50,
    duration: 1,
    delay: 0.5,  // Slight delay for the social icons
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",  // Trigger animation when the top of the section is 80% of the viewport height
      end: "bottom 30%",  // End the animation when the bottom of the section reaches the top of the viewport
      scrub: true,
      toggleActions: "play none none none",  // Ensures the animation plays forward once when it enters the viewport
      once: true  // Ensures it plays only once when the section is in view
    }
});

});
