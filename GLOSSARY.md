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

## Output Contract Steward

Ruolo o agente incaricato di controllare se gli output rispettano i contratti, individuare drift o limiti ricorrenti e proporre evoluzioni versionate dei template. Non dovrebbe modificare contratti ufficiali senza review, compatibilita' e gate.

## Schema drift

Degrado progressivo della forma di un output: sezioni rinominate, saltate o aggiunte senza controllo. In una pipeline multi-agent rompe handoff, parsing, review, test e memoria.

## Agent Card

Scheda tecnica di un agente. Descrive missione, input, output, tool, regole, limiti, criteri di qualita' e punti in cui deve chiedere conferma.

## Agent package

Insieme fisico dei file che compongono o supportano un agente: Agent Card, prompt operativo, template, runtime, input, output, run record, review, knowledge, governance, eventuali evals e stato.

## Package manifest

Documento che elenca i file fisici collegati a un agente. Serve a capire cosa compone l'agente, quali file sono attivi, quali sono futuri, quali sono deprecati e quali sono condivisi.

## Agent Package Spec

Documento di riferimento che spiega ogni file possibile di un Agent package: scopo, contenuto, proprietario, momento di aggiornamento, rischi e confini.

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

## Prompt operativo

Documento di esecuzione che trasforma ruolo, input, regole, template e vincoli in istruzioni pronte per un modello. Serve a far comportare il modello come agente dentro una pipeline.

## Runtime minimo

Il pezzo piu' piccolo di sistema capace di eseguire un agente in modo tracciabile: legge input, prompt e template, chiama il modello, salva output e run record.

## Runtime

Ambiente o programma che mette in esecuzione un agente. Nel percorso AgentFactory il primo runtime e' uno script Python che legge file versionati, compone il prompt e puo' chiamare un modello solo se autorizzato.

## Dry-run

Esecuzione di prova che mostra cosa succederebbe senza chiamare servizi esterni, senza spendere token e senza produrre l'output finale.

## Execute

Esecuzione reale. Nel runtime AgentFactory indica la modalita' che chiama il modello via API e salva output e run record.

## Pre-flight

Checklist operativa eseguita prima di una chiamata API o di un'azione rischiosa. Verifica ambiente, credenziali, modello, budget, input, output, review e condizioni di stop.

## Budget operativo

Limite deciso prima dell'esecuzione di un agente: puo' indicare numero massimo di run, costo, token, tempo, retry o tool autorizzati.

## Variabile ambiente

Valore configurato nel sistema o nella sessione terminale, usato dal programma senza salvarlo nel repository. Esempi: `OPENAI_API_KEY`, `OPENAI_MODEL`.

## API key

Credenziale usata per accedere a un servizio via API. Non deve mai essere salvata nel repository: va gestita come variabile ambiente o tramite secret manager.

## Run record

Registro di una esecuzione reale di un agente. Traccia agente, modello, input, prompt, output, budget, errori, stato, review prevista e conoscenza candidata.

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

## Handoff Contract

Contratto operativo che descrive come un agente passa lavoro a un altro agente: mittente, ricevente, artefatti sorgente, obiettivo, vincoli, scope, out of scope, privilegi, condizioni di stop e output atteso.

## Perdita di contesto

Errore di pipeline in cui l'agente successivo non riceve o non riconosce informazioni necessarie, per esempio obiettivo, vincoli, ipotesi, priorita' o decisioni umane aperte.

## Context

Informazioni effettivamente disponibili a un agente durante un task specifico.

Il contesto puo' includere Agent Card, richiesta utente, file, template, regole di governance, output di altri agenti e conoscenza recuperata dalla knowledge base. Non coincide con la sola Agent Card.

## Memoria permanente

Conoscenza validata, organizzata e riutilizzabile che sopravvive ai singoli task e ai singoli agenti.

## Knowledge Base

Archivio di conoscenza validata e riutilizzabile: principi, regole, lezioni apprese, template, decisioni.

## Knowledge Compiler

