const app = document.getElementById("app");
const themeToggle = document.getElementById("themeToggle");
const navItems = [...document.querySelectorAll(".nav-item")];
const brandButton = document.querySelector(".brand");

const ROUTES = {
  inicio: {
    title: "Inicio",
    icon: "⌂"
  },
  arte: {
    title: "Arte",
    icon: "✦"
  },
  tatuajes: {
    title: "Tatuajes",
    icon: "✎"
  },
  formacion: {
    title: "Formación",
    icon: "▣"
  },
  galeria: {
    title: "Galería",
    icon: "▤"
  },
  radio: {
    title: "Radio",
    icon: "◉"
  },
  ia: {
    title: "RoXThal IA",
    icon: "✧"
  },
  sorteo: {
    title: "Sorteo",
    icon: "★"
  },
  resenas: {
    title: "Reseñas",
    icon: "♡"
  },
  pagos: {
    title: "Pagos",
    icon: "€"
  },
  contacto: {
    title: "Contacto",
    icon: "⌖"
  },
  admin: {
    title: "Administración",
    icon: "⚙"
  },
  mas: {
    title: "Más",
    icon: "•••"
  }
};

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setActiveNav(route) {
  navItems.forEach(button => {
    const active = button.dataset.route === route;

    button.classList.toggle("active", active);

    if (active) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });
}

function moduleTemplate(icon, title, text, buttons = []) {
  return `
    <section class="module-hero">
      <div class="module-icon">${icon}</div>
      <h2>${escapeHTML(title)}</h2>
      <p>${escapeHTML(text)}</p>

      ${
        buttons.length
          ? `
            <div class="actions">
              ${buttons.map(button => `
                <button
                  class="btn ${button.secondary ? "secondary" : ""}"
                  type="button"
                  data-route="${escapeHTML(button.route || "")}"
                >
                  ${escapeHTML(button.icon || "")}
                  ${escapeHTML(button.label)}
                </button>
              `).join("")}
            </div>
          `
          : ""
      }
    </section>
  `;
}

function renderInicio() {
  return `
    <section class="hero">
      <div class="eyebrow">RoXThal Art Design</div>

      <h1>
        Arte que<br>
        deja huella.
      </h1>

      <p>
        Arte, tatuajes y formación artística en un espacio
        creativo, moderno y cercano.
      </p>

      <div class="actions">
        <button class="btn" type="button" data-route="tatuajes">
          ✎ Ver tatuajes
        </button>

        <button class="btn secondary" type="button" data-route="formacion">
          ▣ Formación
        </button>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <div>
          <h2>Descubre RoXThal</h2>
          <p>Acceso rápido a las áreas principales.</p>
        </div>
      </div>

      <div class="grid">

        <article class="card">
          <div class="emoji">🎨</div>
          <h3>Arte</h3>
          <p>Dibujo, pintura y creación artística.</p>

          <button class="btn secondary" type="button" data-route="arte">
            Entrar
          </button>
        </article>

        <article class="card">
          <div class="emoji">🖋️</div>
          <h3>Tatuajes</h3>
          <p>Diseños, estilos y trabajo artístico.</p>

          <button class="btn secondary" type="button" data-route="tatuajes">
            Entrar
          </button>
        </article>

        <article class="card">
          <div class="emoji">📚</div>
          <h3>Formación</h3>
          <p>Cursos y talleres de RoXThal.</p>

          <button class="btn secondary" type="button" data-route="formacion">
            Ver cursos
          </button>
        </article>

        <article class="card">
          <div class="emoji">🖼️</div>
          <h3>Galería</h3>
          <p>Una futura colección visual de trabajos.</p>

          <button class="btn secondary" type="button" data-route="galeria">
            Ver galería
          </button>
        </article>

      </div>
    </section>

    <section class="section">
      <div class="notice">
        ✦ RoXThal Art Design V2 está construida de forma modular.
        Primero estabilizamos la base y después añadimos cada sistema.
      </div>
    </section>

    <p class="footer-note">
      RoXThal Art Design · Arte · Tatuajes · Formación
    </p>
  `;
}

