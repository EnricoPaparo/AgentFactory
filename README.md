# AgentFactory

Manuale personale e laboratorio pratico per diventare capace di progettare, costruire e governare sistemi multi-agent professionali.

L'obiettivo non e' sapere "qualcosina" sugli AI Agent. L'obiettivo e' arrivare a progettare una vera Agent Factory: un sistema capace di creare agenti per progetti diversi, assegnare responsabilita' e privilegi, orchestrare workflow, produrre risultati verificabili e riassorbire conoscenza utile dopo ogni lavoro.

## Obiettivo operativo

Questo repository serve a costruire, passo dopo passo:

- un manuale personale di apprendimento;
- una libreria di concetti spiegati in modo semplice;
- template riutilizzabili;
- schede di agenti;
- prove reali di agenti e pipeline;
- una knowledge base che cresce solo con conoscenza validata.

## Regola guida

Ogni file deve aiutare a rispondere a una domanda:

```text
Questa cosa mi rende piu' capace di progettare, costruire o governare agenti AI professionali?
```

Se la risposta e' no, il file non serve.

## Struttura minima

```text
AgentFactory/
  README.md
  ROADMAP.md
  MANUAL.md
  GLOSSARY.md
  CHANGELOG.md
  lessons/
  templates/
  agents/
  experiments/
  knowledge-base/
  governance/
```

## Metodo

Il percorso parte dalle fondamenta:

1. imparare il linguaggio operativo: Markdown, artefatto, template, Agent Card;
2. capire cosa e' davvero un agente;
3. progettare agenti prima senza codice;
4. costruire il primo agente reale;
5. passare a pipeline multi-agent;
6. aggiungere memoria, valutazione, privilegi e miglioramento controllato;
7. arrivare a una Agent Factory.

## Stato attuale

- [x] Repository ripulito e riportato a una base essenziale
- [x] Roadmap ricostruita come percorso personale da zero a livello avanzato
- [x] Template minimi iniziali
- [x] Prime lezioni operative
- [x] Primo sito statico consultabile in `docs/`
- [x] Prima Agent Card
- [x] Primo template di output del Requirement Analyst Agent
- [x] Primo Requirement Analysis Document manuale
- [x] Prima review manuale di un output agentico
- [x] Sito pronto per pubblicazione GitHub Pages
- [ ] Primo agente reale

## Sito statico

Il manuale e' consultabile anche come sito HTML/CSS statico nella cartella `docs/`.

Per rigenerarlo dai file Markdown:

```text
node tools/build-site.js
```

Il file principale e':

```text
docs/index.html
```

## Pubblicazione GitHub Pages

Il repository e' gia' pronto per essere pubblicato con GitHub Pages dalla cartella `docs/`.

Configurazione consigliata su GitHub:

1. aprire `Settings`;
2. entrare in `Pages`;
3. in `Build and deployment`, scegliere `Deploy from a branch`;
4. selezionare branch `main`;
5. selezionare cartella `/docs`;
6. salvare.

Una volta attivo, il sito sara' disponibile qui:

```text
https://enricopaparo.github.io/AgentFactory/
```

Il file `docs/.nojekyll` evita che GitHub Pages interpreti il sito come progetto Jekyll.
