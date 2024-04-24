<template>
  <div class="p-collapse-item" :class="{ active: show }">
    <div class="p-collapse-item__button" @click="handleClick">
      <div class="p-collapse-item__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <i class="p-collapse-item__icon p-icon icon-arrow-right"></i>
    </div>
    <div class="p-collapse-item__body">
      <div class="p-collapse-item__reference">
        <div class="p-collapse-item__content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ComputedRef, ref, computed } from "vue";
import type { Props } from "./collapse-item.ts";

defineOptions({
  name: "p-collapse-item",
});
const props = defineProps<Props>();

const opened = inject<ComputedRef<string[]>>("opened");
const change = inject<(newSelected: string[]) => void>("change");
const accordion = inject<ComputedRef<boolean[]>>("accordion");

const show = computed(() => opened?.value.includes(props.name));

const handleClick = () => {
  const oldSelect = JSON.parse(JSON.stringify(opened?.value));
  let newSelected = oldSelect.includes(props.name)
    ? oldSelect.filter((item: any) => item !== props.name)
    : [...oldSelect, props.name];
  if (accordion?.value) {
    newSelected = [props.name];
    newSelected = newSelected[0] === oldSelect[0] ? [] : newSelected;
  }
  change && change(newSelected);
};
</script>
./collapse-item.js