function renderArte() {
  return `
    ${moduleTemplate(
      "🎨",
      "Arte",
      "Espacio dedicado al dibujo, la pintura y la creación artística.",
      [
        {
          icon: "▣",
          label: "Ver formación",
          route: "formacion"
        },
        {
          icon: "←",
          label: "Volver",
          route: "inicio",
          secondary: true
        }
      ]
    )}

    <section class="section">
      <div class="list">

        <div class="list-item">
          <div class="list-icon">✏️</div>
          <div class="list-content">
            <strong>Dibujo</strong>
            <small>Técnica, composición y desarrollo artístico.</small>
          </div>
        </div>

        <div class="list-item">
          <div class="list-icon">🖌️</div>
          <div class="list-content">
            <strong>Pintura</strong>
            <small>Color, materia, expresión y creatividad.</small>
          </div>
        </div>

        <div class="list-item">
          <div class="list-icon">♻️</div>
          <div class="list-content">
            <strong>Creatividad responsable</strong>
            <small>Arte y reutilización de materiales.</small>
          </div>
        </div>

      </div>
    </section>
  `;
}

function renderTatuajes() {
  return `
    ${moduleTemplate(
      "✎",
      "Tatuajes",
      "Diseño y expresión corporal desde una perspectiva artística.",
      [
        {
          icon: "🔎",
          label: "Buscar diseños",
          route: "galeria"
        },
        {
          icon: "←",
          label: "Volver",
          route: "inicio",
          secondary: true
        }
      ]
    )}

    <section class="section">

      <div class="grid">

        <article class="card">
          <div class="emoji">🖋️</div>
          <h3>Diseño personalizado</h3>
          <p>
            Ideas transformadas en propuestas visuales.
          </p>
        </article>

        <article class="card">
          <div class="emoji">🧭</div>
          <h3>Estilos</h3>
          <p>
            Explora diferentes lenguajes y referencias.
          </p>
        </article>

        <article class="card">
          <div class="emoji">🖼️</div>
          <h3>Inspiración</h3>
          <p>
            Una biblioteca visual crecerá progresivamente.
          </p>
        </article>

        <article class="card">
          <div class="emoji">✦</div>
          <h3>RoXThal IA</h3>
          <p>
            El asistente artístico se conectará posteriormente.
          </p>

          <button class="btn secondary" type="button" data-route="ia">
            Abrir IA
          </button>
        </article>

      </div>

    </section>
  `;
}

function renderFormacion() {
  return `
    ${moduleTemplate(
      "▣",
      "Formación",
      "Cursos y talleres artísticos de RoXThal Art Design.",
      [
        {
          icon: "←",
          label: "Volver",
          route: "inicio",
          secondary: true
        }
      ]
    )}

    <section class="section">

      <div class="list">

        <div class="list-item">
          <div class="list-icon">🖋️</div>

          <div class="list-content">
            <strong>Iniciación al tatuaje</strong>
            <small>
              Formación progresiva para comenzar en el mundo del tatuaje.
            </small>
          </div>

          <span class="badge">CURSO</span>
        </div>

        <div class="list-item">
          <div class="list-icon">🎨</div>

          <div class="list-content">
            <strong>Dibujo y pintura</strong>
            <small>
              Desarrollo técnico y creativo.
            </small>
          </div>

          <span class="badge">CURSO</span>
        </div>

        <div class="list-item">
          <div class="list-icon">🧒</div>

          <div class="list-content">
            <strong>Talleres infantiles</strong>
            <small>
              Actividades artísticas adaptadas a los más pequeños.
            </small>
          </div>

          <span class="badge">TALLER</span>
        </div>

      </div>

    </section>
  `;
}

function renderGaleria() {
  return `
    ${moduleTemplate(
      "▤",
      "Galería",
      "La nueva galería visual se incorporará de forma progresiva.",
      [
        {
          icon: "✎",
          label: "Ver tatuajes",
          route: "tatuajes"
        },
        {
          icon: "←",
          label: "Volver",
          route: "inicio",
          secondary: true
        }
      ]
    )}

    <section class="section">

      <div class="notice">
        🖼️ Esta zona está preparada para recibir posteriormente
        imágenes y vídeos desde el nuevo sistema de almacenamiento.
      </div>

    </section>
  `;
}

function renderRadio() {
  return moduleTemplate(
    "◉",
    "Radio",
    "Espacio preparado para la futura radio de RoXThal.",
    [
      {
        icon: "←",
        label: "Volver",
        route: "mas",
        secondary: true
      }
    ]
  );
}

