import { Context, InlineKeyboard, NextFunction } from "../deps.ts";
import { reply } from "../utils/sender.ts";

const keyboard = new InlineKeyboard().url(
  `Перейти`,
  `https://t.me/infokomets_bot`,
);

export default async (ctx: Context, next: NextFunction) => {
  if (ctx.chat!.type !== "private") {
    return await reply(
      ctx,
      `⚠️ Этот бот предназначен только для приватного чата!`,
      keyboard,
    );
  }

  await next();
};
