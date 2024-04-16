<template>
  <div>
    <p-button @click="showDialog = true"> open </p-button>
    <p-dialog v-model="showDialog" width="500px" @ok="dialogOK">
      噫吁嚱，危乎高哉！ 蜀道之难，难于上青天！ 蚕丛及鱼凫，开国何茫然！
      尔来四万八千岁，不与秦塞通人烟。 西当太白有鸟道，可以横绝峨眉巅。
      地崩山摧壮士死，然后天梯石栈相钩连。
      上有六龙回日之高标，下有冲波逆折之回川。
      黄鹤之飞尚不得过，猿猱欲度愁攀援。 青泥何盘盘，百步九折萦岩峦。
      扪参历井仰胁息，以手抚膺坐长叹。
    </p-dialog>
  </div>
</template>

<script setup>
import { PMessage } from "@portable-ui/components";
import { ref } from "vue";

const showDialog = ref(false);

const dialogOK = () => {
  PMessage({
    type: "success",
    message: "确认后的回调",
  });
};
</script>
