# Lezione 2 - Requirement Analyst Agent

## Obiettivo della lezione

Questa lezione introduce il primo agente realmente operativo della nostra pipeline: il **Requirement Analyst Agent**.

Nella Lezione 1 abbiamo chiarito che un agente AI professionale non è un semplice chatbot, ma un sistema con obiettivo, contesto, regole, strumenti, stato operativo e criteri di verifica.

Con questa lezione iniziamo a costruire la pipeline vera e propria.

Alla fine della lezione bisogna saper:

- capire perché l'analisi dei requisiti è il primo gate serio di una pipeline agentica;
- progettare un Requirement Analyst Agent;
- distinguere fatti, ipotesi, domande aperte e requisiti;
- trasformare una richiesta grezza in artefatti verificabili;
- preparare un output utilizzabile dagli agenti successivi;
- capire come questa conoscenza viene riassorbita nella Knowledge Base permanente.

## Collegamento con l'obiettivo finale

La nostra destinazione non è costruire un singolo agente che risponde bene.

La destinazione è costruire una **Agent Factory** capace di ricevere un progetto, generare agenti temporanei specializzati, fornire loro il contesto giusto, orchestrare il lavoro e salvare la conoscenza utile in modo permanente.

Il Requirement Analyst Agent è il primo mattone perché ogni pipeline software professionale parte da una domanda fondamentale:

> Che cosa deve essere costruito, per chi, con quali vincoli e secondo quali criteri di successo?

Se questa fase è confusa, tutto ciò che viene dopo sarà fragile.

Un Architect Agent costruirà un'architettura sbagliata.

Un Developer Agent implementerà funzionalità non richieste.

Un Tester Agent testerà criteri non validati.

Un Documentation Agent documenterà un sistema non coerente con il bisogno reale.

Per questo nella Agent Factory l'analisi dei requisiti non è burocrazia: è il primo meccanismo di controllo qualità.

## Perché partire dai requisiti

In un progetto software reale il problema raramente arriva già ben definito.

Spesso il cliente, il manager o l'utente esprime una richiesta in forma grezza:

```text
Ci serve una piattaforma per gestire meglio i ticket interni.
```

Questa frase sembra chiara, ma in realtà contiene moltissime ambiguità:

- chi apre i ticket?
- chi li prende in carico?
- esistono priorità?
- esistono SLA?
- servono notifiche?
- serve uno storico?
- serve autenticazione?
- serve integrazione con email o Teams?
- chi può vedere cosa?
- quali report sono necessari?
- il sistema deve essere web, mobile o entrambi?
- esistono vincoli di privacy, audit, sicurezza o compliance?

Il Requirement Analyst Agent serve proprio a trasformare questa nebbia iniziale in una struttura lavorabile.

## Definizione operativa

Un **Requirement Analyst Agent** è un agente specializzato che riceve un input progettuale non necessariamente ordinato e produce un documento di analisi iniziale composto da:

- contesto del progetto;
- obiettivo di business;
- attori coinvolti;
- scope e out of scope;
- requisiti funzionali;
- requisiti non funzionali;
- vincoli;
- ipotesi;
- domande aperte;
- rischi;
- priorità;
- criteri di accettazione iniziali;
- handoff per gli agenti successivi.

Formula mentale:

```text
Requirement Analyst Agent = Input grezzo + Metodo di analisi + Regole di separazione + Template requisiti + Output verificabile
```

La parte importante è la **separazione**.

Un cattivo agente mischia tutto e scrive un testo apparentemente convincente.

Un buon agente distingue ciò che è certo da ciò che è dedotto, ciò che è richiesto da ciò che è suggerito, ciò che è prioritario da ciò che è opzionale.

## Il problema dell'ambiguità

L'ambiguità è uno dei costi nascosti più grandi nei progetti software.

Quando un requisito è ambiguo, ogni ruolo lo interpreta a modo proprio.

Esempio ambiguo:

```text
Il sistema deve essere veloce.
```

Questo non è un requisito professionale, perché non è verificabile.

Versione migliore:

```text
Il sistema deve caricare la lista dei ticket aperti entro 2 secondi per un dataset fino a 10.000 ticket attivi.
```

Questa seconda versione è migliore perché introduce:

