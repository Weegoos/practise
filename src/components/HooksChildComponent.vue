<!-- eslint-disable vue/valid-template-root -->
<template>
  <div>
    <q-input
      v-model="userName"
      label="Введите имя пользователя..."
      hint="Минимум 4 символа"
      style="max-width: 70vw"
    />
    <q-btn label="Отправить" @click="submit" class="q-mb-sm" /> <br />
    <q-separator spaced inset vertical dark />
    <q-btn
      icon="error"
      no-caps
      label="Нажмите чтобы вызвать ошибку"
      @click="throwError"
    />

    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import {
  onActivated,
  onBeforeUpdate,
  onDeactivated,
  onUpdated,
  ref,
} from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const userName = ref("");
const throwError = () => {
  throw new Error("Ошибка вызвана в дочернем компоненте");
};

onBeforeUpdate(() => {
  $q.notify({
    message: "Вы меняете текст!",
  });
});

onUpdated(() => {
  if (userName.value.length < 4) {
    $q.notify({
      message: "Имя пользователя должно быть минимум 4 символа",
      color: "warning",
      icon: "warning",
    });
  } else {
    $q.notify({
      message: "Отлично! Нажмите кнопку ОТПРАВИТЬ",
      color: "positive",
      icon: "check",
    });
  }
});

const submit = () => {
  if (userName.value.length >= 4) {
    $q.notify({
      message: "Имя пользователя успешно отправлена!",
      color: "positive",
      icon: "check",
    });
  }
};

const message = ref("Message is inactive");

onActivated(() => {
  message.value = "Component is active";
});

onDeactivated(() => {
  message.value = "Component is inactive";
});
</script>

<style></style>
