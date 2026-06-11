# Process Classification Template

Usare questo template prima di decidere se un task deve essere gestito come automazione, workflow, AI Agent, agentic workflow, pipeline multi-agent o Agent Factory.

## 1. Descrizione del task

```text
[Descrivere il task in linguaggio naturale]
```

## 2. Input disponibili

Elencare gli input reali.

- Brief
- Documento
- Email
- Repository
- Issue
- Ticket
- File
- Evento temporale
- Output di un altro agente
- Altro

## 3. Natura dell'input

- [ ] Completamente strutturato
- [ ] Semi-strutturato
- [ ] Non strutturato
- [ ] Ambiguo
- [ ] Variabile
- [ ] Sensibile o rischioso

Note:

```text
[Spiegare]
```

## 4. Ripetitività del task

- [ ] Sempre uguale
- [ ] Spesso simile
- [ ] Variabile
- [ ] Molto variabile

Note:

```text
[Spiegare]
```

## 5. Regole note

Le regole sono completamente definibili in modo deterministico?

- [ ] Sì
- [ ] No
- [ ] Solo in parte

Regole note:

```text
[Elenco regole]
```

Regole mancanti o ambigue:

```text
[Elenco ambiguità]
```

## 6. Serve interpretazione?

- [ ] No, basta applicare regole
- [ ] Sì, serve interpretare linguaggio naturale
- [ ] Sì, serve distinguere fatti, ipotesi e domande
- [ ] Sì, serve valutare qualità, rischio o priorità
- [ ] Sì, serve produrre un artefatto ragionato

Motivazione:

```text
[Spiegare perché serve o non serve AI]
```

## 7. Step del processo

Elencare gli step necessari.

```text
1. [Step]
2. [Step]
3. [Step]
```

## 8. Stati e approvazioni

Il task richiede stati intermedi?

- [ ] No
- [ ] Sì

Stati:

```text
[Elenco stati]
```

Il task richiede approvazioni?

- [ ] No
- [ ] Sì

Approvazioni richieste:

```text
[Elenco gate umani]
```

## 9. Output atteso

- [ ] Azione standard
- [ ] Notifica
- [ ] Documento
- [ ] Report
- [ ] Issue
- [ ] Pull request
- [ ] Test plan
- [ ] Checklist
- [ ] Decisione architetturale
- [ ] Conoscenza da assorbire

Descrizione output:

```text
[Descrivere output finale e intermedi]
```

## 10. Classificazione consigliata

Scegliere una classificazione principale.

- [ ] Automazione
- [ ] Workflow
- [ ] AI Agent
- [ ] Agentic Workflow
- [ ] Pipeline multi-agent
- [ ] Agent Factory

Decisione:

```text
[Classificazione scelta]
```

## 11. Motivazione della classificazione

```text
[Spiegare perché questa è la classificazione corretta]
```

## 12. Parti deterministiche

Quali parti possono essere gestite senza AI?

```text
[Elenco automazioni o regole deterministiche]
```

## 13. Parti agentiche

Quali parti richiedono AI Agent?

```text
[Elenco step agentici]
```

## 14. Agenti eventualmente necessari

- [ ] Requirement Analyst Agent
- [ ] Repository Analyst Agent
- [ ] Architect Agent
- [ ] Developer Agent
- [ ] Tester Agent
- [ ] Reviewer Agent
- [ ] Documentation Agent
- [ ] Knowledge Librarian
- [ ] Supervisor Agent
- [ ] Altro

Agenti selezionati:

```text
[Elenco agenti e motivazione]
```

## 15. Tool necessari

- [ ] Lettura file
- [ ] Scrittura file
- [ ] GitHub
- [ ] Issue tracker
- [ ] Terminale
- [ ] Test runner
- [ ] Browser
- [ ] Database
- [ ] API esterne
- [ ] Sistema notifiche
- [ ] Altro

Tool selezionati:

```text
[Elenco tool]
```

## 16. Human in the Loop

Punti in cui serve controllo umano:

```text
[Elenco punti di validazione]
```

Motivazione:

```text
[Spiegare rischio e valore del gate]
```

## 17. Rischi principali

```text
R-001 - [Rischio]
R-002 - [Rischio]
R-003 - [Rischio]
```

## 18. Criteri di qualità

```text
CQ-001 - [Criterio]
CQ-002 - [Criterio]
CQ-003 - [Criterio]
```

## 19. Conoscenza da assorbire

Dopo l'esecuzione, quale conoscenza può diventare permanente?

```text
[Pattern, regole, template, errori evitati, decisioni riutilizzabili]
```

## 20. Decisione finale

```text
Usare: [Automazione / Workflow / AI Agent / Agentic Workflow / Pipeline multi-agent / Agent Factory]

Perché:
[Motivazione sintetica]

Prossimo passo:
[Azione operativa successiva]
```
