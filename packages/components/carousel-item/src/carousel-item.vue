<template>
  <transition :name="direction" mode="out-in">
    <div class="p-carousel-item" v-show="currentIndex === currentUid">
      <slot />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, inject, ref } from "vue";
import { Props } from "./carousel-item";

defineOptions({
  name: "p-carousel-item",
});

defineProps(Props);

const instance = getCurrentInstance();
const currentUid = ref<number>();

const currentIndex = inject("currentIndex");
const direction = inject<string>("direction");
const active = ref(false);

currentUid.value = instance?.uid;

defineExpose({
  active,
});
</script>

<style lang="less" scoped></style>
