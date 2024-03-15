<template>
  <div class="p-input" :class="{ focus: isFoucs }">
    <div class="pre-icon" v-if="slot['pre-icon']">
      <slot name="pre-icon" />
    </div>
    <div class="p-input-box">
      <input
        :type="inputType"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        class="p-input__inner"
        @input="inputChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <i
        :class="eyeClass"
        class="eye p-icon"
        @click.stop="changeEye"
        v-if="type === 'password'"
      ></i>
      <i
        class="clear p-icon icon-delete-filling"
        v-show="clearable && modelValue"
        @click="clearInput"
        :style="{
          right: type === 'password' ? '30px' : '4px',
        }"
      ></i>
    </div>
    <div class="suffix-icon" v-if="slot['suffix-icon']">
      <slot name="suffix-icon" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "p-input",
};
</script>
<script setup lang="ts">
import { reactive, toRefs, useSlots } from "vue";

import { Props } from "./input";

const props = defineProps(Props);

const slot = useSlots();

const emit = defineEmits(["update:modelValue"]);

const state = reactive({
  isFoucs: false,
  inputType: props.type,
  eyeClass: "icon-eye-close", // ri-eye-line
});

const { isFoucs, inputType, eyeClass } = toRefs(state);

const inputChange = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};

const handleFocus = () => {
  state.isFoucs = true;
};

const handleBlur = () => {
  state.isFoucs = false;
};

const clearInput = () => {
  emit("update:modelValue", "");
};

const changeEye = () => {
  if (state.eyeClass === "icon-eye-close") {
    state.eyeClass = "icon-browse";
    state.inputType = "text";
  } else {
    state.eyeClass = "icon-eye-close";
    state.inputType = "password";
  }
};
</script>
