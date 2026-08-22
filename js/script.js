document.addEventListener('DOMContentLoaded', () => {

  // ---------- i18n (French is authored directly in the HTML and captured live as the "fr" fallback — only "en" needs to be hand-translated below; Arabic is not wired yet) ----------
  const I18N = { fr: {}, en: {
    'nav.home': 'Home',
    'nav.categories': 'Categories',
    'nav.furniture': 'Furniture &amp; Seating',
    'nav.armchairs': 'Armchairs',
    'nav.chairs': 'Margoum Chairs',
    'nav.roundChairs': 'Round Chairs',
    'nav.poufs': 'Poufs &amp; Daybeds',
    'nav.outdoor': 'Margoum Outdoor Lounge',
    'nav.tables': 'Tables &amp; Accessories',
    'nav.rugsHeading': 'Rugs &amp; Margoum',
    'nav.allRugs': 'All rugs',
    'nav.decoHeading': 'Décor &amp; Knives',
    'nav.decoKnives': 'Knives &amp; Cushions',
    'nav.about': 'About',
    'nav.custom': 'Custom-Made',
    'nav.contact': 'Contact',
    'search.placeholder': 'Search…',
    'breadcrumb.back': 'Back to home',
    'cart.title': 'Your cart',
    'cart.empty': 'Your cart is empty for now.',
    'cart.subtotal': 'Subtotal',
    'cart.checkout': 'Order via WhatsApp',
    'cart.note': 'Online payment coming soon — we finalize your order together.',
    'footer.tagline': 'Margoum is the union of wood and weaving to bring authenticity and refinement to your spaces.',
    'footer.quickLinks': 'Quick links',
    'footer.help': 'Need help?',
    'footer.faq': 'FAQ',
    'footer.shipping': 'Shipping &amp; returns',
    'footer.care': 'Care',
    'footer.terms': 'Terms of sale',
    'footer.privacy': 'Privacy policy',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterText': 'Get our new arrivals and inspiration first.',
    'footer.newsletterPlaceholder': 'Your email',
    'footer.newsletterBtn': 'Subscribe',
    'footer.madeWith': 'Made with passion in Tunisia',
    'quickview.badge': '100% handmade by our artisans in Tunisia — Premium A1 quality',
    'quickview.careSummary': 'Care, shipping &amp; guarantees',
    'quickview.care1': 'Dust regularly with a vacuum or a soft cloth.',
    'quickview.care2': 'In case of a stain, clean immediately with a damp cloth and mild soap.',
    'quickview.care3': 'Professional dry cleaning recommended if needed.',
    'quickview.care4': 'Fast, securely packaged delivery across Tunisia.',
    'quickview.care5': 'You can inspect the piece on delivery, before paying.',
    'quickview.advice': 'Need help choosing? Send a photo of your room on WhatsApp →',
    'quickview.order': 'Order',
    'quickview.whatsapp': 'WhatsApp',
    'quickview.badgeTapis': '100% handwoven by Kairouan artisans — Premium A1 quality',
    'quickview.care1tapis': 'Dust regularly with a vacuum cleaner.',
    'discover.chairsShort': 'Chairs',
    'discover.poufsShort': 'Poufs',
    'discover.tablesShort': 'Side Tables',
    'cta.order': 'Order',
    'cta.viewDetails': 'View details',
    'cta.discover': 'Discover',
    'cta.contactUs': 'Contact us',
    'sort.label': 'Sort by',
    'sort.default': 'Our favorites',
    'sort.az': 'Name A-Z',
    'sort.za': 'Name Z-A',
    'sidebar.customTitle': 'A custom piece?',
    'sidebar.customText': 'Choose the size and margoum pattern.',
    'sidebar.customTextWood': 'Choose the wood, margoum pattern, and dimensions.',
    'sidebar.customTextFinish': 'Choose the finish and margoum pattern.',
    'sidebar.customTextStructure': 'Choose the structure and margoum pattern.',
    'hero.title': '<span class="line"><span class="word">The</span> <span class="word">Elegance</span> <span class="word">of</span> <span class="word">Tunisian</span></span><span class="line"><span class="word">Craftsmanship</span> <span class="word">in</span> <span class="word">Your</span> <span class="word">Home</span></span>',
    'hero.cta': 'Discover the Collection',
    'trust.handmade': '100% Handmade &amp; Authentic',
    'trust.shipping': 'Shipping across Tunisia 🇹🇳 and internationally ✈️',
    'trust.custom': 'Custom-made available',
    'universe.eyebrow': 'The Margoum Tunisia Universe',
    'universe.subtitle': 'Discover our creations inspired by Tunisian craft heritage.',
    'universe.furnitureTitle': 'Furniture<br>&amp; Seating',
    'universe.furnitureDesc': 'Chairs, poufs, daybeds, tables &amp; lounges in Margoum.',
    'universe.rugsTitle': 'Rugs<br>&amp; Margoum',
    'universe.rugsDesc': 'Margoum from Kairouan, Oudhref, Gafsa, Kilim du Sud, Zarbia…',
    'universe.explore': 'Explore the collection',
    'universe.decoTitle': 'Décor<br>&amp; Crafts',
    'universe.decoDesc': 'Cushions, handcrafted knives, accessories &amp; art objects.',
    'discover.eyebrow': 'Explore',
    'discover.title': 'All our collections',
    'discover.subtitle': 'Every sub-category at a glance — click to discover.',
    'discover.kairouan': 'Kairouan Margoum',
    'discover.cushions': 'Cushions',
    'discover.lanterns': 'Wrought-Iron Lighting',
    'promo.visitTitle': 'Come visit us<br><span class="accent">in Kairouan!</span>',
    'promo.visitText': 'Bchechma, just before the entrance of Kairouan, rue de Tunisie — our workshop welcomes you to discover our margoum creations in person.',
    'promo.viewRoute': 'Get directions',
    'bestsellers.title': 'Our Favorites / Best-Sellers',
    'suremesure.badge': 'Handmade in Kairouan',
    'suremesure.eyebrow': 'Custom-Made',
    'suremesure.title': 'Have a precise idea in mind?',
    'suremesure.text': 'We bring your custom projects to life, to your dimensions and taste. Describe the piece you dream of — our artisans will craft it for you.',
    'suremesure.feature1': 'Wood &amp; margoum pattern of your choice',
    'suremesure.feature2': 'Dimensions tailored to your space',
    'suremesure.feature3': 'Shipping within Tunisia &amp; internationally',
    'cta.whatsappChat': 'Chat on WhatsApp',
    'heritage.eyebrow': 'Heritage &amp; tradition',
    'heritage.title': 'Margoum rugs,<br>a story handwoven.',
    'heritage.text': 'Every rug tells an ancestral craft passed down through generations. Unique patterns, deep colors, an authentic soul.',
    'heritage.cta': 'Discover our rugs',
    'rugs.title': 'Our Margoum Rugs',
    'rugs.seeAll': 'See all rugs',
    'realisations.eyebrow': 'Custom projects',
    'realisations.title': 'Our work',
    'realisations.text': 'Custom-made armchairs and chairs for the hospitality industry — lobbies, receptions and terraces dressed in margoum.',
    'project.terrace': 'Terrace',
    'project.lobby': 'Lobby',
    'project.reception': 'Reception',
    'project.seaview': 'Sea view',
    'project.lounge': 'Lounge',
    'project.salon': 'Lounge area',
    'stats.years': 'Years of tradition',
    'stats.chairsDelivered': 'Armchairs &amp; chairs delivered',
    'stats.artisans': 'Partner artisans',
    'stats.woodTypes': 'Wood species',
    'trust2.shipping': 'Fast shipping',
    'trust2.shippingSub': 'Across Tunisia',
    'trust2.payment': 'Payment on delivery',
    'trust2.paymentSub': 'Pay when you receive your order',
    'trust2.unique': 'Unique pieces',
    'trust2.uniqueSub': 'Handmade with passion',
    'trust2.service': 'Dedicated customer service',
    'trust2.serviceSub': 'Here to listen',
    'reviews.title': 'Customer Reviews',
    'contact.eyebrow': 'Custom-made &amp; contact',
    'contact.title': 'Design your piece',
    'contact.text': 'Choose the wood essence and margoum pattern — we craft the piece to your measurements.',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.piece': 'Piece desired',
    'form.piecePlaceholder': 'Armchair, chair, custom-made…',
    'form.message': 'Message',
    'form.submit': 'Send request',
    'contact.workshop': 'Workshop',
    'contact.phone': 'Phone',
    'contact.hours': 'Hours',
    'contact.hoursValue': 'Mon – Sat · 9:00 AM – 6:00 PM',
  } };
  const LANG_KEY = 'margoum_lang';
  const getLang = () => localStorage.getItem(LANG_KEY) || 'fr';
  const setLang = (l) => localStorage.setItem(LANG_KEY, l);
  const UI_STRINGS = {
    fr: { remove: 'Retirer', dec: 'Diminuer', inc: 'Augmenter', piece: 'pièce', pieces: 'pièces', comingSoon: 'Bientôt disponible', onRequest: 'Sur demande', priceOnRequest: 'Prix sur demande' },
    en: { remove: 'Remove', dec: 'Decrease', inc: 'Increase', piece: 'item', pieces: 'items', comingSoon: 'Coming soon', onRequest: 'On request', priceOnRequest: 'Price on request' },
  };
  const t = () => UI_STRINGS[getLang()] || UI_STRINGS.fr;
  function applyLanguage(lang) {
    document.documentElement.lang = lang === 'en' ? 'en' : 'fr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const attr = el.dataset.i18nAttr;
      const current = attr ? el.getAttribute(attr) : el.innerHTML;
      if (I18N.fr[key] == null) I18N.fr[key] = current; // capture original French once, on first run
      const val = (I18N[lang] && I18N[lang][key] != null) ? I18N[lang][key] : I18N.fr[key];
      if (attr) el.setAttribute(attr, val); else el.innerHTML = val;
    });
    document.querySelectorAll('.lang-toggle').forEach(btn => { btn.textContent = lang.toUpperCase(); });
    document.querySelectorAll('.lang-menu button[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    const catGridEl = document.getElementById('catGrid');
    const catCountEl2 = document.querySelector('.cat-count');
    if (catGridEl && catCountEl2) {
      const visible = [...catGridEl.children].filter(c => c.style.display !== 'none').length;
      catCountEl2.textContent = visible === 0 ? t().comingSoon : `${visible} ${visible > 1 ? t().pieces : t().piece}`;
    }
    if (typeof renderCart === 'function') renderCart();
  }
  document.querySelectorAll('.lang-switcher').forEach(sw => {
    const toggle = sw.querySelector('.lang-toggle');
    const menu = sw.querySelector('.lang-menu');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', (e) => { e.stopPropagation(); sw.classList.toggle('open'); });
    menu.querySelectorAll('button[data-lang]:not([disabled])').forEach(b => {
      b.addEventListener('click', () => {
        setLang(b.dataset.lang);
        sw.classList.remove('open');
        applyLanguage(b.dataset.lang);
      });
    });
  });
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.lang-switcher.open').forEach(sw => {
      if (!sw.contains(e.target)) sw.classList.remove('open');
    });
  });
  applyLanguage(getLang());

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
      '[data-cursor="big"], .product-card, .nav-link, .cat-card, .tapis-card, .wish-btn, .btn-order, .carousel-arrow'
    ).forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('big'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('big'));
    });
  }

  // ---------- GSAP hero entrance ----------
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero .eyebrow', { y: 16, opacity: 0, duration: 0.7, delay: 0.15, ease: 'power3.out' });
    gsap.from('.hero-title .word', {
      yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.035, delay: 0.25, ease: 'power4.out'
    });
    gsap.from('.hero-bg-img', { opacity: 0, scale: 1.12, duration: 1.6, delay: 0.1, ease: 'power2.out' });

    // Catalogue page hero: same word-by-word title reveal, plus the logo mark popping in
    gsap.from('.cat-hero-v2-text .eyebrow', { y: 16, opacity: 0, duration: 0.7, delay: 0.1, ease: 'power3.out' });
    gsap.from('.cat-hero-v2-text h1 .word', {
      yPercent: 110, opacity: 0, duration: 0.8, stagger: 0.03, delay: 0.2, ease: 'power4.out'
    });
    gsap.from('.cat-hero-v2-mark', {
      scale: 0, opacity: 0, duration: 0.6, delay: 0.7, ease: 'back.out(2.2)'
    });

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

  // ---------- Discover section: auto-advancing carousel ----------
  const discoverTrack = document.getElementById('discoverTrack');
  if (discoverTrack && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let discoverTimer = null;
    const discoverAdvance = () => {
      const card = discoverTrack.querySelector(':scope > *');
      const amount = card ? card.getBoundingClientRect().width + 20 : 240;
      const atEnd = discoverTrack.scrollLeft + discoverTrack.clientWidth >= discoverTrack.scrollWidth - 4;
      discoverTrack.scrollTo({ left: atEnd ? 0 : discoverTrack.scrollLeft + amount, behavior: 'smooth' });
    };
    const startDiscoverAutoplay = () => { stopDiscoverAutoplay(); discoverTimer = setInterval(discoverAdvance, 3200); };
    function stopDiscoverAutoplay() { if (discoverTimer) clearInterval(discoverTimer); }
    startDiscoverAutoplay();
    const discoverWrap = discoverTrack.closest('.carousel-wrap');
    if (discoverWrap) {
      discoverWrap.addEventListener('mouseenter', stopDiscoverAutoplay);
      discoverWrap.addEventListener('mouseleave', startDiscoverAutoplay);
      discoverWrap.querySelectorAll('.carousel-arrow').forEach(btn => {
        btn.addEventListener('click', startDiscoverAutoplay);
      });
    }
  }

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

  // ---------- WhatsApp ----------
  const WHATSAPP_NUMBER = '21629457597'; // client's primary number, +216 no leading 0 — swap freely if they prefer the other one
  const buildWhatsAppLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  // ---------- Currency display (fixed indicative rates, browsing convenience only — orders/WhatsApp always stay in TND) ----------
  const CURRENCY_RATES = { TND: 1, EUR: 1 / 3.40, USD: 1 / 3.15 }; // update manually if rates drift
  const CURRENCY_SYMBOLS = { TND: 'TND', EUR: '€', USD: '$' };
  const CURRENCY_KEY = 'margoum_currency';
  const getCurrency = () => localStorage.getItem(CURRENCY_KEY) || 'TND';
  const setCurrency = (cur) => localStorage.setItem(CURRENCY_KEY, cur);
  const formatPrice = (tnd, currency = getCurrency()) => {
    const val = tnd * CURRENCY_RATES[currency];
    if (currency === 'TND') return `${Math.round(val).toLocaleString('fr-FR')} TND`;
    return `${CURRENCY_SYMBOLS[currency]}${val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };
  function refreshDisplayedPrices() {
    const cur = getCurrency();
    document.querySelectorAll('[data-price-tnd]').forEach(el => {
      el.textContent = formatPrice(parseFloat(el.dataset.priceTnd), cur);
    });
    document.querySelectorAll('.currency-toggle').forEach(btn => { btn.textContent = cur; });
    document.querySelectorAll('.currency-menu button[data-currency]').forEach(b => {
      b.classList.toggle('active', b.dataset.currency === cur);
    });
    if (typeof renderCart === 'function') renderCart();
  }
  document.querySelectorAll('.currency-switcher').forEach(sw => {
    const toggle = sw.querySelector('.currency-toggle');
    const menu = sw.querySelector('.currency-menu');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', (e) => { e.stopPropagation(); sw.classList.toggle('open'); });
    menu.querySelectorAll('button[data-currency]').forEach(b => {
      b.addEventListener('click', () => {
        setCurrency(b.dataset.currency);
        sw.classList.remove('open');
        refreshDisplayedPrices();
      });
    });
  });
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.currency-switcher.open').forEach(sw => {
      if (!sw.contains(e.target)) sw.classList.remove('open');
    });
  });

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
  const cartCheckoutEl = document.getElementById('cartCheckout');

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
          <p>${item.price != null ? formatPrice(item.price) : t().priceOnRequest}</p>
          <div class="cart-item-qty">
            <button type="button" data-action="dec" aria-label="${t().dec}">−</button>
            <span>${item.qty}</span>
            <button type="button" data-action="inc" aria-label="${t().inc}">+</button>
          </div>
          <a href="#" class="cart-item-remove" data-action="remove">${t().remove}</a>
        </div>
      `;
      row.querySelector('[data-action="dec"]').addEventListener('click', () => updateQty(item.id, -1));
      row.querySelector('[data-action="inc"]').addEventListener('click', () => updateQty(item.id, 1));
      row.querySelector('[data-action="remove"]').addEventListener('click', (e) => { e.preventDefault(); removeItem(item.id); });
      cartItemsEl.appendChild(row);
    });

    if (cartSubtotalEl) {
      cartSubtotalEl.textContent = items.length === 0 ? formatPrice(0) : (hasUnpriced ? t().onRequest : formatPrice(total));
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

  document.querySelectorAll('.btn-order[data-id]').forEach(btn => {
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

  // ---------- Product quick-view modal (gallery + full specs) ----------
  const PRODUCT_DETAILS = {
    'kairouan-royal-bleu-sidi-bou-said': {
      name: 'Margoum Kairouan Royal – Bleu Sidi Bou Saïd',
      price: 1500,
      description: "Une pièce maîtresse inspirée du charme de l'architecture tunisienne et des couleurs de la Méditerranée. Le mariage parfait entre la sérénité du bleu et la finesse des motifs traditionnels, idéal pour apporter élégance et sensation d'espace aux intérieurs modernes.",
      specs: [
        { label: 'Dimensions', value: '2m × 3m (surface totale : 6 m²)' },
        { label: 'Poids', value: '12 kg' },
        { label: 'Composition', value: '100% laine pure (première qualité)' },
        { label: 'Fabrication', value: 'Tissage artisanal fait main' },
        { label: 'Entretien', value: 'Résistant aux taches, facile à nettoyer au quotidien' },
        { label: 'Idéal pour', value: 'Salons modernes, espaces de vie et décors méditerranéens (blanc & bleu)' }
      ],
      media: [
        { type: 'video', src: 'images/margoum/kairouan-royal-bleu-sidi-bou-said.mp4', poster: 'images/margoum/kairouan-royal-bleu-sidi-bou-said.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-royal-bleu-sidi-bou-said.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-royal-bleu-sidi-bou-said-2.jpg' }
      ]
    },
    'kairouan-beige-makroudha': {
      name: 'Margoum Kairouan Classique – Beige Makroudha',
      price: 1550,
      description: "Un modèle d'une sobriété et d'une élégance absolues. Ses teintes terreuses et chaleureuses apportent une atmosphère apaisante et s'harmonisent naturellement avec tous les styles de mobilier, qu'ils soient contemporains ou traditionnels.",
      specs: [
        { label: 'Dimensions', value: '204 × 316 cm' },
        { label: 'Poids', value: '12 kg' },
        { label: 'Composition', value: '100% laine pure (première qualité)' },
        { label: 'Fabrication', value: 'Tissage artisanal fait main' },
        { label: 'Entretien', value: 'Fils robustes et nettoyage facile' },
        { label: 'Idéal pour', value: 'Décors contemporains, style Boho-Chic et mobilier en bois massif' }
      ],
      media: [
        { type: 'video', src: 'images/margoum/kairouan-beige-makroudha.mp4', poster: 'images/margoum/kairouan-beige-makroudha-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-beige-makroudha-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-beige-makroudha-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-beige-makroudha-3.jpg' }
      ]
    },
    'kairouan-rouge-royal': {
      name: 'Margoum Kairouan Traditionnel – Rouge Royal',
      price: 1650,
      description: "Incarnation du patrimoine et du savoir-faire tunisien. Ce modèle se distingue par sa teinte rouge profonde et ses motifs géométriques denses, reflétant la richesse de l'artisanat de Kairouan et apportant une touche d'hospitalité chaleureuse.",
      specs: [
        { label: 'Dimensions', value: '193 × 314 cm' },
        { label: 'Poids', value: '12 kg' },
        { label: 'Composition', value: '100% laine pure (première qualité)' },
        { label: 'Fabrication', value: 'Tissage artisanal fait main' },
        { label: 'Entretien', value: 'Couleurs durables, laine haut de gamme facile à entretenir' },
        { label: 'Idéal pour', value: 'Salons traditionnels, espaces de réception et demeures de charme' }
      ],
      media: [
        { type: 'video', src: 'images/margoum/kairouan-rouge-royal.mp4', poster: 'images/margoum/kairouan-rouge-royal-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-rouge-royal-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-rouge-royal-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-rouge-royal-3.jpg' }
      ]
    },
    'kairouan-vert-oasis': {
      name: 'Margoum Kairouan Moderne – Vert Oasis',
      price: 950,
      description: "Une pièce pleine de vitalité et de fraîcheur qui invite la nature des oasis tunisiennes dans votre intérieur. Un contraste élégant entre les motifs géométriques et la richesse du vert, favorisant une ambiance relaxante.",
      specs: [
        { label: 'Dimensions', value: '170 × 250 cm' },
        { label: 'Poids', value: '8 kg' },
        { label: 'Composition', value: '100% laine pure (première qualité)' },
        { label: 'Fabrication', value: 'Tissage artisanal fait main' },
        { label: 'Idéal pour', value: 'Coins lecture, espaces de détente et intérieurs inspirés de la nature' }
      ],
      media: [
        { type: 'video', src: 'images/margoum/kairouan-vert-oasis.mp4', poster: 'images/margoum/kairouan-vert-oasis-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-vert-oasis-1.jpg' }
      ]
    },
    'kairouan-miel-ambre': {
      name: 'Margoum Kairouan Doré – Couleur Miel',
      price: 950,
      description: "Une nuance lumineuse qui rappelle la chaleur du bois et du soleil. Ce tapis apporte une belle luminosité à la pièce et met en valeur votre mobilier grâce à ses dégradés riches et ambrés.",
      specs: [
        { label: 'Dimensions', value: '170 × 250 cm' },
        { label: 'Poids', value: '8 kg' },
        { label: 'Composition', value: '100% laine pure (première qualité)' },
        { label: 'Fabrication', value: 'Tissage artisanal fait main' },
        { label: 'Entretien', value: 'Très pratique et simple à entretenir' },
        { label: 'Idéal pour', value: 'Salons, bureaux, et intérieurs associant le fer forgé ou le bois naturel' }
      ],
      media: [
        { type: 'video', src: 'images/margoum/kairouan-miel-ambre.mp4', poster: 'images/margoum/kairouan-miel-ambre-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-miel-ambre-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-miel-ambre-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-miel-ambre-3.jpg' }
      ]
    },
    'kairouan-gris-contemporain': {
      name: 'Margoum Kairouan Design – Gris Contemporain',
      price: 1350,
      description: "La réinterprétation moderne du Margoum conçue pour les amateurs de design contemporain. Il associe la neutralité du gris à l'authenticité des géométries berbères pour s'intégrer parfaitement dans les appartements modernes.",
      specs: [
        { label: 'Dimensions', value: '2m × 3m' },
        { label: 'Poids', value: '12 kg' },
        { label: 'Composition', value: '100% laine pure (première qualité)' },
        { label: 'Fabrication', value: 'Tissage artisanal fait main' },
        { label: 'Entretien', value: "Laine traitée facilitant l'aspiration et le détachage" },
        { label: 'Idéal pour', value: 'Intérieurs modernes, appartements urbains et salons aux tons neutres (blanc, gris, miel)' }
      ],
      media: [
        { type: 'video', src: 'images/margoum/kairouan-gris-contemporain.mp4', poster: 'images/margoum/kairouan-gris-contemporain-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-gris-contemporain-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-gris-contemporain-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-gris-contemporain-3.jpg' }
      ]
    },
    'kairouan-beige-sable': {
      name: 'Margoum Kairouan Classique – Beige Sable',
      price: 950,
      description: "Un modèle d'une sobriété et d'une élégance absolues. Ses teintes terreuses et chaleureuses apportent une atmosphère apaisante et s'harmonisent naturellement avec tous les styles de mobilier, qu'ils soient contemporains ou traditionnels.",
      specs: [
        { label: 'Dimensions', value: '170 × 250 cm' },
        { label: 'Poids', value: '8 kg' },
        { label: 'Composition', value: '100% laine pure (première qualité)' },
        { label: 'Fabrication', value: 'Tissage artisanal fait main' },
        { label: 'Entretien', value: 'Fils robustes et nettoyage facile' },
        { label: 'Idéal pour', value: 'Décors contemporains, style Boho-Chic et mobilier en bois massif' }
      ],
      media: [
        { type: 'video', src: 'images/margoum/kairouan-beige-sable.mp4', poster: 'images/margoum/kairouan-beige-sable-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-beige-sable-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-beige-sable-2.jpg' }
      ]
    },
    'ensemble-chambre-sidi-bou-said': {
      name: 'Ensemble Margoum Chambre à Coucher – Style Sidi Bou Saïd',
      price: 950,
      description: "Inspiré par la poésie architecturale de Sidi Bou Saïd, cet ensemble de Margoum insuffle à votre chambre à coucher la fraîcheur et la sérénité de la Méditerranée. Le contraste parfait entre le blanc éclatant et les nuances de bleu azur met en valeur les motifs géométriques berbères traditionnels, tissés avec une finesse exceptionnelle.",
      specs: [
        { label: 'Composition du pack', value: '1 grand tapis de pied de lit + 2 descentes de lit assorties' },
        { label: 'Grand tapis (pied de lit)', value: '1.20m × 1.80m' },
        { label: 'Descentes de lit (x2)', value: '0.70m × 1.20m' },
        { label: 'Poids total du pack', value: '~8 kg' },
        { label: 'Matière', value: '100% laine pure (première qualité)' },
        { label: 'Fabrication', value: 'Tissé entièrement à la main' },
        { label: 'Couleurs', value: 'Blanc / beige naturel et bleu azur Sidi Bou Saïd' },
        { label: 'Entretien', value: 'Laine naturelle traitée, facile à aspirer et résistante aux taches' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/ensemble-chambre-sidi-bou-said-1.jpg' },
        { type: 'image', src: 'images/margoum/ensemble-chambre-sidi-bou-said-2.jpg' }
      ]
    },
    'ensemble-coin-the-duo-tradition-design': {
      name: 'Ensemble Coin Thé Authentique – 2 Chaises + Table Octogonale',
      price: 1200,
      description: "Un ensemble raffiné qui marie le design scandinave moderne à l'authenticité du Margoum tunisien tissé à la main. Il se compose de deux chaises en bois massif aux assises rembourrées d'un tissu Margoum coloré aux motifs berbères, accompagnées d'une table basse octogonale au charme unique. Cet ensemble apporte une note chaleureuse et un caractère affirmé à vos coins lecture, salons ou espaces d'accueil.",
      specs: [
        { label: 'Contenu du pack', value: '2 chaises en bois naturel rembourrées + 1 table basse octogonale en bois' },
        { label: 'Structure', value: 'Bois naturel robuste, finition lisse et chaleureuse' },
        { label: 'Assise', value: '100% pure laine tissée à la main (Margoum / Kilim traditionnel — qualité A1)' },
        { label: 'Couleur du bois', value: 'Teinte bois naturel clair' },
        { label: 'Couleurs des assises', value: 'Palette multicolore (rouge, jaune, bleu, vert), motifs géométriques ethniques' },
        { label: 'Utilisation conseillée', value: 'Coin café/thé, espace lecture, bureau, ou salon au style Boho-Chic et méditerranéen' },
        { label: 'Entretien', value: 'Bois à dépoussiérer avec un chiffon doux ; assises nettoyables à sec ou à l’éponge légèrement humide en cas de tache' }
      ],
      media: [
        { type: 'image', src: 'images/chaise/ensemble-coin-the-duo-tradition-design-1.jpg' },
        { type: 'image', src: 'images/chaise/ensemble-coin-the-duo-tradition-design-2.jpg' },
        { type: 'image', src: 'images/chaise/ensemble-coin-the-duo-tradition-design-3.jpg' }
      ]
    },
    'chaise-signee-bois-margoum': {
      name: 'Chaise Signée en Bois & Margoum Artisanal',
      price: 450,
      description: "Une chaise d'appoint au caractère unique qui réinvente le mobilier artisanal. Fabriquée à partir d'une structure solide en bois massif aux lignes épurées et modernes, elle se distingue par son assise rembourrée recouverte d'un véritable tapis Margoum/Kilim tissé à la main en pure laine. Une pièce de créateur idéale pour apporter une touche d'authenticité et de couleur à un bureau, une coiffeuse, une salle à manger ou un coin lecture.",
      specs: [
        { label: 'Vente', value: 'À l’unité' },
        { label: 'Dimensions', value: 'Taille standard (hauteur assise ~45 cm / hauteur totale ~90 cm)' },
        { label: 'Structure', value: 'Bois naturel noble et résistant' },
        { label: 'Assise', value: 'Mousse haute densité recouverte de 100% pure laine tissée à la main' },
        { label: 'Finition du bois', value: 'Aspect naturel poli et vernis protecteur' },
        { label: 'Exclusivité', value: 'Chaque pièce a un motif de tapis unique' },
        { label: 'Entretien', value: 'Bois à dépoussiérer au chiffon doux ; assise nettoyable à sec ou au chiffon très légèrement humide avec savon doux' }
      ],
      media: [
        { type: 'image', src: 'images/chaise/chaise-signee-bois-margoum-1.jpg' },
        { type: 'image', src: 'images/chaise/chaise-signee-bois-margoum-2.jpg' },
        { type: 'image', src: 'images/chaise/chaise-signee-bois-margoum-3.jpg' }
      ]
    },
    'pouf-cylindrique-margoum': {
      name: 'Pouf Cylindrique en Margoum Tissé Main',
      price: 350,
      description: "Une assise d'appoint à la fois pratique et hautement décorative, tissée à la main en pure laine selon les traditions du Margoum tunisien. Avec sa palette de couleurs vives (orange brûlé, vert olive, jaune moutarde et rouge carmin) et ses motifs géométriques ethniques, ce pouf apporte une touche chaleureuse et un esprit Boho-Chic irrésistible à votre salon ou coin détente.",
      specs: [
        { label: 'Dimensions', value: 'Diamètre 50 cm | hauteur 50 cm' },
        { label: 'Revêtement', value: '100% pure laine tissée à la main (Margoum / Kilim, qualité supérieure)' },
        { label: 'Garnissage', value: 'Mousse haute densité pour une excellente tenue et un confort optimal' },
        { label: 'Entretien', value: 'Nettoyage à sec ou avec un chiffon doux légèrement humide' }
      ],
      media: [
        { type: 'image', src: 'images/pouffe/pouf-cylindrique-margoum-1.jpg' },
        { type: 'image', src: 'images/pouffe/pouf-cylindrique-margoum-2.jpg' },
        { type: 'image', src: 'images/pouffe/pouf-cylindrique-margoum-3.jpg' },
        { type: 'image', src: 'images/pouffe/pouf-cylindrique-margoum-4.jpg' },
        { type: 'image', src: 'images/pouffe/pouf-cylindrique-margoum-5.jpg' },
        { type: 'image', src: 'images/pouffe/pouf-cylindrique-margoum-6.jpg' },
        { type: 'image', src: 'images/pouffe/pouf-cylindrique-margoum-7.jpg' }
      ]
    },
    'tabouret-design-bois-kilim': {
      name: 'Tabouret Design en Bois Naturel & Kilim Artisanal',
      price: 290,
      description: "L'alliance parfaite entre le minimalisme du bois brut et la richesse des couleurs du patrimoine tunisien. Ce tabouret se compose d'une structure solide en bois naturel aux lignes épurées et d'une assise confortablement rembourrée, tapissée d'un véritable Margoum tissé à la main en pure laine. Une pièce déco polyvalente et tendance pour sublimer une coiffeuse, un salon ou un coin bureau.",
      specs: [
        { label: 'Dimensions', value: '45 cm (hauteur) × 45 cm (largeur) × 45 cm (longueur)' },
        { label: 'Structure', value: 'Bois naturel clair robuste avec finition soignée' },
        { label: 'Assise', value: 'Mousse haute densité recouverte de 100% pure laine tissée à la main' },
        { label: 'Exclusivité', value: 'Chaque motif de margoum est unique' },
        { label: 'Entretien', value: 'Structure en bois facile à dépoussiérer ; assise nettoyable à sec ou avec un chiffon doux légèrement humide' }
      ],
      media: [
        { type: 'image', src: 'images/tabouret/tabouret-design-bois-kilim-1.jpg' },
        { type: 'image', src: 'images/tabouret/tabouret-design-bois-kilim-2.jpg' },
        { type: 'image', src: 'images/tabouret/tabouret-design-bois-kilim-3.jpg' },
        { type: 'image', src: 'images/tabouret/tabouret-design-bois-kilim-4.jpg' }
      ]
    },
    'coussin-kilim-traditionnel': {
      name: 'Coussin Décoratif en Kilim Traditionnel',
      price: 75,
      description: "Apportez une touche d'authenticité et de couleur à votre intérieur avec nos coussins en Kilim tunisien tissés à la main. Fabriqués en 100% pure laine, ils se distinguent par leurs motifs géométriques ethniques et leurs teintes vibrantes. Idéals pour habiller un canapé, un fauteuil en bois ou un lit avec élégance et caractère.",
      specs: [
        { label: 'Dimensions', value: '45 × 45 cm' },
        { label: 'Tarif', value: '75 TND la pièce — 140 TND le duo' },
        { label: 'Matière', value: '100% pure laine tissée main (Kilim traditionnel)' },
        { label: 'Fermeture', value: 'Fermeture éclair intégrée pour un déhoussage facile' },
        { label: 'Entretien', value: 'Nettoyage à sec recommandé ou lavage doux à la main' }
      ],
      media: [
        { type: 'image', src: 'images/coussin/coussin-kilim-traditionnel-1.jpg' },
        { type: 'image', src: 'images/coussin/coussin-kilim-traditionnel-2.jpg' },
        { type: 'image', src: 'images/coussin/coussin-kilim-traditionnel-3.jpg' }
      ]
    },
    'table-appoint-blenz': {
      name: 'Table Appoint / Bout de Canapé Style Blenz',
      price: 190,
      description: "Un chef-d'œuvre du mobilier traditionnel tunisien réinventé. Cette table d'appoint octogonale au style « Blenz » est entièrement façonnée en bois naturel, arborant des lattes verticales soigneusement assemblées. Avec sa teinte chaleureuse et ses lignes géométriques élégantes, elle s'intègre parfaitement à côté d'un canapé ou au cœur d'un salon traditionnel et contemporain.",
      specs: [
        { label: 'Dimensions', value: 'Diamètre 45 cm | hauteur 45 cm' },
        { label: 'Matière', value: 'Bois naturel de qualité avec finition vernie protectrice' },
        { label: 'Forme', value: 'Octogonale (style Blenz)' },
        { label: 'Entretien', value: 'Dépoussiérage facile avec un chiffon doux ou légèrement humide' }
      ],
      media: [
        { type: 'image', src: 'images/table/table-appoint-blenz-1.jpg' }
      ]
    },
    'fauteuil-signature-margoum': {
      name: 'Fauteuil Signature en Margoum Tissé Main',
      price: 950,
      description: "Une pièce maîtresse d'une élégance rare, alliance parfaite entre le design contemporain et le savoir-faire artisanal tunisien. Entièrement revêtu d'un tapis Margoum tissé à la main en pure laine, ce fauteuil chauffeuse séduit par son contraste de couleurs vibrant (vert émeraude, jaune moutarde et touches de magenta) et ses motifs ethniques raffinés. Son assise généreuse et son dossier incliné vous offrent un confort absolu, parfait pour sublimer un coin lecture ou un salon de caractère.",
      specs: [
        { label: 'Revêtement', value: '100% Pure laine tissée à la main (Margoum Tunisien Haute Qualité)' },
        { label: 'Piètement', value: 'Bois naturel robuste au design épuré' },
        { label: 'Confort', value: 'Mousse haute densité à forte résilience' },
        { label: 'Exclusivité', value: 'Pièce unique réalisée à la main' },
        { label: 'Entretien', value: 'Nettoyage à sec recommandé ou soin spécial laine' }
      ],
      media: [
        { type: 'image', src: 'images/fouteulle/fauteuil-signature-margoum-1.jpg' },
        { type: 'image', src: 'images/fouteulle/fauteuil-signature-margoum-2.jpg' }
      ]
    },
    'ensemble-relax-fauteuil-repose-pieds': {
      name: 'Ensemble Relax Signature Fauteuil & Repose-Pieds en Margoum Tunisien',
      price: 1350,
      description: "L'expérience ultime du confort associée à l'élégance du patrimoine tunisien. Cet ensemble comprend un fauteuil chauffeuse et son tabouret repose-pieds assorti, tous deux entièrement recouverts d'un Margoum en pure laine tissé à la main. Le jeu des rayures multicolores dynamiques (jaune moutarde, violet, rouge carmin, vert et bleu) apporte une touche artistique unique à votre espace. Un duo d'exception pour créer un coin lecture élégant ou sublimer votre salon.",
      specs: [
        { label: 'Contenu', value: '1 Fauteuil + 1 Tabouret repose-pieds' },
        { label: 'Revêtement', value: '100% Pure laine tissée à la main (Margoum Tunisien Traditionnel)' },
        { label: 'Piètement', value: 'Bois naturel robuste au style scandinave' },
        { label: 'Confort', value: 'Assise et dossier rembourrés en mousse haute densité' },
        { label: 'Entretien', value: 'Nettoyage à sec recommandé ou soin spécial laine' }
      ],
      media: [
        { type: 'image', src: 'images/fouteulle/ensemble-relax-fauteuil-repose-pieds-1.jpg' },
        { type: 'image', src: 'images/fouteulle/ensemble-relax-fauteuil-repose-pieds-2.jpg' },
        { type: 'image', src: 'images/fouteulle/ensemble-relax-fauteuil-repose-pieds-3.jpg' }
      ]
    },
    'chaise-blenz-noir-blanc': {
      name: 'Chaise « Blenz » Noir & Blanc Artisanal',
      price: 850,
      description: "Un contraste saisissant entre le minimalisme contemporain et le raffinement du patrimoine tunisien. Cette chaise fauteuil au style « Blenz » se distingue par sa structure en bois massif laqué blanc aux lignes arrondies et enveloppantes. Son assise est magnifiquement rembourrée et tapissée d'un tissage fait main inspiré du savoir-faire de Gafsa, arborant des motifs géométriques ethniques noirs et blancs. Une pièce maîtresse pour sublimer une table à manger de prestige, un bureau ou un coin salon.",
      specs: [
        { label: 'Structure', value: 'Bois massif robuste, finition laquée blanc mat/satiné' },
        { label: 'Assise', value: '100% Pure laine tissée à la main (Motifs traditionnels de Gafsa)' },
        { label: 'Design', value: 'Dossier enveloppant avec accoudoirs intégrés (Style Blenz)' },
        { label: 'Entretien', value: 'Structure en bois facile à nettoyer. Assise nettoyable à sec' }
      ],
      media: [
        { type: 'image', src: 'images/chaise/chaise-blenz-noir-blanc-1.jpg' },
        { type: 'image', src: 'images/chaise/chaise-blenz-noir-blanc-2.jpg' },
        { type: 'image', src: 'images/chaise/chaise-blenz-noir-blanc-3.jpg' }
      ]
    },
    'chaise-aurora-blenz': {
      name: 'Chaise « Aurora » en Bois Blenz & Margoum Artisanal',
      price: 480,
      description: "Un mariage parfait entre la modernité des formes et la richesse du patrimoine tunisien. Cette chaise se distingue par son dossier arqué et évidé en son centre, offrant une allure aérienne et un confort enveloppant. Sa structure est réalisée en bois Blenz naturel avec des pieds travaillés avec soin. L'ensemble est revêtu d'un magnifique tapis Margoum tissé à la main en 100% pure laine, mêlant des teintes vibrantes et des motifs géométriques berbères.",
      specs: [
        { label: 'Structure & Piètement', value: 'Bois Blenz naturel de haute qualité' },
        { label: 'Assise & Dossier', value: '100% Pure laine tissée main (Margoum Tunisien)' },
        { label: 'Design', value: 'Dossier enveloppant à ouverture circulaire (Style Médaillon Moderne)' },
        { label: 'Entretien', value: 'Nettoyage à sec recommandé pour la laine et dépoussiérage du bois avec un chiffon doux' }
      ],
      media: [
        { type: 'image', src: 'images/chaise/chaise-aurora-blenz-1.jpg' },
        { type: 'image', src: 'images/chaise/chaise-aurora-blenz-2.jpg' },
        { type: 'image', src: 'images/chaise/chaise-aurora-blenz-3.jpg' }
      ]
    },
    'chaise-elissa-blenz': {
      name: 'Chaise « Elissa » en Bois Blenz & Margoum Losanges',
      price: 480,
      description: "Une silhouette moderne et audacieuse qui élève l'art du Margoum. La chaise « Elissa » se distingue par son dossier incurvé avec ouverture inférieure et son revêtement intégral en pure laine tissée à la main. Son motif à losanges multicolores (rouge, vert, bleu et jaune) apporte une dynamique visuelle unique, magnifiquement soutenue par un piètement travaillé en bois Blenz naturel. Idéale pour apporter du caractère à une table à manger ou un espace bureau raffiné.",
      specs: [
        { label: 'Structure & Piètement', value: 'Bois Blenz naturel robuste avec finition soignée' },
        { label: 'Assise & Dossier', value: '100% Pure laine tissée main (Margoum motif losanges)' },
        { label: 'Design', value: 'Dossier enveloppant à découpe inférieure (Style Arqué)' },
        { label: 'Entretien', value: 'Nettoyage à sec recommandé pour le tissu et dépoussiérage du bois au chiffon doux' }
      ],
      media: [
        { type: 'image', src: 'images/chaise/chaise-elissa-blenz-1.jpg' },
        { type: 'image', src: 'images/chaise/chaise-elissa-blenz-2.jpg' },
        { type: 'image', src: 'images/chaise/chaise-elissa-blenz-3.jpg' }
      ]
    },
    'chaise-ajmal-blenz': {
      name: 'Chaise « Ajmal » en Bois Blenz & Margoum Artisanal',
      price: 480,
      description: "Une création chaleureuse et raffinée qui incarne la beauté de l'artisanat tunisien. La chaise « Ajmal » se distingue par son dossier incurvé à ouverture inférieure et son revêtement complet en pure laine tissée à la main. Dominée par une nuance orange très tendance, elle est sublimée par des motifs géométriques traditionnels jaunes, bleus et roses. Son piètement sculpté en bois Blenz naturel apporte élégance et stabilité, parfait pour habiller une table à manger ou un coin bureau.",
      specs: [
        { label: 'Structure & Piètement', value: 'Bois Blenz naturel robuste' },
        { label: 'Assise & Dossier', value: '100% Pure laine tissée main (Margoum teinte orange)' },
        { label: 'Design', value: 'Dossier enveloppant à découpe circulaire (Style Arqué)' },
        { label: 'Entretien', value: 'Nettoyage à sec recommandé pour la laine et dépoussiérage du bois avec un chiffon doux' }
      ],
      media: [
        { type: 'image', src: 'images/chaise/chaise-ajmal-blenz-1.jpg' },
        { type: 'image', src: 'images/chaise/chaise-ajmal-blenz-2.jpg' },
        { type: 'image', src: 'images/chaise/chaise-ajmal-blenz-3.jpg' }
      ]
    },
    'chaise-arc-en-ciel-blenz': {
      name: 'Chaise « Arc-en-Ciel » en Bois Blenz & Margoum Artisanal',
      price: 480,
      description: "Une création pétillante et dynamique qui apporte une explosion de couleurs à votre intérieur. La chaise « Arc-en-Ciel » se distingue par son dossier incurvé à découpe circulaire et son revêtement intégral en pure laine tissée à la main. Arborant de magnifiques rayures verticales multicolores (rose fuchsia, orange, vert et bleu indigo), elle repose sur un piètement robuste en bois Blenz naturel. Un choix parfait pour dynamiser une table à manger contemporaine ou un espace bureau élégant.",
      specs: [
        { label: 'Structure & Piètement', value: 'Bois Blenz naturel robuste' },
        { label: 'Assise & Dossier', value: '100% Pure laine tissée main (Margoum à rayures multicolores)' },
        { label: 'Design', value: 'Dossier enveloppant à découpe inférieure (Style Arqué)' },
        { label: 'Entretien', value: 'Nettoyage à sec recommandé pour la laine et dépoussiérage du bois avec un chiffon doux' }
      ],
      media: [
        { type: 'image', src: 'images/chaise/chaise-arc-en-ciel-blenz-1.jpg' },
        { type: 'image', src: 'images/chaise/chaise-arc-en-ciel-blenz-2.jpg' },
        { type: 'image', src: 'images/chaise/chaise-arc-en-ciel-blenz-3.jpg' }
      ]
    },
    'fauteuil-ambassadeur-margoum': {
      name: 'Chaise Fauteuil « Ambassadeur » Mosaïque en Margoum',
      price: 650,
      description: "Une allure majestueuse et un confort inégalé. La chaise « Ambassadeur » se distingue par son haut dossier majestueux et ses accoudoirs intégrés qui vous enveloppent avec élégance. Entièrement tapissée d'un tapis Margoum en pure laine tissé à la main, elle arbore une mosaïque de losanges géométriques aux couleurs éclatantes (jaune moutarde, rouge, violet et bleu). Portée par un piètement robuste en bois Blenz naturel, c'est la pièce maîtresse idéale pour sublimer un bout de table à manger, un bureau de prestige ou un coin salon raffiné.",
      specs: [
        { label: 'Structure & Piètement', value: 'Bois Blenz naturel haute résistance' },
        { label: 'Assise, Accoudoirs & Dossier', value: '100% Pure laine tissée main (Margoum motifs géométriques)' },
        { label: 'Design', value: 'Dossier haut majestueux avec accoudoirs ergonomiques' },
        { label: 'Entretien', value: 'Nettoyage à sec recommandé pour la laine et dépoussiérage du bois au chiffon doux' }
      ],
      media: [
        { type: 'image', src: 'images/chaise/fauteuil-ambassadeur-margoum-1.jpg' },
        { type: 'image', src: 'images/chaise/fauteuil-ambassadeur-margoum-2.jpg' },
        { type: 'image', src: 'images/chaise/fauteuil-ambassadeur-margoum-3.jpg' }
      ]
    },
    'fauteuil-agadir-margoum': {
      name: 'Chaise Fauteuil « Agadir » en Margoum Artisanal',
      price: 650,
      description: "Une prestance royale et un confort exceptionnel. La chaise « Agadir » impose son style grâce à son haut dossier enveloppant et ses accoudoirs intégrés. Entièrement tapissée d'un Margoum en pure laine tissé à la main, elle se distingue par un fond bleu indigo profond au niveau du dossier, rehaussé de symboles berbères traditionnels et de touches multicolores vibrantes. Portée par un piètement robuste en bois Blenz naturel, c'est la pièce maîtresse parfaite pour un bout de table de caractère, un bureau de prestige ou un coin salon raffiné.",
      specs: [
        { label: 'Structure & Piètement', value: 'Bois Blenz naturel haute résistance' },
        { label: 'Assise, Accoudoirs & Dossier', value: '100% Pure laine tissée main (Margoum motifs indigo & symboles)' },
        { label: 'Design', value: 'Dossier haut majestueux avec accoudoirs intégrés' },
        { label: 'Entretien', value: 'Nettoyage à sec recommandé pour la laine et dépoussiérage du bois au chiffon doux' }
      ],
      media: [
        { type: 'image', src: 'images/chaise/fauteuil-agadir-margoum-1.jpg' },
        { type: 'image', src: 'images/chaise/fauteuil-agadir-margoum-2.jpg' },
        { type: 'image', src: 'images/chaise/fauteuil-agadir-margoum-3.jpg' }
      ]
    },
    'fauteuil-atlas-margoum': {
      name: 'Chaise Fauteuil « Atlas » Mosaïque & Rayures en Margoum',
      price: 650,
      description: "Une allure majestueuse et une véritable explosion de couleurs artisanales. La chaise « Atlas » se distingue par son haut dossier imposant et ses accoudoirs ergonomiques. Son design unique associe avec audace des carrés tissés de symboles berbères traditionnels sur le dossier et les côtés à une assise aux rayures multicolores vibrantes. Entièrement revêtue d'un Margoum en pure laine fait main et portée par des pieds en bois Blenz naturel, c'est la pièce maîtresse parfaite pour votre salle à manger, bureau de prestige ou salon.",
      specs: [
        { label: 'Structure & Piètement', value: 'Bois Blenz naturel haute résistance' },
        { label: 'Assise, Accoudoirs & Dossier', value: '100% Pure laine tissée main (Margoum motif patchwork & rayures)' },
        { label: 'Design', value: 'Dossier haut majestueux avec accoudoirs intégrés' },
        { label: 'Entretien', value: 'Nettoyage à sec recommandé pour la laine et dépoussiérage du bois au chiffon doux' }
      ],
      media: [
        { type: 'image', src: 'images/chaise/fauteuil-atlas-margoum-1.jpg' },
        { type: 'image', src: 'images/chaise/fauteuil-atlas-margoum-2.jpg' },
        { type: 'image', src: 'images/chaise/fauteuil-atlas-margoum-3.jpg' }
      ]
    },
    'chaise-odyssee-blenz': {
      name: 'Chaise « Odyssée » en Bois Blenz & Margoum Losanges',
      price: 480,
      description: "Une silhouette contemporaine et un équilibre géométrique parfait. La chaise « Odyssée » se distingue par son dossier incurvé en arc à découpe inférieure et son revêtement intégral en Margoum pure laine tissé à la main. Sublimée par des motifs de losanges traditionnels aux teintes harmonieuses (rouge corail, bleu ciel, violet et blanc ivoire), elle repose sur un piètement robuste en bois Blenz naturel. Un choix parfait pour apporter de la chaleur, de l'élégance et une touche artistique à votre salle à manger ou espace bureau.",
      specs: [
        { label: 'Structure & Piètement', value: 'Bois Blenz naturel haute résistance' },
        { label: 'Assise & Dossier', value: '100% Pure laine tissée main (Margoum motifs losanges)' },
        { label: 'Design', value: 'Dossier enveloppant en arc à découpe circulaire' },
        { label: 'Entretien', value: 'Nettoyage à sec recommandé pour la laine et dépoussiérage du bois avec un chiffon doux' }
      ],
      media: [
        { type: 'image', src: 'images/chaise/chaise-odyssee-blenz-1.jpg' },
        { type: 'image', src: 'images/chaise/chaise-odyssee-blenz-2.jpg' },
        { type: 'image', src: 'images/chaise/chaise-odyssee-blenz-3.jpg' }
      ]
    },
    'chaise-allegria-blenz': {
      name: 'Chaise « Allégria » en Bois Blenz & Margoum Artisanal',
      price: 480,
      description: "Une pièce lumineuse et audacieuse qui marie à la perfection modernité et tradition. La chaise « Allégria » se distingue par son dossier incurvé en arc à découpe inférieure et son assise éclatante en Margoum rose fuchsia à rayures verticales. Le dossier est sublimé par une mosaïque géométrique de losanges en pure laine tissée à la main aux teintes vert, bleu et jaune. Reposant sur un piètement robuste en bois Blenz naturel, elle apporte une touche pétillante et élégante à votre intérieur.",
      specs: [
        { label: 'Structure & Piètement', value: 'Bois Blenz naturel haute résistance' },
        { label: 'Assise & Dossier', value: '100% Pure laine tissée main (Margoum assise fuchsia & dossier losanges)' },
        { label: 'Design', value: 'Dossier enveloppant en arc à découpe circulaire' },
        { label: 'Entretien', value: 'Nettoyage à sec recommandé pour la laine et dépoussiérage du bois avec un chiffon doux' }
      ],
      media: [
        { type: 'image', src: 'images/chaise/chaise-allegria-blenz-1.jpg' },
        { type: 'image', src: 'images/chaise/chaise-allegria-blenz-2.jpg' },
        { type: 'image', src: 'images/chaise/chaise-allegria-blenz-3.jpg' }
      ]
    },
    'chaise-sindbad-blenz': {
      name: 'Chaise « Sindbad » Enveloppante Margoum Artisanal',
      price: 520,
      description: "Un design enveloppant au charme irrésistible. La chaise « Sindbad » se distingue par son dossier semi-circulaire arrondi qui épouse parfaitement le dos pour un confort optimal. Entièrement habillée d'un Margoum en pure laine tissé à la main, elle arbore une mosaïque de losanges et symboles traditionnels aux couleurs éclatantes (rose fuchsia, vert émeraude, jaune et rouge). Reposant sur des pieds évasés en bois Blenz naturel, elle apporte une touche chaleureuse, chic et authentique à votre intérieur.",
      specs: [
        { label: 'Tarif', value: '520 TND l’unité — Offre Spéciale Duo : 850 TND les 2 pièces' },
        { label: 'Structure & Piètement', value: 'Bois Blenz naturel haute résistance' },
        { label: 'Assise & Dossier', value: '100% Pure laine tissée main (Margoum mosaïque géométrique)' },
        { label: 'Design', value: 'Dossier arrondi enveloppant (Style Crapaud moderne)' },
        { label: 'Entretien', value: 'Nettoyage à sec recommandé pour la laine et dépoussiérage du bois au chiffon doux' }
      ],
      media: [
        { type: 'image', src: 'images/chaise/chaise-sindbad-blenz-1.jpg' },
        { type: 'image', src: 'images/chaise/chaise-sindbad-blenz-2.jpg' }
      ]
    },
    'chaise-ulysse-blenz': {
      name: 'Chaise « Ulysse » Design & Margoum Laine Brute',
      price: 690,
      description: "L'alliance parfaite entre le design contemporain pur et l'authenticité textile. La chaise « Ulysse » se distingue par sa structure architecturale aux lignes droites en bois Blenz massif et son dossier cylindrique incurvé pour un maintien impeccable. Elle est habillée d'un Margoum en pure laine brute non teinte (nuances beige et gris naturel), sublimé par de fins symboles traditionnels tissés en blanc ivoire. Une pièce d'exception pour sublimer une table à manger haut de gamme, un bureau de prestige ou un salon contemporain.",
      specs: [
        { label: 'Tarif', value: '690 TND l’unité — Offre Spéciale Duo : 1190 TND les 2 pièces' },
        { label: 'Structure & Piètement', value: 'Bois Blenz massif naturel finition raffinée' },
        { label: 'Assise & Dossier', value: '100% Pure laine brute tissée main (Margoum teintes naturelles)' },
        { label: 'Design', value: 'Structure géométrique avec dossier rouleau ergonomique' },
        { label: 'Entretien', value: 'Nettoyage à sec recommandé pour la laine et dépoussiérage du bois au chiffon doux' }
      ],
      media: [
        { type: 'video', src: 'images/chaise/chaise-ulysse-blenz.mp4', poster: 'images/chaise/chaise-ulysse-blenz-1.jpg' },
        { type: 'image', src: 'images/chaise/chaise-ulysse-blenz-1.jpg' },
        { type: 'image', src: 'images/chaise/chaise-ulysse-blenz-2.jpg' },
        { type: 'image', src: 'images/chaise/chaise-ulysse-blenz-3.jpg' },
        { type: 'image', src: 'images/chaise/chaise-ulysse-blenz-4.jpg' },
        { type: 'image', src: 'images/chaise/chaise-ulysse-blenz-5.jpg' }
      ]
    },
    'pouf-oasis-lounge-margoum': {
      name: 'Pouf Chauffeuse Lounge « Oasis » Margoum Pure Laine',
      price: 480,
      description: "L'art de vivre et du cocooning à la tunisienne. Le pouf chauffeuse « Oasis » se caractérise par son assise allongée et sa silhouette basse ergonomique, offrant un soutien parfait pour vos moments de détente. Entièrement habillé d'un tapis Margoum en pure laine tissé à la main, chaque modèle est une pièce unique arborant des motifs géométriques et des teintes vibrantes (rouge corail, bleu turquoise, fuchsia et jaune). Garnie d'une mousse haute densité pour un maintien durable, c'est la pièce idéale pour créer un coin salon lounge, convivial et chaleureux.",
      specs: [
        { label: 'Tarif', value: '480 TND l’unité — Offre Spéciale : 1240 TND les 3 pièces' },
        { label: 'Revêtement', value: '100% Pure laine tissée main (Margoum motifs géométriques authentiques)' },
        { label: 'Garnissage', value: 'Mousse haute densité ferme et confortable' },
        { label: 'Design', value: 'Chauffeuse de sol allongée (Style Lounge)' },
        { label: 'Entretien', value: 'Nettoyage à sec recommandé pour la laine' }
      ],
      media: [
        { type: 'image', src: 'images/pouffe/pouf-oasis-lounge-margoum-1.jpg' },
        { type: 'image', src: 'images/pouffe/pouf-oasis-lounge-margoum-2.jpg' },
        { type: 'image', src: 'images/pouffe/pouf-oasis-lounge-margoum-3.jpg' },
        { type: 'image', src: 'images/pouffe/pouf-oasis-lounge-margoum-4.jpg' },
        { type: 'image', src: 'images/pouffe/pouf-oasis-lounge-margoum-5.jpg' }
      ]
    },
    'coussin-sol-geant-atmosphere': {
      name: 'Coussin de Sol Géant « Atmosphère » 80x80 cm en Pure Laine',
      price: 190,
      description: "L'union parfaite entre l'authenticité du textile traditionnel et le confort absolu. Ce coussin de sol géant au format XXL (80x80 cm) est entièrement tissé à la main en pure laine selon l'art authentique du Margoum. Arborant des motifs géométriques berbères riches en couleurs (teintes bordeaux, turquoise, fuchsia et vert), il offre une assise moelleuse, ferme et ultra-confortable grâce à son garnissage haute densité. Idéal pour créer un coin lecture douillet, habiller un salon moderne ou aménager un espace lounge chaleureux.",
      specs: [
        { label: 'Dimensions', value: '80 x 80 cm (Format Géant XXL)' },
        { label: 'Composition', value: '100% Pure laine tissée main (Margoum artisanal)' },
        { label: 'Garnissage', value: 'Mousse et fibres haute densité pour un maintien parfait' },
        { label: 'Entretien', value: 'Nettoyage à sec recommandé pour préservation de la laine' }
      ],
      media: [
        { type: 'image', src: 'images/coussin/coussin-sol-geant-atmosphere-1.jpg' },
        { type: 'image', src: 'images/coussin/coussin-sol-geant-atmosphere-2.jpg' },
        { type: 'image', src: 'images/coussin/coussin-sol-geant-atmosphere-3.jpg' },
        { type: 'image', src: 'images/coussin/coussin-sol-geant-atmosphere-4.jpg' }
      ]
    },
    'kairouan-yasmine-jardin': {
      name: 'Tapis d’Art « Yasmine » Kairouan — Édition 2026',
      price: 3800,
      description: "Un chef-d'œuvre de l'artisanat tunisien représentant l'excellence du tapis de Kairouan. Issue de la toute nouvelle collection 2026, la pièce « Yasmine » se distingue par un tissage d'une finesse rare de 20x20 nœuds au décimètre carré (1er Choix), offrant une densité exceptionnelle et un toucher velouté incomparable. Son champ central crème s'épanouit dans un entrelacs floral délicat évoquant les jardins de jasmin, magnifiquement encadré par des bordures géométriques aux nuances bordeaux, violettes et bleu nuit. Avec un poids noble de 22,4 kg garantissant sa durabilité sur des générations, ce tapis constitue une pièce de collection d'une élégance intemporelle pour les intérieurs les plus prestigieux.",
      specs: [
        { label: 'Prix au m²', value: '650 TND / m²' },
        { label: 'Dimensions', value: '197 x 295 cm (Surface : 5,81 m²)' },
        { label: 'Poids', value: '22,400 kg (Pure laine dense)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Année de création', value: '2026 (Modèle exclusif)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-yasmine-jardin-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-jardin-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-jardin-3.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-jardin-4.jpg' }
      ]
    },
    'kairouan-yasmine-brise': {
      name: 'Tapis d’Art « Brise de Yasmine » Kairouan — Édition 2026',
      price: 3990,
      description: "Une déclinaison chromatique et monumentale du motif emblématique « Yasmine », issue de la prestigieuse collection 2026. Ce tapis majestueux de 2,00 x 3,10 m témoigne du savoir-faire séculaire de Kairouan avec son tissage d'une extrême finesse de 20x20 nœuds au décimètre carré (1er Choix). Son champ ivoire accueille une symphonie florale raffinée aux nuances retravaillées, délicatement encadrée par des bordures géométriques bordeaux et violettes. Affichant un poids noble de 21,50 kg, cette pièce unique combine confort velouté, durabilité exceptionnelle et élégance intemporelle pour sublimer les intérieurs les plus raffinés.",
      specs: [
        { label: 'Prix au m²', value: '650 TND / m²' },
        { label: 'Dimensions', value: '200 x 310 cm (Surface : 6,20 m²)' },
        { label: 'Poids', value: '21,500 kg (Pure laine dense)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Année de création', value: '2026 (Modèle exclusif)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-yasmine-brise-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-brise-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-brise-3.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-brise-4.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-brise-5.jpg' }
      ]
    },
    'kairouan-jasmin-royal': {
      name: 'Tapis Fait Main « Jasmin » de Kairouan — Qualité Royale 1ère Choix',
      price: 3800,
      description: "Un chef-d'œuvre textile incarnant le sommet de l'artisanat et du luxe kairouanais. Le tapis « Jasmin » se distingue par son fond ivoire lumineux, orné de motifs floraux d'une finesse remarquable inspirés des fleurs de jasmin tunisien, le tout encadré par une bordure royale aux teintes corail chaleureuses. Tissé à la main avec une densité exceptionnelle de nœuds (30 x 30), il offre un toucher soyeux, une douceur inégalée et une élégance intemporelle pour sublimer vos salons d'apparat. Investissement patrimonial : bien plus qu'un élément de décoration, un trésor de l'artisanat dont la valeur s'accroît au fil des années.",
      specs: [
        { label: 'Prix au m²', value: '850 TND / m²' },
        { label: 'Dimensions', value: '175 x 260 cm (Surface : 4,55 m²)' },
        { label: 'Densité du nouage', value: '30 x 30 nœuds / m² (90 000 nœuds/m² — nouage extra-fin de très haute précision)' },
        { label: 'Composition', value: '100% Pure laine sélectionnée (1er Choix — Qualité Supérieure A1)' },
        { label: 'Certification', value: 'Tapis noué main certifié 1ère choix par l’Office National de l’Artisanat Tunisien' },
        { label: 'Entretien', value: 'Laine haute qualité traitée, facile à aspirer et à entretenir' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-jasmin-royal-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-jasmin-royal-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-jasmin-royal-3.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-jasmin-royal-4.jpg' }
      ]
    },
    'kairouan-yasmine-all-over': {
      name: 'Tapis d’Exception « Fleur de Yasmine » Kairouan All-Over — Édition 2026',
      price: 2790,
      description: "Une relecture moderne et audacieuse du motif emblématique « Yasmine ». Libéré des bordures traditionnelles, ce tapis d'art adopte un motif continu (all-over) où les rinceaux floraux et les bourgeons de jasmin s'épanouissent sur toute la surface ivoire. Issu de la collection 2026, il bénéficie d'un tissage d'une extrême finesse de 20x20 nœuds au décimètre carré (1er Choix). Ses nuances de bordeaux, prune et vert olive apportent une touche de fraîcheur et de poésie — la pièce parfaite pour agrandir visuellement un espace et offrir une élégance contemporaine à votre intérieur.",
      specs: [
        { label: 'Prix au m²', value: '650 TND / m²' },
        { label: 'Dimensions', value: '173 x 248 cm (Surface : ~4,29 m²)' },
        { label: 'Poids', value: '12,00 kg (Pure laine dense)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Année de création', value: '2026 (Modèle exclusif All-over)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-yasmine-all-over-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-all-over-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-all-over-3.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-all-over-4.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-all-over-5.jpg' }
      ]
    },
    'kairouan-yasmine-bordure-corail': {
      name: 'Tapis d’Art « Yasmine » Bordure Corail Kairouan — Édition 2026',
      price: 2750,
      description: "L'élégance classique du tapis de Kairouan dans toute sa splendeur. Issu de la collection exclusive 2026, ce modèle combine la délicatesse d'un champ central ivoire aux motifs floraux de jasmin avec l'intensité d'une large bordure encadrante teinte en rouge corail et terre cuite. Tissé avec une extrême précision de 20x20 nœuds au décimètre carré (1er Choix), il offre une densité parfaite et un velouté incomparable — une pièce majestueuse qui apporte chaleur, prestige et authenticité aux salons et espaces de réception les plus raffinés.",
      specs: [
        { label: 'Prix au m²', value: '650 TND / m²' },
        { label: 'Dimensions', value: '174 x 245 cm (Surface : ~4,26 m²)' },
        { label: 'Poids', value: '16,00 kg (Pure laine dense)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Année de création', value: '2026 (Modèle exclusif)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-yasmine-bordure-corail-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-bordure-corail-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-bordure-corail-3.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-bordure-corail-4.jpg' }
      ]
    },
    'kairouan-yasmine-bordure-doree': {
      name: 'Tapis d’Art « Yasmine » Bordure Dorée de Kairouan — Édition 2026',
      price: 2700,
      description: "Une déclinaison chromatique noble et chaleureuse du légendaire motif « Yasmine », issue de la collection 2026. Ce tapis d'art se distingue par l'harmonie parfaite entre son champ central ivoire aux rinceaux floraux ambrés et sa majestueuse bordure dans les tons brun doré, miel et ébène. Tissé à la main avec une finesse exceptionnelle de 20x20 nœuds au décimètre carré (1er Choix), il offre un velouté incomparable et une densité remarquable — une pièce qui apporte une atmosphère feutrée, prestigieuse et intemporelle aux intérieurs les plus raffinés.",
      specs: [
        { label: 'Prix au m²', value: '650 TND / m²' },
        { label: 'Dimensions', value: '178 x 238 cm (Surface : ~4,23 m²)' },
        { label: 'Poids', value: '14,00 kg (Pure laine dense)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Année de création', value: '2026 (Modèle exclusif)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-yasmine-bordure-doree-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-bordure-doree-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-bordure-doree-3.jpg' }
      ]
    },
    'kairouan-yasmine-sidi-bou-said': {
      name: 'Tapis d’Art « Yasmine Bleu Sidi Bou Saïd » Kairouan — Finesse Royale',
      price: 3800,
      description: "Une ode magistrale à la Méditerranée et au légendaire village de Sidi Bou Saïd. Issu de la prestigieuse collection 2026, ce tapis se distingue par une finesse de tissage extrême et rarissime de 30x30 nœuds au décimètre carré (90 000 nœuds/m² — 1er Choix). Son champ ivoire éclatant accueille les rinceaux floraux du jasmin déclinés dans une palette de bleus intenses et azurs, magnifiquement rehaussés par une double bordure bleu nuit. Ce chef-d'œuvre apporte une fraîcheur prestigieuse, une douceur incomparable et une élégance intemporelle aux intérieurs les plus raffinés.",
      specs: [
        { label: 'Prix au m²', value: '750 TND / m²' },
        { label: 'Dimensions', value: '175 x 265 cm (Surface : ~4,63 m²)' },
        { label: 'Poids', value: '12,00 kg (Pure laine extra-fine)' },
        { label: 'Densité', value: '30 x 30 Nœuds / dm² (Finesse Extrême Royale — 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Année de création', value: '2026 (Édition limitée)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-yasmine-sidi-bou-said-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-sidi-bou-said-2.jpg' }
      ]
    },
    'kairouan-descente-mihrab': {
      name: 'Ensemble Descente de Lit « Mihrab Géométrique » Kairouan (3 Pièces)',
      price: 2400,
      description: "Un ensemble complet d'une élégance rare, conçu sur-mesure pour sublimer les chambres à coucher principales. Issu de la nouvelle collection 2026, ce set de 3 pièces se compose d'un grand tapis central pour le devant du lit et de deux descentes de lit assorties. Tissé à la main en pure laine traditionnelle de Kairouan avec une finesse remarquable de 20x20 nœuds au décimètre carré (1er Choix), il arbore un motif géométrique central en losange (Mihrab) entouré d'un tressage aux tons terreux, miel et chocolat sur fond ivoire. Cet ensemble apporte une douceur incomparable au réveil et un prestige authentique à votre espace nuit.",
      specs: [
        { label: 'Contenu du set', value: '1 tapis devant de lit + 2 descentes de lit assorties' },
        { label: 'Tapis devant de lit', value: '123 x 180 cm' },
        { label: 'Descentes de lit (x2)', value: '74 x 141 cm (chacune)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine traditionnelle de Kairouan tissée à la main' },
        { label: 'Année de création', value: '2026 (Modèle exclusif)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'video', src: 'images/margoum/kairouan-descente-mihrab.mp4', poster: 'images/margoum/kairouan-descente-mihrab-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-descente-mihrab-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-descente-mihrab-2.jpg' }
      ]
    },
    'kairouan-descente-yasmine-royale': {
      name: 'Ensemble Descente de Lit « Yasmine » Kairouan Finesse Royale (3 Pièces)',
      price: 2500,
      description: "Un joyau de l'artisanat de Kairouan conçu pour transformer la chambre à coucher en un havre de prestige et de confort. Issu de la collection exclusive 2026, cet ensemble de 3 pièces arbore le motif emblématique « Yasmine » décliné avec une finesse extrême de 30x30 nœuds au décimètre carré (1er Choix). Tissé à la main en pure laine de qualité supérieure, son champ central ivoire accueille des rinceaux floraux méticuleux, magnifiquement encadrés par une bordure corail et bordeaux. Offrant une douceur incomparable au réveil, cet ensemble apporte élégance, chaleur et raffinement intemporel à votre espace nuit.",
      specs: [
        { label: 'Contenu du set', value: '1 tapis devant de lit + 2 descentes de lit assorties' },
        { label: 'Tapis devant de lit', value: '100 x 170 cm' },
        { label: 'Descentes de lit (x2)', value: '70 x 150 cm (chacune)' },
        { label: 'Densité', value: '30 x 30 Nœuds / dm² (Finesse Extrême Royale — 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Année de création', value: '2026 (Modèle exclusif)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-descente-yasmine-royale-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-descente-yasmine-royale-2.jpg' }
      ]
    },
    'kairouan-descente-yasmine-all-over': {
      name: 'Ensemble Descente de Lit « Yasmine All-Over » Kairouan (3 Pièces)',
      price: 2350,
      description: "Un ensemble raffiné et moderne dédié à l'aménagement des chambres à coucher de prestige. Issu de la collection 2026, ce set de 3 pièces adopte le motif floral continu « Yasmine All-Over » (sans bordure encadrante), apportant une sensation de grandeur et de continuité visuelle. Tissé à la main en pure laine traditionnelle de Kairouan avec une densité de 20x20 nœuds au décimètre carré (1er Choix), il marie un fond ivoire douillet à des rinceaux floraux aux nuances bordeaux, prune et olive. Cet ensemble offre une douceur incomparable au quotidien et une touche d'élégance artisanale intemporelle.",
      specs: [
        { label: 'Contenu du set', value: '1 tapis devant de lit + 2 descentes de lit assorties' },
        { label: 'Tapis devant de lit', value: '108 x 175 cm' },
        { label: 'Descentes de lit (x2)', value: '75 x 150 cm (chacune)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine traditionnelle de Kairouan tissée à la main' },
        { label: 'Année de création', value: '2026 (Modèle exclusif All-over)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-descente-yasmine-all-over-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-descente-yasmine-all-over-2.jpg' }
      ]
    },
    'kairouan-descente-yasmine-beige-brun': {
      name: 'Ensemble Descente de Lit « Yasmine Beige & Brun » Kairouan (3 Pièces)',
      price: 2500,
      description: "Une harmonie parfaite de tons chauds et naturels dédiée à l'aménagement des chambres à coucher de haut standing. Issu de la nouvelle collection 2026, cet ensemble de 3 pièces met à l'honneur le motif « Yasmine » dans une élégante déclinaison beige et brun. Tissé à la main en pure laine traditionnelle de Kairouan avec une finesse de 20x20 nœuds au décimètre carré (1er Choix), il marie la douceur d'un fond beige ivoire à la finesse de rinceaux floraux teintés de marron glacé et chocolat. Cet ensemble apporte une atmosphère feutrée, chaleureuse et authentique à votre espace nuit.",
      specs: [
        { label: 'Contenu du set', value: '1 tapis devant de lit + 2 descentes de lit assorties' },
        { label: 'Tapis devant de lit', value: '120 x 180 cm' },
        { label: 'Descentes de lit (x2)', value: '75 x 150 cm (chacune)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine traditionnelle de Kairouan tissée à la main' },
        { label: 'Année de création', value: '2026 (Modèle exclusif)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-descente-yasmine-beige-brun-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-descente-yasmine-beige-brun-2.jpg' }
      ]
    },
    'kairouan-descente-yasmine-vert-olive': {
      name: 'Ensemble Descente de Lit « Yasmine Vert Olive » Kairouan Finesse Royale (3 Pièces)',
      price: 1950,
      description: "Un chef-d'œuvre d'artisanat inspiré par la nature et le prestige de Kairouan. Issu de la collection exclusive 2026, cet ensemble de 3 pièces sublime le motif traditionnel « Yasmine » dans une nuance vert olive apaisante et hautement élégante. Tissé à la main en pure laine avec une finesse extrême de 30x30 nœuds au décimètre carré (1er Choix), il associe la douceur d'un fond ivoire à la précision de rinceaux floraux et d'une bordure vert olive. Cet ensemble apporte une atmosphère rafraîchissante, un confort moelleux et une note de sérénité à votre espace nuit.",
      specs: [
        { label: 'Contenu du set', value: '1 tapis devant de lit + 2 descentes de lit assorties' },
        { label: 'Tapis devant de lit', value: '90 x 160 cm' },
        { label: 'Descentes de lit (x2)', value: '70 x 140 cm (chacune)' },
        { label: 'Densité', value: '30 x 30 Nœuds / dm² (Finesse Extrême Royale — 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Année de création', value: '2026 (Modèle exclusif)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-descente-yasmine-vert-olive-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-descente-yasmine-vert-olive-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-descente-yasmine-vert-olive-3.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-descente-yasmine-vert-olive-4.jpg' }
      ]
    },
    'kairouan-descente-oiseaux-paradis': {
      name: 'Ensemble Descente de Lit « Oiseaux du Paradis » Kairouan Finesse Royale (3 Pièces)',
      price: 2100,
      description: "Un joyau du patrimoine artisanal kairouanais qui insuffle poésie et élégance dans la chambre à coucher. Cet ensemble de 3 pièces met en valeur le motif emblématique « Oiseaux du Paradis » avec une précision d'exécution remarquable de 30x30 nœuds au décimètre carré (1er Choix). Tissé entièrement à la main en pure laine de qualité supérieure, il marie un fond bleuté apaisant à une frise géométrique riche en détails figuratifs (oiseaux, motifs floraux) aux tons ocre, ivoire et terre cuite. Cet ensemble offre une douceur veloutée au réveil et un prestige inégalé à votre espace nuit.",
      specs: [
        { label: 'Contenu du set', value: '1 tapis devant de lit + 2 descentes de lit assorties' },
        { label: 'Tapis devant de lit', value: '95 x 160 cm' },
        { label: 'Descentes de lit (x2)', value: '70 x 150 cm (chacune)' },
        { label: 'Densité', value: '30 x 30 Nœuds / dm² (Finesse Extrême Royale — 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-descente-oiseaux-paradis-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-descente-oiseaux-paradis-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-descente-oiseaux-paradis-3.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-descente-oiseaux-paradis-4.jpg' }
      ]
    },
    'kairouan-berbere-sidi-bou-said': {
      name: 'Tapis Berbère Kairouan « Sidi Bou Saïd » — Grand Salon',
      price: 1600,
      description: "Une création artisanale raffinée qui marie le savoir-faire berbère de Kairouan au charme méditerranéen de Sidi Bou Saïd. Issu de la collection 2026, ce grand tapis de salon se distingue par son design minimaliste et épuré. Tissé à la main en pure laine traditionnelle avec une densité de 20x20 nœuds au décimètre carré (1er Choix), il présente un vaste champ écru naturel d'une grande douceur, subtilement rehaussé de motifs géométriques berbères aux angles en tons bleu roi et azur. Ce tapis apporte clarté, sérénité et une chaleur incomparable à votre espace de vie.",
      specs: [
        { label: 'Dimensions', value: '170 x 240 cm' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine traditionnelle de Kairouan tissée à la main' },
        { label: 'Style', value: 'Berbère Contemporain / Inspiration Sidi Bou Saïd' },
        { label: 'Année de création', value: '2026 (Modèle exclusif)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'video', src: 'images/margoum/kairouan-berbere-sidi-bou-said.mp4', poster: 'images/margoum/kairouan-berbere-sidi-bou-said-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-berbere-sidi-bou-said-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-berbere-sidi-bou-said-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-berbere-sidi-bou-said-3.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-berbere-sidi-bou-said-4.jpg' }
      ]
    },
    'kairouan-berbere-ecru-naturel': {
      name: 'Tapis Berbère Kairouan Écru Naturel — Grand Salon',
      price: 1600,
      description: "L'essence même du luxe épuré et du confort artisanal. Issu de la collection 2026, ce grand tapis de salon met en valeur la beauté brute et authentique de la pure laine de Kairouan dans sa nuance écru naturel la plus noble. Tissé entièrement à la main avec une densité de 20x20 nœuds au décimètre carré (1er Choix), il offre une texture moelleuse, digne des plus beaux intérieurs. Sans aucun motif ni bordure, ce tapis apporte une luminosité exceptionnelle, une sensation d'espace et une sérénité intemporelle à votre salon.",
      specs: [
        { label: 'Dimensions', value: '170 x 240 cm' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine traditionnelle de Kairouan tissée à la main' },
        { label: 'Style', value: 'Berbère Minimaliste / Écru Naturel' },
        { label: 'Année de création', value: '2026 (Modèle exclusif)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-berbere-ecru-naturel-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-berbere-ecru-naturel-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-berbere-ecru-naturel-3.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-berbere-ecru-naturel-4.jpg' }
      ]
    },
    'kairouan-grand-yasmine-classique': {
      name: 'Grand Tapis de Salon Kairouan « Yasmine Classique » 1er Choix',
      price: 3900,
      description: "Un chef-d'œuvre monumental de l'artisanat kairouanais, conçu pour être la pièce maîtresse des salons de haut standing. Issu de la collection exclusive 2026, ce grand tapis de 6 m² décline le prestigieux motif « Yasmine » avec une finesse d'exécution extrême de 30x30 nœuds au décimètre carré (1er Choix). Tissé entièrement à la main en pure laine de qualité supérieure avec un poids généreux de 16 kg, il arbore une somptueuse bordure rose vieux rehaussée de nuances bleu ciel sur un champ central ivoire richement fleuri. Ce tapis d'art apporte une noblesse rare, un confort moelleux et une sérénité élégante à votre intérieur.",
      specs: [
        { label: 'Prix au m²', value: '650 TND / m²' },
        { label: 'Dimensions', value: '2,00 m x 3,00 m (Surface : 6 m²)' },
        { label: 'Poids', value: '16 kg (Densité et tenue d’exception)' },
        { label: 'Densité', value: '30 x 30 Nœuds / dm² (Finesse Extrême Royale — 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-grand-yasmine-classique-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-yasmine-classique-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-yasmine-classique-3.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-yasmine-classique-4.jpg' }
      ]
    },
    'kairouan-grand-yasmine-rose': {
      name: 'Grand Tapis de Salon Kairouan « Yasmine Rose » 1er Choix',
      price: 3900,
      description: "Un chef-d'œuvre monumental de l'artisanat kairouanais, conçu pour être la pièce maîtresse des salons de haut standing. Issu de la collection exclusive 2026, ce grand tapis de 6 m² décline le prestigieux motif « Yasmine » avec une finesse d'exécution extrême de 30x30 nœuds au décimètre carré (1er Choix). Tissé entièrement à la main en pure laine de qualité supérieure avec un poids généreux de 16 kg, il arbore une somptueuse bordure rose vieux rehaussée de nuances bleu ciel sur un champ central ivoire richement fleuri. Ce tapis d'art apporte une noblesse rare, un confort moelleux et une sérénité élégante à votre intérieur.",
      specs: [
        { label: 'Prix au m²', value: '650 TND / m²' },
        { label: 'Dimensions', value: '2,00 m x 3,00 m (Surface : 6 m²)' },
        { label: 'Poids', value: '16 kg (Densité et tenue d’exception)' },
        { label: 'Densité', value: '30 x 30 Nœuds / dm² (Finesse Extrême Royale — 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-grand-yasmine-rose-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-yasmine-rose-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-yasmine-rose-3.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-yasmine-rose-4.jpg' }
      ]
    },
    'kairouan-grand-arbre-de-vie': {
      name: 'Grand Tapis de Salon Kairouan « Arbre de Vie » 1er Choix',
      price: 4200,
      description: "Une œuvre d'art textile monumentale et majestueuse, directement inspirée du motif mythique de l'Arbre de Vie. Issu de la collection exclusive 2026, ce grand tapis de 6 m² incarne le sommet de l'artisanat kairouanais avec une finesse d'exécution extrême de 30x30 nœuds au décimètre carré (1er Choix). Tissé entièrement à la main en pure laine de qualité supérieure avec un poids généreux de 16 kg, il présente un médaillon central entouré de rinceaux végétaux complexes, associant un bleu nuit profond, un ocre miel chaleureux et des accents rose poudré sur fond ivoire. Ce tapis d'exception apporte une noblesse rare, un confort moelleux et un prestige inégalé à votre salon.",
      specs: [
        { label: 'Prix au m²', value: '700 TND / m²' },
        { label: 'Dimensions', value: '2,00 m x 3,00 m (Surface : 6 m²)' },
        { label: 'Poids', value: '16 kg (Densité et tenue d’exception)' },
        { label: 'Densité', value: '30 x 30 Nœuds / dm² (Finesse Extrême Royale — 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Année de création', value: '2026 (Modèle exclusif)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-grand-arbre-de-vie-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-arbre-de-vie-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-arbre-de-vie-3.jpg' }
      ]
    },
    'kairouan-oiseaux-paradis-soie-laine': {
      name: 'Tapis d’Art & de Collection « Oiseaux du Paradis » Soie & Laine (40x40 Nœuds)',
      price: 7200,
      description: "Une pièce d'art textile monumentale et d'une rareté absolue, conçue pour les connaisseurs et les intérieurs les plus prestigieux. Issu de la collection d'exception 2026, ce chef-d'œuvre de 6 m² associe la noblesse de la soie naturelle à la douceur de la pure laine, tissé avec une précision impériale inégalée de 40x40 nœuds au décimètre carré (160 000 nœuds/m² — 1er Choix). Il met en scène le motif emblématique « Oiseaux du Paradis » dans une palette féerique bordeaux-rosé, sublimée par des touches bleu nuit et ivoire doré. La soie apporte des reflets lumineux changeants et une douceur soyeuse incomparable au toucher.",
      specs: [
        { label: 'Prix au m²', value: '1 200 TND / m²' },
        { label: 'Dimensions', value: '2,00 m x 3,00 m (Surface : 6 m²)' },
        { label: 'Poids', value: '12 kg (Finesse extrême et densité d’artisanat d’art)' },
        { label: 'Densité', value: '40 x 40 Nœuds / dm² (Finesse Impériale Extrême — 160 000 nœuds/m²)' },
        { label: 'Composition', value: 'Mélange noble de Soie Naturelle & Pure Laine tissé à la main' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en soie et laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-oiseaux-paradis-soie-laine-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-oiseaux-paradis-soie-laine-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-oiseaux-paradis-soie-laine-3.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-oiseaux-paradis-soie-laine-4.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-oiseaux-paradis-soie-laine-5.jpg' }
      ]
    },
    'kairouan-grand-oiseaux-paradis-bleu-royal': {
      name: 'Grand Tapis de Salon Kairouan « Oiseaux du Paradis » Bleu Royal 1er Choix',
      price: 4500,
      description: "Une œuvre d'art textile d'une finesse remarquable, mettant en valeur le célèbre motif patrimonial « Oiseaux du Paradis ». Ce grand tapis de 6 m² est tissé entièrement à la main en pure laine de Kairouan de qualité supérieure avec une densité d'exécution de 30x30 nœuds au décimètre carré (1er Choix). Son champ d'un bleu royal majestueux est rythmé par des frises géométriques et des motifs d'oiseaux stylisés aux nuances ivoire, corail et ocre. Avec son poids généreux de 16 kg, il offre une excellente tenue au sol, un confort moelleux et un prestige incomparable à votre salon.",
      specs: [
        { label: 'Prix au m²', value: '750 TND / m²' },
        { label: 'Dimensions', value: '2,00 m x 3,00 m (Surface : 6 m²)' },
        { label: 'Poids', value: '16 kg (Densité et tenue d’exception)' },
        { label: 'Densité', value: '30 x 30 Nœuds / dm² (Finesse Royale — 90 000 nœuds/m² — 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-grand-oiseaux-paradis-bleu-royal-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-oiseaux-paradis-bleu-royal-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-oiseaux-paradis-bleu-royal-3.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-oiseaux-paradis-bleu-royal-4.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-oiseaux-paradis-bleu-royal-5.jpg' }
      ]
    },
    'kairouan-grand-yasmine-bleu-mer': {
      name: 'Grand Tapis de Salon Kairouan « Yasmine Bleu » 1er Choix',
      price: 3600,
      description: "Une magnifique pièce d'artisanat kairouanais qui sublime le motif emblématique « Yasmine ». Issu de la collection 2026, ce grand tapis de 6 m² est tissé entièrement à la main en pure laine traditionnelle de qualité supérieure (1er Choix, 20x20 nœuds/dm²). Son fond d'un bleu mer profond met en valeur un maillage végétal ivoire d'une grande élégance. Avec son poids généreux de 18 kg, il offre une densité remarquable, un confort moelleux au pied et une excellente tenue au sol pour votre salon.",
      specs: [
        { label: 'Prix au m²', value: '600 TND / m²' },
        { label: 'Dimensions', value: '2,00 m x 3,00 m (Surface : 6 m²)' },
        { label: 'Poids', value: '18 kg (Densité et épaisseur d’exception)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Année de création', value: '2026 (Modèle exclusif)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-grand-yasmine-bleu-mer-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-yasmine-bleu-mer-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-yasmine-bleu-mer-3.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-yasmine-bleu-mer-4.jpg' }
      ]
    },
    'kairouan-yasmine-bleu-ciel-marine': {
      name: 'Tapis de Salon Kairouan « Yasmine Bleu Ciel & Marine » 1er Choix',
      price: 2400,
      description: "Une magnifique pièce d'artisanat kairouanais qui insuffle fraîcheur et élégance dans votre intérieur. Issu de la collection 2026, ce tapis de salon met en valeur le motif floral « Yasmine » sur un fond bleu ciel lumineux, entrelacé de maillages ivoire et de détails bleu marine profond. Tissé entièrement à la main en pure laine traditionnelle de qualité supérieure (1er Choix, 20x20 nœuds/dm²), il affiche un poids généreux de 12,8 kg qui lui confère une excellente tenue au sol et une douceur veloutée incomparable.",
      specs: [
        { label: 'Dimensions', value: '165 x 250 cm (Surface : 4,12 m²)' },
        { label: 'Poids', value: '12,8 kg (Densité et confort remarquables)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Couleurs', value: 'Bleu ciel, noir et bleu marine' },
        { label: 'Année de création', value: '2026 (Modèle exclusif)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-yasmine-bleu-ciel-marine-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-bleu-ciel-marine-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-bleu-ciel-marine-3.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-bleu-ciel-marine-4.jpg' }
      ]
    },
    'kairouan-yasmine-sidi-bou-said-sans-bordure': {
      name: 'Tapis de Salon Kairouan « Yasmine Sidi Bou Saïd » Sans Bordure — 1er Choix',
      price: 2700,
      description: "Une création inédite et moderne issue de la collection 2026, revisitant le motif patrimonial « Yasmine » dans l'esprit méditerranéen de Sidi Bou Saïd. La grande originalité de ce tapis réside dans son design Sans Bordure, offrant une continuité visuelle élégante où le maillage floral bleu ciel et bleu nuit s'épanouit librement sur un fond ivoire lumineux. Tissé entièrement à la main en pure laine traditionnelle de qualité supérieure (1er Choix, 20x20 nœuds/dm²), il apporte une touche contemporaine, de la clarté et une sérénité raffinée à votre espace de vie.",
      specs: [
        { label: 'Prix au m²', value: '600 TND / m²' },
        { label: 'Format Medium', value: '176 x 256 cm — Poids 13 kg — 2 700 TND' },
        { label: 'Grand Format', value: '200 x 300 cm — 3 900 TND' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Couleurs', value: 'Ivoire, bleu ciel et bleu nuit (Style Sidi Bou Saïd)' },
        { label: 'Année de création', value: '2026 (Modèle exclusif)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-yasmine-sidi-bou-said-sans-bordure-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-sidi-bou-said-sans-bordure-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-sidi-bou-said-sans-bordure-3.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-yasmine-sidi-bou-said-sans-bordure-4.jpg' }
      ]
    },
    'kairouan-grand-makroudha-sidi-bou-said': {
      name: 'Grand Tapis de Salon Kairouan « Makroudha Sidi Bou Saïd » 1er Choix',
      price: 2700,
      description: "Une pièce maîtresse de l'artisanat kairouanais qui célèbre le motif géométrique emblématique « Makroudha » dans le style méditerranéen de Sidi Bou Saïd. Issu de la collection 2026, ce grand tapis de 6 m² est tissé entièrement à la main en pure laine traditionnelle (1er Choix, 20x20 nœuds/dm²). Son réseau de losanges bleu nuit sur fond ivoire apporte un rythme visuel captivant et une élégance intemporelle. Avec son poids remarquable de 20 kg, il offre une tenue parfaite au sol, un confort extrêmement moelleux et un cachet authentique à votre salon.",
      specs: [
        { label: 'Prix au m²', value: '450 TND / m²' },
        { label: 'Dimensions', value: '2,00 m x 3,00 m (Surface : 6 m²)' },
        { label: 'Poids', value: '20 kg (Densité et épaisseur d’exception)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Couleurs', value: 'Bleu nuit et blanc (Style Sidi Bou Saïd)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-grand-makroudha-sidi-bou-said-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-makroudha-sidi-bou-said-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-makroudha-sidi-bou-said-3.jpg' }
      ]
    },
    'kairouan-grand-zarbia-sidi-bou-said': {
      name: 'Grand Tapis de Salon Kairouan « Zarbia Royale Sidi Bou Saïd »',
      price: 2700,
      description: "Une interprétation majestueuse du tapis kairouanais classique (Zarbiyya) issu de la collection 2026. Ce grand tapis de 6 m² arbore un champ central ivoire orné de motifs géométriques et floraux symétriques, entouré d'une large bordure à losanges aux nuances captivantes de bleu nuit, bleu ciel et de subtiles touches violacées. Tissé entièrement à la main en pure laine traditionnelle (1er Choix, 20x20 nœuds/dm²), il affiche un poids remarquable de 20 kg. Cette pièce d'exception apporte structure, prestige et un confort douillet à votre salon.",
      specs: [
        { label: 'Prix au m²', value: '450 TND / m²' },
        { label: 'Dimensions', value: '2,00 m x 3,00 m (Surface : 6 m²)' },
        { label: 'Poids', value: '20 kg (Haute densité et excellente tenue au sol)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Couleurs', value: 'Bleu mer, bleu ciel, touches de violet et fond ivoire' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-grand-zarbia-sidi-bou-said-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-zarbia-sidi-bou-said-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-zarbia-sidi-bou-said-3.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-zarbia-sidi-bou-said-4.jpg' }
      ]
    },
    'kairouan-grand-makroudha-geante-sidi-bou-said': {
      name: 'Grand Tapis de Salon Kairouan « Grande Makroudha Sidi Bou Saïd »',
      price: 2700,
      description: "Une interprétation spectaculaire et majestueuse du tapis kairouanais traditionnel issue de la collection 2026. Ce grand tapis de 6 m² met en scène un imposant losange central ivoire (Grande Makroudha) aux bordures escalonnées, agrémenté d'un médaillon floral raffiné sur un fond bleu nuit d'une grande profondeur. Une large bordure ornée d'étoiles et de motifs géométriques vient encadrer cette pièce maîtresse. Tissé entièrement à la main en pure laine (1er Choix, 20x20 nœuds/dm²), son poids exceptionnel de 20 kg garantit une tenue irréprochable au sol et un confort haut de gamme pour votre salon.",
      specs: [
        { label: 'Prix au m²', value: '450 TND / m²' },
        { label: 'Dimensions', value: '2,00 m x 3,00 m (Surface : 6 m²)' },
        { label: 'Poids', value: '20 kg (Haute densité, épaisseur et confort d’exception)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Couleurs', value: 'Bleu nuit, ivoire et détails noir/bleu' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-grand-makroudha-geante-sidi-bou-said-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-makroudha-geante-sidi-bou-said-2.jpg' }
      ]
    },
    'kairouan-grand-cinq-etoiles-sidi-bou-said': {
      name: 'Grand Tapis de Salon Kairouan « Cinq Étoiles Sidi Bou Saïd »',
      price: 2700,
      description: "Une composition spectaculaire et emblématique de l'artisanat kairouanais. Ce grand tapis de 6 m² se distingue par son motif majestueux aux 5 médaillons (« Cinq Étoiles ») finement ouvragés, disposés en harmonie sur un champ central ivoire. Le cadre structuré en escalier (Mahrab) et la large bordure ornée d'étoiles traditionnelles en bleu nuit apportent un relief visuel saisissant. Tissé entièrement à la main en pure laine (1er Choix, 20x20 nœuds/dm²), son poids exceptionnel de 20 kg offre une tenue au sol irréprochable et un confort haut de gamme pour votre salon.",
      specs: [
        { label: 'Prix au m²', value: '450 TND / m²' },
        { label: 'Dimensions', value: '2,00 m x 3,00 m (Surface : 6 m²)' },
        { label: 'Poids', value: '20 kg (Haute densité, épaisseur et confort d’exception)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Couleurs', value: 'Bleu nuit, ivoire et détails bleu ciel' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-grand-cinq-etoiles-sidi-bou-said-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-cinq-etoiles-sidi-bou-said-2.jpg' }
      ]
    },
    'kairouan-grand-zarbia-vieux-rose-bleu': {
      name: 'Grand Tapis de Salon Kairouan « Zarbia Royale Vieux Rose & Bleu »',
      price: 2700,
      description: "Une interprétation raffinée et chaleureuse du tapis kairouanais classique (Zarbiyya) issue de la collection 2026. Ce grand tapis de 6 m² met en valeur un champ central ivoire orné d'un médaillon floral délicat, encadré par un motif en escalier et de larges bordures aux nuances élégantes de bleu pétrole, de vieux rose et de terre cuite. Tissé entièrement à la main en pure laine traditionnelle de Kairouan (1er Choix, 20x20 nœuds/dm²), son poids exceptionnel de 20 kg garantit une tenue parfaite au sol, une excellente isolation et un prestige incontestable pour votre salon.",
      specs: [
        { label: 'Prix au m²', value: '450 TND / m²' },
        { label: 'Dimensions', value: '2,00 m x 3,00 m (Surface : 6 m²)' },
        { label: 'Poids', value: '20 kg (Haute densité, épaisseur et confort d’exception)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine traditionnelle de Kairouan tissée à la main' },
        { label: 'Couleurs', value: 'Bleu pétrole, vieux rose, terracotta et fond ivoire' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-grand-zarbia-vieux-rose-bleu-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-zarbia-vieux-rose-bleu-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-zarbia-vieux-rose-bleu-3.jpg' }
      ]
    },
    'kairouan-grand-trone-royal-bleu-or': {
      name: 'Grand Tapis de Salon Kairouan « Trône Royal Bleu & Or » 1er Choix',
      price: 3600,
      description: "Une œuvre d'art textile d'un prestige absolu issue de la collection exclusive 2026. Ce grand tapis de 6 m² arbore un champ central bleu saphir d'une grande profondeur, orné de deux médaillons centraux et de motifs géométriques finement ciselés en jaune or. Il est sublimé par une succession de bordures royales aux nuances d'ocre, de terracotta et de bleu nuit. Tissé entièrement à la main en pure laine de Kairouan d'une finesse exceptionnelle de 30x30 nœuds au décimètre carré (90 000 nœuds/m² — 1er Choix), il offre un velouté incomparable et une élégance aristocratique à votre salon.",
      specs: [
        { label: 'Prix au m²', value: '600 TND / m²' },
        { label: 'Dimensions', value: '2,00 m x 3,00 m (Surface : 6 m²)' },
        { label: 'Poids', value: '16 kg (Haute densité d’exécution et finesse)' },
        { label: 'Densité', value: '30 x 30 Nœuds / dm² (Finesse Royale — 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Couleurs', value: 'Bleu royal, jaune or, terracotta et bleu nuit' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-grand-trone-royal-bleu-or-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-trone-royal-bleu-or-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-trone-royal-bleu-or-3.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-trone-royal-bleu-or-4.jpg' }
      ]
    },
    'kairouan-grand-mosaique': {
      name: 'Grand Tapis de Salon Kairouan « Mosaïque » — Pièce Unique',
      price: 2700,
      description: "Une pièce maîtresse exclusive et inédite (Pièce Unique) issue de la collection 2026, s'inspirant de la richesse des mosaïques méditerranéennes. Ce grand tapis de 6 m² présente un champ central ivoire rythmé par un médaillon géométrique et floral, bordé d'une succession de frises aux teintes harmonieuses d'ocre moutarde, de vert olive, de bleu ciel et de violet. Tissé entièrement à la main en pure laine traditionnelle de Kairouan (1er Choix, 20x20 nœuds/dm²), son poids exceptionnel de 20 kg garantit un confort douillet, une parfaite tenue au sol et un cachet artistique inégalé à votre intérieur.",
      specs: [
        { label: 'Prix au m²', value: '450 TND / m²' },
        { label: 'Dimensions', value: '2,00 m x 3,00 m (Surface : 6 m²)' },
        { label: 'Poids', value: '20 kg (Haute densité, épaisseur et confort d’exception)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de Kairouan tissée à la main' },
        { label: 'Couleurs', value: 'Moutarde, vert olive, bleu ciel, violet et fond ivoire' },
        { label: 'Exclusivité', value: 'Pièce unique' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-grand-mosaique-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-mosaique-2.jpg' }
      ]
    },
    'kairouan-grand-losanges-vert-olive': {
      name: 'Grand Tapis de Salon Kairouan « Losanges Vert Olive » 1er Choix',
      price: 2700,
      description: "Une création géométrique d'une grande élégance issue de la collection 2026, alliant authenticité kairouanaise et esprit contemporain. Ce grand tapis de 6 m² présente un réseau fluide de losanges vert olive sur un fond ivoire lumineux, centré de symboles berbères finement tissés en bleu nuit. Tissé entièrement à la main en pure laine de qualité supérieure (1er Choix, 20x20 nœuds/dm²), son poids de 20 kg garantit une tenue parfaite au sol et apporte une touche sereine, naturelle et raffinée à votre salon.",
      specs: [
        { label: 'Prix au m²', value: '450 TND / m²' },
        { label: 'Dimensions', value: '2,00 m x 3,00 m (Surface : 6 m²)' },
        { label: 'Poids', value: '20 kg (Haute densité, épaisseur et confort d’exception)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine de qualité supérieure tissée à la main' },
        { label: 'Couleurs', value: 'Vert olive, ivoire et motifs bleu nuit' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-grand-losanges-vert-olive-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-losanges-vert-olive-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-losanges-vert-olive-3.jpg' }
      ]
    },
    'kairouan-grand-allousha-traditionnel': {
      name: 'Grand Tapis de Salon Kairouan « Allousha Traditionnel »',
      price: 3300,
      description: "Le joyau incontestable de l'artisanat kairouanais dans sa version la plus noble issue de la collection 2026. Ce grand tapis de 6 m² met à l'honneur le célèbre style « Allousha », caractérisé par l'utilisation exclusive des teintes naturelles de la laine de mouton. Il présente un champ central ivoire orné de médaillons géométriques et floraux, encadré par des frises successives aux nuances miel, ocre et brun foncé. Tissé entièrement à la main en pure laine d'exception (1er Choix, 20x20 nœuds/dm²), son poids de 20 kg garantit une présence majestueuse, une excellente tenue au sol et une authenticité inégalée pour votre intérieur.",
      specs: [
        { label: 'Prix au m²', value: '550 TND / m²' },
        { label: 'Dimensions', value: '2,00 m x 3,00 m (Surface : 6 m²)' },
        { label: 'Poids', value: '20 kg (Haute densité, épaisseur et confort d’exception)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine naturelle d’Allousha tissée à la main' },
        { label: 'Couleurs', value: 'Miel, ocre, brun foncé et fond ivoire (couleurs naturelles de laine)' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-grand-allousha-traditionnel-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-allousha-traditionnel-2.jpg' }
      ]
    },
    'kairouan-grand-allousha-acajou-miel': {
      name: 'Grand Tapis de Salon Kairouan « Allousha Teinte Acajou & Miel » 1er Choix',
      price: 3300,
      description: "L'excellence du tapis kairouanais « Allousha » sublimée par une palette de teintes chaudes et enveloppantes issue de la collection 2026. Ce grand tapis de 6 m² arbore un champ central couleur ocre acajou rehaussé de médaillons floraux complexes en chocolat foncé et blanc ivoire. Son cadre structuré en escalier (Mahrab) et ses bordures très élaborées apportent une profondeur visuelle remarquable. Tissé entièrement à la main en pure laine d'Allousha d'exception (1er Choix, 20x20 nœuds/dm²), son poids de 20 kg garantit une tenue irréprochable au sol et une ambiance chaleureuse et raffinée.",
      specs: [
        { label: 'Prix au m²', value: '550 TND / m²' },
        { label: 'Dimensions', value: '2,00 m x 3,00 m (Surface : 6 m²)' },
        { label: 'Poids', value: '20 kg (Haute densité, épaisseur et confort d’exception)' },
        { label: 'Densité', value: '20 x 20 Nœuds / dm² (Qualité Supérieure 1er Choix)' },
        { label: 'Composition', value: '100% Pure laine naturelle d’Allousha tissée à la main' },
        { label: 'Couleurs', value: 'Ocre acajou, miel, chocolat foncé et détails ivoire' },
        { label: 'Entretien', value: 'Nettoyage à sec spécialisé pour tapis d’art en laine' }
      ],
      media: [
        { type: 'image', src: 'images/margoum/kairouan-grand-allousha-acajou-miel-1.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-allousha-acajou-miel-2.jpg' },
        { type: 'image', src: 'images/margoum/kairouan-grand-allousha-acajou-miel-3.jpg' }
      ]
    },
    'lanterne-suspendue-fer-forge': {
      name: 'Lanterne de Table Suspendue en Fer Forgé Artisanal',
      price: 490,
      description: "Une pièce d'éclairage d'exception alliant la noblesse du fer forgé travaillé à la main et l'élégance des lignes orientales. Cette lanterne suspendue se distingue par son support en arc de cercle harmonieux fixé sur une base carrée robuste. Le petit fanal suspendu, doté de parois en verre et de détails finement ajourés, accueille une bougie pour diffuser une lumière douce, tamisée et chaleureuse. Un élément décoratif raffiné qui sublime vos consoles, tables de salon, ou coins de lecture.",
      specs: [
        { label: 'Matière', value: 'Fer forgé artisanal robuste et verre transparent' },
        { label: 'Finition', value: 'Noir mat patiné' },
        { label: 'Usage', value: 'Éclairage d’ambiance pour bougie traditionnelle ou LED' },
        { label: 'Style', value: 'Rustique chic / Orientale raffiné' },
        { label: 'Année de création', value: '2026 (Collection exclusive)' },
        { label: 'Conseil déco', value: 'Idéal sur une console en bois massif, un buffet ou une table basse de salon' }
      ],
      media: [
        { type: 'image', src: 'images/deco-fer-forge/lanterne-suspendue-fer-forge-1.jpg' },
        { type: 'image', src: 'images/deco-fer-forge/lanterne-suspendue-fer-forge-2.jpg' }
      ]
    },
    'lanterne-nuit-etoilee-fer-forge': {
      name: 'Lanterne Artisanale « Nuit Étoilée » en Fer Forgé',
      price: 390,
      description: "Une lanterne d'ambiance féerique issue de la collection 2026, façonnée à la main en fer forgé. Son corps carré surmonté d'un toit pyramidal est finement perforé de motifs de croissants de lune et d'étoiles. Une fois la bougie allumée, elle projette un magnifique jeu d'ombres et de lumières orientales sur vos murs et meubles. Idéale pour créer une atmosphère chaleureuse, paisible et spirituelle dans votre salon, entrée ou coin lecture.",
      specs: [
        { label: 'Matière', value: 'Fer forgé artisanal robuste travaillé à la main' },
        { label: 'Finition', value: 'Noir mat patiné' },
        { label: 'Motifs', value: 'Découpes ajourées en forme d’étoiles et croissants de lune' },
        { label: 'Usage', value: 'Éclairage d’ambiance pour bougie traditionnelle ou LED' },
        { label: 'Style', value: 'Orientale chic / Rustique raffiné' },
        { label: 'Année de création', value: '2026 (Collection exclusive)' },
        { label: 'Conseil déco', value: 'À poser sur une table basse en bois, un buffet ou une console pour un effet chaleureux garanti' }
      ],
      media: [
        { type: 'image', src: 'images/deco-fer-forge/lanterne-nuit-etoilee-fer-forge-1.jpg' },
        { type: 'image', src: 'images/deco-fer-forge/lanterne-nuit-etoilee-fer-forge-2.jpg' }
      ]
    },
    'applique-murale-andalou-fer-forge': {
      name: 'Applique Murale Style Andalou en Fer Forgé',
      price: 350,
      description: "Une magnifique applique murale d'inspiration architecturale tunisienne issue de la collection 2026. Fabriquée en fer forgé noir mat, elle arbore de superbes volutes métalliques façonnées à la main. Ses parois en verre dépoli diffusent une lumière douce, chaleureuse et sans éblouissement. Parfaite pour sublimer un mur en pierre, un patio, un couloir ou une entrée élégante.",
      specs: [
        { label: 'Matière', value: 'Fer forgé artisanal et verre dépoli opaque' },
        { label: 'Finition', value: 'Noir mat avec traitement anti-corrosion' },
        { label: 'Fixation', value: 'Applique murale pour éclairage intérieur ou extérieur couvert' },
        { label: 'Style', value: 'Néoclassique / Orientale raffiné / Néo-tunisien' },
        { label: 'Année de création', value: '2026 (Collection exclusive)' },
        { label: 'Conseil déco', value: 'Sublimera vos murs en pierre naturelle, arches et vérandas' }
      ],
      media: [
        { type: 'image', src: 'images/deco-fer-forge/applique-murale-andalou-fer-forge-1.jpg' },
        { type: 'image', src: 'images/deco-fer-forge/applique-murale-andalou-fer-forge-2.jpg' }
      ]
    }
  };

  const quickviewOverlay = document.getElementById('quickviewOverlay');
  const quickviewModal = document.getElementById('quickviewModal');
  const quickviewClose = document.getElementById('quickviewClose');
  const quickviewGalleryMain = document.getElementById('quickviewGalleryMain');
  const quickviewGalleryThumbs = document.getElementById('quickviewGalleryThumbs');
  const quickviewTitle = document.getElementById('quickviewTitle');
  const quickviewPrice = document.getElementById('quickviewPrice');
  const quickviewDesc = document.getElementById('quickviewDesc');
  const quickviewSpecs = document.getElementById('quickviewSpecs');
  const quickviewOrderBtn = document.getElementById('quickviewOrderBtn');
  const quickviewWhatsBtn = document.getElementById('quickviewWhatsBtn');

  function renderQuickviewMedia(item) {
    quickviewGalleryMain.innerHTML = item.type === 'video'
      ? `<video src="${item.src}" poster="${item.poster || ''}" autoplay muted loop playsinline></video>`
      : `<img src="${item.src}" alt="">`;
  }

  function openQuickview(id) {
    const product = PRODUCT_DETAILS[id];
    if (!product || !quickviewModal) return;

    quickviewTitle.textContent = product.name;
    quickviewPrice.textContent = formatPrice(product.price);
    quickviewDesc.textContent = product.description;
    quickviewSpecs.innerHTML = product.specs.map(s => `<li><strong>${s.label}</strong><span>${s.value}</span></li>`).join('');

    renderQuickviewMedia(product.media[0]);
    quickviewGalleryThumbs.innerHTML = product.media.map((m, i) => `
      <button type="button" data-index="${i}" class="${i === 0 ? 'active' : ''}">
        ${m.type === 'video' ? `<video src="${m.src}" muted playsinline></video>` : `<img src="${m.src}" alt="">`}
      </button>
    `).join('');
    quickviewGalleryThumbs.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        renderQuickviewMedia(product.media[+btn.dataset.index]);
        quickviewGalleryThumbs.querySelectorAll('button').forEach(b => b.classList.toggle('active', b === btn));
      });
    });

    const cardImg = product.media[0].poster || (product.media.find(m => m.type === 'image') || {}).src;
    quickviewOrderBtn.onclick = () => addToCart({ id, name: product.name, img: cardImg, price: product.price });
    quickviewWhatsBtn.href = buildWhatsAppLink(`Bonjour, je suis intéressé par : ${product.name}`);

    quickviewModal.classList.add('open');
    quickviewOverlay.classList.add('open');
  }

  function closeQuickview() {
    if (!quickviewModal) return;
    quickviewModal.classList.remove('open');
    quickviewOverlay.classList.remove('open');
    quickviewGalleryMain.querySelectorAll('video').forEach(v => v.pause());
  }

  document.querySelectorAll('[data-quickview]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openQuickview(trigger.dataset.quickview);
    });
  });

  // Hover preview: swap in a second product photo on card hover, when one exists
  document.querySelectorAll('.tapis-card-media[data-quickview]').forEach(media => {
    const product = PRODUCT_DETAILS[media.dataset.quickview];
    if (!product || !product.media || product.media.length < 2) return;
    const primary = product.media[0];
    const posterSrc = primary.poster || primary.src;
    const alt = product.media.find(m => m.type === 'image' && m.src !== posterSrc && m.src !== primary.src);
    if (!alt) return;
    const img = document.createElement('img');
    img.className = 'tapis-card-media-alt';
    img.src = alt.src;
    img.alt = '';
    img.loading = 'lazy';
    media.appendChild(img);
  });
  if (quickviewClose) quickviewClose.addEventListener('click', closeQuickview);
  if (quickviewOverlay) quickviewOverlay.addEventListener('click', closeQuickview);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeQuickview(); });

  function buildOrderSummary(items) {
    const lines = items.map(i => {
      const priceText = i.price != null ? `${i.price * i.qty} TND` : 'Prix sur demande';
      return `• ${i.name} x${i.qty} — ${priceText}`;
    });
    return `Bonjour, je souhaite commander :\n${lines.join('\n')}`;
  }

  if (cartCheckoutEl) {
    cartCheckoutEl.addEventListener('click', (e) => {
      const items = getCart();
      if (!items.length) return; // empty cart: let the default href (#contact) behave normally
      e.preventDefault();
      window.open(buildWhatsAppLink(buildOrderSummary(items)), '_blank', 'noopener');
    });
  }

  renderCart();
  refreshDisplayedPrices();

  // ---------- Auto-play video (play/pause + mute, autoplay-on-scroll-into-view) ----------
  function setupAutoVideo({ videoId, bgId, playBtnId, muteBtnId, muteOnId, muteOffId }) {
    const video = document.getElementById(videoId);
    const frame = video ? video.closest('.video-frame') : null;
    if (!video || !frame) return null;
    const bg = bgId ? document.getElementById(bgId) : null;
    const playBtn = playBtnId ? document.getElementById(playBtnId) : null;
    const muteBtn = muteBtnId ? document.getElementById(muteBtnId) : null;
    const muteOn = muteOnId ? document.getElementById(muteOnId) : null;
    const muteOff = muteOffId ? document.getElementById(muteOffId) : null;

    const syncBg = () => {
      if (!bg) return;
      if (video.paused) bg.pause(); else bg.play().catch(() => {});
    };
    const togglePlay = () => { if (video.paused) video.play(); else video.pause(); };
    video.addEventListener('play', () => { frame.classList.add('playing'); syncBg(); });
    video.addEventListener('pause', () => { frame.classList.remove('playing'); syncBg(); });
    if (playBtn) playBtn.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);

    // Auto-play as soon as the video scrolls into view, and pause again once it scrolls back out.
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      });
    }, { threshold: 0.4 });
    videoObserver.observe(frame);

    if (muteBtn) {
      muteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        video.muted = !video.muted;
        if (muteOn) muteOn.hidden = video.muted;
        if (muteOff) muteOff.hidden = !video.muted;
      });
    }
    return { video, muteOn, muteOff };
  }

  const autoVideos = [
    setupAutoVideo({ videoId: 'reassuranceVideo', playBtnId: 'reassurancePlayBtn', muteBtnId: 'reassuranceMuteBtn', muteOnId: 'reassuranceMuteIconOn', muteOffId: 'reassuranceMuteIconOff' })
  ].filter(Boolean);

  // Browsers only allow audible autoplay after the visitor has interacted with the page at
  // least once. So: start muted (always allowed), and the moment the visitor clicks/taps/
  // presses a key anywhere on the site for the first time, unmute every auto-video — from
  // then on they play with sound automatically whenever they scroll into view.
  if (autoVideos.length) {
    const unmuteOnFirstInteraction = () => {
      autoVideos.forEach(({ video, muteOn, muteOff }) => {
        video.muted = false;
        if (muteOn) muteOn.hidden = true;
        if (muteOff) muteOff.hidden = false;
      });
    };
    ['click', 'touchstart', 'keydown'].forEach(evt => {
      document.addEventListener(evt, unmuteOnFirstInteraction, { once: true, passive: true });
    });
  }

  // ---------- Newsletter form (redirects to WhatsApp — no email backend on this site) ----------
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterStatus = document.getElementById('newsletterStatus');
  if (newsletterForm) newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    window.open(buildWhatsAppLink(`Bonjour, je souhaite être informé(e) des nouveautés Margoum Tunisia. Mon email : ${email}`), '_blank', 'noopener');
    newsletterStatus.textContent = 'Redirection vers WhatsApp…';
    newsletterForm.reset();
  });

  // ---------- Contact form (redirects to WhatsApp — no email backend on this site) ----------
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form) form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const piece = form.querySelector('#piece').value;
    const message = form.querySelector('#message').value;
    const text = `Bonjour, je souhaite une pièce sur-mesure.\nNom : ${name}\nEmail : ${email}\nPièce souhaitée : ${piece || 'non précisé'}\nMessage : ${message}`;
    window.open(buildWhatsAppLink(text), '_blank', 'noopener');
    status.textContent = 'Redirection vers WhatsApp…';
    form.reset();
  });

  // ---------- Search (lightweight, hardcoded dataset — no product database to query) ----------
  // NB: keep this list in sync by hand whenever a new named category/product is added.
  const SEARCH_DATA = [
    { label: 'Mobilier & Assises', url: 'index.html#collection' },
    { label: 'Fauteuils', url: 'catalogue-fauteuils.html' },
    { label: 'Chaises en Margoum', url: 'catalogue-chaises.html' },
    { label: 'Chaises Rondes', url: 'catalogue-chaises-rondes.html' },
    { label: 'Poufs & Méridiennes', url: 'catalogue-poufs.html' },
    { label: 'Tables & Accessoires', url: 'catalogue-tables-accessoires.html' },
    { label: 'Salon en Margoum', url: 'catalogue-salon-exterieur.html' },
    { label: 'Tapis & Margoum', url: 'index.html#tapis' },
    { label: 'Margoum de Kairouan', url: 'catalogue-tapis.html' },
    { label: 'Margoum de Oudhref', url: 'catalogue-tapis.html' },
    { label: 'Margoum de Gafsa', url: 'catalogue-tapis.html' },
    { label: 'Zarbia de Kairouan', url: 'catalogue-tapis.html' },
    { label: 'Kilim traditionnel du Sud', url: 'catalogue-tapis.html' },
    { label: 'Déco & Couteaux', url: 'catalogue-deco-couteaux.html' },
    { label: 'Couteaux artisanaux', url: 'catalogue-deco-couteaux.html' },
    { label: 'Coussins', url: 'catalogue-deco-couteaux.html' },
    { label: 'Nos réalisations', url: 'index.html#realisations' },
    { label: 'Savoir-faire', url: 'index.html#reassurance' },
    { label: 'Sur-mesure', url: 'index.html#sur-mesure' },
    { label: 'Contact', url: 'index.html#contact' }
  ];

  const headerSearch = document.getElementById('headerSearch');
  const searchToggle = document.getElementById('searchToggle');
  const searchInput = document.getElementById('searchInput');
  const searchResultsEl = document.getElementById('searchResults');

  if (headerSearch && searchToggle && searchInput && searchResultsEl) {
    const renderSearchResults = (query) => {
      const q = query.trim().toLowerCase();
      searchResultsEl.innerHTML = '';
      if (!q) return;
      const matches = SEARCH_DATA.filter(item => item.label.toLowerCase().includes(q)).slice(0, 6);
      if (!matches.length) {
        const p = document.createElement('p');
        p.className = 'search-empty';
        p.textContent = `Aucun résultat pour « ${query.trim()} ».`;
        searchResultsEl.appendChild(p);
        return;
      }
      matches.forEach(item => {
        const a = document.createElement('a');
        a.href = item.url;
        a.textContent = item.label;
        searchResultsEl.appendChild(a);
      });
    };
    const closeSearch = () => {
      headerSearch.classList.remove('open');
      searchInput.value = '';
      renderSearchResults('');
    };
    searchToggle.addEventListener('click', () => {
      if (headerSearch.classList.contains('open') || headerSearch.classList.contains('always-open')) {
        if (searchInput.value) { const first = searchResultsEl.querySelector('a'); if (first) window.location.href = first.getAttribute('href'); }
        else searchInput.focus();
      } else {
        headerSearch.classList.add('open');
        setTimeout(() => searchInput.focus(), 200);
      }
    });
    searchInput.addEventListener('input', () => renderSearchResults(searchInput.value));
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const first = searchResultsEl.querySelector('a');
        if (first) window.location.href = first.getAttribute('href');
      } else if (e.key === 'Escape') {
        closeSearch();
        searchInput.blur();
      }
    });
    document.addEventListener('click', (e) => {
      if (!headerSearch.contains(e.target) && !headerSearch.classList.contains('always-open')) closeSearch();
    });
  }

  // ---------- Avis clients pagination ----------
  const reviewPages = document.querySelectorAll('.reviews-page');
  const reviewDots = document.querySelectorAll('.reviews-dot');
  reviewDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const target = dot.dataset.page;
      reviewPages.forEach(p => p.classList.toggle('active', p.dataset.page === target));
      reviewDots.forEach(d => d.classList.toggle('active', d === dot));
    });
  });

  // ---------- Catalogue page: sort products ----------
  const catSort = document.getElementById('catSort');
  const catGrid = document.getElementById('catGrid');
  if (catSort && catGrid) {
    const originalOrder = [...catGrid.children];
    catSort.addEventListener('change', () => {
      const val = catSort.value;
      let items;
      if (val === 'az') items = [...catGrid.children].sort((a, b) => a.dataset.name.localeCompare(b.dataset.name, 'fr'));
      else if (val === 'za') items = [...catGrid.children].sort((a, b) => b.dataset.name.localeCompare(a.dataset.name, 'fr'));
      else items = originalOrder;
      items.forEach(el => catGrid.appendChild(el));
    });
  }

  // ---------- Catalogue page: filter products by sub-category (sidebar + toolbar chips, kept in sync) ----------
  const catFilterNavs = document.querySelectorAll('.cat-filter-nav');
  const catCountEl = document.querySelector('.cat-count');
  if (catFilterNavs.length && catGrid) {
    const applyCatFilter = (filter) => {
      let visible = 0;
      [...catGrid.children].forEach(card => {
        const show = filter === 'all' || card.dataset.filterCat === filter;
        card.style.display = show ? '' : 'none';
        if (show) { visible++; card.classList.add('aos-animate'); }
      });
      if (catCountEl) catCountEl.textContent = visible === 0 ? t().comingSoon : `${visible} ${visible > 1 ? t().pieces : t().piece}`;
      const catGridEmpty = document.getElementById('catGridEmpty');
      if (catGridEmpty) catGridEmpty.hidden = visible !== 0;
      catFilterNavs.forEach(nav => {
        nav.querySelectorAll('a[data-filter]').forEach(a => a.classList.toggle('active', a.dataset.filter === filter));
      });
    };
    catFilterNavs.forEach(nav => {
      nav.addEventListener('click', (e) => {
        const link = e.target.closest('a[data-filter]');
        if (!link) return;
        e.preventDefault();
        applyCatFilter(link.dataset.filter);
      });
    });
  }

});
