
(function () {
  const currentPage = document.body.getAttribute('data-page') || 'inicio';

  const nav = `
<nav class="navbar">
  <a class="nav-logo" href="index.html">
    <img class="nav-logo-icon-img" src="img/logo.png" alt="Logo Finca La Bonita">

    <div class="nav-logo-text">
      <span class="nav-logo-small">FINCA</span>
      <span class="nav-logo-name">LA BONITA</span>
      <span class="nav-logo-line">
        <i></i>
        CAFÉ DE ORIGEN
        <i></i>
      </span>
    </div>
  </a>
  <ul class="nav-links">
    <li><a href="index.html"           data-page="inicio">Inicio</a></li>
    <li><a href="sobre-nosotros.html"  data-page="sobre-nosotros">Sobre Nosotros</a></li>
    <li><a href="contacto.html"        data-page="contacto">Contacto</a></li>
    <li><a href="nuestro-cafe.html"    data-page="nuestro-cafe">Nuestro Café</a></li>
    <li><a href="ubicacion.html"       data-page="ubicacion">Ubicación</a></li>
  </ul>
  <a class="nav-cta premium-login" href="login.html">
    <span class="login-icon-wrap">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4.5 21c1.5-4 4.4-6 7.5-6s6 2 7.5 6"/>
      </svg>
    </span>

    <strong class="login-text-simple">Iniciar Sesión</strong>
  </a>
</nav>`;



const floatingNav = `
<nav class="floating-nav">
  <a href="index.html" data-page="inicio">Inicio</a>
  <a href="sobre-nosotros.html" data-page="sobre-nosotros">Sobre Nosotros</a>
  <a href="contacto.html" data-page="contacto">Contacto</a>
  <a href="nuestro-cafe.html" data-page="nuestro-cafe">Nuestro Café</a>
  <a href="ubicacion.html" data-page="ubicacion">Ubicación</a>
</nav>`;

  // Footer
const footer = `
<footer class="footer-premium">
  

  <div class="footer-premium-content">
    <div class="footer-premium-side footer-premium-left">
      <div class="footer-logo-frame circle-logo">
        <img class="footer-logo-img" src="img/logo-footer.png" alt="Finca La Bonita">
      </div>
    </div>

    <div class="footer-premium-center">
      <div class="footer-premium-ornament">
        <span></span>
        <i>◆</i>
        <span></span>
      </div>

      <h3>Finca La Bonita</h3>
      <p>Aldea El Bosque, Santa Cruz El Naranjo, Santa Rosa, Guatemala</p>
      <small>Café de origen cultivado con amor por la tierra</small>
    </div>

    <div class="footer-premium-side footer-premium-right">
      <div class="footer-premium-connect">
        <span class="footer-premium-follow">Síguenos</span>

        <div class="footer-premium-socials">
          <a href="#" class="footer-premium-social whatsapp-icon" aria-label="WhatsApp" title="WhatsApp">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3.5a8.4 8.4 0 0 0-7.15 12.82L3.75 20.5l4.25-1.08A8.4 8.4 0 1 0 12 3.5Z"/>
              <path d="M9.05 8.45c.18-.3.38-.4.68-.4h.48c.22 0 .4.12.5.34l.66 1.5c.1.24.05.48-.13.66l-.48.5c.55 1.05 1.4 1.9 2.47 2.48l.52-.5c.18-.18.42-.23.65-.13l1.52.67c.22.1.35.28.35.5v.48c0 .3-.12.52-.4.68-.58.34-1.44.42-2.45.1-2.36-.75-4.15-2.54-4.9-4.9-.32-1.02-.23-1.88.1-2.46Z"/>
            </svg>
          </a>
          <a href="#" class="footer-premium-social" aria-label="Instagram" title="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none"/>
            </svg>
          </a>

          <a href="#" class="footer-premium-social" aria-label="Facebook" title="Facebook">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 21V13H17L17.5 9.5H14V7.2C14 6.2 14.4 5.5 15.8 5.5H17.6V3H15.1C12.2 3 11 4.8 11 7V9.5H8.5V13H11V21"/>
            </svg>
          </a>

          <a href="#" class="footer-premium-social" aria-label="X" title="X">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 4L19 20"/>
              <path d="M19 4L5 20"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

  </div>

</footer>`;


  // Inject
  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('afterbegin', floatingNav);
  document.body.insertAdjacentHTML('beforeend', footer);

  // Mark active link
  document.querySelectorAll('.nav-links a, .floating-nav a').forEach(a => {
    if (a.getAttribute('data-page') === currentPage) {
      a.classList.add('active');
    }
  });

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');
const floatingMenu = document.querySelector('.floating-nav');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const scrollingDown = currentScrollY > lastScrollY;

  if (currentScrollY > 160 && scrollingDown) {
    navbar.classList.add('navbar-hidden');
    floatingMenu.classList.add('visible');
  }

  if (!scrollingDown || currentScrollY < 90) {
    navbar.classList.remove('navbar-hidden');
    floatingMenu.classList.remove('visible');
  }

  lastScrollY = currentScrollY;
});



})();
