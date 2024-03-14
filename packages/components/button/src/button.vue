<template>
  <button
    class="p-button"
    :class="[
      `${size && 'p-button--' + size}`,
      `p-button__${type}`,
      { 'p-button--icon': icon },
      { 'is-plain': plain },
      { 'is-disabled': disabled },
      { 'is-round': round },
    ]"
    :disabled="disabled"
  >
    <i v-if="icon" :class="['p-icon', `icon-${icon}`]"></i>
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { Props } from "./button";

defineProps(Props);
</script>
