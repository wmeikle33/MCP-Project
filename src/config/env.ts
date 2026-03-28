export async function startStdioTransport(server: Server) {
  const transport = new StdioServerTransport({
    // optional config later (logging, buffering, etc.)
  });

  await server.connect(transport);
}
