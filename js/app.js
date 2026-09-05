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
    <section class="module-hero art-hero">

      <div class="art-hero-glow"></div>

      <div class="art-hero-content">

        <div class="module-icon">🎨</div>

        <div class="eyebrow">
          ROXTHAL ART DESIGN · ATELIER
        </div>

        <h2>
          Arte<br>
          <span>sin límites.</span>
        </h2>

        <p>
          Dibujo, pintura, ilustración y creación
          artística en un espacio pensado para
          desarrollar técnica, imaginación e
          identidad propia.
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
            🖼️ Explorar galería
          </button>

        </div>

      </div>

      <div class="art-hero-signature">
        <strong>ART</strong>
        <span>DRAW · PAINT · CREATE</span>
      </div>

    </section>


    <section class="section art-disciplines">

      <div class="section-head">
        <div>
          <div class="eyebrow">DISCIPLINAS</div>

          <h2>
            El lenguaje<br>
            del arte.
          </h2>

          <p>
            Diferentes técnicas. Una misma
            búsqueda: desarrollar una identidad.
          </p>
        </div>
      </div>


      <div class="grid art-grid">

        <article class="card art-card">

          <div class="art-card-number">01</div>

          <div class="emoji">✏️</div>

          <h3>Dibujo</h3>

          <p>
            Línea, proporción, volumen,
            composición y observación para
            construir una base artística sólida.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="formacion-arte"
          >
            Aprender
          </button>

        </article>


        <article class="card art-card">

          <div class="art-card-number">02</div>

          <div class="emoji">🖌️</div>

          <h3>Pintura</h3>

          <p>
            Color, luz, textura y composición
            para transformar una idea en una
            obra con personalidad.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="formacion-arte"
          >
            Aprender
          </button>

        </article>


        <article class="card art-card">

          <div class="art-card-number">03</div>

          <div class="emoji">🖍️</div>

          <h3>Ilustración</h3>

          <p>
            Desarrollo de imágenes, conceptos,
            personajes y recursos visuales para
            encontrar un lenguaje propio.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="galeria"
          >
            Explorar
          </button>

        </article>


        <article class="card art-card">

          <div class="art-card-number">04</div>

          <div class="emoji">♻️</div>

          <h3>Creación</h3>

          <p>
            Experimentación, reutilización y
            nuevas formas de convertir materiales
            e ideas en propuestas artísticas.
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

      <div class="art-statement">

        <div class="art-statement-mark">
          ✦
        </div>

        <div>

          <div class="eyebrow">
            FILOSOFÍA ROXTHAL
          </div>

          <h2>
            La técnica sirve<br>
            a la idea.
          </h2>

          <p>
            Aprender no consiste solamente en
            dominar herramientas. Consiste en
            desarrollar una mirada propia y
            convertirla en una forma de expresión.
          </p>

        </div>

      </div>

    </section>


    <section class="section">

      <div class="section-head">

        <div>
          <div class="eyebrow">EXPLORA</div>

          <h2>
            Todo empieza<br>
            con una idea.
          </h2>

          <p>
            Accede directamente a los espacios
            relacionados con el área artística.
          </p>
        </div>

      </div>


      <div class="art-links">

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

      </div>

    </section>


    <section class="section">

      <div class="notice art-notice">
        <strong>RoXThal Art Design</strong>
        <br>
        Dibujo · Pintura · Ilustración · Creación
      </div>

    </section>


    <p class="footer-note">
      RoXThal Art Design · Área artística
    </p>
  `;
}

function renderTatuajes() {
  return `
    <section class="module-hero tattoo-hero">

      <div class="tattoo-hero-glow"></div>

      <div class="tattoo-hero-content">

        <div class="module-icon">🖋️</div>

        <div class="eyebrow">
          ROXTHAL TATTOO STUDIO
        </div>

        <h2>
          Tatuajes<br>
          <span>con identidad.</span>
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
            class="btn"
            type="button"
            data-route="contacto"
          >
            📍 Contactar
          </button>

          <button
            class="btn secondary"
            type="button"
            data-route="formacion-tattoo"
          >
            📚 Formación tattoo
          </button>

        </div>

      </div>

      <div class="tattoo-hero-signature">
        <strong>TATTOO</strong>
        <span>DESIGN · STYLE · IDENTITY</span>
      </div>

    </section>


    <section class="section tattoo-universe">

      <div class="section-head">

        <div>

          <div class="eyebrow">
            UNIVERSO TATTOO
          </div>

          <h2>
            El tatuaje<br>
            como lenguaje.
          </h2>

          <p>
            Cada pieza parte de una idea,
            encuentra su composición y desarrolla
            una identidad propia.
          </p>

        </div>

      </div>


      <div class="grid tattoo-grid">

        <article class="card tattoo-card">

          <div class="tattoo-card-number">01</div>

          <div class="emoji">🖋️</div>

          <h3>Diseño personalizado</h3>

          <p>
            Desarrollo de ideas para crear
            diseños exclusivos adaptados
            a cada proyecto.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="contacto"
          >
            Consultar
          </button>

        </article>


        <article class="card tattoo-card">

          <div class="tattoo-card-number">02</div>

          <div class="emoji">🧭</div>

          <h3>Estilos de tatuaje</h3>

          <p>
            Diferentes lenguajes, composiciones
            y posibilidades dentro del mundo
            del tattoo.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="galeria"
          >
            Explorar
          </button>

        </article>


        <article class="card tattoo-card">

          <div class="tattoo-card-number">03</div>

          <div class="emoji">🔎</div>

          <h3>Inspiración tattoo</h3>

          <p>
            Referencias e ideas orientadas
            exclusivamente a proyectos
            de tatuaje.
          </p>

          <button
            class="btn secondary"
            type="button"
            data-route="galeria"
          >
            Inspirarse
          </button>

        </article>


        <article class="card tattoo-card">

          <div class="tattoo-card-number">04</div>

          <div class="emoji">🖼️</div>

          <h3>Galería tattoo</h3>

          <p>
            Colección dedicada a los proyectos
            y trabajos tattoo de RoXThal.
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

      <div class="tattoo-statement">

        <div class="tattoo-statement-mark">
          ✦
        </div>

        <div>

          <div class="eyebrow">
            FILOSOFÍA ROXTHAL TATTOO
          </div>

          <h2>
            Una pieza única.<br>
            Una historia propia.
          </h2>

          <p>
            El objetivo no es repetir un diseño.
            Es construir una pieza que tenga
            sentido para quien la lleva.
          </p>

        </div>

      </div>

    </section>


    <section class="section">

      <div class="section-head">

        <div>

          <div class="eyebrow">
            FORMACIÓN
          </div>

          <h2>
            Aprende el oficio.
          </h2>

          <p>
            Formación específica para iniciarse
            y desarrollar conocimientos dentro
            del mundo del tatuaje.
          </p>

        </div>

      </div>


      <button
        class="tattoo-training"
        type="button"
        data-route="formacion-tattoo"
      >

        <span class="tattoo-training-icon">
          📚
        </span>

        <span class="tattoo-training-content">

          <strong>
            Curso de iniciación al tatuaje
          </strong>

          <small>
            Formación específica de tatuaje.
          </small>

        </span>

        <span class="badge">
          VER
        </span>

      </button>

    </section>


    <section class="section">

      <div class="notice tattoo-notice">

        <strong>RoXThal Tattoo Studio</strong>
        <br>

        Diseño · Estilos · Inspiración · Formación

      </div>

    </section>


    <p class="footer-note">
      RoXThal Tattoo Studio · San Antonio de Padua
    </p>
  `;
}

function renderFormacion() {
  return `
    <section class="module-hero formation-hero">

      <div class="formation-hero-glow"></div>

      <div class="formation-hero-content">

        <div class="module-icon">📚</div>

        <div class="eyebrow">
          ROXTHAL FORMACIÓN
        </div>

        <h2>
          Aprende.<br>
          <span>Desarrolla.</span>
        </h2>

        <p>
          Formación artística y formación
          tattoo reunidas en un espacio
          diseñado para aprender, practicar
          y evolucionar.
        </p>

      </div>

      <div class="formation-hero-signature">
        <strong>ROXTHAL</strong>
        <span>LEARN · CREATE · EVOLVE</span>
      </div>

    </section>


    <section class="section formation-areas">

      <div class="section-head">

        <div>

          <div class="eyebrow">
            DOS CAMINOS
          </div>

          <h2>
            Elige tu<br>
            área.
          </h2>

          <p>
            Dos espacios formativos independientes,
            con objetivos y contenidos específicos.
          </p>

        </div>

      </div>


      <div class="formation-grid">


        <article class="formation-card formation-card-art">

          <div class="formation-card-number">
            01
          </div>

          <div class="formation-card-icon">
            🎨
          </div>

          <div class="eyebrow">
            FORMACIÓN ARTÍSTICA
          </div>

          <h3>
            Dibujo.<br>
            Pintura.<br>
            Ilustración.
          </h3>

          <p>
            Desarrollo técnico y creativo
            para construir una base artística
            sólida y desarrollar un lenguaje
            propio.
          </p>

          <button
            class="btn"
            type="button"
            data-route="formacion-arte"
          >
            🎨 Entrar en arte
          </button>

        </article>


        <article class="formation-card formation-card-tattoo">

          <div class="formation-card-number">
            02
          </div>

          <div class="formation-card-icon">
            🖋️
          </div>

          <div class="eyebrow">
            FORMACIÓN TATTOO
          </div>

          <h3>
            Iniciación<br>
            al tatuaje.
          </h3>

          <p>
            Introducción progresiva al mundo
            del tatuaje, diseño tattoo y
            desarrollo de conocimientos
            específicos.
          </p>

          <button
            class="btn"
            type="button"
            data-route="formacion-tattoo"
          >
            🖋️ Entrar en tattoo
          </button>

        </article>

      </div>

    </section>


    <section class="section">

      <div class="formation-statement">

        <div class="formation-statement-mark">
          ✦
        </div>

        <div>

          <div class="eyebrow">
            FILOSOFÍA ROXTHAL
          </div>

          <h2>
            Aprender también<br>
            es crear.
          </h2>

          <p>
            La formación no consiste únicamente
            en adquirir técnica. También consiste
            en desarrollar criterio, creatividad
            e identidad propia.
          </p>

        </div>

      </div>

    </section>


    <section class="section">

      <div class="formation-process">

        <div class="section-head">

          <div>

            <div class="eyebrow">
              METODOLOGÍA
            </div>

            <h2>
              Aprende.<br>
              Practica.<br>
              Evoluciona.
            </h2>

          </div>

        </div>


        <div class="formation-steps">

          <div class="formation-step">

            <span>01</span>

            <div>
              <strong>Aprende</strong>
              <small>
                Comprende los fundamentos.
              </small>
            </div>

          </div>


          <div class="formation-step">

            <span>02</span>

            <div>
              <strong>Practica</strong>
              <small>
                Convierte la teoría en experiencia.
              </small>
            </div>

          </div>


          <div class="formation-step">

            <span>03</span>

            <div>
              <strong>Evoluciona</strong>
              <small>
                Desarrolla tu propio lenguaje.
              </small>
            </div>

          </div>

        </div>

      </div>

    </section>


    <section class="section">

      <div class="notice formation-notice">

        <strong>RoXThal Formación</strong>
        <br>

        Arte · Dibujo · Pintura · Tattoo

      </div>

    </section>


    <p class="footer-note">
      RoXThal Formación · Learn · Create · Evolve
    </p>
  `;
}

function renderFormacionArte() {
  return `
    <section class="module-hero art-school-hero">

      <div class="art-school-hero-glow"></div>
      <div class="art-school-hero-ring"></div>

      <div class="art-school-hero-content">

        <div class="module-icon">
          🎨
        </div>

        <div class="eyebrow">
          ROXTHAL ART DESIGN · ACADEMIA
        </div>

        <h2>
          Aprende a<br>
          <span>crear.</span>
        </h2>

        <p>
          Formación artística para desarrollar
          técnica, creatividad y una identidad
          propia a través del dibujo, la pintura
          y la ilustración.
        </p>

        <div class="actions">

          <button
            class="btn"
            type="button"
            data-route="formacion"
          >
            ← Formación
          </button>

          <button
            class="btn secondary"
            type="button"
            data-route="galeria"
          >
            🖼️ Ver arte
          </button>

        </div>

      </div>

      <div class="art-school-hero-signature">

        <strong>ART SCHOOL</strong>

        <span>
          DRAW · PAINT · ILLUSTRATE · CREATE
        </span>

      </div>

    </section>


    <section class="section art-school-intro">

      <div class="section-head">

        <div>

          <div class="eyebrow">
            FORMACIÓN ARTÍSTICA
          </div>

          <h2>
            Una base sólida.<br>
            Una identidad propia.
          </h2>

          <p>
            El objetivo no es simplemente aprender
            técnicas. Es comprenderlas, aplicarlas
            y utilizarlas para desarrollar una forma
            personal de crear.
          </p>

        </div>

      </div>

    </section>


    <section class="section">

      <div class="art-school-disciplines">


        <article class="art-school-discipline">

          <div class="art-school-discipline-number">
            01
          </div>

          <div class="art-school-discipline-icon">
            ✏️
          </div>

          <div class="eyebrow">
            FUNDAMENTOS
          </div>

          <h3>
            Dibujo
          </h3>

          <p>
            Línea, proporción, perspectiva,
            volumen, anatomía, observación
            y construcción de formas.
          </p>

          <div class="art-school-tags">
            <span>LÍNEA</span>
            <span>VOLUMEN</span>
            <span>PROPORCIÓN</span>
          </div>

        </article>


        <article class="art-school-discipline">

          <div class="art-school-discipline-number">
            02
          </div>

          <div class="art-school-discipline-icon">
            🖌️
          </div>

          <div class="eyebrow">
            EXPRESIÓN
          </div>

          <h3>
            Pintura
          </h3>

          <p>
            Color, luz, contraste, textura,
            composición y construcción de una
            obra con personalidad.
          </p>

          <div class="art-school-tags">
            <span>COLOR</span>
            <span>LUZ</span>
            <span>TEXTURA</span>
          </div>

        </article>


        <article class="art-school-discipline">

          <div class="art-school-discipline-number">
            03
          </div>

          <div class="art-school-discipline-icon">
            🖍️
          </div>

          <div class="eyebrow">
            LENGUAJE VISUAL
          </div>

          <h3>
            Ilustración
          </h3>

          <p>
            Ideas, personajes, narrativa visual
            y desarrollo de recursos para construir
            imágenes propias.
          </p>

          <div class="art-school-tags">
            <span>IDEA</span>
            <span>CONCEPTO</span>
            <span>ESTILO</span>
          </div>

        </article>


        <article class="art-school-discipline art-school-discipline-featured">

          <div class="art-school-discipline-number">
            04
          </div>

          <div class="art-school-discipline-icon">
            ✦
          </div>

          <div class="eyebrow">
            DESARROLLO
          </div>

          <h3>
            Creación
          </h3>

          <p>
            Composición, experimentación y
            desarrollo de proyectos para transformar
            conocimientos en lenguaje artístico.
          </p>

          <div class="art-school-tags">
            <span>CREAR</span>
            <span>EXPERIMENTAR</span>
            <span>EVOLUCIONAR</span>
          </div>

        </article>

      </div>

    </section>


    <section class="section">

      <div class="art-school-manifesto">

        <div class="art-school-manifesto-mark">
          ✦
        </div>

        <div class="art-school-manifesto-content">

          <div class="eyebrow">
            FILOSOFÍA ROXTHAL
          </div>

          <h2>
            No copies.<br>
            <span>Construye.</span>
          </h2>

          <p>
            La técnica es una herramienta.
            La creatividad es la dirección.
            La identidad es lo que convierte
            una obra en algo verdaderamente propio.
          </p>

        </div>

      </div>

    </section>


    <section class="section">

      <div class="art-school-method">

        <div class="section-head">

          <div>

            <div class="eyebrow">
              METODOLOGÍA
            </div>

            <h2>
              Del fundamento<br>
              al lenguaje propio.
            </h2>

            <p>
              Un recorrido progresivo para pasar
              de comprender las herramientas a
              utilizarlas con libertad.
            </p>

          </div>

        </div>


        <div class="art-school-method-grid">

          <div class="art-school-method-step">

            <span>01</span>

            <div class="art-school-method-icon">
              📐
            </div>

            <strong>
              Fundamentos
            </strong>

            <small>
              Comprender las bases técnicas.
            </small>

          </div>


          <div class="art-school-method-step">

            <span>02</span>

            <div class="art-school-method-icon">
              ✏️
            </div>

            <strong>
              Práctica
            </strong>

            <small>
              Aplicar lo aprendido mediante ejercicios.
            </small>

          </div>


          <div class="art-school-method-step">

            <span>03</span>

            <div class="art-school-method-icon">
              🧠
            </div>

            <strong>
              Criterio
            </strong>

            <small>
              Aprender a tomar decisiones visuales.
            </small>

          </div>


          <div class="art-school-method-step">

            <span>04</span>

            <div class="art-school-method-icon">
              ✦
            </div>

            <strong>
              Identidad
            </strong>

            <small>
              Desarrollar una voz artística propia.
            </small>

          </div>

        </div>

      </div>

    </section>


    <section class="section">

      <div class="art-school-path">

        <div class="art-school-path-header">

          <div>

            <div class="eyebrow">
              TU RECORRIDO
            </div>

            <h2>
              Aprender.<br>
              Crear.<br>
              Evolucionar.
            </h2>

          </div>

          <div class="art-school-path-symbol">
            🎨
          </div>

        </div>


        <div class="art-school-path-line">

          <div class="art-school-path-item">

            <span>01</span>

            <div>
              <strong>
                Observa
              </strong>

              <small>
                Aprende a mirar y comprender.
              </small>
            </div>

          </div>


          <div class="art-school-path-item">

            <span>02</span>

            <div>
              <strong>
                Comprende
              </strong>

              <small>
                Descubre cómo funciona la imagen.
              </small>
            </div>

          </div>


          <div class="art-school-path-item">

            <span>03</span>

            <div>
              <strong>
                Experimenta
              </strong>

              <small>
                Prueba, combina y encuentra posibilidades.
              </small>
            </div>

          </div>


          <div class="art-school-path-item">

            <span>04</span>

            <div>
              <strong>
                Crea
              </strong>

              <small>
                Convierte tus ideas en obras propias.
              </small>
            </div>

          </div>

        </div>

      </div>

    </section>


    <section class="section">

      <div class="art-school-explore">

        <div>

          <div class="eyebrow">
            CONTINÚA EXPLORANDO
          </div>

          <h2>
            El arte no<br>
            termina aquí.
          </h2>

          <p>
            Descubre el resto del universo
            artístico de RoXThal.
          </p>

        </div>


        <div class="actions">

          <button
            class="btn"
            type="button"
            data-route="galeria"
          >
            🖼️ Galería
          </button>

          <button
            class="btn secondary"
            type="button"
            data-route="formacion"
          >
            📚 Formación
          </button>

          <button
            class="btn secondary"
            type="button"
            data-route="arte"
          >
            🎨 Área de arte
          </button>

        </div>

      </div>

    </section>


    <section class="section">

      <div class="notice art-school-notice">

        <strong>
          RoXThal Formación Artística
        </strong>

        <br>

        Dibujo · Pintura · Ilustración · Composición · Creatividad

      </div>

    </section>


    <p class="footer-note">
      RoXThal Art Design · Art School
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
