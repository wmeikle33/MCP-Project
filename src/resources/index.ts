
import { createServer } from "./server/createServer";
import { startStdioTransport } from "./transports/stdio";

async function main() {
  const server = createServer();
  await startStdioTransport(server);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