Ruolo o agente che trasforma esperienza grezza in conoscenza pulita, sintetica e riutilizzabile.

## Knowledge Curator

Ruolo o agente incaricato di mantenere sana la conoscenza validata: elimina duplicati, propone compressioni, archivia regole vecchie, rileva conflitti e distingue memoria attiva da memoria storica.

## Agent Maintainer

Ruolo o agente incaricato di mantenere puliti Agent Card, prompt operativi e template. Non produce direttamente output di progetto: controlla che gli agenti restino leggibili, focalizzati e non gonfiati da memoria non necessaria.

## Memory Steward

Ruolo di governance della memoria: decide, con human gate quando serve, cosa resta attivo, cosa viene archiviato, cosa viene compresso e cosa puo' essere recuperato solo su richiesta.

## State Store

Archivio dello stato operativo di agenti e pipeline: run, trace, versioni usate, output prodotti, review, decisioni e metriche. Non coincide con la Agent Card.

## Context budget

Limite qualitativo e quantitativo del contesto dato a un agente. Non riguarda solo il numero massimo di token, ma anche il rapporto tra informazioni rilevanti e rumore.

## Knowledge drift

Degrado della conoscenza nel tempo: regole vecchie, duplicate, contraddittorie o non piu' valide restano attive e peggiorano output, prompt e decisioni.

## Knowledge absorption

Processo con cui una lezione, una review, un errore o un progetto vengono trasformati in conoscenza candidata, validata e poi assorbita nella memoria permanente della factory.

## Knowledge candidate

Proposta di conoscenza non ancora approvata. Deve indicare fonte, evidenza, ambito di validita', rischio di applicazione sbagliata e decisione di assorbimento.

## Human Gate

Punto del workflow in cui una persona deve validare, approvare o bloccare il lavoro prima di procedere.

## Agent Factory

Sistema capace di creare, configurare, orchestrare e migliorare agenti specializzati in base ai progetti.

## Requirement Analyst Agent

Agente incaricato di trasformare input progettuali grezzi in requisiti chiari, verificabili e pronti per gli agenti successivi.

## Architect Agent

Agente incaricato di trasformare requisiti, vincoli e handoff in decisioni architetturali motivate, senza scrivere codice nella fase di progettazione.

## Developer Agent

Agente incaricato di trasformare un piano approvato in modifiche tecniche controllate, rispettando file autorizzati, comandi consentiti, condizioni di stop e verifiche.

## Requirement Analysis Document

Artefatto prodotto dal Requirement Analyst Agent. Organizza brief, fatti, ipotesi, domande aperte, requisiti, vincoli, rischi, criteri di accettazione e handoff per gli agenti successivi.

## Architecture Decision Record

Documento che registra una decisione architetturale: contesto, problema, decisione, motivazione, alternative, trade-off, conseguenze, rischi e condizioni di revisione.

## Architecture Review

Valutazione strutturata di un Architecture Decision Record. Controlla template, fonti, handoff, decisione, motivazione, alternative, trade-off, rischi, condizioni di revisione e utilita' per gli agenti successivi.

## Implementation Plan

Piano operativo che traduce requisiti, ADR e handoff in passi tecnici verificabili: file autorizzati, modifiche previste, comandi consentiti, rischi, condizioni di stop e verifiche.

## Trade-off

Compromesso consapevole tra vantaggi e costi. In architettura non esiste quasi mai una scelta perfetta: esiste una scelta adatta al contesto.

## Criterio di accettazione

Condizione verificabile che permette di stabilire se un requisito e' stato soddisfatto.

## Review

Valutazione strutturata di un artefatto. Deve indicare punti forti, problemi, evidenze, score e azioni correttive.

## Score

Punteggio usato per rendere confrontabile una valutazione. In AgentFactory uno score non basta da solo: deve essere accompagnato da motivazione, evidenza e azione correttiva.

## Finding

Osservazione emersa durante una review. Un finding utile descrive un problema o rischio concreto, ne spiega l'impatto e suggerisce una correzione.

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
