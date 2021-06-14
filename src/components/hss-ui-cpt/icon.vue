<template>
  <div>
    <!-- 判断type，如果没有设置type或者设置了type但是找不到，默认icon就是notice -->
    <template v-if="typeList.indexOf(type) != -1">
      <img
        :src="require(`./assets/img/${type}.png`)"
        style="width: 20px; height: 20px; vertical-align: bottom"
        alt=""
      />
    </template>
    <template v-else>
      <img
        src="./assets/img/info.png"
        style="width: 20px; height: 20px; vertical-align: bottom"
        alt=""
      />
    </template>
  </div>
</template>
<script>
export default {
  props: {
    type: String,
  },
  components: {},
  data() {
    return {
      typeList: ["success", "info", "error", "warning"],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
</style>