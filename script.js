/* =========================================================================
   SAVEUR DU TERROIR — script.js
   Fichier commun, partagé par toutes les pages (index.html, produits.html,
   contact.html). Chaque fonction vérifie que les éléments existent avant
   d'agir, pour ne rien casser sur une page qui n'a pas tel ou tel bloc.

   -> Pour modifier un produit EN DIRECT (ex. pendant la soutenance) :
      il suffit d'éditer le tableau PRODUCTS ci-dessous et de recharger
      la page. Rien d'autre à toucher.
   ========================================================================= */

/* ---------------------- 1. DONNÉES PRODUITS ---------------------- */
const CATEGORIES = [
  { id:'fruits-legumes', fr:'Fruits & Légumes',        en:'Fruits & Vegetables' },
  { id:'laitiers',       fr:'Produits Laitiers',       en:'Dairy Products' },
  { id:'epicerie',       fr:'Épicerie Fine',           en:'Fine Grocery' },
  { id:'boissons',       fr:'Boissons',                en:'Drinks' },
  { id:'snacks',         fr:'Snacks & Confiseries',    en:'Snacks & Sweets' },
];

const PRODUCTS = [
  // --- Fruits & Légumes ---
  { id:1,  cat:'fruits-legumes', icon:'🍇', price:1800,
    fr:'Fruits Étincelants', en:'Sparkling Fresh Fruits',
    frDesc:'Fruits de saison, doux et frais.', enDesc:'Sweet, fresh seasonal fruit.' },
  { id:2,  cat:'fruits-legumes', icon:'🥬', price:1200,
    fr:'Légumes du Terroir', en:'Local Harvest Vegetables',
    frDesc:'Récoltés à point, goût et qualité.', enDesc:'Picked at peak ripeness.' },
  { id:3,  cat:'fruits-legumes', icon:'🥑', price:1600,
    fr:'Avocats mûrs à point', en:'Ripe Avocados',
    frDesc:'Onctueux, sélectionnés à la main.', enDesc:'Creamy, hand-selected avocados.' },
  { id:4,  cat:'fruits-legumes', icon:'🥭', price:1100,
    fr:'Mangues de Casamance', en:'Casamance Mangoes',
    frDesc:'Sucrées et parfumées, récolte locale.', enDesc:'Sweet and fragrant, locally grown.' },
  { id:5,  cat:'fruits-legumes', icon:'🍋', price:900,
    fr:'Citrons bio', en:'Organic Lemons',
    frDesc:'Cultivés sans pesticides.', enDesc:'Grown without pesticides.' },

  // --- Produits Laitiers ---
  { id:6,  cat:'laitiers', icon:'🥛', price:2000,
    fr:'Lait et Crèmes', en:'Milk & Cream',
    frDesc:'Vaches pâturant librement, onctuosité incomparable.', enDesc:'Free-grazing cows, unmatched richness.' },
  { id:7,  cat:'laitiers', icon:'🧀', price:3200,
    fr:'Fromages Artisanaux', en:'Artisan Cheeses',
    frDesc:'Un assortiment de fromages affinés.', enDesc:'A selection of aged, artisan cheeses.' },
  { id:8,  cat:'laitiers', icon:'🧈', price:1700,
    fr:'Beurre fermier', en:'Farmhouse Butter',
    frDesc:'Baratté selon la tradition.', enDesc:'Churned the traditional way.' },
  { id:9,  cat:'laitiers', icon:'🍦', price:1900,
    fr:'Yaourts nature', en:'Plain Yogurts',
    frDesc:'Lot de 6, fermentation lente.', enDesc:'Pack of 6, slow-fermented.' },

  // --- Épicerie Fine ---
  { id:10, cat:'epicerie', icon:'🫙', price:1500,
    fr:'Condiments et Sauces', en:'Condiments & Sauces',
    frDesc:'Sauces artisanales pleines de caractère.', enDesc:'Artisan sauces, full of character.' },
  { id:11, cat:'epicerie', icon:'🍝', price:1400,
    fr:'Pâtes et Céréales', en:'Pasta & Grains',
    frDesc:'Un choix raffiné pour vos mets délicats.', enDesc:'A refined choice for delicate dishes.' },
  { id:12, cat:'epicerie', icon:'🫒', price:2600,
    fr:"Huile d'olive extra vierge", en:'Extra Virgin Olive Oil',
    frDesc:'Première pression à froid.', enDesc:'First cold press.' },
  { id:13, cat:'epicerie', icon:'🌶️', price:1000,
    fr:'Épices du marché', en:'Market Spices',
    frDesc:'Mélanges préparés à la main.', enDesc:'Hand-blended spice mixes.' },

  // --- Boissons ---
  { id:14, cat:'boissons', icon:'🧃', price:1000,
    fr:'Jus de Bissap', en:'Hibiscus Juice',
    frDesc:'Infusion d\'hibiscus, sucre naturel.', enDesc:'Hibiscus infusion, naturally sweetened.' },
  { id:15, cat:'boissons', icon:'☕', price:1200,
    fr:'Café Touba', en:'Touba Coffee',
    frDesc:'Torréfié aux épices, recette traditionnelle.', enDesc:'Spice-roasted, traditional recipe.' },
  { id:16, cat:'boissons', icon:'💧', price:500,
    fr:'Eau minérale naturelle', en:'Natural Mineral Water',
    frDesc:'Source locale, pack de 6.', enDesc:'Local spring, pack of 6.' },

  // --- Snacks & Confiseries ---
  { id:17, cat:'snacks', icon:'🍫', price:1300,
    fr:'Chocolat noir 70%', en:'70% Dark Chocolate',
    frDesc:'Cacao torréfié artisanalement.', enDesc:'Artisan-roasted cocoa.' },
  { id:18, cat:'snacks', icon:'🍯', price:2400,
    fr:'Miel de brousse', en:'Wild Bush Honey',
    frDesc:'Récolté à la main, non pasteurisé.', enDesc:'Hand-harvested, unpasteurized.' },
  { id:19, cat:'snacks', icon:'🍪', price:1100,
    fr:'Biscuits artisanaux', en:'Artisan Biscuits',
    frDesc:'Cuits au four le jour même.', enDesc:'Baked fresh the same day.' },
];

