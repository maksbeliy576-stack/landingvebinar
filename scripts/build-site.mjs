import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const baseUrl = 'https://dm-marketing.pro';
const phoneDisplay = '+7 (473) 200-24-24';
const phoneHref = '+74732002424';
const email = 'hello@dm-marketing.pro';
const whatsapp = 'https://wa.me/74732002424';

const generatedRoots = [
  'index.html',
  'uslugi',
  'resheniya',
  'kejsy',
  'ceny',
  'blog',
  'o-kompanii',
  'kontakty',
  'sitemap.xml',
  'robots.txt',
];

for (const entry of generatedRoots) {
  fs.rmSync(path.join(rootDir, entry), { recursive: true, force: true });
}

const servicePages = [
  {
    slug: 'audit-otdela-prodazh',
    category: 'Стратегия',
    name: 'Аудит отдела продаж',
    short: 'Диагностика CRM, воронки и работы менеджеров',
    h1: 'Аудит отдела продаж и системы работы в CRM Битрикс24',
    title: 'Аудит отдела продаж — диагностика CRM Битрикс24',
    description: 'Проводим аудит отдела продаж и CRM Битрикс24: находим потери лидов, слабые этапы воронки и точки роста. Запишитесь на диагностику.',
    lead: 'За 60-90 минут показываем, где отдел продаж теряет заявки, деньги и контроль. По итогам вы получаете карту проблем, быстрые улучшения и план внедрения Битрикс24.',
    seo: ['аудит отдела продаж', 'аудит crm битрикс24', 'диагностика отдела продаж'],
    price: 'Бесплатный экспресс-аудит, расширенный аудит - от 45 000 ₽',
    type: 'Лид-магнит',
  },
  {
    slug: 'strategiya-prodazh',
    category: 'Стратегия',
    name: 'Стратегия развития продаж',
    short: 'Дорожная карта автоматизации и роста продаж',
    h1: 'Стратегия развития отдела продаж на базе CRM Битрикс24',
    title: 'Стратегия развития продаж на базе Битрикс24',
    description: 'Разрабатываем стратегию развития продаж и дорожную карту внедрения CRM Битрикс24: процессы, KPI, автоматизации, интеграции и обучение.',
    lead: 'Помогаем понять, какие изменения дадут максимальный эффект: воронки, регламенты, автоматизация, аналитика и обучение команды.',
    seo: ['стратегия продаж crm', 'план развития отдела продаж', 'построение системы продаж'],
    price: 'от 95 000 ₽ за стратегическую сессию и документ',
    type: 'Стратегическая',
  },
  {
    slug: 'vnedrenie-bitrix24',
    category: 'Внедрение',
    name: 'Внедрение Битрикс24 под ключ',
    short: 'Полный цикл: анализ, ТЗ, настройка, обучение',
    h1: 'Внедрение CRM Битрикс24 под ключ для бизнеса',
    title: 'Внедрение Битрикс24 под ключ — цена и сроки',
    description: 'Внедряем Битрикс24 под ключ для торговых и производственных компаний: анализ, настройка CRM, автоматизация, интеграции и обучение.',
    lead: 'Проектируем и запускаем рабочую систему продаж: от аудита и технического задания до автоматизаций, интеграций с 1С и обучения сотрудников.',
    seo: ['внедрение битрикс24 под ключ', 'внедрение crm битрикс24', 'настройка crm битрикс24'],
    price: 'пакеты от 180 000 ₽',
    type: 'Флагманская услуга',
  },
  {
    slug: 'sistema-prodazh-bitrix24',
    category: 'Внедрение',
    name: 'Построение системы продаж',
    short: 'Воронки, регламенты, KPI и контроль в CRM',
    h1: 'Построение системы продаж на базе Битрикс24',
    title: 'Система продаж на базе Битрикс24 — построение под ключ',
    description: 'Строим систему продаж на базе Битрикс24: воронки, скрипты, регламенты, KPI, автоматизация задач и управленческая отчетность.',
    lead: 'Оцифровываем путь клиента, роли менеджеров, контроль руководителя и повторные продажи, чтобы CRM стала управляемой системой, а не базой контактов.',
    seo: ['система продаж битрикс24', 'автоматизация отдела продаж', 'воронка продаж битрикс24'],
    price: 'от 240 000 ₽ за проект системы продаж',
    type: 'Ключевая',
  },
  {
    slug: 'razrabotka-korobki-bitrix24',
    category: 'Внедрение',
    name: 'Разработка коробочной версии',
    short: 'Кастомизация on-premise Битрикс24',
    h1: 'Разработка и кастомизация коробочной версии Битрикс24',
    title: 'Доработка коробочного Битрикс24 — кастомизация',
    description: 'Дорабатываем коробочный Битрикс24: кастомные модули, нестандартные интеграции, бизнес-процессы и уникальные интерфейсы.',
    lead: 'Решаем задачи, которые выходят за рамки облачной версии: сложная логика, права доступа, локальная инфраструктура и глубокие интеграции.',
    seo: ['доработка коробочного битрикс24', 'кастомизация битрикс24', 'битрикс24 on-premise'],
    price: 'от 160 000 ₽ за спринт разработки',
    type: 'Специализированная',
  },
  {
    slug: 'integraciya-1s-bitrix24',
    category: 'Интеграции',
    name: 'Интеграция 1С + Битрикс24',
    short: 'Двусторонний обмен заказами, счетами и остатками',
    h1: 'Интеграция Битрикс24 с 1С — синхронизация данных под ключ',
    title: 'Интеграция Битрикс24 с 1С — настройка обмена данных',
    description: 'Настраиваем интеграцию Битрикс24 с 1С: заказы, счета, контрагенты, номенклатура и остатки синхронизируются без ручного ввода.',
    lead: 'Связываем CRM и учетную систему так, чтобы менеджеры продавали в Битрикс24, а бухгалтерия и склад работали в привычной 1С.',
    seo: ['интеграция битрикс24 1с', 'настройка обмена 1с битрикс24', 'синхронизация 1с и crm'],
    price: 'от 140 000 ₽ за типовой обмен',
    type: 'Ключевая интеграция',
  },
  {
    slug: 'integraciya-sayt-1s-bitrix24',
    category: 'Интеграции',
    name: 'Трехсторонняя интеграция сайт + 1С + Битрикс24',
    short: 'Заявки с сайта становятся сделками и заказами',
    h1: 'Трехсторонняя интеграция: сайт, 1С и Битрикс24 в единой системе',
    title: 'Интеграция сайта, 1С и Битрикс24 — единая система',
    description: 'Объединяем сайт, 1С и Битрикс24: заявки, заказы, статусы, оплаты и остатки проходят через единую автоматизированную систему.',
    lead: 'Строим сквозной маршрут заказа: заявка с сайта создает сделку в CRM, заказ в 1С и уведомления ответственным сотрудникам.',
    seo: ['интеграция сайт 1с битрикс24', 'связать сайт с crm и 1с', 'трехсторонняя интеграция'],
    price: 'от 220 000 ₽ после аудита обменов',
    type: 'Ключевая',
  },
  {
    slug: 'integraciya-telefonii-bitrix24',
    category: 'Интеграции',
    name: 'Интеграция телефонии',
    short: 'Звонки, записи и аналитика в карточке CRM',
    h1: 'Интеграция IP-телефонии с Битрикс24 — запись и контроль звонков',
    title: 'Интеграция телефонии с Битрикс24 — запись звонков в CRM',
    description: 'Подключаем IP-телефонию к Битрикс24: записи разговоров, всплывающие карточки, задачи после звонка и контроль менеджеров.',
    lead: 'Каждый входящий и исходящий звонок фиксируется в CRM, а руководитель видит качество обработки лидов и скорость реакции.',
    seo: ['интеграция телефонии битрикс24', 'ip атс битрикс24', 'запись звонков crm'],
    price: 'от 45 000 ₽ за подключение и сценарии',
    type: 'Дополнительная',
  },
  {
    slug: 'integraciya-messengerov-bitrix24',
    category: 'Интеграции',
    name: 'Мессенджеры в Битрикс24',
    short: 'WhatsApp, Telegram и открытые линии в CRM',
    h1: 'Подключение WhatsApp и Telegram к Битрикс24',
    title: 'Интеграция WhatsApp и Telegram с Битрикс24',
    description: 'Подключаем WhatsApp, Telegram и открытые линии к Битрикс24: переписки, автоответы, сделки из чатов и единый контроль коммуникаций.',
    lead: 'Собираем переписки из мессенджеров в CRM, чтобы лиды не терялись в личных чатах менеджеров.',
    seo: ['whatsapp битрикс24', 'telegram интеграция битрикс24', 'мессенджеры в crm'],
    price: 'от 55 000 ₽ за каналы и правила обработки',
    type: 'Дополнительная',
  },
  {
    slug: 'tekhnicheskaya-podderzhka-bitrix24',
    category: 'Сопровождение',
    name: 'Техническая поддержка',
    short: 'SLA, администрирование и решение техвопросов',
    h1: 'Техническая поддержка пользователей Битрикс24',
    title: 'Техническая поддержка Битрикс24 — SLA-обслуживание',
    description: 'Оказываем техническую поддержку Битрикс24 по SLA: администрирование, права доступа, обновления, консультации и решение ошибок.',
    lead: 'Берем на себя регулярные технические вопросы, чтобы команда не останавливала продажи из-за настроек CRM.',
    seo: ['техподдержка битрикс24', 'поддержка crm', 'сопровождение битрикс24'],
    price: 'абонентские пакеты от 35 000 ₽ в месяц',
    type: 'Регулярное сопровождение',
  },
  {
    slug: 'soprovozhdenie-crm',
    category: 'Сопровождение',
    name: 'Сопровождение системы продаж',
    short: 'Ежемесячное развитие CRM и процессов',
    h1: 'Сопровождение и развитие системы продаж в CRM Битрикс24',
    title: 'Сопровождение CRM Битрикс24 — ежемесячное развитие',
    description: 'Сопровождаем и развиваем CRM Битрикс24: доработки, обучение новых сотрудников, оптимизация воронок и отчетности каждый месяц.',
    lead: 'После запуска продолжаем улучшать систему продаж: добавляем автоматизации, обучаем новых сотрудников и обновляем регламенты.',
    seo: ['сопровождение crm', 'развитие системы продаж', 'абонентское обслуживание битрикс24'],
    price: 'пакеты 10, 25 и 50 часов в месяц',
    type: 'Регулярный доход',
  },
  {
    slug: 'licenzii-bitrix24',
    category: 'Лицензии',
    name: 'Покупка лицензий Битрикс24',
    short: 'Подбор тарифа и скидки официального партнера',
    h1: 'Купить лицензию Битрикс24 — подбор тарифа и скидки партнера',
    title: 'Купить лицензию Битрикс24 — тарифы и скидки от партнера',
    description: 'Помогаем купить лицензию Битрикс24: подбираем тариф, рассчитываем пользователей, оформляем скидки партнера и переносим портал.',
    lead: 'Подбираем тариф под реальную структуру компании, чтобы не переплачивать за лишние опции и сразу заложить рост.',
    seo: ['купить лицензию битрикс24', 'тарифы битрикс24 цена', 'лицензия битрикс24 партнер'],
    price: 'официальные тарифы Битрикс24, скидки партнера до 20%',
    type: 'Транзакционная',
  },
  {
    slug: 'obuchenie-bitrix24',
    category: 'Обучение',
    name: 'Обучение команды в Битрикс24',
    short: 'Тренинги для менеджеров, РОПа и руководителя',
    h1: 'Обучение команды работе в Битрикс24 и ведению продаж в CRM',
    title: 'Обучение Битрикс24 — корпоративные тренинги и курсы',
    description: 'Проводим обучение работе в Битрикс24 для менеджеров, руководителей и администраторов: практика, регламенты и записи занятий.',
    lead: 'Обучаем команду не просто нажимать кнопки, а вести сделки по регламенту и использовать CRM как инструмент продаж.',
    seo: ['обучение битрикс24', 'обучение работе в crm', 'тренинг по продажам crm'],
    price: 'от 60 000 ₽ за корпоративный тренинг',
    type: 'Ключевая',
  },
  {
    slug: 'trening-po-prodazham-crm',
    category: 'Обучение',
    name: 'Тренинг по продажам в CRM',
    short: 'Практика ведения сделок и контроля этапов',
    h1: 'Тренинг по ведению продаж в CRM — практика для отдела продаж',
    title: 'Тренинг по продажам в CRM — практический курс для менеджеров',
    description: 'Проводим тренинг по продажам в CRM: как вести сделки, фиксировать договоренности, работать с задачами и повышать конверсию.',
    lead: 'Показываем менеджерам, как CRM помогает продавать больше: меньше забытых задач, больше повторных касаний и понятный план на день.',
    seo: ['тренинг по продажам crm', 'обучение менеджеров crm', 'тренинг отдела продаж'],
    price: 'от 45 000 ₽ за группу',
    type: 'Дополнительная',
  },
  {
    slug: 'reanimaciya-crm',
    category: 'Внедрение',
    name: 'Реанимация CRM',
    short: 'Возвращаем к жизни купленный, но неиспользуемый Битрикс24',
    h1: 'Реанимация CRM Битрикс24 — если система куплена, но не работает',
    title: 'Реанимация CRM Битрикс24 — аудит и перезапуск',
    description: 'Перезапускаем Битрикс24, который не используют: аудит настроек, чистка воронок, обучение команды и план внедрения без хаоса.',
    lead: 'Если портал уже куплен, но сотрудники снова работают в таблицах и мессенджерах, мы найдем причины сопротивления и перезапустим CRM.',
    seo: ['реанимация crm', 'битрикс24 не используется', 'перезапуск crm'],
    price: 'от 90 000 ₽ за диагностику и быстрый перезапуск',
    type: 'Рекомендованная',
  },
  {
    slug: 'skvoznaya-analitika-bitrix24',
    category: 'Интеграции',
    name: 'Сквозная аналитика',
    short: 'ROI рекламы, Roistat и продажи в CRM',
    h1: 'Сквозная аналитика в Битрикс24 — ROI рекламы и продаж',
    title: 'Сквозная аналитика Битрикс24 — Roistat и отчеты',
    description: 'Настраиваем сквозную аналитику в Битрикс24: источники лидов, сделки, выручка, ROI рекламы и отчеты для руководителя.',
    lead: 'Связываем рекламу, сайт и CRM, чтобы видеть не только заявки, но и выручку, маржинальность и окупаемость каналов.',
    seo: ['сквозная аналитика битрикс24', 'roistat битрикс24', 'roi рекламы crm'],
    price: 'от 120 000 ₽ за настройку аналитики',
    type: 'Рекомендованная',
  },
  {
    slug: 'crm-marketing-bitrix24',
    category: 'Маркетинг и аналитика',
    name: 'CRM-маркетинг в Битрикс24',
    short: 'Email-цепочки, сегменты и автокоммуникации',
    h1: 'CRM-маркетинг в Битрикс24 — рассылки и повторные продажи',
    title: 'CRM-маркетинг Битрикс24 — автоматические цепочки',
    description: 'Внедряем CRM-маркетинг в Битрикс24: сегменты, email-цепочки, SMS, повторные продажи, реактивация клиентов и аналитика.',
    lead: 'Настраиваем автоматические коммуникации после первого контакта и покупки, чтобы база клиентов работала на повторные продажи.',
    seo: ['crm маркетинг битрикс24', 'email рассылки битрикс24', 'повторные продажи crm'],
    price: 'от 85 000 ₽ за сценарии и запуск',
    type: 'Рекомендованная',
  },
  {
    slug: 'skripty-regulamenty-prodazh',
    category: 'Маркетинг и аналитика',
    name: 'Скрипты и регламенты продаж',
    short: 'Методология продаж, стандарты и база знаний',
    h1: 'Скрипты и регламенты продаж для работы в CRM Битрикс24',
    title: 'Скрипты и регламенты продаж — методология для CRM',
    description: 'Разрабатываем скрипты и регламенты продаж для Битрикс24: этапы сделок, правила задач, коммуникации и контроль качества.',
    lead: 'Фиксируем единый стандарт продаж, чтобы менеджеры одинаково обрабатывали лиды, вели сделки и передавали клиентов между этапами.',
    seo: ['скрипты продаж crm', 'регламенты отдела продаж', 'методология продаж битрикс24'],
    price: 'от 75 000 ₽ за пакет документов',
    type: 'Рекомендованная',
  },
  {
    slug: 'dashbordy-bitrix24',
    category: 'Маркетинг и аналитика',
    name: 'Дашборды и отчетность',
    short: 'BI-отчеты для руководителя и РОПа',
    h1: 'Дашборды и отчетность в Битрикс24 для руководителя',
    title: 'Дашборды Битрикс24 — отчеты и BI-аналитика',
    description: 'Создаем дашборды и отчетность в Битрикс24: продажи, конверсия, план-факт, активность менеджеров и прогноз выручки.',
    lead: 'Собираем управленческие панели, которые отвечают на вопросы: где проседает воронка, кто выполняет план и какие каналы окупаются.',
    seo: ['дашборды битрикс24', 'отчеты битрикс24', 'bi аналитика crm'],
    price: 'от 95 000 ₽ за набор управленческих отчетов',
    type: 'Рекомендованная',
  },
  {
    slug: 'migraciya-v-bitrix24',
    category: 'Интеграции',
    name: 'Миграция из другой CRM',
    short: 'Переезд из amoCRM, Excel и самописных систем',
    h1: 'Миграция из другой CRM в Битрикс24 без потери данных',
    title: 'Миграция в Битрикс24 — перенос из amoCRM и Excel',
    description: 'Переносим данные из amoCRM, Excel и других CRM в Битрикс24: контакты, компании, сделки, задачи, историю и статусы.',
    lead: 'Планируем переезд так, чтобы команда продолжала продавать, а история коммуникаций и сделок не потерялась.',
    seo: ['миграция в битрикс24', 'перенос из amocrm в битрикс24', 'перенос данных crm'],
    price: 'от 80 000 ₽ после инвентаризации данных',
    type: 'Рекомендованная',
  },
  {
    slug: 'hr-avtomatizaciya-bitrix24',
    category: 'Маркетинг и аналитика',
    name: 'HR-автоматизация в Битрикс24',
    short: 'Найм, онбординг и задачи сотрудников',
    h1: 'HR-автоматизация в Битрикс24 — найм, онбординг и адаптация',
    title: 'HR-автоматизация Битрикс24 — процессы для команды',
    description: 'Автоматизируем HR-процессы в Битрикс24: подбор, онбординг, заявки сотрудников, база знаний и контроль адаптации.',
    lead: 'Настраиваем процессы, которые помогают быстрее вводить сотрудников в работу и не терять HR-задачи в переписках.',
    seo: ['hr автоматизация битрикс24', 'онбординг битрикс24', 'автоматизация hr процессов'],
    price: 'от 110 000 ₽ за запуск HR-процессов',
    type: 'Рекомендованная',
  },
  {
    slug: 'integraciya-marketplejsy-bitrix24',
    category: 'Интеграции',
    name: 'Интеграция с маркетплейсами',
    short: 'Wildberries, Ozon и CRM для торговых компаний',
    h1: 'Интеграция маркетплейсов с Битрикс24 для торговых компаний',
    title: 'Интеграция маркетплейсов и Битрикс24 — Ozon, Wildberries',
    description: 'Интегрируем маркетплейсы с Битрикс24: заказы, статусы, остатки, задачи менеджерам и контроль продаж по каналам.',
    lead: 'Помогаем торговым компаниям видеть продажи с Ozon, Wildberries и сайта в единой CRM-системе.',
    seo: ['маркетплейсы битрикс24', 'интеграция ozon битрикс24', 'wildberries crm'],
    price: 'от 130 000 ₽ за интеграцию каналов',
    type: 'Рекомендованная',
  },
];

