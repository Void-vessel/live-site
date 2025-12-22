window.addEventListener("DOMContentLoaded", () => {
    if (!window.gsap || !window.ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    // Ensure services.js has loaded
    if (!window.services || !Array.isArray(window.services)) {
        console.error("services.js data not found. Check script loading order.");
        return;
    }
    if (!window.testimonials || !Array.isArray(window.testimonials)) {
        console.error("Testimonials data not found. Check services.js exports.");
        return;
    }

    const gridEl = document.getElementById("service-grid");
    const scrollEl = document.getElementById("services-scroll");
    const testimonialsEl = document.getElementById("testimonials-grid");

    const buildGrid = () => {
        if (!gridEl) return;
        gridEl.innerHTML = "";

        window.services.forEach((service) => {
            const card = document.createElement("article");
            card.className = "service-card";
            card.style.setProperty("--card-accent", service.accent);
            card.innerHTML = `
                <div class="service-card__icon" style="background: linear-gradient(145deg, ${service.accent}1A, ${service.accent}33);">
                    ${service.title.charAt(0)}
                </div>
                <h3 class="service-card__title">${service.title}</h3>
                <p class="service-card__copy">${service.summary}</p>
                <span class="service-card__cta">Dive in <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            `;
            card.addEventListener("click", () => {
                const target = document.getElementById(`service-${service.slug}`);
                if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
            });
            gridEl.appendChild(card);
        });
    };

    const buildTestimonials = () => {
        if (!testimonialsEl) {
            console.warn("Testimonials grid element not found");
            return;
        }
        
        const list = window.testimonials;
        if (!list || list.length === 0) {
            console.error("Testimonials data is missing. window.testimonials:", window.testimonials);
            testimonialsEl.innerHTML = "<p style='color: var(--muted); padding: 20px;'>Testimonials data not loaded. Check console for errors.</p>";
            return;
        }
        
        testimonialsEl.innerHTML = "";

        list.forEach((t) => {
            const card = document.createElement("article");
            card.className = "testimonial-card";
            card.innerHTML = `
                <p class="testimonial-quote">"${t.quote}"</p>
                <div class="testimonial-meta">
                    <span>${t.name} · ${t.role}</span>
                    <span class="testimonial-chip">${t.highlight}</span>
                </div>
            `;
            testimonialsEl.appendChild(card);
        });
        
        console.log(`Rendered ${list.length} testimonials`);
    };


    const buildDetails = () => {


        if (!scrollEl) return;
        scrollEl.innerHTML = "";

        window.services.forEach((service) => {
            const block = document.createElement("section");
            block.className = "service-block";
            block.id = `service-${service.slug}`;

            
        const badges = Array.isArray(service.badges) ? service.badges : [];

            const sticky = document.createElement("div");
            //bg image setup
            sticky.className = "service-sticky";
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

            block.appendChild(sticky);
            block.appendChild(scroller);
            scrollEl.appendChild(block);
        });
    };

    const animateHero = () => {
        gsap.from(".hero__title", { y: 24, opacity: 0, duration: 1, ease: "power3.out" });
        gsap.from(".hero__subtitle", { y: 20, opacity: 0, duration: 1, ease: "power3.out", delay: 0.1 });
        gsap.from(".hero__actions", { y: 18, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 });
        gsap.to(".hero__floating--dot", { y: 12, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to(".hero__floating--ring", { rotation: 8, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });
    };


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
                start: "top 80%"
            }
        });
    };

    const initScrollTriggers = () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());

        const mm = gsap.matchMedia();

        mm.add("(min-width: 900px)", () => {
            document.querySelectorAll(".service-block").forEach((block) => {
                const sticky = block.querySelector(".service-sticky");
                const scroller = block.querySelector(".service-scroller");

                if (!sticky || !scroller) return;

                ScrollTrigger.create({
                    trigger: block,
                    start: "top top",
                    end: () => `+=${scroller.scrollHeight}`,
                    pin: sticky,
                    pinSpacing: true,
                    scrub: true
                });

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

        mm.add("(max-width: 899px)", () => {
            // On mobile we keep natural flow; fade-in items only
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

        ScrollTrigger.refresh();
    };

    window.handleFormSubmit = function (event) {
        event.preventDefault();
        const btn = event.target.querySelector('button');
        const originalText = btn.innerHTML;
        
        // Change button state
        btn.innerHTML = '<span>Sending...</span>';
        btn.style.opacity = '0.7';
        
        const form = event.target;
        const formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                btn.innerHTML = '<span>Message Sent!</span>';
                btn.style.backgroundColor = '#10b981';
                form.reset();

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
        btn.innerHTML = '<span>Error. Try again</span>';
        btn.style.backgroundColor = '#ef4444'; // red
        btn.style.opacity = '1';
        });
    };


    // --- THEME TOGGLE (Handles Multiple Buttons) ---
    // Select ALL theme buttons (Mobile & Desktop)
    // --- THEME TOGGLE (Cleaned for Multiple Buttons) ---
    const themeToggles = document.querySelectorAll(".theme-toggle");

    const updateThemeUI = (isDark) => {
        themeToggles.forEach(btn => {
            // Update text only if the button is the desktop version
            if (btn.classList.contains('desktop-theme-btn')) {
                 btn.textContent = isDark ? "☀ Light" : "🌙 Dark";
            } else {
                 btn.textContent = isDark ? "☀" : "🌙"; // Icon only for mobile
            }
        });
    };

    // 1. Check saved theme on load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        updateThemeUI(true);
    } else {
        updateThemeUI(false);
    }

    // 2. Add click listeners to ALL toggle buttons
    themeToggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            updateThemeUI(isDark);
        });
    });

    // --- MOBILE OFF-CANVAS MENU ---
    const menuToggle = document.querySelector(".mobile-toggle");
    const navWrapper = document.getElementById("nav-wrapper");
    const navLinks = document.querySelectorAll(".nav-link");

    // Define the backdrop element
    const navBackdrop = document.getElementById("nav-backdrop");

    const setMenuOpen = (isOpen) => {
        if (!menuToggle || !navWrapper) return;
        
        // Toggle Menu
        navWrapper.classList.toggle("is-open", isOpen);
        document.body.classList.toggle("menu-open", isOpen);
        menuToggle.classList.toggle("is-open", isOpen);
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

        // FIX: Toggle Backdrop Visibility
        if (navBackdrop) {
            navBackdrop.classList.toggle("is-visible", isOpen);
        }
    };
    
    // FIX: Add click listener to backdrop to close menu
    if (navBackdrop) {
        navBackdrop.addEventListener("click", () => setMenuOpen(false));
    }

    if (menuToggle && navWrapper) {
        menuToggle.addEventListener("click", () => {
            const isOpen = !navWrapper.classList.contains("is-open");
            setMenuOpen(isOpen);
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", () => setMenuOpen(false));
        });

        // Close on Escape key
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && navWrapper.classList.contains("is-open")) {
                setMenuOpen(false);
            }
        });
    }
    buildGrid();
    buildTestimonials();
    buildDetails();
    animateHero();
    initScrollTriggers();
    animateTestimonials();

    window.addEventListener("resize", () => ScrollTrigger.refresh());
});