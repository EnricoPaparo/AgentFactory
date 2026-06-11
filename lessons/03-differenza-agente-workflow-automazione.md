# Lezione 3 - Differenza tra agente, workflow e automazione

## Obiettivo della lezione

Questa lezione chiarisce una distinzione fondamentale per costruire una Agent Factory professionale:

- automazione;
- workflow;
- AI Agent;
- agentic workflow;
- pipeline multi-agent;
- Agent Factory.

L'obiettivo non è fare filosofia terminologica.

L'obiettivo è imparare a scegliere l'architettura giusta per il problema giusto.

Una delle trappole più comuni, quando si inizia a lavorare con gli AI Agent, è voler mettere un agente ovunque.

Questo è sbagliato.

Un sistema professionale non usa AI perché è interessante. Usa AI quando serve interpretazione, adattamento, ragionamento, produzione di artefatti o gestione dell'incertezza.

Regola guida della lezione:

> Non usare un agente AI dove basta una automazione deterministica. Non usare una pipeline multi-agent dove basta un singolo workflow governato.

Questa regola è importantissima perché la professionalità non consiste nel costruire il sistema più complesso, ma nel costruire il sistema più semplice che risolve bene il problema, mantenendo qualità, controllo e possibilità di evoluzione.

## Collegamento con l'obiettivo finale

La destinazione del progetto AgentFactory è costruire una fabbrica di agenti capace di:

1. ricevere un progetto;
2. analizzarlo;
3. generare o configurare agenti temporanei specializzati;
4. fornire il contesto giusto;
5. orchestrare il lavoro;
6. produrre artefatti verificabili;
7. sottoporre i punti critici a controllo umano;
8. assorbire nella knowledge base la conoscenza validata.

Per arrivarci dobbiamo prima saper distinguere i mattoni di base.

Se non distinguiamo automazione, workflow e agente, rischiamo due errori opposti:

- costruire agenti inutilmente complessi per problemi semplici;
- costruire automazioni rigide per problemi che richiedono interpretazione.

Entrambi gli errori sono costosi.

Nel primo caso aumentiamo rischio, manutenzione e imprevedibilità.

Nel secondo caso produciamo sistemi fragili, incapaci di adattarsi alla variabilità del lavoro reale.

Questa lezione serve quindi a costruire il criterio architetturale.

## Definizione sintetica

Formula mentale:

```text
Automazione = regola deterministica + trigger + azione
Workflow = processo composto da step, stato, passaggi e responsabilità
AI Agent = sistema goal-driven che usa contesto, ragionamento e tool per produrre artefatti
Agentic Workflow = workflow in cui alcuni step sono eseguiti da agenti AI
Pipeline multi-agent = più agenti specializzati coordinati verso un risultato comune
Agent Factory = sistema che crea, orchestra, controlla e migliora pipeline di agenti
```

Questa formula è la base della progettazione.

Non tutto ciò che è automatico è un agente.

Non tutto ciò che usa AI è una Agent Factory.

Non tutto ciò che chiamiamo agente merita davvero autonomia.

## 1. Automazione

Una automazione è un meccanismo che esegue una o più azioni secondo regole predeterminate.

Esempio:

```text
Ogni giorno alle 08:00:
- prendi il file report.csv;
- invialo via email al responsabile;
- salva una copia in archivio.
```

Qui non serve ragionamento.

Serve affidabilità.

L'automazione è adatta quando:

- l'input è prevedibile;
- le regole sono chiare;
- l'output è sempre simile;
- non serve interpretare significato ambiguo;
- non serve prendere decisioni complesse;
- gli errori possono essere gestiti con regole note.

### Componenti tipici di una automazione

```text
Trigger
  ↓
Condizione
  ↓
Azione
  ↓
Log o notifica
```

Esempio concreto:

```text
Trigger:
Nuovo file caricato in una cartella.

Condizione:
Il file ha estensione .pdf.

Azione:
Spostalo nella cartella Archivio/PDF.

Log:
Registra data, ora e nome file.
```

Questa è una automazione classica.

Non serve un agente AI.

Mettere un LLM in mezzo sarebbe quasi sempre uno spreco, perché aumenterebbe:

