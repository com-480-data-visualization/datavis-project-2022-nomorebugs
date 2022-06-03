<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>
