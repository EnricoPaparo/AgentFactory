# Lezione 4 - Anatomia di un AI Agent Professionale

## Obiettivo della lezione

Questa lezione serve a fare un salto di qualità: non limitarci più a dire che un AI Agent è un modello con strumenti, ma capire **come è fatto internamente un agente professionale**.

Alla fine della lezione bisogna saper riconoscere e progettare i componenti fondamentali di un agente:

- obiettivo;
- contesto;
- ragionamento e pianificazione;
- tool;
- memoria di lavoro;
- memoria permanente;
- feedback e verifica;
- azione;
- governance umana;
- riassorbimento della conoscenza.

Questa lezione è centrale per la Agent Factory perché ogni agente che costruiremo dovrà essere progettato come un sistema operativo specializzato, non come una semplice chat.

## Collegamento con l'obiettivo finale

La nostra destinazione è una **Agent Factory** capace di ricevere un progetto, generare agenti temporanei specializzati, fornire loro il contesto giusto, orchestrare il lavoro e assorbire conoscenza utile nella knowledge base permanente.

Per arrivarci dobbiamo capire l'anatomia dell'agente.

Se non sappiamo distinguere cervello, memoria, strumenti, contesto e controllo qualità, rischiamo di costruire agenti apparentemente intelligenti ma fragili, non verificabili e difficili da governare.

Formula mentale:

```text
AI Agent professionale = Goal + Context + Reasoning + Tools + Memory + Feedback + Action + Governance
```

Questa formula è più utile di una definizione astratta perché ci costringe a progettare ogni parte.

## La falsa immagine dell'agente

Molti immaginano un agente così:

```text
Utente
  ↓
LLM
  ↓
Risposta
```

Questo non è un agente.

Questo è un modello linguistico usato in modalità conversazionale.

Un agente vero è più vicino a questo:

```text
Obiettivo
   ↓
Context Builder
   ↓
Pianificazione
   ↓
Uso dei tool
   ↓
Produzione artefatto
   ↓
Verifica
   ↓
Azione o proposta di azione
   ↓
Riassorbimento conoscenza
```

Il passaggio fondamentale è questo: un agente non produce solo testo, ma partecipa a un processo.

## 1. Goal - Obiettivo

Il goal è ciò che l'agente deve ottenere.

Un obiettivo debole genera comportamento debole.

Esempio pessimo:

```text
Migliora il progetto.
```

Questo obiettivo è troppo generico. L'agente non sa se deve migliorare:

- performance;
- sicurezza;
- leggibilità;
- architettura;
- UX;
- test;
- documentazione;
- deployment.

Esempio migliore:

```text
Analizza il repository, individua i principali rischi tecnici, non modificare file, produci un report Markdown con priorità, impatto e raccomandazioni operative.
```

Qui l'agente ha:

- un'attività precisa;
- un confine operativo;
- un output richiesto;
- un formato;
- un criterio di utilità.

Regola professionale:

> Un agente senza obiettivo misurabile tende a diventare un chatbot.

Nel nostro percorso ogni agente dovrà avere una missione chiara, scritta in una Agent Card.

## 2. Context - Contesto

Il contesto è ciò che l'agente ha a disposizione **in quel momento** per ragionare.

Non coincide con tutta la conoscenza del sistema.

Esempi di elementi che possono entrare nel contesto:

- richiesta dell'utente;
- file del repository;
- documentazione;
- regole operative;
- template;
- output di altri agenti;
- vincoli di progetto;
- risultati dei tool;
- frammenti recuperati dalla knowledge base permanente.

Il contesto è una finestra operativa.

La memoria permanente è una biblioteca.

Il Context Builder decide quali libri, pagine o appunti portare sul tavolo di lavoro dell'agente.

Schema mentale:

```text
Knowledge Base permanente
        ↓
Retrieval
        ↓
Context Builder
        ↓
Prompt operativo dell'agente
        ↓
LLM
```

Questo è uno dei concetti più importanti di tutta la Agent Factory.

Un agente non deve avere tutto il mondo nel prompt. Deve avere il **contesto giusto** per il task.

## 3. Reasoning - Ragionamento e pianificazione

L'LLM è il motore cognitivo dell'agente.

Ma il modello da solo non basta.

Serve un processo di ragionamento guidato.

Quando un agente riceve un obiettivo complesso, non dovrebbe eseguire subito. Dovrebbe prima produrre o seguire un piano.