- costo;
- latenza;
- rischio di errore;
- complessità di debug;
- necessità di governance.

### Automazione professionale

Una buona automazione non è banale.

Deve comunque avere:

- logging;
- gestione errori;
- idempotenza quando possibile;
- permessi corretti;
- notifiche sui fallimenti;
- tracciabilità;
- possibilità di disattivazione.

Il fatto che non sia AI non significa che sia poco importante.

In una Agent Factory, molte parti saranno automazioni deterministiche.

Esempi:

- schedulare un controllo ogni notte;
- spostare file validati;
- lanciare test automatici;
- inviare notifiche;
- aggiornare un indice;
- generare un report standard;
- applicare una label a una issue;
- archiviare output approvati.

Regola professionale:

> Le automazioni sono lo scheletro operativo. Gli agenti non devono sostituire ciò che uno script, una regola o una pipeline deterministica fanno meglio.

## 2. Workflow

Un workflow è un processo organizzato in step.

A differenza della semplice automazione, un workflow rappresenta un percorso operativo con stati, passaggi, responsabilità e condizioni.

Esempio:

```text
Richiesta progetto
  ↓
Analisi requisiti
  ↓
Validazione umana
  ↓
Progettazione architettura
  ↓
Implementazione
  ↓
Test
  ↓
Review
  ↓
Rilascio
  ↓
Documentazione
```

Questo è un workflow.

Può essere manuale, automatico, semi-automatico o agentico.

La parola chiave è: processo.

Un workflow non è definito dall'uso di AI, ma dall'organizzazione del lavoro.

### Componenti tipici di un workflow

Un workflow professionale contiene:

- input iniziale;
- step ordinati;
- stato corrente;
- ruoli coinvolti;
- regole di avanzamento;
- output intermedi;
- gate di approvazione;
- eccezioni;
- log;
- output finale.

Esempio più strutturato:

```text
Stato iniziale:
Brief ricevuto.

Step 1:
Requirement Analyst produce documento requisiti.

Gate:
Il responsabile valida o chiede correzioni.

Step 2:
Architect Agent propone architettura.

Gate:
Approvazione architettura.

Step 3:
Developer Agent implementa.

Step 4:
Tester Agent verifica.

Step 5:
Reviewer Agent controlla qualità.

Stato finale:
Modifica pronta per merge o rilascio.
```

Qui iniziamo a vedere la futura pipeline.

Ma attenzione: il workflow non è ancora automaticamente multi-agent.

Può essere eseguito da persone, script, tool tradizionali o agenti AI.

### Workflow deterministico

Un workflow deterministico ha step prevedibili e regole rigide.

Esempio:

```text
Quando una pull request viene aperta:
1. esegui lint;
2. esegui test;
3. calcola coverage;
4. se i test passano, abilita review;
5. se i test falliscono, blocca merge.
```

Questo è perfetto per CI/CD.

Non serve un agente per decidere se i test sono passati.

Serve un controllo deterministico.

### Workflow semi-intelligente

Un workflow semi-intelligente può includere alcuni step AI, ma senza autonomia completa.

Esempio:

```text
Nuovo ticket aperto
  ↓
AI propone categoria e priorità
  ↓
Operatore umano conferma
  ↓
Sistema assegna il ticket secondo regole predefinite
```

Qui l'AI aiuta, ma non governa tutto il processo.

È un uso spesso molto sensato in azienda.

### Workflow agentico

Un workflow agentico è un workflow in cui alcuni step vengono eseguiti da agenti AI dotati di obiettivo, contesto, tool e regole.

Esempio:

```text
Brief progetto
  ↓
Requirement Analyst Agent
  ↓
Human Gate
  ↓
Architect Agent
  ↓
Human Gate
  ↓
Developer Agent
  ↓
Tester Agent
  ↓
Reviewer Agent
  ↓
Knowledge Librarian
```

Questo è più vicino alla nostra Agent Factory.

Il workflow rimane la struttura.

Gli agenti sono gli operatori specializzati che eseguono alcuni step.

Regola professionale:

> Prima si progetta il workflow. Poi si decide quali step meritano un agente AI.

## 3. AI Agent

