import { tools } from "./tools";

export function createTool() {
  const tool = new Tool(
    { capabilities: { tools: {}, resources: {}, prompts: {} } }
  );

  register ask tool
  register search tool
  register summarize tool

  return tool;
}
