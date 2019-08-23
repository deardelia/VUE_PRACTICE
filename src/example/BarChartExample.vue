<template lang="pug">
  .chart
    d3-barchart(:data='chartData' :options='options')
    d3-barchart(:data='chartData2' :options='options')
</template>
<script>
import d3Barchart from '../vue-d3-barchart.vue'
export default {
  name: 'bar-chart-example',
  components: {
    d3Barchart
  },
  data () {
    return {
      chartData: [
        { x: 2010, y: 89242 },
        { x: 2011, y: 79231 },
        { x: 2012, y: 89219 },
        { x: 2013, y: 92390 },
        { x: 2014, y: 99829 },
        { x: 2015, y: 108992},
        { x: 2016, y: 112120 },
        { x: 2017, y: 93739 },
        { x: 2018, y: 91734 },
        { x: 2019, y: 63246 },
        { x: 2020, y: 0 },
      ],
      /*chartData2: [
        { x: 10, y: 13 },
        { x: 11, y: 15 },
        { x: 12, y: 28 },
        { x: 1, y: 5 },
        { x: 13, y: 30 },
        { x: 15, y: 17 },
        { x: 16, y: 3 },
        { x: 17, y: 11 },
        { x: 2, y: 4 },
        { x: 3, y: 22 },
        { x: 4, y: 11 },
        { x: 5, y: 13 },
        { x: 6, y: 90 },
        { x: 7, y: 13 },
        { x: 8, y: 12 },
        { x: 9, y: 5 },
        { x: 18, y: 22 },
        { x: 19, y: 2 }
      ],*/
      options: {
        rules: true,
        axis: true,
        labels: true,
        padding: 0.3,
        line: true,
        points: false,
        value: true,
        gradient: {
          stroke: true
        },
        curve: {
        },
        getX: (d) => {
          return d.x
        },
        getY: (d) => {
          return d.y
        }
      }
    }
  }
}
</script>
<style lang="stylus">
  .chart
    display: inline-block
    width: 600px
    height: 200px
    margin-top: 15em
    margin-left: 20em
</style>
