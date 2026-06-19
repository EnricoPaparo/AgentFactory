#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const sourceRoot = path.resolve(process.argv[2] || "C:/Users/Erry/Downloads/AISchool/AISchool");
const docsRoot = path.join(repoRoot, "docs");
const pagesRoot = path.join(docsRoot, "pages");
const dataPath = path.join(sourceRoot, "_data", "corso.json");

if (!fs.existsSync(dataPath)) {
  console.error(`AISchool metadata not found: ${dataPath}`);
  process.exit(1);
}

fs.mkdirSync(pagesRoot, { recursive: true });

const courseData = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const course = courseData.corso;
const chapters = courseData.capitoli;

function slugify(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inlineMarkdown(text) {
  let out = escapeHtml(text);
  out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return out;
}

function parseFrontmatter(raw) {
  if (!raw.startsWith("---\n")) return [{}, raw];
  const end = raw.indexOf("\n---", 4);
  if (end === -1) return [{}, raw];
  const yaml = raw.slice(4, end).trimEnd();
  const body = raw.slice(end + 4).replace(/^\s*\n/, "");
  const meta = {};
  let currentKey = null;
  for (const line of yaml.split(/\r?\n/)) {
    const listMatch = line.match(/^\s+-\s+(.+)$/);
    if (listMatch && currentKey) {
      if (!Array.isArray(meta[currentKey])) meta[currentKey] = [];
      meta[currentKey].push(unquote(listMatch[1].trim()));
      continue;
    }
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!kv) continue;
    currentKey = kv[1];
    const value = kv[2].trim();
    if (value === "[]") meta[currentKey] = [];
    else if (value.startsWith("[") && value.endsWith("]")) {
      meta[currentKey] = value.slice(1, -1).split(",").map((v) => unquote(v.trim())).filter(Boolean);
    } else if (value === "") meta[currentKey] = [];
    else meta[currentKey] = unquote(value);
  }
  return [meta, body];
}

