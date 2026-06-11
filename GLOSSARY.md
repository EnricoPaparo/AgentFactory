# Glossario AgentFactory

## AI Agent

Sistema basato su modello linguistico capace di perseguire un obiettivo usando contesto, strumenti, regole e verifiche.

## LLM

Large Language Model. Modello linguistico usato come motore cognitivo dell'agente.

## Tool

Strumento esterno che l'agente può usare, per esempio file system, GitHub, terminale, browser, database o API.

## Artefatto

Output verificabile prodotto da un agente: documento, issue, pull request, report, test plan, codice o checklist.

## Pipeline multi-agent

Sequenza coordinata di agenti specializzati che collaborano su un progetto.

## Agent Factory

Sistema capace di creare, configurare, orchestrare e migliorare agenti specializzati in funzione di progetti reali.

## Human in the Loop

Presenza di controllo umano nei punti critici del processo.

## Knowledge Base

Archivio permanente della conoscenza validata: principi, lezioni apprese, regole, pattern, template e decisioni.

## Knowledge Librarian

Ruolo o agente incaricato di organizzare e mantenere la conoscenza permanente.

## Knowledge Compiler

Ruolo o agente incaricato di trasformare conoscenza grezza in conoscenza riutilizzabile dagli altri agenti.

## Context

Insieme delle informazioni effettivamente disponibili all'agente durante un task specifico.

Il contesto non coincide con tutta la conoscenza permanente: è una selezione operativa costruita per il compito corrente.

## Context Builder

Componente o agente incaricato di costruire il contesto operativo selezionando istruzioni, file, regole, memoria rilevante e output dei tool.

## Retrieval

Processo con cui il sistema recupera dalla memoria permanente solo la conoscenza utile al task corrente.

## Memoria permanente

Conoscenza validata, organizzata e riutilizzabile che sopravvive ai singoli task e ai singoli agenti.

Può essere salvata in file Markdown, database, vector store, graph database o altri supporti.

## Storage

Supporto fisico o logico in cui vengono conservati dati o file.

Uno storage non è automaticamente memoria intelligente: diventa memoria utile solo se viene organizzato, mantenuto e recuperato dal sistema.

## Dockerfile

File che descrive la ricetta per costruire un container Docker, specificando ambiente, dipendenze, file da copiare e comando di avvio.

Per un agente che analizza un repository, il Dockerfile è una fonte importante per capire come il progetto viene eseguito.

## CI/CD

Pipeline automatica di Continuous Integration e Continuous Delivery/Deployment.

Serve a compilare, testare, verificare e talvolta rilasciare software in modo automatico dopo modifiche al codice.

Per gli AI Agent può diventare un meccanismo di feedback e validazione esterna.
