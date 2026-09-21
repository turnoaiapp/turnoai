import { supabase } from "./supabase.js";
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
