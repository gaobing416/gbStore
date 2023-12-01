<template>
  <div class="box">
    <div ref="leftA" id="lefta" />
    <div ref="leftB" id="leftb" />
    <div ref="leftC" id="leftc" />
    <div ref="leftD" id="leftd" />
  </div>
</template>

<script setup>
import * as echarts from 'echarts';

import { ref, onMounted } from 'vue';
onMounted(
  () => {
    init1(),
      init2(),
      init3(),
      init4()
  })
// 柱状图
const leftA = ref()
const init1 = () => {
  let myChart1 = echarts.init(leftA.value);//存储
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
  myChart1.setOption(option);//设置参数
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
        markLine:{
          data:[{
            type:"average",
            name:"平均值"
          }]
        },
        data
      }
    ]
  }
  myChart.setOption(option);
}
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
        stack:"num",//同类型的数据需要匹配相同的stack值
        data,
        areaStyle:{},
        // 选中高亮
        emphasis:{
          focus:"series" //聚焦当前高亮
        }
      },
      {
        name: "游戏",
        type: "line",//折线图
        smooth: true,//平缓，过度
        // 数据堆叠
        stack:"num",//同类型的数据需要匹配相同的stack值
        data:data1,
        areaStyle:{},
        // 选中高亮
        emphasis:{
          focus:"series" //聚焦当前高亮
        }
      },
      {
        name: "娱乐",
        type: "line",//折线图
        smooth: true,//平缓，过度
        // 数据堆叠
        stack:"num",//同类型的数据需要匹配相同的stack值
        data:data2,
        areaStyle:{},
        // 选中高亮
        emphasis:{
          focus:"series" //聚焦当前高亮
        }
      },
      {
        name: "爱好",
        type: "line",//折线图
        smooth: true,//平缓，过度
        // 数据堆叠
        stack:"num",//同类型的数据需要匹配相同的stack值
        data:data3,
        areaStyle:{},
        // 选中高亮
        emphasis:{
          focus:"series" //聚焦当前高亮
        }
      },
    ]
  }
  myChart.setOption(option);
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
</style>