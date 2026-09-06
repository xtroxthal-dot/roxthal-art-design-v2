/* =========================================================
   ROXTHAL ART DESIGN V2
   GALERÍA · MOTOR VISUAL + FILTROS
   Arte / Tattoo separados
   ========================================================= */

const GALLERY_DATA = {
  arte: {
    key: "arte",
    type: "art",
    eyebrow: "ROXTHAL ART DESIGN",
    archive: "ARCHIVE / 01",
    title: "Galería de Arte",
    subtitle:
      "Obras, dibujos, pinturas, ilustraciones y creaciones seleccionadas del universo RoXThal.",
    curator:
      "Una selección visual donde cada obra tiene su propio lenguaje.",
    year: "2026",

    categories: [
      { id: "obras", label: "Obras" },
      { id: "dibujo", label: "Dibujo" },
      { id: "pintura", label: "Pintura" },
      { id: "ilustracion", label: "Ilustración" },
      { id: "creacion", label: "Creación" },
      { id: "colecciones", label: "Colecciones" }
    ],

    items: []
  },

  tatuajes: {
    key: "tatuajes",
    type: "tattoo",
    eyebrow: "ROXTHAL TATTOO STUDIO",
    archive: "ARCHIVE / 02",
    title: "Galería Tattoo",
    subtitle:
      "Tatuajes, diseños, estilos, proyectos e inspiración del universo RoXThal Tattoo.",
    curator:
      "Cada tatuaje nace de una idea y termina convertido en identidad.",
    year: "2026",

    categories: [
      { id: "tatuajes", label: "Tatuajes" },
      { id: "disenos", label: "Diseños" },
      { id: "estilos", label: "Estilos" },
      { id: "proyectos", label: "Proyectos" },
      { id: "inspiracion", label: "Inspiración" },
      { id: "colecciones", label: "Colecciones Tattoo" }
    ],

    items: []
  }
};


/* =========================================================
   SEGURIDAD
   ========================================================= */

function escapeGalleryHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =========================================================
   NORMALIZACIÓN
   ========================================================= */

function normalizeGalleryCategory(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
}


/* =========================================================
   ICONOS
   ========================================================= */

