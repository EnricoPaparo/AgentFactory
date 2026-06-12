# Developer Handoff - AgentFactory Static Site

## Metadati

```text
Progetto: AgentFactory Static Site
Versione handoff: v0.1
Data: 2026-06-12
Stato: Validabile
```

## Mittente

```text
Agente mittente: Architect Agent / Reviewer Agent simulati manualmente
Responsabilita' del mittente: trasformare ADR e review in un passaggio operativo controllato verso Developer Agent.
Artefatti prodotti dal mittente:
- experiments/001-agentfactory-static-site-architecture.md
- experiments/001-agentfactory-static-site-architecture-review.md
```

## Ricevente

```text
Agente ricevente: Developer Agent
Responsabilita' del ricevente: preparare e poi applicare modifiche controllate al sito statico, rispettando ADR, handoff e privilegi.
Output atteso dal ricevente: Implementation Plan prima di qualunque modifica operativa.
```

## Artefatti sorgente

```text
- experiments/001-agentfactory-static-site-requirements.md
- experiments/001-agentfactory-static-site-architecture.md
- experiments/001-agentfactory-static-site-architecture-review.md
- templates/implementation-plan-template.md
- agents/developer-agent.md
```

## Obiettivo del passaggio

```text
Preparare il Developer Agent a lavorare sul sito statico AgentFactory senza introdurre framework, dipendenze o modifiche fuori scope.
```

## Contesto essenziale

```text
- Il sito e' statico e generato da Markdown.
- Il generatore principale e' `tools/build-site.js`.
- L'output pubblicabile e' in `docs/`.
- GitHub Pages usa il contenuto statico.
- L'ADR ha deciso di mantenere il generatore custom nella fase corrente.
- La review ADR consente di procedere con riserve non bloccanti.
```

## Scope del Developer Agent

```text
- Preparare Implementation Plan.
- Aggiornare sorgenti Markdown quando autorizzato.
- Aggiornare `tools/build-site.js` quando si aggiungono pagine pubbliche.
- Rigenerare `docs/` con il comando autorizzato.
- Verificare home, sidebar e pagine generate.
```

## Out of scope

```text
- Non introdurre framework.
- Non installare dipendenze.
- Non cambiare architettura.
- Non modificare deploy GitHub Pages.
- Non cancellare contenuti.
- Non modificare knowledge base permanente salvo task specifico.
- Non fare refactor ampi del generatore.
```

## File autorizzati in lettura

```text
- MANUAL.md
- ROADMAP.md
- GLOSSARY.md
- agents/
- lessons/
- templates/
- experiments/
- knowledge-base/
- tools/build-site.js
- docs/
```

## File autorizzati in scrittura nella fase corrente

```text
- agents/developer-agent.md
- templates/implementation-plan-template.md
- experiments/001-agentfactory-static-site-implementation-plan.md
- MANUAL.md
- ROADMAP.md
- GLOSSARY.md
- CHANGELOG.md
- tools/build-site.js
- docs/
```

## Privilegi consentiti

```text
Lettura: repo e artefatti rilevanti.
Scrittura: solo file autorizzati dal piano.
Esecuzione comandi: `node tools/build-site.js`, `git diff --check`, controlli di lettura/diff.
Accesso esterno: no.
Installazione dipendenze: no.
Deploy: no.
```

## Condizioni di stop

```text
- Serve installare una dipendenza.
- Serve cambiare framework o architettura.
- Serve modificare configurazione GitHub Pages.
- Serve cancellare file.
- Il build statico fallisce.
- Il task richiede file non autorizzati.
- Emergono conflitti con modifiche non previste.
```

## Output atteso

```text
Formato: Markdown
Percorso output: experiments/001-agentfactory-static-site-implementation-plan.md
Sezioni obbligatorie:
- obiettivo;
- scope;
- file autorizzati;
- piano step-by-step;
- comandi consentiti;
- verifiche;
- rischi;
- condizioni di stop;
- handoff successivo.
```

## Handoff successivo previsto

```text
Prossimo agente: Tester Agent / Reviewer Agent
Output da passare: Implementation Plan e, quando ci saranno modifiche operative, diff + report verifiche.
Condizioni per procedere: piano coerente con ADR e nessun gate bloccante.
```

## Note candidate per Knowledge Compiler

```text
- Un Developer Agent deve ricevere file autorizzati in lettura e scrittura.
- L'Implementation Plan deve precedere modifiche operative.
- Il Developer Agent non deve cambiare architettura implicitamente.
- Installazioni, deploy e cancellazioni sono human gate.
```
