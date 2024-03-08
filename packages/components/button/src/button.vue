<template>
  <button
    class="p-button"
    :class="[
      `${size && 'p-button--' + size}`,
      `p-button__${type}`,
      { 'p-button--icon': icon },
      { is_plain: plain },
      { is_disabled: disabled },
    ]"
    :disabled="disabled"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import "../style";
import { Props } from "./button";

defineProps(Props);
</script>
