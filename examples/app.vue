<template>
  <div>
    <p-icon color="red" :size="18" />
    <p class="space">
      <p-button>default</p-button>
      <p-button type="primary">primary</p-button>
      <p-button type="success">success</p-button>
      <p-button type="info">info</p-button>
      <p-button type="warning">warning</p-button>
      <p-button type="danger">danger</p-button>
    </p>
    <p class="space">
      <p-button type="primary" plain>primary</p-button>
      <p-button type="success" plain>success</p-button>
      <p-button type="info" plain>info</p-button>
      <p-button type="warning" plain>warning</p-button>
      <p-button type="danger" plain>danger</p-button>
    </p>
    <p class="space">
      <p-button type="primary" disabled>primary</p-button>
      <p-button type="success" disabled>success</p-button>
      <p-button type="info" disabled>info</p-button>
      <p-button type="warning" disabled>warning</p-button>
      <p-button type="danger" disabled>danger</p-button>
    </p>
    <p class="space">
      <p-button type="primary">primary</p-button>
      <p-button type="success">success</p-button>
      <p-button type="info">info</p-button>
      <p-button type="warning">warning</p-button>
      <p-button type="danger">danger</p-button>
    </p>
    <p class="space">
      <p-button type="primary" size="small">primary</p-button>
      <p-button type="success" size="small">success</p-button>
      <p-button type="info" size="small">info</p-button>
      <p-button type="warning" size="small">warning</p-button>
      <p-button type="danger" size="small">danger</p-button>
    </p>
    <p class="space">
      <p-button type="primary" size="mini">primary</p-button>
      <p-button type="success" size="mini">success</p-button>
      <p-button type="info" size="mini">info</p-button>
      <p-button type="warning" size="mini">warning</p-button>
      <p-button type="danger" size="mini">danger</p-button>
    </p>
    <!-- <p class="space">
      <p-button type="primary" icon="ri-questionnaire-line"></p-button>
      <p-button type="info" icon="ri-radar-fill"></p-button>
      <p-button type="warning" icon="ri-numbers-fill"></p-button>
    </p> -->
  </div>
</template>
<script></script>
<style lang="less">
.space {
  display: flex;
  gap: 20px;
}
</style>
