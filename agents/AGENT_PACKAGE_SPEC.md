# Specifica completa di un Agent Package

Questa pagina spiega da quali file puo' essere composto fisicamente un agente in AgentFactory.

Serve a rispondere a una domanda concreta:

```text
preso un agente, quali sono tutti i file che lo definiscono, lo eseguono, lo controllano e lo fanno migliorare?
```

## Idea centrale

Un agente professionale non e' un singolo prompt.

Un agente professionale non e' nemmeno solo una Agent Card.

In AgentFactory un agente reale viene trattato come un package:

```text
Agent package = identita' + istruzioni + contratti + runtime + input + output + review + stato + memoria + governance
```

Questo non significa che ogni agente debba avere tutti questi file dal primo giorno.

Significa che devo sapere:

- quali file esistono;
- a cosa servono;
- quali sono obbligatori;
- quali sono condivisi con altri agenti;
- quali sono futuri;
- quali sono deprecati;
- chi puo' aggiornarli;
- quali file non devono gonfiarsi con conoscenza inutile.

## Tre livelli di maturita'

### Agente progettato

Un agente progettato esiste come ruolo.

Minimo richiesto:

```text
Agent Card
```

Serve per chiarire identita', missione, responsabilita', limiti e output atteso.

### Agente eseguibile

Un agente eseguibile puo' essere lanciato da un umano o da un runtime.

Minimo richiesto:

```text
Agent Card
Package manifest
Prompt operativo
Output template
Runtime binding
Config esempio
Input dichiarato
Output path
Run record path
Review prevista
Regole di governance
```

Serve per produrre output tracciabili, ripetibili e controllabili.

### Agente maturo

Un agente maturo puo' migliorare nel tempo senza diventare caotico.

Dovrebbe avere anche:

```text
Evals
Test
State Store
Versioni
Archivio
Manutenzione periodica
Knowledge validata
Metriche di qualita'
```

Serve per capire se l'agente sta migliorando davvero o se sta solo accumulando file.

## Mappa sintetica dei file

| Componente | Esempio | Scopo |
|---|---|---|
| Agent Card | `agents/requirement-analyst-agent.md` | Identita' e contratto operativo dell'agente |
| Package manifest | `agents/requirement-analyst-package.md` | Mappa fisica dei file collegati all'agente |
| Prompt operativo | `prompts/requirement-analyst-agent-prompt.md` | Istruzioni pronte per il modello |
| Output template | `templates/requirement-analysis-output-template.md` | Forma obbligatoria dell'artefatto prodotto |
| Review checklist | `templates/requirement-analysis-review-checklist.md` | Criteri per valutare l'output |
| Handoff contract | `templates/agent-handoff-contract-template.md` | Regole per passare lavoro ad altri agenti |
| Runtime binding | `runtime/run_requirement_analyst.py` | Codice che esegue o collega l'agente al modello |
| Config esempio | `runtime/config.example.env` | Variabili richieste senza segreti reali |
| Input | `experiments/*input*.md` | Materiale su cui l'agente deve lavorare |
| Run plan | `experiments/*run-plan*.md` | Piano prima dell'esecuzione |
| Pre-flight | `experiments/*preflight*.md` | Checklist prima di chiamate reali o azioni rischiose |
| Run record | `experiments/*run-record*.md` | Registro dell'esecuzione |
| Output prodotto | `experiments/*.md` | Artefatto generato dall'agente |
| Knowledge usata | `knowledge-base/*.md` | Regole validate recuperate nel contesto |
| Governance | `governance/*.md` | Regole su privilegi, budget, sicurezza e gate |
| Evals | `evals/<agent-name>/` | Valutazioni sistematiche della qualita' |
| Test | `tests/<agent-name>/` | Controlli automatici su output e comportamento |
| State Store | `state/<agent-name>/` | Stato operativo e storico sintetico |
| Archive | `archive/agents/<agent-name>/` | Versioni vecchie o deprecate |

## 1. Agent Card

File tipico:

```text
agents/<agent-name>-agent.md
```

Esempio:

```text
agents/requirement-analyst-agent.md
```

### A cosa serve

La Agent Card definisce l'identita' dell'agente.

Risponde a domande come:

- chi e' questo agente;
- perche' esiste;
- cosa deve fare;
- cosa non deve fare;
- quali input riceve;
- quale output produce;
- quali tool puo' usare;
- quali privilegi ha;
- quali regole operative deve rispettare;
- quando deve fermarsi;
- come viene valutato.

