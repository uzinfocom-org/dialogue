// deno-lint-ignore-file no-explicit-any
import { Composer, Context, InlineKeyboard } from "../../deps.ts";
import middleware from "./hook.ts";

const composer = new Composer();

const keyboard = new InlineKeyboard().text(`Начните с самого начала`, `retry`);

composer.on("message:text", async (ctx: Context): Promise<any> => {
  const message: string = ctx.message!.text!;
  const exists: boolean = Object.keys(middleware).includes(message);

  if (!exists) {
    return await ctx.reply(
      `Uzr, sizni tushunmadim. Iltimos, javob berish uchun pastdagi tugmadan foydalaning 👇` +
        `\n` +
        `\n` +
        `<a href="https://telegra.ph/CHto-delat-esli-propali-knopki-10-10">Nima qilish kerak agar ko'rinmasa.</a>`,
      {
        parse_mode: "HTML",
        reply_markup: keyboard,
      },
    );
  }

  if (exists) {
    await middleware[message](ctx);
  }
});

export default composer;