Un AI Agent è un sistema che, dato un obiettivo, usa contesto, ragionamento, strumenti e regole operative per produrre un risultato.

Nella Lezione 1 abbiamo introdotto questa formula:

```text
Agent = LLM + Obiettivo + Contesto + Tool + Stato + Regole + Verifica
```

Nella Lezione 4 analizziamo l'anatomia interna dell'agente.

Qui ci interessa soprattutto distinguere l'agente da automazione e workflow.

Un agente serve quando il task richiede:

- interpretazione;
- ragionamento;
- gestione di ambiguità;
- trasformazione di input non strutturato;
- produzione di artefatti complessi;
- uso flessibile di strumenti;
- scelta tra alternative;
- adattamento al contesto;
- valutazione qualitativa;
- handoff verso altri ruoli.

Esempio:

```text
Analizza questo brief confuso, separa fatti, ipotesi e domande aperte, genera requisiti funzionali e non funzionali, indica rischi e prepara un handoff per Architect Agent e Tester Agent.
```

Questo è un buon caso per un agente.

Perché?

Perché l'input è ambiguo.

Non basta una regola `if/else`.

Serve capacità di leggere, interpretare, ordinare, classificare e produrre un artefatto utile.

### Che cosa rende un agente diverso da una semplice chiamata AI

Una chiamata AI semplice può essere:

```text
Riassumi questo documento.
```

Un agente invece ha una missione più strutturata:

```text
Agisci come Requirement Analyst Agent.
Analizza il documento, separa fatti e ipotesi, individua requisiti, segnala ambiguità, produci un output secondo template e prepara un handoff per gli agenti successivi.
```

La differenza sta in:

- ruolo;
- obiettivo;
- metodo;
- regole;
- output;
- verifica;
- collocazione dentro un processo.

Un agente professionale non è solo un prompt migliore.

È una unità operativa dentro un sistema.

### Autonomia non significa libertà totale

Un errore molto pericoloso è pensare:

```text
Più autonomia = agente migliore.
```

Non è sempre vero.

In azienda l'autonomia deve essere proporzionata al rischio.

Un agente che legge documentazione e produce un report può avere molta autonomia.

Un agente che modifica codice, fa commit, apre PR o avvia deploy deve avere regole più severe.

Un agente che tocca dati sensibili, sicurezza, costi o clienti finali deve avere Human in the Loop.

Regola:

> L'autonomia dell'agente deve crescere solo quando crescono anche osservabilità, controllo, rollback e criteri di qualità.

## 4. Agentic workflow

Un agentic workflow è un workflow progettato per includere agenti AI in alcuni step.

La parola importante è workflow.

Gli agenti non devono agire nel vuoto.

Devono stare dentro un processo.

Esempio:

```text
Input:
Richiesta di modifica software.

Step 1:
Requirement Analyst Agent produce analisi requisiti.

Step 2:
Human Supervisor valida requisiti.

Step 3:
Architect Agent produce proposta tecnica.

Step 4:
Human Supervisor approva architettura.

Step 5:
Developer Agent implementa su branch dedicato.

Step 6:
CI/CD esegue test automatici.

Step 7:
Reviewer Agent analizza diff e test.

Step 8:
Umano approva merge.

Step 9:
Knowledge Librarian salva lesson learned.
```

Questo è un workflow agentico serio perché combina:

- agenti AI;
- automazioni deterministiche;
- controlli umani;
- artefatti;
- gate;
- feedback;
- memoria permanente.

### Il punto professionale

Un agentic workflow ben progettato non delega tutto all'AI.

Distribuisce il lavoro in modo intelligente:

```text
Automazione deterministica -> per ciò che deve essere ripetibile
Agente AI -> per ciò che richiede interpretazione
Workflow -> per coordinare il processo
Human Gate -> per decisioni critiche
Knowledge Base -> per conservare ciò che abbiamo imparato
```

Questo è esattamente il cuore della Agent Factory.

## 5. Pipeline multi-agent

Una pipeline multi-agent è un caso specifico di agentic workflow in cui più agenti specializzati collaborano.

Esempio:

```text
Requirement Analyst Agent
  ↓
Architect Agent
  ↓
Developer Agent
  ↓
Tester Agent
  ↓
Reviewer Agent
  ↓
Documentation Agent
  ↓
Knowledge Librarian Agent
```

Ogni agente deve avere:

- missione chiara;
- input definito;
- output verificabile;
- regole operative;
- criteri di qualità;
- limiti di autonomia;
- handoff verso lo step successivo.

La pipeline multi-agent serve quando il lavoro è troppo complesso per un singolo ruolo generalista.

### Perché non usare un solo agente generalista

Un agente generalista può sembrare comodo:

```text
Fai tutto: analisi, architettura, codice, test, documentazione.
```

Il problema è che diventa difficile controllare:

- dove nasce un errore;
- quale decisione è stata presa;
- quale requisito ha guidato una modifica;
- se i test coprono davvero i criteri di accettazione;
- se la documentazione è coerente;
- cosa va riassorbito nella knowledge base.

La specializzazione riduce il caos.

Non perché gli agenti specializzati siano magicamente più intelligenti, ma perché hanno responsabilità più chiare.

Regola:

> La pipeline multi-agent serve a rendere il lavoro scomponibile, verificabile e governabile.

## 6. Agent Factory

La Agent Factory è un livello ancora superiore.

Non è solo una pipeline.

È il sistema che crea, configura, orchestra e migliora pipeline di agenti.

Differenza:

```text
Pipeline multi-agent:
Una sequenza di agenti che lavora su un progetto.

Agent Factory:
Sistema che, dato un progetto, decide quali agenti servono, prepara il loro contesto, orchestra il lavoro, controlla gli output e assorbe conoscenza validata.
```

La Agent Factory deve poter rispondere a domande come:

- che tipo di progetto è questo?
- quali agenti servono?
- quali agenti non servono?
- quali step possono essere automazioni deterministiche?
- quali step richiedono AI?
- quali punti richiedono validazione umana?
- quali template vanno usati?
- quale contesto va dato a ogni agente?
- quali output devono essere salvati?
- quali lezioni apprese vanno riassorbite?

Questa è la vera destinazione del nostro percorso.

## Tabella di confronto

| Elemento | Quando usarlo | Input tipico | Output tipico | Rischio | Esempio |
|---|---|---|---|---|---|
| Automazione | Regole chiare e ripetitive | Evento, file, orario, condizione | Azione standard | Basso/medio | Inviare report ogni mattina |
| Workflow | Processo con step e stati | Richiesta o pratica | Stato avanzato, output intermedi | Medio | Processo approvazione ferie |
| AI Agent | Task ambiguo o interpretativo | Brief, repository, documento, issue | Artefatto ragionato | Medio/alto | Analisi requisiti da brief confuso |
| Agentic Workflow | Processo con alcuni step AI | Progetto o richiesta complessa | Output coordinato | Alto | Analisi -> architettura -> test con agenti |
| Pipeline multi-agent | Lavoro complesso con ruoli distinti | Progetto strutturato | Artefatti multipli verificati | Alto | Requirement -> Architect -> Developer -> Tester |
| Agent Factory | Generare e migliorare pipeline | Progetto generico | Pipeline configurata + conoscenza assorbita | Alto | Creazione agenti temporanei per progetto |

Questa tabella è un primo strumento decisionale.

La useremo ogni volta che dovremo progettare un nuovo pezzo della nostra Factory.

## Criterio decisionale operativo

Quando arriva un nuovo task, non bisogna partire chiedendo:

```text
Quale agente uso?
```

Bisogna partire chiedendo:

```text
Che natura ha questo task?
```

### Domanda 1 - Il task è completamente prevedibile?

Se sì, probabilmente serve una automazione.

Esempio:

```text
Ogni venerdì esporta un CSV e mandalo al responsabile.
```

### Domanda 2 - Il task ha più step, stati o approvazioni?

Se sì, probabilmente serve un workflow.

Esempio:

```text
Una richiesta ferie deve passare da dipendente a responsabile ad amministrazione.
```

### Domanda 3 - Il task richiede interpretazione di input non strutturato?

Se sì, può servire un agente.

Esempio:

```text
Leggi questi appunti di riunione e trasformali in requisiti verificabili.
```

