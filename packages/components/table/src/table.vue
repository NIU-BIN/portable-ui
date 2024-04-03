<template>
  <div class="p-table">
    <div class="p-table__header--wrapper">
      <table class="p-table__header">
        <thead>
          <tr class="p-table__row">
            <th
              class="p-table__column"
              v-for="th in column"
              :key="th.key + '_th'"
              :style="{
                width: th.width ? th.width + 'px' : '',
                flex: th.width ? 'none' : 1,
                textAlign: th.align || 'left',
              }"
            >
              {{ th.label }}
            </th>
            <th v-if="height" style="width: 8px"></th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="p-table__body--wrapper" :style="{ height: height + 'px' }">
      <table class="p-table__body">
        <tbody>
          <tr
            v-for="(tr, index) in data"
            :key="index + '_tb'"
            class="p-table__row"
            :class="{ 'p-table__row--stripe': stripe && index % 2 }"
          >
            <td
              v-for="(th, _index) in column"
              :key="th.key + '_td'"
              class="p-table__column"
              :style="{
                width: th.width ? th.width + 'px' : '',
                flex: th.width ? 'none' : 1,
                textAlign: th.align || 'left',
              }"
            >
              <slot :name="th.key" :row="tr" :$index="_index">
                {{ tr[th.key] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TableProps } from "./table";

defineOptions({
  name: "p-table",
});

const props = withDefaults(defineProps<TableProps>(), {
  stripe: false,
});
</script>
