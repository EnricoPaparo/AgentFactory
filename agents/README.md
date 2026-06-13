# Agents

Questa cartella contiene le Agent Card e i manifest degli agenti progettati per AgentFactory.

## Regola fondamentale

Un agente non e' un singolo file.

In AgentFactory un agente e' un package fisico di file versionati:

```text
Agent package = identita' + istruzioni + output contract + runtime + stato + valutazione + memoria
```

La Agent Card e' il file piu' importante per definire l'identita' dell'agente, ma non basta da sola a descrivere tutto cio' che compone un agente reale.

## File che possono comporre un agente

| Tipo file | Dove vive | Obbligatorio? | Scopo |
|---|---|---:|---|
| Agent Card | `agents/<agent-name>.md` | Si | Identita', missione, responsabilita', limiti, tool, privilegi, qualita' |
| Package manifest | `agents/<agent-name>-package.md` | Si per agenti reali | Mappa fisica dei file dell'agente |
| Prompt operativo | `prompts/<agent-name>-prompt.md` | Si per agenti eseguibili | Istruzioni pronte per il modello/runtime |
| Output template | `templates/<output-template>.md` | Si se produce artefatti | Forma obbligatoria dell'output |
| Review checklist | `templates/<review-checklist>.md` | Si per output valutabili | Criteri per controllare l'output |
| Handoff contract | `templates/<handoff-template>.md` o `experiments/*handoff*.md` | Quando passa lavoro | Contratto di passaggio verso altri agenti |
| Runtime binding | `runtime/*.py` o altro runtime | Quando eseguibile | Codice che esegue l'agente o lo collega a un modello |
| Config esempio | `runtime/*.example.env` o manifest | Quando eseguibile | Configurazione senza segreti reali |
| Pre-flight | `experiments/*preflight*.md` | Prima di run reali | Controlli prima dell'esecuzione |
| Run plan | `experiments/*run-plan*.md` | Prima di run reali | Piano operativo del run |
| Run record | `experiments/*run-record*.md` | Dopo run reali | Traccia dell'esecuzione |
| Output prodotti | `experiments/*.md` o cartella dedicata | Dopo run | Artefatti generati dall'agente |
| Knowledge usata | `knowledge-base/*.md` | Se rilevante | Regole recuperabili dal Context Builder |
| Evals/test | `evals/` o `tests/` | Futuro | Misurazione sistematica della qualita' |

Non tutti questi file devono esistere dal primo giorno.

La regola e':

```text
piu' un agente diventa reale e potente,
piu' deve avere file espliciti per prompt, runtime, stato, review e governance.
```

## File attuali

- [Specifica completa di un Agent Package](agents/AGENT_PACKAGE_SPEC.md)
- [Requirement Analyst Agent](agents/requirement-analyst-agent.md)
- [Requirement Analyst Agent Package](agents/requirement-analyst-package.md)
- [Architect Agent](agents/architect-agent.md)
- [Developer Agent](agents/developer-agent.md)

## Regola operativa

Un agente non viene implementato finche' non ha una Agent Card chiara.

Un agente non viene eseguito davvero finche' non ha almeno:

- Agent Card;
- prompt operativo;
- input dichiarato;
- output template;
- output path;
- run record path;
- review prevista;
- regole di sicurezza e privilegi.
