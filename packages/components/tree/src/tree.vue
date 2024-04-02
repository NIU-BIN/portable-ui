<template>
  <div class="p-tree">
    <p-tree-node
      :showCheckbox="showCheckbox"
      v-for="node in tree"
      :node="node"
      @handleClick="handleClick"
      @handleCheck="handleCheck"
    />
  </div>
</template>

<script setup lang="ts">
import type { TreeProps } from "./tree";
import PTreeNode from "./tree-node.vue";
import type { Node } from "./tree-node";
import { ref, watch } from "vue";

const props = withDefaults(defineProps<TreeProps>(), {
  showCheckbox: false,
  data: [],
});

const tree = ref<Node[]>([]);

defineOptions({
  name: "p-tree",
});

watch(
  () => props.data,
  (newValue) => (tree.value = newValue),
  { immediate: true }
);

const changeShowChild = (node: Node) => {
  node.showChild = !node.showChild;
};

const changeCheck = (node: Node) => {
  node.isChecked = !node.isChecked;
  if (node.children && node.children.length)
    changeChildCheck(node.children, node.isChecked);
  changeParentCheck(tree.value, node.id);
};

const changeParentCheck = (
  children: Node[],
  id: number | string,
  parent?: Node
) => {
  try {
    children.forEach((node: Node) => {
      if (node.id === id) {
        const result = children.every((item) => item.isChecked === true);
        if (parent && parent.isChecked === result) {
          throw new Error("Stop Loop");
        } else if (parent && parent.isChecked !== result) {
          parent.isChecked = result;
          parent && changeParentCheck(tree.value, parent.id);
        }
      } else if (node.children && node.children.length) {
        changeParentCheck(node.children, id, node);
      }
    });
  } catch (error: any) {
    if (error.message !== "Stop Loop") throw error;
  }
};

const changeChildCheck = (children: Node[], isChecked: boolean) => {
  children.forEach((node: Node) => {
    node.isChecked = isChecked;
    if (node.children && node.children.length)
      changeChildCheck(node.children, isChecked);
  });
};

const handleClick = (node: Node) => {
  findNode(tree.value, node.id, changeShowChild);
};

const handleCheck = (node: Node) => {
  findNode(tree.value, node.id, changeCheck);
};

const findNode = (data: Node[], id: string | number, handleFun: Function) => {
  let obj: Node | null = null;
  try {
    data.forEach((item) => {
      if (item.id === id) {
        obj = item;
        handleFun(item);
        throw new Error("Stop Loop");
      } else if (item.children && item.children.length) {
        return findNode(item.children, id, handleFun);
      }
    });
  } catch (error: any) {
    if (error.message !== "Stop Loop") throw error;
  }
  return obj;
};
</script>
