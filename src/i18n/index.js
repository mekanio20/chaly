import { createI18n } from "vue-i18n";

const messages = {
  tm: {
    // ABOUT
    title1: "Baş sahypa",
    title2: "Kompaniýa barada",
    title3: "«CHALY» söwda hyzmaty",
    title4: "− «CHALY» kompaniýalar toparynyň hyzmat kompaniýasydyr.",
    title5: "Esasy ugur",
    title6:
      "energetika, nebit gaýtadan işlemek we nebit transporty pudaklarynda tehnologik enjamlaryň gurnalmagy we arassalanmagy boýunça hyzmatlary ýerine ýetirmekdir.",
    title7: "Kompaniýanyň maksady",
    title8:
      "önümçilikde tehnologiki amallaryň netijeliligini ýokarlandyrmak we enjamlaryň bejeriş aralygyny uzaltmakdyr.",
    title9: "Kompaniýanyň binýady",
    title10:
      "− tehnologik enjamlaryň arassalanmagy we bejerilmegi boýunça uly tejribesi bolan hyzmat inženerler toparydyr.",
    title11: "Binalaryň we desgalaryň inžener ulgamlary boýunça hyzmat",
    title12: "Ähli hyzmatlar",
    title13: "Biziň müşderilerimiz",
    title14: "Soragyňyzy iberiň, biz size jaň ederis",
    title15: "Adyňyz we familiýaňyz*",
    title16: "E-poçtaňyz *",
    title17: "Habaryňyz*",
    title18: "Ugrat",
    // CAREER
    title19: "Karýera",
    title20:
      "«CHALY» söwda hyzmaty kompaniýasynyň işgärleri – kompaniýanyň iň gymmatly baýlygydyr.",
    title21:
      "Biz işgärlerimiziň netijä ýetmäge bolan islegini, toparlaýyn işlemek we jogapkärçiligi öz üstüne almak ukybyny ýokary baha berýäris.",
    title22:
      "«CHALY» söwda hyzmaty işgärlerine şahsy mümkinçiliklerini açmak we kärýera ösüşi üçin giň mümkinçilikleri hödürleýär.",
    title23:
      "Işgärleriň netijeli işlemegi, ösmegi we täze zatlary öwrenmegi – uzak möhletli üstünlik üçin möhüm şertdir.",
    title24:
      "Demokratik dolandyryş usuly işgärleriň özlerini toparyň bir bölegi hökmünde duýmagyna we kompaniýanyň ösüşine işjeň gatnaşmagyna mümkinçilik berýär.",
    title25:
      "Täze ugurlary ösdürmek we iş gerimini giňeltmek bilen baglylykda, size açyk wezipeleri hödürleýäris:",
    title26: "Wezipe 1: Obýekt inženeri",
    title27: "Wezipeler",
    title28:
      "Müşderi bilen işleşmek, taslama boýunça tehniki resminamalary we nyrhlary ylalaşmak;",
    title29:
      "Obýektiň hasaplamalaryny geçirmek, bahalary, üýtgetmeleri ylalaşmak, müşderi bilen maslahatlaşmalara gatnaşmak;",
    title30: "Obýektlerde işleýän toparlary gurnamak;",
    title31: "Işiň barşyna gözegçilik etmek, hyzmat toparlaryny utgaşdyrmak;",
    title32: "Taslamanyň ýerine ýetirilmegini müşderi bilen doly utgaşdyrmak;",
    title33: "Taslamalary optimizirlemek we amatly teklipleri hödürlemek;",
    title34: "Kompaniýanyň baş inženerine hasabat bermek",
    title35: "Talaplar",
    title36: "Tehniki ýokary bilim (hökmany däl, ýöne arzuw edilýär);",
    title37: "Iş tejribesi 7 ýyldan az bolmaly däldir;",
    title38: "Senagat we inžener ulgamlarynda tejribe bolmaly;",
    title39:
      "Enjamlar barada bilim (wentalýasiýa ulgamlary, ýylylyk çalşyjylar, armaturlar);",
    title40:
      "Inžener ulgamlary boýunça gurnama işleri ýerine ýetirmegiň tejribesi;",
    title41: "Kompýuter programmalary bilen işlemegi başarýan bolmaly;",
    title42: "Jogapkärçilikli, mobil we işde jedellerden gaça durýan bolmaly;",
    title43: "Emosional durnuklylyk we hyzmatdaşlyk islegi;",
    title44: "Şahsy awtoulag bolmaly.",
    title45: "Şertler",
    title46: "Kärýera we hünär ösüşi üçin mümkinçilikler;",
    title47: "Iş tertibi: 5/2, 09:00-18:00;",
    title48: "Sazlaşykly iş tertibi;",
    title49: "Eziz ýerlere iş saparlary bolup biler;",
    title50:
      "Düzgünleşdirilen aýlyk + üstünlikli tamamlanan taslamalardan girdeji.",
    title51:
      "Toparymyzyň bir bölegi bolmak isleseňiz, öz terjimehalyňyzy aşakdaky salga ugradyp bilersiňiz:",
    // CONTACT
    title52: "Habarlaşmak üçin",
    title53: "«CHALY» söwda hyzmaty kompaniýasynyň doly maglumatlary",
    title54: "Ýuridik salgysy:",
    title55: "Ofise nädip baryp bolýar",
    title56: "Faktiki salgysy",
    title57: "Telefon",
    title58: "E-poçta",
    title59: "Iş wagty",
    title60: "Duşenbe-anna 9:00-18:00",
    title61: "Soraglaryňyz barmy?",
    title62: "Biz size jaň ederis",
    title63: "Meniň bilen habarlaşyň",
    // HOME
    title64: "«Çaly-Serwis» kompaniýasy",
    title65: "“Çaly” kompaniýasy islendik gurluşyk desgalarynyň çydamlylygyny we ygtybarlylygyny üpjün edýän ýokary hilli gurluşyk materiallaryny öndürmek maksady bilen 2007-nji ýylda esaslandyryldy.",
    title67: "«Çaly» kompaniýasy 2007-nji ýylda islendik gurluşyk desgasynyň uzak möhletleýinligini we ygtybarlylygyny üpjün edýän ýokary hilli gurluşyk materiallaryny öndürmek maksady bilen esaslandyryldy.",
    title68: "Kompaniýa özüniň iş ýyllarynyň dowamynda iň ýokary hil standartlaryna laýyk gelýän önümleri we hyzmatlary hödürlemek bilen, ýerine ýetirýän iş ugurlaryny ep-esli artdyrdy.",
    title70: "Işlerimiz",
    title71: "Täzelikler",
    title72: "Has giňişleýin",
    title73: "Ähli işler",
    // SERVICE
    title74: "Hyzmatlarymyz",
    title75: "Senagat kärhanalary, nebit gaýtadan işleýiş we nebithimiýa kompaniýalary",
    title76: "«Chaly» Trading Service-iň iş ugruna enjamlary arassalamak we gurnamak girýär - biz energiýa we nebiti gaýtadan işleýän kärhanalara hyzmat berýäris, şeýle hem binalaryň we desgalaryň inžener ulgamlaryny sazlamak boýunça hyzmatlary ýerine ýetirýäris.",
    title77: "Turba arassalamak, enjam gurnamak we ş.m. bilen baglanyşykly ähli işler ýöriteleşdirilen enjamlar arkaly ýokary derejeli hünärmenler tarapyndan ýerine ýetirilýär, bu bolsa ýokary hilli, enjamlaryň işden çykma wagtynyň azalmagyna we býudjet serişdeleriniň tygşytly sarp edilmegine mümkinçilik berýär. Ulanylýan tehnologiýanyň we ýerine ýetiriş usulynyň saýlanylyşy ulgamyň ýagdaýynyň, taslama aýratynlyklarynyň we ulanyş möhletiniň çuňňur seljermesine esaslanýar. Bu çemeleşme işgärleriň howpsuzlygyny we enjamlaryň abadan saklanylmagyny üpjün edýär.",
    title78: "Hyzmatlarymyz we ulanylýan usullarymyz barada giňişleýin maglumat almak üçin bize (65) 60-90-09 telefon belgisi arkaly jaň ediň.",
    // COMPONENTS
    title79: "Sertifikatlar",
    title80: "Kompaniýanyň Üstünlikleri",
    title81: "Soraglara Çalt Jogap",
    title82: "Işiň Ýokary Hilli",
    title83: "Müşderi Üçin Aýratyn Himiki Reagentleri Saýlamak",
    title84: "10 Ýyldan Gowrak Tejribeli Hünärmenler",
    title85: "Düşük Bahalar, Sebäbi Çykdajylary Azaltýarys",
    title86: "Gysga Wagtda Işe Başlamak we Çalt Hereket",
    title87: "Biziň Habarlaşmak Maglumatlarymyz",
    title88: "Gözleg",
    title89: "Hyzmatlar",
    title90: "Sahypanyň Bölümleri",
    title91: "Biziň Habarnamamyza Abuna Ýazyl",
    title92: "Bu Meýdany Boş Goýuň.",
    title93:
      "Kompaniýanyň ähli aksiýalary we täzilikleri barada birinji bolup habar almak üçin habarnamaya abuna ýazylyň",
    title94: "Ady",
    title95: "Poçta gutuňyzy barlaň we abuna ýazylmagyňyzy tassyklaň.",
    title96: "Ulanyjy Ylalaşygy",
    title97: "Şahsy maglumatlary işlemek üçin.",
    title98: "Yzyna Jaň",
  },
  ru: {
    // ABOUT
    title1: "Главная",
    title2: "О компании",
    title3: "«Чалы Трейдинг Сервис»",
    title4: "− является сервисной компанией группы компаний «Чалы».",
    title5: "Основное направление",
    title6:
      "это оказании услуг по сервису, очистке и монтажу технологического оборудования на предприятиях малой и крупной энергетики, нефтепереработки и нефтетранспортировки.",
    title7: "Целью компании",
    title8:
      "является повышение эффективности технологических процессов на производстве и увеличение межремонтных сроков оборудования.",
    title9: "Основа компании",
    title10:
      "− сплоченная команда сервисных инженеров имеющих большой опыт в оказании услуг по очистке и ремонту технологического оборудования.",
    title11: "Сервис инженерных систем зданий и сооружений",
    title12: "Все услуги",
    title13: "Наши клиенты",
    title14: "Оставьте свою заявку и мы вам перезвоним",
    title15: "Ваше Ф.И.О*",
    title16: "Ваш Email *",
    title17: "Ваше сообщение*",
    title18: "Отправить",
    // CAREER
    title19: "Карьера",
    title20:
      "Коллектив компании ООО «Чалы Трейдинг Сервис» её основная ценность.",
    title21:
      "Мы ценим в своих работниках стремление к достижению результата, готовность работать в команде и брать на себя ответственность.",
    title22:
      "ООО «Чалы Трейдинг Сервис» предоставляет широкие возможности для раскрытия собственного потенциала и карьерного роста своих работников. Наш коллектив это команда профессионалов, которая реализует сложные технические проекты на предприятиях нефтегазового сектора и энергетики.",
    title23:
      "Готовность и способность персонала плодотворно работать, развиваться, учиться новому  залог долгосрочного совместного успеха. Мы уделяем серьезное внимание повышению профессионального уровня коллектива, проводим внутрикорпоративное и внешнее обучение.",
    title24:
      "Демократичный стиль управления позволяет нашим сотрудникам чувствовать себя частью команды и активно участвовать в развитии компании. Мы приветствуем инновационные идеи и нестандартные решения сотрудников. Доверие и сотрудничество – на этих постулатах строится корпоративная культура Чалы.",
    title25:
      "В связи с развитием новых направлений, и увеличением объемов работ, представляем вашему вниманию открытые вакансии:",
    title26: "Вакансия 1: Инженер объекта",
    title27: "Обязанности",
    title28:
      "Активное взаимодействие с заказчиком до начала работ, согласование смет, регламентирующей документации по объекту (теплоснабжение, вентиляция, канализация);",
    title29:
      "Расчет объекта, согласование цен, изменений, правок, участие в совещаниях заказчика по планированию работ;",
    title30: "Организация бригад по выполнению работ на объектах;",
    title31: "Контроль ведения работ, курирование сервисных бригад;",
    title32:
      "Стратегическое и тактическое взаимодействие с заказчиком на весь период до сдачи объекта;",
    title33:
      "Оптимизация затрат, внесение рациональных предложений по реализации проектов (технические, экономические предложения);",
    title34: "Подчинение главному инженеру компании",
    title35: "Требования",
    title36: "Высшее техническое образование (желательно);",
    title37: "Подтвержденный релевантный опыт работы от 7 лет обязательно;",
    title38:
      "Опыт ведения работ на объектах промышленного и коммунального sназначения (инженерия)",
    title39:
      "Знание оборудования (чиллеры, вентиляционные системы, теплообменники, запорная и регулирующая арматура);",
    title40:
      "Опыт монтажных работ по ОВК, инженерные системы, наружные теплосети и трубопроводы;",
    title41: "Знание ПО;",
    title42:
      "Мобильность, бесконфликтность, ответственность, умение находить общий язык с сотрудниками разного уровня;",
    title43: "Эмоциональная зрелость, желание сотрудничать;",
    title44: "Личный автомобиль.",
    title45: "Условия",
    title46: "Возможность профессионального и карьерного роста;",
    title47: "График: 5/2, 09.00-18.00;",
    title48: "Разъездной характер работы;",
    title49: "Командировки предполагаются;",
    title50: "Фиксированный оклад + % от закрытых объектов.",
    title51:
      "Если вы хотите стать частью нашей команды, вы можете отправить свое резюме по адресу",
    // CONTACT
    title52: "Контакты",
    title53: "Полные реквизиты ООО «Чалы Трейдинг Сервис»",
    title54: "Юридический адрес:",
    title55: "Как пройти в офис",
    title56: "Фактический адрес",
    title57: "Телефон",
    title58: "Email",
    title59: "График работы",
    title60: "Пн-Пт 9:00-18:00",
    title61: "Остались вопросы?",
    title62: "Мы Вам перезвоним",
    title63: "Перезвоните мне",
    // HOME
    title64:
      "Компания «Чалы-Трейдинг-Сервис»",
    title65:
      'Компания "«Чалы" была основана с целью предоставления высококачественных строительных материалов, обеспечивающих надежность и долговечность любого строительного проекта. За годы работы мы зарекомендовали себя как надежный партнер, предлагая продукцию, соответствующую самым высоким стандартам в строительной отрасли.',
    title67:
      "–Компания «Çaly» основана в 2007 году с целью производства высококачественных строительных материалов, обеспечивающих долговечность и надежность любых строительных объектов.",
    title68:
      "За годы работы компания значительно расширила направления деятельности, предлагая продукцию и услуги, соответствующие самым высоким стандартам качества.",
    title70: "Наши работы",
    title71: "Новости",
    title72: "Подробнее",
    title73: "Все работы",
    // SERVICE
    title74: "Наши услуги",
    title75:
      "Предприятия промышленные, предприятия нефтепереработки и нефтехимии",
    title76:
      "В сферу деятельности компании «Чалы Трейдинг Сервис» входят очистка и монтаж оборудования – мы оказываем услуги для энергетических и нефтеперерабатывающих предприятий, а также проводим сервисные работы по наладке инженерных систем зданий и сооружений.",
    title77:
      "Все работы по очистке нефтепроводов, монтажу оборудования и т.д. проводятся с использованием специального оборудования силами квалифицированных специалистов, что позволяет гарантировать каждому клиенту высокое качество, сокращение времени простоя оборудования и экономичный расход бюджетных средств. Выбор технологии и способа выполнения работ производится на основе полного анализа состояния системы: особенностей конструкции и срока эксплуатации. Благодаря такому подходу обеспечивается безопасность сотрудников и сохранность оборудования.",
    title78:
      "Чтобы узнать подробную информацию об услугах и применяемых методах, позвоните нам по телефону +993 (65) 60 90 09 или напишите на электронную почту info@asgard-service.com",
    // COMPONENTS
    title79: "Сертификаты",
    title80: "Преимущества компании",
    title81: "Быстрый отклик на заявку",
    title82: "Высокое качество выполняемых работ",
    title83: "Подбор хим. реагентов индивидуально под заказчика",
    title84: "Специалисты с опытом более 10 лет в отрасли",
    title85: "Низкие цены, так как работаем над издержками",
    title86: "Короткие сроки мобилизации и оперативное начало работ",
    title87: "Наши контакты",
    title88: "Поиск",
    title89: "Услуги",
    title90: "Разделы сайта",
    title91: "Подпишитесь на нашу рассылку",
    title92: "Пожалуйста, оставьте это поле пустым.",
    title93:
      "Подпишитесь на рассылку, чтобы первым узнавать обо всех акциях и новинках компании",
    title94: "Имя",
    title95: "Проверьте Ваш почтовый ящик и подтвердите свою подписку.",
    title96: "Пользовательское соглашение",
    title97: "на обработку персональных данных.",
    title98: "Обратный звонок",
  },
  en: {
    // ABOUT
    title1: "Home",
    title2: "About Us",
    title3: "«CHALY» trading service",
    title4: "− is a service company of the «CHALY» group of companies.",
    title5: "Main Direction",
    title6:
      "is providing services for the maintenance, cleaning, and installation of technological equipment at small and large energy, oil refining, and oil transportation enterprises.",
    title7: "The Goal of the Company",
    title8:
      "is to improve the efficiency of technological processes in production and extend the time between equipment repairs.",
    title9: "The Foundation of the Company",
    title10:
      "− is a united team of service engineers with extensive experience in providing services for cleaning and repairing technological equipment.",
    title11: "Engineering Systems Service for Buildings and Structures",
    title12: "All Services",
    title13: "Our Clients",
    title14: "Leave your request, and we will call you back",
    title15: "Your Full Name*",
    title16: "Your Email *",
    title17: "Your Message*",
    title18: "Send",
    // CAREER
    title19: "Career",
    title20: "The team of LLC «Chaly» trading service is its main value.",
    title21:
      "We value in our employees the desire to achieve results, the readiness to work in a team, and the ability to take responsibility.",
    title22:
      "LLC «Chaly» trading service offers great opportunities for revealing the potential and career growth of its employees. Our team is a group of professionals implementing complex technical projects in the oil and gas sector and energy industry.",
    title23:
      "The readiness and ability of personnel to work productively, develop, and learn new things is the key to long-term success. We pay close attention to the professional development of the team, providing internal and external training.",
    title24:
      "A democratic management style allows our employees to feel part of the team and actively participate in the company's development. We welcome innovative ideas and unconventional solutions from our employees. Trust and cooperation are the foundations of Chaly's corporate culture.",
    title25:
      "Due to the development of new directions and increased work volumes, we present to your attention the open vacancies:",
    title26: "Vacancy 1: Site Engineer",
    title27: "Responsibilities",
    title28:
      "Active interaction with the customer before the start of work, coordination of estimates, and regulatory documentation for the object (heat supply, ventilation, sewage);",
    title29:
      "Object calculation, coordination of prices, changes, edits, participation in customer meetings for work planning;",
    title30: "Organization of work crews at the site;",
    title31: "Work monitoring, supervision of service crews;",
    title32:
      "Strategic and tactical interaction with the customer throughout the entire period until the object is handed over;",
    title33:
      "Optimization of costs, making rational proposals for project implementation (technical and economic proposals);",
    title34: "Reporting to the Chief Engineer of the company",
    title35: "Requirements",
    title36: "Higher technical education (preferable);",
    title37:
      "Proven relevant work experience of at least 7 years is mandatory;",
    title38:
      "Experience in industrial and municipal facility management (engineering)",
    title39:
      "Knowledge of equipment (chillers, ventilation systems, heat exchangers, shut-off and control valves);",
    title40:
      "Experience in installation works for HVAC, engineering systems, external heating networks, and pipelines;",
    title41: "Knowledge of software;",
    title42:
      "Mobility, conflict-free, responsibility, ability to find a common language with employees of different levels;",
    title43: "Emotional maturity, willingness to cooperate;",
    title44: "Personal vehicle.",
    title45: "Conditions",
    title46: "Opportunities for professional and career growth;",
    title47: "Schedule: 5/2, 09:00-18:00;",
    title48: "Mobile work nature;",
    title49: "Business trips are expected;",
    title50: "Fixed salary + % from closed projects.",
    title51:
      "If you want to become part of our team, you can send your resume to the following address",
    // CONTACT
    title52: "Contact",
    title53: "Full details of LLC «Chaly» trading service",
    title54: "Legal address:",
    title55: "How to reach the office",
    title56: "Actual address",
    title57: "Phone",
    title58: "Email",
    title59: "Working hours",
    title60: "Mon-Fri 9:00-18:00",
    title61: "Still have questions?",
    title62: "We will call you back",
    title63: "Call me back",
    // HOME
    title64: "Chaly-Service Company",
    title65: "The «Çaly» company was founded in 2007 with the goal of producing high-quality construction materials that ensure the durability and reliability of any building structures.",
    title67: "Çaly company was founded in 2007 with the aim of producing high-quality construction materials that ensure the durability and reliability of any construction facility.",
    title68: "Over the years, the company has significantly expanded its scope of activities, offering products and services that meet the highest quality standards.",
    title70: "Our Works",
    title71: "News",
    title72: "More details",
    title73: "All Works",
    // SERVICE
    title74: "Our Services",
    title75:
      "Industrial enterprises, oil refining, and petrochemical enterprises",
    title76:
      "The scope of LLC «Chaly» trading service includes cleaning and installation of equipment – we provide services for energy and oil refining enterprises, as well as conduct service work on the adjustment of engineering systems for buildings and structures.",
    title77:
      "All work on cleaning pipelines, equipment installation, etc., is carried out using specialized equipment by qualified specialists, ensuring high quality, reducing equipment downtime, and efficient use of budget funds. The choice of technology and method of work is based on a comprehensive analysis of the system's condition, design features, and service life. This approach ensures the safety of employees and the preservation of equipment.",
    title78:
      "For more detailed information about services and applied methods, call us at +993 (65) 60 90 09 or email info@asgard-service.com",
    // COMPONENTS
    title79: "Certificates",
    title80: "Company Advantages",
    title81: "Quick Response to Requests",
    title82: "High Quality of Work",
    title83: "Selection of Chemical Reagents Tailored to the Customer",
    title84: "Specialists with Over 10 Years of Industry Experience",
    title85: "Low Prices Due to Cost Optimization",
    title86: "Short Mobilization Time and Prompt Start of Work",
    title87: "Our Contacts",
    title88: "Search",
    title89: "Services",
    title90: "Website Sections",
    title91: "Subscribe to Our Newsletter",
    title92: "Please Leave This Field Blank.",
    title93:
      "Subscribe to the Newsletter to Be the First to Know About All Promotions and Company News",
    title94: "Name",
    title95: "Check Your Inbox and Confirm Your Subscription.",
    title96: "User Agreement",
    title97: "for the Processing of Personal Data.",
    title98: "Callback",
  },
};

export const i18n = createI18n({
  locale: "ru",
  fallbackLocale: "ru",
  messages,
});
