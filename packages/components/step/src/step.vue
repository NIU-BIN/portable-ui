<template>
  <div
    class="p-step"
    :class="{
      is_complete: (currentIndex || 0) <= (active as number) - 1,
      is_begining: (currentIndex || 0) === active,
      is_last_step: (currentIndex || 0) === childrenUid.length - 1,
    }"
  >
    <div class="p-step__container">
      <div class="p-step__head">
        <span
          class="p-step__icon p-icon"
          :class="`${icon ? 'icon-' + icon : ''}`"
        >
          {{ icon ? "" : (currentIndex || 0) + 1 }}
        </span>
        <div
          class="p-step__line"
          v-if="currentIndex !== childrenUid.length - 1"
        ></div>
      </div>
      <div
        class="p-step__content"
        :class="{
          isFirstStep: currentIndex === 0,
          isLastStep: currentIndex === childrenUid.length - 1,
        }"
      >
        <div class="p-step__title">{{ title }}</div>
        <div class="p-step__description" v-if="description">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, inject } from "vue";
import { Props } from "./step";

defineOptions({
  name: "p-step",
});
defineProps(Props);

const instance = getCurrentInstance();
const childrenUid: any = inject("childrenUid");
const active = inject("active");
const align = inject("align");

const currentIndex = computed(() => {
  let index: null | number = null;
  if (Array.isArray(childrenUid.value)) {
    index = (childrenUid.value as number[]).findIndex(
      (item) => item === instance?.uid
    );
  }
  return index;
});
</script>
