# 002 - Requirement Analyst Real Agent Pre-flight

## Metadati

```text
Pre-flight ID: 20260613-requirement-analyst-static-site
Data: 2026-06-13
Agente: Requirement Analyst Agent
Runtime: runtime/run_requirement_analyst.py
Supervisore umano: Enrico Paparo
Stato: Da completare
```

## Ambiente

```text
Python disponibile: Da verificare sul terminale dell'utente
Comando Python usato: Da scegliere tra python / py
Ambiente virtuale attivo: Da creare
Dipendenze installate: Da verificare
Pacchetto openai importabile: Da verificare
```

Note:

```text
Nel controllo precedente della lezione 17, la shell locale non riconosceva `python`.
Prima del primo execute bisogna installare Python o usare il launcher `py` se disponibile.
```

## Configurazione API

```text
OPENAI_API_KEY presente: Da verificare senza stamparla
OPENAI_API_KEY stampata o salvata nel repo: No
OPENAI_MODEL configurato: Da configurare
Modello scelto: Da confermare prima del run
Accesso al modello confermato: Da verificare
```

## Budget e limiti

```text
Numero run autorizzati: 1
Retry automatici: No
Loop automatici: No
Tool esterni: No
Budget massimo: Da confermare prima del run
Condizione di stop economica: nessun secondo run senza review del primo output
```

## Input e output

```text
Input path: experiments/001-agentfactory-static-site-requirements-input.md
Agent Card path: agents/requirement-analyst-agent.md
Prompt path: prompts/requirement-analyst-agent-prompt.md
Template output path: templates/requirement-analysis-output-template.md
Knowledge base path: knowledge-base/requirement-analysis-rules.md
Output path: experiments/002-agentfactory-static-site-requirements-ai.md
Run record path: experiments/002-agentfactory-static-site-requirement-analyst-run-record.md
Output path libero: Da verificare prima del run
Run record path libero: Da verificare prima del run
```

## Review prevista

```text
Checklist review: templates/requirement-analysis-review-checklist.md
Artefatto di confronto: experiments/001-agentfactory-static-site-requirements.md
Reviewer: review manuale guidata
Decisione dopo run: Review obbligatoria prima di qualsiasi rigenerazione
```

## Comandi previsti

Controllo Python:

```powershell
python --version
py --version
```

Creazione ambiente:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r runtime\requirements.txt
```

Controllo API key senza stamparla:

```powershell
if ($env:OPENAI_API_KEY) { "OPENAI_API_KEY presente" } else { "OPENAI_API_KEY mancante" }
```

Configurazione modello:

```powershell
$env:OPENAI_MODEL = "[modello scelto]"
```

Dry-run finale:

```powershell
python runtime\run_requirement_analyst.py
```

Execute singolo:

```powershell
python runtime\run_requirement_analyst.py --execute
```

## Decisione pre-flight

```text
Esito: Bloccato fino a completamento ambiente/API/budget
Motivo: non sono ancora confermati Python installato, dipendenza openai, API key, modello e budget
Prossima azione: completare checklist e poi autorizzare un solo execute
```

## Note

```text
Non usare --force nel primo run reale.
Non rigenerare subito se l'output non convince.
Prima review, poi miglioramento.
```