function renderIA() {
  return `
    ${moduleTemplate(
      "✧",
      "RoXThal IA",
      "Asistente artístico para inspiración, ideas, estilos y proyectos.",
      [
        {
          icon: "←",
          label: "Volver",
          route: "tatuajes",
          secondary: true
        }
      ]
    )}

    <section class="section">

      <div class="notice">
        ✦ La interfaz está preparada.
        La conexión con el servicio de inteligencia artificial
        se añadirá posteriormente sin depender de Supabase.
      </div>

    </section>
  `;
}

function renderSorteo() {
  return `
    ${moduleTemplate(
      "★",
      "Sorteo",
      "Espacio reservado para el sistema de sorteos de RoXThal.",
      [
        {
          icon: "←",
          label: "Volver",
          route: "mas",
          secondary: true
        }
      ]
    )}

    <section class="section">
      <div class="notice">
        🎟️ El sistema de participación y sorteos se conectará
        cuando terminemos la nueva capa de datos.
      </div>
    </section>
  `;
}

function renderResenas() {
  return `
    ${moduleTemplate(
      "♡",
      "Reseñas",
      "Opiniones y experiencias de quienes forman parte de RoXThal.",
      [
        {
          icon: "←",
          label: "Volver",
          route: "mas",
          secondary: true
        }
      ]
    )}

    <section class="section">
      <div class="notice">
        💬 Las reseñas se incorporarán al nuevo sistema de datos.
      </div>
    </section>
  `;
}

function renderPagos() {
  return `
    ${moduleTemplate(
      "€",
      "Pagos",
      "Zona preparada para gestionar pagos y estados de cursos o servicios.",
      [
        {
          icon: "←",
          label: "Volver",
          route: "mas",
          secondary: true
        }
      ]
    )}

    <section class="section">
      <div class="notice">
        🔐 La gestión de pagos se conectará posteriormente mediante
        una capa segura de servidor.
      </div>
    </section>
  `;
}

function renderContacto() {
  return `
    ${moduleTemplate(
      "⌖",
      "Contacto",
      "Encuentra y contacta con RoXThal Art Design.",
      [
        {
          icon: "←",
          label: "Volver",
          route: "mas",
          secondary: true
        }
      ]
    )}

    <section class="section">

      <div class="list">

        <div class="list-item">
          <div class="list-icon">⌖</div>

          <div class="list-content">
            <strong>Ubicación</strong>
            <small>Lisandro de la Torre 880 · San Antonio de Padua</small>
          </div>
        </div>

        <div class="list-item">
          <div class="list-icon">✉</div>

          <div class="list-content">
            <strong>Correo</strong>
            <small>roxthal@hotmail.com</small>
          </div>
        </div>

        <div class="list-item">
          <div class="list-icon">◎</div>

          <div class="list-content">
            <strong>Instagram</strong>
            <small>@roxthalartdesign</small>
          </div>
        </div>

      </div>

    </section>
  `;
}

function renderAdmin() {
  return `
    ${moduleTemplate(
      "⚙",
      "Administración",
      "Panel preparado para la futura administración centralizada.",
      [
        {
          icon: "←",
          label: "Volver",
          route: "mas",
          secondary: true
        }
      ]
    )}

    <section class="section">

      <div class="grid">

        <article class="card">
          <div class="emoji">👥</div>
          <h3>Alumnos</h3>
          <p>Gestión futura de alumnos.</p>
        </article>

        <article class="card">
          <div class="emoji">📅</div>
          <h3>Reservas</h3>
          <p>Gestión futura de reservas.</p>
        </article>

        <article class="card">
          <div class="emoji">💳</div>
          <h3>Pagos</h3>
          <p>Control futuro de pagos.</p>
        </article>

        <article class="card">
          <div class="emoji">🖼️</div>
          <h3>Contenido</h3>
          <p>Gestión futura de imágenes y vídeos.</p>
        </article>

      </div>

    </section>
  `;
}

