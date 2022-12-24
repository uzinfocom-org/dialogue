// deno-lint-ignore-file no-explicit-any
import { Composer, Context } from "../../deps.ts";
import middleware from "./hook.ts";

const composer = new Composer();

composer.on("message:text", async (ctx: Context): Promise<any> => {
  const message: string = ctx.message!.text!;
  const exists: boolean = Object.keys(middleware).includes(message);

  if (!exists) {
    return await ctx.reply(`I'm not sure whether I do understand you...`);
  }

  if (exists) {
    await middleware[message](ctx);
  }
});

export default composer;
