const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const docsDir = path.join(root, "docs");
const pagesDir = path.join(docsDir, "pages");

const siteTitle = "AgentFactory";
const tagline = "Manuale operativo e laboratorio per progettare sistemi multi-agent professionali.";
const siteAuthor = "Enrico Paparo";
const logoPath = "assets/agentfactory-logo.png";
const wordmarkPath = "assets/agentfactory-wordmark.png";
const faviconPath = "assets/favicon.png";
const appleTouchIconPath = "assets/apple-touch-icon.png";
const assetVersion = "20260614-lesson-20";

const sources = [
  {
    title: "Manuale",
    file: "MANUAL.md",
    slug: "manuale",
    group: "Fondazione",
    summary: "Visione, indice e regole del percorso.",
  },
  {
    title: "Roadmap",
    file: "ROADMAP.md",
    slug: "roadmap",
    group: "Fondazione",
    summary: "Progressione da basi operative ad Agent Factory.",
  },
  {
    title: "Glossario",
    file: "GLOSSARY.md",
    slug: "glossario",
    group: "Fondazione",
    summary: "Termini essenziali del percorso.",
  },
  {
    title: "00 - Come usare questo manuale",
    file: "lessons/00-come-usare-questo-manuale.md",
    slug: "lezione-00",
    group: "Lezioni",
    summary: "Metodo di studio, artefatti e memoria del repo.",
  },
  {
    title: "01 - Fondamenta operative",
    file: "lessons/01-fondamenta-operative.md",
    slug: "lezione-01",
    group: "Lezioni",
    summary: "Markdown, template, Agent Card e basi operative.",
  },
  {
    title: "02 - Che cos'e' davvero un AI Agent",
    file: "lessons/02-che-cose-un-ai-agent.md",
    slug: "lezione-02",
    group: "Lezioni",
    summary: "Differenza tra prompt, assistente, agente e fragilita' nei progetti complessi.",
  },
  {
    title: "03 - Automazione, workflow, agente o Agent Factory",
    file: "lessons/03-quando-usare-automazione-workflow-agenti.md",
    slug: "lezione-03",
    group: "Lezioni",
    summary: "Come classificare un problema prima di scegliere l'architettura.",
  },
  {
    title: "04 - Progettare un agente con una Agent Card",
    file: "lessons/04-progettare-un-agente-con-agent-card.md",
    slug: "lezione-04",
    group: "Lezioni",
    summary: "Missione, input, output, tool, regole, limiti e contesto.",
  },
  {
    title: "05 - Prima Agent Card: Requirement Analyst Agent",
    file: "lessons/05-prima-agent-card-requirement-analyst.md",
    slug: "lezione-05",
    group: "Lezioni",
    summary: "Prima scheda agente concreta del percorso.",
  },
  {
    title: "06 - Strumenti reali agentici e automazione",
    file: "lessons/06-strumenti-reali-agentici-automazione.md",
    slug: "lezione-06",
    group: "Lezioni",
    summary: "n8n, OpenAI Agents SDK, CrewAI, LangGraph e OpenClaw nel percorso.",
  },
  {
    title: "07 - Template di output: Requirement Analysis Document",
    file: "lessons/07-template-output-requirement-analysis.md",
    slug: "lezione-07",
    group: "Lezioni",
    summary: "Output contract, requisiti verificabili, criteri di accettazione e handoff.",
  },
  {
    title: "08 - Primo Requirement Analysis Document manuale",
    file: "lessons/08-primo-requirement-analysis-manuale.md",
    slug: "lezione-08",
    group: "Lezioni",
    summary: "Simulazione manuale del Requirement Analyst Agent su un brief reale.",
  },
  {
    title: "09 - Valutare l'output del Requirement Analyst Agent",
    file: "lessons/09-valutare-output-requirement-analyst.md",
    slug: "lezione-09",
    group: "Lezioni",
    summary: "Checklist, score, finding e azioni correttive per valutare un artefatto agentico.",
  },
  {
    title: "10 - Knowledge absorption",
    file: "lessons/10-knowledge-absorption.md",
    slug: "lezione-10",
    group: "Lezioni",
    summary: "Come trasformare review, errori ed esperienze in conoscenza permanente validata.",
  },
  {
    title: "11 - Prima knowledge absorption candidate",
    file: "lessons/11-prima-knowledge-absorption-candidate.md",
    slug: "lezione-11",
    group: "Lezioni",
    summary: "Applicazione concreta della knowledge absorption alla prima review reale.",
  },
  {
    title: "12 - Handoff e contratti tra agenti",
    file: "lessons/12-handoff-e-contratti-tra-agenti.md",
    slug: "lezione-12",
    group: "Lezioni",
    summary: "Come passare contesto, vincoli e responsabilita' tra agenti senza perdere controllo.",
  },
  {
    title: "13 - Architect Agent e ADR",
    file: "lessons/13-architect-agent-e-architecture-decision-record.md",
    slug: "lezione-13",
    group: "Lezioni",
    summary: "Ruolo dell'Architect Agent, decisioni architetturali e primo ADR reale.",
  },
  {
    title: "14 - Valutare ADR e Architect output",
    file: "lessons/14-valutare-adr-e-output-architect-agent.md",
    slug: "lezione-14",
    group: "Lezioni",
    summary: "Come valutare un ADR e decidere se abilita il prossimo agente.",
  },
  {
    title: "15 - Developer Agent e Implementation Plan",
    file: "lessons/15-developer-agent-e-implementation-plan.md",
    slug: "lezione-15",
    group: "Lezioni",
    summary: "Come governare il primo agente che potra' modificare file e codice.",
  },
  {
    title: "16 - Prompt operativo e runtime minimo",
    file: "lessons/16-prompt-operativo-runtime-primo-agente-reale.md",
    slug: "lezione-16",
    group: "Lezioni",
    summary: "Come preparare il primo agente reale con prompt, API key, budget, output e run record.",
  },
  {
    title: "17 - Runtime Python minimo",
    file: "lessons/17-runtime-python-primo-agente-reale.md",
    slug: "lezione-17",
    group: "Lezioni",
    summary: "Come costruire il primo runtime Python con dry-run, execute, output e run record.",
  },
  {
    title: "18 - Pre-flight del primo run API",
    file: "lessons/18-preflight-primo-run-api.md",
    slug: "lezione-18",
    group: "Lezioni",
    summary: "Checklist operativa prima del primo execute via API.",
  },
  {
    title: "19 - Skill, trigger e attivazione agenti",
    file: "lessons/19-skill-trigger-attivazione-agenti.md",
    slug: "lezione-19",
    group: "Lezioni",
    summary: "Come skill, trigger e orchestratore preparano una pipeline multi-agent modulare.",
  },
  {
    title: "20 - Primo execute Requirement Analyst",
    file: "lessons/20-primo-execute-requirement-analyst-agent.md",
    slug: "lezione-20",
    group: "Lezioni",
    summary: "Come passare da dry-run a execute senza confondere run riuscito e output validato.",
  },
  {
    title: "Agents Overview",
    file: "agents/README.md",
    slug: "agents-overview",
    group: "Agenti",
    summary: "Come leggere un agente come package fisico di file versionati.",
  },
  {
    title: "Agent Package Spec",
    file: "agents/AGENT_PACKAGE_SPEC.md",
    slug: "agent-package-spec",
    group: "Agenti",
    summary: "Specifica completa file-per-file di un agente professionale.",
  },
  {
    title: "Requirement Analyst Agent",
    file: "agents/requirement-analyst-agent.md",
    slug: "requirement-analyst-agent",
    group: "Agenti",
    summary: "Prima Agent Card reale tracciata nel repository.",
  },
  {
    title: "Requirement Analyst Agent Package",
    file: "agents/requirement-analyst-package.md",
    slug: "requirement-analyst-agent-package",
    group: "Agenti",
    summary: "Manifest fisico dei file che compongono il Requirement Analyst Agent.",
  },
  {
    title: "Architect Agent",
    file: "agents/architect-agent.md",
    slug: "architect-agent",
    group: "Agenti",
    summary: "Agent Card del ruolo che trasforma requisiti e handoff in decisioni architetturali.",
  },
  {
    title: "Developer Agent",
    file: "agents/developer-agent.md",
    slug: "developer-agent",
    group: "Agenti",
    summary: "Agent Card del ruolo che implementa modifiche controllate da un piano approvato.",
  },
  {
    title: "Requirement Analysis Output Template",
    file: "templates/requirement-analysis-output-template.md",
    slug: "template-requirement-analysis-output",
    group: "Template",
    summary: "Template ufficiale dell'artefatto prodotto dal Requirement Analyst Agent.",
  },
  {
    title: "Requirement Analysis Review Checklist",
    file: "templates/requirement-analysis-review-checklist.md",
    slug: "template-requirement-analysis-review-checklist",
    group: "Template",
    summary: "Checklist per valutare un Requirement Analysis Document.",
  },
  {
    title: "Knowledge Absorption Template",
    file: "templates/knowledge-absorption-template.md",
    slug: "template-knowledge-absorption",
    group: "Template",
    summary: "Template per decidere cosa assorbire nella memoria permanente.",
  },
  {
    title: "Agent Skill Template",
    file: "templates/agent-skill-template.md",
    slug: "template-agent-skill",
    group: "Template",
    summary: "Template leggero per progettare skill riutilizzabili dagli agenti.",
  },
  {
    title: "Agent Handoff Contract Template",
    file: "templates/agent-handoff-contract-template.md",
    slug: "template-agent-handoff-contract",
    group: "Template",
    summary: "Template per passare lavoro strutturato da un agente a un altro.",
  },
  {
    title: "Architecture Decision Record Template",
    file: "templates/architecture-decision-record-template.md",
    slug: "template-architecture-decision-record",
    group: "Template",
    summary: "Template per registrare decisioni architetturali motivate e revisionabili.",
  },
  {
    title: "Architecture Decision Review Checklist",
    file: "templates/architecture-decision-review-checklist.md",
    slug: "template-architecture-decision-review-checklist",
    group: "Template",
    summary: "Checklist per valutare ADR prodotti manualmente o da Architect Agent.",
  },
  {
    title: "Implementation Plan Template",
    file: "templates/implementation-plan-template.md",
    slug: "template-implementation-plan",
    group: "Template",
    summary: "Template per pianificare modifiche tecniche prima dell'implementazione.",
  },
  {
    title: "Real Agent Run Record Template",
    file: "templates/real-agent-run-record-template.md",
    slug: "template-real-agent-run-record",
    group: "Template",
    summary: "Template per tracciare ogni esecuzione reale di un agente.",
  },
  {
    title: "Real Agent Pre-flight Checklist Template",
    file: "templates/real-agent-preflight-checklist-template.md",
    slug: "template-real-agent-preflight-checklist",
    group: "Template",
    summary: "Template per controllare ambiente, API key, modello, budget e review prima di un run reale.",
  },
  {
    title: "Requirement Analyst Agent Prompt",
    file: "prompts/requirement-analyst-agent-prompt.md",
    slug: "prompt-requirement-analyst-agent",
    group: "Prompt",
    summary: "Prompt operativo per eseguire il Requirement Analyst Agent con template e vincoli.",
  },
  {
    title: "Real Agent Execution Rules",
    file: "governance/real-agent-execution-rules.md",
    slug: "governance-real-agent-execution-rules",
    group: "Governance",
    summary: "Regole minime per API key, budget, output, run record e human gate.",
  },
  {
    title: "Runtime AgentFactory",
    file: "runtime/README.md",
    slug: "runtime-agentfactory",
    group: "Runtime",
    summary: "Istruzioni del primo runtime Python controllato per il Requirement Analyst Agent.",
  },
  {
    title: "001 - AgentFactory Static Site Requirements",
    file: "experiments/001-agentfactory-static-site-requirements.md",
    slug: "esperimento-001-agentfactory-static-site-requirements",
    group: "Esperimenti",
    summary: "Primo Requirement Analysis Document compilato manualmente.",
  },
  {
    title: "001 - Review AgentFactory Static Site Requirements",
    file: "experiments/001-agentfactory-static-site-requirements-review.md",
    slug: "esperimento-001-agentfactory-static-site-requirements-review",
    group: "Esperimenti",
    summary: "Prima review manuale di un Requirement Analysis Document.",
  },
  {
    title: "001 - Knowledge Absorption Static Site Review",
    file: "experiments/001-agentfactory-static-site-knowledge-absorption.md",
    slug: "esperimento-001-agentfactory-static-site-knowledge-absorption",
    group: "Esperimenti",
    summary: "Prima candidate reale di knowledge absorption.",
  },
  {
    title: "001 - Architect Handoff Static Site",
    file: "experiments/001-agentfactory-static-site-architect-handoff.md",
    slug: "esperimento-001-agentfactory-static-site-architect-handoff",
    group: "Esperimenti",
    summary: "Primo handoff operativo verso Architect Agent.",
  },
  {
    title: "001 - Static Site Architecture ADR",
    file: "experiments/001-agentfactory-static-site-architecture.md",
    slug: "esperimento-001-agentfactory-static-site-architecture",
    group: "Esperimenti",
    summary: "Prima decisione architetturale simulata dell'Architect Agent.",
  },
  {
    title: "001 - Review Static Site Architecture ADR",
    file: "experiments/001-agentfactory-static-site-architecture-review.md",
    slug: "esperimento-001-agentfactory-static-site-architecture-review",
    group: "Esperimenti",
    summary: "Prima review strutturata di un ADR prodotto da Architect Agent.",
  },
  {
    title: "001 - Developer Handoff Static Site",
    file: "experiments/001-agentfactory-static-site-developer-handoff.md",
    slug: "esperimento-001-agentfactory-static-site-developer-handoff",
    group: "Esperimenti",
    summary: "Primo handoff operativo verso Developer Agent.",
  },
  {
    title: "001 - Static Site Implementation Plan",
    file: "experiments/001-agentfactory-static-site-implementation-plan.md",
    slug: "esperimento-001-agentfactory-static-site-implementation-plan",
    group: "Esperimenti",
    summary: "Primo piano operativo per modifiche controllate al sito statico.",
  },
  {
    title: "001 - Requirement Analyst Real Agent Run Plan",
    file: "experiments/001-requirement-analyst-real-agent-run-plan.md",
    slug: "esperimento-001-requirement-analyst-real-agent-run-plan",
    group: "Esperimenti",
    summary: "Piano del primo run reale del Requirement Analyst Agent.",
  },
  {
    title: "001 - Static Site Requirements Input",
    file: "experiments/001-agentfactory-static-site-requirements-input.md",
    slug: "esperimento-001-agentfactory-static-site-requirements-input",
    group: "Esperimenti",
    summary: "Brief input versionato per il primo run reale del Requirement Analyst Agent.",
  },
  {
    title: "002 - Requirement Analyst Real Agent Pre-flight",
    file: "experiments/002-requirement-analyst-real-agent-preflight.md",
    slug: "esperimento-002-requirement-analyst-real-agent-preflight",
    group: "Esperimenti",
    summary: "Checklist pre-flight concreta per il primo execute del Requirement Analyst Agent.",
  },
  {
    title: "Requirement Analysis Rules",
    file: "knowledge-base/requirement-analysis-rules.md",
    slug: "knowledge-requirement-analysis-rules",
    group: "Knowledge Base",
    summary: "Regole assorbite per migliorare i futuri documenti requisiti.",
  },
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function inlineMarkdown(text) {
  let out = escapeHtml(text);
  out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    const safeHref = escapeHtml(siteHrefFromMarkdown(href));
    return `<a href="${safeHref}">${escapeHtml(label)}</a>`;
  });
  return out;
}

