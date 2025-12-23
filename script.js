document.addEventListener("DOMContentLoaded", () => {

    // ============================================
    // 1. SAFETY CHECKS & SETUP
    // ============================================

    // Check if GSAP libraries are loaded
    if (!window.gsap || !window.ScrollTrigger) {
        console.error("GSAP not found. Animations will not work.");
        return;
    }
    gsap.registerPlugin(ScrollTrigger);

    // Check if external data files (services.js) are loaded
    if (!window.services || !Array.isArray(window.services)) {
        console.error("Error: 'services' data not found. Check if services.js is loaded in the <head>.");
        return;
    }
    if (!window.testimonials || !Array.isArray(window.testimonials)) {
        console.error("Error: 'testimonials' data not found.");
        return;
    }

    // Select Main Container Elements
    const gridEl = document.getElementById("service-grid");
    const scrollEl = document.getElementById("services-scroll");
    const testimonialsEl = document.getElementById("testimonials-grid");


    // ============================================
    // 2. CONTENT RENDERING FUNCTIONS
    // ============================================

    /**
     * Renders the main "Overview" grid at the top of the Services section.
     */
    const buildGrid = () => {
        if (!gridEl) return;
        gridEl.innerHTML = ""; // Clear existing content

        window.services.forEach((service) => {
            const card = document.createElement("article");
            card.className = "service-card";
            // Set a CSS variable for dynamic accent colors
            card.style.setProperty("--card-accent", service.accent);

            card.innerHTML = `
                <div class="service-card__icon" style="background: linear-gradient(145deg, ${service.accent}1A, ${service.accent}33);">
                    ${service.title.charAt(0)}
                </div>
                <h3 class="service-card__title">${service.title}</h3>
                <p class="service-card__copy">${service.summary}</p>
                <span class="service-card__cta">Dive in 
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            `;

            // Scroll to the specific details section on click
            card.addEventListener("click", () => {
                const target = document.getElementById(`service-${service.slug}`);
                if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
            });

            gridEl.appendChild(card);
        });
    };

    /**
     * Renders the "Deep Dives" section.
     * This creates the Sticky Header on the left and the Scrolling Content on the right.
     */
    const buildDetails = () => {
        if (!scrollEl) return;
        scrollEl.innerHTML = "";

        window.services.forEach((service) => {
            const block = document.createElement("section");
            block.className = "service-block";
            block.id = `service-${service.slug}`;

            const badges = Array.isArray(service.badges) ? service.badges : [];

            // -- 1. Create the Sticky Left Side --
            const sticky = document.createElement("div");
            sticky.className = "service-sticky";

            // Apply background image if it exists in data
            if (service.bg) {
                sticky.style.backgroundImage = `url('${service.bg}')`;
                sticky.style.backgroundSize = "cover";
                sticky.style.backgroundPosition = "top";
                sticky.style.backgroundRepeat = "no-repeat";
            }

            sticky.innerHTML = `
                <div>
                    ${badges.length ? `<p class="eyebrow">${badges.join(" · ")}</p>` : ""}
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>
                ${badges.length ? `
                    <div class="service-meta">
                        ${badges.map(badge => `<span class="badge">${badge}</span>`).join("")}
                    </div>
                ` : ""}
            `;

            // -- 2. Create the Scrolling Right Side --
            const scroller = document.createElement("div");
            scroller.className = "service-scroller";
            scroller.style.setProperty("--accent", service.accent);

            service.items.forEach((item) => {
                const card = document.createElement("div");
                card.className = "service-item";
                card.innerHTML = `
                    <p class="service-item__label">${item.label} <span class="service-item__chip">${item.tag}</span></p>
                    <p class="service-item__body">${item.body}</p>
                `;
                scroller.appendChild(card);
            });

            // Append parts to the main block
            block.appendChild(sticky);
            block.appendChild(scroller);
            scrollEl.appendChild(block);
        });
    };

    /**
     * Renders the Testimonial Marquee with Star Ratings
     */
    const buildTestimonials = () => {
        const track = document.getElementById("testimonials-track");
        if (!track || !window.testimonials) return;

        // 1. Helper to generate Star SVGs
        const getStars = (count) => {
            let starsHtml = '';
            for (let i = 0; i < 5; i++) {
                // Fill color if i < count, else lighter gray (empty)
                const fill = i < count ? 'currentColor' : 'var(--border)';
                starsHtml += `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="${fill}" stroke="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                `;
            }
            return starsHtml;
        };

        // 2. Generate Card HTML with TWO Logo Images
        const createCardHtml = (t) => `
            <div class="testimonial-card-v2">
                <div class="logo-wrapper">
                    <img src="${t.logo_light}" alt="${t.name}" class="t-logo logo-light">
                    <img src="${t.logo_dark}" alt="${t.name}" class="t-logo logo-dark">
                </div>
        
                <div class="content-reveal">
                    <p class="t-quote">"${t.quote}"</p>
                    <div>
                        <div class="t-stars">${getStars(t.rating)}</div>
                    </div>
                </div>
            </div>
        `;

        // 3. Generate content
        // We map the data to HTML strings
        const cardsHtml = window.testimonials.map(createCardHtml).join('');

        // 4. DUPLICATE content for infinite loop (Set A + Set B)
        track.innerHTML = cardsHtml + cardsHtml + cardsHtml + cardsHtml;
    };


    // ============================================
    // 3. ANIMATION LOGIC (GSAP)
    // ============================================

    /**
     * Animates the Hero section (Title, Subtitle, Buttons) on page load.
     */
    const animateHero = () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".hero__title", { y: 24, opacity: 0, duration: 1 })
            .from(".hero__subtitle", { y: 20, opacity: 0, duration: 1 }, "-=0.8")
            .from(".hero__actions", { y: 18, opacity: 0, duration: 1 }, "-=0.8");

        // Continuous floating animation for background shapes
        gsap.to(".hero__floating--dot", { y: 12, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to(".hero__floating--ring", { rotation: 8, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });
    };

    /**
     * Animates testimonials as they scroll into view.
     */
    const animateTestimonials = () => {
        if (!testimonialsEl) return;
        gsap.from(testimonialsEl.children, {
            y: 24,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
                trigger: testimonialsEl,
                start: "top 80%" // Start animation when top of grid hits 80% of viewport height
            }
        });
    };

    /**
     * Sets up the complex ScrollTriggers for the "Deep Dives" section.
     * Uses MatchMedia to have different behavior for Desktop vs Mobile.
     */
    const initScrollTriggers = () => {
        // Kill old triggers to prevent duplication on resize
        ScrollTrigger.getAll().forEach((t) => t.kill());

        const mm = gsap.matchMedia();

        // -- Desktop Logic (Width >= 900px) --
        mm.add("(min-width: 900px)", () => {
            document.querySelectorAll(".service-block").forEach((block) => {
                const sticky = block.querySelector(".service-sticky");
                const scroller = block.querySelector(".service-scroller");

                if (!sticky || !scroller) return;

                // 1. Pin the Left Side while Right Side scrolls
                ScrollTrigger.create({
                    trigger: block,
                    start: "top top",
                    end: () => `+=${scroller.scrollHeight}`,
                    pin: sticky,
                    pinSpacing: true,
                    scrub: true
                });

                // 2. Fade in items on the Right Side
                gsap.utils.toArray(block.querySelectorAll(".service-item")).forEach((item) => {
                    gsap.from(item, {
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    });
                });
            });
        });

        // -- Mobile Logic (Width < 899px) --
        mm.add("(max-width: 899px)", () => {
            // No pinning on mobile, just simple fade-ins
            gsap.utils.toArray(".service-item").forEach((item) => {
                gsap.from(item, {
                    y: 18,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                });
            });
        });

        // Recalculate positions
        ScrollTrigger.refresh();
    };


    // ============================================
    // 4. FORM HANDLING
    // ============================================

    // Attached to window so the HTML 'onsubmit' attribute can find it
    window.handleFormSubmit = function (event) {
        event.preventDefault();

        const form = event.target;
        const btn = form.querySelector('button');
        const originalText = btn.innerHTML;

        // 1. Loading State
        btn.innerHTML = '<span>Sending...</span>';
        btn.style.opacity = '0.7';

        const formData = new FormData(form);

        // 2. Submit to Formspree
        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        })
            .then(response => {
                if (response.ok) {
                    // 3. Success State
                    btn.innerHTML = '<span>Message Sent!</span>';
                    btn.style.backgroundColor = '#10b981'; // Green
                    form.reset();

                    // Reset button after 3 seconds
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.style.backgroundColor = '';
                        btn.style.opacity = '1';
                    }, 3000);
                } else {
                    throw new Error("Form submission failed");
                }
            })
            .catch(() => {
                // 4. Error State
                btn.innerHTML = '<span>Error. Try again</span>';
                btn.style.backgroundColor = '#ef4444'; // Red
                btn.style.opacity = '1';
            });
    };


    // ============================================
    // 5. UI INTERACTION (Theme & Menu)
    // ============================================

    /* --- Theme Toggle (Dark/Light Mode) --- */
    const themeToggles = document.querySelectorAll(".theme-toggle");

    // Function to update button text/icon based on state
    const updateThemeUI = (isDark) => {
        themeToggles.forEach(btn => {
            if (btn.classList.contains('desktop-theme-btn')) {
                btn.textContent = isDark ? "☀ Light" : "🌙 Dark";
            } else {
                btn.textContent = isDark ? "☀" : "🌙"; // Mobile icon only
            }
        });
    };

    // Check LocalStorage on load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        updateThemeUI(true);
    } else {
        updateThemeUI(false);
    }

    // Add Click Listeners
    themeToggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");

            // Save preference
            localStorage.setItem("theme", isDark ? "dark" : "light");
            updateThemeUI(isDark);
        });
    });

    /* --- Mobile Off-Canvas Menu --- */
    const menuToggle = document.querySelector(".mobile-toggle");
    const navWrapper = document.getElementById("nav-wrapper");
    const navBackdrop = document.getElementById("nav-backdrop");
    const navLinks = document.querySelectorAll(".nav-link");

    // Helper to Open/Close Menu
    const setMenuOpen = (isOpen) => {
        if (!menuToggle || !navWrapper) return;

        navWrapper.classList.toggle("is-open", isOpen);
        document.body.classList.toggle("menu-open", isOpen); // Locks body scroll
        menuToggle.classList.toggle("is-open", isOpen);
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

        if (navBackdrop) {
            navBackdrop.classList.toggle("is-visible", isOpen);
        }
    };

    // Event Listeners for Menu
    if (menuToggle && navWrapper) {
        // Toggle button click
        menuToggle.addEventListener("click", () => {
            const isOpen = !navWrapper.classList.contains("is-open");
            setMenuOpen(isOpen);
        });

        // Close when clicking a link
        navLinks.forEach((link) => {
            link.addEventListener("click", () => setMenuOpen(false));
        });

        // Close when clicking the dark backdrop
        if (navBackdrop) {
            navBackdrop.addEventListener("click", () => setMenuOpen(false));
        }

        // Close when pressing 'Escape' key
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && navWrapper.classList.contains("is-open")) {
                setMenuOpen(false);
            }
        });
    }

    // ============================================
    // 6. INITIALIZATION
    // ============================================
    buildGrid();
    buildTestimonials();
    buildDetails();
    animateHero();
    initScrollTriggers();
    animateTestimonials();

    // Recalculate animations on window resize
    window.addEventListener("resize", () => ScrollTrigger.refresh());
});