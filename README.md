# dm-marketing.pro static site

Статический сайт агентства внедрения Битрикс24, собранный по ТЗ из 46 страниц:

- главная страница;
- раздел услуг и 22 страницы услуг, включая рекомендованные;
- отраслевые решения;
- кейсы;
- цены с калькулятором;
- блог;
- страницы компании и контактов.

## Команды

```bash
npm run build
```

Генерирует HTML-страницы, `sitemap.xml` и `robots.txt` из `scripts/build-site.mjs`.

```bash
npm run serve
```

Запускает локальный статический сервер на порту `4173`.

## Интеграции перед запуском

В `scripts/build-site.mjs` подготовлены пустые значения конфигурации:

- `window.DM_MARKETING_ANALYTICS.yandexMetrikaId`;
- `window.DM_MARKETING_ANALYTICS.googleAnalyticsId`;
- `window.DM_MARKETING_WIDGETS.bitrixOpenLineUrl`.

Перед production-деплоем внесите реальные ID/URL. Публичных строк-заглушек
в HTML нет.

Формы размечены атрибутами `data-form` и `data-source`, чтобы подключить отправку в Битрикс24 через вебхук или backend-обработчик.