Esempio:

```text
Goal: analizza un repository software.

Piano:
1. Leggere README e documentazione principale.
2. Identificare linguaggio e framework.
3. Cercare file di configurazione.
4. Analizzare struttura cartelle.
5. Cercare test e pipeline CI/CD.
6. Valutare rischi.
7. Produrre report.
```

La pianificazione evita che l'agente agisca in modo casuale.

Nelle architetture agentiche professionali il piano può essere:

- generato dall'agente stesso;
- fornito da un Supervisor Agent;
- definito da un template;
- recuperato dalla knowledge base;
- aggiornato in base agli esiti intermedi.

Regola:

> Più il task è rischioso, più il piano deve essere esplicito e verificabile.

## 4. Tools - Strumenti

Un LLM può ragionare, ma senza tool resta limitato.

Un agente professionale usa strumenti per interagire con il mondo operativo.

Esempi:

- filesystem;
- GitHub;
- issue tracker;
- terminale;
- browser;
- database;
- API;
- documenti;
- strumenti di test;
- pipeline CI/CD;
- sistemi di deploy.

La differenza è sostanziale:

```text
LLM senza tool = consulente che parla
Agent con tool = operatore che può produrre artefatti
```

Però i tool aumentano anche il rischio.

Un agente che può solo leggere è poco pericoloso.

Un agente che può modificare file, fare commit, aprire PR o avviare deploy deve essere governato.

Per questo nella Agent Factory ogni tool dovrà essere associato a:

- permessi;
- limiti;
- condizioni d'uso;
- audit;
- possibilità di rollback;
- Human in the Loop nei punti critici.

## 5. Memory - Memoria

La memoria degli agenti va distinta con precisione.

### Memoria di contesto

È ciò che sta dentro la finestra operativa corrente.

Esempio:

```text
In questa conversazione abbiamo deciso che l'agente non deve modificare codice, ma solo produrre report.
```

Questa informazione è utile finché rimane nel contesto della sessione o del task.

### Memoria di lavoro

È temporanea e legata all'esecuzione.

Esempio:

```text
L'agente ha letto 15 file e tiene traccia dei problemi trovati durante l'analisi.
```

Finito il task, questa memoria può essere scartata o sintetizzata.

### Memoria permanente

È conoscenza validata che deve sopravvivere ai singoli agenti.

Esempio:

```text
Nei repository Java enterprise controllare sempre pom.xml, application.yml, Dockerfile e pipeline CI/CD.
```

Questa conoscenza non appartiene a un agente specifico.

Appartiene alla Agent Factory.

Regola fondamentale:

> Gli agenti sono temporanei. La conoscenza validata è permanente.

## 6. Feedback - Verifica e controllo qualità

Un agente professionale non dovrebbe limitarsi a generare un output.

Dovrebbe controllarlo.

Esempio di ciclo debole:

```text
Genera risposta → Fine
```

Esempio di ciclo professionale:

```text
Genera output
   ↓
Controlla rispetto ai criteri
   ↓
Individua errori o ambiguità
   ↓
Corregge
   ↓
Produce versione finale
```

Nel software questo feedback può venire da:

- compilazione;
- test automatici;
- linting;
- code review;
- static analysis;
- security scan;
- verifica umana;
- CI/CD.

Questo è fondamentale: un agente non deve fidarsi solo della propria generazione.

Deve usare meccanismi esterni di verifica.

## 7. Action - Azione

Gli agenti possono avere diversi livelli di autonomia.

### Livello 1 - Suggerimento

```text
Propongo una modifica.
```

L'agente non tocca il sistema.

### Livello 2 - Preparazione artefatto

```text
Creo un report, una patch o una pull request.
```

L'agente prepara il lavoro, ma l'umano approva.

### Livello 3 - Azione controllata

```text
Modifico file, eseguo test e preparo commit su branch dedicato.
```

Serve governance.

### Livello 4 - Autonomia operativa

```text
Modifico, testo, approvo e rilascio automaticamente.
```

Questo livello è ad alto rischio e va usato solo in contesti molto controllati.

Regola enterprise:

> L'autonomia dell'agente deve crescere solo dove crescono anche verifiche, tracciabilità e possibilità di rollback.

## 8. Governance - Human in the Loop

La supervisione umana è un elemento architetturale, non un fastidio.

