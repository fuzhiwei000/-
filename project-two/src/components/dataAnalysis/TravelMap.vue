<template>
  <div class="trave-map">
    <div id="main"></div>
  </div>
</template>

<script>
import geoJson from '@/assets/data.json'
import { travel } from "@/api/api";
export default {
  data() {
    return {

    }
  },
  created() {
    travel().then(res => {
      if (res.data.status === 200) {
        let { points, linesData } = res.data.data
        console.log(linesData)
        this.draw(points, linesData)
      }
    })
  },
  methods: {
    draw(points,linesData) {
      let myChart = this.$echarts.init(document.getElementById('main'))
      // console.log(geoJson)
      this.$echarts.registerMap('china', geoJson)//注册成可用的地图
      let option = {
        backgroundColor: 'rgb(121,145,209)',
        geo: {
          map: 'china',
          aspectScale: 0.75,//地图长宽比
          zoom: 1.1,//缩放比
          itemStyle: {
            normal: {//正常状态，还有一个鼠标放上去改变的状态
              areaColor: {
                type: 'radial',//径向渐变
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: '#09132c'//百分之0处的颜色
                  }, {
                    offset: 1,
                    color: '#274d68'//百分之100处的颜色
                  }
                ],
                globalCoord: true,//如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
              },
              shadowColor: 'rgb(58,115,192)',//阴影颜色
              shadowOffsetX: 10,
              shadowOffsetY: 11,//偏移值，即阴影向外偏移阴影大小等

            },
          },
          regions: [{
            name: '南海诸岛',// // 对应的是json文件中的名称如: "南海诸岛"

          }]
          // // 重点 部分 ,在这里给大家模拟一个省份颜色与界线颜色的修改,如果想修改多个省份就在后面多添加几个对象即可.
        },
        series: [{//配置地图的相关样式
          type: 'map',
          zoom: 1.1,
          label: {
            normal: {
              show: true,//是否默认显示地图上的文字
              textStyle: {
                color: '#1DE986'
              }
            },
            emphasis: {
              textStyle: {
                color: 'rgb(183,185,14)'
              }
            }
          },
          map: 'china',
          itemStyle: {
            normal: {//正常状态，还有一个鼠标放上去改变的状态
              opacity: 0.5,   // 透明度
              backgroundColor: 'rgb(121,145,209)',//地图图表颜色之前是整个地图的背景色
              borderWidth: 1,//边框宽度
              borderColor: "red",  // 省份界线颜色
              borderWidth: 1,  // 省份界线的宽度
              areaColor: {
                type: 'radial',//径向渐变
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgb(31,54,150)'//百分之0处的颜色
                  }, {
                    offset: 1,
                    color: 'rgb(89,128,142)'//百分之100处的颜色
                  }
                ],
                globalCoord: true//如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
              }
            },
            emphasis: {
              areaColor: 'rgb(46,229,206)',
              borderWidth: 0.1
            }//高亮状态下的多边形和标签样式,即鼠标放上去各省份的样式


          },
        },
        {//series可以配置多个地图层靠zlevel层级划分
          type: 'effectScatter',//类型是散点图
          coordinateSystem: 'geo',//坐标系用的是geo
          showEffectOn: 'render',//绘制完成后显示特效
          symbolSize: 10,//散点大小
          zlevel: 1,//图层层级
          data: points,//点的坐标和配置
          rippleEffect: {
            period: 15,
            scale: 4,
            brushType: 'fill'
          }//涟漪特效
        },
        {
          // 关于地图中线路动画效果的设置
          type: 'lines',
          zlevel: 2,
          effect: {
            show: true,//是否显示特效。
            period: 4,//运行周期
            symbol: 'arrow',//箭头样式
            symbolSize: 7,//大小
            trailLength: 0.4,
          },
          lineStyle: {
            normal: {
              //normal正常显示的配置
              color: '#1DE9B6',//颜色
              width:1,//宽度
              opacity:0.1,//透明度
              curveness:0.3,//弯曲度
            }
          },
          data: linesData//点的坐标和配置
        }
        ]//地图图表的设置
      }
      myChart.setOption(option)
    }
  },
}
</script>

<style lang="less" scoped>
.trave-map {
  width: 100%;

  #main {
    width: 100%;
    height: 600px;
  }
}
</style>