import { Context } from "../deps.ts"
import type {Stage, Response, Sticker} from "./type.ts";
import stageData from "./stage.json" assert { type: "json" };

export default async (ctx: Context, ...stages: number[]): Promise<(ctx: Context) => void> => {
  let stageChosen: Stage | Sticker = stageData;

  for (let i = 0; i < stages.length; i++) {
    stageChosen
  }

  return (ctx) => {
    if ("file_id" in stageChosen && stageChosen.file_id) {

    }
  }
}
