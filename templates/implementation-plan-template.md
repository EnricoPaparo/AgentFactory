# Implementation Plan Template

Usare questo template prima che un Developer Agent modifichi file o codice.

L'obiettivo e' trasformare requisiti, ADR e handoff in passi tecnici controllabili.

## Metadati

```text
Progetto: [Nome progetto]
Implementation Plan: [Codice o numero]
Versione: v0.1
Data: [YYYY-MM-DD]
Autore/Agente: Developer Agent
Stato: [Bozza / Da validare / Approvato / Bloccato / Completato]
```

## Artefatti sorgente

```text
- [Developer Handoff]
- [ADR]
- [Review ADR]
- [Altri documenti rilevanti]
```

## Obiettivo del task

```text
[Descrivere cosa deve essere implementato o preparato.]
```

## Scope implementativo

```text
- [Cosa rientra]
- [Cosa rientra]
```

## Out of scope

```text
- [Cosa non deve essere toccato]
- [Cosa non deve essere toccato]
```

## File autorizzati in lettura

```text
- [Path]
- [Path]
```

## File autorizzati in scrittura

```text
- [Path]
- [Path]
```

## File o aree vietate

```text
- [Path o area]
- [Path o area]
```

## Piano step-by-step

```text
1. [Azione]
2. [Azione]
3. [Azione]
```

## Comandi consentiti

```text
- [Comando]
- [Comando]
```

## Comandi vietati senza human gate

```text
- installazione dipendenze;
- deploy;
- cancellazione file/cartelle;
- reset/revert distruttivi;
- accesso a servizi esterni;
- modifica credenziali o configurazioni sensibili.
```

## Verifiche previste

```text
- [Verifica]
- [Verifica]
```

## Rischi

```text
- Rischio: [Descrizione]
  Impatto: [Basso / Medio / Alto]
  Mitigazione: [Azione]
```

## Condizioni di stop

```text
- [Quando fermarsi]
- [Quando chiedere conferma]
```

## Output atteso

```text
- [File/modifica/report atteso]
- [File/modifica/report atteso]
```

## Handoff successivo

```text
Prossimo agente: [Tester Agent / Reviewer Agent / altro]
Output da passare: [Cosa passare]
Verifiche gia' eseguite: [Elenco]
Rischi residui: [Elenco]
```

## Note candidate per Knowledge Compiler

```text
- [Lezione appresa]
- [Regola da valutare]
```
