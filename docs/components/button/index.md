<script setup>
import demo1 from './demo1.vue'
</script>

# Button

<preview comp-name="button" demo-name="demo1">
  <demo1/>
</preview>

<div>
  <p-row :gutter="10">
    <p-button>default</p-button>
    <p-button type="primary">primary</p-button>
    <p-button type="success">success</p-button>
    <p-button type="info">info</p-button>
    <p-button type="warning">warning</p-button>
    <p-button type="danger">danger</p-button>
  </p-row>
  <p-row :gutter="10">
    <p-button type="primary" plain>primary</p-button>
    <p-button type="success" plain>success</p-button>
    <p-button type="info" plain>info</p-button>
    <p-button type="warning" plain>warning</p-button>
    <p-button type="danger" plain>danger</p-button>
  </p-row>
  <p-row :gutter="10">
    <p-button type="primary" disabled>primary</p-button>
    <p-button type="success" disabled>success</p-button>
    <p-button type="info" disabled>info</p-button>
    <p-button type="warning" disabled>warning</p-button>
    <p-button type="danger" disabled>danger</p-button>
  </p-row>
  <p-row :gutter="10">
    <p-button type="primary">primary</p-button>
    <p-button type="success">success</p-button>
    <p-button type="info">info</p-button>
    <p-button type="warning">warning</p-button>
    <p-button type="danger">danger</p-button>
  </p-row>
  <p-row :gutter="10">
    <p-button type="primary" size="small">primary</p-button>
    <p-button type="success" size="small">success</p-button>
    <p-button type="info" size="small">info</p-button>
    <p-button type="warning" size="small">warning</p-button>
    <p-button type="danger" size="small">danger</p-button>
  </p-row>
  <p-row :gutter="10">
    <p-button type="primary" size="mini">primary</p-button>
    <p-button type="success" size="mini">success</p-button>
    <p-button type="info" size="mini">info</p-button>
    <p-button type="warning" size="mini">warning</p-button>
    <p-button type="danger" size="mini">danger</p-button>
  </p-row>
</div>
