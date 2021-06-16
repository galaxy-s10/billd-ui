// import { linkTo } from '@storybook/addon-links';

import HssSwitch from "../components/hss-ui-cpt/switch/index.jsx";

export default {
  title: "Switch",
  argTypes: {
    switchVal: {
      name: "switchVal",
      type: { name: "boolean", required: false },
      defaultValue: true,
      description: "指定当前是否选中，可使用 v-model 双向绑定数据。	",
      table: {
        type: { summary: "type summary" },
        defaultValue: { summary: "undefined" },
      },
      control: {
        type: "boolean",
      },
    },
    defaultChecked: {
      type: { name: "string", required: false },
      defaultValue: false,
      description: "初始是否选中",
      control: {
        type: "boolean",
      },
      table: {
        // type: { summary: "type summary" },
        // defaultValue: { s  ummary: "defaultValue summary" },
      },
    },
    openText: {
      type: { name: "string", required: false },
      defaultValue: "",
      description: "选中时的内容",
      table: {
        defaultValue: {
          summary: "无",
          detail: "switch状态是开启时候显示的内容",
        },
      },
      control: {
        type: "text",
      },
    },
    closeText: {
      type: { name: "string", required: false },
      defaultValue: "",
      description: "非选中时的内容",
      table: {
        defaultValue: {
          summary: "无",
          detail: "switch状态是关闭时候显示的内容",
        },
      },
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args, { argTypes }) => {
  return {
    components: { HssSwitch },
    props: Object.keys(argTypes),
    // Storybook provides all the args in a $props variable.
    // Each arg is also available as their own name.
    template: '<HssSwitch v-bind="$props" v-on="$props" />',
  };
};

export const Default = Template.bind({});
// Primary.args = {
//   switchVal: true,
// };

// export const toStorybook = (args) => {
//   console.log(args);
//   return {
//     components: { HssSwitch },

//     template: "<HssSwitch/>",
//   };
// };

// toStorybook.story = {
//   name: "app",
// };