- una metrica;
- una condizione;
- un contesto;
- un criterio verificabile.

Regola fondamentale:

> Un requisito non verificabile non è ancora pronto per essere passato agli agenti successivi.

## Input del Requirement Analyst Agent

L'agente può ricevere input molto diversi:

- una richiesta scritta dal cliente;
- una mail;
- appunti di riunione;
- un documento informale;
- un file di specifiche;
- una issue GitHub;
- una trascrizione di meeting;
- una descrizione vocale convertita in testo;
- un repository esistente da analizzare;
- bug report e ticket storici;
- documentazione aziendale già presente.

Il punto non è avere input perfetti.

Il punto è avere un agente capace di mettere ordine senza inventare.

## Output del Requirement Analyst Agent

L'output deve essere un artefatto riutilizzabile.

Nel nostro repository usiamo il template:

```text
templates/requirement-analysis-output-template.md
```

L'output minimo deve contenere:

1. Sintesi del progetto.
2. Fatti certi.
3. Ipotesi esplicite.
4. Domande aperte.
5. Attori.
6. Scope.
7. Out of scope.
8. Requisiti funzionali.
9. Requisiti non funzionali.
10. Vincoli.
11. Rischi.
12. Priorità.
13. Criteri di accettazione iniziali.
14. Handoff per Architect Agent, Developer Agent e Tester Agent.

Questo è importante perché ogni agente successivo deve ricevere un pacchetto chiaro, non una conversazione dispersiva.

## Fatti, ipotesi e domande aperte

Questa è una delle distinzioni più importanti della lezione.

### Fatto

Un fatto è qualcosa che l'input dice esplicitamente.

Esempio:

```text
Il cliente vuole una piattaforma per gestire ticket IT interni.
```

Se l'input lo dice chiaramente, l'agente può registrarlo come fatto.

### Ipotesi

Un'ipotesi è qualcosa che sembra probabile, ma non è stato confermato.

Esempio:

```text
Si ipotizza che gli utenti debbano autenticarsi prima di aprire un ticket.
```

È ragionevole, ma se non è scritto non va trattato come requisito confermato.

### Domanda aperta

Una domanda aperta è qualcosa che deve essere chiarito prima di procedere in modo affidabile.

Esempio:

```text
Quali ruoli possono chiudere definitivamente un ticket?
```

La qualità del Requirement Analyst Agent dipende moltissimo da questa separazione.

Regola:

> L'agente può proporre ipotesi, ma deve sempre marcarle come ipotesi.

## Requisiti funzionali

I requisiti funzionali descrivono cosa il sistema deve fare.

Esempi:

```text
RF-001 - Il sistema deve permettere a un utente autenticato di aprire un ticket.
RF-002 - Il sistema deve permettere a un operatore IT di assegnare un ticket a sé stesso o a un collega.
RF-003 - Il sistema deve permettere la modifica dello stato di un ticket secondo un flusso definito.
RF-004 - Il sistema deve inviare una notifica quando un ticket viene aggiornato.
```

Un requisito funzionale deve essere:

- atomico;
- chiaro;
- numerato;
- verificabile;
- collegato a un bisogno;
- non mescolato con dettagli tecnici prematuri.

### Errore comune

```text
Il sistema deve usare React, Node.js e PostgreSQL per permettere agli utenti di aprire ticket.
```

Questo mescola requisito funzionale e scelta tecnica.

Versione migliore:

```text
RF-001 - Il sistema deve permettere agli utenti autorizzati di aprire un ticket indicando categoria, descrizione, priorità e allegati opzionali.
```

La scelta tecnica verrà dopo, con l'Architect Agent.

## Requisiti non funzionali

I requisiti non funzionali descrivono come il sistema deve comportarsi.

Esempi:

```text
RNF-001 - Il sistema deve garantire accesso tramite autenticazione aziendale.
RNF-002 - Il sistema deve mantenere uno storico delle modifiche ai ticket.
RNF-003 - Il sistema deve rispondere alle principali operazioni entro 2 secondi in condizioni operative normali.
RNF-004 - Il sistema deve essere utilizzabile da browser desktop moderni.
```

Categorie tipiche:

- sicurezza;
- prestazioni;
- disponibilità;
- scalabilità;
- usabilità;
- accessibilità;
- manutenibilità;
- osservabilità;
- compliance;
- privacy;
- auditabilità.

