# Changelog

Tutte le modifiche principali ad AgentFactory verranno tracciate qui.

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
