<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h4>Components</h4>
    <AjaxBar />
    <Avatar />
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { onErrorCaptured } from "vue";
import AjaxBar from "../components/AjaxBar.vue";
import Avatar from "../components/Avatar.vue";

const $q = useQuasar();
</script>

<style></style>