Nelle pipeline agentiche i requisiti non funzionali sono fondamentali perché influenzano direttamente architettura, test, deployment e governance.

## Scope e out of scope

Lo scope definisce ciò che il progetto include.

L'out of scope definisce ciò che il progetto non include.

Questa distinzione protegge la pipeline dal rischio di espandersi senza controllo.

Esempio:

```text
In scope:
- apertura ticket;
- assegnazione ticket;
- cambio stato;
- storico attività;
- notifiche email;
- dashboard base.

Out of scope iniziale:
- app mobile nativa;
- integrazione con sistema HR;
- chatbot automatico di primo livello;
- gestione asset IT avanzata.
```

L'out of scope non significa che quelle funzionalità non saranno mai fatte.

Significa che non sono parte del perimetro attuale.

## Priorità

Il Requirement Analyst Agent deve aiutare a classificare le priorità.

Una classificazione semplice e professionale è:

```text
Must have - necessario per il valore minimo del progetto.
Should have - importante, ma non bloccante per la prima versione.
Could have - utile, ma rinviabile.
Won't have now - escluso dalla versione corrente.
```

Questa logica è nota come MoSCoW, ma nel nostro percorso la trattiamo soprattutto come strumento pratico per evitare backlog confusi.

Esempio:

```text
Must have:
- apertura ticket;
- presa in carico;
- cambio stato;
- storico base.

Should have:
- notifiche email;
- filtri avanzati;
- dashboard per responsabili.

Could have:
- suggerimenti automatici di categoria;
- esportazione report.

Won't have now:
- app mobile nativa;
- automazioni AI sui ticket.
```

## Criteri di accettazione

Un criterio di accettazione descrive quando un requisito può essere considerato soddisfatto.

Esempio requisito:

```text
RF-001 - Il sistema deve permettere a un utente autenticato di aprire un ticket.
```

Criteri di accettazione:

```text
CA-001.1 - Dato un utente autenticato, quando compila titolo e descrizione obbligatori, allora il sistema crea un ticket con stato "Aperto".
CA-001.2 - Se l'utente non compila un campo obbligatorio, il sistema mostra un messaggio di validazione.
CA-001.3 - Dopo la creazione, il ticket deve essere visibile nella lista dei ticket dell'utente.
```

Questi criteri saranno preziosissimi per il Tester Agent.

Una pipeline multi-agent funziona meglio quando ogni output è già pensato per l'agente successivo.

## Handoff agli agenti successivi

Il Requirement Analyst Agent non lavora per sé stesso.

Lavora per preparare il terreno agli agenti successivi.

### Handoff verso Architect Agent

L'Architect Agent ha bisogno di:

- requisiti funzionali consolidati;
- requisiti non funzionali;
- vincoli tecnici e organizzativi;
- attori e permessi;
- rischi architetturali;
- integrazioni richieste;
- volumi attesi, se disponibili.

### Handoff verso Developer Agent

Il Developer Agent ha bisogno di:

- funzionalità prioritarie;
- criteri di accettazione;
- casi principali;
- limiti chiari;
- definizione di done;
- eventuali issue operative.

### Handoff verso Tester Agent

Il Tester Agent ha bisogno di:

- requisiti testabili;
- criteri di accettazione;
- casi limite;
- regole di business;
- scenari negativi;
- rischi.

### Handoff verso Knowledge Librarian

Il Knowledge Librarian ha bisogno di:

- pattern ricorrenti;
- decisioni riutilizzabili;
- errori evitati;
- domande ricorrenti;
- template migliorabili;
- lezioni apprese.

Questo è il punto che ci porta dalla semplice pipeline alla vera Agent Factory.

## Agent Card del Requirement Analyst Agent

La definizione operativa dell'agente è salvata in:

```text
agents/requirement-analyst-agent.md
```

Sintesi:

```text
Nome agente:
Requirement Analyst Agent

Missione:
Trasformare input progettuali grezzi in requisiti chiari, verificabili e pronti per gli agenti successivi.

Output principale:
Documento di analisi requisiti basato su template.

Regola critica:
Non inventare requisiti. Separare sempre fatti, ipotesi e domande aperte.
```

