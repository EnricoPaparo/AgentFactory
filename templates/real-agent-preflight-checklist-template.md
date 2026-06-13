# Real Agent Pre-flight Checklist Template

Usare questo template prima di eseguire un agente reale via API.

## Metadati

```text
Pre-flight ID: [YYYYMMDD-agent-task]
Data: [YYYY-MM-DD]
Agente: [Nome agente]
Runtime: [path]
Supervisore umano: [Nome]
Stato: [Da completare / Pronto / Bloccato]
```

## Ambiente

```text
Python disponibile: [Si / No]
Comando Python usato: [python / py / path assoluto]
Ambiente virtuale attivo: [Si / No / Non necessario]
Dipendenze installate: [Si / No]
Pacchetto openai importabile: [Si / No]
```

## Configurazione API

```text
OPENAI_API_KEY presente: [Si / No]
OPENAI_API_KEY stampata o salvata nel repo: No
OPENAI_MODEL configurato: [Si / No]
Modello scelto: [nome modello]
Accesso al modello confermato: [Si / No / Da verificare]
```

## Budget e limiti

```text
Numero run autorizzati: [numero]
Retry automatici: [No / Si, quanti]
Loop automatici: [No / Si, descrizione]
Tool esterni: [No / elenco]
Budget massimo: [valore]
Condizione di stop economica: [descrizione]
```

## Input e output

```text
Input path: [path]
Agent Card path: [path]
Prompt path: [path]
Template output path: [path]
Knowledge base path: [path]
Output path: [path]
Run record path: [path]
Output path libero: [Si / No]
Run record path libero: [Si / No]
```

## Review prevista

```text
Checklist review: [path]
Artefatto di confronto: [path]
Reviewer: [persona/agente]
Decisione dopo run: [Review / Rigenera / Blocca / Handoff]
```

## Decisione pre-flight

```text
Esito: [Pronto / Bloccato]
Motivo: [spiegazione]
Prossima azione: [execute / correggere ambiente / correggere configurazione / altro]
```

## Note

```text
[Eventuali osservazioni]
```
