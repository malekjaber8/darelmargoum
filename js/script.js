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
  const TAPIS_DETAILS = {
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
    const product = TAPIS_DETAILS[id];
    if (!product || !quickviewModal) return;

    quickviewTitle.textContent = product.name;
    quickviewPrice.textContent = product.price.toLocaleString('fr-FR') + ' TND';
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
        if (show) visible++;
      });
      if (catCountEl) catCountEl.textContent = `${visible} pièce${visible > 1 ? 's' : ''}`;
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
