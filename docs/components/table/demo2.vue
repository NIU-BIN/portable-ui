<template>
  <p-table :column="column" :data="tableData">
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
    // width: "140",
  },
  {
    key: "powerGridName",
    label: "电调区域",
    width: "140",
  },
  {
    key: "districtName",
    label: "行政区域",
    width: "160",
  },
  {
    key: "industryType",
    label: "行业分类",
  },
  {
    key: "startTime",
    label: "开始日期",
    width: "140",
  },
  {
    key: "endTime",
    label: "结束日期",
    width: "140",
  },
  {
    key: "contractStatus",
    label: "合同状态",
    width: "140",
  },
];

const tableData = [
  {
    customerName: "宁夏区域",
    powerGridName: "111",
    districtName: "222",
    industryType: "333",
    startTime: "2023-05-06",
  },
  {
    customerName: "宁夏区域",
    powerGridName: "111",
    districtName: "222",
    industryType: "333",
    startTime: "2023-05-06",
  },
  {
    customerName: "宁夏区域",
    powerGridName: "111",
    districtName: "222",
    industryType: "333",
    startTime: "2023-05-06",
  },
  {
    customerName: "宁夏区域",
    powerGridName: "111",
    districtName: "222",
    industryType: "333",
    startTime: "2023-05-06",
  },
];
</script>
