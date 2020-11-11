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
      <div id="chart2">
        <VueApexCharts
            type="bar"
            height="350"
            :options="chartOptions2"
            :series="series2"
        ></VueApexCharts>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Performance",
  props: ['info'],
  components: {
    VueApexCharts,
  },
  data() {
    return {
      series: [
        {
          name: "NAV",
          data: [],
        },
      ],
      series2: [
        {
          name: "NAV",
          data: [],
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
          categories: [],
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
      chartOptions2: {
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
          categories: [],
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
  methods: {
    initChart1() {
      this.chartOptions = {
        ...this.chartOptions,
        ...{
          xaxis: {
            categories: this.info.returnChart.history.period
          }
        }
      }

      this.series = [{
        ...this.series,
        ...{
          data: this.info.returnChart.history.pct.map(item => item.toFixed(2))
        }
      }];
    },
    initChart2() {
      this.chartOptions2 = {
        ...this.chartOptions2,
        ...{
          xaxis: {
            categories: Object.keys(this.info.returnChart.chart).map(item => item.slice(6))
          }
        }
      }

      this.series2 = [{
        ...this.series2,
        ...{
          data: Object.values(this.info.returnChart.chart)
        }
      }];
    }
  },
  mounted() {
    this.initChart1();
    this.initChart2();
  }
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
      margin: 0;
      margin-bottom: 36px;
      font-size: 36px;
      font-family: "kitbold";
      font-style: "medium";
      font-weight: medium;
      color: #000000;
    }
  }
}
</style>
