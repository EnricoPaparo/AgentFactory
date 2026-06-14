# Runtime AgentFactory

Questa cartella contiene i primi script operativi della factory.

Per ora esiste un solo runtime:

```text
runtime/run_requirement_analyst.py
```

## Scopo

Il runtime esegue il Requirement Analyst Agent in modo controllato.

Legge:

- brief input;
- Agent Card;
- prompt operativo;
- template output;
- knowledge base.

Poi compone il prompt finale.

In modalita' dry-run non chiama nessuna API.

In modalita' execute chiama il modello e salva:

- output Markdown;
- run record.

## Dry-run

```powershell
python runtime\run_requirement_analyst.py
```

Questo comando non spende nulla e non chiama servizi esterni.

Se `python` non e' riconosciuto su Windows, controllare:

```powershell
python --version
py --version
```

Se entrambi falliscono, installare Python e riaprire il terminale.

## Setup execute

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r runtime\requirements.txt
$env:OPENAI_API_KEY = "[valore segreto reale]"
$env:OPENAI_MODEL = "gpt-5.5"
```

## Execute

```powershell
python runtime\run_requirement_analyst.py --execute
```

## Output e run record

Il runtime usa nomi generici di default:

```text
experiments/002-requirement-analysis-ai-output.md
experiments/002-requirement-analyst-run-record.md
```

Sono generici perche' il Requirement Analyst Agent puo' ricevere brief diversi.

Quando serve distinguere un progetto specifico, passare path espliciti:

```powershell
python runtime\run_requirement_analyst.py --output experiments/003-nome-progetto-requirement-analysis-ai.md --run-record experiments/003-nome-progetto-requirement-analyst-run-record.md
```

## Regole

- Non salvare mai API key nel repository.
- Eseguire sempre prima dry-run.
- Non usare `--force` se non si vuole sovrascrivere intenzionalmente output esistenti.
- Dopo l'output, usare la review checklist prima di procedere.
