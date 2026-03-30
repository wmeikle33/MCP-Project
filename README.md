## Overview

## Quickstart

## Repo Structure

```bash

my-mcp-server/
├─ README.md
├─ LICENSE
├─ .gitignore
├─ .env.example
├─ package.json                # or pyproject.toml / Cargo.toml
├─ tsconfig.json               # if TypeScript
├─ docker-compose.yml          # optional local deps
├─ Dockerfile                  # optional containerized run
│
├─ docs/
│  ├─ architecture.md
│  ├─ capabilities.md          # tools/resources/prompts exposed
│  ├─ auth.md
│  └─ deployment.md
│
├─ src/
│  ├─ index.ts                 # process entrypoint
│  ├─ server/
│  │  ├─ createServer.ts       # instantiate MCP server
│  │  ├─ registerTools.ts
│  │  ├─ registerResources.ts
│  │  ├─ registerPrompts.ts
│  │  └─ lifecycle.ts          # init/shutdown hooks
│  │
│  ├─ transports/
│  │  ├─ stdio.ts              # local/dev transport
│  │  ├─ http.ts               # streamable HTTP / remote transport
│  │  └─ auth.ts               # auth middleware if remote
│  │
│  ├─ tools/
│  │  ├─ search/
│  │  │  ├─ tool.ts            # tool registration + handler
│  │  │  ├─ schema.ts          # input/output schema
│  │  │  └─ service.ts         # business logic
│  │  ├─ createTicket/
│  │  │  ├─ tool.ts
│  │  │  ├─ schema.ts
│  │  │  └─ service.ts
│  │  └─ index.ts
│  │
│  ├─ resources/
│  │  ├─ docsResource.ts
│  │  ├─ configResource.ts
│  │  └─ index.ts
│  │
│  ├─ prompts/
│  │  ├─ summarizePrompt.ts
│  │  ├─ triagePrompt.ts
│  │  └─ index.ts
│  │
│  ├─ domain/
│  │  ├─ models/
│  │  ├─ services/
│  │  └─ ports/
│  │
│  ├─ integrations/
│  │  ├─ github/
│  │  ├─ slack/
│  │  ├─ postgres/
│  │  └─ files/
│  │
│  ├─ config/
│  │  ├─ env.ts
│  │  ├─ featureFlags.ts
│  │  └─ constants.ts
│  │
│  ├─ shared/
│  │  ├─ errors.ts
│  │  ├─ logger.ts
│  │  ├─ telemetry.ts
│  │  └─ utils.ts
│  │
│  └─ schemas/
│     ├─ common.ts
│     └─ types.ts
│
├─ tests/
│  ├─ unit/
│  ├─ integration/
│  ├─ contract/                # protocol-level tests
│  └─ fixtures/
│
├─ examples/
│  ├─ inspector-config.json
│  ├─ local-client/
│  └─ sample-prompts/
│
└─ scripts/
   ├─ dev.ts
   ├─ smoke-test.ts
   └─ release.ts
```
