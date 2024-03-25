<template>
  <div class="p-carousel">
    <div class="p-carousel_container" ref="slotRef">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, onMounted, ref } from "vue";
import { Props } from "./carousel";

defineOptions({
  name: "p-carousel",
});
const props = defineProps(Props);
const carouselList = ref<HTMLCollection>();
const currentIndex = ref(0);
const slotRef = ref<HTMLElement>();
const carouselWidth = ref(0);
const vnodeUidlist = ref<number[]>([]);
const clock = ref();

const getCarouselItemList = () => {
  carouselWidth.value = slotRef.value?.offsetWidth || 0;
  carouselList.value = (slotRef as any)._value.children;
  for (let item of (slotRef as any)._value.children) {
    vnodeUidlist.value.push(item.__vnode.ctx.uid);
    // console.log("item.__vnode.ctx.uid: ", item.__vnode.ctx.uid);
  }
  currentIndex.value = vnodeUidlist.value[0];
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

defineExpose({
  currentIndex,
  direction: props.direction,
});
</script>

<style lang="less" scoped></style>
