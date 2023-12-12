<script setup>

import { provide} from 'vue'
import * as echarts from 'echarts';
provide('echarts',echarts)

</script>

<template>
<router-view></router-view>
</template>

<style lang="less" scoped>
</style>