function renderMas() {
  return `
    ${moduleTemplate(
      "•••",
      "Más",
      "Accede a las herramientas y sistemas complementarios de RoXThal.",
      [
        {
          icon: "←",
          label: "Volver al inicio",
          route: "inicio",
          secondary: true
        }
      ]
    )}

    <section class="section">

      <div class="drawer">

        <button
          class="drawer-button"
          type="button"
          data-route="galeria"
        >
          <span class="drawer-icon">▤</span>

          <span class="drawer-text">
            <strong>Galería</strong>
            <small>Trabajos y contenido visual.</small>
          </span>
        </button>

        <button
          class="drawer-button"
          type="button"
          data-route="radio"
        >
          <span class="drawer-icon">◉</span>

          <span class="drawer-text">
            <strong>Radio</strong>
            <small>Espacio multimedia.</small>
          </span>
        </button>

        <button
          class="drawer-button"
          type="button"
          data-route="ia"
        >
          <span class="drawer-icon">✧</span>

          <span class="drawer-text">
            <strong>RoXThal IA</strong>
            <small>Asistente artístico.</small>
          </span>
        </button>

        <button
          class="drawer-button"
          type="button"
          data-route="sorteo"
        >
          <span class="drawer-icon">★</span>

          <span class="drawer-text">
            <strong>Sorteo</strong>
            <small>Participación y premios.</small>
          </span>
        </button>

        <button
          class="drawer-button"
          type="button"
          data-route="resenas"
        >
          <span class="drawer-icon">♡</span>

          <span class="drawer-text">
            <strong>Reseñas</strong>
            <small>Opiniones de la comunidad.</small>
          </span>
        </button>

        <button
          class="drawer-button"
          type="button"
          data-route="pagos"
        >
          <span class="drawer-icon">€</span>

          <span class="drawer-text">
            <strong>Pagos</strong>
            <small>Gestión económica.</small>
          </span>
        </button>

        <button
          class="drawer-button"
          type="button"
          data-route="contacto"
        >
          <span class="drawer-icon">⌖</span>

          <span class="drawer-text">
            <strong>Contacto</strong>
            <small>Ubicación y contacto.</small>
          </span>
        </button>

        <button
          class="drawer-button"
          type="button"
          data-route="admin"
        >
          <span class="drawer-icon">⚙</span>

          <span class="drawer-text">
            <strong>Administración</strong>
            <small>Panel de gestión.</small>
          </span>
        </button>

      </div>

    </section>
  `;
}

function renderRoute(route) {
  switch (route) {
    case "arte":
      return renderArte();

    case "tatuajes":
      return renderTatuajes();

    case "formacion":
      return renderFormacion();

    case "galeria":
      return renderGaleria();

    case "radio":
      return renderRadio();

    case "ia":
      return renderIA();

    case "sorteo":
      return renderSorteo();

    case "resenas":
      return renderResenas();

    case "pagos":
      return renderPagos();

    case "contacto":
      return renderContacto();

    case "admin":
      return renderAdmin();

    case "mas":
      return renderMas();

    case "inicio":
    default:
      return renderInicio();
  }
}

function navigate(route) {
  const safeRoute = ROUTES[route] ? route : "inicio";

  app.innerHTML = renderRoute(safeRoute);

  setActiveNav(safeRoute);

  document.title =
    safeRoute === "inicio"
      ? "RoXThal Art Design"
      : `RoXThal · ${ROUTES[safeRoute].title}`;

  history.replaceState(
    { route: safeRoute },
    "",
    `#${safeRoute}`
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function getInitialRoute() {
  const route = window.location.hash.replace("#", "").trim();

  return ROUTES[route]
    ? route
    : "inicio";
}

function initTheme() {
  const savedTheme = localStorage.getItem("roxthal-theme");

  if (savedTheme === "light") {
    document.body.classList.add("light");
  }

  updateThemeButton();
}

function updateThemeButton() {
  if (!themeToggle) return;

  const light = document.body.classList.contains("light");

  themeToggle.textContent = light ? "☀" : "◐";

  themeToggle.setAttribute(
    "aria-label",
    light
      ? "Cambiar a tema oscuro"
      : "Cambiar a tema claro"
  );
}

function toggleTheme() {
  document.body.classList.toggle("light");

  const light =
    document.body.classList.contains("light");

  localStorage.setItem(
    "roxthal-theme",
    light ? "light" : "dark"
  );

  updateThemeButton();
}

document.addEventListener("click", event => {
  const routeButton =
    event.target.closest("[data-route]");

  if (!routeButton) return;

  const route =
    routeButton.dataset.route;

  if (ROUTES[route]) {
    navigate(route);
  }
});

if (themeToggle) {
  themeToggle.addEventListener(
    "click",
    toggleTheme
  );
}

if (brandButton) {
  brandButton.addEventListener(
    "click",
    () => navigate("inicio")
  );
}

window.addEventListener(
  "popstate",
  () => navigate(getInitialRoute())
);

window.addEventListener(
  "hashchange",
  () => navigate(getInitialRoute())
);

initTheme();
navigate(getInitialRoute());
