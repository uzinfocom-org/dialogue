import * as dict from "./dict.ts";
import { Context, Keyboard } from "../../deps.ts";

type Hook = { [key: string]: (ctx: Context) => Promise<void> };

const retry = new Keyboard()
  .text(dict.retry);

const hook: Hook = {
  // Retry Loop
  [dict.retry]: async (ctx: Context) => {
    await ctx.reply(dict.start.q, {
      parse_mode: "HTML",
      reply_markup: new Keyboard()
        .oneTime()
        .text(dict.start.a1)
        .row()
        .text(dict.start.a2),
    });
  },

  // Pointer 1
  [dict.start.a1]: async (ctx: Context) => {
    await ctx.reply(dict.pointer1.q, {
      parse_mode: "HTML",
      reply_markup: new Keyboard()
        .oneTime()
        .text(dict.pointer1.a1)
        .row()
        .text(dict.pointer1.a2)
        .row()
        .text(dict.pointer1.a3),
    });
  },

  // Pointer 1, 1
  [dict.pointer1.a1]: async (ctx: Context) => {
    await ctx.reply(dict.pointer11.q, {
      parse_mode: "HTML",
      reply_markup: new Keyboard()
        .oneTime()
        .text(dict.pointer11.a1)
        .row()
        .text(dict.pointer11.a2)
        .row()
        .text(dict.pointer11.a3),
    });
  },

  // Pointer 1, 1, 1 (Done!)
  [dict.pointer11.a1]: async (ctx: Context) => {
    await ctx.replyWithSticker(
      "CAACAgIAAxkBAAO0Y6k4fCFHCZLpNRqmb7FCSOoY3qIAAtwlAAJxgzhJwaNgFVKk2KYsBA",
    );

    await ctx.reply(
      `Siz juda qat\`iyatli va mas\`uliyatli ekaningizni ko\`rib turibman ` +
        `Ish yoki boshqa masalalar bo'ladimi har qanday ishga aql bilan yondoshadigan odam, ` +
        `2023 yilda siz buyuk muammolarni hal qilish bilan\`shug’ullanasiz siz juda band ` +
        `bo'lasiz samarali va o'z namunangiz bilan ko'p odamlarni ilhomlantirasiz ☄`,
      {
        reply_markup: retry,
      },
    );
  },

  // Pointer 1, 1, 2 (Done!)
  [dict.pointer11.a2]: async (ctx: Context) => {
    await ctx.replyWithSticker(
      "CAACAgIAAxkBAAIBEmOpParLT1SX2xKye6xmfyIquS-mAAIcHwACKQNJSaTY-iJ5d7TeLAQ",
    );

    await ctx.reply(
      `Tushundim... Ko'ryapmanki, sizga dam olish va kuch to'plash vaqti keldi. ` +
        `2023 yilda siz  vaqt, ortiqcha ishlashdan bosh torting va vaqtni taqsimlashni, ` +
        `dedlaynni uzaytirish o'rganishingiz kerak bo'ladi. Dam olish va uxlashni ` +
        `unutmang! 💙`,
      {
        reply_markup: retry,
      },
    );
  },

  // Pointer 1, 1, 3 (Done!)
  [dict.pointer11.a3]: async (ctx: Context) => {
    await ctx.replyWithSticker(
      "CAACAgIAAxkBAAPRY6k6UubkW2WeDugI8dypJA9FdSMAAuglAAIrIzhJ90N8_vc6pW4sBA",
    );

    await ctx.reply(
      `2023 yilda ishda katta muvaffaqiyatlarga erishasiz. Siz qanchalik qimmatli ` +
        `xodim ekanligingizni hamma payqaydi, lekin... faqat vaqtingizni ⏱ to'g'ri ` +
        `taqsimlashni o'rgansangiz.`,
      {
        reply_markup: retry,
      },
    );
  },

  // Pointer 1, 2
  [dict.pointer1.a2]: async (ctx: Context) => {
    await ctx.reply(dict.pointer12.q, {
      parse_mode: "HTML",
      reply_markup: new Keyboard()
        .oneTime()
        .text(dict.pointer12.a1)
        .row()
        .text(dict.pointer12.a2),
    });
  },

  // Pointer 1, 2, 1 (Done!)
  [dict.pointer12.a1]: async (ctx: Context) => {
    await ctx.replyWithSticker(
      "CAACAgIAAxkBAAPUY6k6oCR_l-frSb_uZIByj2vcNpcAAlAmAALMCDlJ0kZVi7UqMm4sBA",
    );

    await ctx.reply(
      `Ko'ryapmanki, 2023-yilda siz tashvish va bilan kurashasiz. Biz hammamiz ` +
        `mukammal emasmiz va xato qilishga haqqimiz borligini qabul qilasiz. Shundan ` +
        `keyin ish oson va samarali bo'ladi! 🔥`,
      {
        reply_markup: retry,
      },
    );
  },

  // Pointer 1, 2, 2 (Done!)
  [dict.pointer12.a2]: async (ctx: Context) => {
    await ctx.replyWithSticker(
      "CAACAgIAAxkBAAPaY6k67M6c2hFUrkvCHufjv06FsN0AAn4mAAKR6jhJMNAS6lczB9YsBA",
    );

    await ctx.reply(
      `2023 yilda siz ... hamkasblar xatolari ustida uzoq vaqt ishlaysiz. Lekin ` +
        `xafa bo'lmang, bu ko’pga chozilmaydi! murosaga kelsangiz, ish ancha oson va ` +
        `samaraliroq bo'ladi.`,
      {
        reply_markup: retry,
      },
    );
  },

  // Pointer 1, 3
  [dict.pointer1.a3]: async (ctx: Context) => {
    await ctx.reply(dict.pointer13.q, {
      reply_markup: new Keyboard()
        .oneTime()
        .text(dict.pointer13.a1)
        .row()
        .text(dict.pointer13.a2),
    });
  },

  // Pointer 1, 3, 1 (Done!)
  [dict.pointer13.a1]: async (ctx: Context) => {
    await ctx.replyWithSticker(
      "CAACAgIAAxkBAAPdY6k7JGIZYEHKs-7Sgx4WMxsWL8wAAtwlAAJxgzhJwaNgFVKk2KYsBA",
    );

    await ctx.reply(
      `2023-yilda sizni qizg'in bahslar va cheksiz munozaralar kutmoqda. ` +
        `Hech kim tanqid va izohlardan himoyalanmaganligini unutmang. ` +
        `Bunday muammolarga ijobiy munosabatda bo'ling va ish yanada yoqimli bo'ladi! 😇`,
      {
        reply_markup: retry,
      },
    );
  },

  // Pointer 1, 3, 2 (Done!)
  [dict.pointer13.a2]: async (ctx: Context) => {
    await ctx.replyWithSticker(
      "CAACAgIAAxkBAAPgY6k7ZEVmRHKLLixFu9jgLDrzdJsAAiAoAAKYgTlJsR4nEWjPRXEsBA",
    );

    await ctx.reply(
      `O'z-o'zini tuta bilishiningizga hasad qilish kerak! Yangi yilda ` +
        `sizda juda ko'p tahrirlar bo'ladi, lekin ayni paytda yaxshiligi ` +
        `oz emas - siz mahoratingizni oshirasiz va  vaziyatlarga turli tomonlardan ` +
        `qarashni o'rganasiz. 🫵🏻🦾`,
      {
        reply_markup: retry,
      },
    );
  },

  // Pointer 2
  [dict.start.a2]: async (ctx: Context) => {
    await ctx.reply(dict.pointer2.q, {
      parse_mode: "HTML",
      reply_markup: new Keyboard()
        .oneTime()
        .text(dict.pointer2.a1)
        .row()
        .text(dict.pointer2.a2)
        .row()
        .text(dict.pointer2.a3),
    });
  },

  // Pointer 2, 1
  [dict.pointer2.a1]: async (ctx: Context) => {
    await ctx.reply(`Чего ждешь от 2023 года?`, {
      parse_mode: "HTML",
      reply_markup: new Keyboard()
        .oneTime()
        .text(dict.pointer21.a1)
        .row()
        .text(dict.pointer21.a2),
    });
  },

  // Pointer 2, 1, 1 (Done!)
  [dict.pointer21.a1]: async (ctx: Context) => {
    await ctx.replyWithSticker(
      "CAACAgIAAxkBAAPjY6k7wRzmniC8BcJbBos3VZ9lIjwAAlAmAALMCDlJ0kZVi7UqMm4sBA",
    );

    await ctx.reply(
      `2023-yilda sizni qiziqarli loyihalar va yangi kashfiyotlar kutayotganini ` +
        `ko'ryapman. Ammo hammasi ham unchalik quvonchli emas, bo'sh vaqt juda kam ` +
        `bo'ladi... 🕑`,
      {
        reply_markup: retry,
      },
    );
  },

  // Pointer 2, 1, 2 (Done!)
  [dict.pointer21.a2]: async (ctx: Context) => {
    await ctx.replyWithSticker(
      "CAACAgIAAxkBAAPmY6k8BJuuHua2zYEZ9bWuXUepg-AAAuglAAIrIzhJ90N8_vc6pW4sBA",
    );

    await ctx.reply(
      `2023-yilda sizni qiziqarli loyihalar va ko'plab ishlar kutmoqda, ammo ` +
        `dam olishni va o'zingizga g'amxo'rlik qilishni unutmaysiz, bu juda samarali ` +
        `potentsialingizni ro'yobga chiqarishga ta'sir qiladi. ☺️`,
      {
        reply_markup: retry,
      },
    );
  },

  // Pointer 2, 2
  [dict.pointer2.a2]: async (ctx: Context) => {
    await ctx.reply(dict.pointer22.q, {
      parse_mode: "HTML",
      reply_markup: new Keyboard()
        .oneTime()
        .text(dict.pointer22.a1)
        .row()
        .text(dict.pointer22.a2),
    });
  },

  // Pointer 2, 2, 1 (Done!)
  [dict.pointer22.a1]: async (ctx: Context) => {
    await ctx.replyWithSticker(
      "CAACAgIAAxkBAAP9Y6k8Ylk9B7WzLtwkddaWV2Ea6AEAAigrAALq-zlJfEC4cSJ_BXIsBA",
    );

    await ctx.reply(
      `2023 yilda sizning salohiyatingiz maksimal darajada yuksak cho’qqiga chiqadi! ` +
        `Siz yangi cho'qqilar, siz juda ko'p yangi narsalarni kashf qilasiz va boshqalarni ` +
        `bir necha marta hayratda qoldirasiz. 🗻`,
      {
        reply_markup: retry,
      },
    );
  },

  // Pointer 2, 2, 1 (Done!)
  [dict.pointer22.a2]: async (ctx: Context) => {
    await ctx.replyWithSticker(
      "CAACAgIAAxkBAAIBCWOpPPlVnDNJMS1QWWq0rWGm46HhAALcJQACcYM4ScGjYBVSpNimLAQ",
    );

    await ctx.reply(
      `2023 yil juda samarali va yangi tajriba va imkoniyatlarga to'la bo'ladi. ` +
        `Siz kuchga to’lasiz va yangi loyihalarni amalga oshirish uchun ishtiyoq bilan ` +
        `harakat qilasiz. 🙌🏻`,
      {
        reply_markup: retry,
      },
    );
  },

  // Pointer 2, 3
  [dict.pointer2.a3]: async (ctx: Context) => {
    await ctx.reply(dict.pointer23.q, {
      parse_mode: "HTML",
      reply_markup: new Keyboard()
        .oneTime()
        .text(dict.pointer23.a1)
        .row()
        .text(dict.pointer23.a2)
        .row()
        .text(dict.pointer23.a3),
    });
  },

  // Pointer 2, 3, 1 (Done!)
  [dict.pointer23.a1]: async (ctx: Context) => {
    await ctx.replyWithSticker(
      "CAACAgIAAxkBAAIBDGOpPRsoB0AVWIWqtV2h_hvOCoj_AALcJQACcYM4ScGjYBVSpNimLAQ",
    );

    await ctx.reply(
      `Sizning charchoqingiz va kuyib-pishishingiz o'tib ketadi, siz dam olasiz va ` +
        `yangi kuch bilan qiziqarli loyihalarni qabul qila olasiz. Ruhiy va jismoniy ` +
        `salomatligingiz haqida qayg’urishni unutmang 😮‍💨`,
      {
        reply_markup: retry,
      },
    );
  },

  // Pointer 2, 3, 2 (Done!)
  [dict.pointer23.a2]: async (ctx: Context) => {
    await ctx.replyWithSticker(
      "CAACAgIAAxkBAAOlY6k2faHV6ng2L0zkdySFKTXL6Q4AAncoAAITojhJoZ5GzRfxCQwsBA",
    );

    await ctx.reply(
      `Ajoyib kayfiyat va ijobiy munosabat 2023-yilga yangi kuch bilan kirishga ` +
        `yordam beradi va ish yili o’ziga jalb qiladigan va qiziqarli bo'ladi. Siz ` +
        `archa daraxti yulduzidan yorqinroq porlaysiz. 🌟`,
      {
        reply_markup: retry,
      },
    );
  },

  // Pointer 2, 3, 3 (Done!)
  [dict.pointer23.a3]: async (ctx: Context) => {
    await ctx.replyWithSticker(
      "CAACAgIAAxkBAAIBD2OpPU-HkTBknoBNMTnDIvBcO5RcAAIoKwAC6vs5SXxAuHEifwVyLAQ",
    );

    await ctx.reply(
      `2023 yil jozibali va samarali bo'lishni va'da qilmoqda, siz dam ` +
        `olishingiz va yil davomida qo'lingiz tegmagan ishlarni tugatishingiz mumkin ` +
        `Hozir ko’tarinki kayfiyat bilan zaryadlang, 23 sizning yilingiz. ⚡️`,
      {
        reply_markup: retry,
      },
    );
  },
};

export default hook;
