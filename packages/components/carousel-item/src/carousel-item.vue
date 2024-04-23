<template>
  <transition :name="direction">
    <div class="p-carousel-item" v-show="currentIndex === currentUid">
      <slot />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, inject, ref } from "vue";
import { Props } from "./carousel-item";

defineOptions({
  name: "p-carousel",
});

defineProps(Props);

const instance = getCurrentInstance();
const currentUid = ref<number>();

const currentIndex = inject("currentIndex");
const direction = (inject("direction") as string) || "next";

currentUid.value = instance?.uid;
</script>

<style lang="less" scoped></style>
