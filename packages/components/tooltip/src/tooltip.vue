<template>
  <div
    class="p-tooltip"
    @mouseenter="handleMouseEnter"
    @mouseleave="closeTooltip"
  >
    <slot />
  </div>
  <teleport to="#p-popper-container">
    <transition name="fade">
      <div
        class="p-tooltip__container"
        v-show="show"
        ref="tooltipRef"
        :style="tooltipStyle"
        @mouseenter="clearCloseClock"
        @mouseleave="closeTooltip"
      >
        <div class="p-tooltip__inner">
          {{ content }}
          <i
            :class="`p-tooltip_arrow_${arrowDirection} p-tooltip_arrow_${arrowPosition}`"
          ></i>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { nextTick, ref, StyleValue, watch } from "vue";
import { Props } from "./tooltip";

type ArrowDirection = "left" | "right" | "top" | "bottom";
type ArrowPosition =
  | "row_start"
  | "row_end"
  | "col_start"
  | "col_end"
  | "center";

defineOptions({
  name: "p-tooltip",
});
const props = defineProps(Props);

const show = ref<boolean>(false);
const tooltipStyle = ref<StyleValue>();
const tooltipRef = ref<HTMLElement>();
const arrowDirection = ref<ArrowDirection>("bottom");
const arrowPosition = ref<ArrowPosition>("center");
const TOOLTIP_GAP = 7;
let clock: number;

watch(
  () => props.placement,
  (newValue) => {
    if (newValue.includes("top") || !props.placement)
      arrowDirection.value = "bottom";
    if (newValue.includes("bottom")) arrowDirection.value = "top";
    if (newValue.includes("left")) arrowDirection.value = "right";
    if (newValue.includes("right")) arrowDirection.value = "left";
    // arrowPosition
    if (newValue === "top-start" || newValue === "bottom-start")
      arrowPosition.value = "row_start";
    if (newValue === "top-end" || newValue === "bottom-end")
      arrowPosition.value = "row_end";
    if (newValue === "left-start" || newValue === "right-start")
      arrowPosition.value = "col_start";
    if (newValue === "left-end" || newValue === "right-end")
      arrowPosition.value = "col_end";
  },
  {
    immediate: true,
  }
);

const handleMouseEnter = (e: Event) => {
  clearCloseClock();
  console.log("e: ", e.target);
  const { offsetHeight, offsetWidth } = e.target as HTMLDivElement;
  const { top, left } = (e.target as HTMLDivElement).getBoundingClientRect();
  show.value = true;
  tooltipStyle.value = {
    width: props.width ? props.width + "px" : "auto",
  };
  nextTick(() => {
    const { L, T } = getPosition(
      offsetWidth,
      offsetHeight,
      left,
      top,
      props.width || tooltipRef.value?.offsetWidth || 0,
      tooltipRef.value?.offsetHeight || 0
    );
    console.log("props.width", props.width);
    tooltipStyle.value = {
      left: L + "px",
      top: T + "px",
      width: props.width ? props.width + "px" : "auto",
    };
  });
};

const getPosition = (
  width: number,
  height: number,
  x: number,
  y: number,
  W: number,
  H: number
) => {
  let left = 0;
  let top = 0;
  switch (props.placement) {
    case "top":
      left = x + width / 2 - W / 2;
      top = y - H - TOOLTIP_GAP;
      break;
    case "top-start":
      left = x;
      top = y - H - TOOLTIP_GAP;
      break;
    case "top-end":
      left = x + width - W;
      top = y - H - TOOLTIP_GAP;
      break;
    case "bottom":
      left = x + width / 2 - W / 2;
      top = y + height + TOOLTIP_GAP;
      break;
    case "bottom-start":
      left = x;
      top = y + height + TOOLTIP_GAP;
      break;
    case "bottom-end":
      left = x + width - W;
      top = y + height + TOOLTIP_GAP;
      break;
    case "left":
      left = x - W - TOOLTIP_GAP;
      top = y;
      break;
    case "left":
      left = x - W - TOOLTIP_GAP;
      top = y - (H / 2 - height / 2);
      break;
    case "left-start":
      left = x - W - TOOLTIP_GAP;
      top = y;
      break;
    case "left-end":
      left = x - W - TOOLTIP_GAP;
      top = y + height - H;
      break;
    case "right":
      left = x + width + TOOLTIP_GAP;
      top = y - (H / 2 - height / 2);
      break;
    case "right-start":
      left = x + width + TOOLTIP_GAP;
      top = y;
      break;
    case "right-end":
      left = x + width + TOOLTIP_GAP;
      top = y + height - H;
      break;
    default:
      break;
  }
  return { L: left, T: top };
};

const clearCloseClock = () => {
  if (clock) clearInterval(clock);
};

const closeTooltip = () => {
  clock = setTimeout(() => {
    show.value = false;
  }, 300);
};
</script>