### Chi la legge

- umano progettista;
- orchestratore;
- runtime;
- altri agenti;
- reviewer;
- Agent Maintainer.

### Chi la aggiorna

Di norma:

- umano responsabile;
- Agent Maintainer;
- supervisore autorizzato.

Un agente operativo non dovrebbe modificare direttamente la propria Agent Card senza review.

### Cosa deve contenere

- missione;
- responsabilita';
- limiti;
- input;
- output;
- tool consentiti;
- privilegi;
- regole operative;
- condizioni di stop;
- criteri di qualita';
- rischi;
- versione.

### Cosa non deve contenere

La Agent Card non deve diventare un diario.

Non deve contenere:

- cronologia completa dei run;
- esempi infiniti;
- log tecnici;
- output prodotti;
- conoscenza grezza non validata;
- prompt lunghissimi;
- dettagli runtime troppo specifici.

### Quando cresce

Cresce quando cambiano:

- responsabilita';
- privilegi;
- tool;
- regole;
- criteri di qualita';
- condizioni di stop;
- versione dell'agente.

### Rischio principale

Gonfiare la Agent Card fino a renderla illeggibile.

Regola:

```text
La Agent Card deve restare il contratto dell'agente, non la sua memoria totale.
```

## 2. Package manifest

File tipico:

```text
agents/<agent-name>-package.md
```

Esempio:

```text
agents/requirement-analyst-package.md
```

### A cosa serve

Il Package manifest elenca fisicamente tutti i file collegati a un agente.

Risponde alla domanda:

```text
da quali file e' composto davvero questo agente?
```

### Chi lo legge

- umano progettista;
- nuovo contributor;
- orchestratore;
- Agent Maintainer;
- Reviewer;
- docente o studente che vuole capire il sistema.

### Chi lo aggiorna

- umano;
- Agent Maintainer;
- supervisore autorizzato.

### Cosa deve contenere

- file attivi;
- file futuri;
- file condivisi;
- file deprecati;
- scopo di ogni file;
- stato del file;
- relazioni principali.

### Cosa non deve contenere

Non deve duplicare il contenuto degli altri file.

Deve contenere la mappa, non tutto il territorio.

### Quando cresce

Cresce quando:

- nasce un nuovo prompt;
- nasce un nuovo template;
- cambia il runtime;
- viene aggiunto uno State Store;
- viene creata una cartella eval;
- un file viene deprecato;
- un agente eredita file condivisi.

### Rischio principale

Non aggiornarlo quando il package cambia.

Regola:

```text
Ogni agente reale deve avere un package manifest aggiornato.
```

## 3. Prompt operativo

File tipico:

```text
prompts/<agent-name>-prompt.md
```

Esempio:

```text
prompts/requirement-analyst-agent-prompt.md
```

### A cosa serve

Il prompt operativo trasforma la progettazione dell'agente in istruzioni pronte per il modello.

La Agent Card descrive chi e' l'agente.

Il prompt operativo dice al modello come comportarsi in una esecuzione concreta.

### Chi lo legge

- runtime;
- modello;
- umano progettista;
- Reviewer;
- Agent Maintainer.

### Chi lo aggiorna

- umano;
- Prompt Engineer;
- Agent Maintainer;
- supervisore autorizzato.

### Cosa deve contenere

- ruolo operativo;
- input disponibili;
- output atteso;
- regole di comportamento;
- template da rispettare;
- limiti;
- criteri di stop;
- formato di risposta;
- istruzioni per distinguere fatti, ipotesi e domande aperte.

### Cosa non deve contenere

Non deve contenere:

- segreti;
- API key;
- conoscenza permanente non filtrata;
- log di run;
- istruzioni in conflitto con Agent Card o governance.

### Quando cresce

Cresce quando si scopre che il modello:

- fraintende il ruolo;
- salta sezioni;
- inventa informazioni;
- non rispetta il template;
- non sa fermarsi;
- produce output troppo generici.

### Rischio principale

Usare il prompt operativo come discarica di regole.

Regola:

```text
Il prompt deve essere operativo, non enciclopedico.
```

## 4. Output template

File tipico:

```text
templates/<artifact-name>-template.md
```

Esempio:

```text
templates/requirement-analysis-output-template.md
```

### A cosa serve

Definisce la forma obbligatoria dell'output prodotto dall'agente.

