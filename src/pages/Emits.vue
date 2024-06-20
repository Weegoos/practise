<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h4>Страница для Emits</h4>
    <EmitsChildComponent @onClick="showText" @clickBtn="clickMessage" />
  </div>
</template>

<script setup>
import EmitsChildComponent from "../components/EmitsChildComponent.vue";
import { useQuasar } from "quasar";
const q = useQuasar();
const showText = (val) => {
  q.notify({
    message: val,
    color: "positive",
    icon: "check",
  });
};

const clickMessage = (val) => {
  q.notify({
    message: val,
  });
};
</script>

<style></style>
