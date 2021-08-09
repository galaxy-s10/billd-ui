import { LoadingOutlined } from '@huangshuisheng/icons-vue';

const Loading = {
  name: 'BLoading',
  components: { LoadingOutlined },
  render() {
    return (
      <div class="billd-loading">
        <LoadingOutlined
          spin={true}
          customStyle={[
            { 'vertical-align': 'middle', 'margin-right': '10px' },
          ]}></LoadingOutlined>
        加载中...
      </div>
    );
  },
};

Loading.install = function (Vue) {
  Vue.component(Loading.name, Loading);
};

export default Loading;