/* ---------------------- 2. TRADUCTIONS (FR / EN) ---------------------- */
const I18N = {
  fr: {
    'nav.home':'Accueil', 'nav.products':'Produits', 'nav.why':'Pourquoi nous', 'nav.contact':'Contact', 'nav.cart':'Panier',
    'hero.eyebrow':"L'authenticité du terroir",
    'hero.title':"Découvrez l'essence<br>de nos produits authentiques.",
    'hero.sub':"Fruits, légumes, produits laitiers et épicerie fine — sélectionnés directement chez les meilleurs producteurs locaux.",
    'hero.cta1':'Voir les produits', 'hero.cta2':'Pourquoi nous choisir',

    'about.eyebrow':'Notre histoire',
    'about.title':'Une passion transmise depuis trois générations',
    'about.body1':"Saveur du Terroir est née d'une conviction simple : les meilleurs produits sont ceux qui gardent le lien avec la terre et les producteurs qui les font naître. Depuis nos débuts, nous travaillons main dans la main avec des exploitations locales, choisies pour leur exigence et leur savoir-faire.",
    'about.body2':"Aujourd'hui, nous mettons ce réseau de confiance à votre service : chaque produit qui arrive chez vous a été goûté, vérifié, et validé par notre équipe avant d'être mis en ligne.",
    'about.stat1':'producteurs partenaires', 'about.stat2':'produits référencés', 'about.stat3':"années d'expérience",

    'products.eyebrow':'Nos catégories',
    'products.title':'Nos catégories de produits',
    'products.sub':"Filtrez par catégorie pour trouver vite ce qu'il vous faut.",
    'products.viewall':'Voir tout le catalogue',
    'filter.all':'Tout',

    'why.eyebrow':'Notre engagement',
    'why.title':'Pourquoi choisir Saveur du Terroir&nbsp;?',
    'why.card1.title':'Une qualité inégalée', 'why.card1.body':'Chaque produit est choisi avec un soin méticuleux, pour garantir une expérience gustative hors du commun.',
    'why.card2.title':'Un service attentionné', 'why.card2.body':'Notre équipe se tient à votre écoute pour toute question ou besoin d\'assistance.',
    'why.card3.title':'Livraison rapide et sereine', 'why.card3.body':'Vos délices vous parviennent rapidement, directement à votre porte.',

    'testi.eyebrow':'Ils nous font confiance',
    'testi.title':'Ce que disent nos clients',
    'testi.quote1':"Les produits sont d'une fraîcheur remarquable, on sent vraiment la différence avec la grande distribution.",
    'testi.author1':'Aïssatou D. — Dakar',
    'testi.quote2':"Livraison rapide et fromages artisanaux excellents. Je recommande sans hésiter.",
    'testi.author2':'Moussa K. — Rufisque',
    'testi.quote3':"Un vrai coup de cœur pour le miel de brousse et le café Touba. Le service client répond très vite.",
    'testi.author3':'Fatou S. — Thiès',

    'newsletter.title':'Ne manquez aucune nouveauté',
    'newsletter.sub':'Recevez nos arrivages et promotions par email.',
    'newsletter.placeholder':'Votre adresse email',
    'newsletter.btn':"S'inscrire",
    'newsletter.success':'Merci ! Votre inscription a bien été prise en compte.',

    'faq.eyebrow':'Questions fréquentes',
    'faq.title':'Foire aux questions',
    'faq.q1':'Quels sont les délais de livraison ?',
    'faq.a1':'Nous livrons sous 24h à Dakar et sa banlieue, et sous 2 à 4 jours dans le reste du pays.',
    'faq.q2':'Comment sont sélectionnés les producteurs ?',
    'faq.a2':'Chaque producteur est visité et évalué par notre équipe avant intégration au catalogue, sur des critères de qualité, de traçabilité et de régularité.',
    'faq.q3':'Puis-je retourner un produit ?',
    'faq.a3':"Oui, tout produit non conforme ou endommagé à la livraison peut être signalé sous 24h pour un remboursement ou un échange.",
    'faq.q4':'Proposez-vous des produits bio ?',
    'faq.a4':'Une partie croissante de notre catalogue est certifiée bio ou cultivée sans pesticides — ces produits sont identifiés sur leur fiche.',

    'page.products.eyebrow':'Catalogue complet',
    'page.products.title':'Tous nos produits',
    'page.products.sub':'Parcourez l\'ensemble de notre sélection, rayon par rayon.',

    'page.contact.eyebrow':'Restons en contact',
    'page.contact.title':'Contactez-nous',
    'page.contact.sub':"Une question, une suggestion, une demande spécifique ? Notre équipe vous répond sous 24h.",
    'contact.form.name':'Nom complet', 'contact.form.email':'Adresse email', 'contact.form.subject':'Sujet',
    'contact.form.message':'Votre message', 'contact.form.submit':'Envoyer le message',
    'contact.form.success':'Message envoyé ! Nous vous répondrons très vite.',
    'contact.info.title':'Nos coordonnées',
    'contact.info.address':'Liberté 6, Dakar, Sénégal',
    'contact.info.hours':'Lun–Sam, 8h–19h',

    'footer.tagline':'Un voyage culinaire à travers les délices de notre terre.',
    'footer.contact':'Contact', 'footer.follow':'Suivez-nous', 'footer.school':'Projet académique ESTM',
    'cart.title':'Votre panier', 'cart.total':'Total', 'cart.checkout':'Valider la commande', 'cart.empty':'Votre panier est vide.',
    'checkout.success.title':'Commande confirmée !',
    'checkout.success.body':'Merci pour votre confiance. Votre commande d\'un montant de {total} a bien été enregistrée, notre équipe vous contactera pour la livraison.',
    'checkout.success.close':'Fermer',
  },
  en: {
    'nav.home':'Home', 'nav.products':'Products', 'nav.why':'Why us', 'nav.contact':'Contact', 'nav.cart':'Cart',
    'hero.eyebrow':'The authenticity of the land',
    'hero.title':'Discover the essence<br>of our authentic products.',
    'hero.sub':'Fruits, vegetables, dairy and fine grocery — sourced directly from the best local producers.',
    'hero.cta1':'Browse products', 'hero.cta2':'Why choose us',

    'about.eyebrow':'Our story',
    'about.title':'A passion passed down for three generations',
    'about.body1':"Saveur du Terroir was born from a simple conviction: the best products are the ones that keep their link to the land and the producers who grow them. From day one, we've worked hand in hand with local farms chosen for their rigor and know-how.",
    'about.body2':'Today, we put that trusted network to work for you: every product that reaches your door has been tasted, checked, and approved by our team before going online.',
    'about.stat1':'partner producers', 'about.stat2':'listed products', 'about.stat3':'years of experience',

    'products.eyebrow':'Our categories',
    'products.title':'Our product categories',
    'products.sub':'Filter by category to find what you need, fast.',
    'products.viewall':'View the full catalog',
    'filter.all':'All',

    'why.eyebrow':'Our commitment',
    'why.title':'Why choose Saveur du Terroir?',
    'why.card1.title':'Unmatched quality', 'why.card1.body':'Every product is carefully selected to guarantee an exceptional tasting experience.',
    'why.card2.title':'Attentive service', 'why.card2.body':'Our team is here to help with any question or assistance you need.',
    'why.card3.title':'Fast, worry-free delivery', 'why.card3.body':'Your treats reach you quickly, straight to your door.',

    'testi.eyebrow':'Trusted by our customers',
    'testi.title':'What our customers say',
    'testi.quote1':'The products are remarkably fresh — you can really feel the difference with big supermarkets.',
    'testi.author1':'Aïssatou D. — Dakar',
    'testi.quote2':'Fast delivery and excellent artisan cheeses. I recommend without hesitation.',
    'testi.author2':'Moussa K. — Rufisque',
    'testi.quote3':'A real favorite for the bush honey and Touba coffee. Customer service replies very quickly.',
    'testi.author3':'Fatou S. — Thiès',

    'newsletter.title':"Don't miss a single new arrival",
    'newsletter.sub':'Get our new stock and promotions by email.',
    'newsletter.placeholder':'Your email address',
    'newsletter.btn':'Subscribe',
    'newsletter.success':"Thanks! You've been successfully subscribed.",

    'faq.eyebrow':'Frequently asked questions',
    'faq.title':'FAQ',
    'faq.q1':'What are the delivery times?',
    'faq.a1':'We deliver within 24h in Dakar and its suburbs, and 2 to 4 days for the rest of the country.',
    'faq.q2':'How are producers selected?',
    'faq.a2':'Each producer is visited and assessed by our team before joining the catalog, based on quality, traceability and consistency.',
    'faq.q3':'Can I return a product?',
    'faq.a3':'Yes, any non-conforming or damaged product can be reported within 24h for a refund or exchange.',
    'faq.q4':'Do you offer organic products?',
    'faq.a4':'A growing share of our catalog is certified organic or pesticide-free — these products are marked on their product card.',

    'page.products.eyebrow':'Full catalog',
    'page.products.title':'All our products',
    'page.products.sub':'Browse our entire selection, aisle by aisle.',

    'page.contact.eyebrow':"Let's stay in touch",
    'page.contact.title':'Contact us',
    'page.contact.sub':'A question, a suggestion, a specific request? Our team replies within 24h.',
    'contact.form.name':'Full name', 'contact.form.email':'Email address', 'contact.form.subject':'Subject',
    'contact.form.message':'Your message', 'contact.form.submit':'Send message',
    'contact.form.success':"Message sent! We'll get back to you shortly.",
    'contact.info.title':'Our contact details',
    'contact.info.address':'Liberté 6, Dakar, Senegal',
    'contact.info.hours':'Mon–Sat, 8am–7pm',

    'footer.tagline':'A culinary journey through the delights of our land.',
    'footer.contact':'Contact', 'footer.follow':'Follow us', 'footer.school':'ESTM academic project',
    'cart.title':'Your cart', 'cart.total':'Total', 'cart.checkout':'Place order', 'cart.empty':'Your cart is empty.',
    'checkout.success.title':'Order confirmed!',
    'checkout.success.body':'Thank you for your trust. Your order totaling {total} has been recorded — our team will contact you about delivery.',
    'checkout.success.close':'Close',
  }
};

