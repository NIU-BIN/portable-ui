<template>
  <div class="p-color-picker" ref="triggerOrigin" @click="click">
    <div
      class="p-color-picker__inner"
      :style="{
        backgroundColor: modelValue,
      }"
    >
      <i class="p-icon icon-arrow-down-bold"></i>
    </div>
  </div>
  <teleport to="#p-popper-container">
    <div
      class="p-color-picker__trigger"
      v-show="showTrigger"
      ref="trigger"
      :style="suspensionStyle"
    >
      <div class="p-color-picker__body">
        <div class="p-color-picker__wrapper">
          <div
            :style="{
              width: '100%',
              height: '100%',
              background: themeColor,
            }"
            ref="panel"
            @click="setDotPosition"
          >
            <svg width="100%" height="100%">
              <defs>
                <linearGradient
                  id="gradient-black"
                  x1="0%"
                  y1="100%"
                  x2="0%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stop-color="#000000"
                    stop-opacity="1"
                  ></stop>
                  <stop
                    offset="100%"
                    stop-color="#CC9A81"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="gradient-white"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stop-color="#FFFFFF"
                    stop-opacity="1"
                  ></stop>
                  <stop
                    offset="100%"
                    stop-color="#CC9A81"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
              </defs>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#gradient-white)"
              ></rect>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#gradient-black)"
              ></rect>
            </svg>
          </div>
          <span class="p-color-picker__dot" ref="dot"></span>
        </div>
        <div
          class="p-color-slide__wrapper"
          ref="slide"
          @click.self="setArrowPosition"
        >
          <!-- <svg width="100%" height="100%">
          <defs>
            <linearGradient id="gradient-hsv" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#FF0000" stop-opacity="1"></stop>
              <stop offset="13%" stop-color="#FF00FF" stop-opacity="1"></stop>
              <stop offset="25%" stop-color="#8000FF" stop-opacity="1"></stop>
              <stop offset="38%" stop-color="#0040FF" stop-opacity="1"></stop>
              <stop offset="50%" stop-color="#00FFFF" stop-opacity="1"></stop>
              <stop offset="63%" stop-color="#00FF40" stop-opacity="1"></stop>
              <stop offset="75%" stop-color="#0BED00" stop-opacity="1"></stop>
              <stop offset="88%" stop-color="#FFFF00" stop-opacity="1"></stop>
              <stop offset="100%" stop-color="#FF0000" stop-opacity="1"></stop>
            </linearGradient>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#gradient-hsv)"
          ></rect>
        </svg> -->
          <div class="p-color-slide__arrow" ref="arrow"></div>
        </div>
      </div>
      <div class="p-color-picker__preview">
        <div style="display: flex; gap: 10px">
          <div
            :style="{
              background: currentColor,
            }"
            class="p-color-picker__rect"
          ></div>
          <div class="p-color-picker__color">
            {{ currentColor }}
          </div>
        </div>
        <div class="p-color-picker__confirm" @click="handleConfirm">确认</div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import type { ColorPickerProps } from "./color-picker";
import useToggle from "@portable-ui/utils/toggle";

defineOptions({
  name: "p-color-picker",
});
defineProps<ColorPickerProps>();

const emit = defineEmits<{
  "update:modelValue": [color: string];
}>();

const slide = ref<HTMLDivElement>();
const arrow = ref<HTMLDivElement>();
const panel = ref<HTMLDivElement>();
const dot = ref<HTMLDivElement>();
const isActive = ref(false);
const themeColor = ref("rgb(255,0,0)");
const HVal = ref(0);
const SValue = ref(100);
const VValue = ref(100);

const { trigger, triggerOrigin, showTrigger, suspensionStyle, click } =
  useToggle();

const currentColor = computed(() => {
  const RGB = hsvtorgb(HVal.value, SValue.value, VValue.value).join(",");
  return `rgb(${RGB})`;
});

onMounted(() => {
  arrow.value?.addEventListener("mousedown", () => (isActive.value = true));
  window.addEventListener("mousemove", arrowMove);
  window.addEventListener("mouseup", () => (isActive.value = false));
});

onUnmounted(() => {
  arrow.value?.removeEventListener("mousedown", () => (isActive.value = true));
  window.removeEventListener("mousemove", arrowMove);
  window.removeEventListener("mouseup", () => (isActive.value = false));
});

const handleConfirm = () => {
  emit("update:modelValue", currentColor.value);
  showTrigger.value = false;
};

const arrowMove = (e: MouseEvent) => {
  if (!isActive.value) return;
  const slideInfo = slide.value?.getBoundingClientRect();
  const difference = e.clientY - slideInfo?.top!;
  let top = difference <= 0 ? 0 : difference;
  if (top > slideInfo?.height!) top = slideInfo?.height!;
  (arrow?.value as HTMLDivElement).style.top = top + "px";
  const H = (top * 360) / slideInfo?.height!;
  HVal.value = H === 360 ? 0 : H;
  const color = hsvtorgb(HVal.value, 100, 100).join(",");
  themeColor.value = `rgb(${color})`;
};

// h:[0,360],s:[0,100],v:[0,100] => r:[0,256],g:[0,256],b:[0,256]
const hsvtorgb = (h: number, s: number, v: number) => {
  s = s / 100;
  v = v / 100;
  let h1 = Math.floor(h / 60) % 6;
  let f = h / 60 - h1;
  let p = v * (1 - s);
  let q = v * (1 - f * s);
  let t = v * (1 - (1 - f) * s);
  let r = 0,
    g = 0,
    b = 0;
  switch (h1) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = v;
      b = p;
      break;
    case 2:
      r = p;
      g = v;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = v;
      break;
    case 4:
      r = t;
      g = p;
      b = v;
      break;
    case 5:
      r = v;
      g = p;
      b = q;
      break;
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

const setDotPosition = (e: MouseEvent) => {
  const { offsetX, offsetY } = e;
  const width = panel.value?.offsetWidth;
  const height = panel.value?.offsetHeight;
  let S = Number(((offsetX * 100) / width!).toFixed(0));
  let V = Number((((height! - offsetY) * 100) / height!).toFixed(0));

  (dot.value as HTMLDivElement).style.left = offsetX + "px";
  (dot.value as HTMLDivElement).style.top = offsetY + "px";
  SValue.value = S;
  VValue.value = V;
};

const setArrowPosition = (e: MouseEvent) => {
  const { offsetY } = e;
  const slideInfo = slide.value?.getBoundingClientRect();
  let top = offsetY;
  if (offsetY > slideInfo?.height!) top = slideInfo?.height!;
  (arrow?.value as HTMLDivElement).style.top = top + "px";
  const H = (top * 360) / slideInfo?.height!;
  HVal.value = H === 360 ? 0 : H;
  const color = hsvtorgb(HVal.value, 100, 100).join(",");
  themeColor.value = `rgb(${color})`;
};
</script>
