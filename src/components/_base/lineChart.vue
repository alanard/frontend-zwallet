<script>
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  props: {
    chartData: {
      type: Object
    },
    options: {
      type: Object
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
  watch: {
    chartData: function() {
      this.renderChart(this.chartData, this.options)
    }
  }
}

</script>
