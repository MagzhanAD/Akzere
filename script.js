// ============================================================
// «Ақзере 2» balabaqsha — i18n (KK / RU) + Mobile Menu
// ============================================================

const translations = {
  kk: {},
  ru: {
    "topbar.hours": "Пн–Пт: 08:00–18:00",
    "topbar.city": "г. Алматы, Наурызбайский район, ул. Жунисова, 133/341",

    "brand.tagline": "частный детский сад",

    "nav.about": "О нас",
    "nav.advantages": "Преимущества",
    "nav.gallery": "Галерея",
    "nav.documents": "Документы",
    "nav.contact": "Контакты",

    "hero.eyebrow": "✨ Частный детский сад в Наурызбайском районе",
    "hero.title": "Первые шаги вашего ребёнка —<br>пусть начнутся в мире спокойствия и радости",
    "hero.lead": "Детский сад «Ақзере 2» — светлая и уютная среда для детей от 2 до 6 лет в тихом Наурызбайском районе Алматы. Каждый день — новое знание, новый друг и маленькая победа.",
    "hero.cta1": "Записаться на экскурсию",
    "hero.cta2": "Узнать о программе",
    "hero.stat1": "года, возраст воспитанников",
    "hero.stat2": "рабочих дней, Пн–Пт",
    "hero.stat3": "языка: казахский, русский, английский",

    "about.tag": "О нас",
    "about.title": "Детский сад «Ақзере 2»",
    "about.lead": "У каждого ребёнка свой темп. Наша задача — не торопить его, а поддержать любопытство и каждый день добавлять немного уверенности.",
    "about.p1": "«Ақzере 2» — частный детский сад в Наурызбайском районе Алматы, по адресу улица Жуалы, 79. Воспитатели, педагоги дополнительного развития и медицинский работник работают одной командой и каждый день заботятся о здоровье и безопасности детей.",
    "about.p2": "Режим дня строим на балансе игры и занятий: дети учатся говорить на казахском, русском и английском, развивают счёт и логику, поют, рисуют и занимаются физической активностью — в темпе, подходящем их возрасту.",
    "about.p3": "Для нас важно не просто присмотреть за ребёнком, а сделать дошкольные годы интересными и наполненными смыслом — и заложить прочную основу для будущего.",
    "about.factTitle": "Коротко о детском саде",
    "about.fact1k": "Город",
    "about.fact2k": "Адрес",
    "about.fact2v": "Наурызбайский район, ул. Жунисова, 133/341",
    "about.fact3k": "Возраст воспитанников",
    "about.fact4k": "Рабочие дни",
    "about.fact4v": "Пн–Пт",
    "about.fact5k": "Языки обучения",
    "about.fact5v": "КАЗ / РУС",

    "adv.tag": "Наши преимущества",
    "adv.title": "Почему родители доверяют «Ақзере 2»",
    "adv.c1t": "Безопасное пространство",
    "adv.c1p": "Огороженная территория, круглосуточное видеонаблюдение и медицинский кабинет для контроля здоровья ребёнка.",
    "adv.c2t": "Воспитание с теплотой",
    "adv.c2p": "Индивидуальный подход к каждому ребёнку и команда опытных, квалифицированных воспитателей.",
    "adv.c3t": "Открытия и развитие",
    "adv.c3p": "Языковые занятия, творчество, музыка и логика — по программе, адаптированной под возраст группы.",
    "adv.c4t": "Мир игры",
    "adv.c4p": "Отдельные зоны для прогулок и активных игр на свежем воздухе для каждой возрастной группы.",

    "gal.tag": "Дни в детском саду",
    "gal.title": "Как проходит день наших воспитанников",
    "gal.lead": "Фотографии групп и мероприятий будут добавляться по мере наполнения сайта. Пока — направления, которыми живёт наш сад.",
    "gal.g1t": "Час творчества",
    "gal.g1d": "Рисование, лепка, аппликация",
    "gal.g2t": "Ритм и песни",
    "gal.g2d": "Песни, танцы, музыкальные инструменты",
    "gal.g3t": "Под открытым небом",
    "gal.g3d": "Игровые площадки, прогулки, экскурсии",
    "gal.g4t": "Мышление и счёт",
    "gal.g4d": "Развивающие игры и задачи",
    "gal.g5t": "Забота и здоровье",
    "gal.g5d": "Медицинский контроль, режим дня",
    "gal.g6t": "Говорим на трёх языках",
    "gal.g6d": "Казахский, русский, английский",

    // Документы
    "docs.pageTitle": "Документы — Детский сад «Ақзере 2»",
    "docs.tag": "Официальная информация",
    "docs.title": "Документы детского сада",
    "docs.lead": "В этом разделе вы можете ознакомиться и скачать все официальные документы, лицензии и сертификаты детского сада.",
    "docs.downloadBtn": "Скачать",

    "doc.rent": "Договор аренды",
    "doc.gift": "Договор дарения жилого дома расположенного на земельном участке",
    "doc.buildingPlan": "План строения",
    "doc.evacPlan": "План эвакуации",
    "doc.protocol": "Протокол",
    "doc.sanitary": "Санитарно-эпидемиологическое заключение",
    "doc.knowledgeCheck": "Сведения о проверке знаний",
    "doc.certificate": "Сертификат",
    "doc.propertyRef": "Справка о зарегистрированных правах (обременениях) на недвижимое имущество и его технических характеристиках",
    "doc.techPass": "Технический паспорт",
    "doc.techSpecs": "Технические характеристики сооружения",
    "doc.noticeSat": "Уведомление ТОО Сәт-Береке",
    "doc.evacSimulator": "Эвакуационный тренажер в случае пожара",

    "contact.tag": "Свяжитесь с нами",
    "contact.title": "Будем рады ответить на ваши вопросы",
    "contact.cardTitle": "Контактная информация",
    "contact.addrLabel": "Адрес",
    "contact.addrValue": "г. Алматы, Наурызбайский район, ул. Жунисова, 133/341",
    "contact.phoneLabel": "Телефон",
    "contact.hoursLabel": "Режим работы",
    "contact.hoursValue": "Пн–Пт: 08:00 – 18:00<br>Сб, Вс: выходной",

    "footer.about": "Частный детский сад в Наурызбайском районе города Алматы, ул. Жунисова, 133/341. Забота, безопасность и развитие каждый день.",
    "footer.sections": "Разделы",
    "footer.contacts": "Контакты",
    "footer.copy": "© 2026 Детский сад «Ақzере 2». Все права защищены."
  }
};

(function initI18n() {
  const textNodes = document.querySelectorAll("[data-i18n]");
  const htmlNodes = document.querySelectorAll("[data-i18n-html]");

  textNodes.forEach(el => {
    const key = el.getAttribute("data-i18n");
    translations.kk[key] = translations.kk[key] || el.textContent;
  });
  htmlNodes.forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    translations.kk[key] = translations.kk[key] || el.innerHTML;
  });

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.kk;

    textNodes.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    htmlNodes.forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem("akzere-lang", lang); } catch (e) { /* ignore */ }
  }

  let savedLang = "kk";
  try {
    savedLang = localStorage.getItem("akzere-lang") || "kk";
  } catch (e) { /* ignore */ }

  applyLanguage(savedLang);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
  });
})();

// ---------- Mobile menu ----------
(function initMenu() {
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("navLinks");
  if (!burger || !nav) return;

  burger.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });
})();

// ---------- ScrollSpy ----------
(function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navlinks a[href^='#']");

  if (!sections.length || !navLinks.length) return;

  function onScroll() {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    const offset = 120; 

    sections.forEach(section => {
      const top = section.offsetTop - offset;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
})();
