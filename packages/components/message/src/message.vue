<template>
  <transition name="slideY-fade" @after-leave="afterLeave">
    <div class="p-message" :class="`p-message__${type}`">
      <i :class="`p-icon icon-${MESSAGE_ICON_NAME[type]}`"></i>
      <span class="p-message__text">{{ message }}</span>
      <i
        class="p-icon icon-close-bold p-message_close_icon"
        v-if="showClose"
        @click="close"
      ></i>
    </div>
  </transition>
</template>

<script setup>
import { getCurrentInstance } from "vue";
import { Props } from "./message";

defineProps(Props);

const emit = defineEmits(["close"]);

const MESSAGE_ICON_NAME = {
  success: "success-filling",
  info: "prompt-filling",
  warning: "warning-filling",
  error: "delete-filling",
};

const instance = getCurrentInstance();

const afterLeave = () => {
  instance.vnode.el.parentElement?.removeChild(instance.vnode.el);
};

const close = () => {
  emit("close", instance.vnode.el.parentElement);
};
</script>
