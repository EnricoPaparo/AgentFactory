# 19 - Skill, trigger e attivazione degli agenti

## Obiettivo della lezione

Questa lezione serve a capire tre concetti che trasformano un agente isolato in un pezzo di sistema:

```text
Skill
Trigger
Orchestratore
```

Finora ho imparato a progettare agenti, output, handoff, review e un primo runtime minimo.

Adesso devo capire una cosa piu' avanzata:

```text
come faccio a far partire l'agente giusto,
nel momento giusto,
con la procedura giusta,
senza caricare ogni agente di istruzioni enormi?
```

La risposta non e' "metto tutto nella Agent Card".

La risposta corretta e':

```text
Agent Card = chi e' l'agente.
Skill = procedura riutilizzabile che l'agente puo' usare.
Trigger = evento o condizione che puo' far partire un lavoro.
Orchestratore = componente che decide se, quando e come attivare un agente.
Governance = regole che stabiliscono quando fermarsi.
```

Questa lezione non implementa ancora una pipeline automatica completa.

Serve a costruire la mappa mentale corretta prima di farlo.

## Perche' questa lezione conta

Un errore comune quando si studiano agenti AI e' pensare:

```text
creo un agente molto bravo,
gli do tantissime istruzioni,
gli do accesso a tanti tool,
e lui fara' tutto.
```

Questo approccio sembra potente, ma diventa fragile.

Perche'?

Perche' un agente troppo grande:

- ha troppe responsabilita';
- ha troppe istruzioni nel contesto;
- confonde procedure diverse;
- e' difficile da valutare;
- e' difficile da aggiornare;
- rischia di usare tool fuori momento;
- diventa un collo di bottiglia della pipeline.

Una Agent Factory professionale deve invece separare:

```text
identita'
procedura
trigger
tool
permessi
output
review
memoria
```

Le skill servono proprio a questo.

Non rendono magicamente piu' intelligente il modello.

Rendono piu' modulare il sistema.

## Prerequisiti

Prima di questa lezione devo avere chiari:

- che cos'e' una Agent Card;
- che cos'e' un output contract;
- che cos'e' un template;
- che cos'e' un handoff;
- che cos'e' un runtime minimo;
- perche' un agente deve avere privilegi limitati;
- perche' un output va valutato prima di procedere.

## Che cos'e' una skill

Una skill e' una procedura riutilizzabile che un agente puo' caricare quando serve.

Non e' semplicemente un prompt.

Non e' un agente completo.

Non e' un tool.

E' un pacchetto di istruzioni operative.

Esempio:

```text
Skill: requirement-analysis

Scopo:
Trasformare un brief grezzo in un Requirement Analysis Document.

Istruzioni:
- leggere il brief;
- separare fatti, ipotesi e domande aperte;
- produrre requisiti verificabili;
- usare il template RAD;
- preparare note per handoff;
- non inventare vincoli non dichiarati.

File di supporto:
- template RAD;
- esempi buoni;
- checklist di review;
- regole della knowledge base.
```

Questa skill non dice "chi sei".

Dice "come fai bene questa procedura".

Il "chi sei" resta nella Agent Card.

## Differenza tra Agent Card e skill

La Agent Card risponde a:

```text
chi e' l'agente?
qual e' la sua missione?
cosa puo' fare?
cosa non puo' fare?
quali input riceve?
quali output produce?
quali tool puo' usare?
quando deve fermarsi?
```

La skill risponde a:

```text
quando devi fare questa specifica attivita',
quali passaggi segui?
quali template usi?
quali controlli applichi?
quali errori eviti?
quale output operativo devi produrre?
```

Tabella mentale:

| Concetto | Domanda | Esempio |
|---|---|---|
| Agent Card | Chi sei e quali sono i tuoi confini? | Requirement Analyst Agent |
| Skill | Quale procedura sai eseguire? | Requirement analysis |
| Tool | Che azione concreta puoi fare? | leggere file, scrivere file, chiamare API |
| Runtime | Chi esegue davvero? | script Python |
| Orchestratore | Chi decide il flusso? | pipeline controller |

Quindi:

```text
un agente puo' usare piu' skill;
una skill puo' essere usata da piu' agenti;
un tool puo' essere usato dentro una skill solo se autorizzato.
```

## Perche' non mettere tutto nella Agent Card

Potrei pensare:

```text
metto nella Agent Card del Requirement Analyst tutto quello che deve sapere.
```

All'inizio funziona.

Poi la Agent Card cresce.

Dentro finisce:

- definizione del ruolo;
- template RAD;
- checklist;
- esempi;
- errori comuni;
- regole di knowledge base;
- istruzioni per handoff;
- regole di review;
- note di stile;
- casi particolari.

