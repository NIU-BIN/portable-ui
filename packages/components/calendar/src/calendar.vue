<template>
  <div class="p-calendar">
    <div class="p-calendar-box">
      <div class="p-calendar__header">
        <div class="p-calendar__month">
          <div class="p-calendar__month_pre" @click="changeMonth('pre')">
            <i class="p-icon icon-arrow-left-bold"></i>
          </div>
          <div class="p-calendar__month_current">
            {{ currentYear }}年{{ currentMonth?.toString().padStart(2, "0") }}月
          </div>
          <div class="calendar__month_next" @click="changeMonth('next')">
            <i class="p-icon icon-arrow-right-bold"></i>
          </div>
        </div>
        <div class="p-calendar__btn_group">
          <p-button type="primary" size="mini" plain @click="backToToday">
            回到今天
          </p-button>
        </div>
      </div>
      <div class="p-calendar__body">
        <div class="p-calendar__week">
          <div class="p-calendar__week_cell" v-for="item in week" :key="item">
            {{ item }}
          </div>
        </div>
        <div class="p-calendar__day">
          <div
            class="p-calendar__day_cell"
            v-for="dayInfo in cell"
            :key="dayInfo.date"
            :class="{ active: dayInfo.date === activeDate }"
            @click="handleChange(dayInfo)"
          >
            <span
              class="p-calendar__day_value"
              :class="{
                not_current_month: dayInfo.type !== 'current',
              }"
            >
              {{ dayInfo.day.toString().padStart(2, "0") }}
            </span>
            <div class="p-calendar__day_cell_container">
              <slot :name="dayInfo.date" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import PButton from "../../button";
import { today, getCellDate } from "@portable-ui/utils";

defineOptions({
  name: "p-calendar",
});
const emit = defineEmits(["change"]);

interface CalendarCell {
  type: "pre" | "current" | "next";
  date: string;
  day: number;
  month: number;
  year: number;
}

const week = ["日", "一", "二", "三", "四", "五", "六"];
const activeDate = ref();
const cell = ref<CalendarCell[]>([]);
const currentMonth = ref<number>();
const currentYear = ref<number>();

activeDate.value = today;
cell.value = getCellDate();
currentYear.value = new Date().getFullYear();
currentMonth.value = new Date().getMonth() + 1;

const handleChange = (dayInfo: CalendarCell) => {
  if (dayInfo.type !== "current") {
    cell.value = getCellDate(dayInfo.year, dayInfo.month);
  }
  changeMonth(dayInfo.type);
  activeDate.value = dayInfo.date;
  emit("change", dayInfo.date);
};

const getCurrentDateInfo = computed(() => {
  return cell.value.find((item) => item.date === activeDate.value);
});

const backToToday = () => {
  cell.value = getCellDate();
  activeDate.value = today;
  emit("change", today);
};

const changeMonth = (type: string) => {
  if (type === "current") return;
  if (type === "pre") {
    currentMonth.value =
      currentMonth.value! - 1 === 0 ? 12 : currentMonth.value! - 1;
    currentYear.value =
      currentMonth.value! - 1 === 0
        ? currentYear.value! - 1
        : currentYear.value!;
  } else {
    currentMonth.value =
      currentMonth.value! + 1 > 12 ? 1 : currentMonth.value! + 1;
    currentYear.value =
      currentMonth.value! + 1 > 12
        ? currentYear.value! + 1
        : currentYear.value!;
  }
  cell.value = getCellDate(currentYear.value, currentMonth.value);
};
</script>

<style lang="less" scoped></style>
