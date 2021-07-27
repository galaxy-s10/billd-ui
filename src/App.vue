<template>
  <div class="myfont">
    dgdsg的粉红色的12432
  </div>
</template>

<script>
// import sds from './App';

export default {
  components: {
    // sds
  },
  data() {
    return {
      asdg:'5345'
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style >
/* @import './index'; */
@font-face {
  font-family: "webfont" !important;
  /* font-display: swap; */
  src: url('./assets/font/webfont.eot'); /* IE9 */
  src: url('./assets/font/webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('./assets/font/webfont.woff2') format('woff2'),
  url('./assets/font/webfont.woff') format('woff'), /* chrome、firefox */
  url('./assets/font/webfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('./assets/font/webfont.svg#webfont') format('svg'); /* iOS 4.1- */
}
.myfont {
  /* color: red; */
  font-family: "webfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* transform: translate(10,10);
  transition: all 2s ease;
  user-select: none; */
}
</style>