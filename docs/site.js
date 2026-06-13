(function () {
  const button = document.querySelector("[data-menu-button]");
  const sidebar = document.querySelector("[data-sidebar]");

  function setMenuOpen(isOpen) {
    if (!button || !sidebar) return;
    sidebar.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
    button.setAttribute("aria-expanded", String(isOpen));
  }

  if (button && sidebar) {
    button.addEventListener("click", () => {
      setMenuOpen(!sidebar.classList.contains("is-open"));
    });

    sidebar.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    });

    document.addEventListener("click", (event) => {
      if (!sidebar.classList.contains("is-open")) return;
      if (sidebar.contains(event.target) || button.contains(event.target)) return;
      setMenuOpen(false);
    });
  }

  if (window.mermaid) {
    window.mermaid.initialize({
      startOnLoad: true,
      theme: "dark",
      securityLevel: "loose",
      themeVariables: {
        background: "#05070d",
        primaryColor: "#111a2d",
        primaryTextColor: "#f4f7fb",
        primaryBorderColor: "#10d8e5",
        lineColor: "#2ed66f",
        secondaryColor: "#0c1220",
        tertiaryColor: "#0d241c",
        fontFamily: "Inter, ui-sans-serif, system-ui",
      },
    });
  }
})();
