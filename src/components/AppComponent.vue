<template>
    <div>
        <q-layout view="hHr LpR lFf" container style="height: 100vh">
            <q-header v-model="header" reveal elevated class="bg-white" bordered style="height: 70px">
                <q-toolbar class="bg-white text-black">
                    <q-btn flat round icon="menu" @click="drawer = !drawer"/>
                    <q-toolbar-title>
                        Практикум
                    </q-toolbar-title>
                </q-toolbar>
            </q-header>

            <q-drawer
                v-model="drawer"
                show-if-above
                :mini="miniState"
                @mouseover="miniState = false"
                @mouseout="miniState = true"
                :width="200"
                :breakpoint="500"
                bordered
                mini-to-overlay
            >
                <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
                   <q-list padding>
                    <q-item clickable v-ripple v-for="btn in buttons" :key="btn.label" @click="navigate(btn.link)">
                        <q-item-section avatar>
                            <q-icon  :name="btn.icon"/>
                        </q-item-section>
                        <q-item-section>{{ btn.label }}</q-item-section>
                    </q-item>
                   </q-list>
                </q-scroll-area>
            </q-drawer>

            <q-page-container>
                <q-page padding>
                    <router-view />
                    
                </q-page>
            </q-page-container>

            <q-footer v-model="footer" reveal elevated bordered>
                <q-toolbar class="bg-black text-white">
                  
                    <q-toolbar-title>
                        Footer
                    </q-toolbar-title>
                    <q-btn flat round dense icon="apps" class="q-mr-xs" />
                    <q-btn flat round dense icon="more_vert" />
                </q-toolbar>
            </q-footer>
        </q-layout>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const drawer = ref(false)
const miniState = ref(true)

const { buttons } = defineProps({
    buttons: {
        type: Array,
        required: true
    }
});

const router = useRouter()

function navigate(route){
    router.push(route)
}
</script>

<style>

</style>