<script>
import { Line } from 'vue-chartjs'

export default {
  name: "Chart.vue",
  extends: Line,
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
  // //usage :api data (in example)
  // async mounted () {
  //   this.loaded = false
  //   try {
  //     const { userlist } = await fetch('/api/userlist')
  //     this.chartdata = userlist
  //     this.loaded = true
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }
}
</script>

<style scoped>

</style>