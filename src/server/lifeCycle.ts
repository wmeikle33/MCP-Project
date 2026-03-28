import process from "process";

type LifecycleDeps = {
  onStart?: () => Promise<void> | void;
  onStop?: () => Promise<void> | void;
};

export function setupLifecycle(deps: LifecycleDeps = {}) {
  const { onStart, onStop } = deps;

  async function start() {
    try {
      if (onStart) {
        await onStart();
      }
      console.error("Server started");
    } catch (err) {
      console.error("Startup failed:", err);
      process.exit(1);
    }
  }

  async function shutdown(signal: string) {
    console.error(`Shutting down due to ${signal}...`);

    try {
      if (onStop) {
        await onStop();
      }
    } catch (err) {
      console.error("Error during shutdown:", err);
    } finally {
      process.exit(0);
    }
  }

  // Handle termination signals
  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);

  // Handle crashes
  process.on("uncaughtException", (err) => {
    console.error("Uncaught exception:", err);
    shutdown("uncaughtException");
  });

  process.on("unhandledRejection", (reason) => {
    console.error("Unhandled rejection:", reason);
    shutdown("unhandledRejection");
  });

  return { start };