### Domanda 4 - Il task richiede più competenze distinte?

Se sì, può servire una pipeline multi-agent.

Esempio:

```text
Analizza un progetto software, proponi architettura, implementa modifiche, testa, documenta e prepara una PR.
```

### Domanda 5 - Il sistema deve generare agenti diversi in base al progetto?

Se sì, stiamo entrando nel territorio della Agent Factory.

Esempio:

```text
Dato un repository sconosciuto, capisci che tipo di progetto è, scegli gli agenti necessari, costruisci il contesto per ciascuno e orchestra il lavoro.
```

## Scala di complessità

```text
Prompt singolo
  ↓
Automazione
  ↓
Workflow
  ↓
Agente singolo
  ↓
Agentic Workflow
  ↓
Pipeline multi-agent
  ↓
Agent Factory
```

Questa scala non significa che il livello più alto sia sempre migliore.

Significa solo che è più potente e più complesso.

La bravura sta nel fermarsi al livello giusto.

Esempio professionale:

```text
Problema:
Ogni giorno voglio sapere se i test falliscono.

Soluzione corretta:
CI/CD + notifica.

Soluzione sbagliata:
Agente AI che ogni giorno legge tutto il repository e decide se i test sembrano fallire.
```

Altro esempio:

```text
Problema:
Ho 40 ticket scritti male e voglio capire priorità, categorie, rischi e azioni consigliate.

Soluzione corretta:
AI Agent o agentic workflow.

Soluzione limitata:
Semplice automazione basata solo su keyword.
```

## Il rapporto tra automazione e AI Agent

Automazione e agente non sono nemici.

In una Agent Factory seria collaborano.

Esempio:

```text
Automazione:
Ogni notte recupera le issue aggiornate.

Agente:
Analizza le issue e propone priorità ragionate.

Workflow:
Invia il report al supervisore e attende approvazione.

Automazione:
Dopo approvazione, applica label e crea milestone.
```

Qui ogni parte fa ciò che sa fare meglio.

Il valore non è nell'AI in sé.

Il valore è nell'orchestrazione corretta.

## Human in the Loop

Più un sistema è autonomo, più serve governance.

Punti tipici in cui serve controllo umano:

- validazione requisiti;
- approvazione architettura;
- modifica di file critici;
- merge in branch principale;
- deploy;
- cancellazione dati;
- invio comunicazioni esterne;
- decisioni con impatto economico;
- modifiche a regole operative permanenti;
- assorbimento di nuova conoscenza nella knowledge base.

Regola:

> Human in the Loop non significa rallentare la pipeline. Significa posizionare il controllo dove l'errore costa di più.

Un errore in una bozza Markdown costa poco.

Un errore in produzione costa molto.

Un errore nella knowledge base permanente può propagarsi a tanti agenti futuri.

Per questo la governance è parte dell'architettura, non un'aggiunta finale.

## Esempio completo: richiesta di modifica software

Input grezzo:

```text
Vorremmo migliorare la gestione dei ticket perché gli utenti si lamentano che non capiscono lo stato delle richieste e il team IT perde tempo a rispondere a solleciti.
```

### Soluzione solo automazione

Possibile automazione:

```text
Ogni giorno invia agli utenti una email con lo stato dei ticket aperti.
```

Utile, ma probabilmente insufficiente.

Non analizza il problema.

Non distingue cause, requisiti, utenti, vincoli e priorità.

### Soluzione workflow

Workflow possibile:

```text
1. Raccogli richieste utenti.
2. Classifica problemi ricorrenti.
3. Definisci requisiti.
4. Approva modifiche.
5. Implementa.
6. Testa.
7. Rilascia.
```

Migliore, perché introduce processo.

Ma non dice ancora chi o cosa esegue ogni step.

### Soluzione con agente singolo

Agente possibile:

```text
Requirement Analyst Agent:
Analizza il problema, genera requisiti, ipotesi, domande aperte, rischi e criteri di accettazione.
```

Buono per la fase iniziale.

Ma non basta per implementare tutto.

### Soluzione agentic workflow