const industries = [
  {
    slug: 'bitrix24-dlya-proizvodstva',
    name: 'Производство',
    h1: 'Битрикс24 для производственных компаний — автоматизация продаж',
    title: 'Битрикс24 для производства — CRM для производственной компании',
    description: 'Внедряем Битрикс24 для производственных компаний: длинные сделки, спецификации, заказы, интеграция с 1С и контроль этапов.',
    keywords: ['битрикс24 для производства', 'crm для производственной компании'],
    pains: ['Сроки производства и продажи живут в разных системах', 'Менеджеры не видят остатки и статусы заказов', 'Коммерческие предложения готовятся вручную'],
  },
  {
    slug: 'bitrix24-dlya-optovoy-torgovli',
    name: 'Оптовая торговля',
    h1: 'Битрикс24 для оптовой торговли — управление заказами',
    title: 'Битрикс24 для оптовой торговли — CRM для оптового бизнеса',
    description: 'Настраиваем Битрикс24 для оптовой торговли: повторные продажи, прайс-листы, интеграция с 1С, дебиторка и контроль менеджеров.',
    keywords: ['битрикс24 для оптовой торговли', 'crm для оптового бизнеса'],
    pains: ['Прайсы и остатки быстро устаревают', 'Повторные продажи зависят от памяти менеджера', 'Дебиторка контролируется вручную'],
  },
  {
    slug: 'bitrix24-dlya-stroitelstva',
    name: 'Строительство',
    h1: 'CRM Битрикс24 для строительной компании',
    title: 'Битрикс24 для строительства — CRM для строительной компании',
    description: 'Внедряем CRM Битрикс24 для строительства: проектные сделки, подрядчики, документы, согласования и интеграция с 1С.',
    keywords: ['битрикс24 для строительства', 'crm для строительной компании'],
    pains: ['Заявки, сметы и договоры ведутся разрозненно', 'Согласования занимают слишком много времени', 'Нет прозрачности по проектным этапам'],
  },
  {
    slug: 'bitrix24-dlya-b2b',
    name: 'B2B-продажи',
    h1: 'Битрикс24 для B2B-продаж — длинные сделки',
    title: 'Битрикс24 для B2B — CRM для длинных сделок',
    description: 'Строим Битрикс24 для B2B-продаж: длинный цикл сделки, несколько ЛПР, прогрев, задачи и контроль этапов.',
    keywords: ['битрикс24 для b2b', 'crm для b2b продаж'],
    pains: ['Сделки длятся месяцами и теряются без касаний', 'В переговорах участвует несколько ЛПР', 'Руководителю сложно прогнозировать выручку'],
  },
  {
    slug: 'bitrix24-dlya-logistiki',
    name: 'Логистика',
    h1: 'CRM Битрикс24 для логистики и дистрибуции',
    title: 'Битрикс24 для логистики — CRM для дистрибьютора',
    description: 'Настраиваем Битрикс24 для логистики и дистрибуции: заявки, маршруты, статусы, документы и контроль клиентов.',
    keywords: ['битрикс24 для логистики', 'crm для дистрибьютора'],
    pains: ['Статусы перевозок не связаны с продажами', 'Клиенты постоянно уточняют этапы выполнения', 'Заявки распределяются вручную'],
  },
  {
    slug: 'bitrix24-dlya-servisnykh-kompaniy',
    name: 'Сервисные компании',
    h1: 'Битрикс24 для сервисных компаний',
    title: 'Битрикс24 для сервиса — CRM для сервисного центра',
    description: 'Внедряем Битрикс24 для сервисных компаний: заявки, SLA, повторные обращения, база знаний и контроль качества обслуживания.',
    keywords: ['битрикс24 для сервиса', 'crm для сервисного центра'],
    pains: ['Обращения клиентов приходят из разных каналов', 'Нет контроля SLA и повторных заявок', 'История обслуживания хранится у сотрудников'],
  },
];

