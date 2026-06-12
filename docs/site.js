(function () {
  const button = document.querySelector("[data-menu-button]");
  const sidebar = document.querySelector("[data-sidebar]");

  if (button && sidebar) {
    button.addEventListener("click", () => {
      const isOpen = sidebar.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
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
