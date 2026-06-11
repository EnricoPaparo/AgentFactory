# Manuale AgentFactory

## Introduzione

Questo manuale documenta passo passo il percorso di costruzione di una Agent Factory.

Non è un semplice insieme di appunti: è un manuale operativo, versionato e incrementale, pensato per essere riutilizzabile anche in contesti didattici.

## Visione

Una Agent Factory è un sistema capace di:

1. ricevere un progetto o un problema;
2. analizzarlo;
3. generare o configurare agenti specializzati;
4. fornire agli agenti il contesto necessario;
5. orchestrare il lavoro;
6. produrre artefatti verificabili;
7. far validare gli output;
8. riassorbire la conoscenza utile nel sistema permanente.

## Indice lezioni

- [Lezione 1 - Fondamenti degli AI Agent](lessons/01-fondamenti-ai-agent.md)
- [Lezione 2 - Requirement Analyst Agent](lessons/02-requirement-analyst-agent.md)
- [Lezione 3 - Differenza tra agente, workflow e automazione](lessons/03-differenza-agente-workflow-automazione.md)
- [Lezione 4 - Anatomia di un AI Agent Professionale](lessons/04-anatomia-ai-agent-professionale.md)

## Principi fondamentali

### 1. Architettura prima del tool

Gli strumenti cambiano. Il metodo resta.

Per questo il percorso non parte da un singolo prodotto, ma dalla progettazione di ruoli, responsabilità, input, output, verifiche e governance.

### 2. Meno codice possibile, più sistema possibile

Il codice è uno strumento, non il centro del percorso.

Useremo codice solo quando serve davvero. L'obiettivo è costruire pipeline agentiche, non scrivere codice per abitudine.

### 3. Gli agenti producono artefatti

Un agente professionale non deve solo conversare. Deve produrre qualcosa di verificabile:

- requisiti;
- backlog;
- issue;
- documentazione;
- test plan;
- codice;
- pull request;
- review;
- changelog;
- lezioni apprese.

### 4. Gli agenti sono usa e getta, la conoscenza è permanente

Gli agenti possono essere creati, adattati e distrutti in base al progetto.

La conoscenza validata, invece, deve rimanere nel sistema.

### 5. Human in the loop

La supervisione umana resta centrale.

L'autonomia senza controllo non è professionalità: è rischio operativo.

### 6. Il contesto viene costruito, non accumulato

Un agente non deve ricevere tutta la conoscenza disponibile.

Deve ricevere il contesto giusto per il task corrente.

La memoria permanente alimenta il contesto tramite recupero selettivo, template e regole operative.

### 7. I file sono contenitori, non automaticamente memoria

File Markdown, database, documenti e repository sono storage.

Diventano memoria permanente solo quando contengono conoscenza validata, organizzata e recuperabile dai futuri agenti.

### 8. Prima classificare il processo, poi scegliere l'agente

Non ogni task richiede un agente AI.

Prima bisogna capire se il problema è:

- una automazione deterministica;
- un workflow;
- un task agentico;
- una pipeline multi-agent;
- un caso da Agent Factory.

Questa distinzione protegge il sistema da complessità inutile e rende la progettazione più professionale.

## Stato del manuale

Questo manuale verrà aggiornato lezione dopo lezione.