## Processo operativo consigliato

Il Requirement Analyst Agent dovrebbe seguire questo flusso:

```text
Input grezzo
    ↓
Lettura e normalizzazione
    ↓
Estrazione fatti certi
    ↓
Identificazione attori e obiettivi
    ↓
Separazione requisiti funzionali e non funzionali
    ↓
Rilevazione ipotesi e domande aperte
    ↓
Classificazione priorità
    ↓
Definizione criteri di accettazione iniziali
    ↓
Produzione artefatto requisiti
    ↓
Gate umano di validazione
    ↓
Handoff agli agenti successivi
    ↓
Riassorbimento conoscenza utile
```

Questo flusso è volutamente semplice.

Non stiamo costruendo una burocrazia pesante.

Stiamo costruendo un modo affidabile per impedire alla pipeline di partire su fondamenta sbagliate.

## Prompt operativo base

Esempio di prompt per attivare l'agente:

```text
Agisci come Requirement Analyst Agent della AgentFactory.

Obiettivo:
Trasforma l'input seguente in un documento di analisi requisiti professionale.

Regole:
- Non inventare requisiti non presenti.
- Se fai una deduzione, marcala come ipotesi.
- Se manca informazione importante, inseriscila nelle domande aperte.
- Separa requisiti funzionali e non funzionali.
- Rendi i requisiti verificabili.
- Prepara un handoff per Architect Agent, Developer Agent e Tester Agent.

Input progetto:
[incollare qui il brief]

Output richiesto:
Usa il template `templates/requirement-analysis-output-template.md`.
```

Questo prompt non è definitivo.

Nel percorso lo miglioreremo, lo versioneremo e lo trasformeremo in una regola riutilizzabile.

## Esempio pratico

Input grezzo:

```text
Vorremmo una webapp per gestire i ticket IT interni. Gli utenti devono poter aprire richieste e il team IT deve poterle prendere in carico. Sarebbe utile avere notifiche e uno storico. I responsabili vorrebbero vedere lo stato generale del servizio.
```

Output ragionato:

### Fatti certi

```text
F-001 - Il sistema richiesto è una webapp.
F-002 - Il dominio è la gestione di ticket IT interni.
F-003 - Gli utenti devono poter aprire richieste.
F-004 - Il team IT deve poter prendere in carico le richieste.
F-005 - È richiesto uno storico.
F-006 - I responsabili vogliono una vista sullo stato generale del servizio.
```

### Ipotesi

```text
I-001 - Si ipotizza che gli utenti debbano autenticarsi.
I-002 - Si ipotizza che i ticket abbiano stati come Aperto, In lavorazione, Risolto, Chiuso.
I-003 - Si ipotizza che le notifiche possano essere email.
```

### Domande aperte

```text
D-001 - Quali ruoli utente sono previsti?
D-002 - Esistono SLA o tempi massimi di presa in carico?
D-003 - Le notifiche devono essere email, Teams, push o altro?
D-004 - I responsabili devono vedere dati aggregati o anche dettaglio dei singoli ticket?
D-005 - Sono richiesti allegati nei ticket?
D-006 - Serve integrazione con Active Directory o altro sistema aziendale?
```

### Requisiti funzionali iniziali

```text
RF-001 - Il sistema deve permettere a un utente autorizzato di aprire un ticket IT.
RF-002 - Il sistema deve permettere al team IT di visualizzare i ticket aperti.
RF-003 - Il sistema deve permettere a un operatore IT di prendere in carico un ticket.
RF-004 - Il sistema deve registrare lo storico delle modifiche effettuate su un ticket.
RF-005 - Il sistema deve permettere ai responsabili di consultare una vista aggregata dello stato del servizio.
```

### Requisiti non funzionali iniziali

```text
RNF-001 - Il sistema deve prevedere controllo degli accessi basato su ruoli.
RNF-002 - Il sistema deve mantenere tracciabilità delle modifiche principali.
RNF-003 - Il sistema deve essere utilizzabile da browser desktop moderni.
```

Questa analisi non è ancora il progetto completo.

È il primo artefatto serio su cui far lavorare la pipeline.

## Human gate

Prima di passare agli agenti successivi, il documento requisiti deve essere validato da una persona responsabile.

