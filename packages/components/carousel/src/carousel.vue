<template>
  <div class="p-carousel">
    <div class="p-carousel_container" ref="slotRef">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, onMounted, ref, getCurrentInstance, provide } from "vue";
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
const instance = getCurrentInstance();

provide("currentIndex", currentIndex);
provide("direction", props.direction);

const getCarouselItemList = () => {
  carouselWidth.value = slotRef.value?.offsetWidth || 0;
  const children = instance?.subTree.children;
  const uid =
    children &&
    (children as any)[0].children[0].children
      .filter((item: any) => item.component)
      .map((item: any) => item.component.uid);
  vnodeUidlist.value = uid;
  currentIndex.value = vnodeUidlist.value[0];
  console.log("uid: ", uid);
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
  // TODO：由于目前uid只能在mounted之后才能获取到，所以会出现第一个carousel-item也会触发进入动画
  getCarouselItemList();
  props.autoplay && autoPlay();
});

onUnmounted(() => {
  clock.value && clearInterval(clock.value);
});
</script>

<style lang="less" scoped></style>
