<template>
    <div class="map" id="map" ref="map">
    </div>
</template>
<script setup>
import axios from 'axios'
import { ref, onMounted, inject } from 'vue'
const echarts = inject("echarts")
const mapData = ref([])
const getMap = async () => {
    mapData.value = await axios.get("http://localhost:5173/map/chinamap.json")
}
const map = ref()
onMounted(() => {
    getMap().then((res) => {
        // mapData.value = res
        let myChart = echarts.init(map.value)
        // 注册地图名
        echarts.registerMap("chinaMap", mapData.value.data)
        let option = {
            title: {//标题设置
                text: '城市销量',
                //link:,链接
                //sublink:,副链接
                target: 'self',//当前页打开
                // backgroundColor: 'red',
                // borderColor: 'pink',
                // borderWidth: 5,
                left:"45%",//水平方向
                // subtext: '副标题',
                textStyle: {//标题字体样式，同css
                    color: '#fff',
                    fontSize:20,
                    textShadowBlur:10,
                    textShadowColor:"#33ffff"
                },},
                geo: {//地理坐标组件
                    type: map,
                    itemStyle: {
                        areaColor: "#0099ff",
                        borderColor: "#11aaff",
                        shadowColor: "rgba(111,123,221,.5)",
                        shadowBlur: 30,
                        emphasis: {
                            focus: "self" //高亮自己
                        }
                    },
                    map: "chinaMap",
                    roam: false, //平移
                    zoom: 1,//缩放比例，默认1
                    center: [107.32099, 30.293652]
                },
                visualMap: {
                    type: 'continuous',
                    min: 100,
                    max: 5000,
                    calcuable: true,//滑动
                    inRange: {
                        color: ["#50ac12", "#112acf", "#ddafbb"],

                    },
                    textStyle: {
                        color: "white "
                    }
                },
                tooltip: {
                    tigger: "item"
                },
                series: [
                    {
                        type: "scatter",//散点图
                        itemStyle: {
                            color: "red"
                        },
                        coordinateSystem: "geo",//坐标系
                        data: [
                            { name: "重庆", value: [106.551538, 29.568242, 4333] },
                            { name: "四川", value: [104.063689, 30.584757, 4333] },
                            { name: "贵州", value: [106.681703, 26.62651, 4333] },
                            { name: "云南", value: [102.71527, 25.049205, 4333] },
                            { name: "湖南", value: [113.020649, 28.20158, 4333] }
                        ]
                    }
                ]
            }
        myChart.setOption(option)
        console.log(mapData.value.data.features
            )
        })
})
</script>

<style scoped>
.map {
    width: 100%;
    height: 90%;
}
</style>