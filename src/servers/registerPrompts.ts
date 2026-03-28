import { registerTools } from "./registerTools";
import { registerResources } from "./registerResources";

export function registerPrompts() {
  const prompt = new Prompt(
    { name: "my-mcp-server", version: "0.1.0" },
    { capabilities: { tools: {}, resources: {}, prompts: {} } }
  );

  registerTools(server);
  registerResources(server);
  registerPrompts(server);

  return prompt;
}
