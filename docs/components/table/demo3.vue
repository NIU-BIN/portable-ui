<template>
  <p-table :column="column" :data="tableData" height="200">
    <template #industryType="{ row, $index }">
      $index:{{ $index }}, row:{{ row }}
    </template>
  </p-table>
</template>

<script setup>
const column = [
  {
    key: "customerName",
    label: "企业名称",
    width: "150",
  },
  {
    key: "powerGridName",
    label: "电调区域",
    width: "120",
  },
  {
    key: "address",
    label: "行政区域",
  },
];

const tableData = [
  {
    customerName: "XXX化工有限公司",
    powerGridName: "宁夏区域",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    customerName: "XXX化工有限公司",
    powerGridName: "宁夏区域",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    customerName: "XXX化工有限公司",
    powerGridName: "宁夏区域",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    customerName: "XXX化工有限公司",
    powerGridName: "宁夏区域",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    customerName: "XXX化工有限公司",
    powerGridName: "宁夏区域",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    customerName: "XXX化工有限公司",
    powerGridName: "宁夏区域",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>