const cases = [
  {
    slug: 'vnedrenie-bitrix24-dlya-proizvodstva',
    name: 'Производственная компания',
    h1: 'Как производственная компания сократила потери заявок с Битрикс24',
    title: 'Кейс внедрения Битрикс24 для производственной компании',
    description: 'Кейс внедрения Битрикс24 для производства: воронки, интеграция с 1С, КП и контроль этапов сделки.',
    task: 'Клиенту нужно было связать продажи, производство и учет, чтобы менеджеры видели статус заказов и не теряли заявки.',
    work: ['Описали цикл сделки от заявки до отгрузки', 'Настроили воронки для новых и повторных продаж', 'Подключили обмен с 1С по счетам и контрагентам', 'Обучили менеджеров и РОПа работе по регламенту'],
    results: ['-42% ручной работы', '+31% конверсии в КП', '14 дней до первого запуска'],
    quote: 'После запуска руководитель увидел реальную картину по сделкам и производственным статусам. Менеджерам стало проще вести клиентов.',
  },
  {
    slug: 'crm-dlya-optovoy-kompanii',
    name: 'Оптовый дистрибьютор',
    h1: 'Как оптовый дистрибьютор автоматизировал отдел продаж в Битрикс24',
    title: 'Кейс CRM для оптовой компании — автоматизация продаж',
    description: 'Кейс автоматизации отдела продаж оптового дистрибьютора: повторные продажи, дебиторка, задачи и отчетность в Битрикс24.',
    task: 'Компания хотела снизить зависимость от менеджеров и вернуть системные повторные продажи по клиентской базе.',
    work: ['Разделили клиентов по сегментам и частоте закупок', 'Запустили напоминания о повторных заказах', 'Настроили контроль дебиторской задолженности', 'Собрали дашборд для руководителя'],
    results: ['+27% повторных продаж', '0 забытых лидов', '8 отчетов для РОПа'],
    quote: 'CRM стала ежедневным рабочим инструментом, а не формальной базой. Руководитель видит план-факт без ручных таблиц.',
  },
  {
    slug: 'integraciya-1s-bitrix24-stroitelstvo',
    name: 'Строительная компания',
    h1: 'Как строительная компания связала 1С и Битрикс24',
    title: 'Кейс интеграции 1С и Битрикс24 для строительной компании',
    description: 'Кейс интеграции 1С и Битрикс24 для строительства: счета, контрагенты, статусы и единый контроль продаж.',
    task: 'Менеджеры работали в CRM, бухгалтерия - в 1С, а руководитель получал данные с задержкой.',
    work: ['Провели аудит обменов и справочников', 'Настроили синхронизацию счетов и контрагентов', 'Согласовали правила статусов и ошибок обмена', 'Подготовили инструкции для пользователей'],
    results: ['-60% дублей данных', '1 окно для менеджера', '3 дня на стабилизацию обмена'],
    quote: 'После интеграции исчез ручной перенос счетов, а ошибки обмена стали прозрачными и контролируемыми.',
  },
];

const blogPosts = [
  {
    slug: 'kak-vybrat-tarif-bitrix24',
    h1: 'Как выбрать тариф Битрикс24 в 2026 году — полное сравнение',
    title: 'Как выбрать тариф Битрикс24 в 2026 году',
    description: 'Разбираем тарифы Битрикс24 в 2026 году: что важно для продаж, когда нужен старший тариф и как не переплатить.',
    keywords: ['тарифы битрикс24', 'сравнение битрикс24'],
  },
  {
    slug: 'amocrm-vs-bitrix24',
    h1: 'amoCRM или Битрикс24 — что выбрать для B2B',
    title: 'amoCRM vs Битрикс24 — сравнение для B2B-продаж',
    description: 'Сравниваем amoCRM и Битрикс24 для B2B: воронки, автоматизации, задачи, интеграции, стоимость и развитие системы продаж.',
    keywords: ['amocrm vs битрикс24'],
  },
  {
    slug: 'oshibki-pri-vnedrenii-crm',
    h1: '5 ошибок при внедрении CRM, которые убивают продажи',
    title: 'Ошибки при внедрении CRM — как не потерять продажи',
    description: 'Пять частых ошибок внедрения CRM: отсутствие методологии, плохие воронки, нет обучения, слабая аналитика и сопротивление команды.',
    keywords: ['ошибки внедрения crm'],
  },
  {
    slug: 'integraciya-1s-bitrix24-kak-nastroit',
    h1: 'Интеграция 1С и Битрикс24: что важно знать',
    title: 'Интеграция 1С и Битрикс24 — как настроить обмен',
    description: 'Что учесть при интеграции 1С и Битрикс24: справочники, статусы, права, ошибки обмена и этапы внедрения.',
    keywords: ['как настроить интеграцию 1с битрикс24'],
  },
  {
    slug: 'kak-ocifrovaty-otdel-prodazh',
    h1: 'Как оцифровать отдел продаж с нуля за 30 дней',
    title: 'Как оцифровать отдел продаж — CRM, KPI и воронка',
    description: 'Пошаговый план оцифровки отдела продаж: аудит, воронка, KPI, CRM, обучение и отчетность для руководителя.',
    keywords: ['оцифровать отдел продаж'],
  },
];

const defaultFaq = [
  ['Сколько длится внедрение Битрикс24?', 'Первый рабочий запуск обычно занимает от 10 рабочих дней. Срок зависит от количества воронок, интеграций и объема обучения.'],
  ['Можно ли начать с бесплатного аудита?', 'Да. Экспресс-аудит помогает понять текущие проблемы, выбрать приоритеты и оценить бюджет внедрения.'],
  ['Вы работаете только в Воронеже?', 'Основной регион - Воронеж и Воронежская область, но проекты ведем онлайн по всей России.'],
  ['Подключаете ли вы формы к Битрикс24?', 'Да. В проект внедрения входят источники лидов, формы, телефония, мессенджеры и правила распределения заявок.'],
  ['Что будет после запуска?', 'Мы передаем инструкции, обучаем команду и можем вести ежемесячное сопровождение с SLA и пакетом часов.'],
];

const homeFaq = [
  ['Чем вы отличаетесь от обычных интеграторов Битрикс24?', 'Мы начинаем с процесса продаж: воронок, ролей, KPI и регламентов. Только после этого настраиваем CRM и автоматизации.'],
  ['Можно ли внедрить Битрикс24 без остановки отдела продаж?', 'Да. Запуск делаем поэтапно: сначала ключевая воронка и источники лидов, затем интеграции, аналитика и обучение.'],
  ['Какие компании получают максимальный эффект?', 'Торговые, производственные, строительные, сервисные и B2B-компании с несколькими менеджерами, длинными сделками и повторными продажами.'],
  ['Вы помогаете выбрать тариф Битрикс24?', 'Да. Подбираем лицензию под структуру компании и план развития, чтобы не переплачивать за лишние опции.'],
  ['Как понять бюджет проекта?', 'Оставьте заявку на аудит или используйте калькулятор на странице цен. После диагностики мы подготовим смету и дорожную карту.'],
];

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function url(pathname) {
  return `${baseUrl}${pathname}`;
}

function normalizePath(pathname) {
  return pathname === '/' ? '/' : pathname.replace(/\/?$/, '/');
}

function servicePath(service) {
  return `/uslugi/${service.slug}/`;
}

function industryPath(industry) {
  return `/resheniya/${industry.slug}/`;
}

function casePath(item) {
  return `/kejsy/${item.slug}/`;
}

function blogPath(post) {
  return `/blog/${post.slug}/`;
}

function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'dm-marketing.pro',
    url: baseUrl,
    telephone: phoneDisplay,
    email,
    image: `${baseUrl}/assets/logo.svg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Воронеж',
      addressRegion: 'Воронежская область',
      addressCountry: 'RU',
    },
    areaServed: ['Воронеж', 'Воронежская область', 'Россия'],
    priceRange: '₽₽',
    sameAs: ['https://dm-marketing.kz/'],
  };
}

function breadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: url(crumb.path),
    })),
  };
}

function faqSchema(faq) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.category,
    provider: {
      '@type': 'LocalBusiness',
      name: 'dm-marketing.pro',
      telephone: phoneDisplay,
    },
    areaServed: 'Воронеж и Россия',
    description: service.description,
    url: url(servicePath(service)),
  };
}

function pageHead({ title, description, pathname, schema = [] }) {
  const canonical = url(pathname);
  const allSchema = [localBusinessSchema(), ...schema];
  return `<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="dm-marketing.pro">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${baseUrl}/assets/logo.svg">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/assets/logo.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="/assets/styles.css">
  <script type="application/ld+json">${JSON.stringify(allSchema)}</script>
  <script>
    window.DM_MARKETING_ANALYTICS = {
      yandexMetrikaId: 'REPLACE_WITH_YANDEX_METRIKA_ID',
      googleAnalyticsId: 'REPLACE_WITH_GA_ID'
    };
    window.DM_MARKETING_WIDGETS = {
      bitrixOpenLineUrl: 'REPLACE_WITH_BITRIX24_OPEN_LINE_WIDGET_URL'
    };
    (function () {
      var analytics = window.DM_MARKETING_ANALYTICS;
      if (analytics.yandexMetrikaId && !analytics.yandexMetrikaId.startsWith('REPLACE')) {
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
        ym(analytics.yandexMetrikaId, 'init', { clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true });
      }
      if (analytics.googleAnalyticsId && !analytics.googleAnalyticsId.startsWith('REPLACE')) {
        var ga = document.createElement('script');
        ga.async = true;
        ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + analytics.googleAnalyticsId;
        document.head.appendChild(ga);
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', analytics.googleAnalyticsId);
      }
    }());
  </script>
</head>`;
}

function navDropdown(items) {
  return `<div class="nav__dropdown">${items.map((item) => `
    <a href="${item.href}">
      <b>${escapeHtml(item.title)}</b>
      <span>${escapeHtml(item.caption)}</span>
    </a>`).join('')}
  </div>`;
}

function header() {
  const topServices = servicePages
    .filter((service) => ['vnedrenie-bitrix24', 'audit-otdela-prodazh', 'integraciya-1s-bitrix24', 'licenzii-bitrix24', 'reanimaciya-crm', 'soprovozhdenie-crm'].includes(service.slug))
    .map((service) => ({ href: servicePath(service), title: service.name, caption: service.short }));

  return `<a class="skip-link" href="#content">Перейти к содержанию</a>
<header class="header">
  <div class="container header__inner">
    <a class="logo" href="/" aria-label="dm-marketing.pro">
      <img src="/assets/logo.svg" width="210" height="60" alt="dm-marketing.pro">
    </a>
    <nav class="nav" data-nav aria-label="Основное меню">
      <div class="nav__item">
        <a class="nav__link" href="/uslugi/">Услуги</a>
        ${navDropdown(topServices)}
      </div>
      <div class="nav__item">
        <a class="nav__link" href="/resheniya/">Решения</a>
        ${navDropdown(industries.map((industry) => ({ href: industryPath(industry), title: industry.name, caption: industry.keywords[0] })))}
      </div>
      <a class="nav__link" href="/kejsy/">Кейсы</a>
      <a class="nav__link" href="/ceny/">Цены</a>
      <a class="nav__link" href="/blog/">Блог</a>
      <div class="nav__item">
        <a class="nav__link" href="/o-kompanii/">О компании</a>
        ${navDropdown([
          { href: '/o-kompanii/', title: 'О компании', caption: 'подход и методология' },
          { href: '/o-kompanii/komanda/', title: 'Команда', caption: 'эксперты по CRM и продажам' },
          { href: '/o-kompanii/sertifikaty/', title: 'Сертификаты', caption: 'компетенции Битрикс24' },
        ])}
      </div>
      <a class="nav__link" href="/kontakty/">Контакты</a>
    </nav>
    <div class="header__actions">
      <a class="header__phone" href="tel:${phoneHref}">${phoneDisplay}</a>
      <a class="icon-btn" href="tel:${phoneHref}" aria-label="Позвонить">☎</a>
      <a class="icon-btn icon-btn--wa" href="${whatsapp}" aria-label="Написать в WhatsApp">WA</a>
      <a class="btn btn--cta" href="/kontakty/#audit">Получить консультацию</a>
      <button class="menu-toggle" data-menu-toggle type="button" aria-label="Открыть меню" aria-expanded="false">☰</button>
    </div>
  </div>
</header>`;
}

function footer() {
  return `<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div>
        <h3>dm-marketing.pro</h3>
        <p>Строим системы продаж на базе Битрикс24 для торговых, производственных и B2B-компаний.</p>
        <p><b>Регион:</b> Воронеж и Воронежская область. Проекты онлайн - по всей России.</p>
      </div>
      <div>
        <h4>Услуги</h4>
        <a href="/uslugi/vnedrenie-bitrix24/">Внедрение Битрикс24</a>
        <a href="/uslugi/audit-otdela-prodazh/">Аудит отдела продаж</a>
        <a href="/uslugi/integraciya-1s-bitrix24/">Интеграция 1С</a>
        <a href="/uslugi/reanimaciya-crm/">Реанимация CRM</a>
      </div>
      <div>
        <h4>Разделы</h4>
        <a href="/resheniya/">Решения по отраслям</a>
        <a href="/kejsy/">Кейсы</a>
        <a href="/ceny/">Цены</a>
        <a href="/blog/">Блог</a>
      </div>
      <div>
        <h4>Контакты</h4>
        <a href="tel:${phoneHref}">${phoneDisplay}</a>
        <a href="mailto:${email}">${email}</a>
        <a href="${whatsapp}">WhatsApp</a>
        <a href="/kontakty/">Оставить заявку</a>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 2026 dm-marketing.pro</span>
      <span>Официальный партнер Битрикс24 · CRM · продажи · интеграции</span>
    </div>
  </div>
</footer>
<div class="mobile-actions" aria-label="Быстрые действия">
  <a class="btn btn--cta" href="tel:${phoneHref}">Позвонить</a>
  <a class="btn btn--ghost" href="${whatsapp}">WhatsApp</a>
