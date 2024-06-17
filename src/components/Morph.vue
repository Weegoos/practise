<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="q-pa-md relative-position" style="height: 250px; max-height: 80vh">
    <q-btn
      v-morph:btn:mygroup:300.resize="morphGroupModel"
      class="absolute-bottom-left q-ma-md"
      fab
      color="primary"
      size="lg"
      icon="add"
      @click="nextMorph"
    />

    <q-card
      v-morph:card1:mygroup:500.resize="morphGroupModel"
      class="absolute-bottom-left q-ma-md bg-primary text-white"
      style="width: 250px; border-bottom-left-radius: 2em"
    >
      <q-card-section class="text-h6">
        Привет, новый пользователь
      </q-card-section>

      <q-card-section class="text-subtitle1">
        Создатель данного сайта Ашим Батыр.
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Next" @click="nextMorph" />
      </q-card-actions>
    </q-card>

    <q-card
      v-morph:card2:mygroup:500.tween="morphGroupModel"
      class="absolute-bottom-left q-ma-md bg-primary text-white"
      style="width: 300px; border-bottom-left-radius: 2em"
    >
      <q-card-section class="text-h6">
        
      </q-card-section>

      <q-card-section class="q-py-xl text-center text-subtitle2">
        Спасибо за внимание!
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Close" @click="nextMorph" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const nextMorphStep = {
  btn: 'card1',
  card1: 'card2',
  card2: 'btn'
}

const morphGroupModel = ref('btn')
function nextMorph () {
        morphGroupModel.value = nextMorphStep[ morphGroupModel.value ]
      }
</script>


<style>

</style>