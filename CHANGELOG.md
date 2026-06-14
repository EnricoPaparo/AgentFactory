# Changelog

Tutte le modifiche principali ad AgentFactory verranno tracciate qui.

## 2026-06-13

### Aggiunto

- Lezione 17: runtime Python minimo per il primo agente reale.
- Script `runtime/run_requirement_analyst.py` con dry-run predefinito ed execute esplicito.
- Brief input versionato per il primo run del Requirement Analyst Agent.
- README runtime, requirements e configurazione esempio senza segreti.
- `.gitignore` per evitare commit accidentali di env, virtualenv e cache Python.
- Lezione 18: pre-flight del primo run API con checklist ambiente, modello, API key, budget e review.
- Template `templates/real-agent-preflight-checklist-template.md`.
- Prima checklist pre-flight concreta in `experiments/002-requirement-analyst-real-agent-preflight.md`.
- Ampliata la Lezione 11 con gestione della crescita di knowledge, Agent Card, prompt, template e stato degli agenti.
- Aggiornata la roadmap con Knowledge Curator, Agent Maintainer, Memory Steward, State Store, context budget e knowledge drift.
- Chiarita nella Lezione 04 la composizione fisica di un agente come package di file.
- Aggiunto `agents/requirement-analyst-package.md` come primo manifest fisico di un agente.
- Aggiunta `agents/AGENT_PACKAGE_SPEC.md` come specifica completa file-per-file di un Agent Package.
- Chiarita nelle lezioni 07, 12, 13 e 16 la differenza tra output contract, template, handoff e run record.
- Chiarita la differenza tra Requirement Analysis Document come fonte completa e Handoff Contract come contesto operativo primario del prossimo agente.
- Chiarita la differenza tra Architect Handoff come input operativo e Architecture Decision Record come output decisionale.

### Corretto

- Migliorata la sidebar mobile del sito: pannello opaco, backdrop, blocco scroll e chiusura con click fuori/Escape/link.
- Ammorbidita la palette del sito per ridurre affaticamento visivo durante la lettura prolungata.
- Resi generici i path default del primo Requirement Analyst Agent e chiarita la differenza tra agente minimo, factory completa e Developer Agent con tool.

## 2026-06-12

### Cambiato

- Ripulita la struttura del repository.
- Rimossa la prima versione troppo avanzata e poco graduale delle lezioni.
- Ricostruita la roadmap come percorso personale da fondamenta operative a Agent Factory.
- Ridotto il glossario ai concetti minimi necessari per iniziare.
- Ridotto il manuale a indice e metodo di lavoro.

### Aggiunto

- Template minimo per lezioni.
- Template minimo per artefatti.
- Template minimo per assorbimento conoscenza.
- Cartella `experiments/` per le prove reali.
- Lezione 02: definizione operativa di AI Agent.
- Lezione 03: scelta tra automazione, workflow, agente, pipeline multi-agent e Agent Factory.
- Lezione 04: progettazione di un agente tramite Agent Card.
- Lezione 05: prima Agent Card concreta, Requirement Analyst Agent.
- Lezione 06: mappa degli strumenti reali, inclusi n8n, OpenAI Agents SDK, CrewAI, LangGraph e OpenClaw.
- Lezione 07: template di output del Requirement Analyst Agent.
- Lezione 08: primo Requirement Analysis Document manuale.
- Lezione 09: valutazione dell'output del Requirement Analyst Agent.
- Agent Card `agents/requirement-analyst-agent.md`.
- Template `templates/requirement-analysis-output-template.md`.
- Template `templates/requirement-analysis-review-checklist.md`.
- Esperimento `experiments/001-agentfactory-static-site-requirements.md`.
- Review `experiments/001-agentfactory-static-site-requirements-review.md`.
- Sito statico iniziale in `docs/`, generato dai Markdown del manuale.
- Script `tools/build-site.js` per rigenerare le pagine HTML.

### Aggiornato

- Reso il template lezione piu' dettagliato e adatto a capitoli approfonditi.
- Ampliata la Lezione 02 con spiegazioni, esempi professionali, anti-pattern e checklist.
- Integrati nella Lezione 02 i dubbi su fragilita' di un agente singolo nei progetti complessi e sul valore di review/test separati.
- Integrato nella Lezione 04 il chiarimento su Agent Card, contesto operativo e memoria permanente.
- Aggiornato il glossario con automazione e workflow.
- Aggiornato il glossario con privilegi, minimo privilegio e criteri di qualita'.
- Aggiunti diagrammi Mermaid alle prime lezioni per migliorare consultazione web e spiegazione visuale.
- Aggiornato il glossario con requisiti, scope e Requirement Analyst Agent.
- Aggiornata la roadmap con gli strumenti reali da studiare nel percorso.
- Aggiornato il glossario con n8n, OpenAI Agents SDK, CrewAI, LangGraph e OpenClaw.
- Aggiornato il README con le istruzioni minime del sito statico.
- Aggiornata la Agent Card del Requirement Analyst Agent con il template ufficiale di output.
- Aggiornata la roadmap con output contract e Requirement Analysis Document.
- Aggiornata la roadmap con il primo artefatto requisiti salvato manualmente.
- Aggiornato il sito statico con dettagli futuristici: cornici HUD, micro-animazioni, badge di stato, sidebar neon e header per blocchi codice/diagrammi.
- Aggiornata la roadmap con la prima review manuale di un output agentico.
- Aggiunta attribuzione elegante del sito a Enrico Paparo.
- Preparato il sito in `docs/` per la pubblicazione con GitHub Pages.
- Ampliata la Lezione 07 con Output Contract Steward, schema drift ed evoluzione governata dei template.
- Aggiornato il sito con logo AgentFactory, wordmark in landing e palette coerente con il marchio.
- Corretto il rendering dei loghi sul sito pubblicato con dimensioni robuste e cache-busting degli asset.
- Aggiunta la Lezione 10 sulla knowledge absorption e aggiornato il template dedicato.
- Aggiunta la Lezione 11 con la prima knowledge absorption candidate reale e regole requisiti assorbite.
- Aggiunta la Lezione 12 su handoff e contratti tra agenti con template e primo handoff verso Architect Agent.
- Aggiunta la Lezione 13 su Architect Agent e ADR con Agent Card, template e prima decisione architetturale.
- Aggiunta la Lezione 14 sulla review degli ADR con checklist e prima review dell'output Architect Agent.
- Aggiunta la Lezione 15 su Developer Agent e Implementation Plan con Agent Card, template e primo piano operativo.
- Aggiunta la Lezione 16 su prompt operativo e runtime minimo per il primo agente reale, con prompt, run record e regole di esecuzione.
