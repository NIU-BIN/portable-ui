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
              <linearGradient
                id="gradient-white"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stop-color="#FFFFFF" stop-opacity="1"></stop>
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
      </div>
      <div class="p-color-slide__wrapper">
        <svg width="100%" height="100%">
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
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "p-color-picker",
});

const hsvtorgb = (h: number, s: number, v: number) => {
  s = s / 100;
  v = v / 100;
  let h1 = Math.floor(h / 60) % 6;
  let f = h / 60 - h1;
  let p = v * (1 - s);
  let q = v * (1 - f * s);
  let t = v * (1 - (1 - f) * s);
  let r, g, b;
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

let HFlag = false;

let Hval = 0;
let Sval = 100;
let Vval = 100;

// 添加点击事件和移动事件，

const setHSV = () => {
  // 这里算出对应的RGB值
  let color = `
    rgb(${hsvtorgb(Hval, Sval, Vval).join(",")})
  `;

  // colorTitle.innerHTML = color;
  // colorShow.style.background = color;
};
</script>