Senza template, l'agente puo' produrre una risposta leggibile ma poco utilizzabile dagli agenti successivi.

### Chi lo legge

- agente che produce l'output;
- agente successivo;
- Reviewer;
- Output Contract Steward;
- umano.

### Chi lo aggiorna

- umano;
- Output Contract Steward;
- supervisore autorizzato.

### Cosa deve contenere

- sezioni obbligatorie;
- ordine delle sezioni;
- campi richiesti;
- formato atteso;
- esempi minimi se utili;
- vincoli di compilazione.

### Cosa non deve contenere

Non deve contenere:

- output specifici di un singolo run;
- conoscenza non validata;
- regole operative dell'agente non legate al formato;
- dettagli di runtime.

### Quando cresce

Cresce quando:

- gli output risultano ambigui;
- gli agenti successivi perdono informazioni;
- una sezione ricorrente manca spesso;
- la review dimostra che serve piu' struttura.

### Rischio principale

Template troppo grande o troppo rigido.

Regola:

```text
Il template deve vincolare cio' che serve, non soffocare il lavoro.
```

## 5. Review checklist

File tipico:

```text
templates/<artifact-name>-review-checklist.md
```

Esempio:

```text
templates/requirement-analysis-review-checklist.md
```

### A cosa serve

Definisce come valutare un output.

Senza checklist, la review diventa impressione personale.

### Chi la legge

- Reviewer Agent;
- umano reviewer;
- Supervisor Agent;
- Knowledge Compiler;
- Agent Maintainer.

### Chi la aggiorna

- umano;
- Reviewer;
- Agent Maintainer;
- Output Contract Steward.

### Cosa deve contenere

- criteri di qualita';
- controlli obbligatori;
- errori bloccanti;
- scala di valutazione;
- azioni correttive possibili;
- condizioni per approvare, rivedere o bloccare.

### Cosa non deve contenere

Non deve contenere:

- output completo;
- discussioni lunghe;
- regole duplicate da governance;
- eccezioni non approvate.

### Quando cresce

Cresce quando:

- emergono errori ricorrenti;
- serve distinguere warning da blocchi;
- bisogna rendere la review piu' oggettiva;
- entrano nuovi requisiti di qualita'.

### Rischio principale

Checklist troppo vaga.

Regola:

```text
Una checklist utile deve produrre decisioni, non solo commenti.
```

## 6. Handoff contract

File tipico:

```text
templates/agent-handoff-contract-template.md
```

Oppure un file concreto:

```text
experiments/*handoff*.md
```

### A cosa serve

Definisce come un agente passa lavoro a un altro agente.

L'handoff evita che ogni agente debba ricostruire il contesto da zero.

### Chi lo legge

- agente mittente;
- agente ricevente;
- orchestratore;
- Supervisor Agent;
- umano.

### Chi lo aggiorna

- umano;
- agente mittente per l'istanza concreta;
- Output Contract Steward per il template;
- Supervisor Agent se autorizzato.

### Cosa deve contenere

- agente mittente;
- agente destinatario;
- artefatti sorgente;
- obiettivo del passaggio;
- scope;
- out of scope;
- vincoli;
- rischi;
- domande aperte;
- output atteso;
- condizioni di stop.

### Cosa non deve contenere

Non deve contenere:

- intera cronologia del progetto;
- informazioni non necessarie al destinatario;
- decisioni non validate;
- privilegi non approvati.

### Quando cresce

Cresce quando:

- gli agenti successivi perdono contesto;
- cambiano responsabilita';
- servono piu' vincoli;
- emergono errori di passaggio.

### Rischio principale

Passare troppo poco o troppo contesto.

Regola:

```text
Un buon handoff passa cio' che serve al prossimo agente, non tutto cio' che esiste.
```

## 7. Runtime binding

File tipico:

```text
runtime/<runner-name>.py
```

Esempio:

```text
runtime/run_requirement_analyst.py
```

### A cosa serve

Il runtime binding e' il codice che collega file, prompt, input, modello e output.

Puo' fare:

- leggere Agent Card o prompt;
- leggere input;
- leggere template;
- comporre la richiesta al modello;
- eseguire dry-run;
- chiamare API in execute;
- salvare output;
- salvare run record.

### Chi lo legge

- umano tecnico;
- Developer Agent;
- Reviewer;
- futuro orchestratore.

### Chi lo aggiorna

