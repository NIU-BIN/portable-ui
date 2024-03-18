<template>
  <teleport to="#p-popper-container">
    <transition name="fade" appear>
      <div class="p-mask" v-show="showDialog"></div>
    </transition>
    <transition name="scale" appear>
      <div
        class="p-dialog"
        v-show="showDialog"
        :style="{
          width:
            width.includes('%') || width.includes('px') ? width : width + 'px',
        }"
      >
        <div class="p-dialog__header">
          <slot name="title">
            {{ title }}
          </slot>
          <div class="p-dialog__close" @click="handleClose()">
            <i class="p-icon icon-close-bold"></i>
          </div>
        </div>
        <div class="p-dialog__content">
          <slot />
        </div>
        <div class="p-dialog__footer">
          <slot name="footer">
            <div class="p-dialog__footer_btn_group">
              <p-button type="primary" plain size="mini" @click="handleClose()">
                取消
              </p-button>
              <p-button type="primary" size="mini" @click="handleOK">
                确认
              </p-button>
            </div>
          </slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script lang="ts">
export default {
  name: "p-dialog",
};
</script>
<script setup lang="ts">
import { ref, watch } from "vue";
import { Props } from "./dialog";
import PButton from "../../button";

const props = defineProps(Props);
const emit = defineEmits(["ok", "update:modelValue"]);

const showDialog = ref(false);
const isOK = ref(false);

const closeDialog = () => {
  emit("update:modelValue", false);
  isOK.value && emit("ok");
  isOK.value = false;
};

const handleClose = () => {
  if (props.beforeClose && props.beforeClose instanceof Function) {
    props.beforeClose(closeDialog);
  } else {
    closeDialog();
  }
};

const handleOK = () => {
  isOK.value = true;
  handleClose();
};

watch(
  () => props.modelValue,
  (newValue) => {
    showDialog.value = newValue;
  }
);
</script>
