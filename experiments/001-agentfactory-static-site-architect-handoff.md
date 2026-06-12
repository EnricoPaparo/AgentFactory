# Architect Handoff - AgentFactory Static Site

## Metadati

```text
Progetto: AgentFactory Static Site
Versione handoff: v0.1
Data: 2026-06-12
Stato: Validabile
```

## Mittente

```text
Agente mittente: Requirement Analyst Agent simulato manualmente
Responsabilita' del mittente: trasformare il brief e le iterazioni utente in requisiti verificabili.
Artefatto prodotto dal mittente: experiments/001-agentfactory-static-site-requirements.md
```

## Ricevente

```text
Agente ricevente: Architect Agent
Responsabilita' del ricevente: proporre una struttura architetturale semplice, statica, mantenibile e adatta alla crescita del manuale.
Output atteso dal ricevente: Architecture Decision Record per il sito statico AgentFactory.
```

## Artefatti sorgente

```text
- experiments/001-agentfactory-static-site-requirements.md
- experiments/001-agentfactory-static-site-requirements-review.md
- experiments/001-agentfactory-static-site-knowledge-absorption.md
- knowledge-base/requirement-analysis-rules.md
- templates/requirement-analysis-output-template.md
```

## Obiettivo del passaggio

```text
Preparare il lavoro dell'Architect Agent affinche' possa progettare l'evoluzione del sito statico AgentFactory senza perdere requisiti, vincoli, priorita' e decisioni aperte.
```

## Contesto essenziale

```text
- AgentFactory e' un manuale e laboratorio reale per imparare sistemi multi-agent.
- Il sito statico serve a rendere il materiale consultabile, presentabile e proiettabile.
- Il repository non contiene solo il manuale: contiene anche agenti, template, esperimenti, knowledge base e sito.
- La fonte primaria dei contenuti resta Markdown.
- Il sito attuale e' generato da tools/build-site.js dentro docs/.
- GitHub Pages e' gia' il target di pubblicazione.
```

## Fatti certi

```text
- Il sito deve essere statico.
- Il sito deve essere consultabile da GitHub Pages.
- Le lezioni devono essere pagine HTML navigabili.
- Il design deve restare dark mode, moderno e coerente con il logo AgentFactory.
- La sidebar deve essere responsive, compatta e organizzata per sezioni.
- Il manuale crescera' con nuove lezioni e artefatti.
- Il sito deve includere materiali diversi dalle lezioni: agenti, template, esperimenti e knowledge base.
- Il generatore deve poter essere rilanciato dopo modifiche Markdown.
```

## Ipotesi

```text
- In futuro potrebbe servire ricerca interna.
- In futuro potrebbe servire un indice interno per lezioni lunghe.
- In futuro potrebbe convenire passare a un generatore statico piu' strutturato.
- In futuro potrebbero servire pagine dedicate per versioni, stati o progressi delle lezioni.
```

## Domande aperte

```text
- Domanda: serve una ricerca interna gia' nella prossima evoluzione?
  Tipo: Rimandabile
  Impatto sul ricevente: l'Architect deve evitare scelte che rendano difficile aggiungerla, ma non deve progettarla come requisito immediato.

- Domanda: serve un indice interno automatico per lezioni molto lunghe?
  Tipo: Rimandabile
  Impatto sul ricevente: considerare struttura HTML compatibile con headings e anchor.

- Domanda: quando passare da generatore custom a framework statico?
  Tipo: Informativa
  Impatto sul ricevente: valutare soglie di complessita', non migrare senza necessita'.
```

## Scope del ricevente

```text
- Valutare l'architettura attuale del sito statico.
- Proporre una struttura sostenibile per crescita di lezioni, template, esperimenti e knowledge base.
- Definire quali decisioni tecniche sono gia' appropriate e quali rimandare.
- Proporre un output architetturale leggibile e versionabile.
- Preparare un handoff futuro per Developer Agent.
```

## Out of scope del ricevente

```text
- Non scrivere codice applicativo.
- Non introdurre backend.
- Non introdurre database.
- Non progettare autenticazione.
- Non migrare subito ad Astro, MkDocs, Vite o altri framework.
- Non modificare la knowledge base permanente.
- Non cambiare palette o layout senza una richiesta esplicita.
```