function siteHrefFromMarkdown(href) {
  if (/^(https?:|mailto:|#)/.test(href)) return href;
  const cleanHref = href.replace(/\\/g, "/").replace(/^\.\//, "");
  const source = sources.find((item) => item.file.replace(/\\/g, "/") === cleanHref);
  if (source) return `${source.slug}.html`;
  return cleanHref.replace(/\.md$/, ".html");
}

function renderTable(lines) {
  const rows = lines
    .filter((line) => line.trim().startsWith("|") && line.trim().endsWith("|"))
    .map((line) => line.trim().slice(1, -1).split("|").map((cell) => cell.trim()));
  if (rows.length < 2) return "";

  const header = rows[0];
  const body = rows.slice(2);
  return [
    "<div class=\"table-wrap\"><table>",
    "<thead><tr>",
    ...header.map((cell) => `<th>${inlineMarkdown(cell)}</th>`),
    "</tr></thead>",
    "<tbody>",
    ...body.map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`),
    "</tbody></table></div>",
  ].join("");
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let index = 0;

  function collectParagraph() {
    const parts = [];
    while (
      index < lines.length &&
      lines[index].trim() !== "" &&
      !/^#{1,6}\s/.test(lines[index]) &&
      !/^```/.test(lines[index]) &&
      !/^\s*[-*]\s+/.test(lines[index]) &&
      !/^\s*\d+\.\s+/.test(lines[index]) &&
      !/^\|.+\|$/.test(lines[index].trim())
    ) {
      parts.push(lines[index].trim());
      index += 1;
    }
    if (parts.length) html.push(`<p>${inlineMarkdown(parts.join(" "))}</p>`);
  }

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    const fence = trimmed.match(/^```(\w+)?/);
    if (fence) {
      const lang = fence[1] || "";
      const code = [];
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        code.push(lines[index]);
        index += 1;
      }
      index += 1;
      if (lang.toLowerCase() === "mermaid") {
        html.push(`<div class="diagram"><div class="mermaid">${escapeHtml(code.join("\n"))}</div></div>`);
      } else {
        html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
      }
      continue;
    }

    const heading = trimmed.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      const level = Math.min(heading[1].length, 4);
      const text = heading[2].trim();
      const id = slugify(text);
      html.push(`<h${level} id="${id}">${inlineMarkdown(text)}</h${level}>`);
      index += 1;
      continue;
    }

    if (/^\|.+\|$/.test(trimmed)) {
      const tableLines = [];
      while (index < lines.length && /^\|.+\|$/.test(lines[index].trim())) {
        tableLines.push(lines[index]);
        index += 1;
      }
      html.push(renderTable(tableLines));
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\s*[-*]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*[-*]\s+/, ""));
        index += 1;
      }
      html.push(`<ul>${items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*\d+\.\s+/, ""));
        index += 1;
      }
      html.push(`<ol>${items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ol>`);
      continue;
    }

    collectParagraph();
  }

  return html.join("\n");
}

