import { Context, Keyboard } from "../../deps.ts";

type Hook = { [key: string]: (ctx: Context) => Promise<void> };

const hook: Hook = {
  "Да, это моя стихия": async (ctx: Context) => {
    await ctx.reply(`Отлично, а что напрягает в работе?`, {
      parse_mode: "HTML",
      reply_markup: new Keyboard()
        .text("Короткие дедлайны")
        .row()
        .text("Баги в коде")
        .row()
        .text("Множество правок"),
    });
  },
};

export default hook;
