<template>
  <div class="p-select">
    <div class="p-select__wrapper" :class="{ focus: isFoucs }">
      <input
        :value="labelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        class="p-input__inner"
        @click="handleClick"
      />
      <div class="p-select__suffix">
        <i :class="`p-icon ${iconName}`"></i>
      </div>
    </div>
    <teleport to="#p-popper-container">
      <div class="p-select-options" ref="trigger" :style="suspensionStyle">
        <div
          class="p-select-option-item"
          :class="{ active: item.value === modelValue }"
          v-for="item in option"
          :key="item.value"
          @click="handleChange(item)"
        >
          <span>{{ item.label }}</span>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
export default {
  name: "p-select",
};
</script>
<script setup lang="ts">
import { computed, ref } from "vue";
import { Props, TypeOptionItem } from "./select";
import useToggle from "@portable-ui/utils/toggle";

const props = defineProps(Props);

const emit = defineEmits(["update:modelValue"]);

const { trigger, suspensionStyle, click } = useToggle();

const isFoucs = ref(false);
const readonly = ref(true);

const labelValue = computed(
  () => props.option?.find((item) => item.value === props.modelValue)?.label
);
const iconName = computed(() =>
  isFoucs.value ? "icon-arrow-up-bold" : "icon-arrow-down-bold"
);

const handleClick = (e: Event) => {
  isFoucs.value = true;
  click(e);
};

const handleChange = (item: TypeOptionItem) => {
  emit("update:modelValue", item.value);
};
</script>

<style lang="less" scoped></style>
