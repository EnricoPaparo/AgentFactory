# Glossario AgentFactory

Glossario minimo. Va esteso solo quando un termine serve davvero al percorso.

## Markdown

Formato di testo semplice usato per scrivere documenti leggibili e versionabili. I file Markdown usano estensione `.md`.

## Artefatto

Output concreto e verificabile prodotto durante il lavoro. Esempi: lezione, report, Agent Card, checklist, documento requisiti, test plan, prompt operativo.

## Template

Modello riutilizzabile per produrre sempre lo stesso tipo di artefatto con una struttura coerente.

## Output contract

Accordo sulla forma dell'output prodotto da un agente. Definisce sezioni, ordine, contenuto atteso e criteri minimi, cosi' gli agenti successivi possono usare l'artefatto senza reinterpretarlo da zero.

## Agent Card

Scheda tecnica di un agente. Descrive missione, input, output, tool, regole, limiti, criteri di qualita' e punti in cui deve chiedere conferma.

## Privilegio

Permesso operativo concesso a un agente, per esempio leggere file, scrivere file, eseguire comandi, accedere a servizi esterni o modificare memoria.

## Minimo privilegio necessario

Principio secondo cui un agente deve ricevere solo i permessi indispensabili per svolgere il proprio compito.

## Criterio di qualita'

Regola o condizione usata per valutare se un output o un agente ha lavorato bene.

## AI Agent

Sistema basato su modello AI capace di perseguire un obiettivo usando contesto, strumenti, regole e verifiche.

## Prompt

Richiesta data a un modello AI. Un prompt puo' essere semplice o complesso, ma non e' automaticamente un agente.

## Brief

Input iniziale, spesso incompleto o ambiguo, che descrive cosa si vuole ottenere. Un Requirement Analyst Agent lo trasforma in requisiti, domande aperte e handoff.

## Automazione

Processo o azione eseguita secondo regole predefinite, senza bisogno di interpretazione o giudizio.

## Workflow

Sequenza strutturata di passaggi, stati o approvazioni. Puo' essere tradizionale o includere parti agentiche.

## Workflow agentico

Sequenza di passaggi in cui uno o piu' agenti lavorano per produrre un risultato.

## Pipeline multi-agent

Workflow composto da piu' agenti specializzati, ognuno con responsabilita', input e output distinti.

## Tool

Strumento che un agente puo' usare: file system, terminale, GitHub, browser, database, API, test runner.

## Handoff

Passaggio strutturato di output da un agente a un altro. Un buon handoff evita che l'agente successivo debba ricostruire tutto da zero.

## Context

Informazioni effettivamente disponibili a un agente durante un task specifico.

Il contesto puo' includere Agent Card, richiesta utente, file, template, regole di governance, output di altri agenti e conoscenza recuperata dalla knowledge base. Non coincide con la sola Agent Card.

## Memoria permanente

Conoscenza validata, organizzata e riutilizzabile che sopravvive ai singoli task e ai singoli agenti.

## Knowledge Base

Archivio di conoscenza validata e riutilizzabile: principi, regole, lezioni apprese, template, decisioni.

## Knowledge Compiler

Ruolo o agente che trasforma esperienza grezza in conoscenza pulita, sintetica e riutilizzabile.

## Human Gate

Punto del workflow in cui una persona deve validare, approvare o bloccare il lavoro prima di procedere.

## Agent Factory

Sistema capace di creare, configurare, orchestrare e migliorare agenti specializzati in base ai progetti.

## Requirement Analyst Agent

Agente incaricato di trasformare input progettuali grezzi in requisiti chiari, verificabili e pronti per gli agenti successivi.

## Requirement Analysis Document

Artefatto prodotto dal Requirement Analyst Agent. Organizza brief, fatti, ipotesi, domande aperte, requisiti, vincoli, rischi, criteri di accettazione e handoff per gli agenti successivi.

## Criterio di accettazione

Condizione verificabile che permette di stabilire se un requisito e' stato soddisfatto.

## Requisito funzionale

Descrive cosa il sistema deve fare.

## Requisito non funzionale

Descrive come il sistema deve comportarsi, per esempio sicurezza, performance, tracciabilita', usabilita' o affidabilita'.

## Scope

Perimetro di cio' che il progetto include.

## Out of scope

Perimetro di cio' che il progetto non include nella fase corrente.

## n8n

Piattaforma di workflow automation visuale. Permette di collegare trigger, nodi, API, integrazioni, condizioni e azioni. In AgentFactory e' utile come workflow automation layer, non come agente in se'.

## OpenAI Agents SDK

SDK Python per costruire agenti con istruzioni, tool, handoff, guardrail, sessioni, human-in-the-loop e tracing.

## CrewAI

Framework per costruire agenti, crew, task e flows. Utile per ragionare in termini di ruoli e collaborazione tra agenti.

## LangGraph

Framework/runtime per orchestrare workflow e agenti stateful a grafo, con persistenza, memoria, human-in-the-loop e gestione di flussi complessi.

## OpenClaw

Runtime open source per assistenti agentici autonomi e persistenti. Utile come caso studio su memoria, skill, autonomia, permessi e rischi di sicurezza.
