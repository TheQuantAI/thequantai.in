/* ─── TheQuantAI — Interactive Behaviour ─── */

document.addEventListener("DOMContentLoaded", () => {
    /* ─ Sticky Nav ─ */
    const nav = document.getElementById("nav");
    const onScroll = () => {
        if (!nav) return;
        nav.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ─ Mobile Nav Toggle ─ */
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    if (toggle && links) {
        toggle.addEventListener("click", () => links.classList.toggle("open"));
        links.querySelectorAll("a").forEach((a) =>
            a.addEventListener("click", () => links.classList.remove("open"))
        );
    }

    /* ─ Smooth Scroll ─ */
    document.querySelectorAll('a[href^="#"]').forEach((a) =>
        a.addEventListener("click", (e) => {
            const id = a.getAttribute("href");
            if (!id || id === "#") return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                const offset = nav ? nav.offsetHeight + 16 : 80;
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: "smooth",
                });
            }
        })
    );

    /* ─ Copy pip install ─ */
    document.querySelectorAll(".copy-btn").forEach((btn) =>
        btn.addEventListener("click", () => {
            const code = btn.closest(".cta-install")?.querySelector("code");
            if (!code) return;
            navigator.clipboard.writeText(code.textContent.trim()).then(() => {
                const original = btn.innerHTML;
                btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>`;
                setTimeout(() => (btn.innerHTML = original), 2000);
            });
        })
    );

    /* ─ Intersection Observer — fade-in on scroll ─ */
    const faders = document.querySelectorAll(
        ".mission-card, .vertical-card, .tech-feature, .timeline-item, .team-card"
    );
    if ("IntersectionObserver" in window) {
        const style = document.createElement("style");
        style.textContent = `
            .fade-target { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
            .fade-target.visible { opacity: 1; transform: translateY(0); }
        `;
        document.head.appendChild(style);
        faders.forEach((el, i) => {
            el.classList.add("fade-target");
            el.style.transitionDelay = `${(i % 4) * 80}ms`;
        });
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach(
                    (e) => e.isIntersecting && e.target.classList.add("visible")
                ),
            { threshold: 0.15 }
        );
        faders.forEach((el) => observer.observe(el));
    }

    /* ─ Animated counter for hero stats ─ */
    const statEls = document.querySelectorAll(".stat-value");
    const animateValue = (el, end, suffix = "") => {
        let start = 0;
        const duration = 1500;
        const startTime = performance.now();
        const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            el.textContent = Math.round(ease * end) + suffix;
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };
    if (statEls.length && "IntersectionObserver" in window) {
        const statsObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (!e.isIntersecting) return;
                    const el = e.target;
                    const text = el.textContent.trim();
                    const num = parseInt(text.replace(/\D/g, ""), 10);
                    if (isNaN(num)) return;
                    const suffix = text.replace(/[\d]/g, "").trim();
                    el.textContent = "0" + suffix;
                    animateValue(el, num, suffix);
                    statsObserver.unobserve(el);
                });
            },
            { threshold: 0.5 }
        );
        statEls.forEach((el) => statsObserver.observe(el));
    }
});
