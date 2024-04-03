<template>
  <div class="p-color-picker">
    <div class="p-color-picker__body">
      <div class="p-color-picker__wrapper">
        <div
          :style="{
            width: '100%',
            height: '100%',
            background: 'rgb(0, 59, 255)',
          }"
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
                <stop offset="0%" stop-color="#000000" stop-opacity="1"></stop>
                <stop
                  offset="100%"
                  stop-color="#CC9A81"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
            </defs>
            <rect x1="0%" y1="100%" x2="0%" y2="0%" fill=""></rect>
            <rect x1="0%" y1="100%" x2="100%" y2="100%" fill=""></rect>
          </svg>
        </div>
      </div>
      <div class="p-color-slide__wrapper"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "p-color-picker",
});
</script>
