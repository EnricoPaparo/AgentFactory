# Knowledge Absorption - AgentFactory Static Site Requirements Review

## Fonte

```text
Tipo: Review
Review: experiments/001-agentfactory-static-site-requirements-review.md
Documento valutato: experiments/001-agentfactory-static-site-requirements.md
Data: 2026-06-12
Compilatore: Knowledge Compiler simulato manualmente
Stato: Assorbimento parziale approvato
```

## Cosa e' successo

```text
La prima review manuale del Requirement Analysis Document ha dato esito "Passa con riserve" con score 25/30.

Il documento e' utilizzabile dagli agenti successivi, ma la review ha individuato miglioramenti strutturali utili per output futuri:
- priorita' e fase dei requisiti;
- criteri qualitativi piu' osservabili;
- human gate classificati;
- possibile sintesi decisionale finale.
```

## Cosa abbiamo imparato

```text
- Un documento requisiti senza priorita' e fase e' meno utile per orchestrare sviluppo, test e review.
- Un criterio qualitativo deve essere tradotto in segnali osservabili quando possibile.
- Un human gate deve indicare se blocca il workflow o se puo' essere rimandato.
- Non ogni miglioramento utile deve diventare subito obbligatorio.
```

## Evidenza

```text
- Review score Completezza: 2/3, azione: aggiungere priorita' o fase ai requisiti principali.
- Review score Verificabilita': 2/3, azione: rendere piu' misurabili criteri su leggibilita' e design.
- Review score Human gate: 2/3, azione: distinguere decisioni bloccanti da decisioni rimandabili.
- Finding P3: sintesi finale utile, ma non bloccante.
```

## Ambito di validita'

```text
Questa conoscenza vale per artefatti di analisi requisiti destinati a pipeline multi-agent, soprattutto quando l'output deve essere usato da Architect Agent, Developer Agent, Tester Agent, Reviewer Agent o Supervisor Agent.

Potrebbe essere eccessiva per note informali, bozze rapide o micro-task non destinati a una pipeline.
```

## Rischio di applicazione sbagliata

```text
- Rendere ogni requisito troppo burocratico anche quando il progetto e' piccolo.
- Usare priorita' e fase come etichette finte senza decisioni reali.
- Trasformare ogni richiesta qualitativa in metrica rigida anche quando basta una verifica visiva.
- Bloccare la pipeline con troppi human gate classificati come bloccanti.
```

## Cosa diventa permanente

```text
- I requisiti rilevanti devono indicare priorita' e fase.
- I criteri qualitativi devono essere tradotti in segnali osservabili quando possibile.
- I punti di validazione umana devono indicare se sono bloccanti, rimandabili o informativi.
```

## Cosa non va salvato

```text
- Non salvare "usare sempre GitHub Pages" come regola permanente.
- Non rendere obbligatoria subito una sintesi decisionale finale per ogni Requirement Analysis Document.
- Non trattare la palette o dettagli visuali specifici del sito AgentFactory come regole generali.
```

## File da aggiornare

```text
- templates/requirement-analysis-output-template.md
- knowledge-base/requirement-analysis-rules.md
- ROADMAP.md
- MANUAL.md
- tools/build-site.js
```

## Decisione

```text
Assorbire parzialmente.

Assorbire subito:
- priorita' e fase nei requisiti;
- criteri qualitativi osservabili;
- classificazione dei human gate.

Rimandare:
- sintesi decisionale finale obbligatoria.
```
