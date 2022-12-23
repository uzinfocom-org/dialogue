import {Keyboard} from "../deps.ts";

export interface Sticker {
  file_id: string;
}

export interface Stage {
  response: string;
  buttons: (Stage|Sticker)[];
}

export interface Response {
  response: string;
  buttons: Keyboard;
}
