import { Composer, Context, InlineKeyboard } from "../deps.ts";

const composer = new Composer();

export const message1 = (ctx: Context): string =>
  `<b>Привет, ${ctx?.from?.first_name}!</b> \n` +
  `\n` +
  `С наступающим Новым годом!`;

export const message2 =
  `Я — Инно, волшебник с эмпатией. Я дарю людям только то, что им по-настоящему нужно прямо сейчас 😌 \n` +
  `\n` +
  `Хочешь получить свой подарок? Ответь на несколько вопросов!`;

export const keyboard = new Keyboard()
  .url("Jamiyat", "https://t.me/xinuxuz")
  .url("Web Sahifa", "https://xinux.uz");

composer.command("start", async (ctx: Context): Promise<void> => {
  if (ctx.message!.is_topic_message) {
    await ctx.reply(message, {
      message_thread_id: ctx.message!.message_thread_id,
      parse_mode: "HTML",
      reply_markup: keyboard,
    });
  } else {
    await ctx.reply(message, {
      parse_mode: "HTML",
      reply_markup: keyboard,
    });
  }
});

export default composer;
