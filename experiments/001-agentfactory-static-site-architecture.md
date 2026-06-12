# Architecture Decision Record - AgentFactory Static Site

## Metadati

```text
Progetto: AgentFactory Static Site
ADR: ADR-001
Titolo: Mantenere generatore statico custom da Markdown nella fase corrente
Versione: v0.1
Data: 2026-06-12
Autore/Agente: Architect Agent simulato manualmente
Stato: Proposta accettabile
```

## Artefatti sorgente

```text
- experiments/001-agentfactory-static-site-requirements.md
- experiments/001-agentfactory-static-site-requirements-review.md
- experiments/001-agentfactory-static-site-knowledge-absorption.md
- experiments/001-agentfactory-static-site-architect-handoff.md
- knowledge-base/requirement-analysis-rules.md
```

## Contesto

```text
AgentFactory contiene un manuale a lezioni, agenti, template, esperimenti, knowledge base e sito statico. Il sito serve a rendere il percorso consultabile, presentabile e proiettabile. I contenuti sorgente sono file Markdown versionati nel repository. Il sito e' gia' pubblicabile tramite GitHub Pages dalla cartella docs/.
```

## Problema da decidere

```text
Decidere se mantenere nella fase corrente un generatore statico custom in Node.js oppure introdurre subito un framework/documentation generator piu' strutturato.
```

## Vincoli rilevanti

```text
- Il sito deve restare statico.
- Il contenuto sorgente deve restare in Markdown.
- La pubblicazione deve restare compatibile con GitHub Pages.
- Il percorso deve rimanere formativo e comprensibile passo passo.
- Non bisogna introdurre complessita' tecnica non necessaria.
- Il design attuale dark/cyberpunk con logo AgentFactory deve restare coerente.
```

## Decisione

```text
Mantenere nella fase corrente il generatore statico custom in Node.js (`tools/build-site.js`) che produce il sito in `docs/` a partire dai Markdown del repository.

Non introdurre per ora Astro, MkDocs, Vite, Docusaurus o altri framework.
```

## Motivazione

```text
Il progetto e' ancora nella fase di costruzione della pipeline agentica manuale. Il valore principale ora e' imparare a progettare agenti, contratti, output, review, knowledge absorption e handoff.

Il generatore custom attuale e' sufficiente per:
- convertire lezioni e materiali in HTML;
- mantenere sidebar e navigazione;
- pubblicare su GitHub Pages;
- includere agenti, template, esperimenti e knowledge base;
- mantenere pieno controllo didattico sul sito.

Introdurre un framework adesso sposterebbe attenzione e complessita' verso tooling frontend/documentale prima che il bisogno sia reale.
```

## Alternative considerate

```text
- Alternativa: Astro
  Vantaggi: ottimo per siti statici moderni, componenti, layout e crescita futura.
  Svantaggi: richiede migrazione, dipendenze, struttura progetto piu' complessa.
  Esito: Rimandata.
  Motivo: potente ma prematuro per la fase corrente.

- Alternativa: MkDocs
  Vantaggi: molto adatto a documentazione Markdown, navigazione e temi pronti.
  Svantaggi: meno personalizzazione visuale immediata rispetto al sito custom, richiede setup Python e scelta tema.
  Esito: Rimandata.
  Motivo: utile se il manuale diventa soprattutto documentazione strutturata e meno laboratorio visuale custom.

- Alternativa: Docusaurus
  Vantaggi: documentazione versionata, sidebar, ricerca e struttura robusta.
  Svantaggi: stack piu' pesante, dipendenze, maggiore astrazione.
  Esito: Scartata nella fase corrente.
  Motivo: sovradimensionata per il bisogno attuale.

- Alternativa: Vite app custom
  Vantaggi: esperienza frontend moderna e componibile.
  Svantaggi: trasformerebbe il sito in una web app, aumentando complessita' senza necessita'.
  Esito: Scartata nella fase corrente.
  Motivo: il progetto ora richiede sito statico documentale, non applicazione frontend.
```

## Conseguenze

