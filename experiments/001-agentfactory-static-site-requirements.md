# Requirement Analysis Document - AgentFactory Static Site

## Metadati

```text
Progetto: AgentFactory Static Site
Versione documento: v0.1
Data: 2026-06-12
Autore/Agente: Requirement Analyst Agent simulato manualmente
Stato: Bozza validabile
Fonte input: conversazione progettuale e iterazioni sul sito statico AgentFactory
```

## Sintesi progetto

```text
Il progetto consiste nel creare un sito web statico per rendere il manuale AgentFactory consultabile, presentabile e proiettabile. Il sito deve essere semplice da mantenere, basato sui contenuti Markdown del repository, con design moderno in dark mode e palette cyberpunk. Deve includere navigazione laterale, pagine per lezioni e materiali, layout responsive e una struttura adatta a crescere con il manuale.
```

## Obiettivo di business

```text
Rendere AgentFactory non solo un repository tecnico, ma un materiale consultabile e presentabile, utile per studio personale, dimostrazione del percorso e futura esposizione didattica.
```

## Fatti certi

```text
- Il repository AgentFactory contiene un manuale progressivo a lezioni.
- Il sito deve essere statico, semplice e consultabile.
- Il design richiesto e' dark mode con palette cyberpunk.
- Il sito deve essere presentabile e proiettabile.
- Il manuale deve rimanere la fonte principale del percorso.
- Il sito deve includere le lezioni gia' presenti.
- La sidebar deve essere ordinata e responsive.
- Le sezioni della sidebar devono essere espandibili e richiudibili.
- La sidebar non deve risultare troppo scrollabile o dispersiva.
- La scrollbar della sidebar deve essere coerente con il design e non grigia standard.
- Il layout desktop deve usare bene gli spazi, senza sidebar schiacciata al bordo e senza contenuto disperso.
```

## Ipotesi

```text
- GitHub Pages e' un target naturale di pubblicazione, ma non ancora confermato come destinazione definitiva.
- Il sito restera' inizialmente senza backend.
- La generazione statica da Markdown e' sufficiente nella fase corrente.
- In futuro potrebbe servire ricerca interna se il numero di lezioni cresce molto.
- In futuro potrebbe servire una struttura piu' evoluta se aumentano template, esperimenti e knowledge base.
```

## Domande aperte

```text
- Il sito verra' pubblicato su GitHub Pages o restera' solo consultabile localmente per ora?
- Il manuale sara' pubblico o privato?
- Serve una ricerca interna gia' nella prima versione pubblicabile?
- Serve un indice interno per ogni lezione lunga?
- Serve una modalita' stampa/PDF o basta consultazione web?
- Serve evidenziare stato delle lezioni, per esempio bozza, validata, da rivedere?
```

## Attori e stakeholder

```text
- Autore/Docente: studia, aggiorna il manuale, presenta il materiale e governa il percorso.
- Studenti futuri: consulteranno il materiale come supporto teorico e didattico.
- Agenti futuri: useranno lezioni, template e artefatti come conoscenza strutturata.
- Reviewer umano: verifica leggibilita', coerenza e qualita' del materiale.
```

## Scope

```text
- Creare un sito statico consultabile da `docs/index.html`.
- Generare pagine HTML da file Markdown selezionati.
- Includere home, manuale, roadmap, glossario, lezioni, Agent Card e template rilevanti.
- Implementare design dark/cyberpunk coerente.
- Implementare sidebar responsive con sezioni espandibili.
- Rendere il sito leggibile su desktop e mobile.
- Mantenere il sito rigenerabile tramite script locale.
```

## Out of scope

```text
- Autenticazione utenti.
- Backend applicativo.
- Database.
- Commenti o collaborazione live.
- Ricerca full-text avanzata.
- CMS.
- Deploy automatico.
- Conversione PDF automatica.
- Editing delle lezioni dal sito.
```

## Requisiti funzionali

