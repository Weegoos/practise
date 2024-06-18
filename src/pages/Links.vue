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
    link: "https://v3.ru.vuejs.org/ru/api/options-lifecycle-hooks.html#mounted",
    label: "Ссылка на конспект хуков",
    description: "Для конспекта всех хуков жизненного цикла в Vue js:",
  },
  {
    link: "https://quasar.dev/vue-directives/morph",
    label:
      "https://quasar.dev/vue-directives/morph#example--morph-a-button-into-a-card",
    description: "Для главной страницы Morph",
  },
];
</script>

<style></style>
