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
        primaryBorderColor: "#2cf8ff",
        lineColor: "#ff3fd1",
        secondaryColor: "#0c1220",
        tertiaryColor: "#1b1230",
        fontFamily: "Inter, ui-sans-serif, system-ui",
      },
    });
  }
})();
