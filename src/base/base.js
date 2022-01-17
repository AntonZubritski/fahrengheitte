let importAll = (context) => {
  return context
    .keys()
    .map(context)
    .map((a) => a.default);
};
const images = importAll(require.context("../img", false, /\.(png|jpe?g)$/));
const slide = images.filter((item) =>
  item.indexOf("slide") > 0 ? item : null
);
const review = images.filter((item) =>
  item.indexOf("review") > 0 ? item : null
);
const revPhoto = images.filter((item) =>
  item.indexOf("rev-photo") > 0 ? item : null
);
const tariff = images.filter((item) =>
  item.indexOf("tariff") > 0 ? item : null
);

export const base = { 
  aboutCourse: {
    id: 1,
    title: "О курсе",
    texts: [
      `Курс Fahrenheitte создан для тех, кто хочет больше понимать в 
                фотографии, в частности мобильной, развить визуальный вкус и уметь 
                красиво делиться своим видением с миром (например эстетично вести свой Инстаграм)`,
      `Курс не учит копировать меня - наоборот, главной задачей 
                является помочь вам обнаружить свой стиль и развить его.`,
      `Присоединяйтесь и я уверена, что у нас все получится.`,
    ],
  },
  userfulLinks: [{
    id: 1,
    title: "Способы передачи глубины пространства на фотографии",
    texts: ["https://telegra.ph/Sposoby-peredachi-glubiny-prostranstva-na-fotografii-ch1-09-15"],
  },
  {
    id: 2,
    title: "Естественный свет в фотографии",
    texts: ["http://letohin.livejournal.com/214988.html"],
  },
  {
    id: 3,
    title: "6 базовых схем освещения, которые должен знать каждый фотограф",
    texts: ["http://www.si-foto.com/6-bazovyih-shem-osveshheniya-kotoryie-dolzhen-znat-kazhdyiy-fotograf/"],
  },
  {
    id: 4,
    title: "Гармония цвета, или гармонизация в цветовой композиции",
    texts: ["http://www.bodu9.ru/statii/articles-about-working-with-color-in-the-visual-arts/garmoniya-cveta-ili-garmonizaciya-v-cvetovoj-kompozicii/"],
  },
  {
    id: 5,
    title: "What is equivalence and why should I care",
    texts: ["https://www.dpreview.com/articles/2666934640/what-is-equivalence-and-why-should-i-care"],
  },
  {
    id: 6,
    title: "Как снимать незнакомых людей на улице",
    texts: ["https://varlamov.ru/975569.html"],
  },
  {
    id: 7,
    title: "Секреты черно-белой съемки",
    texts: ["https://nat-geo.ru/photo-secrets/sekrety-cherno-beloy-semki/"],
  },
  {
    id: 8,
    title: "Геометрия снимка",
    texts: ["https://mi3ch.livejournal.com/4507347.html"],
  },
  {
    id: 9,
    title: "Философия квадрта",
    texts: ["http://photo-element.ru/analysis/aks/aks.html"],
  }],
  courseProgram: [
    {
      id: 1,
      title: "Вдохновение, варианты стилистки",
      texts: [
        "Что такое точки съемки?",
        "Какие бывают планы в фотографии?",
        "Основные типы композиций",
        "Элементы композиции: линия, фигура, текстура, узор, цвет",
        "Перспектива",
        "Роль кадрирования",
        "Перспектива",
        "Правило третей",
        "Точка фокусировки взгляда",
        "Цвет как элемент композиции",
      ],
    },
    {
      id: 2,
      title: "Компоненты удачного кадра",
      texts: [
        "Съемка пейзажей",
        "Мои секретные ингредиенты гармоничной ленты",
        "Как свет влияет на черты лица и пропорции тела?",
        "Типы света",
        "Элементы композиции: линия, фигура, текстура, узор, цвет",
        "Перспектива",
        "Роль кадрирования",
      ],
    },
    {
      id: 3,
      title: "Портрет, автопортрет + интервью от стилиста и визажиста",
      texts: [
        "Съемка пейзажей",
        "Мои секретные ингредиенты гармоничной ленты",
        "Как свет влияет на черты лица и пропорции тела?",
        "Типы света",
        "Элементы композиции: линия, фигура, текстура, узор, цвет",
        "Перспектива",
        "Роль кадрирования",
      ],
    },
    {
      id: 4,
      title: "Снимаем пейзаж/архитектуру ",
      texts: [
        "Съемка пейзажей",
        "Мои секретные ингредиенты гармоничной ленты",
        "Как свет влияет на черты лица и пропорции тела?",
        "Типы света",
        "Элементы композиции: линия, фигура, текстура, узор, цвет",
        "Перспектива",
        "Роль кадрирования",
      ],
    },
    {
      id: 5,
      title: "Натюрморт + раскладки и мастеркласс с советами от художницы",
      texts: [
        "Съемка пейзажей",
        "Мои секретные ингредиенты гармоничной ленты",
        "Как свет влияет на черты лица и пропорции тела?",
        "Типы света",
        "Элементы композиции: линия, фигура, текстура, узор, цвет",
        "Перспектива",
        "Роль кадрирования",
      ],
    },
    {
      id: 6,
      title: "Обработка на ноутбуке и на телефоне — большой урок",
      texts: [
        "Съемка пейзажей",
        "Мои секретные ингредиенты гармоничной ленты",
        "Как свет влияет на черты лица и пропорции тела?",
        "Типы света",
        "Элементы композиции: линия, фигура, текстура, узор, цвет",
        "Перспектива",
        "Роль кадрирования",
      ],
    },
    {
      id: 7,
      title:
        "Принципы сочетаемости и ее необходимость (стоит ли и если да — то как это делать)",
      texts: [
        "Съемка пейзажей",
        "Мои секретные ингредиенты гармоничной ленты",
        "Как свет влияет на черты лица и пропорции тела?",
        "Типы света",
        "Элементы композиции: линия, фигура, текстура, узор, цвет",
        "Перспектива",
        "Роль кадрирования",
      ],
    },
    {
      id: 8,
      title: "Оформление сторис и интервью с дизайнером",
      texts: [
        "Съемка пейзажей",
        "Мои секретные ингредиенты гармоничной ленты",
        "Как свет влияет на черты лица и пропорции тела?",
        "Типы света",
        "Элементы композиции: линия, фигура, текстура, узор, цвет",
        "Перспектива",
        "Роль кадрирования",
      ],
    },
    {
      id: 9,
      title:
        "Альтернативные примеры и стилистики ведения странички, современная фотография и ее влияние",
      texts: [
        "Съемка пейзажей",
        "Мои секретные ингредиенты гармоничной ленты",
        "Как свет влияет на черты лица и пропорции тела?",
        "Типы света",
        "Элементы композиции: линия, фигура, текстура, узор, цвет",
        "Перспектива",
        "Роль кадрирования",
        "Съемка пейзажей",
        "Мои секретные ингредиенты гармоничной ленты",
        "Как свет влияет на черты лица и пропорции тела?",
        "Типы света",
      ],
    },
    {
      id: 10,
      title: "Онлайн вебинар с вопросами, ответами и практикой",
      texts: [
        "Съемка пейзажей",
        "Мои секретные ингредиенты гармоничной ленты",
        "Как свет влияет на черты лица и пропорции тела?",
        "Типы света",
        "Элементы композиции: линия, фигура, текстура, узор, цвет",
        "Перспектива",
        "Роль кадрирования",
      ],
    },
    {
      id: 11,
      title: "Урок посвящённый использованию Инстаграм в коммерческих целях",
      texts: [
        "Съемка пейзажей",
        "Мои секретные ингредиенты гармоничной ленты",
        "Как свет влияет на черты лица и пропорции тела?",
        "Типы света",
        "Элементы композиции: линия, фигура, текстура, узор, цвет",
        "Мои секретные ингредиенты гармоничной ленты",
        "Как свет влияет на черты лица и пропорции тела?",
        "Типы света",
      ],
    },
    {
      id: 12,
      title:
        "Дополнительное видео и материалы, которые вам пригодятся в дальнейшей работе",
      texts: [
        "Съемка пейзажей",
        "Мои секретные ингредиенты гармоничной ленты",
        "Как свет влияет на черты лица и пропорции тела?",
        "Типы света",
        "Элементы композиции: линия, фигура, текстура, узор, цвет",
        "Перспектива",
        "Роль кадрирования",
      ],
    },
  ],
  review: {
    image: [review[0], review[1], review[2]],
    text: [
      {
        id: 0,
        name: "Василиса Анисимова",
        inst: "vas_an",
        avatar: revPhoto[0],
        textReview: [
          `Спасибо за такой курс, очень понравилось простое и понятное изложение материала. 
                    Теперь мой профиль в инстаграме стильный и привлекательный для меня самой в первую 
                    очередь и я вижу, по реакциям, что не только для меня)`,
          `Сейчас использую правила при создании своих фотографий. Раньше это было интуитивно 
                    и иногда я не понимала, что не так с фотографией. Очень давольна!)`,
        ],
      },
      {
        id: 1,
        name: "Aнтон Федорасов",
        inst: "fedoras",
        avatar: revPhoto[1],
        textReview: [
          "Спасибо за такой курс, очень понравилось простое и понятное изложение материала.",
          "Сейчас использую правила при создании своих фотографий.",
        ],
      },
    ],
  },
  tariffs: [
    {
      id: 0,
      title: "Основной",
      background: tariff[0],
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
               incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`,
      price: "20$",
    },
    {
      id: 1,
      title: "Продвинутый",
      background: tariff[1],
      text: `quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
               consequat. Duis aute irure dolor in reprehenderit in `,
      price: "30$",
    },
  ],
};
