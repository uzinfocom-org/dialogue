import { Composer, Context } from "../deps.ts";

const composer = new Composer();

export const message = (ctx: Context): string =>
  `<b>Sticker ID:</b> <code>${ctx.message!.sticker!.file_id}</code>`;

composer.on("message:sticker", async (ctx: Context): Promise<void> => {
  await ctx.reply(message(ctx), {
    parse_mode: "HTML",
  });
});

export default composer;
