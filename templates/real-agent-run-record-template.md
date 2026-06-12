# Real Agent Run Record Template

Usare questo template per tracciare ogni esecuzione reale di un agente.

## Metadati run

```text
Run ID: [YYYYMMDD-agent-name-progressivo]
Data: [YYYY-MM-DD]
Ora: [HH:MM timezone]
Autore supervisione: [Nome]
Agente eseguito: [Nome agente]
Agent Card: [path]
Prompt operativo: [path + versione/commit se disponibile]
Modello: [nome modello configurato]
Runtime: [script / SDK / piattaforma]
Stato: [Pianificato / Eseguito / Fallito / Da validare / Validato / Da rivedere]
```

## Sicurezza e configurazione

```text
OPENAI_API_KEY presente come variabile ambiente: [Si / No]
OPENAI_API_KEY salvata nel repo: No
OPENAI_MODEL configurato: [Si / No]
Budget massimo autorizzato: [importo o limite run/token]
Retry automatici autorizzati: [No / Si, quanti]
Loop automatici autorizzati: [No / Si, descrizione]
Tool esterni autorizzati: [No / elenco]
Scrittura file autorizzata: [path consentiti]
```

## Input usati

```text
Brief/input: [path]
Template output: [path]
Knowledge base usata: [path o "nessuna"]
Artefatti precedenti usati: [path]
```

## Output prodotti

```text
Output principale: [path]
Log o note runtime: [path o "nessuno"]
Review prevista: [path/template]
Knowledge candidate prevista: [path/template o "da valutare"]
```

## Esito tecnico

```text
Chiamata API eseguita: [Si / No]
Errore runtime: [Nessuno / descrizione]
Output salvato correttamente: [Si / No]
Formato Markdown valido: [Si / No]
Template rispettato a prima vista: [Si / No / Da verificare]
Costo effettivo: [se disponibile]
Token input/output: [se disponibili]
```

## Valutazione iniziale

```text
Punti forti:
- [Osservazione]

Problemi:
- [Osservazione]

Domande aperte:
- [Domanda]

Decisione:
[Accettare / Revisionare / Rigenerare con prompt aggiornato / Bloccare]
```

## Conoscenza candidata

```text
Lezioni apprese:
- [Lezione]

Regole candidate:
- [Regola]

Prompt da migliorare:
- [Modifica candidata]

Template da migliorare:
- [Modifica candidata]
```

## Handoff successivo

```text
Prossimo agente/ruolo: [Reviewer Agent / Knowledge Compiler / Architect Agent / altro]
Motivo: [Perche' serve]
Input da passare: [path]
Condizioni prima di procedere: [condizioni]
```
