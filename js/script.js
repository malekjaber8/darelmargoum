document.addEventListener('DOMContentLoaded', () => {

  // ---------- Loader ----------
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 300);
    revealFaceGrid();
  });

  // ---------- Face collage: woven strip reveal ----------
  // Each photo starts covered by a row of vertical bars (in the HTML, so there's
  // no flash of the raw image before JS runs); on load the bars shrink away
  // strip-by-strip like threads being lifted off a loom, cascading panel to panel.
  function revealFaceGrid() {
    if (!document.querySelector('.face-item')) return;

    if (!window.gsap) {
      document.querySelectorAll('.face-strip').forEach(s => s.style.display = 'none');
      return;
    }

    // The three columns weave open left to right, tallest (center) slightly offset.
    const tl = gsap.timeline({ delay: 0.3 });

    tl.from('.face-item img', { scale: 1.22, duration: 1.7, ease: 'power2.out' }, 0);

    tl.to('.face-col-a .face-strip', {
      scaleY: 0, duration: 0.65, stagger: 0.04, ease: 'power3.inOut'
    }, 0.1);

    tl.to('.face-tall .face-strip', {
      scaleY: 0, duration: 0.7, stagger: 0.04, ease: 'power3.inOut'
    }, 0.3);

    tl.to('.face-col-b .face-strip', {
      scaleY: 0, duration: 0.65, stagger: 0.04, ease: 'power3.inOut'
    }, 0.5);

    tl.from('.face-seal', { scale: 0, rotate: -25, opacity: 0, duration: 0.7, ease: 'back.out(1.8)' }, 1.15);
  }

  // ---------- AOS ----------
  if (window.AOS) {
    AOS.init({ duration: 800, once: true, offset: 60, easing: 'ease-out-cubic' });
  }

  // ---------- Footer year ----------
  document.getElementById('year').textContent = new Date().getFullYear();

  // ---------- Header on scroll ----------
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---------- Mobile menu ----------
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      nav.classList.remove('open');
    });
  });

  // ---------- Active nav link on scroll ----------
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });
  sections.forEach(s => spy.observe(s));

  // ---------- Custom cursor ----------
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  if (!isTouch && window.gsap) {
    const ringX = gsap.quickTo(cursorRing, 'x', { duration: 0.35, ease: 'power3.out' });
    const ringY = gsap.quickTo(cursorRing, 'y', { duration: 0.35, ease: 'power3.out' });
    const dotX = gsap.quickTo(cursorDot, 'x', { duration: 0.12, ease: 'power3.out' });
    const dotY = gsap.quickTo(cursorDot, 'y', { duration: 0.12, ease: 'power3.out' });

    window.addEventListener('mousemove', (e) => {
      ringX(e.clientX); ringY(e.clientY);
      dotX(e.clientX); dotY(e.clientY);
    });

    document.querySelectorAll('[data-cursor="big"], .product-card, .nav-link').forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('big'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('big'));
    });
  }

  // ---------- GSAP hero entrance ----------
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.eyebrow', { y: 16, opacity: 0, duration: 0.7, delay: 0.15, ease: 'power3.out' });
    gsap.from('.hero-title .word', {
      yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.035, delay: 0.25, ease: 'power4.out'
    });
    gsap.from('.scroll-cue', { opacity: 0, duration: 1, delay: 1.1 });

    // Parallax hero motif
    gsap.to('.hero-motif', {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });

    // Animated stat counters
    document.querySelectorAll('.stat-num').forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      const counter = { val: 0 };
      gsap.to(counter, {
        val: target,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => el.textContent = Math.floor(counter.val),
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      });
    });
  }

  // ---------- Collection: wheel + drag horizontal scroll ----------
  const collTrack = document.getElementById('collectionTrack');
  const collWrap = collTrack ? collTrack.closest('.collection-track-wrap') : null;
  if (collWrap) {
    collWrap.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        collWrap.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    }, { passive: false });

    let isDown = false, startX, scrollStart;
    collWrap.addEventListener('mousedown', (e) => {
      isDown = true;
      collWrap.classList.add('dragging');
      startX = e.pageX;
      scrollStart = collWrap.scrollLeft;
    });
    window.addEventListener('mouseup', () => { isDown = false; collWrap.classList.remove('dragging'); });
    window.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      collWrap.scrollLeft = scrollStart - (e.pageX - startX);
    });
  }

  // ---------- Contact form (front-end only, only on pages that have it) ----------
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form) form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Merci, votre demande a bien été préparée ! (branchez un backend/service email pour l\'envoi réel)';
    form.reset();
  });

});
