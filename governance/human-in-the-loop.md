# Human in the Loop

La AgentFactory non deve essere progettata come un sistema incontrollato.

L'obiettivo è aumentare autonomia operativa mantenendo responsabilità e controllo umano.

## Principio

> L'AI può accelerare il lavoro operativo, ma l'essere umano mantiene governo, responsabilità e approvazione sui punti critici.

## Gate minimi

Ogni pipeline professionale deve prevedere almeno questi punti di controllo:

1. approvazione requisiti;
2. approvazione architettura;
3. approvazione modifiche critiche;
4. review prima del merge;
5. verifica sicurezza;
6. assorbimento delle lezioni apprese.

## Azioni che richiedono attenzione

- modifiche a `main`;
- eliminazione file;
- gestione credenziali;
- deploy;
- modifiche a database;
- modifiche a permessi;
- generazione automatica di codice non revisionato;
- modifica delle regole operative degli agenti.

## Regola operativa

Gli agenti devono preferire branch, issue e pull request rispetto a modifiche dirette non tracciate.
