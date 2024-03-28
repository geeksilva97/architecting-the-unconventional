import { startQueues } from "./boot/queue";
import { startServer } from "./boot/server";
import { container } from "./container";

const main = async () => {
  await startQueues(container.queueService);
  startServer();
};

main().catch(error => {
  console.error(error);
  process.exit(1);
});
