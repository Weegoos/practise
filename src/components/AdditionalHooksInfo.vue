<template>
  <div>
    <div class="q-mt-md" v-for="ex in example" :key="ex.description">
      <p>
        <strong>{{ ex.description }}</strong>
      </p>
      <p><i>Пример:</i></p>
      <div>
        <code>{{ ex.code }}</code>
      </div>
      <q-separator />
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onUnmounted } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
onBeforeUnmount(() => {
  $q.notify({
    message: "Использование хука onBeforeUnmount",
    timeout: 250,
  });
});
onUnmounted(() => {
  $q.notify({
    message: "Использование хука onUnmounted",
    timeout: 250,
  });
});

const example = [
  {
    description: "Использование хука onErrorCaptured",
    code: `       onErrorCaptured((err, instance, info) => {
    $q.notify({
        message: '{err}: {info}',
        color: 'negative'
    })
    })`,
  },
  {
    description: "Использование хука onUnmounted",
    code: `onUnmounted(() => {
    $q.notify({
        message: 'Использование хука onUnmounted',
        timeout: 250
    })
})`,
  },
  {
    description: "Использование хука onBeforeMount",
    code: `onBeforeMount(() => {
  registerTimeout(() => {
    $q.notify({
      message: 'Страница загружается',
      caption: 'Подождите...',
      spinner: QSpinnerGears,
      timeout: 1500
    })
  }, 500)
})`,
  },
  {
    description: "Использование хука onMounted",
    code: `onMounted(() => {
  registerTimeout(() => {
    $q.notify({
      message: 'Страница загружена',
      icon: 'check',
      timeout: 1500,
      color: 'positive'
    }, 1500)
  })
})`,
  },
  {
    description: "Использование хука onUpdated",
    code: `onUpdated(() => {
    if (userName.value.length < 4){
        $q.notify({
            message: 'Имя пользователя должно быть минимум 4 символа',
            color: 'warning',
            icon: 'warning'
        })
    }else {
        $q.notify({
            message: 'Отлично! Нажмите кнопку ОТПРАВИТЬ',
            color: 'positive',
            icon: 'check'
        })
    }
})`,
  },
];
</script>

<style></style>
