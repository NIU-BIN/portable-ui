<template>
  <div style="width: 500px; margin: 0 auto">
    <div style="display: flex; justify-content: center; gap: 20px">
      <p-tooltip content="我是文字提示" placement="top-start">
        <p-button type="primary" plain size="mini">top-start</p-button>
      </p-tooltip>
      <p-tooltip content="我是文字提示" placement="top">
        <p-button type="primary" plain size="mini">top</p-button>
      </p-tooltip>
      <p-tooltip content="我是文字提示" placement="top-end">
        <p-button type="primary" plain size="mini">top-end</p-button>
      </p-tooltip>
    </div>
    <div
      class="row"
      style="display: flex; justify-content: space-between; margin: 10px 0"
    >
      <p-tooltip content="我是文字提示" placement="left-start">
        <p-button type="primary" plain size="mini">left-start</p-button>
      </p-tooltip>
      <p-tooltip content="我是文字提示" placement="right-start">
        <p-button type="primary" plain size="mini">right-start</p-button>
      </p-tooltip>
    </div>
    <div
      class="row"
      style="display: flex; justify-content: space-between; margin: 10px 0"
    >
      <p-tooltip content="我是文字提示" placement="left">
        <p-button type="primary" plain size="mini">left</p-button>
      </p-tooltip>
      <p-tooltip content="我是文字提示" placement="right">
        <p-button type="primary" plain size="mini">right</p-button>
      </p-tooltip>
    </div>
    <div
      class="row"
      style="display: flex; justify-content: space-between; margin: 10px 0"
    >
      <p-tooltip content="我是文字提示" placement="left-end">
        <p-button type="primary" plain size="mini">left-end</p-button>
      </p-tooltip>
      <p-tooltip content="我是文字提示" placement="right-end">
        <p-button type="primary" plain size="mini">right-end</p-button>
      </p-tooltip>
    </div>
    <div
      class="row"
      style="display: flex; justify-content: center; gap: 20px; margin: 10px 0"
    >
      <p-tooltip content="我是文字提示" placement="bottom-start">
        <p-button type="primary" plain size="mini">bottom-start</p-button>
      </p-tooltip>
      <p-tooltip content="我是文字提示" placement="bottom">
        <p-button type="primary" plain size="mini">bottom</p-button>
      </p-tooltip>
      <p-tooltip content="我是文字提示" placement="bottom-end">
        <p-button type="primary" plain size="mini">bottom-end</p-button>
      </p-tooltip>
    </div>
  </div>
</template>