Risultato:

```text
la Agent Card diventa un manuale enorme.
```

Questo e' un problema.

Perche' la Agent Card dovrebbe restare piccola, leggibile e stabile.

La Agent Card deve dire:

```text
questo agente ha questa responsabilita'.
```

La skill deve dire:

```text
quando svolgi questa attivita', segui questa procedura.
```

Questa separazione riduce rumore nel contesto.

## Tipi di skill

Nel percorso AgentFactory posso distinguere almeno cinque tipi di skill.

### 1. Skill di analisi

Servono a trasformare input grezzi in artefatti strutturati.

Esempi:

```text
requirement-analysis
project-classification
risk-analysis
stakeholder-analysis
```

### 2. Skill di review

Servono a valutare output.

Esempi:

```text
requirement-review
adr-review
implementation-plan-review
security-review
```

### 3. Skill di progettazione

Servono a prendere decisioni o costruire piani.

Esempi:

```text
adr-writing
implementation-planning
handoff-design
agent-design
```

### 4. Skill operative

Servono a eseguire azioni controllate.

Esempi:

```text
run-tests
build-site
apply-patch
generate-docs
```

Queste sono piu' rischiose perche' possono usare tool.

Devono avere privilegi espliciti.

### 5. Skill di memoria

Servono a migliorare la factory nel tempo.

Esempi:

```text
knowledge-absorption
failure-analysis
schema-drift-detection
knowledge-curation
prompt-maintenance
```

Queste skill sono centrali per l'obiettivo finale:

```text
agenti che migliorano nel tempo senza gonfiarsi e senza perdere controllo.
```

## Struttura fisica di una skill

Per ora in AgentFactory usero' una forma semplice e leggibile.

Esempio:

```text
skills/requirement-analysis/SKILL.md
skills/requirement-analysis/examples/good-output.md
skills/requirement-analysis/examples/weak-output.md
skills/requirement-analysis/references/checklist.md
```

Non devo ancora creare tutte queste cartelle.

Ma devo capire il principio.

Il file centrale e':

```text
SKILL.md
```

Dentro ci sono:

- nome;
- descrizione;
- quando usare la skill;
- input attesi;
- procedura;
- output atteso;
- criteri di qualita';
- tool consentiti;
- condizioni di stop;
- file di supporto.

Questo e' simile alle skill moderne usate da ambienti agentici reali.

La cosa importante e' che la skill deve essere:

- leggibile da una persona;
- caricabile da un agente;
- versionabile;
- piccola abbastanza da essere mantenibile;
- specifica abbastanza da evitare ambiguita'.

## Skill e output contract

Una skill non sostituisce un output contract.

La skill dice:

```text
segui questi passi.
```

L'output contract dice:

```text
l'artefatto finale deve avere questa forma.
```

Esempio:

```text
Skill requirement-analysis:
spiega come analizzare un brief.

Output contract RAD:
spiega come deve essere strutturato il documento finale.
```

La skill puo' richiamare un template.

Ma non coincide con il template.

Regola:

```text
Skill = procedura.
Template = forma.
Output = artefatto compilato.
Review = controllo.
```

## Skill e tool

Una skill puo' includere istruzioni per usare tool.

Esempio:

```text
Skill build-site:
- esegui node tools/build-site.js;
- verifica che docs/index.html sia aggiornato;
- non modificare sorgenti Markdown;
- fermati se il build fallisce.
```

Ma attenzione.

Se una skill include tool, entra in gioco la governance.

Non basta scrivere:

```text
puoi modificare file.
```

Serve specificare:

- quali file;
- in quali condizioni;
- con quali comandi;
- con quale budget;
- con quale review;
- con quale human gate.

Per un Developer Agent questa differenza e' enorme.

Il modello non deve avere accesso libero.

Il runtime deve applicare i limiti.

## Che cos'e' un trigger

Un trigger e' un evento o una condizione che puo' far partire un lavoro agentico.

Esempio:

```text
L'utente carica un nuovo brief.
```

Questo evento puo' attivare:

```text
Requirement Analyst Agent + skill requirement-analysis
```

Un trigger non dovrebbe chiamare direttamente un agente senza controllo.

La sequenza sana e':

```text
trigger
  -> orchestratore
  -> controllo governance
  -> agente giusto
  -> skill giusta
  -> output
  -> review
```

## Tipi di trigger

### Trigger manuale

Parte da una decisione umana.

Esempio:

```text
Esegui Requirement Analyst su questo brief.
```

Questo e' il tipo di trigger che stiamo usando ora.

E' il piu' sicuro per imparare.

