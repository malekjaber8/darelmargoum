document.addEventListener('DOMContentLoaded', () => {

  // ---------- Loader ----------
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 300);
  });

  // ---------- AOS ----------
  if (window.AOS) {
    AOS.init({ duration: 800, once: true, offset: 60, easing: 'ease-out-cubic' });
  }

  // ---------- Footer year ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

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

    document.querySelectorAll(
      '[data-cursor="big"], .product-card, .nav-link, .cat-card, .tapis-card, .wish-btn, .btn-add-cart, .carousel-arrow'
    ).forEach(el => {
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
    gsap.from('.hero-bg-img', { opacity: 0, scale: 1.12, duration: 1.6, delay: 0.1, ease: 'power2.out' });

    // Subtle parallax drift on the hero background photo while scrolling past it
    gsap.to('.hero-bg-img', {
      yPercent: 8,
      scale: 1.06,
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

  // ---------- Carousels: arrow buttons + wheel + drag scroll ----------
  document.querySelectorAll('.carousel-track').forEach(track => {
    const wrap = track.closest('.carousel-wrap');
    if (!wrap) return;

    const prevBtn = wrap.querySelector('.carousel-prev');
    const nextBtn = wrap.querySelector('.carousel-next');
    const scrollByCard = (dir) => {
      const card = track.querySelector(':scope > *');
      const amount = card ? card.getBoundingClientRect().width + 22 : 280;
      track.scrollBy({ left: dir * amount, behavior: 'smooth' });
    };
    if (prevBtn) prevBtn.addEventListener('click', () => scrollByCard(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => scrollByCard(1));

    track.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        track.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    }, { passive: false });

    let isDown = false, startX, scrollStart;
    track.addEventListener('mousedown', (e) => {
      isDown = true;
      track.classList.add('dragging');
      startX = e.pageX;
      scrollStart = track.scrollLeft;
    });
    window.addEventListener('mouseup', () => { isDown = false; track.classList.remove('dragging'); });
    window.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      track.scrollLeft = scrollStart - (e.pageX - startX);
    });
  });

  // ---------- Wishlist (localStorage) ----------
  const WISH_KEY = 'margoum_wishlist';
  const getWishlist = () => JSON.parse(localStorage.getItem(WISH_KEY) || '[]');
  const setWishlist = (list) => localStorage.setItem(WISH_KEY, JSON.stringify(list));

  function syncWishButtons() {
    const list = getWishlist();
    document.querySelectorAll('.wish-btn[data-wish-id]').forEach(btn => {
      btn.classList.toggle('active', list.includes(btn.dataset.wishId));
    });
  }

  document.querySelectorAll('.wish-btn[data-wish-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.dataset.wishId;
      let list = getWishlist();
      if (list.includes(id)) {
        list = list.filter(x => x !== id);
      } else {
        list.push(id);
        btn.classList.add('bump');
        setTimeout(() => btn.classList.remove('bump'), 400);
      }
      setWishlist(list);
      syncWishButtons();
    });
  });
  syncWishButtons();

  // ---------- Cart (localStorage, functional add/remove/qty + drawer) ----------
  const CART_KEY = 'margoum_cart';
  const getCart = () => JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  const setCart = (items) => localStorage.setItem(CART_KEY, JSON.stringify(items));

  const cartToggle = document.getElementById('cartToggle');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartClose = document.getElementById('cartClose');
  const cartItemsEl = document.getElementById('cartItems');
  const cartEmptyEl = document.getElementById('cartEmpty');
  const cartCountEl = document.getElementById('cartCount');
  const cartSubtotalEl = document.getElementById('cartSubtotal');

  function openCart() {
    if (!cartDrawer) return;
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
  }
  function closeCart() {
    if (!cartDrawer) return;
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
  }
  if (cartToggle) cartToggle.addEventListener('click', openCart);
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  function renderCart() {
    if (!cartItemsEl) return;
    const items = getCart();

    cartItemsEl.querySelectorAll('.cart-item').forEach(el => el.remove());
    if (cartEmptyEl) cartEmptyEl.style.display = items.length ? 'none' : 'block';

    let hasUnpriced = false;
    let total = 0;

    items.forEach(item => {
      if (item.price == null) { hasUnpriced = true; } else { total += item.price * item.qty; }

      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <div class="cart-item-swatch"><img src="${item.img}" alt="" style="width:100%;height:100%;object-fit:cover;"></div>
        <div class="cart-item-body">
          <h4>${item.name}</h4>
          <p>${item.price != null ? item.price + ' TND' : 'Prix sur demande'}</p>
          <div class="cart-item-qty">
            <button type="button" data-action="dec" aria-label="Diminuer">−</button>
            <span>${item.qty}</span>
            <button type="button" data-action="inc" aria-label="Augmenter">+</button>
          </div>
          <a href="#" class="cart-item-remove" data-action="remove">Retirer</a>
        </div>
      `;
      row.querySelector('[data-action="dec"]').addEventListener('click', () => updateQty(item.id, -1));
      row.querySelector('[data-action="inc"]').addEventListener('click', () => updateQty(item.id, 1));
      row.querySelector('[data-action="remove"]').addEventListener('click', (e) => { e.preventDefault(); removeItem(item.id); });
      cartItemsEl.appendChild(row);
    });

    if (cartSubtotalEl) {
      cartSubtotalEl.textContent = items.length === 0 ? '0 TND' : (hasUnpriced ? 'Sur demande' : total + ' TND');
    }

    const count = items.reduce((n, i) => n + i.qty, 0);
    if (cartCountEl) {
      cartCountEl.textContent = count;
      cartCountEl.hidden = count === 0;
    }
  }

  function addToCart({ id, name, img, price }) {
    const items = getCart();
    const existing = items.find(i => i.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      items.push({ id, name, img, price: price != null ? price : null, qty: 1 });
    }
    setCart(items);
    renderCart();
    if (cartCountEl) {
      cartCountEl.classList.add('bump');
      setTimeout(() => cartCountEl.classList.remove('bump'), 300);
    }
    openCart();
  }

  function updateQty(id, delta) {
    let items = getCart();
    const item = items.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) items = items.filter(i => i.id !== id);
    setCart(items);
    renderCart();
  }

  function removeItem(id) {
    const items = getCart().filter(i => i.id !== id);
    setCart(items);
    renderCart();
  }

  document.querySelectorAll('.btn-add-cart[data-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const priceAttr = btn.dataset.price;
      addToCart({
        id: btn.dataset.id,
        name: btn.dataset.name,
        img: btn.dataset.img,
        price: priceAttr ? parseFloat(priceAttr) : null
      });
      btn.classList.add('bump');
      setTimeout(() => btn.classList.remove('bump'), 400);
    });
  });

  renderCart();

  // ---------- Craft video (play/pause + mute toggle) ----------
  const craftVideo = document.getElementById('craftVideo');
  const videoFrame = craftVideo ? craftVideo.closest('.video-frame') : null;
  const videoPlayBtn = document.getElementById('videoPlayBtn');
  const videoMuteBtn = document.getElementById('videoMuteBtn');
  const muteIconOn = document.getElementById('muteIconOn');
  const muteIconOff = document.getElementById('muteIconOff');

  if (craftVideo && videoFrame) {
    const togglePlay = () => {
      if (craftVideo.paused) { craftVideo.play(); } else { craftVideo.pause(); }
    };
    craftVideo.addEventListener('play', () => videoFrame.classList.add('playing'));
    craftVideo.addEventListener('pause', () => videoFrame.classList.remove('playing'));
    videoPlayBtn.addEventListener('click', togglePlay);
    craftVideo.addEventListener('click', togglePlay);

    videoMuteBtn.addEventListener('click', () => {
      craftVideo.muted = !craftVideo.muted;
      muteIconOn.hidden = craftVideo.muted;
      muteIconOff.hidden = !craftVideo.muted;
    });
  }

  // ---------- Newsletter form (front-end only) ----------
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterStatus = document.getElementById('newsletterStatus');
  if (newsletterForm) newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newsletterStatus.textContent = 'Merci pour votre inscription !';
    newsletterForm.reset();
  });

  // ---------- Contact form (front-end only, only on pages that have it) ----------
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form) form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Merci, votre demande a bien été préparée ! (branchez un backend/service email pour l\'envoi réel)';
    form.reset();
  });

});
