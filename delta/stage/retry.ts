import * as dict from "./dict.ts";
import { Composer, Context, Keyboard } from "../../deps.ts";

const composer = new Composer();

export const keyboard = new Keyboard().resized()
  .oneTime()
  .text(dict.start.a1)
  .text(dict.start.a2);

composer.callbackQuery("retry", async (ctx: Context) => {
  await ctx.reply(dict.welcome(ctx), {
    parse_mode: "HTML",
  });

  await ctx.reply(dict.start.q, {
    parse_mode: "HTML",
    reply_markup: keyboard,
  });
});

export default composer;
