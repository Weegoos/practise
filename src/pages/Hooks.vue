<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h4>Страница для Hooks</h4>
    <keep-alive>
      <HooksChildComponent v-if="showComponent" />
    </keep-alive>
    <q-btn label="Toggle" @click="toggleComponent" />
    <br />
    <q-btn no-caps label="Информация о хуков" @click="clickBtn" />
    <AdditionalHooksInfo v-if="showChild" />
    <!-- onRenderTracked  -->
    <div>
      <p>{{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
  </div>
</template>

<script setup>
import {
  onBeforeMount,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  ref,
} from "vue";
import { QSpinnerGears, useQuasar, useTimeout } from "quasar";
import HooksChildComponent from "../components/HooksChildComponent.vue";
import AdditionalHooksInfo from "../components/AdditionalHooksInfo.vue";

const $q = useQuasar();
const { registerTimeout } = useTimeout();
const showComponent = ref(true);

onBeforeMount(() => {
  registerTimeout(() => {
    $q.notify({
      message: "Страница загружается",
      caption: "Подождите...",
      spinner: QSpinnerGears,
      timeout: 1500,
    });
  }, 500);
});

onMounted(() => {
  registerTimeout(() => {
    $q.notify(
      {
        message: "Страница загружена",
        icon: "check",
        timeout: 1500,
        color: "positive",
      },
      1500
    );
  });
});

onErrorCaptured((err, instance, info) => {
  $q.notify({
    message: `${err}: ${info}`,
    color: "negative",
  });
});

const showChild = ref(false);

const clickBtn = () => {
  showChild.value = !showChild.value;
  console.log("Batyr");
};

const count = ref(0);

const increment = () => {
  count.value++;
};

const toggleComponent = () => {
  showComponent.value = !showComponent.value;
};

onRenderTracked((e) => {
  $q.notify({
    message: `Tracked effect: target=${JSON.stringify(e.target)}, key=${String(
      e.key
    )}, type=${e.type}`,
  });
});
</script>

<style></style>
