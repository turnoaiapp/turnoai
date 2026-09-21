import { supabase } from "./supabase.js";
supabase.auth.getSession().then(({ error }) => {
  const status = document.createElement("div");

  status.style.position = "fixed";
  status.style.bottom = "20px";
  status.style.left = "20px";
  status.style.right = "20px";
  status.style.padding = "14px";
  status.style.background = error ? "#b42318" : "#13795b";
  status.style.color = "#fff";
  status.style.borderRadius = "10px";
  status.style.zIndex = "9999";
  status.style.fontFamily = "Arial, sans-serif";
  status.style.textAlign = "center";

  status.textContent = error
    ? "TurnoAI: error al conectar con Supabase."
    : "TurnoAI: Supabase conectado correctamente.";

  document.body.appendChild(status);
});
document.addEventListener("DOMContentLoaded", () => {
  // Navegación suave para los enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Año automático del footer
  const copyright = document.querySelector(".copyright");

  if (copyright) {
    copyright.textContent = `© ${new Date().getFullYear()} TurnoAI. Todos los derechos reservados.`;
  }

  // Preparación para futuras acciones de autenticación
  document.querySelectorAll('a[href="#login"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.hash = "login";
    });
  });

  document.querySelectorAll('a[href="#registro"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.hash = "registro";
    });
  });
});
