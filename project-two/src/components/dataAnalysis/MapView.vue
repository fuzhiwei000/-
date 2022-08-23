<template>
  <div class="map-view">
    <div id="main"></div>
  </div>
</template>

<script>
import geoJson from '@/assets/data.json'
export default {
  data() {
    return {

    }
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById('main'))
    console.log(geoJson)
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
      }]//地图图表的设置
    }
    myChart.setOption(option)
  },
}
</script>

<style lang="less" scoped>
.map-view {
  width: 100%;

  #main {
    width: 100%;
    height: 600px;
  }
}
</style>