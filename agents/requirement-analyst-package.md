# Requirement Analyst Agent Package

Questo documento elenca fisicamente i file che compongono o supportano il Requirement Analyst Agent.

Serve a rispondere a una domanda precisa:

```text
preso questo agente, da quali file e' composto davvero?
```

## Identita' dell'agente

| File | Stato | Scopo |
|---|---|---|
| `agents/requirement-analyst-agent.md` | Attivo | Agent Card: identita', missione, responsabilita', limiti, tool, privilegi |
| `agents/requirement-analyst-package.md` | Attivo | Manifest fisico del package dell'agente |

## Prompt e istruzioni operative

| File | Stato | Scopo |
|---|---|---|
| `prompts/requirement-analyst-agent-prompt.md` | Attivo | Prompt operativo usato dal runtime per comporre la richiesta al modello |

## Output contract

| File | Stato | Scopo |
|---|---|---|
| `templates/requirement-analysis-output-template.md` | Attivo | Template obbligatorio del Requirement Analysis Document |
| `templates/requirement-analysis-review-checklist.md` | Attivo | Checklist di review dell'output prodotto |

## Runtime

| File | Stato | Scopo |
|---|---|---|
| `runtime/run_requirement_analyst.py` | Attivo | Runtime Python minimo per dry-run ed execute |
| `runtime/README.md` | Attivo | Istruzioni operative per usare il runtime |
| `runtime/requirements.txt` | Attivo | Dipendenze Python necessarie |
| `runtime/config.example.env` | Attivo | Esempio di configurazione senza segreti reali |

## Input, piani e pre-flight

| File | Stato | Scopo |
|---|---|---|
| `experiments/001-agentfactory-static-site-requirements-input.md` | Attivo | Brief input versionato per il primo run reale |
| `experiments/001-requirement-analyst-real-agent-run-plan.md` | Attivo | Piano del primo run reale |
| `experiments/002-requirement-analyst-real-agent-preflight.md` | Attivo | Checklist pre-flight prima del primo execute |

## Output e run record

| File | Stato | Scopo |
|---|---|---|
| `experiments/001-agentfactory-static-site-requirements.md` | Manuale / riferimento | Primo Requirement Analysis Document compilato manualmente |
| `experiments/001-agentfactory-static-site-requirements-review.md` | Manuale / riferimento | Review manuale del primo output |
| `experiments/002-agentfactory-static-site-requirements-ai.md` | Futuro | Output AI previsto dal primo run reale |
| `experiments/002-agentfactory-static-site-requirement-analyst-run-record.md` | Futuro | Run record previsto dal primo run reale |

## Knowledge e regole recuperabili

| File | Stato | Scopo |
|---|---|---|
| `knowledge-base/requirement-analysis-rules.md` | Attivo | Regole validate che migliorano le analisi requisiti future |
| `experiments/001-agentfactory-static-site-knowledge-absorption.md` | Attivo | Prima knowledge absorption candidate collegata al Requirement Analyst Agent |

## Governance collegata

| File | Stato | Scopo |
|---|---|---|
| `governance/real-agent-execution-rules.md` | Attivo | Regole minime per esecuzione reale, API key, budget, output e human gate |
| `templates/real-agent-run-record-template.md` | Attivo | Template generale per tracciare run reali |
| `templates/real-agent-preflight-checklist-template.md` | Attivo | Template generale per controlli pre-flight |

## File futuri probabili

Questi file non esistono ancora, ma diventeranno utili quando l'agente crescera':

| File/cartella | Scopo |
|---|---|
| `evals/requirement-analyst/` | Valutazioni ripetibili sulla qualita' dell'agente |
| `tests/requirement-analyst/` | Test automatici su formato e output |
| `state/requirement-analyst/` | Stato operativo se introdurremo uno State Store |
| `archive/agents/requirement-analyst/` | Versioni vecchie di card, prompt o template |

## Regola di manutenzione

Questo package manifest deve essere aggiornato quando:

- nasce un nuovo prompt operativo;
- cambia il runtime;
- cambia il template di output;
- nasce una checklist di review specifica;
- viene creato un nuovo run record;
- una regola viene spostata in knowledge base;
- un file viene deprecato o archiviato.

Il manifest non deve contenere tutto il contenuto degli altri file.

Deve contenere la mappa.