/* ---------------------- 3. ÉTAT (persisté en localStorage) ---------------------- */
let currentLang = localStorage.getItem('stl_lang') || 'fr';
let activeCategory = 'all';
let cart = JSON.parse(localStorage.getItem('stl_cart') || '{}');

function saveState(){
  localStorage.setItem('stl_lang', currentLang);
  localStorage.setItem('stl_cart', JSON.stringify(cart));
}

/* ---------------------- 4. RENDU ---------------------- */
function t(key){ return I18N[currentLang][key] || key; }

function applyTranslations(){
  document.documentElement.lang = currentLang;
  document.documentElement.dataset.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll('.lang-option').forEach(el => {
    el.classList.toggle('is-active', el.dataset.langBtn === currentLang);
  });
  renderCategoryFilters();
  renderProducts();
  renderCart();
  saveState();
}

function renderCategoryFilters(){
  const wrap = document.getElementById('categoryFilters');
  if(!wrap) return;
  const chips = [{ id:'all', label:t('filter.all') }]
    .concat(CATEGORIES.map(c => ({ id:c.id, label:c[currentLang] })));

  wrap.innerHTML = chips.map(c => `
    <button class="category-chip ${activeCategory === c.id ? 'is-active':''}" data-cat="${c.id}">${c.label}</button>
  `).join('');

  wrap.querySelectorAll('.category-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.cat;
      renderCategoryFilters();
      renderProducts();
    });
  });
}