function navHtml(activeSlug) {
  const hrefPrefix = activeSlug === "home" ? "pages/" : "";
  const groups = [...new Set(sources.map((source) => source.group))];
  return groups
    .map((group) => {
      const groupSources = sources.filter((source) => source.group === group);
      const isOpen =
        activeSlug === "home"
          ? group === "Lezioni"
          : groupSources.some((source) => source.slug === activeSlug);
      const links = groupSources
        .map((source) => {
          const href = `${hrefPrefix}${source.slug}.html`;
          const active = source.slug === activeSlug ? " aria-current=\"page\"" : "";
          return `<a${active} href="${href}"><span>${escapeHtml(source.title)}</span></a>`;
        })
        .join("");
      const open = isOpen ? " open" : "";
      return `<details class="nav-group"${open}><summary>${group}</summary>${links}</details>`;
    })
    .join("");
}

function layout({ title, body, activeSlug, pageClass = "" }) {
  const isIndex = activeSlug === "home";
  const prefix = isIndex ? "" : "../";
  const logoSrc = `${prefix}${logoPath}?v=${assetVersion}`;
  return `<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} | ${siteTitle}</title>
  <meta name="description" content="${escapeHtml(tagline)}">
  <meta name="author" content="${escapeHtml(siteAuthor)}">
  <link rel="icon" type="image/png" sizes="64x64" href="${prefix}${faviconPath}?v=${assetVersion}">
  <link rel="apple-touch-icon" sizes="180x180" href="${prefix}${appleTouchIconPath}?v=${assetVersion}">
  <link rel="stylesheet" href="${prefix}styles.css?v=${assetVersion}">
</head>
<body class="${pageClass}">
  <div class="scanline" aria-hidden="true"></div>
  <header class="topbar">
    <a class="brand" href="${prefix}index.html" aria-label="AgentFactory home">
      <span class="brand-mark"><img src="${logoSrc}" width="38" height="38" style="display:block;width:38px;height:38px;object-fit:contain;" alt="" aria-hidden="true"></span>
      <span>
        <strong>AgentFactory</strong>
        <small>Manuale multi-agent</small>
      </span>
    </a>
    <button class="menu-button" type="button" aria-label="Apri navigazione" aria-expanded="false" data-menu-button>
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>
  <div class="shell">
    <aside class="sidebar" data-sidebar>
      <nav aria-label="Indice sito">
        ${navHtml(activeSlug)}
      </nav>
    </aside>
    <main class="content">
      ${body}
      ${siteFooter(prefix)}
    </main>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js"></script>
  <script src="${prefix}site.js?v=${assetVersion}"></script>
</body>
</html>`;
}

