from __future__ import annotations

import argparse
import os
import sys
from datetime import datetime
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]

DEFAULTS = {
    "input": "experiments/001-agentfactory-static-site-requirements-input.md",
    "agent_card": "agents/requirement-analyst-agent.md",
    "prompt": "prompts/requirement-analyst-agent-prompt.md",
    "template": "templates/requirement-analysis-output-template.md",
    "knowledge_base": "knowledge-base/requirement-analysis-rules.md",
    "output": "experiments/002-requirement-analysis-ai-output.md",
    "run_record": "experiments/002-requirement-analyst-run-record.md",
}

REPLACEMENTS = {
    "[INSERIRE QUI IL BRIEF]": "brief",
    "[INSERIRE QUI IL CONTENUTO DI agents/requirement-analyst-agent.md]": "agent_card",
    "[INSERIRE QUI IL CONTENUTO DI templates/requirement-analysis-output-template.md]": "template",
    "[INSERIRE QUI SOLO LE REGOLE RILEVANTI, SE PRESENTI]": "knowledge_base",
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Run the first real Requirement Analyst Agent in a controlled way."
    )
    parser.add_argument("--execute", action="store_true", help="Call the model and write the output.")
    parser.add_argument("--force", action="store_true", help="Allow overwriting output files.")
    parser.add_argument("--model", default=os.environ.get("OPENAI_MODEL"), help="OpenAI model to use.")
    parser.add_argument("--input", default=DEFAULTS["input"], help="Brief/input Markdown path.")
    parser.add_argument("--agent-card", default=DEFAULTS["agent_card"], help="Agent Card path.")
    parser.add_argument("--prompt", default=DEFAULTS["prompt"], help="Prompt template path.")
    parser.add_argument("--template", default=DEFAULTS["template"], help="Output template path.")
    parser.add_argument("--knowledge-base", default=DEFAULTS["knowledge_base"], help="Knowledge base path.")
    parser.add_argument("--output", default=DEFAULTS["output"], help="Output Markdown path.")
    parser.add_argument("--run-record", default=DEFAULTS["run_record"], help="Run record Markdown path.")
    return parser.parse_args()


def workspace_path(value: str) -> Path:
    path = Path(value)
    if not path.is_absolute():
        path = ROOT / path

    resolved = path.resolve()
    try:
        resolved.relative_to(ROOT)
    except ValueError as exc:
        raise SystemExit(f"Refusing path outside workspace: {resolved}") from exc
    return resolved


def read_text(path: Path) -> str:
    if not path.exists():
        raise SystemExit(f"Missing required file: {path.relative_to(ROOT)}")
    return path.read_text(encoding="utf-8")


def rel(path: Path) -> str:
    return str(path.relative_to(ROOT)).replace("\\", "/")


def compose_prompt(args: argparse.Namespace) -> tuple[str, dict[str, Path]]:
    paths = {
        "input": workspace_path(args.input),
        "agent_card": workspace_path(args.agent_card),
        "prompt": workspace_path(args.prompt),
        "template": workspace_path(args.template),
        "knowledge_base": workspace_path(args.knowledge_base),
        "output": workspace_path(args.output),
        "run_record": workspace_path(args.run_record),
    }

    values = {
        "brief": read_text(paths["input"]),
        "agent_card": read_text(paths["agent_card"]),
        "template": read_text(paths["template"]),
        "knowledge_base": read_text(paths["knowledge_base"]),
    }

    prompt = read_text(paths["prompt"])
    for placeholder, key in REPLACEMENTS.items():
        prompt = prompt.replace(placeholder, values[key])

    return prompt, paths


def refuse_overwrite(paths: dict[str, Path], force: bool) -> None:
    if force:
        return

    existing = [path for key, path in paths.items() if key in {"output", "run_record"} and path.exists()]
    if existing:
        formatted = ", ".join(rel(path) for path in existing)
        raise SystemExit(f"Refusing to overwrite existing file(s): {formatted}. Use --force if intentional.")


def output_text_from_response(response: Any) -> str:
    text = getattr(response, "output_text", None)
    if text:
        return text
    raise RuntimeError("The API response did not expose output_text.")


def usage_line(response: Any) -> str:
    usage = getattr(response, "usage", None)
    if usage is None:
        return "Token input/output: non disponibili"

    input_tokens = getattr(usage, "input_tokens", "non disponibile")
    output_tokens = getattr(usage, "output_tokens", "non disponibile")
    total_tokens = getattr(usage, "total_tokens", "non disponibile")
    return f"Token input/output/totali: {input_tokens} / {output_tokens} / {total_tokens}"


