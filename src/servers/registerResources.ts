import { registerTools } from "./registerTools";
import { registerResources } from "./registerResources";

export function registerResources() {
  const resource = new Resource(
    { capabilities: { tools: {}, resources: {}, prompts: {} } }
  );

  registerTools(server);
  registerResources(server);
  registerPrompts(server);

  return prompt;
}