```text
Positive:
- il sito resta semplice e controllabile;
- il contenuto resta in Markdown;
- GitHub Pages resta sufficiente;
- la curva di apprendimento resta coerente con il percorso;
- ogni pagina generata resta tracciabile nel repository.

Negative:
- funzionalita' come ricerca interna, indice automatico e versioning richiederanno lavoro custom o futura migrazione;
- il generatore puo' crescere e diventare meno manutenibile se aumentano troppe esigenze;
- alcune funzioni tipiche dei siti documentali non sono disponibili automaticamente.

Neutre:
- la struttura attuale resta valida finche' il numero di lezioni e categorie e' gestibile;
- la decisione dovra' essere rivalutata quando il sito diventera' piu' grande.
```

## Trade-off

```text
- Accetto meno funzionalita' pronte in cambio di semplicita' e controllo.
- Accetto un generatore custom in cambio di nessuna dipendenza framework.
- Rimando ricerca e indice automatico finche' il bisogno non diventa concreto.
- Preferisco stabilizzare pipeline e artefatti prima di ottimizzare lo stack web.
```

## Rischi architetturali

```text
- Rischio: il generatore custom diventa troppo grande.
  Impatto: Medio
  Probabilita': Media
  Mitigazione: definire condizioni di revisione e mantenere `tools/build-site.js` semplice.

- Rischio: la sidebar diventa troppo lunga.
  Impatto: Medio
  Probabilita': Alta
  Mitigazione: mantenere gruppi richiudibili e valutare ricerca/indice quando necessario.

- Rischio: il sito resta troppo manuale da aggiornare.
  Impatto: Medio
  Probabilita': Media
  Mitigazione: continuare a generare da Markdown e aggiungere nuove fonti in un solo array centralizzato.

- Rischio: la scelta custom ostacola funzioni future.
  Impatto: Medio
  Probabilita': Bassa nella fase corrente
  Mitigazione: rivalutare framework statico se emergono trigger chiari.
```

## Condizioni di revisione

```text
Rivalutare questa decisione se:
- il numero di lezioni supera una soglia che rende la navigazione difficile;
- serve ricerca interna full-text;
- servono versioni pubblicate del manuale;
- servono componenti interattivi complessi;
- `tools/build-site.js` diventa difficile da mantenere;
- il sito richiede gestione avanzata di tassonomie, tag o stati;
- la pubblicazione richiede flussi piu' complessi di GitHub Pages.
```

## Handoff per Developer Agent

```text
- Continuare a modificare i contenuti sorgente in Markdown.
- Aggiornare l'array `sources` in `tools/build-site.js` quando si aggiungono nuove pagine pubbliche.
- Rigenerare `docs/` con `node tools/build-site.js`.
- Non introdurre framework senza nuovo ADR.
- Mantenere CSS e JS statici.
- Preservare compatibilita' GitHub Pages.
- Evitare duplicazione manuale tra Markdown e HTML generato.
```

## Note per Tester Agent

```text
- Verificare che ogni nuova fonte registrata generi una pagina HTML.
- Verificare che la sidebar includa nuova lezione/template/esperimento.
- Verificare che la home includa le nuove cards.
- Verificare che i link Markdown interni vengano convertiti in link HTML.
- Verificare render desktop e mobile quando cambiano layout o asset.
- Verificare assenza di testo tagliato, sovrapposizioni o asset logo fuori scala.
```

## Note per Reviewer Agent

```text
- Controllare se la decisione e' ancora proporzionata alla dimensione del progetto.
- Controllare che non si stia accumulando complessita' nascosta in `tools/build-site.js`.
- Controllare che il design resti leggibile e non solo scenografico.
- Controllare che nuove categorie non rendano la navigazione confusa.
```

## Note candidate per Knowledge Compiler

```text
- Non introdurre framework finche' il bisogno non supera il costo di migrazione.
- Un ADR deve distinguere decisione immediata, alternative rimandate e condizioni di revisione.
- Nei progetti didattici, la semplicita' architetturale ha valore formativo.
- Le scelte temporanee devono avere trigger espliciti di rivalutazione.
```
