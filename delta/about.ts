import { Composer, Context, InlineKeyboard } from "../deps.ts";
import isPrivate from "../hooks/isPrivate.ts";

const composer = new Composer();

export const message = `<b>Hurmatli foydalanuvchi!</b> \n` +
  `\n` +
  `Ushbu bot Uzinfocom tomonidan ishlab chiqilgan va ` +
  `keltirilgan odamlar mehnati tufayli tirik. ` +
  `Loyiha 3 kunlik dedlayn natijasida 3 kishi tomonidan yaratilgan va bular:`;

export const keyboard = new InlineKeyboard()
  .url(`UwUssimo (Dasturchi)`, `https://t.me/uwublog`)
  .row()
  .url(`𝐑𝐨𝐜𝐤𝐞𝐭✧ (Dialog Yozuvchi)`, `https://t.me/stacyxan`)
  .row()
  .url(`Dilfuza (Stiker Rassomi)`, `https://t.me/i_dilfuz`)
  .row()
  .url(
    `Ochiq Kod (GitHub)`,
    `https://github.com/uzinfocom-org/dialogue`,
  );

composer.command("about", isPrivate, async (ctx: Context): Promise<void> => {
  await ctx.reply(message, {
    parse_mode: "HTML",
    reply_markup: keyboard,
  });
});

export default composer;
