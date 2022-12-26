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
      `Я вижу, что ты очень решительный и ответственный ` +
        `человек, который с умом подходит к любому заданию, ` +
        `будь то работа или другие дела. В 2023 году ты займешься ` +
        `решением грандиозных задач, будешь очень ` +
        `продуктивным и своим примером вдохновишь немало ` +
        `людей. ☄`,
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
      `Я вижу...вижу, что тебе пора отдохнуть и набраться сил. ` +
        `В 2023 году тебе предстоит научиться распределять свое ` +
        `время, отказываться от сверхурочной работы и продлевать ` +
        `дедлайны. Не забывай про отдых и сон! 💙`,
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
      `В 2023 тебя ждут большие успехи на работе. ` +
        `Все заметят, какой ты ценный сотрудник, но... ` +
        `только если ты научишься правильной организовывать ` +
        `свое время ⏱`,
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
      `Я вижу, что в 2023 ты справишься с тревожностью и ` +
        `примешь, что все все мы не идеальны и имеем право ошибаться. ` +
        `После этого работа пойдет легко и продуктивно! 🔥`,
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
      `В 2023 тебя ждет долгая работа над ошибками...коллег. Но не ` +
        `расстраивайся, это ненадолго! После того как вы поговорите и придете ` +
        `к компромиссу, работа пойдет гораздо легче и продуктивнее.`,
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
      `В 2023 тебя ждут жаркие споры и безудержные дебаты. ` +
        `Помни, что от критики и комментариев никто не защищен. ` +
        `Относитесь с позитивом к подобным неурядицам и работать станет гораздо приятнее 😇`,
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
      `Твоему самоконтролю можно позавидовать! В новом году ` +
        `тебя также ждет большое количество правок, но и хорошего ` +
        `не мало - ты освоишь новый навык и научишься смотреть на ` +
        `ситуации с разных сторон. 🫵🏻🦾`,
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
        .text([dict.pointer21.a1])
        .row()
        .text([dict.pointer21.a2]),
    });
  },

  // Pointer 2, 1, 1 (Done!)
  [dict.pointer21.a1]: async (ctx: Context) => {
    await ctx.replyWithSticker(
      "CAACAgIAAxkBAAPjY6k7wRzmniC8BcJbBos3VZ9lIjwAAlAmAALMCDlJ0kZVi7UqMm4sBA",
    );

    await ctx.reply(
      `Я вижу, что в 2023 году тебя ждут инетересные проекты ` +
        `и новые открытия. Но не все так радужно, свободного времени ` +
        `будет очень мало.. 🕑`,
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
      `В 2023 году тебя ждут интересные проекты и много работы, однако ` +
        `ты не будешь забывать отдыхать и заботиться о себе, что плодотворно ` +
        `скажется на реализации твоего потенциала. ☺️`,
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
      `В 2023 году твой потенциал будет реализован на максимум! Ты покоришь ` +
        `новые вершины, откроешь для себя много нового и не раз удивишь окружающих. 🗻`,
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
      `2023 год будет довольно продуктивным и полным новых впечатлений и возможностей. ` +
        `Ты сумеешь набраться сил и будешь полон энтузиазма заняться новыми проектами. 🙌🏻`,
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
      `Твоя усталость и выгорание пройдут, ты отдохнешь и сможешь взяться за ` +
        `интересные проекты с новыми силами. Не забывай про заботу о своем ментальном ` +
        `и физическом здоровье 😮‍💨`,
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
      `Отличное настроение и позитивный настрой помогут тебе войти в 2023 с новыми ` +
        `силами и рабочий год будет захватывающий и интересный. Ты будешь сиять ярче, чем ` +
        `звезда на новогодней елке. 🌟`,
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
      `2023 год обещает быть заманчивым и продуктивным, вы сможете отдохнуть и закончить ` +
        `дела, до которых весь год не доходили руки. Заряжайтесь позитивом уже сейчас, 23 - ` +
        `ваш год. ⚡️`,
      {
        reply_markup: retry,
      },
    );
  },
};

export default hook;
