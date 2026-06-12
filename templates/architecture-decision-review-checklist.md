# Architecture Decision Review Checklist

Usare questa checklist per valutare un Architecture Decision Record prodotto manualmente o da un Architect Agent.

## Metadati review

```text
Documento valutato: [Path ADR]
Handoff sorgente: [Path handoff]
Reviewer: [Nome / Agente / Persona]
Data: [YYYY-MM-DD]
Versione review: v0.1
Esito: [Passa / Passa con riserve / Da rivedere / Bloccato]
```

## Scala punteggio

```text
0 = assente o inutilizzabile
1 = presente ma debole
2 = buono ma migliorabile
3 = forte e operativo
```

## Checklist

| Area | Score | Domanda guida | Evidenza | Azione correttiva |
|---|---:|---|---|---|
| Struttura | [0-3] | L'ADR segue il template previsto? | [Evidenza] | [Azione] |
| Tracciabilita' | [0-3] | Si capiscono fonti, handoff e contesto? | [Evidenza] | [Azione] |
| Aderenza all'handoff | [0-3] | L'Architect ha rispettato mandato, scope e out of scope? | [Evidenza] | [Azione] |
| Decisione | [0-3] | La decisione e' esplicita e non ambigua? | [Evidenza] | [Azione] |
| Motivazione | [0-3] | La scelta e' motivata da requisiti e vincoli? | [Evidenza] | [Azione] |
| Alternative | [0-3] | Le alternative plausibili sono considerate e motivate? | [Evidenza] | [Azione] |
| Trade-off | [0-3] | Costi, benefici e compromessi sono dichiarati? | [Evidenza] | [Azione] |
| Rischi | [0-3] | I rischi architetturali sono concreti e mitigati? | [Evidenza] | [Azione] |
| Revisione futura | [0-3] | Sono indicate condizioni di revisione? | [Evidenza] | [Azione] |
| Azionabilita' | [0-3] | L'ADR abilita Developer, Tester e Reviewer? | [Evidenza] | [Azione] |

## Score finale

```text
Totale: [somma]/30
Percentuale: [percentuale]
Esito consigliato: [Passa / Passa con riserve / Da rivedere / Bloccato]
```

## Finding principali

```text
P0 - [Bloccante]
P1 - [Importante]
P2 - [Miglioramento utile]
P3 - [Nota futura]
```

## Azioni correttive

```text
- [Azione concreta]
- [Azione concreta]
- [Azione concreta]
```

## Knowledge candidate

```text
- [Regola, pattern o lezione appresa da proporre al Knowledge Compiler]
- [Regola, pattern o lezione appresa da proporre al Knowledge Compiler]
```

## Decisione

```text
[Decisione finale sulla possibilita' di usare l'ADR come input per gli agenti successivi]
```
