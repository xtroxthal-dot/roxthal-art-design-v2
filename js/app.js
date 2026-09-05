import { renderGallery } from "./galeria.js";
const app = document.getElementById("app");
const themeToggle = document.getElementById("themeToggle");
const navItems = [...document.querySelectorAll(".nav-item")];
const brandButton = document.querySelector(".brand");

const ROUTES = {
  inicio: { title: "Inicio", icon: "⌂" },
  arte: { title: "Arte", icon: "✦" },
  tatuajes: { title: "Tatuajes", icon: "✎" },
  formacion: { title: "Formación", icon: "▣" },
  "formacion-arte": { title: "Formación artística", icon: "🎨" },
  "formacion-tattoo": { title: "Formación tattoo", icon: "🖋️" },
  galeria: { title: "Galería", icon: "▤" },
  radio: { title: "Radio", icon: "◉" },
  ia: { title: "RoXThal IA", icon: "✧" },
  sorteo: { title: "Sorteo", icon: "★" },
  resenas: { title: "Reseñas", icon: "♡" },
  pagos: { title: "Pagos", icon: "€" },
  contacto: { title: "Contacto", icon: "⌖" },
  admin: { title: "Administración", icon: "⚙" },
  mas: { title: "Más", icon: "•••" }
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
  const activeRoute =
    route === "formacion-arte" || route === "formacion-tattoo"
      ? "formacion"
      : route;

  navItems.forEach(button => {
    const active = button.dataset.route === activeRoute;

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
      <div class="module-icon">${escapeHTML(icon)}</div>
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
    <section class="hero hero-home">

      <div class="hero-home-content">

        <div class="eyebrow">
          ROXTHAL ART DESIGN · ATELIER
        </div>

        <h1>
          Arte que<br>
          <span>deja huella.</span>
        </h1>

        <p class="hero-lead">
          Arte, tatuajes y formación artística
          en un espacio creativo pensado para
          desarrollar ideas, aprender y crear.
        </p>

        <div class="actions">

          <button
            class="btn"
            type="button"
            data-route="arte"
          >
            🎨 Explorar arte
          </button>

          <button
            class="btn secondary"
            type="button"
            data-route="tatuajes"
          >
            🖋️ Ver tatuajes
          </button>

        </div>

      </div>

      <div class="hero-home-signature">
        <span>ROXTHAL</span>
        <small>ART · TATTOO · DESIGN</small>
      </div>

    </section>


    <section class="section home-intro">

      <div class="section-head">
        <div>
          <div class="eyebrow">EL UNIVERSO ROXTHAL</div>

          <h2>
            Crear. Aprender.<br>
            Transformar.
          </h2>

          <p>
            Cuatro espacios, una misma identidad
            artística.
          </p>
        </div>
      </div>

      <div class="grid home-grid">

        <article class="card home-card">

          <div class="emoji">🎨</div>

          <h3>Arte</h3>

          <p>
            Dibujo, pintura, ilustración y
            desarrollo de la creatividad.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="arte"
          >
            Explorar
          </button>

        </article>


        <article class="card home-card">

          <div class="emoji">🖋️</div>

          <h3>Tatuajes</h3>

          <p>
            Diseños personalizados, estilos,
            inspiración y proyectos tattoo.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="tatuajes"
          >
            Explorar
          </button>

        </article>


        <article class="card home-card">

          <div class="emoji">📚</div>

          <h3>Formación</h3>

          <p>
            Aprendizaje artístico y formación
            específica de tatuaje.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="formacion"
          >
            Ver formación
          </button>

        </article>


        <article class="card home-card">

          <div class="emoji">🖼️</div>

          <h3>Galería</h3>

          <p>
            Obras, proyectos y colecciones
            que forman parte del universo RoXThal.
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

      <div class="home-feature">

        <div class="home-feature-icon">
          ✦
        </div>

        <div class="home-feature-content">

          <div class="eyebrow">
            ROXTHAL ART DESIGN
          </div>

          <h2>
            Una plataforma creada
            para el arte.
          </h2>

          <p>
            Descubre nuestros proyectos, cursos,
            tatuajes y herramientas creativas
            desde un único espacio.
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
              data-route="mas"
            >
              ••• Más opciones
            </button>

          </div>

        </div>

      </div>

    </section>


    <section class="section home-values">

      <div class="home-values-card">

        <div class="home-value">

          <span>♻️</span>

          <div>
            <strong>Crear diferente</strong>
            <small>
              Creatividad y compromiso con
              nuevas formas de hacer arte.
            </small>
          </div>

        </div>


        <div class="home-value">

          <span>✦</span>

          <div>
            <strong>Identidad propia</strong>
            <small>
              Cada proyecto nace de una idea
              y desarrolla su propio lenguaje.
            </small>
          </div>

        </div>


        <div class="home-value">

          <span>◎</span>

          <div>
            <strong>Un espacio abierto</strong>
            <small>
              Arte, aprendizaje y expresión
              para personas diferentes.
            </small>
          </div>

        </div>

      </div>

    </section>


    <section class="section home-final">

      <div class="notice">
        <strong>RoXThal Art Design</strong>
        <br>
        Arte · Tatuajes · Formación · Diseño
      </div>

    </section>


    <p class="footer-note">
      RoXThal Art Design · San Antonio de Padua
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
        Un espacio dedicado exclusivamente
        al dibujo, la pintura, la ilustración
        y la creación artística.
      </p>

      <div class="actions">

        <button
          class="btn"
          type="button"
          data-route="formacion-arte"
        >
          📚 Formación artística
        </button>

        <button
          class="btn secondary"
          type="button"
          data-route="galeria"
        >
          🖼️ Galería de arte
        </button>

      </div>
    </section>

    <section class="section">

      <div class="section-head">
        <div>
          <h2>Disciplinas</h2>
          <p>
            El área artística de RoXThal.
          </p>
        </div>
      </div>

      <div class="grid">

        <article class="card">
          <div class="emoji">✏️</div>

          <h3>Dibujo</h3>

          <p>
            Línea, proporción, volumen,
            composición y desarrollo de
            una base sólida.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="formacion-arte"
          >
            Aprender
          </button>
        </article>

        <article class="card">
          <div class="emoji">🖌️</div>

          <h3>Pintura</h3>

          <p>
            Color, luz, textura y composición
            para construir obras con personalidad.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="formacion-arte"
          >
            Aprender
          </button>
        </article>

        <article class="card">
          <div class="emoji">🖍️</div>

          <h3>Ilustración</h3>

          <p>
            Desarrollo de imágenes, ideas,
            personajes y lenguaje visual.
          </p>
        </article>

        <article class="card">
          <div class="emoji">♻️</div>

          <h3>Creación</h3>

          <p>
            Experimentación, reutilización y
            nuevas formas de convertir ideas
            en arte.
          </p>
        </article>

      </div>
    </section>

    <section class="section">

      <div class="section-head">
        <div>
          <h2>Explora el área artística</h2>
          <p>
            Todo el contenido de esta sección
            pertenece al universo del arte.
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
            <strong>Galería de arte</strong>
            <small>
              Obras, proyectos y futuras colecciones.
            </small>
          </span>

          <span class="badge">VER</span>
        </button>

        <button
          class="list-item"
          type="button"
          data-route="formacion-arte"
        >
          <span class="list-icon">📚</span>

          <span class="list-content">
            <strong>Formación artística</strong>
            <small>
              Dibujo, pintura e ilustración.
            </small>
          </span>

          <span class="badge">CURSOS</span>
        </button>

      </div>
    </section>

    <section class="section">
      <div class="notice">
        ✦ Esta área no mezcla contenido de
        tatuajes con dibujo y pintura.
      </div>
    </section>

    <p class="footer-note">
      RoXThal Art Design · Dibujo · Pintura · Ilustración
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
        Diseño, composición y expresión
        corporal desarrollados de forma
        personalizada. Cada proyecto nace
        de una idea y se convierte en una
        pieza única.
      </p>

      <div class="actions">

        <button
          class="btn secondary"
          type="button"
          data-route="inicio"
        >
          ← Inicio
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
          <h2>Universo del tatuaje</h2>

          <p>
            Todo el contenido de tatuaje
            permanece separado del área
            de dibujo y pintura.
          </p>
        </div>

      </div>

      <div class="grid">

        <article class="card">
          <div class="emoji">🖋️</div>

          <h3>Diseño personalizado</h3>

          <p>
            Desarrollo de ideas para crear
            diseños exclusivos adaptados
            a cada proyecto.
          </p>
        </article>

        <article class="card">
          <div class="emoji">🧭</div>

          <h3>Estilos de tatuaje</h3>

          <p>
            Explora diferentes lenguajes,
            composiciones y posibilidades
            dentro del mundo del tattoo.
          </p>
        </article>

        <article class="card">
          <div class="emoji">🔎</div>

          <h3>Inspiración tattoo</h3>

          <p>
            Referencias e ideas orientadas
            exclusivamente a proyectos
            de tatuaje.
          </p>
        </article>

        <article class="card">
          <div class="emoji">🖼️</div>

          <h3>Galería tattoo</h3>

          <p>
            Espacio reservado para la
            futura colección exclusiva
            de tatuajes de RoXThal.
          </p>
        </article>

      </div>
    </section>

    <section class="section">

      <div class="section-head">

        <div>
          <h2>Formación tattoo</h2>

          <p>
            El aprendizaje del tatuaje tendrá
            su propio espacio independiente.
          </p>
        </div>

      </div>

      <div class="list">

        <button
          class="list-item"
          type="button"
          data-route="formacion-tattoo"
        >
          <span class="list-icon">📚</span>

          <span class="list-content">
            <strong>Curso de iniciación al tatuaje</strong>
            <small>
              Formación específica de tatuaje.
            </small>
          </span>

          <span class="badge">VER</span>
        </button>

        <button
          class="list-item"
          type="button"
          data-route="ia"
        >
          <span class="list-icon">✧</span>

          <span class="list-content">
            <strong>RoXThal IA · Tattoo</strong>
            <small>
              Asistente orientado a ideas y
              proyectos de tatuaje.
            </small>
          </span>

          <span class="badge">IA</span>
        </button>

      </div>
    </section>

    <section class="section">
      <div class="notice">
        ✦ El área tattoo permanece independiente
        del contenido de arte, dibujo y pintura.
      </div>
    </section>

    <p class="footer-note">
      RoXThal Tattoo Studio · Diseño · Estilos · Tattoo
    </p>
  `;
}

function renderFormacion() {
  return `
    <section class="module-hero">

      <div class="module-icon">📚</div>

      <div class="eyebrow">
        ROXTHAL FORMACIÓN
      </div>

      <h2>
        Aprende. Practica. Evoluciona.
      </h2>

      <p>
        La formación de RoXThal está
        organizada en dos áreas independientes:
        formación artística y formación tattoo.
      </p>

    </section>

    <section class="section">

      <div class="grid">

        <article class="card">

          <div class="emoji">🎨</div>

          <h3>Formación artística</h3>

          <p>
            Dibujo, pintura, ilustración,
            composición y desarrollo creativo.
          </p>

          <button
            class="btn"
            type="button"
            data-route="formacion-arte"
          >
            Entrar
          </button>

        </article>

        <article class="card">

          <div class="emoji">🖋️</div>

          <h3>Formación tattoo</h3>

          <p>
            Formación específica para
            iniciarse y desarrollarse
            en el mundo del tatuaje.
          </p>

          <button
            class="btn"
            type="button"
            data-route="formacion-tattoo"
          >
            Entrar
          </button>

        </article>

      </div>
    </section>

    <section class="section">

      <div class="notice">
        🔒 Las dos áreas formativas están
        separadas para mantener una estructura
        clara y profesional.
      </div>

    </section>

    <p class="footer-note">
      RoXThal Formación · Arte + Tattoo
    </p>
  `;
}

function renderFormacionArte() {
  return `
    <section class="module-hero">

      <div class="module-icon">🎨</div>

      <div class="eyebrow">
        FORMACIÓN ARTÍSTICA
      </div>

      <h2>
        Dibujo y pintura
      </h2>

      <p>
        Formación artística dedicada al
        desarrollo técnico y creativo.
      </p>

      <div class="actions">

        <button
          class="btn secondary"
          type="button"
          data-route="formacion"
        >
          ← Formación
        </button>

        <button
          class="btn"
          type="button"
          data-route="arte"
        >
          🎨 Área de arte
        </button>

      </div>
    </section>

    <section class="section">

      <div class="grid">

        <article class="card">
          <div class="emoji">✏️</div>

          <h3>Dibujo</h3>

          <p>
            Fundamentos, observación,
            proporción, volumen y composición.
          </p>
        </article>

        <article class="card">
          <div class="emoji">🖌️</div>

          <h3>Pintura</h3>

          <p>
            Color, luz, textura y
            construcción de una obra.
          </p>
        </article>

        <article class="card">
          <div class="emoji">🖍️</div>

          <h3>Ilustración</h3>

          <p>
            Desarrollo de lenguaje visual,
            ideas y proyectos personales.
          </p>
        </article>

      </div>
    </section>

    <section class="section">

      <div class="notice">
        🎨 Formación exclusivamente artística.
        No incluye formación de tatuaje.
      </div>

    </section>

    <p class="footer-note">
      RoXThal Formación Artística
    </p>
  `;
}

function renderFormacionTattoo() {
  return `
    <section class="module-hero">

      <div class="module-icon">🖋️</div>

      <div class="eyebrow">
        FORMACIÓN TATTOO
      </div>

      <h2>
        Curso de iniciación al tatuaje
      </h2>

      <p>
        Formación específica para comenzar
        a desarrollar conocimientos dentro
        del mundo del tatuaje.
      </p>

      <div class="actions">

        <button
          class="btn secondary"
          type="button"
          data-route="formacion"
        >
          ← Formación
        </button>

        <button
          class="btn"
          type="button"
          data-route="tatuajes"
        >
          🖋️ Área tattoo
        </button>

      </div>
    </section>

    <section class="section">

      <div class="grid">

        <article class="card">
          <div class="emoji">📖</div>

          <h3>Iniciación</h3>

          <p>
            Introducción progresiva al
            mundo del tatuaje.
          </p>
        </article>

        <article class="card">
          <div class="emoji">🖋️</div>

          <h3>Diseño tattoo</h3>

          <p>
            Preparación de diseños y
            conceptos orientados al tatuaje.
          </p>
        </article>

        <article class="card">
          <div class="emoji">🎯</div>

          <h3>Desarrollo</h3>

          <p>
            Construcción de una base para
            continuar evolucionando.
          </p>
        </article>

      </div>
    </section>

    <section class="section">

      <div class="notice">
        🖋️ Formación exclusivamente de tatuaje.
        No incluye el curso general de dibujo
        y pintura.
      </div>

    </section>

    <p class="footer-note">
      RoXThal Formación Tattoo
    </p>
  `;
}


function renderGaleria() {
  return `
    <section class="section">
      ${renderGallery("arte")}
    </section>

    <section class="section">
      ${renderGallery("tatuajes")}
    </section>

    <p class="footer-note">
      RoXThal Art Design · Galería
    </p>
  `;
}

function renderRadio() {
  return moduleTemplate(
    "◉",
    "RoXThal Radio",
    "Espacio preparado para integrar progresivamente la radio y contenidos de audio de RoXThal.",
    [
      {
        route: "inicio",
        label: "Volver",
        icon: "←",
        secondary: true
      }
    ]
  );
}

function renderIA() {
  return `
    <section class="module-hero">

      <div class="module-icon">✧</div>

      <div class="eyebrow">
        ROXTHAL IA
      </div>

      <h2>
        Asistente creativo.
      </h2>

      <p>
        Espacio preparado para integrar
        progresivamente el asistente de
        inteligencia artificial de RoXThal.
      </p>

      <div class="actions">

        <button
          class="btn secondary"
          type="button"
          data-route="tatuajes"
        >
          ← Tattoo
        </button>

      </div>

    </section>

    <section class="section">

      <div class="notice">
        ✧ La conexión con el servicio IA
        se incorporará de forma independiente
        sin afectar al resto de la aplicación.
      </div>

    </section>

    <p class="footer-note">
      RoXThal IA
    </p>
  `;
}

function renderSorteo() {
  return moduleTemplate(
    "★",
    "Sorteo RoXThal",
    "Espacio preparado para futuros sorteos y promociones de RoXThal.",
    [
      {
        route: "inicio",
        label: "Volver",
        icon: "←",
        secondary: true
      }
    ]
  );
}

function renderResenas() {
  return moduleTemplate(
    "♡",
    "Reseñas",
    "Espacio preparado para mostrar las opiniones y experiencias de la comunidad RoXThal.",
    [
      {
        route: "inicio",
        label: "Volver",
        icon: "←",
        secondary: true
      }
    ]
  );
}

function renderPagos() {
  return moduleTemplate(
    "€",
    "Pagos",
    "Espacio preparado para integrar los sistemas de pago y reservas de RoXThal.",
    [
      {
        route: "contacto",
        label: "Contacto",
        icon: "⌖"
      },
      {
        route: "inicio",
        label: "Volver",
        icon: "←",
        secondary: true
      }
    ]
  );
}

function renderContacto() {
  return `
    <section class="module-hero">

      <div class="module-icon">⌖</div>

      <div class="eyebrow">
        ROXTHAL ART DESIGN
      </div>

      <h2>
        Contacto
      </h2>

      <p>
        Estamos en Lisandro de la Torre 880,
        San Antonio de Padua, Buenos Aires.
      </p>

      <div class="actions">

        <a
          class="btn"
          href="mailto:roxthal@hotmail.com"
        >
          ✉️ Email
        </a>

        <a
          class="btn secondary"
          href="https://www.instagram.com/roxthalartdesign/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📷 Instagram
        </a>

      </div>

    </section>

    <section class="section">

      <div class="notice">
        📍 RoXThal Art Design · San Antonio
        de Padua · Buenos Aires
      </div>

    </section>

    <p class="footer-note">
      RoXThal Art Design
    </p>
  `;
}

function renderAdmin() {
  return `
    <section class="module-hero">

      <div class="module-icon">⚙</div>

      <div class="eyebrow">
        ROXTHAL ADMIN
      </div>

      <h2>
        Administración
      </h2>

      <p>
        Panel reservado para las futuras
        herramientas administrativas de
        RoXThal Art Design V2.
      </p>

    </section>

    <section class="section">

      <div class="notice">
        🔒 Área administrativa independiente
        del contenido público.
      </div>

    </section>

    <p class="footer-note">
      RoXThal Administration
    </p>
  `;
}

function renderMas() {
  return `
    <section class="module-hero">

      <div class="module-icon">•••</div>

      <div class="eyebrow">
        ROXTHAL ART DESIGN
      </div>

      <h2>
        Más
      </h2>

      <p>
        Accesos adicionales de la plataforma.
      </p>

    </section>

    <section class="section">

      <div class="list">

        <button
          class="list-item"
          type="button"
          data-route="galeria"
        >
          <span class="list-icon">🖼️</span>

          <span class="list-content">
            <strong>Galería</strong>
            <small>
              Obras y colecciones.
            </small>
          </span>

          <span class="badge">VER</span>
        </button>

        <button
          class="list-item"
          type="button"
          data-route="radio"
        >
          <span class="list-icon">◉</span>

          <span class="list-content">
            <strong>Radio</strong>
            <small>
              Audio y contenidos.
            </small>
          </span>

          <span class="badge">ABRIR</span>
        </button>

        <button
          class="list-item"
          type="button"
          data-route="sorteo"
        >
          <span class="list-icon">★</span>

          <span class="list-content">
            <strong>Sorteo</strong>
            <small>
              Promociones y sorteos.
            </small>
          </span>

          <span class="badge">ABRIR</span>
        </button>

        <button
          class="list-item"
          type="button"
          data-route="resenas"
        >
          <span class="list-icon">♡</span>

          <span class="list-content">
            <strong>Reseñas</strong>
            <small>
              Opiniones de la comunidad.
            </small>
          </span>

          <span class="badge">VER</span>
        </button>

        <button
          class="list-item"
          type="button"
          data-route="pagos"
        >
          <span class="list-icon">€</span>

          <span class="list-content">
            <strong>Pagos</strong>
            <small>
              Reservas y pagos.
            </small>
          </span>

          <span class="badge">ABRIR</span>
        </button>

        <button
          class="list-item"
          type="button"
          data-route="contacto"
        >
          <span class="list-icon">⌖</span>

          <span class="list-content">
            <strong>Contacto</strong>
            <small>
              Ubicación y contacto.
            </small>
          </span>

          <span class="badge">VER</span>
        </button>

      </div>

    </section>

    <p class="footer-note">
      RoXThal Art Design
    </p>
  `;
}

function renderRoute(route) {
  switch (route) {
    case "inicio":
      return renderInicio();

    case "arte":
      return renderArte();

    case "tatuajes":
      return renderTatuajes();

    case "formacion":
      return renderFormacion();

    case "formacion-arte":
      return renderFormacionArte();

    case "formacion-tattoo":
      return renderFormacionTattoo();

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

    default:
      return renderInicio();
  }
}

function navigate(route, options = {}) {
  if (!ROUTES[route]) {
    route = "inicio";
  }

  app.innerHTML = renderRoute(route);

  setActiveNav(route);

  if (!options.skipHistory) {
    const url = `${window.location.pathname}#${route}`;
    window.history.replaceState(
      { route },
      "",
      url
    );
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function getInitialRoute() {
  const hash = window.location.hash.replace("#", "");

  if (ROUTES[hash]) {
    return hash;
  }

  return "inicio";
}

function initTheme() {
  const savedTheme = localStorage.getItem("roxthal-theme");

  if (savedTheme === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
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
  const light = document.body.classList.toggle("light");

  localStorage.setItem(
    "roxthal-theme",
    light ? "light" : "dark"
  );

  updateThemeButton();
}

document.addEventListener("click", event => {
  const target = event.target.closest("[data-route]");

  if (!target) return;

  const route = target.dataset.route;

  if (!route || !ROUTES[route]) return;

  event.preventDefault();

  navigate(route);
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
    event => {
      event.preventDefault();
      navigate("inicio");
    }
  );
}

window.addEventListener(
  "popstate",
  () => {
    navigate(
      getInitialRoute(),
      { skipHistory: true }
    );
  }
);

window.addEventListener(
  "hashchange",
  () => {
    navigate(
      getInitialRoute(),
      { skipHistory: true }
    );
  }
);

initTheme();

navigate(
  getInitialRoute(),
  { skipHistory: true }
);

if ("serviceWorker" in navigator) {
  window.addEventListener(
    "load",
    () => {
      navigator.serviceWorker.register(
        "./sw.js"
      ).catch(() => {});
    }
  );
}
