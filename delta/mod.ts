import start from "./start.ts";
import about from "./about.ts";
import stage from "./stage/mod.ts";
import { Bot } from "../deps.ts";
import retry from "./stage/retry.ts";

export default async (bot: Bot) => {
  await bot
    .use(start)
    .use(about)
    .use(retry)
    .use(stage);
};
