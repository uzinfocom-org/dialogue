import { Composer, Context, InlineKeyboard } from "../deps.ts";
import isPrivate from "../hooks/isPrivate.ts";

const composer = new Composer();

export const message = `<b>Уважаемый пользователь!</b> \n` +
  `\n` +
  `Этот бот был написан Uzinfocom, и он существует ` +
  `благодаря тем людям, которые приложили свои усилия. ` +
  `Этот бот был 3-дневным дедлайновым проектом от 3 человек перечисленных ниже:`;

export const keyboard = new InlineKeyboard()
  .url(`UwUssimo (Программист)`, `https://t.me/uwublog`)
  .row()
  .url(`𝐑𝐨𝐜𝐤𝐞𝐭✧ (Создатель Диалога)`, `https://t.me/stacyxan`)
  .row()
  .url(`... (Дизайнер)`, `https://t.me/uzinfocomofficial`)
  .row()
  .url(
    `Исходный Код`,
    `https://github.com/uzinfocom-org/dialogue`,
  )
  .row();

composer.command("about", isPrivate, async (ctx: Context): Promise<void> => {
  await ctx.reply(message, {
    parse_mode: "HTML",
    reply_markup: keyboard,
  });
});

export default composer;
