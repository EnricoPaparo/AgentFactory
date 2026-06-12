# Implementation Plan - AgentFactory Static Site

## Metadati

```text
Progetto: AgentFactory Static Site
Implementation Plan: IP-001
Versione: v0.1
Data: 2026-06-12
Autore/Agente: Developer Agent simulato manualmente
Stato: Approvabile
```

## Artefatti sorgente

```text
- experiments/001-agentfactory-static-site-developer-handoff.md
- experiments/001-agentfactory-static-site-architecture.md
- experiments/001-agentfactory-static-site-architecture-review.md
- agents/developer-agent.md
- templates/implementation-plan-template.md
```

## Obiettivo del task

```text
Definire il modo controllato con cui il Developer Agent dovra' aggiungere o aggiornare contenuti del sito statico AgentFactory mantenendo generazione da Markdown, compatibilita' GitHub Pages e nessuna nuova dipendenza.
```

## Scope implementativo

```text
- Aggiornare file Markdown sorgente quando una nuova lezione, Agent Card, template o esperimento viene aggiunto.
- Registrare nuove pagine pubbliche nell'array `sources` di `tools/build-site.js`.
- Rigenerare `docs/` tramite `node tools/build-site.js`.
- Verificare che home, sidebar e pagine generate includano i nuovi contenuti.
- Eseguire controlli di coerenza testuale e diff.
```

## Out of scope

```text
- Non cambiare framework.
- Non installare pacchetti.
- Non introdurre backend.
- Non modificare deploy.
- Non cancellare contenuti.
- Non riscrivere il generatore statico.
- Non cambiare palette o layout se il task riguarda solo contenuto.
```

## File autorizzati in lettura

```text
- MANUAL.md
- ROADMAP.md
- GLOSSARY.md
- CHANGELOG.md
- agents/
- lessons/
- templates/
- experiments/
- knowledge-base/
- tools/build-site.js
- docs/
```

## File autorizzati in scrittura

```text
- file Markdown del nuovo contenuto richiesto;
- MANUAL.md se entra una nuova lezione;
- ROADMAP.md se cambia lo stato del percorso;
- GLOSSARY.md se entrano termini necessari;
- CHANGELOG.md;
- tools/build-site.js se il contenuto deve comparire sul sito;
- docs/ dopo rigenerazione.
```

## File o aree vietate

```text
- configurazioni di deploy non richieste;
- file segreti o credenziali;
- `.git/`;
- dipendenze o lockfile non esistenti;
- asset logo salvo richiesta esplicita;
- knowledge base permanente salvo task di knowledge absorption.
```

## Piano step-by-step

```text
1. Leggere handoff, ADR e review rilevanti.
2. Identificare tipo di contenuto da aggiungere: lezione, agente, template, esperimento o knowledge base.
3. Creare o aggiornare il Markdown sorgente.
4. Aggiornare indici manuali come `MANUAL.md` se necessario.
5. Aggiornare `ROADMAP.md`, `GLOSSARY.md` e `CHANGELOG.md` solo se il contenuto lo richiede.
6. Registrare la nuova pagina in `tools/build-site.js`.
7. Eseguire `node tools/build-site.js`.
8. Verificare con ricerca testuale che home, sidebar e pagina dedicata esistano.
9. Eseguire `git diff --check`.
10. Se possibile, verificare le pagine con browser/headless check.
11. Preparare report finale con file modificati e verifiche.
```

## Comandi consentiti

```text
- node tools/build-site.js
- git diff --check
- git status --short
- git diff --stat
- rg [pattern]
```

## Comandi vietati senza human gate

```text
- npm install
- npm update
- deploy
- cancellazione ricorsiva;
- git reset;
- git checkout per revert;
- comandi che usano credenziali o servizi esterni.
```

## Verifiche previste

```text
- Il build statico completa senza errori.
- La nuova pagina HTML esiste in `docs/pages/`.
- La home contiene la nuova card quando previsto.
- La sidebar contiene il nuovo link.
- La pagina corrente ha `aria-current`.
- `git diff --check` non mostra errori reali.
- Non sono state introdotte dipendenze.
```

## Rischi

```text
- Rischio: dimenticare di registrare una pagina in `tools/build-site.js`.
  Impatto: Medio
  Mitigazione: controllo con `rg` su slug e titolo.

- Rischio: modificare `docs/` senza aggiornare i Markdown sorgente.
  Impatto: Alto
  Mitigazione: mantenere Markdown come fonte primaria.

- Rischio: introdurre cambi layout non richiesti.
  Impatto: Medio
  Mitigazione: limitare CSS/JS ai task esplicitamente visuali.

- Rischio: accumulare complessita' nel generatore custom.
  Impatto: Medio
  Mitigazione: mantenere modifiche piccole e valutare ADR futuro se cresce troppo.
```

## Condizioni di stop

```text
- Il build statico fallisce.
- Serve una nuova dipendenza.
- Serve cambiare architettura.
- Serve modificare deploy.
- Serve cancellare file.
- Il task richiede file non autorizzati.
- Il diff include modifiche non spiegabili.
```

## Output atteso

```text
- Implementation Plan tracciato.
- Nuovi contenuti registrati nel sito quando richiesto.
- `docs/` rigenerato.
- Report di verifiche eseguite.
- Handoff per Tester/Reviewer quando ci saranno modifiche operative.
```

## Handoff successivo

```text
Prossimo agente: Tester Agent / Reviewer Agent
Output da passare: piano, diff, pagine generate e verifiche eseguite.
Verifiche gia' eseguite: build statico, ricerca testuale, diff check, eventuale browser check.
Rischi residui: navigazione e layout devono essere controllati visivamente quando cambiano UI o asset.
```

## Note candidate per Knowledge Compiler

```text
- Ogni nuova pagina pubblica deve essere aggiunta in `tools/build-site.js` e rigenerata in `docs/`.
- Markdown resta fonte primaria; HTML generato non deve diventare fonte manuale.
- Il Developer Agent deve dichiarare comandi consentiti prima di eseguirli.
- Il controllo di generazione sito e' parte dell'output, non un dettaglio finale.
```
