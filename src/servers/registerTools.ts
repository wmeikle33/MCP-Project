import { registerResources } from "./registerResources";
import { registerPrompts } from "./registerPrompts";

export function createTool() {
  const tool = new Tool(
    { capabilities: { tools: {}, resources: {}, prompts: {} } }
  );


  return server;
}
