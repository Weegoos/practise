<template>
  <div>
    <q-ajax-bar
      position="bottom"
      ref="bar"
      size="4px"
      color="red"
      skip-hijack
    />
    <q-btn color="primary" label="Trigger" @click="trigger" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const bar = ref(null);

const trigger = () => {
  try {
    const barRef = bar.value;
    barRef.value.start();

    setTimeout(() => {
      const barRef = bar.value;

      if (barRef) {
        barRef.stop();
      }
    }, Math.random() * 3000 + 1000);
  } catch (error) {
    throw new Error(error);
  }
};
</script>

<style></style>
