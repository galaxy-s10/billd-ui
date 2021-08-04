<script>
import svgData from './svgdata';
import successSvg from '../components/assets/svgdata/close';

export default {
  components: {},
  data() {
    return { svgData };
  },
  render() {
    console.log(this.svgData.children[0]);
    console.log(successSvg, 5555);
    const viewBox = '0 0 1024 1024';
    const svgClassString = 'icon';
    const svgStyle = '';
    const svgBaseProps = {
      width: '1em',
      height: '1em',
      fill: 'currentColor',
      'aria-hidden': 'true',
      focusable: 'false',
    };
    const innerSvgProps = {
      ...svgBaseProps,
      viewBox,
      class: svgClassString,
      style: svgStyle,
    };
    if (!viewBox) {
      delete innerSvgProps.viewBox;
    }
    console.log(innerSvgProps);
    const svg = this.svgData.children[0];
    return (
      <div>
        svg组件
        <svg {...innerSvgProps} viewBox={viewBox}>
          {svg.children &&
            svg.children.map((item) => {
              console.log({ ...item.attributes });
              return <path {...{ attrs: item.attributes }}></path>;
            })}
        </svg>
      </div>
    );
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>
