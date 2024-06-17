<template>
  <div class="q-pa-md">
    <q-ajax-bar position="bottom" ref="bar" size="10px" color="red" skip-hijack/>
    <q-btn color="primary" label="Trigger" @click="trigger" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const bar = ref(null);

function trigger() {
    const barRef = bar.value;
    barRef.start()

    setTimeout(() => {
        const barRef = bar.value;
        if (barRef){
            barRef.stop()
        }
    }, Math.random() * 3000 + 1000)
}
</script>

<style>

</style>