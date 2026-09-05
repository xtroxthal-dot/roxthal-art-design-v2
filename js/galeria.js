// =========================================================
// RoXThal Art Design V2
// GALERÍA — módulo independiente
// =========================================================

const GALLERY_DATA = {
  arte: {
    title: "Galería de arte",
    subtitle: "Dibujo · Pintura · Ilustración · Obras",
    description:
      "Una selección de trabajos y proyectos artísticos de RoXThal Art Design.",
    items: []
  },

  tatuajes: {
    title: "Galería tattoo",
    subtitle: "Diseños · Estilos · Tatuajes",
    description:
      "Una selección exclusiva de trabajos y diseños de tatuaje.",
    items: []
  }
};

/**
 * Escapa texto antes de introducirlo en HTML.
 */
function escapeGalleryHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/**
 * Genera una tarjeta individual.
 */
function galleryCard(item) {
  const title =
    escapeGalleryHTML(
      item?.title || "Obra RoXThal"
    );

  const description =
    escapeGalleryHTML(
      item?.description || ""
    );

  const image =
    item?.image
      ? `
        <div class="gallery-image">
          <img
            src="${escapeGalleryHTML(item.image)}"
            alt="${title}"
            loading="lazy"
          >
        </div>
      `
      : `
        <div class="gallery-placeholder">
          <span>✦</span>
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

/**
 * Renderiza una galería.
 *
 * category:
 * - arte
 * - tatuajes
 */
export function renderGallery(category = "arte") {
  const gallery =
    GALLERY_DATA[category] ||
    GALLERY_DATA.arte;

  const cards =
    gallery.items.length
      ? gallery.items
          .map(galleryCard)
          .join("")
      : `
        <div class="gallery-empty">
          <span>✦</span>
          <strong>Galería en construcción</strong>
          <p>
            Pronto encontrarás aquí
            nuevos trabajos de RoXThal.
          </p>
        </div>
      `;

  return `
    <section
      class="gallery-module"
      data-gallery="${escapeGalleryHTML(category)}"
    >

      <div class="module-hero">

        <div class="module-icon">
          ${category === "tatuajes" ? "✎" : "✦"}
        </div>

        <div>
          <span class="eyebrow">
            ROXTHAL ART DESIGN
          </span>

          <h1>
            ${escapeGalleryHTML(gallery.title)}
          </h1>

          <p>
            ${escapeGalleryHTML(gallery.subtitle)}
          </p>
        </div>

      </div>

      <div class="notice">
        ${escapeGalleryHTML(gallery.description)}
      </div>

      <div class="gallery-grid">
        ${cards}
      </div>

    </section>
  `;
}

/**
 * Devuelve los datos actuales de la galería.
 *
 * Preparado para conectar posteriormente
 * con el backend sin cambiar la interfaz.
 */
export function getGalleryData(category) {
  return (
    GALLERY_DATA[category] ||
    null
  );
}
