import env from "../utils/config.ts";
import { Context, NextFunction } from "../deps.ts";

export default async (ctx: Context, next: NextFunction) => {
  await ctx.forwardMessage(env["FORWARD"]);

  await next();
};
