// ============================================================
// «Ақзере» balabaqsha — i18n (KK default / RU) + mobile menu
// ============================================================

const translations = {
  kk: {
    // values are already in the HTML as the default (Kazakh) text,
    // so this object stays empty — switching to "kk" just restores
    // the original textContent/innerHTML that was saved on load.
  },
  ru: {
    "topbar.hours": "Пн–Пт: 08:00–18:00",
    "topbar.city": "г. Алматы, Наурызбайский район",

    "brand.tagline": "частный детский сад · Алматы",

    "nav.about": "О нас",
    "nav.advantages": "Преимущества",
    "nav.gallery": "Галерея",
    "nav.contact": "Контакты",

    "hero.eyebrow": "🌱 Частный детский сад в Наурызбайском районе",
    "hero.title": "Первые шаги вашего ребёнка —<br><span class=\"accent\">в надёжных и заботливых руках</span>",
    "hero.lead": "Детский сад «Ақзере» — тёплая семейная атмосфера, забота о здоровье и раннее развитие для детей от 1 до 6 лет в спокойном районе Алматы.",
    "hero.cta1": "Записаться на встречу",
    "hero.cta2": "Узнать больше",
    "hero.stat1": "лет, возраст воспитанников",
    "hero.stat2": "дней, рабочая неделя Пн–Пт",
    "hero.stat3": "языка: казахский, русский, английский",

    "about.tag": "О нас",
    "about.title": "Детский сад «Ақзере»",
    "about.lead": "Мы создаём тёплую, безопасную и развивающую среду, где каждый ребёнок растёт уверенным, любознательным и счастливым.",
    "about.p1": "«Ақзере» — частный детский сад, расположенный в Наурызбайском районе города Алматы. Наш коллектив состоит из опытных воспитателей, педагогов дополнительного развития и медицинского персонала, которые ежедневно заботятся о здоровье, безопасности и всестороннем развитии воспитанников.",
    "about.p2": "Мы строим свою работу на балансе структурированных занятий и свободной игры: дети изучают казахский, русский и английский языки, знакомятся с основами математики и логики, занимаются творчеством, музыкой и физическим развитием — в комфортном темпе, соответствующем возрасту.",
    "about.p3": "Наша цель — не просто присмотр за детьми, а формирование прочного фундамента для дальнейшего обучения и самостоятельности ребёнка.",
    "about.factTitle": "Коротко о детском саде",
    "about.fact1k": "Город",
    "about.fact2k": "Район",
    "about.fact2v": "Наурызбайский район",
    "about.fact3k": "Возраст воспитанников",
    "about.fact4k": "Рабочие дни",
    "about.fact4v": "Пн–Пт",
    "about.fact5k": "Языки обучения",
    "about.fact5v": "КАЗ / РУС / ENG",

    "adv.tag": "Наши преимущества",
    "adv.title": "Почему родители выбирают «Ақзере»",
    "adv.c1t": "Безопасная среда",
    "adv.c1p": "Огороженная территория, круглосуточное видеонаблюдение и медицинский кабинет для контроля здоровья детей.",
    "adv.c2t": "Заботливое воспитание",
    "adv.c2p": "Индивидуальный подход к каждому ребёнку и опытная команда воспитателей с профильным образованием.",
    "adv.c3t": "Активное развитие",
    "adv.c3p": "Языковые занятия, творчество, музыка и логика — программа адаптирована под возраст каждой группы.",
    "adv.c4t": "Игровые площадки",
    "adv.c4p": "Отдельные зоны для прогулок и активных игр на свежем воздухе для разных возрастных групп.",

    "gal.tag": "Жизнь детского сада",
    "gal.title": "Чем занимаются наши воспитанники",
    "gal.lead": "Фотографии групп и мероприятий появятся здесь по мере наполнения сайта. Пока — направления, которыми живёт наш сад.",
    "gal.g1t": "Творчество",
    "gal.g1d": "Рисование, лепка, аппликация",
    "gal.g2t": "Музыка и ритмика",
    "gal.g2d": "Песни, танцы, инструменты",
    "gal.g3t": "Прогулки на природе",
    "gal.g3d": "Игровые площадки, экскурсии",
    "gal.g4t": "Логика и счёт",
    "gal.g4d": "Развивающие игры и задачи",
    "gal.g5t": "Забота и здоровье",
    "gal.g5d": "Медицинский контроль, режим дня",
    "gal.g6t": "Языковое развитие",
    "gal.g6d": "Казахский, русский, английский",

    "contact.tag": "Свяжитесь с нами",
    "contact.title": "Будем рады ответить на ваши вопросы",
    "contact.cardTitle": "Контактная информация",
    "contact.addrLabel": "Адрес",
    "contact.addrValue": "г. Алматы, Наурызбайский район",
    "contact.phoneLabel": "Телефон",
    "contact.hoursLabel": "Режим работы",
    "contact.hoursValue": "Пн–Пт: 08:00 – 18:00<br>Сб, Вс: выходной",

    "footer.about": "Частный детский сад в Наурызбайском районе города Алматы. Забота, безопасность и развитие каждый день.",
    "footer.sections": "Разделы",
    "footer.contacts": "Контакты",
    "footer.copy": "© 2026 Детский сад «Ақзере». Все права защищены."
  }
};

(function initI18n() {
  // Snapshot the original (Kazakh) content so we can switch back to it.
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

// ---------- mobile menu ----------
(function initMenu() {
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("navLinks");
  if (!burger || !nav) return;

  burger.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });
})();

// ---------- ScrollSpy (отслеживание активной секции при прокрутке) ----------
(function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navlinks a[href^='#']");

  if (!sections.length || !navLinks.length) return;

  function onScroll() {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    // Отступ с учетом высоты липкого хедера
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
  // Вызываем при загрузке страницы, чтобы сразу подсветить текущую секцию
  onScroll();
})();