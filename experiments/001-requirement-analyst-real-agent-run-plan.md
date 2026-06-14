# 001 - Requirement Analyst Real Agent Run Plan

## Stato

```text
Pianificato
```

Questo documento prepara il primo run reale del Requirement Analyst Agent.

Non e' ancora un output generato dal modello.

## Obiettivo

Eseguire il Requirement Analyst Agent su un brief gia' noto per produrre un Requirement Analysis Document generato via API e confrontarlo con l'artefatto manuale esistente.

## Agente

```text
Agent Card: agents/requirement-analyst-agent.md
Prompt operativo: prompts/requirement-analyst-agent-prompt.md
Template output: templates/requirement-analysis-output-template.md
Knowledge base: knowledge-base/requirement-analysis-rules.md
```

## Modello

```text
OPENAI_MODEL da configurare prima dell'esecuzione
```

Il modello non viene fissato dentro il piano per evitare che il repository diventi rapidamente obsoleto.

Prima del run si dovra' scegliere un modello avanzato adatto ad analisi, scrittura strutturata e rispetto del template.

## Sicurezza

```text
OPENAI_API_KEY: solo variabile ambiente
API key nel repository: vietato
Numero run autorizzati: 1
Retry automatici: 0
Loop automatici: vietati
Tool esterni: vietati
Scrittura consentita: solo output e run record previsti
```

## Input previsto

Per il primo confronto usero' il caso AgentFactory Static Site.

Artefatti di confronto:

```text
experiments/001-agentfactory-static-site-requirements.md
experiments/001-agentfactory-static-site-requirements-review.md
```

Brief da fornire al runtime:

```text
Creare un sito web statico, moderno, dark mode, con palette coerente con il logo AgentFactory, che renda consultabile il manuale e i materiali del repository. Il sito deve essere semplice, pubblicabile su GitHub Pages, adatto alla consultazione personale e alla proiezione didattica. Deve includere lezioni, materiali vivi, navigazione laterale ordinata, layout responsive e attribuzione elegante a Enrico Paparo.
```

## Output previsti

```text
Requirement Analysis Document AI:
experiments/002-requirement-analysis-ai-output.md

Run record:
experiments/002-requirement-analyst-run-record.md
```

## Verifica prevista

Dopo il run devo usare:

```text
templates/requirement-analysis-review-checklist.md
```

Controlli minimi:

- il documento rispetta il template;
- distingue fatti, ipotesi e domande aperte;
- non inventa vincoli non presenti;
- produce requisiti verificabili;
- prepara handoff utili;
- dichiara punti di validazione umana;
- e' confrontabile con l'output manuale.

## Stop condition

Il run non deve partire se:

- `OPENAI_API_KEY` non e' presente come variabile ambiente;
- `OPENAI_MODEL` non e' stato scelto;
- il prompt operativo non e' stato approvato;
- il budget massimo non e' stato deciso;
- il path di output non e' chiaro;
- il runtime non prevede salvataggio del run record.

## Decisione dopo il run

Dopo la prima esecuzione ci saranno quattro possibilita':

```text
1. Output buono: procedere a review e knowledge absorption.
2. Output utile ma incompleto: migliorare prompt o template.
3. Output fuori formato: correggere prompt operativo e ripetere solo dopo human gate.
4. Output debole: analizzare se il problema e' input, prompt, modello o template.
```

## Handoff futuro

Se il run funziona, il prossimo passaggio sara':

```text
Reviewer Agent o review manuale
```

Se la review e' positiva, il documento potra' alimentare:

```text
Architect Agent
```

Se emergono pattern utili, il Knowledge Compiler dovra' creare una candidate per la knowledge base.
