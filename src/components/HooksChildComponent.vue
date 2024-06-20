<!-- eslint-disable vue/valid-template-root -->
<template>
<div>
    <q-input v-model="userName" label="Введите имя пользователя..." hint="Минимум 4 символа" style="max-width: 70vw;"/>
    <q-btn label="Отправить" @click="submit" class="q-mb-sm"/> <br>
    <q-separator spaced inset vertical dark />
  <q-btn icon="error" no-caps label="Нажмите чтобы вызвать ошибку" @click="throwError" />
  <div>{{ message }}</div>
</div>
</template>

<script setup>
import { onActivated, onDeactivated, onUpdated, ref } from "vue"
import { useQuasar, useTimeout } from 'quasar';

const $q = useQuasar()
const userName = ref('')
const throwError = () => {
    throw new Error('Ошибка вызвана в дочернем компоненте')
}   

onUpdated(() => {
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
})

const submit = () => {
    if (userName.value.length >= 4){
        $q.notify({
            message: 'Имя пользователя успешно отправлена!',
            color: 'positive',
            icon: 'check'
        })
    }
}

const message = ref('Component is inactive');
const {registerTimeout} = useTimeout()
onActivated(() => {
  message.value = 'Component is activated';
  registerTimeout(() => {
    $q.notify({
        message: 'Component is activated',
        timeout: 500
    })
  }, 500);
})

onDeactivated(() => {
    registerTimeout(() => {
        $q.notify({
        message: 'Component is inactivated',
        timeout: 500
    })
    }, 1000);
})
</script>

<style>

</style>