</div>
<a class="chat-widget" href="/kontakty/#audit" aria-label="Открытая линия Битрикс24">💬 Открытая линия</a>
<div class="modal" data-exit-modal aria-hidden="true">
  <div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="exit-title">
    <button class="modal__close" data-modal-close type="button" aria-label="Закрыть">×</button>
    <span class="eyebrow">Бесплатный аудит</span>
    <h2 id="exit-title">Перед уходом заберите диагностику отдела продаж</h2>
    <p class="section__sub">Покажем, где теряются лиды, какие этапы воронки мешают продажам и что автоматизировать в Битрикс24 в первую очередь.</p>
    ${leadForm('exit-modal')}
  </div>
</div>
<script src="/assets/app.js" defer></script>
</body>
</html>`;
}

function layout({ title, description, pathname, schema, content }) {
  return `${pageHead({ title, description, pathname, schema })}
<body>
${header()}
<main id="content">
${content}
</main>
${footer()}`;
}

function breadcrumbs(crumbs) {
  return `<nav class="breadcrumbs" aria-label="Хлебные крошки">${crumbs.map((crumb, index) => {
    const isLast = index === crumbs.length - 1;
    return `<span>${isLast ? escapeHtml(crumb.name) : `<a href="${crumb.path}">${escapeHtml(crumb.name)}</a>`}</span>`;
  }).join('')}</nav>`;
}

function leadForm(source = 'site') {
  return `<form class="form" data-form data-source="${source}">
    <input type="hidden" name="source" value="${source}">
    <input name="name" autocomplete="name" placeholder="Ваше имя" required>
    <input name="phone" autocomplete="tel" placeholder="Телефон или WhatsApp" required>
    <textarea name="message" placeholder="Коротко опишите задачу"></textarea>
    <button class="btn btn--cta btn--block" type="submit">Получить бесплатный аудит</button>
    <div class="form__status" data-form-status></div>
    <div class="form__note">Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Форму можно подключить к вебхуку Битрикс24.</div>
  </form>`;
}

function ctaBlock(title = 'Получите бесплатный аудит отдела продаж', text = 'Разберем текущую воронку, источники лидов и работу менеджеров. По итогам дадим список быстрых улучшений и план внедрения Битрикс24.') {
  return `<section class="section">
  <div class="container">
    <div class="cta-band" id="audit">
      <div class="cta-band__inner">
        <div>
          <span class="eyebrow eyebrow--white">Лид-магнит</span>
          <h2>${escapeHtml(title)}</h2>
          <p>${escapeHtml(text)}</p>
        </div>
        ${leadForm('audit')}
      </div>
    </div>
  </div>
</section>`;
}

function faqBlock(faq = defaultFaq) {
  return `<section class="section section--tight">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">FAQ</span>
      <h2>Частые вопросы</h2>
    </div>
    <div class="faq">${faq.map(([question, answer]) => `
      <details>
        <summary>${escapeHtml(question)}</summary>
        <p>${escapeHtml(answer)}</p>
      </details>`).join('')}
    </div>
  </div>
</section>`;
}

function quizBlock() {
  return `<section class="section section--white">
  <div class="container grid grid--2">
    <div>
      <span class="eyebrow">Квиз</span>
      <h2>Подберем решение под ваш бизнес</h2>
      <p class="section__sub">Ответьте на 5 вопросов, чтобы понять, с какого этапа лучше начать: аудит, внедрение, интеграции или сопровождение.</p>
    </div>
    <form class="card quiz" data-quiz>
      ${[
        ['q1', 'Где сейчас ведется база клиентов?', [['0', 'В Битрикс24'], ['1', 'В Excel/таблицах'], ['2', 'В мессенджерах и у менеджеров']]],
        ['q2', 'Сколько менеджеров работает в продажах?', [['0', '1-3'], ['1', '4-10'], ['2', 'Больше 10']]],
        ['q3', 'Нужна ли интеграция с 1С или сайтом?', [['0', 'Нет'], ['1', 'Позже'], ['2', 'Да, обязательно']]],
        ['q4', 'Есть ли регулярная отчетность по воронке?', [['0', 'Да'], ['1', 'Частично'], ['2', 'Нет, собираем вручную']]],
        ['q5', 'Команда уже работает в CRM?', [['0', 'Да, стабильно'], ['1', 'Использует частично'], ['2', 'CRM куплена, но не прижилась']]],
      ].map(([name, question, options]) => `
        <div class="quiz__question">
          <h3>${question}</h3>
          <div class="quiz__options">${options.map(([value, label], index) => `
            <label><input type="radio" name="${name}" value="${value}" ${index === 0 ? 'checked' : ''}> ${label}</label>`).join('')}
          </div>
        </div>`).join('')}
      <div class="quiz__result" data-quiz-result>Подойдет экспресс-аудит и базовая настройка воронок. Начните с диагностики отдела продаж.</div>
      <a class="btn btn--cta btn--block" href="/kontakty/#audit">Получить рекомендации</a>
    </form>
  </div>
