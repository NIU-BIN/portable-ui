<template>
  <div class="p-select">
    <div
      class="p-select__wrapper"
      ref="triggerOrigin"
      :class="{ focus: isFoucs }"
      @click="handleClick"
    >
      <input
        :placeholder="currentSelectedLabel || placeholder"
        :disabled="disabled"
        readonly
        class="p-input__inner"
        @input="keywordsChange"
        @focus="keywords = ''"
        @blur="isFoucs = false"
      />
      <div class="p-select__suffix">
        <i :class="`p-icon ${iconName}`"></i>
      </div>
    </div>
    <teleport to="#p-popper-container">
      <div
        class="p-select-options"
        ref="trigger"
        :style="suspensionStyle"
        v-show="showTrigger"
      >
        <div class="p-select-search-box" v-if="search">
          <input
            type="text"
            class="p-input__inner"
            v-model="keywords"
            placeholder="请输入关键词"
          />
        </div>
        <div
          class="p-select-option-item"
          :class="{
            active: item.value === modelValue,
            'is-disabled': item.disabled,
          }"
          v-for="item in filterOptions"
          :key="item.value"
          @click="handleChange(item)"
        >
          <span>{{ item.label }}</span>
        </div>
        <div
          class="p-select-option-item no-result"
          v-show="!filterOptions.length"
        >
          <span>暂无符合项</span>
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
import { computed, ref, watch } from "vue";
import { Props, TypeOptionItem } from "./select";
import useToggle from "@portable-ui/utils/toggle";

const props = defineProps(Props);

const emit = defineEmits(["update:modelValue"]);

const { trigger, triggerOrigin, showTrigger, suspensionStyle, click } =
  useToggle();

const isFoucs = ref(false);
const currentSelectedLabel = ref("");
const keywords = ref("");

const filterOptions = computed(() =>
  props.option?.filter((item) => item.label.includes(keywords.value))
);
const iconName = computed(() =>
  isFoucs.value ? "icon-arrow-up-bold" : "icon-arrow-down-bold"
);

const handleClick = (e: Event) => {
  isFoucs.value = true;
  click();
};

const keywordsChange = (e: Event) => {
  console.log((e.target as HTMLInputElement).value);
  // click();
};

const handleChange = (item: TypeOptionItem) => {
  if (item.disabled) return;
  currentSelectedLabel.value = item.label;
  emit("update:modelValue", item.value);
  keywords.value = "";
  showTrigger.value = false;
};

watch(
  () => props.modelValue,
  (newValue) => {
    currentSelectedLabel.value = props.option?.find(
      (item) => item.value === newValue
    )!.label;
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less" scoped></style>
