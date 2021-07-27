<template>
  <div>{{ obj999 }}{{ arr999 }}</div>
</template>
<script>
export default {
  data() {
    return {
      obj999: { a: 1, b: 2 },
      arr999: [1, 2, 3],
    };
  },
};
</script>