function siteFooter(prefix) {
  const logoSrc = `${prefix}${logoPath}?v=${assetVersion}`;
  return `<footer class="site-footer">
    <span class="footer-brand"><img src="${logoSrc}" width="22" height="22" style="display:block;width:22px;height:22px;object-fit:contain;" alt="" aria-hidden="true">Prodotto da ${escapeHtml(siteAuthor)}</span>
    <span>AgentFactory manuale e laboratorio multi-agent</span>
  </footer>`;
}

function pageBody(source, rendered) {
  return `<article class="doc-page">
  <div class="page-meta">
    <span class="page-kicker">${escapeHtml(source.group)}</span>
  </div>
  <h1>${escapeHtml(source.title)}</h1>
  <p class="lead">${escapeHtml(source.summary)}</p>
  <div class="source-chip">${escapeHtml(source.file)}</div>
  <section class="markdown-body">
    ${rendered}
  </section>
</article>`;
}

function indexBody() {
  const wordmarkSrc = `${wordmarkPath}?v=${assetVersion}`;

  return `<section class="hero">
    <div class="hero-copy">
      <p class="eyebrow">AI Agent Systems Manual</p>
      <h1 class="hero-title-logo">
        <img class="hero-title-wordmark" src="${wordmarkSrc}" width="1050" height="279" style="display:block;width:100%;max-width:100%;height:auto;object-fit:contain;" alt="AgentFactory">
      </h1>
      <p>${tagline}</p>
      <div class="hero-actions">
        <a class="primary-action" href="pages/manuale.html">Apri il manuale</a>
        <a class="secondary-action" href="pages/lezione-00.html">Inizia dalla lezione 00</a>
      </div>
      <p class="hero-credit">Prodotto da ${escapeHtml(siteAuthor)}</p>
    </div>
    <div class="hero-panel home-summary" aria-label="Descrizione AgentFactory">
      <p class="eyebrow">Obiettivo</p>
      <h2>Da zero a progettazione agentica professionale</h2>
      <p>AgentFactory e' un manuale operativo e un laboratorio reale per imparare a progettare agenti AI, workflow multi-agent, runtime controllati, artefatti verificabili e cicli di miglioramento basati su review e knowledge absorption.</p>
      <p>Partiamo da concetti semplici, file Markdown e singoli agenti. Arriviamo gradualmente a una factory capace di creare, governare e migliorare agenti specializzati per progetti diversi.</p>
      <p class="home-summary-focus">Competenze chiave: prompt operativo, Agent Card, output contract, governance, Python minimo, API, review, memoria e orchestrazione multi-agent.</p>
    </div>
  </section>`;
}

function build() {
  ensureDir(docsDir);
  ensureDir(pagesDir);

  for (const source of sources) {
    const markdownPath = path.join(root, source.file);
    const markdown = fs.readFileSync(markdownPath, "utf8");
    const rendered = renderMarkdown(markdown);
    const html = layout({
      title: source.title,
      body: pageBody(source, rendered),
      activeSlug: source.slug,
      pageClass: "doc",
    });
    fs.writeFileSync(path.join(pagesDir, `${source.slug}.html`), html);
  }

  fs.writeFileSync(
    path.join(docsDir, "index.html"),
    layout({
      title: "Manuale e laboratorio",
      body: indexBody(),
      activeSlug: "home",
      pageClass: "home",
    })
  );
}

build();
