<template>
  <div>
    <p-form
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      ref="ruleFormRef"
    >
      <p-form-item label="Activity name" prop="name">
        <p-input v-model="ruleForm.name" placeholder="请输入" />
      </p-form-item>
      <p-form-item label="Activity zone" prop="region">
        <p-select
          :option="options"
          placeholder="请选择"
          v-model="ruleForm.region"
        ></p-select>
      </p-form-item>
      <p-form-item label="Address" prop="address">
        <p-input
          v-model="ruleForm.inputValue"
          placeholder="please input address"
        />
      </p-form-item>
      <p-form-item>
        <p-button @click.prevent="submitForm(ruleFormRef)">Submit</p-button>
        <p-button @click.prevent="resetForm(ruleFormRef)">Reset</p-button>
      </p-form-item>
    </p-form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const options = [
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

const ruleForm = ref({
  name: "",
  region: "1",
  inputValue: "",
});
const ruleFormRef = ref();

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
</script>
