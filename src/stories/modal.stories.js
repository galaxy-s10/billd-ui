// import { linkTo } from '@storybook/addon-links';

import HssModal from "../components/hss-ui-cpt/modal/index.jsx";

export default {
  title: "Modal",
  argTypes: {
    visible: {
      name: "visible",
      type: { name: "boolean", required: false },
      defaultValue: false,
      description: "是否显示对话框，可使用 v-model 双向绑定数据。	",
      // table: {
      //   type: { summary: "type summary" },
      //   defaultValue: { summary: "undefined" },
      // },
      control: {
        type: "boolean",
      },
    },
    title: {
      type: { name: "string", required: false },
      defaultValue: "标题",
      description: "对话框标题",
      table: {
        // type: { summary: "type summary" },
        defaultValue: {
          summary: "标题",
          // detail: "标题标题",
        },
      },
      // control: {
      //   type: "boolean",
      // },
    },
    cancelText: {
      type: { name: "string", required: false },
      defaultValue: "取消",
      description: "取消按钮文字",
      control: {
        type: "text",
      },
      table: {
        // type: { summary: "type summary" },
        // defaultValue: { s  ummary: "defaultValue summary" },
      },
    },
    confirmText: {
      type: { name: "string", required: false },
      defaultValue: "确定",
      description: "确定按钮文字",
      table: {
        // defaultValue: {
        //   summary: "无",
        //   detail: "switch状态是开启时候显示的内容",
        // },
      },
      control: {
        type: "text",
      },
    },
    mask: {
      type: { name: "boolean", required: false },
      defaultValue: true,
      description: "是否显示遮罩层",
      table: {
        // defaultValue: {
        //   summary: "无",
        //   detail: "switch状态是关闭时候显示的内容",
        // },
      },
      control: {
        type: "boolean",
      },
    },
    maskClosable: {
      type: { name: "boolean", required: false },
      defaultValue: false,
      description: "点击遮罩层是否关闭对话框	",
      table: {
        // defaultValue: {
        //   summary: "无",
        //   detail: "switch状态是关闭时候显示的内容",
        // },
      },
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args, { argTypes }) => {
  return {
    components: { HssModal },
    props: Object.keys(argTypes),
    // Storybook provides all the args in a $props variable.
    // Each arg is also available as their own name.
    template: `
      <div>
      <HssModal v-bind="$props" v-on="$props">hello</HssModal>
      <span>点击显示modal</span>
      </div>
    `,
  };
};

export const Default = Template.bind({});
