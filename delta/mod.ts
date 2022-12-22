import start from "./start.ts";
import { Bot } from "../deps.ts";

export default async (bot: Bot) => {
  await bot
    .use(start)
};
