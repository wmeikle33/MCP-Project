import { resources } from "./resources";

export function registerResources() {
  const resource = new Resource(
    { capabilities: { tools: {}, resources: {}, prompts: {} } }
  );

  registerTools(server);
  registerResources(server);
  registerPrompts(server);

  return prompt;
}
