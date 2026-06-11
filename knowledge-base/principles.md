# Principi permanenti della AgentFactory

Questa pagina contiene i principi che guidano il progetto.

## 1. Ogni lezione deve servire l'obiettivo finale

Nessun contenuto deve essere fine a sé stesso.

Ogni spiegazione, esercizio e template deve contribuire alla costruzione della Agent Factory.

## 2. Architettura prima del tool

Claude Code, Codex, OpenAI Agents SDK, MCP, Antigravity o altri strumenti possono cambiare.

La capacità di progettare pipeline, ruoli, contesti, verifiche e governance resta.

## 3. Meno codice possibile

Il codice è uno strumento, non l'obiettivo.

Si usa codice solo quando è necessario per costruire, verificare o automatizzare parti della pipeline.

## 4. Agenti temporanei, conoscenza permanente

Gli agenti possono essere generati e distrutti in base al progetto.

La conoscenza validata deve essere assorbita nella knowledge base permanente.

## 5. Artefatti verificabili

Ogni agente deve produrre output controllabili:

- documenti;
- issue;
- PR;
- report;
- test;
- checklist;
- decisioni architetturali;
- lezioni apprese.

## 6. Human in the loop

Le decisioni critiche devono rimanere sotto controllo umano.

## 7. Aggiornamento repo solo dopo conferma

Alla fine di ogni lezione l'assistente deve chiedere esplicitamente:

> Aggiorno il repo e aggiungo la lezione al repo git?

Solo se l'utente conferma, l'assistente deve:

1. controllare lo stato del repository;
2. verificare se vanno modificati file già esistenti;
3. aggiungere o aggiornare la lezione nel manuale;
4. aggiornare eventuali file collegati, per esempio `MANUAL.md`, `ROADMAP.md`, `CHANGELOG.md`, `GLOSSARY.md`, `templates/`, `agents/`, `knowledge-base/` o `governance/`;
5. mantenere il repository coerente con la roadmap e con l'obiettivo finale della Agent Factory.

Questa regola impedisce aggiornamenti automatici non validati e trasforma GitHub in memoria consolidata del percorso.

## 8. Miglioramento continuo

Dopo ogni progetto o lezione, il sistema deve chiedersi:

- cosa abbiamo imparato?
- cosa va reso permanente?
- quale template va migliorato?
- quale regola va aggiornata?
- quale agente va modificato?

## 9. Prima classificare il processo, poi scegliere la soluzione

Quando arriva un task, non bisogna partire chiedendo quale agente usare.

Bisogna prima classificare la natura del task:

- automazione deterministica;
- workflow;
- AI Agent;
- agentic workflow;
- pipeline multi-agent;
- Agent Factory.

Questa regola evita over-engineering e impedisce di usare agenti AI dove basterebbe una soluzione più semplice, affidabile e controllabile.

Formula operativa:

```text
Classificazione del task -> scelta architetturale -> agenti/tool/gate necessari
```

## 10. Automazioni e agenti devono collaborare

Una Agent Factory professionale non è composta solo da agenti.

È un sistema ibrido in cui:

- le automazioni gestiscono azioni prevedibili e ripetitive;
- i workflow coordinano stati, step e responsabilità;
- gli agenti gestiscono interpretazione, ragionamento e produzione di artefatti;
- gli Human Gate controllano decisioni critiche;
- la knowledge base conserva solo conoscenza validata.

Regola:

> Gli agenti non sostituiscono tutta l'automazione. Gli agenti entrano dove serve intelligenza contestuale.