```text
RF-001 - Il sito deve mostrare una home del progetto AgentFactory.
Motivazione: dare al manuale un punto di ingresso presentabile.
Criterio di accettazione: aprendo `docs/index.html`, l'utente vede titolo AgentFactory, descrizione del progetto e accessi alle lezioni.

RF-002 - Il sito deve mostrare le lezioni del manuale come pagine HTML.
Motivazione: rendere consultabile il percorso senza aprire direttamente i file Markdown.
Criterio di accettazione: ogni lezione registrata nel generatore ha una pagina in `docs/pages/`.

RF-003 - Il sito deve includere una sidebar di navigazione.
Motivazione: permettere accesso rapido a manuale, roadmap, lezioni, agenti e template.
Criterio di accettazione: ogni pagina HTML mostra una sidebar con gruppi di navigazione.

RF-004 - La sidebar deve avere sezioni espandibili e richiudibili.
Motivazione: ridurre disordine visivo e scroll eccessivo.
Criterio di accettazione: i gruppi della sidebar possono essere aperti e chiusi tramite interazione utente.

RF-005 - Il gruppo corrente della sidebar deve restare aperto.
Motivazione: mantenere orientamento durante la consultazione.
Criterio di accettazione: aprendo una lezione, il gruppo Lezioni e' aperto e la lezione corrente e' evidenziata.

RF-006 - Il layout desktop deve posizionare sidebar e contenuto dentro un contenitore centrato.
Motivazione: evitare sidebar schiacciata al bordo e contenuto disperso su schermi larghi.
Criterio di accettazione: a viewport desktop, la shell principale ha larghezza massima e margini laterali responsive.

RF-007 - Il sito deve includere materiali diversi dalle lezioni.
Motivazione: AgentFactory non e' solo manuale, ma anche agenti, template ed esperimenti.
Criterio di accettazione: il sito contiene collegamenti ad almeno Agent Card e template.

RF-008 - Il sito deve essere rigenerabile dai Markdown.
Motivazione: evitare duplicazione manuale tra sorgente e sito.
Criterio di accettazione: eseguendo `node tools/build-site.js`, le pagine in `docs/` vengono aggiornate.
```

## Requisiti non funzionali

```text
RNF-001 - Design dark/cyberpunk.
Motivazione: dare identita' visiva al progetto e renderlo memorabile.
Criterio di accettazione: il sito usa dark mode, accenti cyan/pink/lime e composizione coerente.

RNF-002 - Leggibilita' in proiezione.
Motivazione: il materiale potra' essere mostrato durante lezioni o spiegazioni.
Criterio di accettazione: titoli, sidebar e cards risultano leggibili in viewport desktop.

RNF-003 - Responsive.
Motivazione: il sito deve essere consultabile anche su schermi piccoli.
Criterio di accettazione: sotto soglia mobile/tablet, la sidebar diventa off-canvas e il contenuto resta leggibile.

RNF-004 - Manutenibilita'.
Motivazione: il manuale crescera' con molte lezioni e artefatti.
Criterio di accettazione: per aggiungere una pagina al sito si aggiorna il generatore e si rigenera `docs/`.

RNF-005 - Nessuna dipendenza di build obbligatoria.
Motivazione: mantenere il progetto semplice nella fase iniziale.
Criterio di accettazione: il sito e' apribile come HTML statico e il generatore usa Node.js senza framework esterni.

RNF-006 - Coerenza tra repository e sito.
Motivazione: il sito deve rappresentare lo stato reale del manuale.
Criterio di accettazione: nuove lezioni rilevanti vengono aggiunte a `MANUAL.md`, `lessons/README.md`, `tools/build-site.js` e `docs/`.
```

## Vincoli

```text
- Il repository usa Markdown come fonte principale.
- Il sito deve rimanere statico nella fase corrente.
- Non introdurre framework frontend complessi senza necessita'.
- Non duplicare manualmente contenuti lunghi quando possono essere generati.
- Il design deve restare leggibile, non solo scenografico.
- Le modifiche devono essere versionate in Git e pushate su GitHub.
```

## Rischi

