<template>
  <div>
    <AppComponent :buttons="buttons"/>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import AppComponent from './components/AppComponent.vue';
defineOptions({
  name: 'App'
});

const buttons = [
  {
    label: 'Home',
    icon: 'home', 
    link: '/'
  },
  {
    label: 'Hooks',
    icon: 'code', 
    link: '/hooks'
  },
  {
    label: 'Props',
    icon: 'code',
    link: '/props'
  },
  {
    label: 'Emits',
    icon: 'code',
    link: '/emits'
  },
  {
    label: 'Components',
    icon: 'code',
    link: '/components'
  },
  {
    label: 'Links',
    icon: 'link',
    link: '/links'
  },

  {
    label: 'Settings',
    icon: 'settings',
    link: '/settings'
  },
]
</script>