```text
Requirement Analyst Agent
  ↓
Human Gate
  ↓
Architect Agent
  ↓
Human Gate
  ↓
Developer Agent
  ↓
CI/CD
  ↓
Tester Agent
  ↓
Reviewer Agent
  ↓
Human Merge Gate
  ↓
Knowledge Librarian
```

Questa è la soluzione più vicina alla nostra visione.

Ma va usata solo se il valore del progetto giustifica questa complessità.

## Anti-pattern da evitare

### 1. Agent washing

Chiamare agente qualunque prompt o qualunque automazione.

Esempio sbagliato:

```text
Ho un agente che ogni mattina manda una email fissa.
```

Questa è una automazione, non un agente.

### 2. Over-agentification

Usare agenti AI per compiti perfettamente deterministici.

Esempio sbagliato:

```text
Usiamo un agente per copiare file da una cartella all'altra ogni notte.
```

Meglio una automazione.

### 3. Workflow senza ownership

Disegnare step senza chiarire chi produce cosa.

Esempio sbagliato:

```text
Analisi -> sviluppo -> test -> rilascio.
```

Troppo generico.

Meglio:

```text
Requirement Analyst Agent produce documento requisiti.
Human Supervisor valida.
Architect Agent produce proposta tecnica.
Developer Agent implementa su branch.
Tester Agent produce test report.
Reviewer Agent produce review report.
```

### 4. Agente senza output verificabile

Esempio sbagliato:

```text
Analizza il progetto e dimmi cosa ne pensi.
```

Meglio:

```text
Produci un report Markdown con: problemi rilevati, impatto, priorità, raccomandazioni, file coinvolti, rischi e prossime azioni.
```

### 5. Pipeline senza gate

Far procedere gli agenti senza validazione nei punti critici.

Esempio rischioso:

```text
L'agente analizza, modifica, testa, committa e deploya senza controllo.
```

In laboratorio può sembrare interessante.

In azienda è pericoloso.

### 6. Memoria permanente non validata

Salvare automaticamente ogni output nella knowledge base.

Errore grave.

La knowledge base permanente deve contenere conoscenza validata, non qualsiasi testo generato.

## Checklist decisionale

Prima di progettare una soluzione, compilare questa checklist:

- [ ] Il task è ripetitivo e prevedibile?
- [ ] Le regole sono completamente note?
- [ ] Serve interpretare testo ambiguo?
- [ ] Serve produrre un artefatto ragionato?
- [ ] Esistono più step con stato e approvazioni?
- [ ] Servono competenze diverse?
- [ ] L'output di uno step alimenta un altro step?
- [ ] Quali azioni possono essere deterministiche?
- [ ] Quali azioni richiedono AI?
- [ ] Quali punti richiedono Human in the Loop?
- [ ] Quale conoscenza va salvata dopo la validazione?

Questa checklist diventa un primo strumento operativo della nostra Agent Factory.

## Template operativo introdotto

Questa lezione introduce un template riutilizzabile:

```text
templates/process-classification-template.md
```

Il template serve a classificare un task prima di decidere l'architettura.

L'output atteso è una decisione del tipo:

```text
Task: classificazione ticket in ingresso.

Natura del task:
Input semi-strutturato, variabile, con ambiguità.

Soluzione consigliata:
Agentic workflow leggero.

Motivazione:
Serve AI per interpretare descrizioni utente, ma il routing finale può essere deterministico dopo approvazione o regole di confidenza.

Human Gate:
Richiesto per priorità alta o bassa confidenza.

Automazioni collegate:
Applicazione label, notifica team, aggiornamento dashboard.
```

Questo template impedisce di partire subito dalla tecnologia.

Prima si classifica il problema.

Poi si sceglie la soluzione.

## Esercizio operativo

Classificare i seguenti casi come:

- automazione;
- workflow;
- AI Agent;
- agentic workflow;
- pipeline multi-agent;
- Agent Factory.

Per ogni caso spiegare:

1. perché quella classificazione è corretta;
2. quali sono gli input;
3. quali sono gli output;
4. quali step possono essere deterministici;
5. dove serve eventualmente AI;
6. dove serve Human in the Loop.

### Caso 1

```text
Ogni venerdì alle 17:00 inviare al responsabile un riepilogo dei ticket chiusi nella settimana.
```

