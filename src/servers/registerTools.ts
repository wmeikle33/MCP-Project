import { registerTools } from "./registerTools";
import { registerResources } from "./registerResources";
import { registerPrompts } from "./registerPrompts";

export function createServer() {
  const server = new Server(
    { name: "my-mcp-server", version: "0.1.0" },
    { capabilities: { tools: {}, resources: {}, prompts: {} } }
  );

  registerTools(server);
  registerResources(server);
  registerPrompts(server);

  return server;
}
