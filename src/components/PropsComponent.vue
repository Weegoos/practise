<template>
  <div>{{ company }}</div>
</template>

<script setup>
const { props } = defineProps({
  company: {
    type: Array,
    required: true,
  },
});
</script>

<style></style>