### Caso 2

```text
Un dipendente apre una richiesta ferie, il responsabile approva o rifiuta, l'amministrazione registra la decisione e il dipendente riceve notifica.
```

### Caso 3

```text
Un cliente invia una mail molto confusa chiedendo modifiche a una webapp. Bisogna trasformare la mail in requisiti, domande aperte e criteri di accettazione.
```

### Caso 4

```text
Dato un repository sconosciuto, il sistema deve analizzarlo, capire stack tecnico, rischi, test presenti, architettura, documentazione, priorità di miglioramento e produrre un piano operativo.
```

### Caso 5

```text
Dato qualsiasi progetto software, il sistema deve decidere quali agenti creare, quali template usare, quale contesto fornire e come riassorbire le lezioni apprese dopo la validazione.
```

## Soluzione ragionata sintetica

### Caso 1

Classificazione:

```text
Automazione
```

Motivo:

- trigger temporale;
- regole chiare;
- output standard;
- nessuna interpretazione complessa.

AI non necessaria, salvo voler generare una sintesi qualitativa dei ticket.

### Caso 2

Classificazione:

```text
Workflow
```

Motivo:

- più step;
- più ruoli;
- stati della richiesta;
- approvazione umana.

AI non necessaria nella versione base.

Potrebbe essere aggiunta per suggerire anomalie o controllare conflitti, ma non è obbligatoria.

### Caso 3

Classificazione:

```text
AI Agent
```

Motivo:

- input non strutturato;
- ambiguità;
- necessità di separare fatti, ipotesi e domande;
- produzione di artefatto ragionato.

Human Gate consigliato prima di passare all'Architect Agent.

### Caso 4

Classificazione:

```text
Agentic workflow o pipeline multi-agent
```

Motivo:

- task complesso;
- più competenze;
- analisi repository;
- output multipli;
- possibile coinvolgimento di Repository Analyst, Architect, Tester e Reviewer.

Le automazioni possono supportare raccolta file, test e report tecnici.

### Caso 5

Classificazione:

```text
Agent Factory
```

Motivo:

- non si sta solo eseguendo una pipeline;
- si sta generando o configurando la pipeline stessa;
- il sistema deve decidere agenti, contesto, template, orchestrazione e knowledge absorption.

Questo è il nostro obiettivo finale.

## Mini-laboratorio repo

Questa lezione consolida tre aggiornamenti nel repository:

```text
lessons/03-differenza-agente-workflow-automazione.md
templates/process-classification-template.md
knowledge-base/principles.md
```

La lezione aggiunge una regola permanente:

> Prima classificare la natura del task, poi scegliere se usare automazione, workflow, agente o pipeline multi-agent.

Questa regola è importante perché protegge la Agent Factory da complessità inutile.

## Lezioni apprese da assorbire

- Una automazione è adatta a task prevedibili, ripetitivi e deterministici.
- Un workflow organizza step, stati, responsabilità e gate.
- Un AI Agent serve quando il task richiede interpretazione, ragionamento, contesto e produzione di artefatti.
- Un agentic workflow combina workflow, agenti, automazioni e Human in the Loop.
- Una pipeline multi-agent serve quando il lavoro richiede ruoli specializzati e handoff verificabili.
- Una Agent Factory non è una pipeline fissa: è il sistema che genera, configura, orchestra e migliora pipeline in base al progetto.
- La soluzione migliore è spesso ibrida: automazioni per ciò che è deterministico, agenti per ciò che è ambiguo, workflow per coordinare, umani per validare.
- La complessità va giustificata dal valore e dal rischio del task.
- Prima si classifica il problema, poi si sceglie lo strumento.

## Prossimo passo

La Lezione 4 approfondisce l'anatomia interna dell'agente professionale.

Dopo aver chiarito quando serve davvero un agente, dobbiamo capire come progettarlo bene:

- goal;
- context;
- reasoning;
- tools;
- memory;
- feedback;
- action;
- governance;
- riassorbimento conoscenza.

Questo passaggio è fondamentale perché la Agent Factory non deve generare agenti generici, ma agenti progettati, limitati, osservabili e utili al workflow complessivo.
