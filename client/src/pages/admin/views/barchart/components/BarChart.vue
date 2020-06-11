<template>
  <div :class="className" :style="{height:height, width:width}"></div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts/theme/macarons');

  const animationDuration = 6000;
  export default {
    name: "BarChart",
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '300px'
      }
    },
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
      })
    },
    methods: {
      initChart() {
        this.chart = echarts.init(this.$el, 'macarons');
        this.chart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow' // 默认为直线， 可选为： 'line' | 'shadow'
            }
          },
          drid: {
            top: 10,
            left: '2%',
            right: '2%',
            bottom: '3%',
            containerabel: true
          },
          xAxis: [{
            type: 'category',
            data: ['A', 'B', 'C', 'D', 'E'],
            axisTick: {
              alignWithLabel: true
            }
          }],
          yAxis: [{
            type: 'value',
            axisTick: {
              show: false
            }
          }],
          series: [{
            name: 'pageA',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: [70, 80, 60, 50, 100],
            animationDuration
          },{
            name: 'pageB',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: [30, 100, 60, 50, 70],
            animationDuration
          }, {
            name: 'pageC',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: [60, 20, 100, 40, 50],
            animationDuration
          }
          ]
        })
      }
    }
  }
</script>
