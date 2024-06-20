<template>
  <div>
    <i>Дочерний компонент PropsComponent.vue</i> <br />
    <code
      ><i>{{ message }}</i></code
    >
  </div>
</template>

<script setup>
const { props } = defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>

<style></style>
