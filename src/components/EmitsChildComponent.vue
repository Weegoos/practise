<template>
  <div>
    <p> <i>Дочерний компонент</i></p>
   <q-btn no-caps label="Click" @click="$emit('onClick', 'Сообщение было передано из дочернего компонента!')" />
  </div>
</template>

<script setup>
const message = 'Дочерний компонент'
</script>

<style>

</style>