function unquote(value) {
  return String(value).replace(/^['\"]|['\"]$/g, "");
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let paragraph = [];
  let list = null;
  let code = null;
  let table = [];

  function flushParagraph() {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  }
  function flushList() {
    if (!list) return;
    html.push(`<${list.type}>${list.items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</${list.type}>`);
    list = null;
  }
  function flushTable() {
    if (!table.length) return;
    if (table.length >= 2 && /^\s*\|?\s*:?-{3,}:?/.test(table[1])) {
      const rows = table.filter((_, i) => i !== 1).map((row) => row.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim()));
      const [head, ...body] = rows;
      html.push(`<div class="table-wrap"><table><thead><tr>${head.map((c) => `<th>${inlineMarkdown(c)}</th>`).join("")}</tr></thead><tbody>${body.map((r) => `<tr>${r.map((c) => `<td>${inlineMarkdown(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
    } else {
      table.forEach((row) => html.push(`<p>${inlineMarkdown(row)}</p>`));
    }
    table = [];
  }
  function flushAll() { flushParagraph(); flushList(); flushTable(); }

  for (const line of lines) {
    const fence = line.match(/^```(.*)$/);
    if (fence) {
      if (code) {
        html.push(`<pre><code>${escapeHtml(code.lines.join("\n"))}</code></pre>`);
        code = null;
      } else {
        flushAll();
        code = { lang: fence[1].trim(), lines: [] };
      }
      continue;
    }
    if (code) { code.lines.push(line); continue; }

    if (!line.trim()) { flushAll(); continue; }
    if (/^---+$/.test(line.trim())) { flushAll(); html.push("<hr>"); continue; }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushAll();
      const level = Math.min(6, heading[1].length + 1); // page title already uses h1
      const text = heading[2].replace(/\s*#+\s*$/, "");
      const id = slugify(text);
      html.push(`<h${level} id="${id}">${inlineMarkdown(text)}</h${level}>`);
      continue;
    }

    if (/^\|.*\|\s*$/.test(line)) {
      flushParagraph(); flushList();
      table.push(line);
      continue;
    } else if (table.length) flushTable();

    const quote = line.match(/^>\s?(.*)$/);
    if (quote) {
      flushParagraph(); flushList();
      html.push(`<blockquote>${inlineMarkdown(quote[1])}</blockquote>`);
      continue;
    }

    const bullet = line.match(/^\s*[-*]\s+(.+)$/);
    const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
    if (bullet || ordered) {
      flushParagraph();
      const type = bullet ? "ul" : "ol";
      if (!list || list.type !== type) flushList();
      if (!list) list = { type, items: [] };
      list.items.push((bullet || ordered)[1]);
      continue;
    }

    paragraph.push(line.trim());
  }
  if (code) html.push(`<pre><code>${escapeHtml(code.lines.join("\n"))}</code></pre>`);
  flushAll();
  return html.join("\n");
}

function pageShell({ title, description, body, currentHref = "index.html", rootPrefix = "" }) {
  const nav = chapters.map((chapter) => `<a href="${rootPrefix}index.html#${chapter.slug}">${String(chapter.id).padStart(2, "0")}</a>`).join("");
  return `<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} | AgentFactory</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="author" content="Enrico Paparo">
  <link rel="icon" type="image/png" sizes="64x64" href="${rootPrefix}assets/favicon.png?v=aischool-20260619">
  <link rel="apple-touch-icon" sizes="180x180" href="${rootPrefix}assets/apple-touch-icon.png?v=aischool-20260619">
  <link rel="stylesheet" href="${rootPrefix}styles.css?v=aischool-20260619">
</head>
<body class="aischool-page">
  <header class="topbar landing-topbar">
    <a class="brand" href="${rootPrefix}index.html" aria-label="AgentFactory home">
      <span class="brand-mark"><img src="${rootPrefix}assets/agentfactory-logo.png?v=aischool-20260619" width="38" height="38" alt="" aria-hidden="true"></span>
      <span><strong>AgentFactory</strong><small>AISchool</small></span>
    </a>
    <nav class="topnav iconnav" aria-label="Navigazione capitoli">
      ${nav}
      <a href="https://github.com/EnricoPaparo/AgentFactory" aria-label="Repository GitHub" title="Repository GitHub"><span class="nav-glyph nav-glyph-gh" aria-hidden="true">GH</span></a>
    </nav>
  </header>
${body}
  <script src="${rootPrefix}site.js?v=aischool-20260619"></script>
</body>
</html>
`;
}

function lessonFileFor(chapter, lesson) {
  const dir = path.join(sourceRoot, chapter.slug);
  const files = fs.readdirSync(dir).filter((name) => name.startsWith(lesson.id) && name.endsWith(".md"));
  if (!files.length) throw new Error(`Lesson file not found for ${lesson.id}`);
  return path.join(dir, files[0]);
}

const lessons = [];
for (const chapter of chapters) {
  for (const lesson of chapter.lezioni) {
    const file = lessonFileFor(chapter, lesson);
    const raw = fs.readFileSync(file, "utf8");
    const [meta, parsedBody] = parseFrontmatter(raw);
    const body = parsedBody.replace(/^#\s+.+\n+/, "");
    const filename = `${lesson.id}-${slugify(meta.titolo || lesson.titolo)}.html`;
    lessons.push({ chapter, lesson, meta, body, filename, sourceFile: file });
  }
}

for (let i = 0; i < lessons.length; i++) {
  const item = lessons[i];
  const prev = lessons[i - 1];
  const next = lessons[i + 1];
  const concepts = Array.isArray(item.meta.concetti_chiave) ? item.meta.concetti_chiave : [];
  const objectives = Array.isArray(item.meta.obiettivi) ? item.meta.obiettivi : [];
  const metaCards = [
    ["Capitolo", `${String(item.chapter.id).padStart(2, "0")} · ${item.chapter.titolo}`],
    ["Durata", item.meta.durata_stimata || item.lesson.durata],
    ["Difficoltà", item.meta.difficolta || item.chapter.difficolta],
    ["Stato", item.meta.stato || item.lesson.stato],
  ];
  const body = `
  <main class="course-shell lesson-shell">
    <nav class="breadcrumb"><a href="../index.html">Home</a><span>/</span><a href="../index.html#${item.chapter.slug}">${escapeHtml(item.chapter.titolo)}</a><span>/</span><strong>${escapeHtml(item.lesson.id)}</strong></nav>
    <article class="lesson-article">
      <header class="lesson-hero">
        <p class="eyebrow">Lezione ${escapeHtml(item.lesson.id)}</p>
        <h1>${escapeHtml(item.meta.titolo || item.lesson.titolo)}</h1>
        ${item.meta.sottotitolo ? `<p class="lesson-subtitle">${escapeHtml(item.meta.sottotitolo)}</p>` : ""}
        <div class="lesson-meta-grid">${metaCards.map(([k, v]) => `<div><span>${escapeHtml(k)}</span><strong>${escapeHtml(v)}</strong></div>`).join("")}</div>
        ${concepts.length ? `<div class="tag-row">${concepts.map((c) => `<span>${escapeHtml(c)}</span>`).join("")}</div>` : ""}
      </header>
      ${objectives.length ? `<section class="objectives-card"><h2>Obiettivi</h2><ul>${objectives.map((o) => `<li>${escapeHtml(o)}</li>`).join("")}</ul></section>` : ""}
      <div class="markdown-body">${renderMarkdown(item.body)}</div>
      <footer class="lesson-pagination">
        ${prev ? `<a class="secondary-action" href="${prev.filename}">← ${escapeHtml(prev.lesson.id)} ${escapeHtml(prev.lesson.titolo)}</a>` : `<span></span>`}
        ${next ? `<a class="primary-action" href="${next.filename}">${escapeHtml(next.lesson.id)} ${escapeHtml(next.lesson.titolo)} →</a>` : `<a class="primary-action" href="../index.html">Torna all'indice</a>`}
      </footer>
    </article>
  </main>`;
  fs.writeFileSync(path.join(pagesRoot, item.filename), pageShell({
    title: item.meta.titolo || item.lesson.titolo,
    description: item.meta.sottotitolo || `${course.titolo}: ${item.lesson.titolo}`,
    body,
    rootPrefix: "../",
  }));
}

const firstLesson = lessons[0];
const indexBody = `
  <main class="course-shell">
    <section class="hero landing-hero course-hero">
      <div class="hero-copy">
        <p class="eyebrow">${escapeHtml(course.sottotitolo)}</p>
        <h1>${escapeHtml(course.titolo)}</h1>
        <p>Dal sito web statico alla progettazione di sistemi AI, LLM, agent package e workflow multi-agente supervisionati.</p>
        <div class="hero-actions">
          <a class="primary-action" href="pages/${firstLesson.filename}">Inizia dalla prima lezione</a>
          <a class="secondary-action" href="#indice-corso">Sfoglia il corso</a>
        </div>
      </div>
      <div class="hero-panel home-summary">
        <p class="eyebrow">Percorso completo</p>
        <h2>${course.totale_capitoli} capitoli · ${course.totale_lezioni} lezioni</h2>
        <p>Contenuti importati da AISchool e pubblicati come sito statico navigabile in GitHub Pages.</p>
        <div class="course-stats"><span>Base</span><span>Intermedio</span><span>Avanzato</span></div>
      </div>
    </section>

    <section id="indice-corso" class="section-band landing-section">
      <div class="section-heading"><div><p class="eyebrow">Indice</p><h2>Tutti i capitoli e le lezioni</h2></div></div>
      <div class="chapter-list">
        ${chapters.map((chapter) => {
          const chapterLessons = lessons.filter((item) => item.chapter.id === chapter.id);
          return `<article id="${chapter.slug}" class="chapter-card">
            <header>
              <span class="chapter-number">${String(chapter.id).padStart(2, "0")}</span>
              <div><h3>${escapeHtml(chapter.titolo)}</h3><p>${escapeHtml(chapter.difficolta)} · ${chapterLessons.length} lezioni</p></div>
            </header>
            <ol class="lesson-list">
              ${chapterLessons.map((item) => `<li><a href="pages/${item.filename}"><span>${escapeHtml(item.lesson.id)}</span><strong>${escapeHtml(item.meta.titolo || item.lesson.titolo)}</strong><small>${escapeHtml(item.meta.durata_stimata || item.lesson.durata)}</small></a></li>`).join("")}
            </ol>
          </article>`;
        }).join("\n")}
      </div>
    </section>
  </main>`;

fs.writeFileSync(path.join(docsRoot, "index.html"), pageShell({
  title: course.titolo,
  description: `${course.sottotitolo}: ${course.totale_lezioni} lezioni in ${course.totale_capitoli} capitoli.`,
  body: indexBody,
}));

const readme = `# AgentFactory

Repository del sito statico **AgentFactory / AISchool** pubblicato con GitHub Pages.

Il sito contiene il corso **${course.titolo}**: ${course.totale_capitoli} capitoli e ${course.totale_lezioni} lezioni importate dai sorgenti Markdown AISchool.

## Sito

Il sito pubblicabile si trova in:

\`\`\`text
docs/
\`\`\`

File principale:

\`\`\`text
docs/index.html
\`\`\`

GitHub Pages deve essere configurato su:

- branch: \`main\`
- folder: \`/docs\`

URL previsto:

\`\`\`text
https://enricopaparo.github.io/AgentFactory/
\`\`\`

## Aggiornare i contenuti

I contenuti vengono importati dal repository/cartella AISchool con:

\`\`\`bash
node tools/import-aischool.js "C:/Users/Erry/Downloads/AISchool/AISchool"
\`\`\`

Lo script rigenera \`docs/index.html\` e tutte le pagine in \`docs/pages/\`.
`;
fs.writeFileSync(path.join(repoRoot, "README.md"), readme);

console.log(`Imported ${lessons.length} lessons from ${sourceRoot}`);
console.log(`Generated ${path.relative(repoRoot, path.join(docsRoot, "index.html"))} and ${lessons.length} lesson pages.`);
