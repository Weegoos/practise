<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h4>Страница для Hooks</h4>
    <keep-alive>
    <HooksChildComponent v-if="showComponent" />
  </keep-alive>
  <q-btn @click="toggleComponent">Toggle Component</q-btn> <br>
    <q-btn no-caps label="Информация о хуков" @click="clickBtn" />
    <AdditionalHooksInfo v-if="showChild"/>
  </div>
</template>

<script setup>
import { onActivated, onBeforeMount, onErrorCaptured, onMounted, ref } from 'vue';
import { QSpinnerGears, useQuasar, useTimeout } from 'quasar';
import HooksChildComponent from '../components/HooksChildComponent.vue';
import AdditionalHooksInfo from '../components/AdditionalHooksInfo.vue';

const $q = useQuasar()
const {registerTimeout} = useTimeout()
onBeforeMount(() => {
  registerTimeout(() => {
    $q.notify({
      message: 'Страница загружается',
      caption: 'Подождите...',
      spinner: QSpinnerGears,
      timeout: 1500
    })
  }, 500)
})

onMounted(() => {
  registerTimeout(() => {
    $q.notify({
      message: 'Страница загружена',
      icon: 'check',
      timeout: 1500,
      color: 'positive'
    }, 1500)
  })
})

onErrorCaptured((err, instance, info) => {
  $q.notify({
    message: `${err}: ${info}`,
    color: 'negative'
  })
})

const showChild = ref(false)

const clickBtn = () => {
  showChild.value = !showChild.value
  console.log("Batyr");
}


const showComponent = ref(true);

function toggleComponent() {
  showComponent.value = !showComponent.value;
}

</script>

<style>

</style>