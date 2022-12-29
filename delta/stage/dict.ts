import { Context } from "../../deps.ts";

export const welcome = (ctx: Context) =>
  `<b>Привет ${ctx?.from?.first_name}, с Наступающим новым годом!! 🥳</b> ` +
  `\n` +
  `Узнай, что ждет тебя в 2023 году.`;

export const start = {
  q: "IT sohasida ishlaysizmi? 🤔",
  a1: "Ha, bu mening soham 🧑🏻‍💻",
  a2: "Yo'q, dasturchilik menga emas 🤖",
};

export const pointer1 = {
  q: "Отлично, а что напрягает в работе? 🤔",
  a1: "Короткие дедлайны 🫠",
  a2: "Баги в коде ❌",
  a3: "Множество правок 😡",
};

export const pointer11 = {
  q: `Понимаю, короткие сроки. А как решаешь проблему? 🤔`,
  a1: `Договариваюсь с поставщиком 🤝`,
  a2: `Работаю без выходных 😕`,
  a3: `Грущу и не успеваю 😫`,
};

export const pointer12 = {
  q: `Nima yomonroq: siz yoki boshqalar adashgandami? 🤔`,
  a1: 'Men "siz" 😔',
  a2: "Boshqa kimdir 🧐",
};

export const pointer13 = {
  q: `А что делаешь, когда правок слишком много? 🤔`,
  a1: "Оспариваю каждую! 😠",
  a2: "Вношу, что поделать ✍️",
};

export const pointer2 = {
  q: "Как в целом прошел рабочий год? 🤔",
  a1: "Трудно, но интересно 😛",
  a2: "В целом неплохо 🙂",
  a3: "Когда отпуск?? 🥲",
};

export const pointer21 = {
  q: `Чего ждешь от 2023 года? 🤔`,
  a1: "Больше интересных проектов 🤟🏻",
  a2: "Хочу отдохнуть 😴",
};

export const pointer22 = {
  q: `Какие планы на 2023 год? 🤔`,
  a1: "Работать еще усерднее 😁",
  a2: "Отпуск! 🧳",
};

export const pointer23 = {
  q: `А новогоднее настроение присутствует? 🤔`,
  a1: "Нет 🙅",
  a2: "Полный джингл беллс 🕺🏻",
  a3: "Уже на подходе 🎄",
};

export const retry = "Boshqatdan boshlash 🔁";
