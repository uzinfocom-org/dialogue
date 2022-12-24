import { Context, Keyboard } from "../../deps.ts";

type Hook = { [key: string]: (ctx: Context) => Promise<void> };

const hook: Hook = {
  // Stage 1, Act 1
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

  // Stage 2, Act 1, Verse 1
  "Баги в коде": async (ctx: Context) => {
    await ctx.reply(`Что хуже: когда ошибаешься ты или кто-то другой?`);
  },

  // Stage 1, Act 2
  "Нет, IT не мое": async (ctx) => {
    await ctx.reply(`Как в целом прошел рабочий год?`, {
      parse_mode: "HTML",
      reply_markup: new Keyboard()
        .text("Трудно, но интересно")
        .row()
        .text("В целом неплохо")
        .row()
        .text("Когда отпуск??"),
    });
  },
};

export default hook;
