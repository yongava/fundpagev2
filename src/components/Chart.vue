
<script>
import { Doughnut } from "../plugins/BaseCharts";

export default {
  extends: Doughnut,
  mounted() {
    this.renderChart(
      {
        labels: [
          "หุ้นกลุ่มอื่นๆ",
          "หุ้นกลุ่ม FOOD",
          "หุ้นกลุ่ม ENERGY",
          "หุ้นกลุ่ม COMMERCE",
          "เงินฝาก",
          "อื่นๆ",
        ],
        datasets: [
          {
            backgroundColor: [
              "#724F96",
              "#FCBD39",
              "#C7C5C6",
              "#F3A1B5",
              "#EA5A8D",
              "#AB5DA2",
            ],
            data: [37.73, 21.69, 19.08, 18.24, 2.93, 0.33],
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>

<style scoped lang="scss">
#doughnut-chart {
  height: 100% !important;
  width: 100% !important;
}
</style>
