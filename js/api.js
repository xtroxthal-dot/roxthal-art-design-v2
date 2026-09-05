// =========================================================
// RoXThal Art Design V2
// API CLIENT
// Capa independiente de comunicación con el backend
// =========================================================

const ROXTHAL_API_BASE =
  "https://roxthal-api.xtroxthal.workers.dev";

/**
 * Cliente API central de RoXThal.
 *
 * Este módulo NO modifica el DOM.
 * Este módulo NO inicializa Supabase.
 * Este módulo NO ejecuta peticiones automáticamente.
 *
 * Los módulos de la aplicación podrán utilizarlo
 * cuando el backend tenga sus endpoints preparados.
 */

async function roxthalRequest(
  path,
  options = {}
) {
  const url =
    `${ROXTHAL_API_BASE}${path}`;

  const config = {
    method: "GET",
    headers: {
      "Accept": "application/json"
    },
    ...options
  };

  if (
    config.body &&
    typeof config.body !== "string"
  ) {
    config.body =
      JSON.stringify(config.body);

    config.headers = {
      "Content-Type": "application/json",
      ...config.headers
    };
  }

  const response =
    await fetch(url, config);

  const contentType =
    response.headers.get("content-type") || "";

  let data;

  if (
    contentType.includes("application/json")
  ) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    throw new Error(
      `RoXThal API ${response.status}`
    );
  }

  return data;
}

/**
 * Comprueba únicamente si el backend responde.
 *
 * No modifica datos.
 */
export async function apiHealth() {
  return roxthalRequest("/");
}

/**
 * Petición GET genérica.
 */
export async function apiGet(path) {
  return roxthalRequest(path);
}

/**
 * Petición POST genérica.
 */
export async function apiPost(
  path,
  body = {}
) {
  return roxthalRequest(
    path,
    {
      method: "POST",
      body
    }
  );
}

/**
 * Petición PUT genérica.
 */
export async function apiPut(
  path,
  body = {}
) {
  return roxthalRequest(
    path,
    {
      method: "PUT",
      body
    }
  );
}

/**
 * Petición DELETE genérica.
 */
export async function apiDelete(path) {
  return roxthalRequest(
    path,
    {
      method: "DELETE"
    }
  );
}

/**
 * Exportación del cliente base.
 */
export {
  ROXTHAL_API_BASE,
  roxthalRequest
};
