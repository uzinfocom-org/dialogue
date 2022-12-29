import { Context } from "../../deps.ts";

export const welcome = (ctx: Context) =>
  `<b>Salom ${ctx?.from?.first_name}, kirib kelayot yangi yillaring bilan!! 🥳</b> ` +
  `\n` +
  `2023 yilda nima bo'lishini bilib oling.`;

export const start = {
  q: "IT sohasida ishlaysizmi? 🤔",
  a1: "Ha, bu mening soham 🧑🏻‍💻",
  a2: "Yo'q, dasturchilik menga emas 🤖",
};

export const pointer1 = {
  q: "Ajoyib, lekin ishda nima bezovta qiladi? 🤔",
  a1: "Qisqa dedlaynlar 🫠",
  a2: "Koddagi xatolar ❌",
  a3: "Ko'p tuzatishlar 😡",
};

export const pointer11 = {
  q: `Tushunaman, qisqa muddatlar. Muammoni qanday hal qilasiz? 🤔`,
  a1: `Yetkazib beruvchi bilan muzokaralar olib boraman 🤝`,
  a2: `Dam olishsiz ishlayman 😕`,
  a3: `Xafa bo’laman va ulgurmayman 😫`,
};

export const pointer12 = {
  q: `Nima yomonroq: siz yoki boshqalar adashgandami? 🤔`,
  a1: 'Men "siz" 😔',
  a2: "Boshqa kimdir 🧐",
};

export const pointer13 = {
  q: `Tuzatishlar juda ko'p bo'lsa, nima qilasiz? 🤔`,
  a1: "Har biri bilan bahslashaman! 😠",
  a2: "Nima qilish kerakligini kiritaman ✍️",
};

export const pointer2 = {
  q: "Umuman ish yili qanday o'tdi? 🤔",
  a1: "Qiyin, lekin qiziqarli 😛",
  a2: "Umuman yaxshi 🙂",
  a3: "Ta'til qachon?? 🥲",
};

export const pointer21 = {
  q: `2023-yildan nimani kutyapsiz? 🤔`,
  a1: "Ko’plab qiziqarli loyihalar 🤟🏻",
  a2: "Dam olmoqchiman 😴",
};

export const pointer22 = {
  q: `2023-yil uchun qanday rejalaringiz bor? 🤔`,
  a1: "Yanada zo’r berib ishlash 😁",
  a2: "Ta'til! 🧳",
};

export const pointer23 = {
  q: `Yangi yil kayfiyati bormi? 🤔`,
  a1: "Yo'q 🙅",
  a2: "To'liq bayram 🕺🏻",
  a3: "Yo'lda 🎄",
};

export const retry = "Boshqatdan boshlash 🔁";
