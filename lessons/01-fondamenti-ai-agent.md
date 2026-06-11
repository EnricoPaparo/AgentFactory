# Lezione 1 - Che cos'è davvero un AI Agent

## Obiettivo della lezione

Questa lezione introduce il concetto di AI Agent in modo operativo e professionale.

Alla fine della lezione bisogna saper distinguere:

- un prompt semplice;
- un assistente AI;
- un agente AI;
- una pipeline multi-agent;
- una Agent Factory.

L'obiettivo non è imparare una definizione astratta, ma costruire la base mentale per progettare sistemi agentici reali.

## Definizione operativa

Un AI Agent è un sistema basato su un modello linguistico che, dato un obiettivo, può:

- comprendere il contesto;
- pianificare azioni;
- usare strumenti;
- produrre artefatti;
- mantenere stato o memoria operativa;
- rispettare regole;
- collaborare con altri agenti;
- sottoporre output a verifica.

Formula mentale:

```text
Agent = LLM + Obiettivo + Contesto + Tool + Stato + Regole + Verifica
```

Questa formula è fondamentale perché impedisce di confondere il modello con l'agente.

Il modello linguistico è il motore cognitivo.

L'agente è il sistema operativo che usa quel motore dentro un processo.

## Prompt, assistente e agente

### Prompt semplice

Un prompt semplice è una richiesta singola.

Esempio:

```text
Scrivimi una funzione JavaScript per validare una email.
```

Il modello risponde, ma non ha autonomia, strumenti o responsabilità su un processo.

### Assistente AI

Un assistente AI può aiutare su un contesto più ampio.

Esempio:

```text
Leggi questo file e suggerisci miglioramenti.
```

Qui esiste un contesto, ma l'azione resta prevalentemente consultiva.

### Agente AI

Un agente AI riceve un obiettivo e può usare strumenti per produrre un risultato.

Esempio:

```text
Analizza il repository, individua problemi, modifica i file, esegui i test e prepara una pull request.
```

Qui siamo in un flusso operativo.

### Pipeline multi-agent

Una pipeline multi-agent coordina più agenti specializzati.

Esempio:

```text
Requirement Analyst -> Architect -> Developer -> Tester -> Reviewer -> Documentation Agent
```

Ogni agente ha un ruolo limitato, un input, un output e criteri di qualità.

## Automazione classica vs agente AI

Una automazione classica segue istruzioni rigide:

```text
Ogni giorno alle 8:00 prendi il file X, invialo a Y e salva una copia in Z.
```

Un agente AI è utile quando serve interpretazione:

```text
Analizza lo stato del progetto, individua rischi, proponi priorità e genera issue operative.
```

Regola professionale:

> Non usare agenti dove basta una semplice automazione.

Questa regola è importante in azienda perché evita complessità inutile.

## I quattro livelli di maturità

### Livello 1 - Prompt manuale

L'utente chiede, il modello risponde.

È utile per supporto rapido, ma non è una pipeline.

### Livello 2 - Assistente con contesto

Il modello lavora su documenti, file o repository.

La qualità aumenta perché l'AI non risponde nel vuoto.

### Livello 3 - Agente con tool

L'agente può leggere, scrivere, eseguire comandi, creare file, aprire issue o pull request.

Qui iniziamo a parlare di agentic workflow.

### Livello 4 - Pipeline multi-agent

Più agenti specializzati collaborano in una catena governata.

Questo è il livello che vogliamo raggiungere.

## Perché il multi-agent è importante

Un singolo agente generalista può fare molto, ma presenta rischi:

- confusione di ruolo;
- perdita di controllo;
- output poco verificabili;
- difficoltà nel capire dove è nato un errore;
- qualità instabile.

Il multi-agent serve a dividere il lavoro in responsabilità chiare.

In azienda questo è fondamentale: non basta che l'AI produca qualcosa, bisogna poter spiegare come, perché e con quali controlli.

## Pipeline mentale iniziale

```text
Input progetto
    ↓
Requirement Analyst Agent
    ↓
Software Architect Agent
    ↓
Developer Agent
    ↓
Tester Agent
    ↓
Reviewer Agent
    ↓
Documentation Agent
    ↓
Human Supervisor
    ↓
Knowledge Base permanente
```

Questa è la base concettuale della nostra Agent Factory.

## Artefatti

Un agente professionale deve produrre artefatti verificabili.

Esempi:

- documento requisiti;
- backlog;
- issue GitHub;
- diagramma;
- file modificato;
- test plan;
- bug report;
- pull request;
- changelog;
- manuale tecnico;
- manuale utente;
- lesson learned.

Regola d'oro:

> Un agente che non produce artefatti verificabili è solo un assistente conversazionale.

## Human in the loop

La supervisione umana non sparisce.

Il modello corretto non è:

```text
L'AI fa tutto e noi non controlliamo nulla.
```

Il modello corretto è:

```text
L'AI accelera il lavoro operativo, mentre l'umano mantiene governo, responsabilità e approvazione sui punti critici.
```

Esempi di gate:

- approvazione requisiti;
- approvazione architettura;
- approvazione modifiche critiche;
- review prima del deploy;
- verifica sicurezza.

## Template base per progettare un agente

```text
Nome agente:
Missione:
Input:
Tool disponibili:
Output atteso:
Regole:
Criteri di qualità:
Quando deve chiedere conferma:
```

Questo template sarà usato per tutti gli agenti del percorso.

## Esempio: Requirement Analyst Agent

```text
Nome agente:
Requirement Analyst Agent

Missione:
Trasformare una richiesta grezza in requisiti chiari, verificabili e organizzati.

Input:
Brief del progetto, note cliente, documenti, vincoli, eventuale storico.

Tool disponibili:
Lettura documenti, accesso repository, accesso issue, template requisiti.

Output atteso:
Requisiti funzionali, requisiti non funzionali, attori, casi d'uso, domande aperte, rischi.

Regole:
Non inventare requisiti non presenti.
Separare fatti, ipotesi e domande.
Rendere ogni requisito testabile.

Criteri di qualità:
Ogni requisito deve essere chiaro, verificabile e collegato a un bisogno.

Quando deve chiedere conferma:
Quando mancano vincoli di business, priorità, responsabilità, sicurezza o budget.
```

## Collegamento all'obiettivo finale

Questa lezione serve a fissare il principio base:

> Una Agent Factory non è un gruppo di chatbot. È un sistema governato che crea, coordina e migliora agenti specializzati per produrre artefatti verificabili.

## Esercizio operativo

Progettare un agente chiamato `IT Helpdesk Requirement Analyst Agent` per una webapp di gestione ticket IT aziendali.

Compilare:

```text
Nome agente:
Missione:
Input:
Tool disponibili:
Output atteso:
Regole:
Criteri di qualità:
Quando deve chiedere conferma:
```

## Lezioni apprese da assorbire

- Il modello linguistico non coincide con l'agente.
- Un agente deve avere obiettivo, contesto, tool, regole e verifica.
- Gli agenti professionali producono artefatti.
- Il multi-agent serve a dividere responsabilità e controlli.
- La supervisione umana resta necessaria.
- La conoscenza validata deve essere riassorbita nella knowledge base permanente.