function galleryMark(type) {
  if (type === "tattoo") {
    return `
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M10 38 38 10M14 34 34 14M8 40h12M28 8h12"
          fill="none"
          stroke="currentColor"
          stroke-width="2.4"
          stroke-linecap="round"
        />
        <circle
          cx="24"
          cy="24"
          r="13"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          opacity=".45"
        />
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle
        cx="24"
        cy="24"
        r="17"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <circle cx="17" cy="18" r="3" fill="currentColor"/>
      <circle cx="30" cy="14" r="2.5" fill="currentColor"/>
      <circle cx="31" cy="29" r="4" fill="currentColor"/>
      <path
        d="M12 31c5-5 10-4 15 1 4 4 8 4 9 4"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  `;
}


/* =========================================================
   CONTADOR
   ========================================================= */

function galleryCount(items) {
  return Array.isArray(items) ? items.length : 0;
}


/* =========================================================
   FILTROS
   ========================================================= */

function renderGalleryFilters(data) {
  return `
    <nav
      class="rx-gallery-filters"
      aria-label="Categorías de ${escapeGalleryHTML(data.title)}"
    >
      ${data.categories
        .map(
          (category, index) => `
            <button
              class="rx-gallery-filter${index === 0 ? " is-active" : ""}"
              type="button"
              data-gallery-filter="${escapeGalleryHTML(category.id)}"
              data-gallery-type="${escapeGalleryHTML(data.key)}"
              aria-pressed="${index === 0 ? "true" : "false"}"
            >
              <span class="rx-gallery-filter-number">
                ${String(index + 1).padStart(2, "0")}
              </span>

              <span class="rx-gallery-filter-label">
                ${escapeGalleryHTML(category.label)}
              </span>
            </button>
          `
        )
        .join("")}
    </nav>
  `;
}


/* =========================================================
   PIEZA
   ========================================================= */

function renderGalleryPiece(item, index, type) {
  const title =
    item?.title ||
    (type === "tattoo"
      ? "Proyecto tattoo"
      : "Obra seleccionada");

  const category =
    item?.category ||
    (type === "tattoo"
      ? "Tatuajes"
      : "Obras");

  const description =
    item?.description ||
    (type === "tattoo"
      ? "Espacio reservado para un proyecto tattoo."
      : "Espacio reservado para una obra artística.");

  const image =
    item?.image ||
    item?.url ||
    "";

  return `
    <article
      class="rx-gallery-piece rx-gallery-piece-${escapeGalleryHTML(type)}"
      data-gallery-category="${escapeGalleryHTML(
        normalizeGalleryCategory(category)
      )}"
    >

      <div class="rx-gallery-piece-index">
        ${String(index + 1).padStart(2, "0")}
      </div>

      <div class="rx-gallery-piece-media">

        ${
          image
            ? `
              <img
                src="${escapeGalleryHTML(image)}"
                alt="${escapeGalleryHTML(title)}"
                loading="lazy"
              >
            `
            : `
              <div class="rx-gallery-piece-placeholder">

                <span class="rx-gallery-piece-placeholder-mark">
                  ${type === "tattoo" ? "✦" : "◌"}
                </span>

                <span>
                  ${type === "tattoo"
                    ? "TATTOO WORK"
                    : "ART WORK"}
                </span>

              </div>
            `
        }

      </div>

      <div class="rx-gallery-piece-info">

        <span class="rx-gallery-piece-category">
          ${escapeGalleryHTML(category)}
        </span>

        <h3>
          ${escapeGalleryHTML(title)}
        </h3>

        <p>
          ${escapeGalleryHTML(description)}
        </p>

      </div>

    </article>
  `;
}


/* =========================================================
   ESTADO VACÍO
   ========================================================= */

function renderGalleryEmpty(data) {
  const isTattoo = data.type === "tattoo";

  return `
    <div class="rx-gallery-empty">

      <div class="rx-gallery-empty-number">
        ${escapeGalleryHTML(data.archive)}
      </div>

      <div class="rx-gallery-empty-symbol">
        ${galleryMark(data.type)}
      </div>

      <div class="rx-gallery-empty-content">

        <span class="rx-gallery-empty-kicker">
          ARCHIVO EN CONSTRUCCIÓN
        </span>

        <h3>
          ${
            isTattoo
              ? "El próximo proyecto empieza aquí."
              : "La próxima obra empieza aquí."
          }
        </h3>

        <p>
          ${
            isTattoo
              ? "Este espacio está preparado para mostrar tatuajes, diseños, proyectos y colecciones de RoXThal Tattoo."
              : "Este espacio está preparado para mostrar obras, dibujos, pinturas, ilustraciones y colecciones de RoXThal Art Design."
          }
        </p>

      </div>

      <div class="rx-gallery-empty-index">
        <span>AVAILABLE</span>
        <strong>SOON</strong>
      </div>

    </div>
  `;
}


/* =========================================================
   ARCHIVO
   ========================================================= */

function renderGalleryArchive(data) {
  return `
    <section class="rx-gallery-archive">

      <div class="rx-gallery-archive-heading">
        <span>INDEX</span>
        <strong>${escapeGalleryHTML(data.archive)}</strong>
      </div>

      <div class="rx-gallery-archive-list">

        ${data.categories
          .map(
            (category, index) => `
              <div class="rx-gallery-archive-row">

                <span>
                  ${String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  ${escapeGalleryHTML(category.label)}
                </strong>

                <em>
                  ARCHIVE
                </em>

              </div>
            `
          )
          .join("")}

      </div>

    </section>
  `;
}


/* =========================================================
   GALERÍA
   ========================================================= */

function renderGallery(type = "arte") {
  const data =
    GALLERY_DATA[type] ||
    GALLERY_DATA.arte;

  const items =
    Array.isArray(data.items)
      ? data.items
      : [];

  const count =
    galleryCount(items);

  const firstCategory =
    data.categories[0]?.label ||
    "Selected";

  return `
    <div
      class="
        rx-gallery
        rx-gallery-${escapeGalleryHTML(data.type)}
      "
      data-gallery-root="${escapeGalleryHTML(data.key)}"
    >

      <header class="rx-gallery-cover">

        <div class="rx-gallery-cover-meta">
          <span>
            ${escapeGalleryHTML(data.eyebrow)}
          </span>

          <span>
            ${escapeGalleryHTML(data.archive)}
          </span>
        </div>

        <div class="rx-gallery-cover-main">

          <div class="rx-gallery-cover-mark">
            ${galleryMark(data.type)}
          </div>

          <div class="rx-gallery-cover-title-wrap">

            <span class="rx-gallery-cover-label">
              VISUAL ARCHIVE
            </span>

            <h2 class="rx-gallery-cover-title">
              ${escapeGalleryHTML(data.title)}
            </h2>

            <p class="rx-gallery-cover-subtitle">
              ${escapeGalleryHTML(data.subtitle)}
            </p>

          </div>

        </div>

        <div class="rx-gallery-cover-bottom">

          <span>
            ${escapeGalleryHTML(data.year)}
          </span>

          <span data-gallery-total>
            ${String(count).padStart(2, "0")} WORKS
          </span>

          <span>
            ROXTHAL
          </span>

        </div>

      </header>


      <div class="rx-gallery-introbar">

        <div>

          <span class="rx-gallery-introbar-label">
            SELECTED WORKS
          </span>

          <strong data-gallery-count>
            ${String(count).padStart(2, "0")}
          </strong>

        </div>

        <p>
          ${escapeGalleryHTML(data.curator)}
        </p>

      </div>


      ${renderGalleryFilters(data)}


      <section class="rx-gallery-exhibition">

        <div class="rx-gallery-exhibition-heading">

          <div>

            <span>
              EXHIBITION
            </span>

            <strong data-gallery-selection>
              01 — ${escapeGalleryHTML(
                firstCategory.toUpperCase()
              )}
            </strong>

          </div>

          <span data-gallery-kind>
            ${
              data.type === "tattoo"
                ? "TATTOO / WORKS"
                : "ART / WORKS"
            }
          </span>

        </div>


        <div
          class="rx-gallery-content"
          data-gallery-content
        >

          ${
            items.length
              ? `
                <div class="rx-gallery-feature">

                  ${renderGalleryPiece(
                    items[0],
                    0,
                    data.type
                  )}

                </div>

                ${
                  items.length > 1
                    ? `
                      <div class="rx-gallery-grid">

                        ${items
                          .slice(1)
                          .map(
                            (item, index) =>
                              renderGalleryPiece(
                                item,
                                index + 1,
                                data.type
                              )
                          )
                          .join("")}

                      </div>
                    `
                    : ""
                }
              `
              : renderGalleryEmpty(data)
          }

        </div>

      </section>


      ${renderGalleryArchive(data)}


      <section class="rx-gallery-statement">

        <span>
          ROXTHAL /
          ${escapeGalleryHTML(data.archive)}
        </span>

        <p>

          ${
            data.type === "tattoo"
              ? "El tatuaje no es una copia. Es una pieza única construida sobre una idea."
              : "El arte no es decoración. Es lenguaje, proceso y una forma de dejar huella."
          }

        </p>

      </section>


      <footer class="rx-gallery-footer">

        <div>
          ${escapeGalleryHTML(data.eyebrow)}
        </div>

        <div>
          ${escapeGalleryHTML(data.title)}
        </div>

        <div>
          ${escapeGalleryHTML(data.year)}
        </div>

      </footer>

    </div>
  `;
}


/* =========================================================
   FILTRO FUNCIONAL
   ========================================================= */

function applyGalleryFilter(button) {
  const root =
    button.closest("[data-gallery-root]");

  if (!root) return;

  const type =
    root.dataset.galleryRoot;

  const filter =
    normalizeGalleryCategory(
      button.dataset.galleryFilter
    );

  const data =
    GALLERY_DATA[type] ||
    GALLERY_DATA.arte;

  const pieces =
    [
      ...root.querySelectorAll(
        ".rx-gallery-piece"
      )
    ];

  const feature =
    root.querySelector(
      ".rx-gallery-feature"
    );

  const grid =
    root.querySelector(
      ".rx-gallery-grid"
    );

  const empty =
    root.querySelector(
      ".rx-gallery-empty"
    );

  const content =
    root.querySelector(
      "[data-gallery-content]"
    );

  const countNode =
    root.querySelector(
      "[data-gallery-count]"
    );

  const totalNode =
    root.querySelector(
      "[data-gallery-total]"
    );

  const selectionNode =
    root.querySelector(
      "[data-gallery-selection]"
    );

  const category =
    data.categories.find(
      item =>
        normalizeGalleryCategory(
          item.id
        ) === filter
    );

  const categoryLabel =
    category?.label ||
    "Seleccionado";


  /* ACTIVAR BOTÓN */

  root
    .querySelectorAll(
      ".rx-gallery-filter"
    )
    .forEach(filterButton => {

      const active =
        filterButton === button;

      filterButton.classList.toggle(
        "is-active",
        active
      );

      filterButton.setAttribute(
        "aria-pressed",
        active
          ? "true"
          : "false"
      );
    });


  /* SI TODAVÍA NO HAY OBRAS */

  if (!pieces.length) {

    if (selectionNode) {
      selectionNode.textContent =
        `01 — ${categoryLabel.toUpperCase()}`;
    }

    if (countNode) {
      countNode.textContent = "00";
    }

    if (totalNode) {
      totalNode.textContent = "00 WORKS";
    }

    return;
  }


  /* MATCH */

  const isAll =
    filter === "obras" ||
    filter === "tatuajes";

  const matches =
    isAll
      ? pieces
      : pieces.filter(piece => {

          const pieceCategory =
            normalizeGalleryCategory(
              piece.dataset.galleryCategory
            );

          return (
            pieceCategory === filter
          );

        });


  /* MOSTRAR / OCULTAR */

  pieces.forEach(piece => {

    piece.hidden =
      !matches.includes(piece);

  });


  /* FEATURE */

  if (feature) {

    const featurePiece =
      feature.querySelector(
        ".rx-gallery-piece"
      );

    feature.hidden =
      !featurePiece ||
      !matches.includes(
        featurePiece
      );

  }


  /* GRID */

  if (grid) {

    const visible =
      grid.querySelectorAll(
        ".rx-gallery-piece:not([hidden])"
      );

    grid.hidden =
      visible.length === 0;

  }


  /* EMPTY */

  if (empty) {

    empty.hidden =
      matches.length !== 0;

  }


  /* CONTADORES */

  if (countNode) {

    countNode.textContent =
      String(
        matches.length
      ).padStart(2, "0");

  }

  if (totalNode) {

    totalNode.textContent =
      `${String(
        matches.length
      ).padStart(2, "0")} WORKS`;

  }


  /* TÍTULO DE SELECCIÓN */

  if (selectionNode) {

    selectionNode.textContent =
      `01 — ${categoryLabel.toUpperCase()}`;

  }
}


/* =========================================================
   EVENTOS
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        "[data-gallery-filter]"
      );

    if (!button) return;

    applyGalleryFilter(button);

  }
);


/* =========================================================
   DATOS PÚBLICOS
   ========================================================= */

function getGalleryData(
  type = "arte"
) {
  return (
    GALLERY_DATA[type] ||
    GALLERY_DATA.arte
  );
}


/* =========================================================
   EXPORTACIÓN
   ========================================================= */

export {
  GALLERY_DATA,
  renderGallery,
  getGalleryData
};
