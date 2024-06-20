<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h4>Здесь мы практикуем Props в Vue js</h4>
    <PropsComponent 
    :message="message"
    />
  </div>
</template>

<script setup>
import PropsComponent from '../components/PropsComponent.vue';

const message = 'Сообщение было успешно передано с основного компонента на дочерний'
</script>

<style>

</style>