In una pipeline professionale bisogna distinguere:

- attività a basso rischio;
- attività a medio rischio;
- attività ad alto rischio.

Esempi:

```text
Basso rischio:
- generare documentazione;
- riassumere meeting;
- proporre checklist.

Medio rischio:
- modificare codice su branch dedicato;
- creare issue operative;
- proporre refactoring.

Alto rischio:
- fare deploy in produzione;
- modificare dati reali;
- cambiare configurazioni di sicurezza;
- eliminare risorse.
```

La Agent Factory dovrà quindi prevedere gate di approvazione.

Non perché non ci fidiamo mai degli agenti, ma perché vogliamo renderli utilizzabili in contesti professionali.

## 9. Riassorbimento della conoscenza

Questa è una delle parti più importanti della nostra Bibbia Sacra.

Un agente non deve solo consumare conoscenza.

Deve anche produrne.

Esempio:

```text
Durante l'analisi di un progetto, l'agente scopre che molti errori derivano da file README non aggiornati rispetto alla pipeline CI/CD.
```

Questa osservazione può diventare una lesson learned:

```text
Quando si analizza un repository, confrontare sempre README, Dockerfile e pipeline CI/CD per verificare incoerenze tra documentazione ed esecuzione reale.
```

Ma non tutto ciò che un agente produce deve finire direttamente nella memoria permanente.

Serve un passaggio di compilazione della conoscenza.

Schema:

```text
Output grezzo dell'agente
        ↓
Valutazione
        ↓
Knowledge Compiler
        ↓
Conoscenza pulita, sintetica e riutilizzabile
        ↓
Knowledge Base permanente
```

Questa è una differenza enorme rispetto a una semplice cartella di appunti.

La knowledge base deve contenere conoscenza utile, validata e recuperabile.

## Approfondimento emerso dalla discussione: i file .md sono contesto o memoria permanente?

Domanda:

```text
I file .md fanno parte del contesto o della memoria permanente? Oppure il contesto attinge dalla memoria permanente?
```

Risposta architetturale:

> I file `.md` non sono automaticamente né contesto né memoria permanente. Sono contenitori persistenti. Diventano memoria permanente quando il sistema li mantiene, li aggiorna e li recupera sistematicamente per costruire il contesto dei futuri agenti.

Quindi:

- un file `.md` salvato e mai usato è solo storage;
- un file `.md` organizzato, validato e recuperato dai futuri agenti può essere memoria permanente;
- il contesto è ciò che viene effettivamente caricato nel task corrente;
- il retrieval è il processo che seleziona dalla memoria permanente ciò che serve al contesto.

Schema:

```text
File .md / database / vector store
        ↓
Knowledge Base permanente
        ↓
Retrieval
        ↓
Context Builder
        ↓
Contesto operativo dell'agente
        ↓
LLM
```

Questa distinzione è fondamentale per evitare confusione.

Il repository non è automaticamente la mente dell'agente.

Il repository è uno storage strutturato.

La memoria permanente nasce quando quello storage viene governato come conoscenza recuperabile.

## Approfondimento emerso dalla discussione: Dockerfile

Domanda:

```text
Dockerfile che è?
```

Un `Dockerfile` è la ricetta che descrive come costruire un container Docker.

Docker permette di impacchettare un'applicazione con il suo ambiente di esecuzione: linguaggio, librerie, dipendenze e comandi di avvio.

Esempio:

```dockerfile
FROM python:3.12
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["python", "main.py"]
```

Traduzione:

```text
Prendi un ambiente con Python 3.12.
Crea una cartella /app.
Copia il progetto.
Installa le dipendenze.
Avvia main.py.
```

Per un agente che analizza un repository, il Dockerfile è una fonte molto importante perché può rivelare:

- linguaggio usato;
- versione del runtime;
- librerie necessarie;
- comando di avvio;
- porta esposta;
- struttura attesa dell'applicazione;
- incoerenze tra documentazione e runtime reale.

Regola pratica:

> Quando un agente analizza un repository software, il Dockerfile è uno dei file da controllare presto, perché racconta come il progetto dovrebbe essere eseguito.

## Approfondimento emerso dalla discussione: CI/CD

Domanda:

```text
Che cos'è una CI/CD?
```

CI/CD significa:

- **Continuous Integration**;
- **Continuous Delivery** o **Continuous Deployment**.

