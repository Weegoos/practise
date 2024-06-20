<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h4>Здесь мы практикуем Props в Vue js</h4>
    <PropsComponent :company="company" />
  </div>
</template>

<script setup>
import PropsComponent from "../components/PropsComponent.vue";

const company = ["Google", "Facebook"];
</script>

<style></style>