- umano;
- Developer Agent autorizzato;
- Maintainer tecnico.

### Cosa deve contenere

- percorsi dei file;
- modalita' dry-run;
- modalita' execute;
- controlli sugli input;
- gestione errori;
- salvataggio output;
- salvataggio run record;
- limiti di budget o modello se previsti.

### Cosa non deve contenere

Non deve contenere:

- API key hardcoded;
- segreti;
- output permanenti scritti nel codice;
- log sensibili;
- regole agentiche che appartengono ad Agent Card o prompt.

### Quando cresce

Cresce quando:

- aumenta la complessita' di esecuzione;
- serve tracing;
- servono retry controllati;
- entrano tool;
- entrano piu' modelli;
- entrano pipeline multi-agent.

### Rischio principale

Mescolare logica agentica, segreti e runtime nello stesso punto.

Regola:

```text
Il runtime esegue e traccia. Non deve diventare la memoria dell'agente.
```

## 8. Config esempio

File tipico:

```text
runtime/config.example.env
```

### A cosa serve

Documenta le variabili necessarie per eseguire un agente senza salvare segreti veri nel repository.

### Chi lo legge

- umano;
- docente;
- studente;
- runtime maintainer;
- Developer Agent.

### Chi lo aggiorna

- umano;
- maintainer tecnico;
- Developer Agent autorizzato.

### Cosa deve contenere

- nomi delle variabili ambiente;
- valori fittizi;
- commenti minimi;
- modello predefinito se utile;
- limiti di budget se configurabili.

### Cosa non deve contenere

Non deve mai contenere:

- API key reali;
- token;
- password;
- endpoint privati sensibili;
- dati personali.

### Quando cresce

Cresce quando:

- il runtime richiede nuove variabili;
- si aggiunge un provider;
- si aggiungono limiti;
- cambia il modello predefinito.

### Rischio principale

Committare segreti reali.

Regola:

```text
Nel repo entrano esempi, non credenziali.
```

## 9. Input

File tipico:

```text
experiments/<id>-<project>-input.md
```

### A cosa serve

Rende esplicito il materiale su cui l'agente deve lavorare.

Un input versionato permette di ripetere una esecuzione e confrontare risultati nel tempo.

### Chi lo legge

- agente;
- runtime;
- umano;
- Reviewer;
- agente successivo se serve.

### Chi lo aggiorna

- umano;
- agente autorizzato a preparare brief;
- Project Intake Agent in futuro.

### Cosa deve contenere

- brief;
- obiettivo;
- vincoli;
- note;
- link o riferimenti;
- dati disponibili;
- domande aperte iniziali.

### Cosa non deve contenere

Non deve contenere:

- segreti;
- informazioni non necessarie;
- dati personali non gestiti;
- output dell'agente;
- review.

### Quando cresce

Cresce quando:

- il brief viene chiarito;
- arrivano nuovi documenti;
- cambiano vincoli;
- emergono informazioni essenziali.

### Rischio principale

Confondere input con output.

Regola:

```text
L'input descrive il problema. L'output descrive il lavoro dell'agente.
```

## 10. Run plan

File tipico:

```text
experiments/<id>-<agent-name>-run-plan.md
```

### A cosa serve

Definisce cosa si intende fare prima di eseguire l'agente.

E' il piano operativo del run.

### Chi lo legge

- umano;
- agente;
- runtime;
- reviewer;
- Supervisor Agent.

### Chi lo aggiorna

- umano;
- Supervisor Agent;
- agente pianificatore autorizzato.

### Cosa deve contenere

- agente coinvolto;
- obiettivo del run;
- input;
- output previsto;
- file che verranno letti;
- file che verranno scritti;
- modello previsto;
- budget;
- condizioni di stop;
- review attesa.

### Cosa non deve contenere

Non deve contenere:

- output finale;
- log dell'esecuzione;
- segreti;
- decisioni post-run.

### Quando cresce

Cresce quando:

- il run diventa rischioso;
- ci sono piu' file coinvolti;
- serve approvazione;
- cambia il budget;
- cambia il modello.

### Rischio principale

Eseguire senza sapere cosa sara' letto o scritto.

Regola:

```text
Un run reale deve avere un piano leggibile prima dell'esecuzione.
```

## 11. Pre-flight

File tipico:

```text
experiments/<id>-<agent-name>-preflight.md
```

### A cosa serve

Controlla che si possa eseguire il run senza sorprese.

