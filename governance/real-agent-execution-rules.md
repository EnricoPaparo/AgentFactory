# Real Agent Execution Rules

Queste regole valgono per ogni esecuzione reale di un agente in AgentFactory.

## Regola 1 - Nessun segreto nel repository

API key, token, password e credenziali non devono mai essere salvati nel repository.

Consentito:

```text
OPENAI_API_KEY presente come variabile ambiente
```

Vietato:

```text
OPENAI_API_KEY=[valore segreto reale]
```

## Regola 2 - Ogni run deve avere un output salvato

Un agente reale non produce una risposta volatile.

Produce un file.

Il file deve essere salvato in una posizione dichiarata prima del run.

## Regola 3 - Ogni run deve avere un run record

Ogni esecuzione reale deve produrre o aggiornare un run record.

Il run record deve indicare:

- agente;
- modello;
- input;
- prompt;
- output;
- budget;
- errori;
- stato;
- review prevista.

## Regola 4 - Primo run senza loop automatici

Il primo run di un agente non deve avere:

- retry automatici illimitati;
- loop di auto-miglioramento;
- creazione dinamica di altri agenti;
- uso di tool esterni non autorizzati.

Prima si osserva un singolo comportamento.

Poi si migliora.

## Regola 5 - Budget prima dell'esecuzione

Ogni run deve avere un limite prima di partire.

Il limite puo' essere:

- numero massimo di run;
- costo massimo;
- modello autorizzato;
- token massimo;
- tempo massimo.

## Regola 6 - Human gate per privilegi nuovi

Serve approvazione umana quando un agente vuole:

- scrivere fuori dai path previsti;
- usare tool esterni;
- installare dipendenze;
- chiamare altri servizi;
- fare deploy;
- creare nuovi agenti dinamici;
- modificare prompt/template ufficiali;
- aggiornare knowledge base permanente.

## Regola 7 - Review prima di riassorbire conoscenza

La conoscenza non viene assorbita perche' un agente la propone.

Viene assorbita solo dopo:

- output salvato;
- review;
- decisione;
- eventuale aggiornamento di template, prompt o knowledge base.
