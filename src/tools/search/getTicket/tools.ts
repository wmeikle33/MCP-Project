server.tool(
  "create_ticket",
  "Create a new support ticket",
  {
    title: z.string().description("The title of the ticket"),
    description: z.string().description("Detailed description"),
    priority: z.enum(["low", "medium", "high"]).default("medium"),
  },
  async ({ title, description, priority }) => {
    // --- THIS IS WHERE YOU CALL YOUR API (JIRA/GITHUB/DB) ---
    console.error(`Creating ticket: ${title} [${priority}]`);
    const ticketId = `TICKET-${Math.floor(Math.random() * 1000)}`;
    
    // Return the response to the AI
    return {
      content: [{ type: "text", text: `Ticket ${ticketId} created: ${title}` }],
    };
  }
);