### Trigger da file

Parte quando compare o cambia un file.

Esempio:

```text
Nuovo file in experiments/inputs/
```

Possibile attivazione:

```text
Requirement Analyst Agent
```

### Trigger da output

Parte quando un agente produce un artefatto.

Esempio:

```text
RAD generato e salvato.
```

Possibile attivazione:

```text
Requirement Reviewer Agent
```

### Trigger da review

Parte quando una review produce un certo esito.

Esempio:

```text
Review score < soglia.
```

Possibile attivazione:

```text
Failure Analysis Agent
Knowledge Compiler
Prompt Maintainer
```

### Trigger da Git

Parte da eventi del repository.

Esempi:

```text
commit creato
pull request aperta
file modificato
build fallita
```

Possibile attivazione:

```text
Reviewer Agent
Documentation Agent
Test Planner Agent
```

### Trigger temporale

Parte a intervalli.

Esempio:

```text
Ogni venerdi, controlla knowledge base e regole duplicate.
```

Possibile attivazione:

```text
Knowledge Curator
Memory Steward
```

### Trigger esterno

Parte da un sistema esterno.

Esempi:

```text
form web
ticket Jira
email
Slack
webhook
n8n workflow
```

Possibile attivazione:

```text
Requirement Analyst Agent
Classifier Agent
Support Triage Agent
```

## Trigger non significa autorizzazione automatica

Questa e' una regola fondamentale.

Il fatto che un trigger accada non significa che l'agente debba agire subito.

Esempio:

```text
Trigger:
nuovo brief ricevuto.
```

Non significa:

```text
chiama subito modello costoso,
genera output,
passa tutto al Developer.
```

Significa:

```text
un evento e' avvenuto;
l'orchestratore deve decidere cosa fare.
```

Prima di attivare davvero un agente devo chiedere:

- il trigger e' valido?
- l'input e' completo?
- il budget e' disponibile?
- l'agente ha permessi adeguati?
- serve human gate?
- esiste gia' un output?
- rischio overwrite?
- qual e' la review prevista?

Quindi:

```text
Trigger = segnale.
Orchestratore = decisione.
Governance = limite.
```

## Che cos'e' un orchestratore

Un orchestratore e' il componente che decide il flusso.

In una versione minima puo' essere uno script Python.

In una versione piu' matura puo' essere:

- un workflow n8n;
- un grafo LangGraph;
- una pipeline custom;
- un supervisor agent;
- un sistema misto.

L'orchestratore risponde a domande come:

```text
quale agente parte?
con quale input?
con quale skill?
quale modello?
quali tool?
quale output path?
quale reviewer?
quale prossimo step?
```

Nel nostro percorso l'orchestratore verra' dopo.

Prima devo completare il ciclo minimo:

```text
Requirement Analyst run
  -> output
  -> review
  -> knowledge absorption
```

Poi potro' automatizzare la sequenza.

## Pipeline con skill

Una pipeline con skill potrebbe diventare:

```text
Trigger manuale: nuovo brief
  -> Orchestratore
  -> Requirement Analyst Agent
     usa skill requirement-analysis
     produce RAD
  -> Requirement Reviewer Agent
     usa skill requirement-review
     produce review
  -> Knowledge Compiler
     usa skill knowledge-absorption
     produce knowledge candidate
  -> Human gate
  -> Architect Agent
     usa skill adr-writing
     produce ADR
```

Notare una cosa:

```text
la pipeline non e' fatta solo da agenti.
```

E' fatta da:

- trigger;
- orchestratore;
- agenti;
- skill;
- tool;
- template;
- output;
- review;
- handoff;
- human gate;
- memoria.

Questa e' la differenza tra:

```text
chat intelligente
```

e:

```text
sistema agentico governato.
```

## Esempio semplice

Immagino un nuovo brief:

```text
Voglio creare una piccola app per gestire task personali.
```

Senza skill:

```text
Chiedo a un agente generico di analizzarlo.
```

Possibili problemi:

- output libero;
- requisiti inventati;
- niente handoff;
- niente review;
- niente memoria.

Con skill:

```text
Trigger: nuovo brief.
Orchestratore: seleziona Requirement Analyst Agent.
Skill: requirement-analysis.
Template: Requirement Analysis Document.
Output: RAD.
Review: requirement-review.
```

Il risultato e' piu' governabile.

## Esempio professionale

In azienda potrei avere:

```text
Trigger:
nuovo ticket cliente in Jira.

Orchestratore:
classifica il ticket.

Se e' richiesta nuova feature:
Requirement Analyst Agent + skill requirement-analysis.

Se e' bug:
Bug Triage Agent + skill bug-analysis.

Se e' incidente:
Incident Agent + skill incident-response.

Se contiene dati sensibili:
Human gate prima di inviare al modello.
```

