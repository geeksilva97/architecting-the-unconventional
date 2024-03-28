import { startQueues } from "./boot/queue";
import { startServer } from "./boot/server";

const main = async () => {
  startQueues();
  startServer();
};

main().catch(error => {
  console.error(error);
  process.exit(1);
});
