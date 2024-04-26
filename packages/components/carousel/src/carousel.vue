<template>
  <div class="p-carousel">
    <div class="p-carousel_container" ref="slotRef">
      <slot />
    </div>
    <transition name="fade-to-right">
      <div class="p-carousel__arrow p-carousel__arrow--left">
      <i class="p-icon icon-arrow-left-bold"></i>
    </div>
    </transition name="fade-to-light">
    <div class="p-carousel__arrow p-carousel__arrow--right">
      <i class="p-icon icon-arrow-right-bold"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  onUnmounted,
  onMounted,
  ref,
  getCurrentInstance,
  provide,
  useSlots,
  VNode,
  nextTick,
} from "vue";
import { Props } from "./carousel";

defineOptions({
  name: "p-carousel",
});
const props = defineProps(Props);
const currentIndex = ref(0);
const slotRef = ref<HTMLElement>();
const carouselWidth = ref(0);
const vnodeUidlist = ref<number[]>([]);
const clock = ref();
const instance = getCurrentInstance();
const transitionName = ref("");
const showArrow = ref(false);

provide("currentIndex", currentIndex);
provide("direction", transitionName);

const getCarouselItemList = () => {
  carouselWidth.value = slotRef.value?.offsetWidth || 0;
  const children = instance?.subTree.children;
  const uid =
    children &&
    (children as any)[0].children[0].children
      .filter((item: VNode) => item.component)
      .map((item: VNode) => item.component?.uid);
  vnodeUidlist.value = uid;
  currentIndex.value = vnodeUidlist.value[0];
  nextTick(() => {
    transitionName.value = props.direction;
  });
};
const autoPlay = () => {
  clock.value = setInterval(() => {
    const index = vnodeUidlist.value.findIndex(
      (item) => item === currentIndex.value
    );
    currentIndex.value =
      index === vnodeUidlist.value.length - 1
        ? vnodeUidlist.value[0]
        : vnodeUidlist.value[index + 1];
  }, props.interval || 3000);
};

onMounted(() => {
  getCarouselItemList();
  props.autoplay && autoPlay();
});

onUnmounted(() => {
  clock.value && clearInterval(clock.value);
});
</script>

<style lang="less" scoped></style>
