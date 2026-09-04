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

      <div class="eyebrow">
        ROXTHAL ART DESIGN · ATELIER
      </div>

      <h1>
        Arte que<br>
        deja huella.
      </h1>

      <p>
        Un espacio creativo dedicado al arte,
        los tatuajes y la formación artística.
        Descubre nuestros servicios, cursos,
        trabajos y proyectos.
      </p>

      <div class="actions">

        <button
          class="btn"
          type="button"
          data-route="tatuajes"
        >
          ✎ Tatuajes
        </button>

        <button
          class="btn secondary"
          type="button"
          data-route="formacion"
        >
          ▣ Formación
        </button>

      </div>

    </section>

    <section class="section">

      <div class="section-head">
        <div>
          <h2>RoXThal</h2>

          <p>
            Arte, creación y aprendizaje.
          </p>
        </div>
      </div>

      <div class="grid">

        <article class="card">

          <div class="emoji">🎨</div>

          <h3>Arte</h3>

          <p>
            Dibujo, pintura y desarrollo
            de la creatividad artística.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="arte"
          >
            Explorar
          </button>

        </article>

        <article class="card">

          <div class="emoji">🖋️</div>

          <h3>Tatuajes</h3>

          <p>
            Diseño, estilos e inspiración
            para proyectos de tatuaje.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="tatuajes"
          >
            Explorar
          </button>

        </article>

        <article class="card">

          <div class="emoji">📚</div>

          <h3>Formación</h3>

          <p>
            Cursos y talleres para aprender,
            practicar y evolucionar.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="formacion"
          >
            Ver formación
          </button>

        </article>

        <article class="card">

          <div class="emoji">🖼️</div>

          <h3>Galería</h3>

          <p>
            Próximamente reuniremos aquí
            los trabajos y proyectos de RoXThal.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="galeria"
          >
            Ver galería
          </button>

        </article>

      </div>

    </section>

    <section class="section">

      <div class="module-hero">

        <div class="module-icon">
          ✦
        </div>

        <h2>
          Una nueva etapa
        </h2>

        <p>
          RoXThal Art Design V2 está siendo
          construida como una plataforma modular,
          rápida y preparada para crecer sin
          depender del antiguo sistema.
        </p>

        <div class="actions">

          <button
            class="btn"
            type="button"
            data-route="arte"
          >
            🎨 Descubrir RoXThal
          </button>

          <button
            class="btn secondary"
            type="button"
            data-route="mas"
          >
            ••• Más
          </button>

        </div>

      </div>

    </section>

    <section class="section">

      <div class="notice">
        ♻️ Creatividad, diversidad y compromiso
        con una forma de hacer arte diferente.
      </div>

    </section>

    <p class="footer-note">
      RoXThal Art Design · Arte · Tatuajes · Formación
    </p>
  `;
}

function renderArte() {
  return `
    <section class="module-hero">

      <div class="module-icon">🎨</div>

      <div class="eyebrow">
        ROXTHAL ART DESIGN
      </div>

      <h2>
        Arte sin límites.
      </h2>

      <p>
        Un espacio para descubrir, aprender y
        desarrollar tu propia identidad artística.
      </p>

      <div class="actions">

        <button
          class="btn"
          type="button"
          data-route="formacion"
        >
          📚 Formación
        </button>

        <button
          class="btn secondary"
          type="button"
          data-route="galeria"
        >
          🖼️ Galería
        </button>

      </div>

    </section>

    <section class="section">

      <div class="section-head">
        <div>
          <h2>Disciplinas</h2>
          <p>
            Diferentes caminos para desarrollar
            tu creatividad.
          </p>
        </div>
      </div>

      <div class="grid">

        <article class="card">

          <div class="emoji">✏️</div>

          <h3>Dibujo</h3>

          <p>
            Línea, proporción, volumen, composición
            y desarrollo de una base sólida.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="formacion"
          >
            Aprender
          </button>

        </article>

        <article class="card">

          <div class="emoji">🖌️</div>

          <h3>Pintura</h3>

          <p>
            Color, luz, textura y composición para
            construir obras con personalidad.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="formacion"
          >
            Aprender
          </button>

        </article>

        <article class="card">

          <div class="emoji">🖋️</div>

          <h3>Tattoo Art</h3>

          <p>
            El dibujo aplicado al tatuaje:
            composición, estilos e identidad visual.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="tatuajes"
          >
            Explorar
          </button>

        </article>

        <article class="card">

          <div class="emoji">♻️</div>

          <h3>Creación</h3>

          <p>
            Experimentación, reutilización y nuevas
            formas de convertir ideas en arte.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="galeria"
          >
            Ver proyectos
          </button>

        </article>

      </div>

    </section>

    <section class="section">

      <div class="section-head">
        <div>
          <h2>Explora</h2>
          <p>
            Herramientas y espacios de inspiración.
          </p>
        </div>
      </div>

      <div class="list">

        <button
          class="list-item"
          type="button"
          data-route="galeria"
        >
          <span class="list-icon">🖼️</span>

          <span class="list-content">
            <strong>Galería de obras</strong>
            <small>
              Trabajos, proyectos y futuras colecciones.
            </small>
          </span>

          <span class="badge">VER</span>
        </button>

        <button
          class="list-item"
          type="button"
          data-route="tatuajes"
        >
          <span class="list-icon">🔎</span>

          <span class="list-content">
            <strong>Inspiración para tatuajes</strong>
            <small>
              Descubre estilos e ideas para nuevos proyectos.
            </small>
          </span>

          <span class="badge">EXPLORAR</span>
        </button>

        <button
          class="list-item"
          type="button"
          data-route="formacion"
        >
          <span class="list-icon">📚</span>

          <span class="list-content">
            <strong>Aprende con RoXThal</strong>
            <small>
              Cursos y formación artística.
            </small>
          </span>

          <span class="badge">CURSOS</span>
        </button>

      </div>

    </section>

    <section class="section">

      <div class="notice">
        ✦ La V2 está preparada para incorporar
        progresivamente obras, colecciones,
        imágenes y contenido artístico sin
        depender del antiguo sistema.
      </div>

    </section>

    <p class="footer-note">
      RoXThal Art Design · Dibujo · Pintura · Tattoo Art
    </p>
  `;
}


function renderTatuajes() {
  return `
    <section class="module-hero">

      <div class="module-icon">🖋️</div>

      <div class="eyebrow">
        ROXTHAL TATTOO STUDIO
      </div>

      <h2>
        Tatuajes con identidad.
      </h2>

      <p>
        Diseño, composición y expresión corporal
        desarrollados de forma personalizada.
        Cada proyecto nace de una idea y se
        convierte en una pieza única.
      </p>

      <div class="actions">

        <button
          class="btn secondary"
          type="button"
          data-route="inicio"
        >
          ← Volver
        </button>

        <button
          class="btn"
          type="button"
          data-route="contacto"
        >
          📍 Contactar
        </button>

      </div>

    </section>

    <section class="section">

      <div class="section-head">

        <div>
          <h2>
            Universo del tatuaje
          </h2>

          <p>
            Todo lo relacionado con el tatuaje
            permanece separado del área de
            dibujo y pintura.
          </p>
        </div>

      </div>

      <div class="grid">

        <article class="card">

          <div class="emoji">🖋️</div>

          <h3>
            Diseño personalizado
          </h3>

          <p>
            Desarrollo de ideas para crear
            diseños exclusivos adaptados
            a cada proyecto.
          </p>

        </article>

        <article class="card">

          <div class="emoji">🧭</div>

          <h3>
            Estilos de tatuaje
          </h3>

          <p>
            Explora diferentes lenguajes,
            composiciones y posibilidades
            dentro del mundo del tattoo.
          </p>

        </article>

        <article class="card">

          <div class="emoji">🔎</div>

          <h3>
            Inspiración tattoo
          </h3>

          <p>
            Referencias e ideas orientadas
            exclusivamente a proyectos
            de tatuaje.
          </p>

        </article>

        <article class="card">

          <div class="emoji">🖼️</div>

          <h3>
            Galería tattoo
          </h3>

          <p>
            Espacio reservado para una
            futura colección exclusiva
            de tatuajes realizados en
            RoXThal.
          </p>

        </article>

      </div>

    </section>

    <section class="section">

      <div class="section-head">

        <div>
          <h2>
            Formación tattoo
          </h2>

          <p>
            El aprendizaje del tatuaje tendrá
            su propio espacio independiente.
          </p>
        </div>

      </div>

      <div class="list">

        <div class="list-item">

          <div class="list-icon">
            📚
          </div>

          <div class="list-content">

            <strong>
              Iniciación al tatuaje
            </strong>

            <small>
              Curso dedicado específicamente
              al aprendizaje del tatuaje.
            </small>

          </div>

          <span class="badge">
            TATTOO
          </span>

        </div>

        <div class="list-item">

          <div class="list-icon">
            🧠
          </div>

          <div class="list-content">

            <strong>
              Diseño aplicado al tattoo
            </strong>

            <small>
              Composición y preparación de
              ideas destinadas al tatuaje.
            </small>

          </div>

          <span class="badge">
            TATTOO
          </span>

        </div>

      </div>

    </section>

    <section class="section">

      <div class="card">

        <div class="emoji">
          ✦
        </div>

        <h3>
          RoXThal IA · Tattoo
        </h3>

        <p>
          Futuro asistente especializado
          en inspiración, conceptos y
          desarrollo de ideas para tatuajes.
        </p>

        <button
          class="btn secondary"
          type="button"
          data-route="ia"
        >
          Abrir RoXThal IA
        </button>

      </div>

    </section>

    <section class="section">

      <div class="notice">
        🖋️ Área exclusiva de tatuajes.
        El contenido de dibujo y pintura
        pertenece al área Arte y no se
        mezclará con este módulo.
      </div>

    </section>

    <p class="footer-note">
      RoXThal Tattoo Studio · Diseño · Tatuajes · Formación Tattoo
    </p>
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
    <section class="module-hero">

      <div class="module-icon">🖼️</div>

      <div class="eyebrow">
        ROXTHAL ART DESIGN
      </div>

      <h2>
        Galería de arte
      </h2>

      <p>
        Un espacio dedicado a dibujos, pinturas,
        obras originales y proyectos creativos
        desarrollados en RoXThal.
      </p>

      <div class="actions">

        <button
          class="btn"
          type="button"
          data-route="arte"
        >
          🎨 Volver a Arte
        </button>

        <button
          class="btn secondary"
          type="button"
          data-route="formacion"
        >
          📚 Formación
        </button>

      </div>

    </section>

    <section class="section">

      <div class="section-head">
        <div>
          <h2>Obras</h2>

          <p>
            Próximamente podrás explorar
            nuestras colecciones.
          </p>
        </div>
      </div>

      <div class="grid">

        <article class="card">

          <div class="emoji">✏️</div>

          <h3>Dibujos</h3>

          <p>
            Estudios, bocetos, ilustraciones
            y trabajos de dibujo.
          </p>

        </article>

        <article class="card">

          <div class="emoji">🖌️</div>

          <h3>Pinturas</h3>

          <p>
            Obras realizadas mediante diferentes
            técnicas y materiales.
          </p>

        </article>

        <article class="card">

          <div class="emoji">🖼️</div>

          <h3>Obras originales</h3>

          <p>
            Piezas artísticas creadas en
            RoXThal Art Design.
          </p>

        </article>

        <article class="card">

          <div class="emoji">🧪</div>

          <h3>Proyectos</h3>

          <p>
            Experimentación, procesos y
            proyectos artísticos especiales.
          </p>

        </article>

      </div>

    </section>

    <section class="section">

      <div class="notice">
        ✨ La galería se conectará posteriormente
        con el nuevo sistema de almacenamiento
        para incorporar imágenes y vídeos sin
        depender de Supabase.
      </div>

    </section>

    <p class="footer-note">
      RoXThal Art Design · Galería de Arte
    </p>
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

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .then(() => {
        console.log("RoXThal V2 · Service Worker activo");
      })
      .catch(error => {
        console.warn(
          "RoXThal V2 · No se pudo registrar el Service Worker:",
          error
        );
      });
  });
}



