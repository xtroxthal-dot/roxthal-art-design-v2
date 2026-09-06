// =========================================================
// RoXThal Art Design V2
// GALERÍA — módulo profesional independiente
// Arte ≠ Tattoo
// =========================================================

const GALLERY_DATA = {
  arte: {
    title: "Galería de arte",
    subtitle: "Obras con identidad.",
    description:
      "Una colección dedicada exclusivamente al trabajo artístico de RoXThal Art Design.",
    categories: [
      "Obras",
      "Dibujo",
      "Pintura",
      "Ilustración",
      "Creación",
      "Colecciones"
    ],
    curatorTitle:
      "El arte no es decorar una superficie.",
    curatorText:
      "Es construir una mirada, desarrollar una técnica y convertir una idea en una obra con identidad.",
    footer:
      "RoXThal Art Design · Galería de Arte",
    items: []
  },

  tatuajes: {
    title: "Galería tattoo",
    subtitle: "Tatuajes con identidad.",
    description:
      "Un espacio dedicado exclusivamente a diseños, proyectos y trabajos de tatuaje.",
    categories: [
      "Tatuajes",
      "Diseños",
      "Estilos",
      "Proyectos",
      "Inspiración",
      "Colecciones tattoo"
    ],
    curatorTitle:
      "Un tatuaje empieza mucho antes de la aguja.",
    curatorText:
      "Cada proyecto nace de una idea, evoluciona mediante el diseño y termina convertido en una pieza pensada para cada persona.",
    footer:
      "RoXThal Art Design · Galería Tattoo",
    items: []
  }
};

// ---------------------------------------------------------
// Seguridad básica para textos dinámicos
// ---------------------------------------------------------

function escapeGalleryHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ---------------------------------------------------------
// Tarjeta individual
// ---------------------------------------------------------

function renderGalleryCard(item, category) {
  const title = escapeGalleryHTML(
    item?.title ||
      (
        category === "tatuajes"
          ? "Proyecto tattoo"
          : "Obra RoXThal"
      )
  );

  const description = escapeGalleryHTML(
    item?.description || ""
  );

  const image = item?.image
    ? `
      <div class="gallery-image">
        <img
          src="${escapeGalleryHTML(item.image)}"
          alt="${title}"
          loading="lazy"
          decoding="async"
        >
      </div>
    `
    : `
      <div class="gallery-placeholder">
        <span>
          ${category === "tatuajes" ? "✎" : "✦"}
        </span>
        <small>Próximamente</small>
      </div>
    `;

  return `
    <article class="gallery-card">
      ${image}

      <div class="gallery-card-body">
        <h3>${title}</h3>

        ${
          description
            ? `<p>${description}</p>`
            : ""
        }
      </div>
    </article>
  `;
}

// ---------------------------------------------------------
// Estado vacío
// ---------------------------------------------------------

function renderGalleryEmpty(category) {
  const isTattoo = category === "tatuajes";

  return `
    <div class="gallery-empty">

      <span>
        ${isTattoo ? "✎" : "✦"}
      </span>

      <strong>
        ${
          isTattoo
            ? "La galería tattoo está creciendo."
            : "La galería de arte está creciendo."
        }
      </strong>

      <p>
        Próximamente encontrarás aquí
        nuevos ${
          isTattoo
            ? "tatuajes, diseños y proyectos."
            : "dibujos, pinturas y obras."
        }
      </p>

    </div>
  `;
}

// ---------------------------------------------------------
// Render principal
// ---------------------------------------------------------

export function renderGallery(category = "arte") {
  const safeCategory =
    GALLERY_DATA[category]
      ? category
      : "arte";

  const gallery =
    GALLERY_DATA[safeCategory];

  const isTattoo =
    safeCategory === "tatuajes";

  const itemCount =
    Array.isArray(gallery.items)
      ? gallery.items.length
      : 0;

  const cards =
    itemCount > 0
      ? gallery.items
          .map(item =>
            renderGalleryCard(
              item,
              safeCategory
            )
          )
          .join("")
      : renderGalleryEmpty(
          safeCategory
        );

  const categories =
    gallery.categories
      .map(categoryName => `
        <span class="gallery-category">
          ${escapeGalleryHTML(categoryName)}
        </span>
      `)
      .join("");

  return `
    <section
      class="gallery-module"
      data-gallery="${escapeGalleryHTML(safeCategory)}"
    >

      <!-- HERO -->

      <header class="gallery-hero">

        <div class="gallery-hero-icon">
          ${isTattoo ? "✎" : "✦"}
        </div>

        <div class="gallery-hero-content">

          <span class="gallery-eyebrow">
            ROXTHAL ART DESIGN
          </span>

          <h1>
            ${
              isTattoo
                ? `Galería <span>Tattoo.</span>`
                : `Galería de <span>Arte.</span>`
            }
          </h1>

          <p>
            ${escapeGalleryHTML(
              gallery.subtitle
            )}
          </p>

        </div>

        <div class="gallery-counter">

          <strong>
            ${itemCount}
          </strong>

          <small>
            ${
              itemCount === 1
                ? "pieza"
                : "piezas"
            }
          </small>

        </div>

      </header>

      <!-- INTRODUCCIÓN -->

      <div class="gallery-intro">

        <p>
          ${escapeGalleryHTML(
            gallery.description
          )}
        </p>

      </div>

      <!-- CATEGORÍAS -->

      <div
        class="gallery-categories"
        aria-label="${
          isTattoo
            ? "Categorías de tattoo"
            : "Categorías de arte"
        }"
      >
        ${categories}
      </div>

      <!-- CONTENIDO -->

      <div class="gallery-grid">
        ${cards}
      </div>

      <!-- CURADURÍA -->

      <div class="gallery-curator">

        <small>
          ${
            isTattoo
              ? "Filosofía tattoo"
              : "Filosofía artística"
          }
        </small>

        <strong>
          ${escapeGalleryHTML(
            gallery.curatorTitle
          )}
        </strong>

        <p>
          ${escapeGalleryHTML(
            gallery.curatorText
          )}
        </p>

      </div>

      <div class="gallery-module-footer">
        ${escapeGalleryHTML(
          gallery.footer
        )}
      </div>

    </section>
  `;
}

// ---------------------------------------------------------
// Acceso a datos
// Preparado para futura integración con Supabase
// ---------------------------------------------------------

export function getGalleryData(category) {
  return (
    GALLERY_DATA[category] ||
    null
  );
}

// ---------------------------------------------------------
// Exportación para futuras integraciones
// ---------------------------------------------------------

export {
  GALLERY_DATA
};