</section>`;
}

function cardGrid(items, columns = 3) {
  return `<div class="grid grid--${columns}">${items.map((item) => `
    <a class="card card--link" href="${item.href}">
      <span class="card__icon">${item.icon || '•'}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
      ${item.tags ? `<div class="tag-row">${item.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>` : ''}
    </a>`).join('')}
  </div>`;
}

function heroStats() {
  return `<div class="hero__stats">
    <div class="stat"><b>80+</b><span>CRM-проектов и аудитов</span></div>
    <div class="stat"><b>9 лет</b><span>в продажах и автоматизации</span></div>
    <div class="stat"><b>до 70%</b><span>рутины уходит в автоматизацию</span></div>
  </div>`;
}

function videoBlock({ title, text, bullets = [], badge = 'Видео от эксперта' }) {
  return `<aside class="video-card">
    <div class="video-frame" aria-label="${escapeHtml(title)}">
      <div class="video-frame__top">
        <span></span><span></span><span></span>
      </div>
      <div class="video-frame__body">
        <button class="play-button" type="button" aria-label="Смотреть видео">▶</button>
        <div>
          <b>${escapeHtml(title)}</b>
          <small>Горизонтальное видео 16:9</small>
        </div>
      </div>
    </div>
    <div class="video-card__content">
      <span class="eyebrow">${escapeHtml(badge)}</span>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
      ${bullets.length ? `<ul class="video-card__list">${bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : ''}
    </div>
  </aside>`;
}

function pageHeroSection({ crumbs, eyebrow, h1, lead, primary = ['Получить консультацию', '#audit'], secondary, videoTitle, videoText, videoBullets = [], stats = '' }) {
  return `<section class="page-hero">
  <div class="container page-hero__grid">
    <div>
      ${crumbs ? breadcrumbs(crumbs) : ''}
      <span class="eyebrow">${escapeHtml(eyebrow)}</span>
      <h1>${escapeHtml(h1)}</h1>
      <p class="page-hero__lead">${escapeHtml(lead)}</p>
      <div class="hero__actions">
        <a class="btn btn--cta btn--lg" href="${primary[1]}">${escapeHtml(primary[0])}</a>
        ${secondary ? `<a class="btn btn--ghost btn--lg" href="${secondary[1]}">${escapeHtml(secondary[0])}</a>` : ''}
      </div>
      ${stats}
    </div>
    ${videoBlock({
      title: videoTitle || h1,
      text: videoText || 'В этом видео эксперт dm-marketing объясняет, какие задачи решает страница, кому подходит решение и с чего начать проект.',
      bullets: videoBullets,
    })}
  </div>
</section>`;
}

function screenshotMockup(title, items = []) {
  return `<div class="screenshot-card">
    <div class="screenshot-card__bar"><span></span><span></span><span></span></div>
    <div class="screenshot-card__body">
      <div>
        <small>Место для скриншота</small>
        <h3>${escapeHtml(title)}</h3>
      </div>
      <div class="screenshot-lines">
        ${(items.length ? items : ['Воронка сделок', 'Карточка клиента', 'Отчет руководителя']).map((item, index) => `<span style="--w:${82 - index * 12}%">${escapeHtml(item)}</span>`).join('')}
      </div>
    </div>
  </div>`;
}

function iconFeatureGrid(items) {
  return `<div class="feature-grid">${items.map((item, index) => `
    <article class="feature-card">
      <span class="feature-card__icon">${item.icon || String(index + 1).padStart(2, '0')}</span>
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </div>
    </article>`).join('')}
  </div>`;
}

function serviceContent(service) {
  const categoryContent = {
    'Стратегия': {
      pains: ['Нет единой картины, где теряются лиды и деньги', 'Воронка построена по привычке, а не по реальному циклу сделки', 'Руководителю сложно выбрать, что автоматизировать первым'],
      includes: ['Интервью с руководителем и РОПом', 'Разбор воронок, ролей и KPI', 'Карта потерь лидов и ручной работы', 'Дорожная карта внедрения по приоритетам'],
      steps: ['Собираем факты и текущие регламенты', 'Находим узкие места в продажах', 'Проектируем целевую схему CRM', 'Приоритизируем быстрые улучшения', 'Передаем документ и план запуска'],
      outcomes: ['Понятный план действий', 'Список быстрых улучшений', 'Основа для ТЗ на внедрение'],
      screens: ['Карта текущей воронки', 'Матрица проблем', 'Дорожная карта CRM'],
    },
    'Внедрение': {
      pains: ['Битрикс24 есть, но команда продолжает работать в таблицах', 'Нет регламентов, автоматизаций и ответственности за этапы', 'Сделки зависают, а руководитель не видит прогноз'],
      includes: ['Проектирование воронок и карточек CRM', 'Настройка роботов, задач и уведомлений', 'Регламенты и скрипты для команды', 'Обучение и сопровождение первого запуска'],
      steps: ['Аудит процесса продаж', 'ТЗ и прототип будущей CRM', 'Настройка портала и прав доступа', 'Тест на реальных сделках', 'Обучение и запуск в работу'],
      outcomes: ['CRM используется ежедневно', 'Меньше ручной рутины', 'Прозрачный контроль продаж'],
      screens: ['Воронка продаж', 'Карточка сделки', 'Панель руководителя'],
    },
    'Интеграции': {
      pains: ['Данные приходится переносить вручную между системами', 'Менеджеры не видят актуальные статусы, счета и остатки', 'Ошибки обмена обнаруживаются слишком поздно'],
      includes: ['Аудит систем и справочников', 'Схема обмена и правила синхронизации', 'Настройка интеграции и журнал ошибок', 'Тестирование на реальных сценариях'],
      steps: ['Описываем потоки данных', 'Согласуем справочники и статусы', 'Настраиваем обмен', 'Тестируем ошибки и дубли', 'Запускаем мониторинг интеграции'],
      outcomes: ['Единые данные без дублей', 'Быстрее обработка заказов', 'Контроль ошибок обмена'],
      screens: ['Схема обмена', 'Журнал синхронизации', 'Карточка заказа'],
    },
    'Сопровождение': {
      pains: ['После запуска появляются новые задачи, но их некому быстро закрывать', 'Пользователи задают одни и те же вопросы', 'CRM перестает развиваться вместе с отделом продаж'],
      includes: ['SLA и единый канал поддержки', 'Администрирование портала и прав', 'Ежемесячные доработки и отчеты', 'Обучение новых сотрудников'],
      steps: ['Фиксируем backlog улучшений', 'Назначаем SLA и приоритеты', 'Выполняем доработки по пакету часов', 'Проводим мини-обучения', 'Отчитываемся по изменениям'],
      outcomes: ['CRM не деградирует после запуска', 'Пользователи быстрее получают помощь', 'Система развивается по плану'],
      screens: ['Backlog задач', 'SLA-панель', 'Отчет сопровождения'],
    },
    'Лицензии': {
      pains: ['Непонятно, какой тариф нужен компании', 'Есть риск переплатить за лишние опции', 'Коробочная и облачная версии сравниваются без учета задач'],
      includes: ['Расчет пользователей и ролей', 'Сравнение облака и коробки', 'Подбор тарифа с учетом роста', 'Оформление покупки и запуск портала'],
      steps: ['Считаем пользователей', 'Выбираем облако или коробку', 'Согласуем тариф и скидку', 'Оформляем покупку', 'Помогаем с первым запуском'],
      outcomes: ['Тариф без переплаты', 'Понятный план масштабирования', 'Помощь официального партнера'],
      screens: ['Сравнение тарифов', 'Расчет пользователей', 'План перехода'],
    },
    'Обучение': {
      pains: ['Сотрудники не понимают, зачем вести CRM', 'Каждый менеджер работает по-своему', 'Руководитель не получает качественные данные для контроля'],
      includes: ['Программа под роли сотрудников', 'Практика на реальных сделках', 'Инструкции и записи занятий', 'Проверка усвоения и ответы на вопросы'],
      steps: ['Согласуем роли и сценарии', 'Готовим учебные материалы', 'Проводим практический тренинг', 'Разбираем ошибки пользователей', 'Передаем записи и чек-листы'],
      outcomes: ['Команда работает по единым правилам', 'Меньше сопротивления CRM', 'Руководитель получает качественные данные'],
      screens: ['Учебная воронка', 'Чек-лист менеджера', 'База знаний'],
    },
    'Маркетинг и аналитика': {
      pains: ['Непонятно, какие каналы реально приносят деньги', 'Повторные продажи зависят от ручных напоминаний', 'Руководитель не видит план-факт и качество воронки'],
      includes: ['Сегменты, источники и события CRM', 'Автоматические коммуникации и отчеты', 'Дашборды для руководителя', 'Рекомендации по улучшению конверсии'],
      steps: ['Определяем метрики', 'Собираем источники данных', 'Настраиваем отчеты и сценарии', 'Проверяем корректность цифр', 'Передаем регламент анализа'],
      outcomes: ['Понятный ROI', 'Автоматические касания', 'Управленческие решения на данных'],
      screens: ['ROI-дашборд', 'Сегменты клиентов', 'Отчет по каналам'],
    },
  };
  const base = categoryContent[service.category] || categoryContent['Внедрение'];
  return {
    pains: base.pains.map((item) => item.replace('Битрикс24', service.name.includes('Битрикс24') ? 'Битрикс24' : 'CRM')),
    includes: base.includes,
    steps: base.steps,
    outcomes: base.outcomes,
    screens: base.screens,
    promise: `${service.name}: показываем бизнес-смысл, настраиваем понятный процесс и оставляем команде рабочие инструкции, а не абстрактную CRM.`,
  };
}

function homePage() {
  const pathname = '/';
  const topServices = ['vnedrenie-bitrix24', 'audit-otdela-prodazh', 'integraciya-1s-bitrix24', 'licenzii-bitrix24', 'sistema-prodazh-bitrix24', 'reanimaciya-crm', 'tekhnicheskaya-podderzhka-bitrix24', 'obuchenie-bitrix24']
    .map((slug) => servicePages.find((service) => service.slug === slug));
  const schema = [faqSchema(homeFaq)];

  const content = `<section class="hero">
  <div class="container hero__grid">
    <div>
      <span class="eyebrow">Воронеж · официальный партнер Битрикс24</span>
      <h1><span class="highlight">Внедрение системы продаж</span> на базе Битрикс24 для торгово-производственных компаний</h1>
      <p class="hero__lead">Аудитируем отдел продаж, проектируем воронки, подключаем 1С, сайт, телефонию и обучаем команду работать по регламенту.</p>
      <div class="hero__actions">
        <a class="btn btn--cta btn--lg" href="#audit">Получить бесплатный аудит</a>
        <a class="btn btn--ghost btn--lg" href="/kejsy/">Посмотреть кейсы</a>
      </div>
      ${heroStats()}
    </div>
    ${videoBlock({
      title: 'Как мы строим систему продаж на Битрикс24',
      text: 'В видео расскажу, почему внедрение начинается не с кнопок в CRM, а с воронки, регламентов и контроля руководителя.',
      bullets: ['Где чаще всего теряются заявки', 'Какие блоки Битрикс24 нужны торгово-производственной компании', 'Как проходит бесплатный аудит'],
    })}
  </div>
</section>

<section class="section section--white">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Проблема / решение</span>
      <h2>Если продажи держатся на памяти менеджеров, CRM не стала системой</h2>
      <p class="section__sub">Мы переводим хаос из таблиц, чатов и устных договоренностей в управляемые процессы Битрикс24.</p>
    </div>
    <div class="grid grid--4">
      ${['Менеджеры теряют лиды и забывают перезвонить', 'Непонятно, на каком этапе каждая сделка', 'Руководитель собирает отчеты вручную', '1С, сайт, телефония и CRM не связаны'].map((pain) => `
      <article class="card pain-card"><h3>${pain}</h3><p>Решаем через воронки, задачи, автоматизацию, интеграции и прозрачную аналитику.</p></article>`).join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Услуги</span>
      <h2>Основные направления внедрения Битрикс24</h2>
      <p class="section__sub">Каждая услуга - отдельная SEO-страница с понятным оффером, блоками доверия и заявкой на аудит.</p>
    </div>
    ${cardGrid(topServices.map((service, index) => ({ href: servicePath(service), icon: String(index + 1), title: service.name, text: service.short, tags: service.seo.slice(0, 2) })), 4)}
  </div>
</section>

<section class="section section--white">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Кейсы</span>
      <h2>Реальные результаты клиентов</h2>
      <p class="section__sub">Показываем не только настройки CRM, но и влияние на контроль, скорость работы и повторные продажи.</p>
    </div>
    <div class="grid grid--3">${cases.map((item) => `
      <a class="card card--link" href="${casePath(item)}">
        <span class="card__icon">↗</span>
        <h3>${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(item.task)}</p>
        <div class="tag-row">${item.results.map((result) => `<span class="tag">${escapeHtml(result)}</span>`).join('')}</div>
      </a>`).join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container grid grid--2">
    <div>
      <span class="eyebrow">Как мы работаем</span>
      <h2>От диагностики до системы продаж, которую использует команда</h2>
      <p class="section__sub">Процесс построен так, чтобы быстро дать первый результат и затем развивать CRM без хаотичных доработок.</p>
    </div>
    <div class="steps">
      ${['Аудит отдела продаж и текущих инструментов', 'Проектирование воронок, ролей, KPI и ТЗ', 'Настройка Битрикс24, автоматизаций и интеграций', 'Обучение менеджеров, РОПа и администратора', 'Сопровождение и развитие отчетности'].map((step) => `<div class="step"><div><h3>${step}</h3><p>Фиксируем результат этапа и показываем, как это влияет на продажи.</p></div></div>`).join('')}
    </div>
  </div>
</section>

<section class="section section--white">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Отзывы</span>
      <h2>Клиенты ценят методологию и понятное сопровождение</h2>
    </div>
    <div class="grid grid--3">
      ${['Производство металлоконструкций', 'Оптовый дистрибьютор', 'Сервисная компания'].map((name) => `
      <blockquote class="quote"><p>Команда dm-marketing помогла не просто настроить CRM, а договориться о правилах работы отдела продаж.</p><b>${name}</b></blockquote>`).join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container grid grid--2">
    <div class="card">
      <span class="eyebrow">О компании</span>
      <h2>Сертифицированный партнер Битрикс24 с фокусом на продажах</h2>
      <p>Мы объединяем экспертизу CRM-интегратора, аналитика продаж и методолога. Поэтому внедрение заканчивается не набором настроек, а работающей системой.</p>
      <a class="btn btn--ghost" href="/o-kompanii/">Подробнее о компании</a>
    </div>
    <div class="card">
      <span class="card__icon">24</span>
      <h3>Битрикс24: CRM, задачи, телефония, открытые линии, аналитика</h3>
      <p>Настраиваем портал под реальную структуру компании и оставляем инструкции для пользователей.</p>
    </div>
  </div>
</section>

${quizBlock()}
${ctaBlock()}
${faqBlock(homeFaq)}`;

  return layout({
    title: 'Внедрение Битрикс24 под ключ в Воронеже — dm-marketing.pro',
    description: 'Строим системы продаж на базе Битрикс24 для торговых и производственных компаний. Аудит, внедрение, интеграция с 1С, обучение.',
    pathname,
    schema,
    content,
  });
}

function servicesOverviewPage() {
  const pathname = '/uslugi/';
  const crumbs = [{ name: 'Главная', path: '/' }, { name: 'Услуги', path: pathname }];
  const grouped = servicePages.reduce((acc, service) => {
    acc[service.category] ||= [];
    acc[service.category].push(service);
    return acc;
  }, {});
  const content = `${pageHeroSection({
    crumbs,
    eyebrow: '22 услуги',
    h1: 'Услуги по внедрению Битрикс24 и построению системы продаж',
    lead: 'От бесплатного аудита и покупки лицензии до интеграций, обучения, сопровождения и рекомендованных услуг для роста LTV.',
    primary: ['Подобрать услугу', '#audit'],
    secondary: ['Смотреть цены', '/ceny/'],
    videoTitle: 'Как выбрать нужную услугу Битрикс24',
    videoText: 'Расскажу, когда нужен аудит, когда полноценное внедрение, а когда достаточно интеграции, обучения или сопровождения.',
    videoBullets: ['Маршрут от аудита до запуска', 'Как не переплатить за лишний объем', 'Какие страницы услуг смотреть в первую очередь'],
  })}
${Object.entries(grouped).map(([category, services]) => `
<section class="section section--tight">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">${escapeHtml(category)}</span>
      <h2>${escapeHtml(category)}</h2>
    </div>
    ${cardGrid(services.map((service) => ({ href: servicePath(service), icon: service.category[0], title: service.name, text: service.short, tags: service.seo.slice(0, 2) })), 3)}
  </div>
</section>`).join('')}
${ctaBlock('Подберем услугу под вашу задачу', 'Расскажите, что сейчас не работает в продажах: лиды, 1С, отчеты, обучение или сопровождение. Подскажем оптимальный маршрут внедрения.')}`;

  return layout({
    title: 'Услуги внедрения Битрикс24 — dm-marketing.pro',
    description: 'Все услуги dm-marketing.pro: аудит отдела продаж, внедрение Битрикс24, интеграция 1С, лицензии, обучение и сопровождение CRM.',
    pathname,
    schema: [breadcrumbSchema(crumbs)],
    content,
  });
}

function servicePage(service) {
  const pathname = servicePath(service);
  const crumbs = [{ name: 'Главная', path: '/' }, { name: 'Услуги', path: '/uslugi/' }, { name: service.name, path: pathname }];
  const serviceCopy = serviceContent(service);
  const related = servicePages
    .filter((item) => item.slug !== service.slug && item.category === service.category)
    .concat(servicePages.filter((item) => item.slug !== service.slug && item.category !== service.category))
    .slice(0, 3);
  const faq = [
    [`Кому подходит услуга «${service.name}»?`, `Она подходит компаниям, которым важно системно улучшить продажи через Битрикс24: ${service.short.toLowerCase()}.`],
    ['Что входит в работу?', 'Аудит текущего процесса, проектирование решения, настройка Битрикс24, тестирование, инструкции и обучение команды.'],
    ['Можно ли начать с небольшого объема?', 'Да. Мы выделяем быстрый первый этап, который дает измеримый результат и снижает риски дальнейшего внедрения.'],
    ['Сколько стоит проект?', service.price],
    ['Вы передаете инструкции после проекта?', 'Да. Подготавливаем регламенты, чек-листы и проводим обучение пользователей и руководителя.'],
  ];
  const content = `<section class="page-hero">
  <div class="container page-hero__grid">
    <div>
      ${breadcrumbs(crumbs)}
      <span class="eyebrow">${escapeHtml(service.category)} · ${escapeHtml(service.type)}</span>
      <h1>${escapeHtml(service.h1)}</h1>
      <p class="page-hero__lead">${escapeHtml(service.lead)}</p>
      <div class="hero__actions">
        <a class="btn btn--cta btn--lg" href="#audit">Записаться на консультацию</a>
        <a class="btn btn--ghost btn--lg" href="/ceny/">Посмотреть цены</a>
      </div>
    </div>
    ${videoBlock({
      title: `Видео про услугу: ${service.name}`,
      text: `В этом ролике объясняем, кому нужна услуга «${service.name}», какие проблемы она закрывает и какой результат вы получите после запуска.`,
      bullets: [service.short, service.price, `Ключ: ${service.seo[0]}`],
    })}
  </div>
</section>

<section class="section section--white">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Узнаете ситуацию?</span>
      <h2>${escapeHtml(service.name)}: какие проблемы закрываем в первую очередь</h2>
      <p class="section__sub">${escapeHtml(serviceCopy.promise)}</p>
    </div>
    ${iconFeatureGrid(serviceCopy.pains.map((pain, index) => ({
      icon: ['!', '↯', '?'][index] || '!',
      title: pain,
      text: 'Разбираем причину, показываем влияние на продажи и закрываем ее конкретной настройкой, регламентом или интеграцией.',
    })))}
  </div>
</section>

<section class="section">
  <div class="container split-panel">
    <div>
      <span class="eyebrow">Что включает услуга</span>
      <h2>Что именно делаем по направлению «${escapeHtml(service.name)}»</h2>
      <p class="section__sub">Состав проекта адаптируем под вашу отрасль, количество пользователей и текущий уровень зрелости CRM. Ниже - не абстрактный список, а рабочие артефакты проекта.</p>
      <ul class="check-list">${serviceCopy.includes.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
    </div>
    ${screenshotMockup(`${service.name}: пример экрана`, serviceCopy.screens)}
  </div>
</section>

<section class="section section--white">
  <div class="container grid grid--2">
    <div>
      <span class="eyebrow">Этапы работы</span>
      <h2>Пошаговый сценарий: от диагностики до результата</h2>
      <p class="section__sub">Каждый этап завершается понятным результатом: документом, настройкой, обучением или проверенным сценарием в CRM.</p>
    </div>
    <div class="steps">
      ${serviceCopy.steps.map((step) => `<div class="step"><div><h3>${escapeHtml(step)}</h3><p>Показываем промежуточный результат и согласуем следующий шаг, чтобы проект не уходил в хаотичные доработки.</p></div></div>`).join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container grid grid--3">
    <article class="card">
      <span class="card__icon">₽</span>
      <h3>Бюджет и формат</h3>
      <p>${escapeHtml(service.price)}</p>
    </article>
    <article class="card">
      <span class="card__icon">↗</span>
      <h3>Что изменится после запуска</h3>
      <p>${escapeHtml(serviceCopy.outcomes.join(', '))}. Руководитель видит процесс, а команда работает по единому сценарию.</p>
    </article>
    <article class="card">
      <span class="card__icon">✓</span>
      <h3>Релевантный пример</h3>
      <p>${escapeHtml(cases[0].results.join(', '))} - результат проекта, где CRM стала управляемой системой продаж.</p>
      <a class="btn btn--ghost" href="${casePath(cases[0])}">Смотреть кейс</a>
    </article>
  </div>
</section>

${ctaBlock(`Обсудить: ${service.name}`, 'Оставьте заявку, и мы покажем, как эта услуга будет выглядеть именно для вашей компании.')}
${faqBlock(faq)}
<section class="section">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Также рекомендуем</span>
      <h2>Смежные услуги</h2>
    </div>
    ${cardGrid(related.map((item) => ({ href: servicePath(item), icon: item.category[0], title: item.name, text: item.short, tags: item.seo.slice(0, 2) })), 3)}
  </div>
</section>`;

  return layout({
    title: service.title,
    description: service.description,
    pathname,
    schema: [breadcrumbSchema(crumbs), serviceSchema(service), faqSchema(faq)],
    content,
  });
}

function licenseServicePage(service) {
  const pathname = servicePath(service);
  const crumbs = [{ name: 'Главная', path: '/' }, { name: 'Услуги', path: '/uslugi/' }, { name: service.name, path: pathname }];
  const cloudTariffs = [
    ['Бесплатный', '0 ₽', 'неограниченно', ['CRM, задачи и диск для старта', '5 ГБ места', 'Базовые коммуникации']],
    ['Базовый', '1 990 ₽/мес', 'до 5 пользователей', ['CRM для небольшой команды', '24 ГБ места', 'Совместная работа и задачи']],
    ['Стандартный', '5 590 ₽/мес', 'до 50 пользователей', ['CRM-маркетинг', '100 ГБ места', 'Расширенные коммуникации']],
    ['Профессиональный', '11 190 ₽/мес', 'до 100 пользователей', ['Автоматизация продаж', '1 024 ГБ места', 'Сквозные процессы и отчеты']],
    ['Энтерпрайз 250', '33 990 ₽/мес', 'до 250 пользователей', ['Масштабирование отделов', '3 ТБ места', 'Расширенное администрирование']],
    ['Энтерпрайз 500', '59 990 ₽/мес', 'до 500 пользователей', ['Для распределенных команд', '5 ТБ места', 'Повышенные лимиты']],
    ['Энтерпрайз 1000', '99 990 ₽/мес', 'до 1000 пользователей', ['Корпоративное внедрение', '10 ТБ места', 'Приоритетные сценарии']],
    ['Энтерпрайз 2000', '199 990 ₽/мес', 'до 2000 пользователей', ['Крупный бизнес', '20 ТБ места', 'Максимальное масштабирование']],
  ];
  const boxTariffs = [
    ['Интернет-магазин + CRM', '99 000 ₽', '12 пользователей', ['Коробочная CRM и магазин', 'Размещение на вашем сервере', 'Доступ к коду и кастомизация']],
    ['Корпоративный портал', '159 000 ₽', '50 пользователей', ['Портал компании', 'CRM, задачи, диск', 'Гибкие права доступа']],
    ['Энтерпрайз', '399 000 ₽', '250 пользователей', ['Высокая нагрузка', 'Многодепартаментность', 'Расширенная безопасность']],
    ['Энтерпрайз 500+', 'по запросу', '500+ пользователей', ['Индивидуальная конфигурация', 'Кластеризация', 'Проектирование инфраструктуры']],
  ];
  const faq = [
    ['Что выбрать: облако или коробку?', 'Облако быстрее запускать и проще поддерживать. Коробка нужна, когда важны локальная инфраструктура, глубокая кастомизация и особые требования безопасности.'],
    ['Цены окончательные?', 'Цены указаны как ориентир для витрины тарифов. Перед покупкой мы проверяем актуальность, акции и партнерские скидки.'],
    ['Можно ли купить тариф через партнера?', 'Да. Нажмите «Купить тариф», оставьте контакты, и мы подготовим счет, поможем выбрать тариф и запустить портал.'],
    ['Помогаете ли вы с переходом между тарифами?', 'Да. Рассчитываем пользователей, место, ограничения и план перехода без потери данных.'],
  ];
  const tariffCard = ([name, price, users, features], type) => `<article class="card tariff-card">
    <span class="eyebrow">${type}</span>
    <h3>${escapeHtml(name)}</h3>
    <div class="price"><strong>${escapeHtml(price)}</strong></div>
    <div class="tariff-card__meta">${escapeHtml(users)}</div>
    <ul>${features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join('')}</ul>
    <a class="btn btn--cta btn--block" href="/kontakty/#audit">Купить тариф</a>
  </article>`;
  const content = `${pageHeroSection({
    crumbs,
    eyebrow: 'Лицензии Битрикс24',
    h1: service.h1,
    lead: `${service.lead} На этой странице собраны облачные и коробочные версии Битрикс24 с ценами, назначением и кнопками покупки через партнера.`,
    primary: ['Подобрать тариф', '#audit'],
    secondary: ['Сравнить цены', '#cloud'],
    videoTitle: 'Как выбрать тариф Битрикс24 без переплаты',
    videoText: 'В видео расскажу, когда достаточно облачного тарифа, когда нужна коробка и как рассчитать пользователей, место и ограничения.',
    videoBullets: ['Облако против коробки', 'Скидки и покупка через партнера', 'Переход на старшие тарифы'],
  })}
<section class="section section--white" id="cloud">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Облачная версия</span>
      <h2>Все облачные тарифы Битрикс24</h2>
      <p class="section__sub">Подходят для быстрого запуска CRM без собственной серверной инфраструктуры. Мы помогаем выбрать тариф, купить лицензию и настроить портал.</p>
    </div>
    <div class="tariff-grid">${cloudTariffs.map((tariff) => tariffCard(tariff, 'Облако')).join('')}</div>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Коробочная версия</span>
      <h2>Коробочные редакции Битрикс24</h2>
      <p class="section__sub">Коробка нужна для on-premise размещения, глубоких доработок, интеграций и особых требований безопасности.</p>
    </div>
    <div class="tariff-grid">${boxTariffs.map((tariff) => tariffCard(tariff, 'Коробка')).join('')}</div>
  </div>
</section>
<section class="section section--white">
  <div class="container split-panel">
    <div>
      <span class="eyebrow">Как выбрать</span>
      <h2>Мы подбираем тариф под структуру компании, а не по принципу «самый дорогой»</h2>
      <ul class="check-list">
        <li>Считаем активных пользователей и роли: менеджеры, РОП, склад, бухгалтерия, руководители.</li>
        <li>Проверяем, какие функции нужны сразу: CRM-маркетинг, бизнес-процессы, телефония, BI, права.</li>
        <li>Оцениваем рост: сколько пользователей и данных появится через 6-12 месяцев.</li>
        <li>Сравниваем стоимость облака, коробки и внедрения под вашу задачу.</li>
      </ul>
    </div>
    ${screenshotMockup('Калькулятор подбора тарифа', ['Пользователи и роли', 'Нужные модули', 'Рекомендованный тариф'])}
  </div>
</section>
${ctaBlock('Купить или подобрать лицензию Битрикс24', 'Оставьте заявку: проверим актуальные цены, акции и скидки партнера, подберем облачный или коробочный тариф и поможем с запуском.')}
${faqBlock(faq)}`;
  return layout({
    title: service.title,
    description: service.description,
    pathname,
    schema: [breadcrumbSchema(crumbs), serviceSchema(service), faqSchema(faq)],
    content,
  });
}

function industriesOverviewPage() {
  const pathname = '/resheniya/';
  const crumbs = [{ name: 'Главная', path: '/' }, { name: 'Решения по отраслям', path: pathname }];
  const content = `${pageHeroSection({
    crumbs,
    eyebrow: 'Отраслевые решения',
    h1: 'Решения Битрикс24 по отраслям',
    lead: 'Низкочастотные страницы с высокой конверсией: показываем боли конкретной отрасли и сценарии внедрения CRM.',
    primary: ['Подобрать отраслевое решение', '#audit'],
    secondary: ['Смотреть кейсы', '/kejsy/'],
    videoTitle: 'Как выбрать отраслевую конфигурацию Битрикс24',
    videoText: 'Покажу, почему для производства, опта, строительства и сервиса нужны разные воронки, роли и отчеты.',
    videoBullets: ['Отраслевые боли', 'Интеграции с 1С и сайтом', 'Как выглядит первый запуск'],
  })}
<section class="section">
  <div class="container">
    ${cardGrid(industries.map((industry) => ({ href: industryPath(industry), icon: 'B24', title: industry.name, text: industry.description, tags: industry.keywords })), 3)}
  </div>
</section>
${ctaBlock('Подберем решение под вашу отрасль', 'Расскажите о цикле сделки, ролях сотрудников и учетных системах. Подготовим карту автоматизации под отрасль.')}`;
  return layout({
    title: 'Решения Битрикс24 по отраслям — dm-marketing.pro',
    description: 'Отраслевые решения Битрикс24 для производства, оптовой торговли, строительства, B2B, логистики и сервисных компаний.',
    pathname,
    schema: [breadcrumbSchema(crumbs)],
    content,
  });
}

function industryPage(industry) {
  const pathname = industryPath(industry);
  const crumbs = [{ name: 'Главная', path: '/' }, { name: 'Решения', path: '/resheniya/' }, { name: industry.name, path: pathname }];
  const faq = [
    [`Чем отличается внедрение для отрасли «${industry.name}»?`, 'Мы учитываем типовой цикл сделки, роли сотрудников, документы, интеграции и управленческие отчеты именно для этой отрасли.'],
    ['Можно ли подключить 1С?', 'Да. Для торгово-производственных компаний интеграция с 1С обычно входит в дорожную карту внедрения.'],
    ['С чего лучше начать?', 'С аудита текущих процессов и карты потерь: это помогает выбрать первые воронки и интеграции.'],
    ['Будет ли обучение сотрудников?', 'Да. Обучение менеджеров, руководителей и администраторов входит в проект запуска.'],
  ];
  const content = `<section class="page-hero">
  <div class="container page-hero__grid">
    <div>
      ${breadcrumbs(crumbs)}
      <span class="eyebrow">CRM для отрасли</span>
      <h1>${escapeHtml(industry.h1)}</h1>
      <p class="page-hero__lead">${escapeHtml(industry.description)}</p>
      <div class="hero__actions"><a class="btn btn--cta btn--lg" href="#audit">Получить отраслевой аудит</a></div>
    </div>
    ${videoBlock({
      title: `Битрикс24 для отрасли: ${industry.name}`,
      text: `Рассказываем, какие процессы важны для отрасли «${industry.name}», какие ошибки чаще всего мешают продажам и как CRM закрывает эти разрывы.`,
      bullets: industry.keywords,
    })}
  </div>
</section>
<section class="section section--white">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Боли отрасли</span>
      <h2>Что чаще всего мешает продажам</h2>
    </div>
    <div class="grid grid--3">${industry.pains.map((pain) => `<article class="card pain-card"><h3>${escapeHtml(pain)}</h3><p>Закрываем проблему через воронку, интеграцию, автоматизацию или регламент.</p></article>`).join('')}</div>
  </div>
</section>
<section class="section">
  <div class="container grid grid--2">
    <div>
      <span class="eyebrow">Решение</span>
      <h2>Как Битрикс24 помогает отрасли</h2>
      <p class="section__sub">Настраиваем CRM так, чтобы менеджеры, руководитель и смежные отделы работали в единой логике.</p>
    </div>
    <ul class="check-list">
      <li>Единая карточка клиента, сделки и истории коммуникаций</li>
      <li>Воронки по типам продаж, проектов или заявок</li>
      <li>Автоматические задачи, уведомления и контроль SLA</li>
      <li>Интеграция с 1С, сайтом, телефонией и мессенджерами</li>
      <li>Дашборды для руководителя и РОПа</li>
    </ul>
  </div>
</section>
<section class="section section--white">
  <div class="container grid grid--2">
    <div class="card">
      <span class="eyebrow">Пример внедрения</span>
      <h2>${escapeHtml(cases[0].h1)}</h2>
      <p>${escapeHtml(cases[0].task)}</p>
      <a class="btn btn--ghost" href="${casePath(cases[0])}">Смотреть кейс</a>
    </div>
    <div class="steps">
      ${['Аудит отраслевого процесса', 'Проектирование воронок и ролей', 'Настройка CRM и интеграций', 'Обучение команды', 'Сопровождение и аналитика'].map((step) => `<div class="step"><div><h3>${step}</h3><p>Фокусируемся на сценариях, которые влияют на выручку и контроль.</p></div></div>`).join('')}
    </div>
  </div>
</section>
${ctaBlock(`Обсудить Битрикс24 для отрасли: ${industry.name}`, 'Покажем, какие процессы стоит автоматизировать в первую очередь и какой бюджет потребуется.')}
${faqBlock(faq)}`;
  return layout({
    title: industry.title,
    description: industry.description,
    pathname,
    schema: [breadcrumbSchema(crumbs), faqSchema(faq)],
    content,
  });
}

function casesOverviewPage() {
  const pathname = '/kejsy/';
  const crumbs = [{ name: 'Главная', path: '/' }, { name: 'Кейсы', path: pathname }];
  const content = `${pageHeroSection({
    crumbs,
    eyebrow: 'Кейсы',
    h1: 'Кейсы внедрения Битрикс24 — реальные результаты клиентов',
    lead: 'Примеры проектов для производственных, оптовых и строительных компаний: задачи, этапы работ и результаты в цифрах.',
    primary: ['Разобрать ваш проект', '#audit'],
    secondary: ['Смотреть цены', '/ceny/'],
    videoTitle: 'Как читать кейсы внедрения Битрикс24',
    videoText: 'В видео объясню, на какие цифры смотреть: конверсия, скорость реакции, ручная работа, повторные продажи и контроль руководителя.',
    videoBullets: ['Задача клиента', 'Что сделали по этапам', 'Как измерили результат'],
  })}
<section class="section">
  <div class="container">
    <div class="grid grid--3">${cases.map((item) => `
      <a class="card card--link" href="${casePath(item)}">
        <span class="card__icon">↗</span>
        <h3>${escapeHtml(item.h1)}</h3>
        <p>${escapeHtml(item.task)}</p>
        <div class="tag-row">${item.results.map((result) => `<span class="tag">${escapeHtml(result)}</span>`).join('')}</div>
      </a>`).join('')}
    </div>
  </div>
</section>
${ctaBlock('Хотите похожий результат?', 'Разберем вашу ситуацию и покажем, какие изменения в Битрикс24 дадут быстрый эффект.')}`;
  return layout({
    title: 'Кейсы внедрения Битрикс24 — примеры проектов dm-marketing.pro',
    description: 'Кейсы внедрения Битрикс24: производство, оптовая торговля, строительство, интеграция 1С и автоматизация отдела продаж.',
    pathname,
    schema: [breadcrumbSchema(crumbs)],
    content,
  });
}

function casePage(item) {
  const pathname = casePath(item);
  const crumbs = [{ name: 'Главная', path: '/' }, { name: 'Кейсы', path: '/kejsy/' }, { name: item.name, path: pathname }];
  const content = `${pageHeroSection({
    crumbs,
    eyebrow: 'Кейс',
    h1: item.h1,
    lead: item.description,
    primary: ['Хочу похожий результат', '#audit'],
    secondary: ['Все кейсы', '/kejsy/'],
    videoTitle: `Разбор кейса: ${item.name}`,
    videoText: `В видео расскажем, какая была задача у клиента, какие настройки Битрикс24 дали результат и что можно повторить в вашей компании.`,
    videoBullets: item.results,
  })}
<section class="section">
  <div class="container article">
    <h2>Задача клиента</h2>
    <p>${escapeHtml(item.task)}</p>
    <h2>Что было проблемой</h2>
    <p>Данные о клиентах, задачах и документах находились в разных инструментах, поэтому руководителю было сложно контролировать сроки, конверсию и ответственность менеджеров.</p>
    <h2>Что сделали</h2>
    <ul class="check-list">${item.work.map((work) => `<li>${escapeHtml(work)}</li>`).join('')}</ul>
    <h2>Результаты в цифрах</h2>
    <div class="case-result">${item.results.map((result) => {
      const [main, ...rest] = result.split(' ');
      return `<div><b>${escapeHtml(main)}</b><span>${escapeHtml(rest.join(' '))}</span></div>`;
    }).join('')}</div>
    <blockquote class="quote">${escapeHtml(item.quote)}</blockquote>
  </div>
</section>
${ctaBlock('Разобрать ваш проект внедрения', 'Покажем, какие результаты можно получить в вашей отрасли и какой первый этап выбрать.')}`;
  return layout({
    title: item.title,
    description: item.description,
    pathname,
    schema: [breadcrumbSchema(crumbs)],
    content,
  });
}

function pricesPage() {
  const pathname = '/ceny/';
  const crumbs = [{ name: 'Главная', path: '/' }, { name: 'Цены', path: pathname }];
  const faq = [
    ['Почему указаны диапазоны цен?', 'Стоимость зависит от количества пользователей, воронок, интеграций, автоматизаций и объема обучения.'],
    ['Можно ли начать со Старт-пакета?', 'Да. Он подходит для первого запуска CRM и проверки гипотез без сложных интеграций.'],
    ['Лицензия Битрикс24 входит в стоимость?', 'Лицензия оплачивается отдельно по официальным тарифам Битрикс24. Мы помогаем подобрать тариф и оформить скидку партнера.'],
    ['Как получить точную смету?', 'Оставьте заявку на аудит. После диагностики мы подготовим состав работ, сроки и бюджет.'],
  ];
  const content = `${pageHeroSection({
    crumbs,
    eyebrow: 'Пакеты и калькулятор',
    h1: 'Стоимость внедрения Битрикс24 — пакеты и калькулятор цен',
    lead: 'Прозрачные ориентиры для старта. Точная стоимость фиксируется после аудита процессов и интеграций.',
    primary: ['Рассчитать стоимость', '#audit'],
    secondary: ['Калькулятор', '#calculator'],
    videoTitle: 'Из чего складывается цена внедрения',
    videoText: 'Рассказываю, почему бюджет зависит от воронок, пользователей, интеграций, обучения и уровня автоматизации.',
    videoBullets: ['Пакеты Старт, Бизнес, Премиум', 'Что влияет на смету', 'Как получить точный расчет'],
  })}
<section class="section">
  <div class="container grid grid--3">
    ${[
      ['Старт', '180 000', '1 воронка, базовые поля, источники лидов, обучение менеджеров'],
      ['Бизнес', '320 000', 'Несколько воронок, автоматизация, телефония, отчеты, обучение РОПа'],
      ['Премиум', '540 000', '1С, сайт, BI-отчеты, сложные роботы, регламенты и сопровождение запуска'],
    ].map(([name, price, text]) => `<article class="card"><span class="eyebrow">${name}</span><div class="price"><strong>${price}</strong><span>₽ от</span></div><p>${text}</p><a class="btn btn--cta btn--block" href="#audit">Рассчитать пакет</a></article>`).join('')}
  </div>
</section>
<section class="section section--white">
  <div class="container">
    <div class="section__head">
      <span class="eyebrow">Что входит</span>
      <h2>Сравнение пакетов</h2>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Работы</th><th>Старт</th><th>Бизнес</th><th>Премиум</th></tr></thead>
        <tbody>
          ${[
            ['Аудит и ТЗ', 'Экспресс', 'Подробно', 'Подробно + стратегия'],
            ['Воронки продаж', '1', '2-4', '5+ и отраслевые сценарии'],
            ['Автоматизация', 'Базовые задачи', 'Роботы и уведомления', 'Сложные бизнес-процессы'],
            ['Интеграции', 'Формы сайта', 'Телефония и мессенджеры', '1С, сайт, аналитика'],
            ['Обучение', '1 тренинг', '2 тренинга', 'Программа + база знаний'],
          ].map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>
</section>
<section class="section" id="calculator">
  <div class="container grid grid--2">
    <div>
      <span class="eyebrow">Калькулятор</span>
      <h2>Рассчитайте ориентир стоимости</h2>
      <p class="section__sub">Калькулятор не заменяет аудит, но помогает понять порядок бюджета.</p>
    </div>
    <div class="card calculator" data-calculator>
      <label>Пользователей CRM<input type="number" name="employees" min="1" max="300" value="12"></label>
      <label>Интеграций<select name="integrations"><option value="0">Нет</option><option value="1" selected>1 интеграция</option><option value="2">2 интеграции</option><option value="3">3+ интеграции</option></select></label>
      <label>Уровень автоматизации<select name="automation"><option value="1">Базовый</option><option value="2" selected>Средний</option><option value="4">Сложный</option></select></label>
      <div class="calculator__result" data-calculator-result></div>
    </div>
  </div>
</section>
${ctaBlock('Получить точный расчет стоимости', 'Проведем диагностику процессов и подготовим смету с этапами, сроками и приоритетами запуска.')}
${faqBlock(faq)}`;
  return layout({
    title: 'Цены на внедрение Битрикс24 — прозрачная стоимость работ',
    description: 'Стоимость внедрения Битрикс24: пакеты Старт, Бизнес и Премиум, таблица работ, калькулятор цены и FAQ по бюджету проекта.',
    pathname,
    schema: [breadcrumbSchema(crumbs), faqSchema(faq)],
    content,
  });
}

function blogOverviewPage() {
  const pathname = '/blog/';
  const crumbs = [{ name: 'Главная', path: '/' }, { name: 'Блог', path: pathname }];
  const content = `${pageHeroSection({
    crumbs,
    eyebrow: 'Блог',
    h1: 'Блог о Битрикс24, CRM и системах продаж',
    lead: 'Статьи для SEO-трафика и прогрева аудитории: тарифы, сравнения, ошибки внедрения, интеграции и оцифровка продаж.',
    primary: ['Получить аудит', '#audit'],
    secondary: ['Услуги', '/uslugi/'],
    videoTitle: 'Как использовать блог перед внедрением CRM',
    videoText: 'Покажу, какие статьи помогают выбрать тариф, сравнить CRM, избежать ошибок и подготовить отдел продаж к запуску.',
    videoBullets: ['Тарифы и сравнения', 'Ошибки внедрения', 'Интеграция 1С и CRM'],
  })}
<section class="section">
  <div class="container">
    ${cardGrid(blogPosts.map((post) => ({ href: blogPath(post), icon: '✎', title: post.h1, text: post.description, tags: post.keywords })), 3)}
  </div>
</section>
${ctaBlock('Обсудить тему из блога на аудите', 'Если статья похожа на вашу ситуацию, разберем ее на примере вашей компании и покажем план действий.')}`;
  return layout({
    title: 'Блог о Битрикс24 и CRM — dm-marketing.pro',
    description: 'Практические статьи о Битрикс24, CRM, интеграции 1С, тарифах, ошибках внедрения и оцифровке отдела продаж.',
    pathname,
    schema: [breadcrumbSchema(crumbs)],
    content,
  });
}

function blogPostPage(post) {
  const pathname = blogPath(post);
  const crumbs = [{ name: 'Главная', path: '/' }, { name: 'Блог', path: '/blog/' }, { name: post.h1, path: pathname }];
  const content = `${pageHeroSection({
    crumbs,
    eyebrow: 'Статья',
    h1: post.h1,
    lead: post.description,
    primary: ['Разобрать задачу', '#audit'],
    secondary: ['Все статьи', '/blog/'],
    videoTitle: `Видео по теме: ${post.h1}`,
    videoText: 'Коротко объясняем главные выводы статьи и показываем, как применить их в реальном проекте внедрения Битрикс24.',
    videoBullets: post.keywords,
  })}
<section class="section">
  <div class="container article">
    <p>Материал подготовлен для руководителей и владельцев компаний, которые хотят внедрить CRM осознанно: с понятными целями, этапами и метриками результата.</p>
    <h2>С чего начать</h2>
    <p>Начните с аудита отдела продаж. Важно понять, где появляются лиды, кто отвечает за первый контакт, какие этапы сделки уже есть и какие данные нужны руководителю.</p>
    <ul class="check-list">
      <li>Опишите текущий путь клиента от заявки до оплаты.</li>
      <li>Разделите обязательные поля и полезные, но второстепенные данные.</li>
      <li>Зафиксируйте KPI: скорость реакции, конверсия этапов, повторные продажи.</li>
      <li>Проверьте, какие системы нужно связать с Битрикс24.</li>
    </ul>
    <h2>Что важно учесть при внедрении</h2>
    <p>CRM не должна становиться дополнительной нагрузкой. Хорошее внедрение убирает ручную работу: создает задачи, напоминает о касаниях, формирует документы и показывает отчетность.</p>
    <h2>Когда нужен интегратор</h2>
    <p>Если у вас несколько воронок, интеграция с 1С, сайт, телефония, мессенджеры или сложная отчетность, выгоднее сразу проектировать систему с интегратором.</p>
    <div class="card">
      <h3>Полезные ссылки по теме</h3>
      <p><a href="/uslugi/vnedrenie-bitrix24/">Внедрение Битрикс24 под ключ</a> · <a href="/uslugi/audit-otdela-prodazh/">Аудит отдела продаж</a> · <a href="/ceny/">Цены</a></p>
    </div>
  </div>
</section>
${ctaBlock('Разобрать вашу CRM-задачу', 'Покажем, какие шаги нужны именно вашей компании и как не повторить типовые ошибки внедрения.')}`;
  return layout({
    title: post.title,
    description: post.description,
    pathname,
    schema: [breadcrumbSchema(crumbs)],
    content,
  });
}

function aboutPage() {
  const pathname = '/o-kompanii/';
  const crumbs = [{ name: 'Главная', path: '/' }, { name: 'О компании', path: pathname }];
  const content = `${pageHeroSection({
    crumbs,
    eyebrow: 'О компании',
    h1: 'dm-marketing.pro — сертифицированный партнер Битрикс24',
    lead: 'Мы помогаем компаниям перейти от хаотичных продаж к управляемой системе на базе Битрикс24.',
    primary: ['Познакомиться на аудите', '#audit'],
    secondary: ['Команда', '/o-kompanii/komanda/'],
    videoTitle: 'Кто мы и как внедряем Битрикс24',
    videoText: 'Расскажем про подход dm-marketing: сначала продажи и методология, затем CRM, интеграции, обучение и сопровождение.',
    videoBullets: ['Методология продаж', 'Команда проекта', 'Сопровождение после запуска'],
    stats: heroStats(),
  })}
<section class="section section--white">
  <div class="container grid grid--2">
    <div class="card"><h2>Миссия</h2><p>Сделать продажи прозрачными, повторяемыми и управляемыми: от первого лида до повторной покупки.</p></div>
    <div class="card"><h2>Подход</h2><p>Сначала описываем процесс и метрики, затем настраиваем CRM, интеграции, автоматизации и обучение.</p></div>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="section__head"><span class="eyebrow">Команда и компетенции</span><h2>Эксперты по Битрикс24 и системам продаж</h2></div>
    <div class="grid grid--3">
      <article class="card"><span class="card__icon">CRM</span><h3>CRM-архитектор</h3><p>Проектирует структуру портала, воронки, роли и интеграции.</p></article>
      <article class="card"><span class="card__icon">Sales</span><h3>Методолог продаж</h3><p>Описывает регламенты, скрипты, KPI и контроль этапов.</p></article>
      <article class="card"><span class="card__icon">Dev</span><h3>Интегратор</h3><p>Подключает 1С, сайт, телефонию, мессенджеры и аналитику.</p></article>
    </div>
  </div>
</section>
${ctaBlock('Познакомиться на аудите', 'Расскажите о текущей CRM и продажах, а мы покажем подход на примере вашей компании.')}`;
  return layout({
    title: 'О компании dm-marketing.pro — партнер Битрикс24',
    description: 'dm-marketing.pro — агентство внедрения Битрикс24 и построения систем продаж для торговых, производственных и B2B-компаний.',
    pathname,
    schema: [breadcrumbSchema(crumbs)],
    content,
  });
}

function teamPage() {
  const pathname = '/o-kompanii/komanda/';
  const crumbs = [{ name: 'Главная', path: '/' }, { name: 'О компании', path: '/o-kompanii/' }, { name: 'Команда', path: pathname }];
  const content = `${pageHeroSection({
    crumbs,
    eyebrow: 'Команда',
    h1: 'Наша команда — эксперты по Битрикс24 и системам продаж',
    lead: 'В проектах участвуют CRM-архитектор, аналитик продаж, интегратор, методолог обучения и менеджер сопровождения.',
    primary: ['Обсудить проект', '#audit'],
    secondary: ['Сертификаты', '/o-kompanii/sertifikaty/'],
    videoTitle: 'Какие специалисты нужны для внедрения',
    videoText: 'Покажем, кто отвечает за аналитику, настройку CRM, интеграции, обучение и сопровождение после запуска.',
    videoBullets: ['CRM-архитектор', 'Аналитик продаж', 'Интегратор и методолог'],
  })}
<section class="section">
  <div class="container grid grid--4">
    ${['CRM-архитектор', 'Бизнес-аналитик', 'Интегратор 1С', 'Методолог обучения', 'Специалист поддержки', 'Проектный менеджер', 'BI-аналитик', 'Маркетолог CRM'].map((role) => `<article class="card"><span class="card__icon">${role[0]}</span><h3>${role}</h3><p>Отвечает за свой блок работ и фиксирует результат в проектной документации.</p></article>`).join('')}
  </div>
</section>
${ctaBlock('Обсудить проект с командой', 'Подключим нужных специалистов после экспресс-аудита и покажем состав работ.')}`;
  return layout({
    title: 'Команда dm-marketing.pro — эксперты по Битрикс24',
    description: 'Команда dm-marketing.pro: CRM-архитекторы, аналитики продаж, интеграторы, методологи обучения и специалисты сопровождения.',
    pathname,
    schema: [breadcrumbSchema(crumbs)],
    content,
  });
}

function certificatesPage() {
  const pathname = '/o-kompanii/sertifikaty/';
  const crumbs = [{ name: 'Главная', path: '/' }, { name: 'О компании', path: '/o-kompanii/' }, { name: 'Сертификаты', path: pathname }];
  const content = `${pageHeroSection({
    crumbs,
    eyebrow: 'Сертификаты',
    h1: 'Сертифицированный партнер Битрикс24 — наши компетенции',
    lead: 'Размещаем сертификаты партнера Битрикс24, подтверждение компетенций по CRM, бизнес-процессам и интеграциям.',
    primary: ['Проверить компетенции', '#audit'],
    secondary: ['О компании', '/o-kompanii/'],
    videoTitle: 'Какие компетенции важны при выборе интегратора',
    videoText: 'В видео объясним, почему сертификаты важны, но решающим остается опыт в продажах, интеграциях и обучении команды.',
    videoBullets: ['CRM и бизнес-процессы', 'Интеграции', 'Обучение и поддержка'],
  })}
<section class="section">
  <div class="container grid grid--3">
    ${['Партнер Битрикс24', 'CRM и продажи', 'Бизнес-процессы', 'Интеграции', 'Обучение пользователей', 'Сопровождение порталов'].map((cert) => `<article class="card"><span class="card__icon">✓</span><h3>${cert}</h3><p>Блок-плейсхолдер для размещения изображения сертификата и описания компетенции.</p></article>`).join('')}
  </div>
</section>
${ctaBlock('Проверить компетенции на своем проекте', 'На аудите покажем, какие специалисты нужны для вашей задачи и какие риски важно закрыть.')}`;
  return layout({
    title: 'Сертификаты Битрикс24 — компетенции dm-marketing.pro',
    description: 'Сертификаты и компетенции dm-marketing.pro как партнера Битрикс24: CRM, бизнес-процессы, интеграции и обучение.',
    pathname,
    schema: [breadcrumbSchema(crumbs)],
    content,
  });
}

function contactsPage() {
  const pathname = '/kontakty/';
  const crumbs = [{ name: 'Главная', path: '/' }, { name: 'Контакты', path: pathname }];
  const content = `<section class="page-hero">
  <div class="container page-hero__grid">
    <div>
      ${breadcrumbs(crumbs)}
      <span class="eyebrow">Контакты</span>
      <h1>Контакты — обсудим внедрение Битрикс24 для вашего бизнеса</h1>
      <p class="page-hero__lead">Оставьте заявку, позвоните или напишите в WhatsApp. Ответим на вопросы и предложим формат экспресс-аудита.</p>
      <div class="hero__actions">
        <a class="btn btn--cta btn--lg" href="tel:${phoneHref}">${phoneDisplay}</a>
        <a class="btn btn--ghost btn--lg" href="${whatsapp}">Написать в WhatsApp</a>
      </div>
    </div>
    ${videoBlock({
      title: 'Как проходит первая консультация',
      text: 'Расскажем, какие вопросы зададим на первой встрече, какие данные лучше подготовить и что вы получите после аудита.',
      bullets: ['Диагностика отдела продаж', 'Оценка текущей CRM', 'План внедрения и бюджет'],
    })}
  </div>
</section>
<section class="section section--white">
  <div class="container grid grid--2">
    <div class="card">
      <h3>Реквизиты для связи</h3>
      <p><b>Телефон:</b> <a href="tel:${phoneHref}">${phoneDisplay}</a></p>
      <p><b>Email:</b> <a href="mailto:${email}">${email}</a></p>
      <p><b>Регион:</b> Воронеж, Воронежская область</p>
      <p><b>Формат:</b> онлайн по России, встречи в Воронеже по договоренности</p>
    </div>
    ${screenshotMockup('Маршрут заявки в Битрикс24', ['Заявка с сайта', 'Сделка в CRM', 'Ответственный менеджер'])}
  </div>
</section>
${ctaBlock('Записаться на бесплатный аудит', 'Разберем ваш отдел продаж, CRM, источники лидов и интеграции. Подготовим план внедрения и ориентир бюджета.')}`;
  return layout({
    title: 'Контакты dm-marketing.pro — внедрение Битрикс24',
    description: 'Контакты dm-marketing.pro: заявка на бесплатный аудит отдела продаж, телефон, WhatsApp, email и регион Воронеж.',
    pathname,
    schema: [breadcrumbSchema(crumbs)],
    content,
  });
}

function writePage(pathname, html) {
  const normalized = normalizePath(pathname);
  const target = normalized === '/'
    ? path.join(rootDir, 'index.html')
    : path.join(rootDir, normalized, 'index.html');
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, `${html}\n`, 'utf8');
}

