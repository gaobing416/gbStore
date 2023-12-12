<template>
    <h1>图表</h1>
    <div class="chart" ref="chart">
    </div>
</template>
<script setup>
import { inject, onMounted, ref } from 'vue'
import { getChartOne } from '../../../../../api'
const echarts = inject("echarts")

const chart = ref()
const data = ref([])
const xdata = ref([])
const ydata = ref([])
const getdata = async () => {
    let res = await getChartOne()
    console.log(res.data, "111", xdata.value, ydata.value)
    data.value = res.data
}
const setData = () => {
    xdata.value = data.value.map(v => v.title)
    ydata.value = data.value.map(v => v.num)
}
onMounted(() => {
    let myChart = echarts.init(chart.value)
    getdata().then(() => {
        setData()
        myChart.setOption({
            grid: {
                top: "-1%",
                left: "4%",
                right: "6%",
                bottom: "13%",
                containLabel: true //包含坐标文字
            },
            tooltip: {//弹出内容
                // 触发类型
                trigger: "axis",//item图形触发 axis
                axisPointer: {//坐标轴指示器
                    type: 'cross',//默认直线line ,shadow阴影  cross十字
                }},
                xAxis: {
                    type: "value",
                    // data: xdata.value
                },
                yAxis: {
                    type: "category",
                    data: xdata.value
                },
                series: [
                    {
                        type: "bar",
                        barWidth: 30, //图形宽度
                        data: ydata.value,
                        itemStyle: {
                            barBorderRadius: [0, 10, 10, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                                [{ offset: 0, color: "#005eaa" },
                                { offset: 0.5, color: "#aacaa1" },
                                { offset: 1, color: "#0cc211" }]
                            )
                        }
                    },
                ]
            });
    })
})
</script>
<style scoped>
.chart {
    height: 22.5rem;
}

h1 {
    text-align: center;
    height: 0.9rem;
    /* font-size: 1.5625rem; */
}
</style>