function renderProducts(){
  const grid = document.getElementById('productGrid');
  if(!grid) return;
  const limit = grid.dataset.limit ? Number(grid.dataset.limit) : null;
  let list = PRODUCTS.filter(p => activeCategory === 'all' || p.cat === activeCategory);
  if(limit) list = list.slice(0, limit);
  const catLabel = id => (CATEGORIES.find(c => c.id === id) || {})[currentLang] || id;

  grid.innerHTML = list.map((p, i) => `
    <article class="product-card" style="animation-delay:${i * 60}ms">
      <div class="product-thumb">${p.icon}</div>
      <div class="product-body">
        <span class="product-cat">${catLabel(p.cat)}</span>
        <h3 class="product-name">${p[currentLang]}</h3>
        <p style="font-size:.85rem;margin-bottom:.2rem;">${currentLang === 'fr' ? p.frDesc : p.enDesc}</p>
        <div class="product-row">
          <span class="product-price">${p.price.toLocaleString('fr-FR')} FCFA</span>
          <button class="add-btn" data-add="${p.id}" aria-label="Ajouter au panier">+</button>
        </div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', () => addToCart(Number(btn.dataset.add)));
  });
}

function renderCart(){
  const itemsWrap = document.getElementById('cartItems');
  if(!itemsWrap) return;
  const ids = Object.keys(cart).filter(id => cart[id] > 0);

  if(ids.length === 0){
    itemsWrap.innerHTML = `<p class="cart-empty">${t('cart.empty')}</p>`;
  } else {
    itemsWrap.innerHTML = ids.map(id => {
      const p = PRODUCTS.find(x => x.id === Number(id));
      const qty = cart[id];
      return `
        <div class="cart-item">
          <div class="thumb">${p.icon}</div>
          <div class="info">
            <div class="name">${p[currentLang]}</div>
            <div class="qty-controls">
              <button data-dec="${p.id}">−</button>
              <span>${qty}</span>
              <button data-inc="${p.id}">+</button>
            </div>
            <button class="remove" data-remove="${p.id}">${currentLang === 'fr' ? 'Retirer' : 'Remove'}</button>
          </div>
          <strong>${(p.price * qty).toLocaleString('fr-FR')} FCFA</strong>
        </div>`;
    }).join('');
  }

  itemsWrap.querySelectorAll('[data-inc]').forEach(b => b.addEventListener('click', () => addToCart(Number(b.dataset.inc))));
  itemsWrap.querySelectorAll('[data-dec]').forEach(b => b.addEventListener('click', () => removeOne(Number(b.dataset.dec))));
  itemsWrap.querySelectorAll('[data-remove]').forEach(b => b.addEventListener('click', () => {
    delete cart[b.dataset.remove];
    renderCart(); updateCartCount(); saveState();
  }));

  const total = ids.reduce((sum, id) => {
    const p = PRODUCTS.find(x => x.id === Number(id));
    return sum + p.price * cart[id];
  }, 0);
  const totalEl = document.getElementById('cartTotal');
  if(totalEl) totalEl.textContent = `${total.toLocaleString('fr-FR')} FCFA`;
}

function updateCartCount(){
  const count = Object.values(cart).reduce((a,b) => a + b, 0);
  const el = document.getElementById('cartCount');
  if(!el) return;
  el.textContent = count;
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 220);
}

/* ---------------------- 5. ACTIONS PANIER ---------------------- */
function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;
  renderCart(); updateCartCount(); saveState();
}
function removeOne(id){
  if(!cart[id]) return;
  cart[id] -= 1;
  if(cart[id] <= 0) delete cart[id];
  renderCart(); updateCartCount(); saveState();
}

function completeOrder(){
  const ids = Object.keys(cart).filter(id => cart[id] > 0);
  const total = ids.reduce((sum, id) => {
    const p = PRODUCTS.find(x => x.id === Number(id));
    return sum + p.price * cart[id];
  }, 0);
  const totalLabel = `${total.toLocaleString('fr-FR')} FCFA`;

  const itemsWrap = document.getElementById('cartItems');
  const footer = document.querySelector('.cart-footer');
  if(itemsWrap){
    itemsWrap.innerHTML = `
      <div class="order-confirmation">
        <div class="order-check" aria-hidden="true">✓</div>
        <h4>${t('checkout.success.title')}</h4>
        <p>${t('checkout.success.body').replace('{total}', `<strong>${totalLabel}</strong>`)}</p>
        <button class="btn btn--primary" id="closeConfirmation">${t('checkout.success.close')}</button>
      </div>`;
  }
  if(footer) footer.style.display = 'none';

  const closeBtn = document.getElementById('closeConfirmation');
  if(closeBtn){
    closeBtn.addEventListener('click', () => {
      cart = {};
      saveState();
      updateCartCount();
      if(footer) footer.style.display = '';
      renderCart();
      closeDrawer();
    });
  }
}

/* ---------------------- 6. INTERACTIONS UI ---------------------- */
function openDrawer(){
  document.getElementById('cartDrawer').classList.add('is-open');
  document.getElementById('drawerOverlay').classList.add('is-open');
}
function closeDrawer(){
  document.getElementById('cartDrawer').classList.remove('is-open');
  document.getElementById('drawerOverlay').classList.remove('is-open');
}

/* ---------------------- 7. ANIMATIONS (scroll reveal + header) ---------------------- */
function setupScrollReveal(){
  const items = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));
}

function setupHeaderScroll(){
  const header = document.getElementById('siteHeader');
  if(!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  });
}

/* ---------------------- 8. FAQ ACCORDION ---------------------- */
function setupFaq(){
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    if(!question) return;
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('is-open'));
      if(!isOpen) item.classList.add('is-open');
    });
  });
}

/* ---------------------- 9. NEWSLETTER + CONTACT FORM ---------------------- */
function setupNewsletter(){
  const form = document.getElementById('newsletterForm');
  if(!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('newsletterMsg');
    msg.textContent = t('newsletter.success');
    msg.classList.add('is-visible');
    form.reset();
  });
}

function setupContactForm(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('contactMsg');
    msg.textContent = t('contact.form.success');
    msg.classList.add('is-visible');
    form.reset();
  });
}

/* ---------------------- 10. INIT ---------------------- */
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  setupScrollReveal();
  setupHeaderScroll();
  setupFaq();
  setupNewsletter();
  setupContactForm();
  updateCartCount();

  const cartButton = document.getElementById('cartButton');
  const drawerClose = document.getElementById('drawerClose');
  const drawerOverlay = document.getElementById('drawerOverlay');
  if(cartButton) cartButton.addEventListener('click', openDrawer);
  if(drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if(drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  const langToggle = document.getElementById('langToggle');
  if(langToggle){
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'fr' ? 'en' : 'fr';
      applyTranslations();
    });
  }

  const checkoutBtn = document.getElementById('checkoutBtn');
  if(checkoutBtn){
    checkoutBtn.addEventListener('click', () => {
      const count = Object.values(cart).reduce((a,b) => a + b, 0);
      if(count === 0) return;
      completeOrder();
    });
  }
});

