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

  return { start };
}
