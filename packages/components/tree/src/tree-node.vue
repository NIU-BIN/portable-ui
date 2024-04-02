<template>
  <div class="p-tree-node">
    <div class="p-tree-node__content" @click.stop="clickNode(node)">
      <div
        class="p-icon icon-arrow-right-filling"
        :style="{
          visibility:
            node.children && node.children.length ? 'visible' : 'hidden',
          transform: node.showChild ? 'rotateZ(90deg)' : '',
        }"
      ></div>
      <span
        :class="`p-tree-node__checkbox ${getCheckType}`"
        v-if="showCheckbox"
        @click.self.stop="handleCheck(node)"
      ></span>
      <span class="p-tree-node__label">{{ node.label }}</span>
      <div>
        <slot />
      </div>
    </div>
    <div
      class="p-tree-node__children"
      v-if="node.children"
      :style="{
        'grid-template-rows': node.showChild ? '1fr' : '0fr',
      }"
    >
      <div class="p-tree-node__children_reference">
        <p-tree-node
          v-for="child in node.children"
          :node="child"
          :showCheckbox="showCheckbox"
          @handleClick="(e:Node) => clickNode(e)"
          @handleCheck="(e:Node) => handleCheck(e)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Node, TreeNodeProps } from "./tree-node";

defineOptions({
  name: "p-tree-node",
});

const props = withDefaults(defineProps<TreeNodeProps>(), {
  showCheckbox: false,
});
const emit = defineEmits<{
  handleClick: [node: Node];
  handleCheck: [node: Node];
  setCheck: [node: Node, isChecked: boolean];
}>();

const getCheckType = computed(() => {
  let checkType = "";
  if (props.node.isChecked) {
    checkType = "all";
  } else if (
    props.node.children &&
    props.node.children.every((item) => item.isChecked === true)
  ) {
    checkType = "all";
  } else if (
    props.node.children &&
    props.node.children.some((item) => item.isChecked === true)
  ) {
    checkType = "some";
  } else {
    checkType = "none";
  }
  return checkType;
});

const clickNode = (node: Node) => {
  if (node.children && node.children.length) emit("handleClick", node);
};

const handleCheck = (node: Node) => {
  emit("handleCheck", node);
};
</script>
