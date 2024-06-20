<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h4>Components</h4>
    <AjaxBar />
    <Avatar />
  </div>
</template>

<script setup>
import { QSpinnerGears, useQuasar } from "quasar";
import { onErrorCaptured } from "vue";
import AjaxBar from "../components/AjaxBar.vue";
import Avatar from "../components/Avatar.vue";

const $q = useQuasar();

onErrorCaptured((err, instance, info) => {
  $q.notify({
    message: `${err} : ${info}`,
    color: "warning",
    spinner: QSpinnerGears,
  });
});
</script>

<style></style>