const pages = [
  { path: '/', html: homePage() },
  { path: '/uslugi/', html: servicesOverviewPage() },
  ...servicePages.map((service) => ({ path: servicePath(service), html: service.slug === 'licenzii-bitrix24' ? licenseServicePage(service) : servicePage(service) })),
  { path: '/resheniya/', html: industriesOverviewPage() },
  ...industries.map((industry) => ({ path: industryPath(industry), html: industryPage(industry) })),
  { path: '/kejsy/', html: casesOverviewPage() },
  ...cases.map((item) => ({ path: casePath(item), html: casePage(item) })),
  { path: '/ceny/', html: pricesPage() },
  { path: '/blog/', html: blogOverviewPage() },
  ...blogPosts.map((post) => ({ path: blogPath(post), html: blogPostPage(post) })),
  { path: '/o-kompanii/', html: aboutPage() },
  { path: '/o-kompanii/komanda/', html: teamPage() },
  { path: '/o-kompanii/sertifikaty/', html: certificatesPage() },
  { path: '/kontakty/', html: contactsPage() },
];

for (const page of pages) {
  writePage(page.path, page.html);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url><loc>${url(page.path)}</loc><changefreq>weekly</changefreq><priority>${page.path === '/' ? '1.0' : '0.8'}</priority></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemap, 'utf8');

const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;
fs.writeFileSync(path.join(rootDir, 'robots.txt'), robots, 'utf8');

console.log(`Generated ${pages.length} pages.`);
