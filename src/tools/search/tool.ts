import { z } from "zod";

export const SearchInput = z.object({
  query: z.string().min(1),
});

export function registerSearchTool(server: any, deps: { search: (q: string) => Promise<string[]> }) {
  server.tool(
    "search_docs",
    "Search internal docs",
    SearchInput.shape,
    async ({ query }: { query: string }) => {
      const results = await deps.search(query);
      return {
        content: [{ type: "text", text: results.join("\n") }],
      };
    }
  );
}
