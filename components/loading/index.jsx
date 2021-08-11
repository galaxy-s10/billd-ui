import { LoadingOutlined } from '@huangshuisheng/icons-vue';

const Loading = {
  name: 'BLoading',
  components: { LoadingOutlined },
  render() {
    return (
      <div class="billd-loading">
        <LoadingOutlined
          spin={true}
          customStyle={{
            'vertical-align': 'middle',
            'margin-right': '4px',
            'font-size': '20px',
          }}></LoadingOutlined>
        <span style="font-size:12px">加载中...</span>
      </div>
    );
  },
};

Loading.install = function (Vue) {
  Vue.component(Loading.name, Loading);
};

export default Loading;
