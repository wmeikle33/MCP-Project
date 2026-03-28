import express from "express";
import { Server } from "@modelcontextprotocol/sdk/server";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/http";

export async function startHttpTransport(server: Server, port = 3000) {
  const app = express();

  // Middleware to parse JSON
  app.use(express.json());

  // Create MCP HTTP transport
  const transport = new StreamableHTTPServerTransport();

  // Connect MCP server to HTTP transport
  await server.connect(transport);

  // MCP endpoint
  app.post("/mcp", async (req, res) => {
    try {
      await transport.handleRequest(req, res);
    } catch (err) {
      console.error("MCP request error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Optional health check
  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // Start server
  app.listen(port, () => {
    console.error(`MCP HTTP server running on port ${port}`);
  });
}
