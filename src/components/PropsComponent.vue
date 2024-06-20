<template>
<<<<<<< HEAD
  <div>
    <i>Дочерний компонент PropsComponent.vue</i> <br>
    <code><i>{{ message }}</i></code>
  </div>
</template>

<script setup>

const {props} = defineProps({
    message: {
        type: String,
        required: true
    }
})
</script>

<style>

</style>
=======
  <div>{{ company }}</div>
</template>

<script setup>
const { props } = defineProps({
  company: {
    type: Array,
    required: true,
  },
});
</script>

<style></style>
>>>>>>> 93e3e6f2867c5a35d98ca370dc85cef620ebda9b
