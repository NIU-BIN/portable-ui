<template>
  <div>
    <!-- button -->
    <h3>Button</h3>
    <p-row :gutter="10">
      <p-button>default</p-button>
      <p-button type="primary">primary</p-button>
      <p-button type="success">success</p-button>
      <p-button type="info">info</p-button>
      <p-button type="warning">warning</p-button>
      <p-button type="danger">danger</p-button>
    </p-row>
    <!--  button plain -->
    <h3>Button plain</h3>
    <p-row :gutter="10">
      <!-- <p-button plain>default</p-button> -->
      <p-button type="primary" plain>primary</p-button>
      <p-button type="success" plain>success</p-button>
      <p-button type="info" plain>info</p-button>
      <p-button type="warning" plain>warning</p-button>
      <p-button type="danger" plain>danger</p-button>
    </p-row>
    <!--  button round -->
    <h3>Button round</h3>
    <p-row :gutter="10">
      <p-button round>default</p-button>
      <p-button type="primary" round>primary</p-button>
      <p-button type="success" round>success</p-button>
      <p-button type="info" round>info</p-button>
      <p-button type="warning" round>warning</p-button>
      <p-button type="danger" round>danger</p-button>
    </p-row>
    <!--  button disabled -->
    <h3>Button disabled</h3>
    <p-row :gutter="10">
      <p-button type="primary" disabled>primary</p-button>
      <p-button type="success" disabled>success</p-button>
      <p-button type="info" disabled>info</p-button>
      <p-button type="warning" disabled>warning</p-button>
      <p-button type="danger" disabled>danger</p-button>
    </p-row>
    <!--  button size -->
    <h3>Button size</h3>
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
    <!--  button icon -->
    <h3>Button icon</h3>
    <p-row :gutter="10">
      <p-button type="primary" icon="chart-bar"></p-button>
      <p-button type="info" icon="data-view"></p-button>
      <p-button type="warning" icon="copy"></p-button>
    </p-row>
    <br />
    <!-- icon -->
    <h3>Icon</h3>
    <p-icon :size="20" name="chart-bar" />
    <p-icon :size="20" name="data-view" />
    <p-icon :size="20" name="copy" />
    <!-- layout -->
    <h3>Layout</h3>
    <p-row>
      <p-col :span="10">
        <div class="a"></div>
      </p-col>
      <p-col :span="14"> <div class="b"></div></p-col>
    </p-row>
    <p-row :gutter="20">
      <p-col :span="6">
        <div class="a"></div>
      </p-col>
      <p-col :span="14"> <div class="b"></div></p-col>
      <p-col :span="4">
        <div class="a"></div>
      </p-col>
    </p-row>
    <p-row :gutter="20" justify="end">
      <p-col :span="6">
        <div class="a"></div>
      </p-col>
      <p-col :span="10"> <div class="b"></div></p-col>
      <p-col :span="4">
        <div class="a"></div>
      </p-col>
    </p-row>
    <p-row :gutter="20" justify="space-around">
      <p-col :span="6">
        <div class="a"></div>
      </p-col>
      <p-col :span="10"> <div class="b"></div></p-col>
      <p-col :span="4">
        <div class="a"></div>
      </p-col>
    </p-row>
    <p-row :gutter="20" justify="space-between">
      <p-col :span="6">
        <div class="a"></div>
      </p-col>
      <p-col :span="10"> <div class="b"></div></p-col>
      <p-col :span="4">
        <div class="a"></div>
      </p-col>
    </p-row>
    <p-row :gutter="20" justify="center">
      <p-col :span="6">
        <div class="a"></div>
      </p-col>
      <p-col :span="10"> <div class="b"></div></p-col>
      <p-col :span="4">
        <div class="a"></div>
      </p-col>
    </p-row>
    <!-- message -->
    <h3>Message</h3>
    <p-row :gutter="10">
      <p-button type="success" @click="openMessage('success')">
        success
      </p-button>
      <p-button type="info" @click="openMessage('info')">info</p-button>
      <p-button type="warning" @click="openMessage('warning')">
        warning
      </p-button>
      <p-button type="danger" @click="openMessage('error')">error</p-button>
    </p-row>
    <!-- message showClose  -->
    <h3>Message showClose</h3>
    <p-row :gutter="10">
      <p-button type="success" @click="openMessage('success', true)">
        success
      </p-button>
    </p-row>
    <!-- input -->
    <h3>Input</h3>
    <p-input v-model="inputValue1" placeholder="请输入" />
    <h3>Input password</h3>
    <p-input v-model="inputValue1" type="password" placeholder="请输入" />
    <h3>Input disabled</h3>
    <p-input v-model="inputValue1" disabled placeholder="请输入" />
    <h3>Input clearable</h3>
    <p-input
      v-model="inputValue1"
      type="password"
      clearable
      placeholder="请输入"
    />
    <h3>Input 带图标</h3>
    <p-input v-model="inputValue1">
      <template #pre-icon>
        <i class="p-icon icon-user"></i>
      </template>
    </p-input>
    <br />
    <p-input v-model="inputValue1">
      <template #suffix-icon>
        <i class="p-icon icon-setting"></i>
      </template>
    </p-input>
    <!-- select -->
    <h3>Select</h3>
    <p-select :option="options1" v-model="selectValue1"></p-select>
    <h3>Select 禁用项</h3>
    <p-select
      :option="options2"
      v-model="selectValue2"
      style="width: 240px"
    ></p-select>
    <h3>Select search</h3>
    <p-select
      :option="options2"
      search
      v-model="selectValue2"
      style="width: 240px"
    ></p-select>
    <br />
    <!-- dialog -->
    <h3>Dialog</h3>
    <p-button @click="showDialog1 = true"> success </p-button>
    <p-dialog v-model="showDialog1" width="500px" @ok="dialogOK">
      噫吁嚱，危乎高哉！ 蜀道之难，难于上青天！ 蚕丛及鱼凫，开国何茫然！
      尔来四万八千岁，不与秦塞通人烟。 西当太白有鸟道，可以横绝峨眉巅。
      地崩山摧壮士死，然后天梯石栈相钩连。
      上有六龙回日之高标，下有冲波逆折之回川。
      黄鹤之飞尚不得过，猿猱欲度愁攀援。 青泥何盘盘，百步九折萦岩峦。
      扪参历井仰胁息，以手抚膺坐长叹。
    </p-dialog>
    <h3>Dialog 异步</h3>
    <p-button @click="showDialog2 = true"> 异步关闭 </p-button>
    <p-dialog
      v-model="showDialog2"
      width="500px"
      :before-close="beforeClose"
      @ok="dialogOK"
    >
      噫吁嚱，危乎高哉！ 蜀道之难，难于上青天！ 蚕丛及鱼凫，开国何茫然！
      尔来四万八千岁，不与秦塞通人烟。 西当太白有鸟道，可以横绝峨眉巅。
      地崩山摧壮士死，然后天梯石栈相钩连。
      上有六龙回日之高标，下有冲波逆折之回川。
      黄鹤之飞尚不得过，猿猱欲度愁攀援。 青泥何盘盘，百步九折萦岩峦。
      扪参历井仰胁息，以手抚膺坐长叹。
      <p v-show="showCloseTips" style="color: orange">2秒钟后关闭...</p>
    </p-dialog>
    <!-- checkbox -->
    <h3>Checkbox</h3>
    <p-checkbox label="option1" v-model="checkbox1"></p-checkbox>
    <p-checkbox label="option2" v-model="checkbox2">🎉1212</p-checkbox>
    <h3>Checkbox disabled</h3>
    <p-checkbox label="option1" v-model="checkbox1" disabled></p-checkbox>
    <p-checkbox label="option2" v-model="checkbox2" disabled>🎉1212</p-checkbox>
    <h3>Checkbox group</h3>
    {{ checkboxGroup }}
    <p-checkbox-group v-model="checkboxGroup">
      <p-checkbox label="option1" />
      <p-checkbox label="option2">🎉1212</p-checkbox>
    </p-checkbox-group>
    <!-- carousel -->
    <h3>Carousel</h3>
    <div style="width: 500px; height: 260px">
      <p-carousel>
        <p-carousel-item>1</p-carousel-item>
        <p-carousel-item>2</p-carousel-item>
        <p-carousel-item>3</p-carousel-item>
        <p-carousel-item>4</p-carousel-item>
      </p-carousel>
    </div>
    <!-- calendar -->
    <h3>Calendar</h3>
    <p-calendar>
      <template #2024-03-27>
        <div v-for="item in eventList" :key="item.id" class="event_item">
          <i :class="item.type" />
          <span>{{ item.text }}</span>
        </div>
      </template>
    </p-calendar>
    <!-- toolTip -->
    <h3>ToolTip</h3>
    <p-tooltip content="我是文字提示">
      <div>文字提示</div>
    </p-tooltip>
    <h3>ToolTip placement</h3>
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
        style="
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 10px 0;
        "
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
    <h3>ToolTip width</h3>
    <p-tooltip content="我是文字提示我是文字提示我是文字提示" :width="60">
      <div>文字提示</div>
    </p-tooltip>
    <!-- steps -->
    <h3>Steps</h3>
    <p-steps :active="active">
      <p-step title="第一步" description="打开微信扫一扫" />
      <p-step title="第二步" description="添加好友" />
      <p-step title="第三步" description="选择我的头像" />
      <p-step title="第四步" description="转款1000万" />
    </p-steps>
    <br />
    <p-button type="primary" size="mini" @click="nextStep">下一步</p-button>
    <h3>Steps align</h3>
    <p-steps :active="active" align="center">
      <p-step title="第一步" description="打开微信扫一扫" />
      <p-step title="第二步" description="添加好友" />
      <p-step title="第三步" description="选择我的头像" />
      <p-step title="第四步" description="转款1000万" />
    </p-steps>
    <br />
    <p-button type="primary" size="mini" @click="nextStep">下一步</p-button>
    <h3>Steps icon</h3>
    <p-steps :active="active">
      <p-step title="起床" icon="notification" />
      <p-step title="炒股" icon="data-view" />
      <p-step title="加仓" icon="good" />
      <p-step title="亏大了" icon="cry" />
    </p-steps>
    <!-- collapse -->
    <h3>Collapse</h3>
    <p-collapse v-model="activeNames1">
      <p-collapse-item title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such
          as: design style, icons and texts, position of elements, etc.
        </div>
      </p-collapse-item>
      <p-collapse-item title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
        <div>
          Visual feedback: reflect current state by updating or rearranging
          elements of the page.
        </div>
      </p-collapse-item>
      <p-collapse-item title="Efficiency" name="3">
        <div>
          Simplify the process: keep operating process simple and intuitive;
        </div>
        <div>
          Definite and clear: enunciate your intentions clearly so that the
          users can quickly understand and make decisions;
        </div>
        <div>
          Easy to identify: the interface should be straightforward, which helps
          the users to identify and frees them from memorizing and recalling.
        </div>
      </p-collapse-item>
      <p-collapse-item title="Controllability" name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do
          not make decisions for the users;
        </div>
        <div>
          Controlled consequences: users should be granted the freedom to
          operate, including canceling, aborting or terminating current
          operation.
        </div>
      </p-collapse-item>
    </p-collapse>
    <!-- accordion -->
    <h3>Collapse accordion</h3>
    <p-collapse v-model="activeNames2" accordion>
      <p-collapse-item title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such
          as: design style, icons and texts, position of elements, etc.
        </div>
      </p-collapse-item>
      <p-collapse-item title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
        <div>
          Visual feedback: reflect current state by updating or rearranging
          elements of the page.
        </div>
      </p-collapse-item>
      <p-collapse-item title="Efficiency" name="3">
        <div>
          Simplify the process: keep operating process simple and intuitive;
        </div>
        <div>
          Definite and clear: enunciate your intentions clearly so that the
          users can quickly understand and make decisions;
        </div>
        <div>
          Easy to identify: the interface should be straightforward, which helps
          the users to identify and frees them from memorizing and recalling.
        </div>
      </p-collapse-item>
      <p-collapse-item title="Controllability" name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do
          not make decisions for the users;
        </div>
        <div>
          Controlled consequences: users should be granted the freedom to
          operate, including canceling, aborting or terminating current
          operation.
        </div>
      </p-collapse-item>
    </p-collapse>
    <!-- tree -->
    <h3>Tree</h3>
    <p-tree :data="treeData"></p-tree>
    <h3>Tree showCheckbox</h3>
    <p-tree showCheckbox :data="treeData"></p-tree>
    <!-- switch -->
    <h3>Switch</h3>
    <p>
      <p-switch v-model="switchValue" />
    </p>
    <h3>Switch 文字描述</h3>
    <p>
      <p-switch
        v-model="switchValue"
        active-text="Open"
        inactive-text="Close"
      />
    </p>
    <p>
      <p-switch
        v-model="switchValue"
        inline-prompt
        active-text="Open"
        inactive-text="Close"
      />
    </p>
    <h3>Switch 不同色系</h3>
    <p style="display: flex; gap: 30px">
      <p-switch
        v-model="switchValue"
        type="primary"
        active-text="Open"
        inactive-text="Close"
      />
      <p-switch
        v-model="switchValue"
        type="success"
        active-text="Open"
        inactive-text="Close"
      />
      <p-switch
        v-model="switchValue"
        type="info"
        active-text="Open"
        inactive-text="Close"
      />
      <p-switch
        v-model="switchValue"
        type="warning"
        active-text="Open"
        inactive-text="Close"
      />
      <p-switch
        v-model="switchValue"
        type="danger"
        active-text="Open"
        inactive-text="Close"
      />
    </p>
    <p style="display: flex; gap: 6px">
      <p-switch
        v-model="switchValue"
        type="primary"
        inline-prompt
        active-text="Open"
        inactive-text="Close"
      />
      <p-switch
        v-model="switchValue"
        type="success"
        inline-prompt
        active-text="Open"
        inactive-text="Close"
      />
      <p-switch
        v-model="switchValue"
        type="info"
        inline-prompt
        active-text="Open"
        inactive-text="Close"
      />
      <p-switch
        v-model="switchValue"
        type="warning"
        inline-prompt
        active-text="Open"
        inactive-text="Close"
      />
      <p-switch
        v-model="switchValue"
        type="danger"
        inline-prompt
        active-text="Open"
        inactive-text="Close"
      />
    </p>
    <!-- table -->
    <h3>Table</h3>
    <p-table :column="column" :data="tableData"> </p-table>
    <h3>Table 自定义列</h3>
    <p-table :column="column" :data="tableData">
      <template #industryType="{ row, $index }">
        $index:{{ $index }}, row:{{ row }}
      </template>
    </p-table>
    <!--  -->
    <h3>Table 固定表头</h3>
    <p-table :column="column" :data="tableData" height="200">
      <template #industryType="{ row, $index }">
        $index:{{ $index }}, row:{{ row }}
      </template>
    </p-table>
    <h3>Table 带斑马纹表格</h3>
    <p-table :column="column" :data="tableData" stripe height="200"> </p-table>
    <!-- color picker -->
    <h3>Color Picker</h3>
    <p-color-picker v-model="color"></p-color-picker>
    <!-- infinite scroll -->
    <h3>InfiniteScroll</h3>
    <div class="infinite-scroll-box" v-infinite-scroll="load">
      <div class="infinite-scroll-item" v-for="item in infiniteCount">
        {{ item }}
      </div>
      <p v-if="scrollLoading">Loading...</p>
      <p v-if="scrollNoMore">No more</p>
    </div>
    <!-- form -->
    <h3>Form</h3>
    <p-form
      :rules="rules"
      :model="ruleForm"
      label-width="120px"
      ref="ruleFormRef"
    >
      <p-form-item label="Activity name" prop="name">
        <p-input v-model="ruleForm.name" placeholder="请输入" />
      </p-form-item>
      <p-form-item label="Activity zone" prop="region">
        <p-select
          :option="options1"
          placeholder="请选择"
          v-model="ruleForm.region"
        ></p-select>
      </p-form-item>
      <p-form-item label="Address" prop="address">
        <p-input v-model="inputValue1" placeholder="please input address" />
      </p-form-item>
      <p-form-item>
        <p-button @click.prevent="submitForm(ruleFormRef)">Submit</p-button>
        <p-button @click.prevent="resetForm(ruleFormRef)">Reset</p-button>
      </p-form-item>
    </p-form>
  </div>