## Vincoli

```text
- Il sito deve restare statico nella fase corrente.
- Il contenuto sorgente deve restare in Markdown.
- La pubblicazione deve restare compatibile con GitHub Pages.
- Il design deve rimanere leggibile, non solo scenografico.
- Ogni scelta deve essere spiegabile nel manuale.
- Non introdurre complessita' tecnica non necessaria per il livello attuale del percorso.
```

## Priorita'

```text
Must:
- preservare consultabilita' del manuale;
- mantenere generazione da Markdown;
- mantenere compatibilita' GitHub Pages;
- mantenere navigazione chiara.

Should:
- prevedere crescita delle sezioni;
- facilitare aggiunta di template, esperimenti e knowledge base;
- rendere possibile una futura ricerca interna;
- mantenere design coerente con logo e dark mode.

Could:
- proporre indice automatico per pagine lunghe;
- proporre stato delle lezioni;
- proporre strategia futura per framework statico se il sito cresce molto.
```

## Rischi da considerare

```text
- Rischio: il generatore custom cresce troppo e diventa difficile da mantenere.
  Impatto: Medio
  Mitigazione attesa: definire soglie per eventuale migrazione futura.

- Rischio: la navigazione laterale diventa troppo lunga.
  Impatto: Medio
  Mitigazione attesa: mantenere gruppi richiudibili e valutare ricerca/indice in futuro.

- Rischio: il sito diventa piu' scenografico che leggibile.
  Impatto: Alto
  Mitigazione attesa: conservare priorita' su leggibilita', proiezione e consultazione.

- Rischio: l'architettura anticipa bisogni non ancora validati.
  Impatto: Medio
  Mitigazione attesa: distinguere scelte immediate e opzioni future.
```

## Privilegi consentiti

```text
Lettura: MANUAL.md, ROADMAP.md, GLOSSARY.md, lessons/, agents/, templates/, experiments/, knowledge-base/, docs/, tools/build-site.js.
Scrittura: solo proposta architetturale in experiments/ o templates/ se autorizzato.
Esecuzione comandi: non necessaria nella simulazione manuale.
Accesso esterno: no.
Modifica knowledge base: no; puo' proporre note candidate.
```

## Privilegi vietati

```text
- Non modificare direttamente file di produzione del sito.
- Non cambiare deploy GitHub Pages.
- Non installare framework o dipendenze.
- Non cancellare contenuti esistenti.
- Non aggiornare knowledge base permanente.
```

## Condizioni di stop

```text
- Fermarsi se una scelta richiede migrazione tecnologica immediata.
- Fermarsi se una decisione implica costi o servizi esterni.
- Fermarsi se per procedere serve scegliere un framework non ancora validato.
- Fermarsi se il brief architetturale entra in conflitto con il vincolo di sito statico semplice.
```

## Output atteso

```text
Formato: Markdown
Percorso output suggerito: experiments/001-agentfactory-static-site-architecture.md
Sezioni obbligatorie:
- contesto;
- obiettivi architetturali;
- decisioni immediate;
- alternative scartate;
- struttura proposta;
- rischi;
- trade-off;
- handoff per Developer Agent;
- note candidate per Knowledge Compiler.
```

## Criteri di accettazione dell'output

```text
- L'Architecture Decision Record distingue scelte immediate e opzioni future.
- Non introduce backend o framework senza motivazione forte.
- Spiega perche' mantenere o evolvere il generatore attuale.
- Tiene conto di lezioni, template, esperimenti e knowledge base.
- Produce un handoff utile per Developer Agent.
- Evidenzia rischi e trade-off.
```

## Handoff successivo previsto

```text
Prossimo agente: Developer Agent
Output da passare: Architecture Decision Record validato.
Condizioni per procedere: nessun gate bloccante aperto e scelte tecniche approvate.
```

## Note candidate per Knowledge Compiler

```text
- Gli handoff devono distinguere scope immediato e opzioni future.
- L'Architect Agent non deve trasformare ogni ipotesi in architettura.
- Un sito statico puo' restare semplice finche' il costo di manutenzione e' basso.
- Le decisioni architetturali devono essere tracciabili e spiegabili nel manuale.
```
