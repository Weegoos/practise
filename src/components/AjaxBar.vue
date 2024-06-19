<template>
  <div>
    <q-ajax-bar
      position="bottom"
      ref="bar"
      size="4px"
      color="red"
      skip-hijack
    />
    <q-btn label="Trigger" no-caps @click="trigger" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const bar = ref(null);

const trigger = () => {
  const barRef = bar.value;
  barRef.start();

  setTimeout(() => {
    const barRef = bar.value;
    if (barRef) {
      barRef.stop();
    }
  }, Math.random() * 3000 + 1000);
};
</script>

<style></style>