Il gate umano serve a confermare:

- obiettivo del progetto;
- perimetro;
- priorità;
- requisiti critici;
- vincoli;
- rischi;
- domande ancora aperte.

Regola:

> L'Architect Agent non dovrebbe progettare un'architettura su requisiti non validati, salvo esplicita richiesta di produrre solo una bozza esplorativa.

## Anti-pattern da evitare

### 1. Inventare requisiti

Se il cliente non ha chiesto la dashboard AI, l'agente non deve trasformarla in requisito.

Può proporla come possibilità, ma deve marcarla come ipotesi o opportunità.

### 2. Scrivere requisiti troppo grandi

Errore:

```text
Il sistema deve gestire i ticket.
```

Meglio spezzare:

```text
RF-001 - Creazione ticket.
RF-002 - Assegnazione ticket.
RF-003 - Cambio stato ticket.
RF-004 - Commenti sul ticket.
RF-005 - Storico modifiche.
```

### 3. Confondere requisiti con tecnologia

Errore:

```text
Il sistema deve usare MongoDB.
```

Questo potrebbe essere un vincolo tecnico solo se indicato esplicitamente.

Altrimenti è una decisione architetturale successiva.

### 4. Saltare le domande aperte

Un agente che non produce domande aperte spesso sta fingendo certezza.

Nel lavoro professionale, dire "non lo so ancora" è spesso un atto di qualità.

### 5. Non preparare l'handoff

Un documento requisiti utile deve essere consumabile dagli agenti successivi.

Se resta solo narrativo, la pipeline rallenta.

## Checklist di qualità

Prima di considerare completo l'output del Requirement Analyst Agent, verificare:

- [ ] i fatti sono separati dalle ipotesi;
- [ ] le domande aperte sono esplicite;
- [ ] i requisiti funzionali sono numerati;
- [ ] i requisiti non funzionali sono separati;
- [ ] ogni requisito importante è verificabile;
- [ ] lo scope è dichiarato;
- [ ] l'out of scope è dichiarato;
- [ ] le priorità sono indicate almeno a livello iniziale;
- [ ] i rischi principali sono elencati;
- [ ] l'handoff agli agenti successivi è presente;
- [ ] il documento può essere validato da un essere umano.

## Esercizio operativo

Usare il Requirement Analyst Agent sul seguente brief:

```text
Una piccola azienda vuole una piattaforma interna per gestire le richieste ferie e permessi. I dipendenti devono poter inserire una richiesta, il responsabile deve approvarla o rifiutarla e l'ufficio amministrativo deve poter consultare lo storico. Sarebbe utile ricevere notifiche e vedere un calendario riepilogativo.
```

Produrre:

1. fatti certi;
2. ipotesi;
3. domande aperte;
4. attori;
5. requisiti funzionali;
6. requisiti non funzionali;
7. scope e out of scope;
8. priorità iniziali;
9. criteri di accettazione per almeno 3 requisiti;
10. handoff per Architect Agent e Tester Agent.

## Mini-laboratorio repo

Nel repository, questa lezione introduce tre elementi riutilizzabili:

```text
lessons/02-requirement-analyst-agent.md
agents/requirement-analyst-agent.md
templates/requirement-analysis-output-template.md
```

Questa struttura è importante perché ogni lezione deve produrre almeno una parte utilizzabile della futura Agent Factory.

Non stiamo solo studiando: stiamo costruendo il sistema.

## Lezioni apprese da assorbire

- La qualità della pipeline dipende dalla qualità dei requisiti iniziali.
- Il Requirement Analyst Agent non deve inventare, ma chiarire.
- Fatti, ipotesi e domande aperte devono rimanere separati.
- I requisiti devono essere verificabili, numerati e riutilizzabili dagli agenti successivi.
- L'handoff è parte dell'output, non un'aggiunta secondaria.
- Il gate umano sui requisiti protegge l'intera pipeline.
- La Knowledge Base deve conservare pattern, domande ricorrenti e template migliorati.

## Prossimo passo

La prossima lezione dovrà chiarire la differenza tra:

- automazione;
- workflow;
- agente;
- pipeline multi-agent.

Questo servirà a evitare un errore comune: usare agenti AI anche dove basterebbe un processo deterministico più semplice.