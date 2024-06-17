<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="q-pa-md q-gutter-sm" style="height: 80px">
        <q-item clickable v-ripple>
      <q-item-section side>
        <q-avatar rounded size="48px">
          <img src="https://cdn.quasar.dev/img/avatar.png">
          <q-badge floating color="teal">new</q-badge>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>Mary</q-item-label>
        <q-item-label caption>2 new messages</q-item-label>
      </q-item-section>
      <q-item-section side>
        3 min ago
      </q-item-section>
    </q-item>
    </div>
  </template>
  
  <style>
  </style>