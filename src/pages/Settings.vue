<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <q-layout view="hHr LpR lFf" container style="height: 88vh">
        <q-header reveal bordered style="height: 50px">
          <q-toolbar class="bg-white text-black">
            <q-toolbar-title>
              <q-btn icon="menu" @click="settingsDrawer = !settingsDrawer" />
              <span class="q-mr-md">Настройки</span>
            </q-toolbar-title>
          </q-toolbar>
          <q-separator color="gray" inset />
        </q-header>
        <q-drawer
          v-model="settingsDrawer"
          show-if-above
          :mini="miniState"
          @mouseover="miniState = false"
          @mouseout="miniState = true"
          bordered
          :width="200"
          :breakpoint="500"
        >
          <q-list class="listBorder">
            <q-item
              clickable
              v-ripple
              v-for="btn in settingsButtons"
              :key="btn.name"
              @click="navigate(btn.link)"
            >
              <q-item-section avatar>
                <q-icon :name="btn.icon" />
              </q-item-section>
              <q-item-section>{{ btn.name0 }}</q-item-section>
            </q-item>
          </q-list>
        </q-drawer>
        <q-page-container>
          <q-page padding>
            <p v-if="showText"><i>Выберите пунтк настроек</i></p>
            <router-view />
          </q-page>
        </q-page-container>
      </q-layout>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const settingsDrawer = ref(false);
const miniState = ref(true);
const showText = ref(true);
const settingsButtons = [
  {
    name: "Смена языка",
    icon: "language",
    link: "/settings/language",
  },
  {
    name: "Стиль",
    icon: "style",
    link: "/settings/style",
  },
];

const router = useRouter();
const currentRoutePath = ref(router.currentRoute.value.path);

watch(router.currentRoute, (to, from) => {
  currentRoutePath.value = to.path;

  if (currentRoutePath.value == "/settings") {
    showText.value = true;
  } else {
    showText.value = false;
  }
});

function navigate(route) {
  router.push(route);
}
</script>

<style>
.listBorder {
  border-top: solid #c0c0c0 1px;
}
</style>
