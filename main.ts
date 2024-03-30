import { createBullBoard } from "@bull-board/api";
import { initializeTaskRunnerInterface } from "./boot/queue";
import { startServer } from "./boot/server";
import { container } from "./container";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";

import {
  ExpressAdapter
} from '@bull-board/express';

const main = async () => {
  const queues = await initializeTaskRunnerInterface(container.queueService);

  startServer({
    beforeStart: async (expressApp) => {
      const serverAdapter = new ExpressAdapter();
      serverAdapter.setBasePath('/admin/queues');

      createBullBoard({
        queues: queues.map(queueObject => new BullMQAdapter(queueObject)),
        serverAdapter: serverAdapter,
      });

      expressApp.use('/admin/queues', serverAdapter.getRouter());
    }
  });
};

main().catch(error => {
  console.error(error);
  process.exit(1);
});
