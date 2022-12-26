import * as dict from "./dict.ts"
import { Composer, Context, Keyboard } from "../../deps.ts";

const composer = new Composer();
export const message = (ctx: Context): string =>
  `<b>Привет ${ctx?.from?.first_name}, с Наступающим новым годом!!</b> ` +
  `\n` +
  `Узнай, что ждет тебя в 2023 году.`;

export const keyboard = new Keyboard()
  .oneTime()
  .text(dict.start.a1)
  .text(dict.start.a2);

composer.callbackQuery("retry", async (ctx: Context) => {
  await ctx.reply(message(ctx), {
    parse_mode: "HTML",
  });

  await ctx.reply(dict.start.q, {
    parse_mode: "HTML",
    reply_markup: keyboard,
  });
});

export default composer;
