<template>
  <div
    class="p-carousel"
    ref="carouselRef"
    @mouseenter.self="handleMouseEnter"
    @mouseleave.self="handleMouseOut"
  >
    <div class="p-carousel_container">
      <slot />
    </div>
    <div
      class="p-carousel__arrow p-carousel__arrow--left"
      :style="{
        display: showArrow,
      }"
      v-show="arrow === 'always' || isEnter"
      @click="goBackward"
    >
      <i class="p-icon icon-arrow-left-bold"></i>
    </div>
    <div
      class="p-carousel__arrow p-carousel__arrow--right"
      :style="{
        display: showArrow,
      }"
      v-show="arrow === 'always' || isEnter"
      @click="goForward"
    >
      <i class="p-icon icon-arrow-right-bold"></i>
    </div>

    <ul class="p-carousel__dot_list">
      <li
        v-for="uuid in vnodeUidlist"
        :key="uuid"
        class="p-carousel_dot"
        :class="{ 'p-carousel_dot_active': uuid === currentIndex }"
        @click="goTo(uuid)"
      ></li>
    </ul>
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
  watch,
  computed,
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
const clock = ref<NodeJS.Timeout | null>(null);
const instance = getCurrentInstance();
const transitionName = ref("");
const isEnter = ref(false);

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
};
const autoPlay = () => {
  if (!clock.value) {
    nextTick(() => {
      transitionName.value = props.direction;
    });
    clock.value = setInterval(
      () => start(props.direction),
      props.interval || 3000
    );
  }
};

const showArrow = computed(() => {
  let display = "";
  if (props.arrow === "always") {
    display = "flex";
  } else if (props.arrow === "never") {
    display = "none";
  } else if (isEnter.value) {
    display = "flex";
  } else {
    display = "none";
  }
  return display;
});

const start = (direction: string) => {
  const index = vnodeUidlist.value.findIndex(
    (item) => item === currentIndex.value
  );
  if (direction === "next") {
    currentIndex.value =
      index === vnodeUidlist.value.length - 1
        ? vnodeUidlist.value[0]
        : vnodeUidlist.value[index + 1];
  } else {
    currentIndex.value =
      index === 0
        ? vnodeUidlist.value[vnodeUidlist.value.length - 1]
        : vnodeUidlist.value[index - 1];
  }
};

const goTo = (uuid: number) => {
  currentIndex.value = uuid;
};

const handleMouseEnter = () => {
  isEnter.value = true;
  if (clock.value) {
    clearInterval(clock.value);
    clock.value = null;
  }
};

const handleMouseOut = () => {
  isEnter.value = false;
  props.autoplay && autoPlay();
};

const goForward = () => {
  transitionName.value = "next";
  start("next");
};

const goBackward = () => {
  transitionName.value = "pre";
  start("pre");
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