def build_run_record(
    args: argparse.Namespace,
    paths: dict[str, Path],
    status: str,
    prompt_size: int,
    response: Any | None = None,
    error: str | None = None,
) -> str:
    now = datetime.now().astimezone()
    api_key_present = "Si" if os.environ.get("OPENAI_API_KEY") else "No"
    model = args.model or "[non configurato]"
    error_text = error or "Nessuno"
    usage = usage_line(response) if response is not None else "Token input/output: non disponibili"

    return f"""# Requirement Analyst Agent Run Record

## Metadati run

```text
Run ID: {now.strftime("%Y%m%d-requirement-analyst-001")}
Data: {now.strftime("%Y-%m-%d")}
Ora: {now.strftime("%H:%M %Z")}
Agente eseguito: Requirement Analyst Agent
Agent Card: {rel(paths["agent_card"])}
Prompt operativo: {rel(paths["prompt"])}
Modello: {model}
Runtime: {rel(Path(__file__).resolve())}
Stato: {status}
```

## Sicurezza e configurazione

```text
OPENAI_API_KEY presente come variabile ambiente: {api_key_present}
OPENAI_API_KEY salvata nel repo: No
OPENAI_MODEL configurato: {"Si" if args.model else "No"}
Retry automatici autorizzati: No
Loop automatici autorizzati: No
Tool esterni autorizzati: No
```

## Input usati

```text
Brief/input: {rel(paths["input"])}
Template output: {rel(paths["template"])}
Knowledge base usata: {rel(paths["knowledge_base"])}
Prompt finale caratteri: {prompt_size}
```

## Output prodotti

```text
Output principale: {rel(paths["output"])}
Run record: {rel(paths["run_record"])}
```

## Esito tecnico

```text
Chiamata API eseguita: {"Si" if status != "Fallito prima della chiamata API" else "No"}
Errore runtime: {error_text}
Output salvato correttamente: {"Si" if status == "Da validare" else "No"}
{usage}
```

## Handoff successivo

```text
Prossimo ruolo: Reviewer Agent o review manuale
Input da passare: {rel(paths["output"])}
Condizioni prima di procedere: usare templates/requirement-analysis-review-checklist.md
```
"""


def execute(args: argparse.Namespace, prompt: str, paths: dict[str, Path]) -> None:
    if not os.environ.get("OPENAI_API_KEY"):
        raise SystemExit("OPENAI_API_KEY is missing. Set it as an environment variable before --execute.")
    if not args.model:
        raise SystemExit("OPENAI_MODEL or --model is missing. Choose the model before --execute.")

    refuse_overwrite(paths, args.force)

    try:
        from openai import OpenAI
    except ImportError as exc:
        raise SystemExit("Missing dependency: install with `pip install -r runtime/requirements.txt`.") from exc

    client = OpenAI()
    response = client.responses.create(model=args.model, input=prompt)
    output_text = output_text_from_response(response)

    paths["output"].parent.mkdir(parents=True, exist_ok=True)
    paths["run_record"].parent.mkdir(parents=True, exist_ok=True)
    paths["output"].write_text(output_text, encoding="utf-8")
    paths["run_record"].write_text(
        build_run_record(args, paths, "Da validare", len(prompt), response=response),
        encoding="utf-8",
    )
    print(f"Wrote output: {rel(paths['output'])}")
    print(f"Wrote run record: {rel(paths['run_record'])}")


def dry_run(args: argparse.Namespace, prompt: str, paths: dict[str, Path]) -> None:
    print("DRY RUN: no API call performed.")
    print(f"Model: {args.model or '[not configured]'}")
    print(f"Input: {rel(paths['input'])}")
    print(f"Agent Card: {rel(paths['agent_card'])}")
    print(f"Prompt: {rel(paths['prompt'])}")
    print(f"Template: {rel(paths['template'])}")
    print(f"Knowledge Base: {rel(paths['knowledge_base'])}")
    print(f"Output target: {rel(paths['output'])}")
    print(f"Run record target: {rel(paths['run_record'])}")
    print(f"Prompt characters: {len(prompt)}")
    print("Use --execute only after API key, model and budget are approved.")


def main() -> int:
    args = parse_args()
    prompt, paths = compose_prompt(args)

    if args.execute:
        execute(args, prompt, paths)
    else:
        dry_run(args, prompt, paths)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
