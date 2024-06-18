<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h4>Ссылки на конспекты</h4>
    <div v-for="link in links" :key="link.label">
      <ul>
        <span>
          <i>{{ link.description }}</i>
        </span>
        <li>
          <a target="_blank" :href="link.link">{{ link.label }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const links = [
  {
    link: "https://ru.vuejs.org/api/composition-api-lifecycle",
    label: "Ссылка на конспект хуков",
    description: "Для конспекта всех хуков жизненного цикла в Vue js:",
  },
  {
    link: "https://quasar.dev/vue-directives/morph",
    label:
      "https://quasar.dev/vue-directives/morph#example--morph-a-button-into-a-card",
    description: "Для главной страницы Morph",
  },
  {
    link: "https://git-scm.com/book/ru/v2/%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-C%3A-%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B-Git-%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B",
    label:
      "https://git-scm.com/book/ru/v2/%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-C%3A-%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B-Git-%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B",
    description: "Приложение C: Команды Git - Основные команды",
  },
];
</script>

<style></style>