```text
- Rischio: il sito diventa bello ma difficile da mantenere.
  Impatto: Alto
  Probabilita': Media
  Mitigazione: mantenere generazione da Markdown e aggiornare il generatore in modo semplice.

- Rischio: la sidebar cresce troppo e torna a essere dispersiva.
  Impatto: Medio
  Probabilita': Alta
  Mitigazione: usare sezioni richiudibili, gruppi chiari e in futuro valutare ricerca o indice interno.

- Rischio: il design cyberpunk riduce leggibilita'.
  Impatto: Alto
  Probabilita': Media
  Mitigazione: verificare contrasto, dimensioni testo e screenshot desktop/mobile.

- Rischio: il sito non rappresenta tutti gli artefatti importanti.
  Impatto: Medio
  Probabilita': Media
  Mitigazione: aggiornare `tools/build-site.js` quando entrano nuove categorie rilevanti.

- Rischio: la pubblicazione futura richiede adattamenti non previsti.
  Impatto: Medio
  Probabilita': Media
  Mitigazione: mantenere `docs/` compatibile con GitHub Pages e ridurre dipendenze.
```

## Criteri di accettazione generali

```text
- La home del sito si apre da `docs/index.html`.
- La home mostra almeno 8 lezioni quando la lezione 08 viene aggiunta.
- Le lezioni hanno pagine HTML dedicate.
- La sidebar contiene gruppi espandibili.
- Il gruppo corrente resta aperto.
- Il layout desktop ha margini laterali equilibrati.
- Il sito e' consultabile su mobile.
- Il generatore statico completa senza errori.
- Il repository resta pulito dopo commit e push.
```

## Punti di validazione umana

```text
- Confermare se pubblicare su GitHub Pages.
- Confermare se aggiungere ricerca interna.
- Confermare se introdurre un indice per le lezioni lunghe.
- Confermare se mantenere HTML/CSS/JS statico o passare in futuro a MkDocs/Astro/Vite.
- Confermare se il design cyberpunk attuale e' adatto anche a proiezione didattica.
```

## Handoff per Architect Agent

```text
- Valutare architettura del sito statico rispetto alla crescita futura del manuale.
- Considerare GitHub Pages come target naturale.
- Valutare quando HTML generato custom non sara' piu' sufficiente.
- Definire strategia per ricerca, indice pagina e versionamento contenuti.
```

## Handoff per Developer Agent

```text
- Aggiornare `tools/build-site.js` quando si aggiungono nuove lezioni o categorie.
- Rigenerare `docs/` dopo modifiche ai sorgenti Markdown.
- Mantenere CSS responsive e leggibile.
- Evitare dipendenze non necessarie nella fase corrente.
```

## Handoff per Tester Agent

```text
- Verificare apertura home.
- Verificare conteggio cards lezioni.
- Verificare link verso lezione 08.
- Verificare link verso esperimento 001 se aggiunto al sito.
- Verificare sidebar desktop.
- Verificare sidebar mobile/off-canvas.
- Verificare assenza di `undefined`, `NaN` o link `.md` non convertiti nel sito generato.
```

## Handoff per Reviewer Agent

```text
- Controllare che la sidebar non sia troppo densa o troppo dispersiva.
- Controllare che il layout desktop usi bene gli spazi.
- Controllare che il design cyberpunk non comprometta leggibilita'.
- Controllare che il sito resti coerente con il ruolo del repo: manuale piu' laboratorio reale.
```

## Note candidate per Knowledge Compiler

```text
- Prima di automatizzare un agente, produrre almeno un artefatto manuale di riferimento.
- Le richieste estetiche devono essere trasformate in requisiti verificabili.
- Le iterazioni utente fanno parte del brief e vanno integrate nell'analisi requisiti.
- Una sidebar in un manuale lungo deve essere raggruppata, compatta e richiudibile.
- Il sito statico deve restare derivato dai Markdown per evitare doppia manutenzione.
```

## Stato finale dell'analisi

```text
Pronto per validazione umana e per handoff verso Architect/Developer Agent.
```
