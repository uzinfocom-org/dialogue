import start from "./start.ts";
import about from "./about.ts";
import stage from "./stage/mod.ts";
import { Bot } from "../deps.ts";
import retry from "./stage/retry.ts";

export default async (bot: Bot) => {
  await bot
    // The start command
    .use(start)
    // Help command
    .use(about)
    // Sticker hook controller
    // .use(sticker)
    // Retry command to re-run stage manager
    .use(retry)
    // Stage manager and invalid message hook
    .use(stage);
};
