<template>
  <div class="box">
    <div ref="leftA" id="lefta" />
    <div ref="leftB" id="leftb" />
    <div ref="leftC" id="leftc" />
    <div ref="leftD" id="leftd" />
    <div ref="leftE" id="lefte" />
    <div ref="leftF" id="leftf" />
    <div ref="leftG" id="leftg" />
    <div ref="map" id="map" />
    <div ref="mapcq" id="mapcq" />
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { mapData } from '../../../../../assets/map.js'
import { mapCq } from '../../../../../assets/mapcq.js'
import { ref, onMounted } from 'vue';
onMounted(
  () => {
    init1(),
      init2(),
      init3(),
      init4(),
      init5(),
      init6(),
      init7(),
      init8(),
      init9()
  })
// 柱状图
const leftA = ref()
const init1 = () => {
  let myChart = echarts.init(leftA.value);//存储
  var option = {
    title: {//标题设置
      text: '高兵text',
      //link:,链接
      //sublink:,副链接
      target: 'self',//当前页打开
      backgroundColor: 'red',
      borderColor: 'pink',
      borderWidth: 5,
      x: "left",//水平方向
      subtext: '副标题',
      textStyle: {//标题字体样式，同css
        color: 'yellow'
      }
      // 所有主标题加上sub及是副标题设置
    },
    legend: {//顶部图例
      show: true,
      // 图例布局朝向
      orient: "verical",
      icon: 'circle',
      top: "20",//位置
      itemWidth: 10//图例宽高  图例颜色textStyle：{}
    },
    tooltip: {//弹出内容
      // 触发类型
      trigger: "axis",//item图形触发 axis
      axisPointer: {//坐标轴指示器
        type: 'cross',//默认直线line ,shadow阴影  cross十字
      },
      showContent: 'true',//悬浮框false
      //悬浮层样式 //同标题设置

      // 自定义提示框信息
      formatter(parmas) {
        // console.log(parmas)
        for (let i = 0; i <= parmas.length; i++) {
          return "字母" + parmas[i].name + "大小" + parmas[i].data.value + "日期" + parmas[i].data.data
        }
      }

    },
    xAxis: {//x轴
      //value 数据轴， category 类目轴
      type: "value",
    },
    yAxis: {//y轴
      //value 数据轴， category 类目轴
      data: ["aa", "bb", "cc", "dd"],
      type: "category"
    },
    series: [{//系列
      name: "字母大全",
      type: "bar",//图形类型 pie饼状图
      barWidth: 20, //图形宽度
      // color:"red", 颜色
      // 单独设置每个轴颜色
      itemStyle: {
        color: (parmas) => {
          let colorList = [
            "#c23432",
            "#c23f32",
            "#c33432",
            "#c2a432",
          ]
          return colorList[parmas.dataIndex]
        }
      },
      data: [
        {
          value: "14",
          data: "2023-10-1"
        },
        {
          value: "15",
          data: "2023-10-6"
        },
        {
          value: "19",
          data: "2023-10-4"
        },
        {
          value: "13",
          data: "2023-11-1"
        },
      ],
      markPoint: {
        data: [
          // 最大、最小值
          {
            type: "max",
            name: "最大值"
          }, {
            type: "min",
            name: "最小值"
          }
        ]
      },
      markLine: {
        data: [{
          type: "average",
          name: "平均值"
        }]
      }
    }]
  };
  myChart.setOption(option);//设置参数
}
// 饼状图
const leftB = ref()
const init2 = () => {
  let myChart1 = echarts.init(leftB.value);//存储
  // 设置数据
  let data = [
    { value: 11, name: "美食", itemStyle: { color: "rgb(0,111,112,0.3)" } },
    { value: 13, name: "游戏", itemStyle: { color: "rgb(10,111,112,0.3)" } },
    { value: 16, name: "哈哈", itemStyle: { color: "rgb(60,61,112,0.5)" } },
    { value: 41, name: "呜呜", itemStyle: { color: "rgb(90,171,112,0.7)" } },
  ]
  let option1 = {
    title: {
      text: "饼状图",
      left: "center"
    },
    legend: {
      left: "left",
      orient: "verical"
    },
    series: [{
      name: "统计",
      type: "pie",
      data,
      radius: ["40%", "70%"],//设置饼图的半径，第一项内半径  第二项外半径,
      // 设置环形图文本标签
      label: {
        show: true,  //false
        position: 'inside',//outside 外侧，inside 内侧 ，center，中心
      },
      roseType: "area",//是否设置成南丁格尔图
      itemStyle: {
        color: 'red',
        showBlur: 200,//阴影度
        shadowColor: "red",
      }
    },
    ]
  }
  myChart1.setOption(option1);//设置参数
}
//曲线图
const leftC = ref()
const init3 = () => {
  let myChart = echarts.init(leftC.value);//存储
  let Xdata = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  let data = [11, 34, 23, 56, 23, 23, 55];
  let option = {
    title: {
      text: "折线图",
      left: "left"
    },
    legend: {
      show: true
    },
    xAxis: {
      type: "category",
      data: Xdata
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "美食",
        type: "line",//折线图
        smooth: true,//平缓，过度
        areaStyle: {},
        markPoint: {
          data: [
            {
              type: "max",
              name: "最大值"
            },
            {
              type: "min",
              name: "最小值"
            }]
        },
        markLine: {
          data: [{
            type: "average",
            name: "平均值"
          }]
        },
        data
      }
    ]
  }
  myChart.setOption(option);
}
// 多曲线
const leftD = ref()
const init4 = () => {
  let myChart = echarts.init(leftD.value);//存储
  let Xdata = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  let data = [11, 34, 23, 56, 23, 23, 55];
  let data1 = [13, 34, 33, 36, 33, 43, 55];
  let data2 = [71, 44, 43, 36, 23, 13, 75];
  let data3 = [11, 24, 33, 46, 53, 63, 75];

  let option = {
    title: {
      text: "折线图",
      left: "left"
    },
    legend: {
      show: true
    },
    xAxis: {
      type: "category",
      data: Xdata
    },
    yAxis: {
      type: "value",
    },
    tooltip: {//弹出内容
      // 触发类型
      trigger: "axis",//item图形触发 axis
      axisPointer: {//坐标轴指示器
        type: 'cross',//默认直线line ,shadow阴影  cross十字
      }
    },
    series: [
      {
        name: "美食",
        type: "line",//折线图
        smooth: true,//平缓，过度
        // 数据堆叠
        stack: "num",//同类型的数据需要匹配相同的stack值
        data,
        areaStyle: {},
        // 选中高亮
        emphasis: {
          focus: "series" //聚焦当前高亮
        }
      },
      {
        name: "游戏",
        type: "line",//折线图
        smooth: true,//平缓，过度
        // 数据堆叠
        stack: "num",//同类型的数据需要匹配相同的stack值
        data: data1,
        areaStyle: {},
        // 选中高亮
        emphasis: {
          focus: "series" //聚焦当前高亮
        }
      },
      {
        name: "娱乐",
        type: "line",//折线图
        smooth: true,//平缓，过度
        // 数据堆叠
        stack: "num",//同类型的数据需要匹配相同的stack值
        data: data2,
        areaStyle: {},
        // 选中高亮
        emphasis: {
          focus: "series" //聚焦当前高亮
        }
      },
      {
        name: "爱好",
        type: "line",//折线图
        smooth: true,//平缓，过度
        // 数据堆叠
        stack: "num",//同类型的数据需要匹配相同的stack值
        data: data3,
        areaStyle: {},
        // 选中高亮
        emphasis: {
          focus: "series" //聚焦当前高亮
        }
      },
    ]
  }
  myChart.setOption(option);
}
// 散点图
const leftE = ref()
const init5 = () => {
  let myChart = echarts.init(leftE.value)
  let data = [[10.0, 8.04],
  [8.07, 6.95],
  [13.0, 7.58],
  [9.05, 8.81],
  [11.0, 8.33],
  [14.0, 7.66],
  [13.4, 6.81],
  [10.0, 6.33],
  [14.0, 8.96],
  [12.5, 6.82],
  [9.15, 7.2],
  [11.5, 7.2],
  [3.03, 4.23],
  [12.2, 7.83],
  [2.02, 4.47],
  [1.05, 3.33],
  [4.05, 4.96],
  [6.03, 7.24],
  [12.0, 6.26],
  [12.0, 8.84],
  [7.08, 5.82],
  [5.02, 5.68]]
  let option = {
    title: {
      text: "散点图"
    },
    grid: {//布局，距离边框
      left: "20%",
      top: "20%",
      show: true,//图标外层边框
      backgroundColor: "red",
      borderColor: "purple"
    },
    xAxis: {},
    yAxis: {},
    tooltip: {},//提示
    series: [
      {
        data,
        type: 'scatter',//散点图
        symbolSize: 30//点大小
      }
    ],
    // 图形样式
    color: {
      // 线性渐变
      type: "linear",
      x: 0,
      y: 0,
      x2: 1,
      y2: 0,
      colorStops: [
        {
          offset: 0,
          color: "#abc123"
        },
        {
          offset: 1,
          color: "#af1113"
        },
      ]
    },
    emphasis: {//高亮
      itemStyle: {
        borderColor: "rgba(100,211,233,.5)",
        borderWidth: 39
      }
    }
  }
  myChart.setOption(option)
}
// k线图
const leftF = ref()
const kData = ref([
  [20, 34, 10, 38],
  [40, 35, 30, 50],
  [31, 38, 33, 44],
  [38, 15, 5, 42]
])
const computedData = () => {
  return kData.value.map(item => item[0])
}
const init6 = () => {
  let myChart = echarts.init(leftF.value)
  let option = {
    title: {
      text: "k线图"
    },
    grid: {//布局，距离边框
      left: "20%",
      top: "20%",
      show: true,//图标外层边框
      backgroundColor: "red",
      borderColor: "purple"
    },
    xAxis: {
      data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    tooltip: {//提示
      trigger: "axis",
      axisPointer: {
        type: 'cross'
      },//默认直线line ,shadow阴影  cross十字

    },
    yAxis: {},
    series: [
      {
        data: kData.value,
        type: 'candlestick',//k线图
        symbolSize: 30,//点大小
        itemStyle: {
          color: "#aac132",//上涨
          color0: "#fffa11",//下跌，
          borderColor: "red",
          borderWidth: 1,
          borderColor0: "#666123"
        },
        markPoint: {
          data: [
            {
              name: "最大值",
              type: "max",
              // 在哪个维度设置最大最小值，
              valueDim: "highest"
            },
            {
              name: "最小值",
              type: "min",
              valueDim: "lowest"
            },
            {
              name: "平均值",
              type: "average"
            }
          ]
        }
      },
      {
        type: "line",//折线图
        smooth: true,
        data: computedData()
      }
    ],
    // 图形样式
    emphasis: {//高亮
      itemStyle: {
        borderColor: "rgba(100,211,233,.5)",
        borderWidth: 39
      }
    }
  }
  myChart.setOption(option)
}
// 雷达图
const leftG = ref()
const init7 = () => {
  let myChart = echarts.init(leftG.value)
  let option = {
    title: {
      text: "雷达图"
    },
    radar: [
      {
        shape: "circle",
        indicator: [//雷达指示器，用来指定雷达图中多个变量(维度)
          { name: 'AQI', max: 300 },
          { name: 'PM2.5', max: 350 },
          { name: 'PM10', max: 300 },
          { name: 'CO', max: 350 },
          { name: 'NO2', max: 300 },
          { name: 'SO2', max: 300 }],
        //半径
        radius: 120,
        // 坐标系的起始角度
        startAngle: 180,
        // 内部层级
        splitNumber: 4,
        // 指示器名字
        axisName: {
          formatter: "{value}",
          color: "#123123"
        },
        splitArea: {//设置分割区域效果
          areaStyle: {
            // 分割区样式
            color: ["#234121", "#111232", "#aacabb", "#112331"]
          }
        },
      }
    ],
    series:
    {
      type: "radar",
      data: [
        {
          value: [111, 221, 221, 162, 212, 116],
          areaStyle: { color: "rgba(112,122,234,.4)" }
        }
      ],
      lineStyle: {
        type: "dashed",
      }
    }

  }
  myChart.setOption(option)
}
const map = ref()
const init8 = () => {

  let myChart = echarts.init(map.value)
  // 注册地图名
  echarts.registerMap("chinaMap", mapData)
  let option = {
    geo: {//地理坐标组件
      type: map,
      map: "chinaMap",
      roam: true, //平移
      zoom: 10,//缩放比例，默认1
      center: [107.32099, 30.293652]

    },
    series: [
      {
        // 散点图
        type: "scatter",
        data: [
          {
            name: "重庆市",//数据项名字
            value: [
              106.555562,//经度
              29.569247,//维度
              4000
            ]
          }
        ],
        coordinateSystem: "geo",
        symbolSize: 30,//点大小
        // label: {
        //   show: true
        // },
      },
      {
        type:"effectScatter",//涟漪效果散点图,动效
        coordinateSystem:"geo",
        data: [
          {
            name: "北京",//数据项名字
            value: [
            116.400739,
            39.924759,
            4000
            ]
          }
        ],
        // 涟漪效果相关配置
        rippleEffect:{
          number:2,
          scale:4
        },
        itemStyle:{
          color:"red"
        }
      }
    ]
  }
  myChart.setOption(option)
}
const mapcq = ref()
const init9 = () => {
  let myChart = echarts.init(mapcq.value)
  // 注册地图名
  echarts.registerMap("mapcq", mapCq)
  let option = {
    geo: {//地理坐标组件
      type: map,
      map: "mapcq",
      roam: true, //平移
      // zoom:10,//缩放比例，默认1
      // center:[107.32099,30.293652]
      label: {
        show: true,
      }

    }
  }
  myChart.setOption(option)
}

</script>
<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#lefta {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}

#leftb {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}

#leftc {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}

#leftd {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}

#lefte {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}

#leftf {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}

#leftg {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}

#map {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}

#mapcq {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}</style>