E' particolarmente importante prima di chiamate API, scrittura file, tool esterni o azioni costose.

### Chi lo legge

- umano;
- runtime operator;
- Supervisor Agent;
- Reviewer.

### Chi lo aggiorna

- umano;
- Supervisor Agent;
- maintainer del runtime.

### Cosa deve contenere

- API key presente ma non esposta;
- modello scelto;
- budget;
- input presente;
- output path;
- run record path;
- review prevista;
- condizioni di stop;
- rischi;
- decisione go/no-go.

### Cosa non deve contenere

Non deve contenere:

- chiavi reali;
- output finale;
- log lunghi;
- valutazioni post-run.

### Quando cresce

Cresce quando:

- aumenta il rischio;
- si aggiungono tool;
- si aggiunge scrittura su repo;
- si aggiunge accesso esterno;
- si aggiungono costi.

### Rischio principale

Trattarlo come burocrazia.

Regola:

```text
Il pre-flight serve a evitare errori costosi prima che succedano.
```

## 12. Run record

File tipico:

```text
experiments/<id>-<agent-name>-run-record.md
```

### A cosa serve

Registra cosa e' successo durante una esecuzione reale.

E' la base per audit, review, debugging e miglioramento.

### Chi lo legge

- umano;
- Reviewer;
- Knowledge Compiler;
- Agent Maintainer;
- Supervisor Agent.

### Chi lo aggiorna

- runtime;
- umano;
- sistema di tracing;
- Supervisor Agent se autorizzato.

### Cosa deve contenere

- agente;
- versione agente;
- modello;
- input usato;
- prompt usato;
- output path;
- durata;
- costo stimato;
- stato;
- errori;
- retry;
- review prevista;
- knowledge candidate emerse.

### Cosa non deve contenere

Non deve contenere:

- segreti;
- dati sensibili non necessari;
- intero dump di contesto se troppo grande;
- output duplicato se gia' salvato altrove.

### Quando cresce

Cresce ad ogni run.

Ma ogni run dovrebbe avere il proprio record, non un unico file infinito.

### Rischio principale

Accumulare log enormi e inutilizzabili.

Regola:

```text
Il run record deve rendere il run verificabile, non diventare un archivio grezzo infinito.
```

## 13. Output prodotto

File tipico:

```text
experiments/<id>-<project>-<artifact>.md
```

### A cosa serve

E' l'artefatto generato dall'agente.

Esempi:

- documento requisiti;
- ADR;
- implementation plan;
- review;
- handoff;
- test report;
- knowledge candidate.

### Chi lo legge

- umano;
- agente successivo;
- Reviewer;
- Knowledge Compiler;
- sito statico se pubblicato.

### Chi lo aggiorna

Dipende dalla regola del progetto.

In generale:

- l'agente produce;
- il reviewer valuta;
- l'umano approva;
- eventuali modifiche devono essere tracciate.

### Cosa deve contenere

- contenuto dell'artefatto;
- struttura conforme al template;
- riferimenti agli input;
- ipotesi;
- rischi;
- decisioni;
- handoff se serve.

### Cosa non deve contenere

Non deve contenere:

- prompt completo;
- segreti;
- log runtime;
- note casuali non strutturate;
- modifiche alla conoscenza permanente non validate.

### Quando cresce

Cresce quando l'artefatto viene raffinato o revisionato.

Se cambia troppo, meglio creare una nuova versione o un nuovo file.

### Rischio principale

Confondere output approvato e bozza.

Regola:

```text
Ogni output deve avere stato chiaro: draft, reviewed, approved, rejected o archived.
```

## 14. Knowledge usata

File tipico:

```text
knowledge-base/<topic>.md
```

### A cosa serve

Contiene conoscenza validata e riutilizzabile.

Non e' memoria grezza.

E' conoscenza che ha superato un processo di assorbimento.

### Chi la legge

- Context Builder;
- agente operativo;
- umano;
- Knowledge Compiler;
- Memory Steward.

### Chi la aggiorna

- umano;
- Knowledge Compiler;
- Memory Steward;
- supervisore autorizzato.

### Cosa deve contenere

- regole validate;
- principi;
- decisioni riutilizzabili;
- limiti di validita';
- esempi minimi;
- data o contesto di origine se utile.

### Cosa non deve contenere

Non deve contenere:

- transcript grezzi;
- log di run;
- output completi copiati senza sintesi;
- conoscenza contraddittoria non risolta;
- regole vecchie ancora attive senza note.

### Quando cresce

Cresce dopo:

- review;
- failure analysis;
- lesson learned;
- decisioni approvate;
- pattern ricorrenti.

### Rischio principale

Accumulo di conoscenza rumorosa.

Regola:

```text
La knowledge base deve aumentare segnale, non rumore.
```

## 15. Governance

File tipico:

```text
governance/<rule-set>.md
```

Esempio:

```text
governance/real-agent-execution-rules.md
```

### A cosa serve

Definisce regole trasversali su sicurezza, privilegi, budget, human gate, esecuzione e responsabilita'.

### Chi la legge

- tutti gli agenti;
- runtime;
- umano;
- Supervisor Agent;
- Reviewer.

### Chi la aggiorna

- umano;
- Supervisor;
- governance maintainer.

### Cosa deve contenere

- regole di sicurezza;
- privilegi consentiti;
- privilegi vietati;
- budget;
- gate umani;
- gestione segreti;
- regole di scrittura file;
- condizioni di stop;
- audit trail.

### Cosa non deve contenere

Non deve contenere:

- dettagli specifici di un singolo agente se non sono regole generali;
- segreti;
- output di run;
- decisioni temporanee non approvate.

### Quando cresce

Cresce quando:

- si aggiungono tool;
- aumenta autonomia;
- si introducono agenti dinamici;
- si scrive codice;
- si fa deploy;
- aumentano costi o rischi.

### Rischio principale

Governance troppo debole o troppo pesante.

Regola:

```text
La governance deve rendere possibile lavorare in sicurezza, non bloccare tutto.
```

## 16. Evals

Cartella tipica:

```text
evals/<agent-name>/
```

### A cosa servono

Misurano la qualita' dell'agente in modo ripetibile.

Un eval serve a rispondere:

```text
questa nuova versione dell'agente lavora meglio della precedente?
```

### Chi li legge

- umano;
- Agent Maintainer;
- Reviewer;
- sistema CI in futuro.

### Chi li aggiorna

- umano;
- Agent Maintainer;
- Evaluation Engineer;
- Reviewer.

### Cosa devono contenere

- casi di test;
- input;
- output atteso o criteri di score;
- metriche;
- baseline;
- risultati.

### Cosa non devono contenere

Non devono contenere:

- dati sensibili;
- aspettative vaghe;
- casi non versionati;
- metriche non spiegate.

### Quando crescono

Crescono quando:

- un errore ricorrente diventa caso di test;
- si aggiunge una capacita';
- cambia il template;
- cambia il modello;
- cambia il prompt.

### Rischio principale

Pensare che un agente migliori solo perche' il prompt sembra migliore.

Regola:

```text
Senza eval non so se sto migliorando o solo cambiando.
```

## 17. Test

Cartella tipica:

```text
tests/<agent-name>/
```

### A cosa servono

Controllano aspetti automatici e verificabili.

Esempi:

- il file output esiste;
- il Markdown ha sezioni obbligatorie;
- il JSON e' valido;
- il runtime non parte senza input;
- il run record viene scritto;
- il budget viene rispettato.

### Chi li legge

- Developer Agent;
- umano;
- CI;
- Reviewer.

### Chi li aggiorna

- umano tecnico;
- Developer Agent autorizzato;
- Maintainer.

### Cosa devono contenere

- test automatici;
- fixture;
- comandi di esecuzione;
- aspettative chiare.

### Cosa non devono contenere

Non devono contenere:

- API key;
- dipendenza obbligatoria da chiamate costose;
- assert troppo fragili su testo libero;
- dati sensibili.

### Quando crescono

Crescono quando:

- aumenta il runtime;
- aumentano formati output;
- si aggiungono tool;
- si aggiungono regole di sicurezza.

### Rischio principale

Testare il testo generato come se fosse codice deterministico.

Regola:

```text
I test controllano struttura e vincoli. Gli eval controllano qualita' semantica.
```

## 18. State Store

Cartella tipica:

```text
state/<agent-name>/
```

### A cosa serve

Memorizza lo stato operativo sintetico dell'agente o della pipeline.

Non e' la Agent Card.

Non e' la knowledge base.

E' lo stato di lavoro.

### Chi lo legge

- runtime;
- orchestratore;
- Supervisor Agent;
- Agent Maintainer;
- umano.

