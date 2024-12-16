На проекте `НЕ ИСПОЛЬЗУЕТСЯ` tailwindcss или какие-либо другие фреймворки

# install

1. `npm i`
2. `npm dev`
3. `http://localhost:5173/`

**Генерация стилей:** `npm style`

# Folders map

- `/src/components` - web компоненты
- `/src/plugins/a-tailwind`` - генерация стилей ( для перегенерации нужно запустить `npm
  style`). Конфиг темы:`a-tailwind.conf`
- `/src/templates` - самостоятельный блок. Вставляются в тело страницы в
  `/src/main.js` скриптом `/src/composables/bootstrap`
- `/src/components` - web компоненты