</template>
<script setup>
import { PMessage } from "@portable-ui/components";
import { reactive, toRefs, ref } from "vue";
import { treeData } from "./data.ts";

const options1 = [
  {
    label: "option1",
    value: "1",
  },
  {
    label: "option2",
    value: "2",
  },
  {
    label: "option3",
    value: "3",
  },
  {
    label: "option4",
    value: "4",
  },
];

const options2 = [
  {
    label: "option1",
    value: "1",
  },
  {
    label: "option2",
    value: "2",
    disabled: true,
  },
  {
    label: "option3",
    value: "3",
  },
  {
    label: "option4",
    value: "4",
  },
];

const eventList = [
  {
    id: 1,
    type: "success",
    text: "洗脸",
  },
  {
    id: 2,
    type: "warning",
    text: "刷牙",
  },
  {
    id: 3,
    type: "success",
    text: "干饭",
  },
];

const column = [
  {
    key: "customerName",
    label: "企业名称",
    width: "140",
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
    // width: "160",
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

const rules = {
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
};

const ruleFormRef = ref();

const state = reactive({
  inputValue1: "",
  selectValue1: "",
  selectValue2: "1",
  showDialog1: false,
  showDialog2: false,
  showCloseTips: false,
  checkbox1: false,
  checkbox2: false,
  checkboxGroup: ["option1"],
  active: 0,
  activeNames1: [],
  activeNames2: [],
  switchValue: false,
  color: "rgb(255,0,0)",
  infiniteCount: 10,
  scrollLoading: false,
  scrollNoMore: false,
  ruleForm: {
    name: "",
    region: "",
  },
});

const {
  inputValue1,
  selectValue1,
  selectValue2,
  showDialog1,
  showDialog2,
  showCloseTips,
  checkbox1,
  checkbox2,
  checkboxGroup,
  active,
  activeNames1,
  activeNames2,
  switchValue,
  color,
  infiniteCount,
  scrollLoading,
  scrollNoMore,
  ruleForm,
} = toRefs(state);

const openMessage = (type, showClose) => {
  PMessage({
    type,
    message: "这是一条消息",
    showClose: showClose,
  });
};

const dialogOK = () => {
  PMessage({
    type: "success",
    message: "确认后的回调",
  });
};
const beforeClose = (done) => {
  state.showCloseTips = true;
  setTimeout(() => {
    state.showCloseTips = false;
    done();
  }, 2000);
};

const nextStep = () => {
  active.value++;
  if (active.value > 4) {
    active.value = 0;
  }
};

const load = () => {
  console.log("load");
  state.scrollLoading = true;

  setTimeout(() => {
    if (state.infiniteCount > 30) {
      state.scrollNoMore = true;
    } else {
      state.infiniteCount += 6;
    }
    state.scrollLoading = false;
  }, 2000);
};

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};

defineExpose({
  ruleForm,
});
</script>
<style lang="less">
.a,
.b {
  height: 40px;
}
.a {
  background: #d3dce6;
}
.b {
  background-color: #e5e9f2;
}
.space {
  display: flex;
  gap: 20px;
}

.p-carousel {
  .p-carousel-item:nth-child(2n) {
    background-color: aquamarine;
  }
  .p-carousel-item:nth-child(2n + 1) {
    background-color: pink;
  }
}

.event_item {
  margin-top: 6px;
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 14px;
  color: #666;
  i {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
  .success {
    background-color: var(--p-success);
  }
  .warning {
    background-color: var(--p-warning);
  }
}

.infinite-scroll-box {
  border: 1px solid #d3d3d3;
  width: 500px;
  height: 300px;
  overflow-y: auto;
  gap: 6px;
  box-sizing: border-box;

  .infinite-scroll-item {
    margin: 10px;
    height: 40px;
    line-height: 40px;
    background-color: rgb(180, 206, 247);
    text-align: center;
  }
  p {
    text-align: center;
    font-size: 14px;
  }
}
</style>