### Chi lo aggiorna

- runtime;
- orchestratore;
- Supervisor Agent autorizzato.

### Cosa deve contenere

Potrebbe contenere:

- ultimo run valido;
- versione agente usata;
- stato di pipeline;
- task aperti;
- output in attesa di review;
- metriche sintetiche;
- trace indicizzati.

### Cosa non deve contenere

Non deve contenere:

- tutta la memoria permanente;
- transcript enormi;
- segreti;
- conoscenza non validata spacciata per regola;
- copie infinite degli output.

### Quando cresce

Cresce quando:

- l'agente diventa persistente;
- la pipeline ha stati intermedi;
- ci sono run ricorrenti;
- serve recuperare stato tra sessioni.

### Rischio principale

Confondere stato operativo e identita' dell'agente.

Regola:

```text
La Agent Card dice chi e' l'agente. Lo State Store dice in che stato operativo si trova.
```

## 19. Archive

Cartella tipica:

```text
archive/agents/<agent-name>/
```

### A cosa serve

Conserva versioni vecchie, deprecate o storiche.

Serve a non perdere traccia senza lasciare tutto attivo.

### Chi lo legge

- umano;
- Agent Maintainer;
- Memory Steward;
- auditor.

### Chi lo aggiorna

- umano;
- Agent Maintainer;
- Memory Steward.

### Cosa deve contenere

- vecchie Agent Card;
- vecchi prompt;
- vecchi template;
- vecchie regole;
- note di deprecazione;
- motivi dell'archiviazione.

### Cosa non deve contenere

Non deve contenere:

- segreti;
- file ancora attivi;
- materiale archiviato senza spiegazione;
- copie inutili.

### Quando cresce

Cresce quando:

- una versione viene sostituita;
- una regola viene deprecata;
- un prompt viene ritirato;
- un agente viene dismesso.

### Rischio principale

Tenere tutto attivo per paura di perdere qualcosa.

Regola:

```text
Archiviare non significa cancellare: significa togliere dal contesto attivo.
```

## Regola di progettazione

Quando creo o modifico un agente, devo chiedermi:

```text
Sto modificando identita', istruzioni, formato, runtime, stato, memoria o governance?
```

La risposta decide dove scrivere.

| Se sto modificando... | Scrivo in... |
|---|---|
| Identita', missione, limiti | Agent Card |
| Mappa dei file | Package manifest |
| Istruzioni per il modello | Prompt operativo |
| Forma dell'output | Output template |
| Criteri di review | Review checklist |
| Passaggio tra agenti | Handoff contract |
| Esecuzione tecnica | Runtime binding |
| Variabili richieste | Config esempio |
| Materiale del task | Input |
| Piano del run | Run plan |
| Controlli prima del run | Pre-flight |
| Traccia dopo il run | Run record |
| Risultato dell'agente | Output prodotto |
| Regole riutilizzabili validate | Knowledge base |
| Sicurezza e privilegi | Governance |
| Misurazione qualita' | Evals |
| Controlli automatici | Tests |
| Stato operativo | State Store |
| Versioni vecchie | Archive |

## Anti-pattern principali

### Mettere tutto nella Agent Card

Problema:

```text
L'agente diventa illeggibile e difficile da mantenere.
```

Correzione:

```text
Separare identita', prompt, template, runtime, output, stato e memoria.
```

### Mettere conoscenza grezza nella knowledge base

Problema:

```text
La knowledge base diventa rumorosa e peggiora i futuri contesti.
```

Correzione:

```text
Assorbire solo conoscenza validata, sintetica e riutilizzabile.
```

### Non avere run record

Problema:

```text
Non posso capire cosa e' successo durante una esecuzione.
```

Correzione:

```text
Ogni run reale deve produrre un run record.
```

### Non distinguere output e review

Problema:

```text
L'artefatto prodotto sembra approvato anche se non e' stato valutato.
```

Correzione:

```text
Separare output prodotto, review e decisione.
```

### Lasciare vecchie regole attive

Problema:

```text
L'agente riceve istruzioni contraddittorie o obsolete.
```

Correzione:

```text
Archiviare, deprecare o comprimere regole vecchie.
```

## Regola finale

Un agente puo' migliorare nel tempo solo se i suoi file restano leggibili, separati e governati.

Quindi:

```text
Non costruisco agenti potenti accumulando prompt.
Costruisco agenti potenti progettando package mantenibili.
```
