import CHARACTERS, { CATEGORIES } from './characters';

const QUESTIONS = [
  {
    title: 'У Slack надаю перевагу:',
    answers: [
      {
        text: 'Розважальному контенту (#меми, random, astro_geek etc)',
        category: CATEGORIES.FUN
      },
      {
        text: 'Офіційному контенту (#general, team-chats, insusance questions ets.)',
        category: CATEGORIES.STRICT
      },
    ],
  },
  {
    title: 'Мій день починається з',
    answers: [
      {
        text: 'чату "меми"',
        character: CHARACTERS.OFFICE_JOKER.key,
      },
      {
        text: 'кави',
        character: CHARACTERS.COFFEE_ADDICTED.key,
      },
      {
        text: 'смачного сніданку',
        character: CHARACTERS.FOODIE.key,
      },
      {
        text: 'з новин вчорашнього дня',
        character: CHARACTERS.CHATTERBOX.key,
      },
      {
        text: '"раночку"',
        character: CHARACTERS.WORKAHOLIC.key,
      },
      {
        text: 'го в руму',
        character: CHARACTERS.SCHEDULER.key,
      },
      {
        text: 'чату "general"',
        character: CHARACTERS.GEEK.key,
      },
      {
        text: 'вічно кудись їду',
        character: CHARACTERS.BMW.key,
      },
    ],
  },
  {
    title: 'Що на обід?',
    answers: [
      {
        text: 'вмовлю всіх в тімі скинутися на піцу',
        character: CHARACTERS.OFFICE_JOKER.key,
      },
      {
        text: 'кава',
        character: CHARACTERS.COFFEE_ADDICTED.key,
      },
      {
        text: 'пишу в фудордерінг, точно шось замовимо',
        character: CHARACTERS.FOODIE.key,
      },
      {
        text: 'візьму те, що лишиться в автоматі з снеками',
        character: CHARACTERS.CHATTERBOX.key,
      },
      {
        text: 'нема обіду, дедлайни горять',
        character: CHARACTERS.WORKAHOLIC.key,
      },
      {
        text: 'мій судочок завжди зі мною',
        character: CHARACTERS.SCHEDULER.key,
      },
      {
        text: 'Каютка',
        character: CHARACTERS.GEEK.key,
      },
      {
        text: 'поїду в якийсь заклад',
        character: CHARACTERS.BMW.key,
      },
    ],
  },
  {
    title: 'Як справи з дедлайнами?',
    answers: [
      {
        text: 'дедлайни - ху...',
        character: CHARACTERS.OFFICE_JOKER.key,
      },
      {
        text: "от, вип'ю кави і йду, бо все горить",
        character: CHARACTERS.COFFEE_ADDICTED.key,
      },
      {
        text: 'незнаю, але я б поїв/ла. Піцу будеш?',
        character: CHARACTERS.FOODIE.key,
      },
      {
        text: 'колеги завжди підстрахують',
        character: CHARACTERS.CHATTERBOX.key,
      },
      {
        text: 'я починаю працювати зі світанком, то ви як думаєте?',
        character: CHARACTERS.WORKAHOLIC.key,
      },
      {
        text: 'я вношу все в календар на відміну від інших дурників, тому в мене все топчик',
        character: CHARACTERS.SCHEDULER.key,
      },
      {
        text: 'вони горять, а я не парюся і все якось завжди вирішується',
        character: CHARACTERS.GEEK.key,
      },
      {
        text: 'все просто. вони горять',
        character: CHARACTERS.BMW.key,
      },
    ],
  },
  {
    title: 'Шо там по відпустці?',
    answers: [
      {
        text: 'поїду всеодно де, аби з веселою команією',
        character: CHARACTERS.OFFICE_JOKER.key,
      },
      {
        text: 'спробую Туреччину, кажуть там найсмачніша кава',
        character: CHARACTERS.COFFEE_ADDICTED.key,
      },
      {
        text: 'ммм, мі амор Італія - країна харчових шедеврів',
        character: CHARACTERS.FOODIE.key,
      },
      {
        text: 'поїду туди, куди порекомедують друзі',
        character: CHARACTERS.CHATTERBOX.key,
      },
      {
        text: 'воркейшин на морьку - мій ідеальний варік, аби ноут працював.',
        character: CHARACTERS.WORKAHOLIC.key,
      },
      {
        text: 'запланую вже наступного року, бо того вже все розписано',
        character: CHARACTERS.SCHEDULER.key,
      },
      {
        text: 'зберу тусовку Гіків і поїдемо разом аби-куди',
        character: CHARACTERS.GEEK.key,
      },
      {
        text: 'автотревел-чисто мій відпочинок',
        character: CHARACTERS.BMW.key,
      },
    ],
  },
];

export default QUESTIONS
