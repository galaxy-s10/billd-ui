{
  /* <template>
  <div>
    <hss-modal
      v-model="visible"
      title="tip"
      cancelText="no"
      confirmText="ok"
      :mask="true"
      :maskClosable="true"
      @on-cancel="cancelClick"
      @on-confirm="confirmClick"
      @on-close="closeClick"
      @visible-change="visibleChange"
    >
      <!-- <div slot="foot" slot-scope="aaa">
        <span>自定义foot{{aaa}}</span>
      </div> -->
      hello world
    </hss-modal>

    <span @click="changeModal">点击显示modal</span>
  </div>
</template> */
}

import HssModal from "./components/hss-ui-cpt/modal/index.jsx";

export default {
  components: {
    HssModal,
  },
  data() {
    return {
      visible: false,
    };
  },
  render() {
    return (
      <div>
        <hss-modal
          vModel={this.visible}
          title="tip"
          cancelText="no"
          confirmText="ok"
          mask={true}
          maskClosable={false}
          on-on-cancel={this.cancelClick}
          vOn:on-confirm={this.confirmClick}
          vOn:on-close={this.closeClick}
          vOn:visible-change={this.visibleChange}
          // {...{
          //   scopedSlots: {
          //     foot: (props) => {
          //       return (
          //         <div>
          //           <span>自定义foot,{props.cancelText}</span>
          //           {/* <span>自定义foot,{JSON.stringify(props)}</span> */}
          //         </div>
          //       );
          //     },
          //   },
          // }}
          scopedSlots={{
            foot: (props) => {
              return (
                <div>
                  <span>自定义foot,{props.cancelText}</span>
                  {/* <span>自定义foot,{JSON.stringify(props)}</span> */}
                </div>
              );
            },
          }}
        >
          {/* 这种写法虽然也能用，但是拿不到slot-scope的值 */}
          {/* <div slot="foot" slot-scope="aaa">
            <span>自定义foot,{aaa}</span>
          </div> */}
          hello world
        </hss-modal>

        <span on-click={this.changeModal}>点击显示modal</span>
      </div>
    );
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    changeModal() {
      this.visible = true;
    },
    visibleChange(v) {
      console.log("visibleChange", v);
    },
    cancelClick() {
      console.log("cancelClick,app组件里modal的cancel回调");
    },
    confirmClick() {
      console.log("cancelClick,app组件里modal的confirm回调");
    },
    closeClick() {
      console.log("closeClick,app组件里modal的close回调");
    },
  },
};