In pratica è una pipeline automatica che parte quando il codice viene aggiornato e può eseguire operazioni come:

- installazione dipendenze;
- compilazione;
- test automatici;
- controlli di qualità;
- analisi sicurezza;
- build di container Docker;
- deploy in staging o produzione;
- notifiche.

Schema:

```text
git push
   ↓
Pipeline CI/CD
   ↓
Installazione dipendenze
   ↓
Build
   ↓
Test
   ↓
Security check
   ↓
Deploy o proposta di deploy
```

Per un agente AI la CI/CD è fondamentale perché diventa un meccanismo di feedback esterno.

L'agente può dire:

```text
Ho modificato il codice.
```

Ma la pipeline può verificare:

```text
Compila?
I test passano?
La sicurezza è accettabile?
Il deploy è riuscito?
```

Quindi la CI/CD aiuta a trasformare l'agente da generatore di testo a partecipante controllato del ciclo software.

## Pattern operativo: come un agente analizza un repository

Un agente professionale, davanti a un repository sconosciuto, dovrebbe iniziare dai file ad alto valore informativo.

Esempi:

```text
README.md
package.json
requirements.txt
pom.xml
build.gradle
Dockerfile
docker-compose.yml
.github/workflows/
gitlab-ci.yml
Jenkinsfile
.env.example
src/
tests/
```

Non tutti i file sono uguali.

Alcuni spiegano il progetto.

Altri spiegano come si esegue.

Altri spiegano come viene testato.

Altri spiegano come viene rilasciato.

Per questo il futuro Repository Analyst Agent dovrà avere una strategia di lettura, non leggere file a caso.

## Anti-pattern da evitare

### 1. Agente senza obiettivo

Un agente senza goal preciso produce output generici.

### 2. Agente senza tool

Un agente senza tool è spesso solo un assistente conversazionale.

### 3. Agente senza memoria

Ripete errori e non capitalizza esperienza.

### 4. Agente con troppa memoria nel prompt

Caricare tutto non significa ragionare meglio. Spesso significa confondere il modello.

### 5. Agente senza feedback

Se non verifica il proprio output, resta fragile.

### 6. Agente con troppa autonomia

Se può agire senza gate, aumenta il rischio operativo.

### 7. Knowledge base non governata

Se ogni appunto finisce nella memoria permanente senza pulizia, il sistema diventa rumoroso.

## Collegamento alla Agent Factory

Questa lezione ci porta a una visione più matura.

La Agent Factory non è una collezione di prompt.

È un sistema che:

```text
riceve un progetto
   ↓
genera agenti specializzati
   ↓
fornisce contesto ottimizzato
   ↓
assegna tool e limiti
   ↓
coordina il lavoro
   ↓
verifica gli output
   ↓
produce artefatti
   ↓
assorbe conoscenza validata
```

L'agente è temporaneo.

La conoscenza è permanente.

Il valore della fabbrica cresce quando riesce a usare ogni progetto per migliorare i progetti successivi.

## Esercizio operativo

Progettare una Agent Card per un futuro `Repository Analyst Agent`.

Compilare:

```text
Nome agente:
Missione:
Input:
Tool disponibili:
File da leggere per primi:
Output atteso:
Regole:
Criteri di qualità:
Quando deve chiedere conferma:
Conoscenza da riassorbire:
```

Obiettivo dell'esercizio: capire che l'agente non deve semplicemente "leggere il repository", ma deve seguire una strategia di analisi controllata.

## Lezioni apprese da assorbire

- Un AI Agent professionale è un sistema composto da goal, contesto, ragionamento, tool, memoria, feedback, azione e governance.
- L'LLM è il motore cognitivo, non l'intero agente.
- Il contesto è ciò che viene caricato nel task corrente.
- La memoria permanente è conoscenza validata, organizzata e recuperabile.
- I file `.md` sono contenitori: diventano memoria se governati e recuperati dal sistema.
- Il retrieval collega memoria permanente e contesto operativo.
- Dockerfile e CI/CD sono fonti fondamentali per capire come un progetto viene eseguito, testato e rilasciato.
- Gli agenti devono usare feedback esterni, non solo autovalutazione.
- L'autonomia deve crescere insieme a governance, verifiche e rollback.
- La Agent Factory deve assorbire conoscenza utile dopo ogni progetto o lezione.
