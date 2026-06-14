# Agent Handoff Contract Template

Usare questo template quando un agente deve passare lavoro strutturato a un altro agente.

L'obiettivo e' evitare perdita di contesto, ambiguita' di responsabilita' e trasferimento non controllato di privilegi.

Nota importante:

```text
Questo template descrive un input operativo per il prossimo agente.
Non e' il documento decisionale prodotto dal prossimo agente.
```

Esempio:

```text
Architect Handoff = mandato dato all'Architect Agent.
Architecture Decision Record = decisione prodotta dall'Architect Agent dopo aver lavorato.
```

## Metadati

```text
Progetto: [Nome progetto]
Versione handoff: v0.1
Data: [YYYY-MM-DD]
Stato: [Bozza / Validabile / Validato / Bloccato]
```

## Mittente

```text
Agente mittente: [Nome agente]
Responsabilita' del mittente: [Cosa aveva il compito di produrre]
Artefatto prodotto dal mittente: [File o output principale]
```

## Ricevente

```text
Agente ricevente: [Nome agente]
Responsabilita' del ricevente: [Cosa deve fare ora]
Output atteso dal ricevente: [Artefatto da produrre]
```

## Artefatti sorgente

```text
- [File o documento da leggere]
- [File o documento da leggere]
```

Uso previsto:

```text
L'Handoff Contract e' il contesto operativo primario del ricevente.
Gli artefatti sorgente restano disponibili per verifica o approfondimento,
ma non devono essere caricati tutti nel contesto attivo se l'handoff e' sufficiente.
```

## Obiettivo del passaggio

```text
[Descrivere perche' questo handoff esiste e quale lavoro deve abilitare.]
```

## Contesto essenziale

```text
- [Informazione essenziale che il ricevente deve conoscere]
- [Informazione essenziale che il ricevente deve conoscere]
```

## Fatti certi

```text
- [Fatto dichiarato o validato]
- [Fatto dichiarato o validato]
```

## Ipotesi

```text
- [Ipotesi utile ma non confermata]
- [Ipotesi utile ma non confermata]
```

## Domande aperte

```text
- Domanda: [Domanda aperta]
  Tipo: [Bloccante / Rimandabile / Informativa]
  Impatto sul ricevente: [Come influenza il lavoro]
```

## Scope del ricevente

```text
- [Cosa il ricevente deve considerare]
- [Cosa il ricevente deve considerare]
```

## Out of scope del ricevente

```text
- [Cosa il ricevente non deve fare]
- [Cosa il ricevente non deve fare]
```

## Vincoli

```text
- [Vincolo tecnico, economico, organizzativo o temporale]
- [Vincolo tecnico, economico, organizzativo o temporale]
```

## Priorita'

```text
Must:
- [Elemento essenziale]

Should:
- [Elemento importante ma non bloccante]

Could:
- [Elemento utile ma rimandabile]
```

## Rischi da considerare

```text
- Rischio: [Descrizione]
  Impatto: [Basso / Medio / Alto]
  Mitigazione attesa: [Cosa deve considerare il ricevente]
```

## Privilegi consentiti

```text
Lettura: [File/cartelle/fonti]
Scrittura: [File/cartelle/output consentiti]
Esecuzione comandi: [Si/No + limiti]
Accesso esterno: [Si/No + limiti]
Modifica knowledge base: [Si/No + limiti]
```

## Privilegi vietati

```text
- [Azione vietata]
- [Azione vietata]
```

## Condizioni di stop

```text
- [Quando il ricevente deve fermarsi]
- [Quando il ricevente deve chiedere conferma]
```

## Output atteso

```text
Formato: [Markdown / JSON / codice / altro]
Percorso output: [Path previsto]
Sezioni obbligatorie:
- [Sezione]
- [Sezione]
```

## Criteri di accettazione dell'output

```text
- [Come verificare che l'output del ricevente sia buono]
- [Come verificare che l'output del ricevente sia buono]
```

## Handoff successivo previsto

```text
Prossimo agente: [Nome agente]
Output da passare: [Artefatto]
Condizioni per procedere: [Quando il passaggio e' consentito]
```

## Note candidate per Knowledge Compiler

```text
- [Lezione appresa potenzialmente riutilizzabile]
- [Problema emerso nel passaggio]
- [Regola da valutare per la knowledge base]
```
