<template>
  <div class="overview-wrapper">
    <div>
      <h2>ผลตอบแทนรายปี</h2>
      <div id="chart">
        <VueApexCharts
          type="bar"
          height="350"
          :options="chartOptions"
          :series="series"
        ></VueApexCharts>
      </div>
    </div>
    <div>
      <h2>ผลตอบแทนสะสม</h2>
      <div id="chart">
        <VueApexCharts
          type="bar"
          height="350"
          :options="chartOptions"
          :series="series"
        ></VueApexCharts>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Performance",
  components: {
    VueApexCharts,
  },
  data() {
    return {
      series: [
        {
          name: "NAV",
          data: [-2.79, -12.24, 12.93, -23.41, 7.63],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
          toolbar: {
            show: false,
            tools: {
              download: false,
            },
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "flat",
          },
        },

        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: ["2016", "2017", "2018", "2019", "YTD"],
        },
        yaxis: {
          title: {
            text: "",
          },
        },
        fill: {
          opacity: 1,
          colors: ["#724F96"],
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
.overview-wrapper {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  > div {
    background: #fff;
    border-radius: 10px;
    margin-bottom: 12px;
    padding: 12px;
    box-shadow: 0px 3px 6px #00000009;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 36px;
      font-weight: bolder;
      margin: 0;
      margin-bottom: 36px;
    }
  }
}
</style>
