import { LoadingOutlined } from '@huangshuisheng/icons-vue';

export default {
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
