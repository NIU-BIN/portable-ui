<template>
  <transition :name="direction">
    <div class="p-carousel-item" v-show="parentCurrentIndex === currentUid">
      <slot />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, onMounted, ref } from "vue";
import { Props } from "./carousel-item";

defineOptions({
  name: "p-carousel",
});

defineProps(Props);

const instance = getCurrentInstance();
const currentUid = ref<number>();

currentUid.value = instance?.uid;

const parentCurrentIndex = computed(
  () => instance?.parent?.exposed?.currentIndex.value
);

const direction = computed(
  () => instance?.parent?.exposed?.direction || "next"
);
</script>

<style lang="less" scoped></style>
