# Requirement Analysis Rules

Queste regole sono conoscenza validata per migliorare i futuri Requirement Analysis Document.

Fonte iniziale:

```text
experiments/001-agentfactory-static-site-knowledge-absorption.md
```

## Regola 1 - Priorita' e fase

Ogni requisito rilevante deve indicare:

- priorita';
- fase.

Formato consigliato:

```text
Priorita': [Must / Should / Could]
Fase: [v0.1 / v0.2 / futuro]
```

Perche' serve:

- aiuta il Developer Agent a capire cosa implementare prima;
- aiuta il Tester Agent a capire cosa verificare subito;
- aiuta il Reviewer Agent a valutare scope e completezza;
- aiuta il Supervisor Agent a orchestrare il lavoro.

## Regola 2 - Criteri qualitativi osservabili

Le richieste qualitative devono essere tradotte in segnali osservabili quando possibile.

Esempi di segnali osservabili:

- viewport;
- screenshot atteso;
- contrasto;
- assenza di sovrapposizioni;
- comportamento verificabile;
- soglia misurabile;
- output atteso.

Esempio:

```text
Debole:
Il sito deve essere bello.

Migliore:
Il sito deve mantenere layout leggibile a 1440px e 390px, senza testo tagliato o sovrapposizioni.
```

## Regola 3 - Human gate classificati

Ogni punto di validazione umana deve indicare il tipo di gate:

```text
Tipo: [Bloccante / Rimandabile / Informativo]
```

Perche' serve:

- evita blocchi inutili;
- chiarisce quando la pipeline deve fermarsi;
- separa decisioni operative da note informative;
- aiuta la governance.

## Regola 4 - Non trasformare ogni miglioramento in obbligo

Una review puo' proporre miglioramenti utili che non devono diventare subito obbligatori.

Decisioni possibili:

```text
Assorbire
Non assorbire
Rimandare
```

Esempio:

```text
La sintesi decisionale finale e' utile, ma resta rimandata finche' non emerge come bisogno ricorrente.
```
