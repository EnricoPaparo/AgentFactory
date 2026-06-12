# Requirement Analysis Document Template

Usare questo template per trasformare un brief grezzo in un documento requisiti chiaro, verificabile e pronto per gli agenti successivi.

## Metadati

```text
Progetto: [Nome progetto]
Versione documento: v0.1
Data: [YYYY-MM-DD]
Autore/Agente: Requirement Analyst Agent
Stato: [Bozza / Da validare / Validato / Da rivedere]
Fonte input: [Brief / email / meeting notes / issue / altro]
```

## Sintesi progetto

```text
[Descrivere in 3-6 righe cosa si vuole costruire o risolvere.]
```

## Obiettivo di business

```text
[Descrivere perche' il progetto esiste e quale risultato concreto deve abilitare.]
```

## Fatti certi

```text
- [Informazione dichiarata esplicitamente nell'input]
- [Informazione dichiarata esplicitamente nell'input]
```

## Ipotesi

```text
- [Deduzione ragionevole ma non confermata]
- [Deduzione ragionevole ma non confermata]
```

## Domande aperte

```text
- [Domanda che richiede chiarimento umano]
- [Domanda che richiede chiarimento umano]
```

## Attori e stakeholder

```text
- [Attore/stakeholder]: [ruolo, bisogno, responsabilita']
```

## Scope

```text
- [Cosa rientra nella fase corrente]
- [Cosa rientra nella fase corrente]
```

## Out of scope

```text
- [Cosa non rientra nella fase corrente]
- [Cosa non rientra nella fase corrente]
```

## Requisiti funzionali

```text
RF-001 - [Il sistema deve...]
Priorita': [Must / Should / Could]
Fase: [v0.1 / v0.2 / futuro]
Motivazione: [Perche' serve]
Criterio di accettazione: [Come verificare che sia soddisfatto, usando comportamento, output, viewport, screenshot, soglia o controllo esplicito quando possibile]

RF-002 - [Il sistema deve...]
Priorita': [Must / Should / Could]
Fase: [v0.1 / v0.2 / futuro]
Motivazione: [Perche' serve]
Criterio di accettazione: [Come verificare che sia soddisfatto, usando comportamento, output, viewport, screenshot, soglia o controllo esplicito quando possibile]
```

## Requisiti non funzionali

```text
RNF-001 - [Performance / sicurezza / usabilita' / tracciabilita' / accessibilita' / manutenibilita']
Priorita': [Must / Should / Could]
Fase: [v0.1 / v0.2 / futuro]
Motivazione: [Perche' serve]
Criterio di accettazione: [Come verificare che sia soddisfatto, usando comportamento, output, viewport, screenshot, soglia o controllo esplicito quando possibile]

RNF-002 - [Performance / sicurezza / usabilita' / tracciabilita' / accessibilita' / manutenibilita']
Priorita': [Must / Should / Could]
Fase: [v0.1 / v0.2 / futuro]
Motivazione: [Perche' serve]
Criterio di accettazione: [Come verificare che sia soddisfatto, usando comportamento, output, viewport, screenshot, soglia o controllo esplicito quando possibile]
```

## Vincoli

```text
- [Vincolo tecnico]
- [Vincolo economico]
- [Vincolo temporale]
- [Vincolo legale/compliance]
- [Vincolo organizzativo]
```

## Rischi

```text
- Rischio: [Descrizione]
  Impatto: [Basso / Medio / Alto]
  Probabilita': [Bassa / Media / Alta]
  Mitigazione: [Azione o controllo]
```

## Criteri di accettazione generali

```text
- [Condizione generale per considerare l'output/progetto accettabile]
- [Condizione generale per considerare l'output/progetto accettabile]
```

## Punti di validazione umana

```text
- Decisione: [Decisione o chiarimento che richiede approvazione umana]
  Tipo: [Bloccante / Rimandabile / Informativo]
  Motivo: [Perche' richiede validazione]

- Decisione: [Decisione o chiarimento che richiede approvazione umana]
  Tipo: [Bloccante / Rimandabile / Informativo]
  Motivo: [Perche' richiede validazione]
```

## Handoff per Architect Agent

```text
- [Informazione utile per progettare architettura]
- [Vincolo da rispettare]
- [Decisione ancora aperta]
```

## Handoff per Developer Agent

```text
- [Funzionalita' da implementare]
- [Vincolo pratico]
- [Output atteso]
```

## Handoff per Tester Agent

```text
- [Criterio da testare]
- [Scenario da verificare]
- [Rischio da coprire]
```

## Handoff per Reviewer Agent

```text
- [Aspetto da controllare]
- [Ambiguita' da verificare]
- [Rischio di qualita']
```

## Note candidate per Knowledge Compiler

```text
- [Lezione appresa potenzialmente riutilizzabile]
- [Regola o pattern da valutare]
- [Errore ricorrente da evitare]
```

## Stato finale dell'analisi

```text
[Pronto per validazione umana / Bloccato da domande aperte / Pronto per Architect Agent / Da rivedere]
```
