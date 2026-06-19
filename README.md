# AgentFactory

Repository del sito statico **AgentFactory / AISchool** pubblicato con GitHub Pages.

Il sito contiene il corso **AISchool — Dai Fondamenti del Web ai Workflow Agentici**: 8 capitoli e 43 lezioni importate dai sorgenti Markdown AISchool.

## Sito

Il sito pubblicabile si trova in:

```text
docs/
```

File principale:

```text
docs/index.html
```

GitHub Pages deve essere configurato su:

- branch: `main`
- folder: `/docs`

URL previsto:

```text
https://enricopaparo.github.io/AgentFactory/
```

## Aggiornare i contenuti

I contenuti vengono importati dal repository/cartella AISchool con:

```bash
node tools/import-aischool.js "C:/Users/Erry/Downloads/AISchool/AISchool"
```

Lo script rigenera `docs/index.html` e tutte le pagine in `docs/pages/`.
