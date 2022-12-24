import { Composer, Context, Keyboard } from "../deps.ts";

const composer = new Composer();

export const message = (ctx: Context): string =>
  `<b>Привет ${ctx?.from?.first_name}, с Наступающим новым годом!!</b> ` +
  `\n` +
  `Узнай, что ждет тебя в 2023 году.`;

export const keyboard = new Keyboard()
  .oneTime()
  .text("Да, это моя стихия")
  .text("Нет, IT не мое");

composer.command("start", async (ctx: Context): Promise<void> => {
  await ctx.reply(message(ctx), {
    parse_mode: "HTML",
  });

  await ctx.reply("Работаешь ли ты в IT сфере?", {
    parse_mode: "HTML",
    reply_markup: keyboard,
  });
});

export default composer;
