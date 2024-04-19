<template>
  <div class="p-steps" :class="{ 'p-steps__align-center': align === 'center' }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import {
  ComponentInternalInstance,
  computed,
  getCurrentInstance,
  onMounted,
  provide,
  ref,
  toRef,
} from "vue";
import { Props } from "./steps";

defineOptions({
  name: "p-steps",
});
const props = defineProps(Props);

const instance = getCurrentInstance();
const childrenUid = ref<number[]>([]);

const active = computed(() => props.active);

provide("childrenUid", childrenUid);
provide("active", active);
provide("align", props.align);

onMounted(() => {
  getChildrenUid(instance as ComponentInternalInstance);
});

const getChildrenUid = (instance: ComponentInternalInstance) => {
  const children = instance?.subTree.children;
  const uid =
    children &&
    (children as any)[0].children
      .filter((item: any) => item.component)
      .map((item: any) => item.component.uid);
  childrenUid.value = uid;
};
</script>