Qui la skill non decide da sola.

La skill esegue bene una procedura.

L'orchestratore decide quale procedura applicare.

La governance decide cosa e' consentito.

## Anti-pattern ed errori comuni

### Errore 1 - Confondere skill e agente

Errore:

```text
Creo una skill requirement-analysis e penso di avere creato un agente.
```

Perche' e' sbagliato:

```text
Manca identita', responsabilita', privilegi, runtime, output path e review.
```

Correzione:

```text
La skill e' una capacita'. L'agente e' un ruolo operativo.
```

### Errore 2 - Skill troppo grande

Errore:

```text
Metto dentro la skill tutto il manuale.
```

Perche' e' fragile:

```text
La skill diventa rumorosa, costosa e difficile da aggiornare.
```

Correzione:

```text
La skill deve contenere procedura essenziale e riferimenti caricabili quando servono.
```

### Errore 3 - Trigger che agisce senza governance

Errore:

```text
Ogni nuovo file fa partire automaticamente un agente via API.
```

Perche' e' rischioso:

```text
Potrei spendere, sovrascrivere output o processare input non validati.
```

Correzione:

```text
Il trigger segnala. L'orchestratore decide. La governance limita.
```

### Errore 4 - Tool access nascosto nella skill

Errore:

```text
La skill dice all'agente di modificare file, ma non dichiara quali.
```

Perche' e' pericoloso:

```text
Il runtime non puo' controllare bene il rischio.
```

Correzione:

```text
Ogni skill operativa deve dichiarare tool, scope, file, comandi e stop condition.
```

### Errore 5 - Usare skill per evitare review

Errore:

```text
La skill e' ben fatta, quindi l'output sara' valido.
```

Perche' e' falso:

```text
Una skill migliora la procedura, ma non garantisce la qualita' del risultato.
```

Correzione:

```text
Ogni output importante resta da revieware.
```

## Collegamento con AgentFactory

Questa lezione prepara una nuova evoluzione del repository.

Finora ho:

```text
agents/
templates/
experiments/
knowledge-base/
runtime/
```

Piu' avanti potro' aggiungere:

```text
skills/
```

Ma non devo farlo in modo casuale.

Prima devo sapere quali skill servono davvero.

Candidate naturali:

```text
requirement-analysis
requirement-review
knowledge-absorption
adr-writing
adr-review
implementation-planning
developer-patch-proposal
trigger-routing
```

Per ora creo un template leggero:

```text
templates/agent-skill-template.md
```

Serve a progettare skill in modo coerente prima di renderle operative.

## Artefatti prodotti

Questa lezione produce:

```text
lessons/19-skill-trigger-attivazione-agenti.md
templates/agent-skill-template.md
```

Aggiorna anche:

```text
MANUAL.md
ROADMAP.md
GLOSSARY.md
CHANGELOG.md
tools/build-site.js
docs/
```

## Verifica personale

Dopo questa lezione devo saper rispondere:

```text
1. Che cos'e' una skill?
2. Perche' una skill non e' un agente?
3. Che differenza c'e' tra Agent Card e skill?
4. Che differenza c'e' tra skill, template e output contract?
5. Perche' le skill aiutano a non gonfiare le Agent Card?
6. Che cos'e' un trigger?
7. Perche' un trigger non e' autorizzazione automatica?
8. Che cosa decide l'orchestratore?
9. Perche' le skill operative con tool sono piu' rischiose?
10. Come una pipeline multi-agent puo' usare skill diverse?
```

## Conoscenza da assorbire

- Una skill e' una procedura riutilizzabile, non un agente completo.
- La Agent Card definisce identita' e confini; la skill definisce come eseguire una capacita'.
- Le skill evitano di gonfiare Agent Card e prompt operativi.
- Un trigger e' un segnale, non un permesso automatico.
- L'orchestratore decide quale agente attivare, con quale skill, input, output e review.
- Le skill che usano tool devono dichiarare privilegi e condizioni di stop.
- Una pipeline professionale combina agenti, skill, trigger, orchestratore, output contract, review e governance.

## Prossimo passo

Dopo questa lezione posso tornare al ciclo operativo reale:

```text
execute del Requirement Analyst Agent
  -> output AI
  -> review manuale guidata
  -> knowledge absorption
```

Solo dopo avra' senso automatizzare il passaggio:

```text
Requirement Analyst
  -> Reviewer
  -> Knowledge Compiler
```

Le skill saranno il modo con cui rendero' riutilizzabili queste procedure.
