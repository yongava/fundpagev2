<template>
  <div class="overview-wrapper">
    <div>
      <h2>ผลตอบแทนรายปี</h2>
      <div id="chart" class="chart-container">
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
      <div id="chart2" class="chart-container">
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
  props: ["info"],
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
          height: "280px",
          offsetY: -10,
          animations: {
            enabled: false,
          },
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
            dataLabels: {
              position: "top", // top, center, bottom
            },
            colors: {
              ranges: [
                {
                  from: -10000,
                  to: 0,
                  color: "#A794C0",
                },
                {
                  from: 0,
                  to: 10000,
                  color: "#724F96",
                },
              ],
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            val = val.toFixed(2) + "%";
            return val;
          },
          offsetY: -15,
          style: {
            fontSize: "10px",
            colors: ["#724F96"],
          },
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [],
          axisBorder: {
            show: false,
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: false,
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            offsetY: -5,
            style: {
              colors: "#a0a0a0",
              fontSize: "10px",
            },
          },
        },
        yaxis: {
          forceNiceScale: true,
          max: (max) => {
            return Math.ceil(max * 1.2);
          },
          min: (min) => {
            return Math.floor(min * 1.2);
          },
          axisBorder: {
            show: false,
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: false,
            offsetX: 0,
            offsetY: 0,
          },
          title: {
            text: "",
          },
          labels: {
            offsetX: -15,
            style: {
              colors: "#a0a0a0",
              fontSize: "10px",
            },
          },
        },
        grid: {
          borderColor: "#f0f0f0",
          padding: {
            right: 20,
            left: -10,
          },
          xaxis: {
            lines: {
              show: true,
            },
          },
        },
        fill: {
          opacity: 1,
          //colors: ["#724F96"],
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
          height: "280px",
          offsetY: -10,
          animations: {
            enabled: false,
          },
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
            dataLabels: {
              position: "top", // top, center, bottom
            },
            colors: {
              ranges: [
                {
                  from: -10000,
                  to: 0,
                  color: "#A794C0",
                },
                {
                  from: 0,
                  to: 10000,
                  color: "#724F96",
                },
              ],
            },
          },
        },

        dataLabels: {
          enabled: true,
          formatter: function (val) {
            val = val.toFixed(2) + "%";
            return val;
          },
          offsetY: -15,
          style: {
            fontSize: "10px",
            colors: ["#724F96"],
          },
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [],
          axisBorder: {
            show: false,
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: false,
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            offsetY: -5,
            style: {
              colors: "#a0a0a0",
              fontSize: "10px",
            },
          },
        },
        yaxis: {
          show: (show) => {
            return show;
          },
          max: (max) => {
            // console.log(`Max value: ${max}`);
            return Math.ceil(max * 1.2);
          },
          min: (min) => {
            return Math.floor(min * 1.2);
          },
          axisBorder: {
            show: false,
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: false,
            offsetX: 0,
            offsetY: 0,
          },
          title: {
            text: "",
          },
          forceNiceScale: true,
          labels: {
            formatter: function (val) {
              if (val=='Infinity') {
                val = "";
              }
              else{
                val = val.toFixed(2)
              }
              return val;
            },
            offsetX: -15,
            style: {
              colors: "#a0a0a0",
              fontSize: "10px",
            },
          },
        },
        grid: {
          borderColor: "#f0f0f0",
          padding: {
            right: 20,
            left: -10,
          },
          xaxis: {
            lines: {
              show: true,
            },
          },
        },
        fill: {
          opacity: 1,
          //colors: ["#724F96"],
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
            categories: this.info.returnChart.history.period,
          },
        },
      };

      this.series = [
        {
          ...this.series,
          ...{
            data: this.info.returnChart.history.pct.map((item) =>
              item.toFixed(2)
            ),
          },
        },
      ];
    },
    initChart2() {
      this.chartOptions2 = {
        ...this.chartOptions2,
        ...{
          xaxis: {
            categories: Object.keys(this.info.returnChart.chart).map((item) =>
              item.slice(6)
            ),
          },
        },
      };

      this.series2 = [
        {
          ...this.series2,
          ...{
            data: Object.values(this.info.returnChart.chart),
          },
        },
      ];
    },
  },
  mounted() {
    this.initChart1();
    this.initChart2();
    const urlParams = new URLSearchParams(window.location.search);
    const fundCode = urlParams.get("FundCode");
    const userID = urlParams.get("UserID");
    this.$mixpanel.track("Performance", {
      fundCode: fundCode,
      userID: userID,
    });
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
    border-radius: 5px;
    margin-bottom: 10px;

    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 0px;

    box-shadow: 0px 3px 6px #00000009;
    display: flex;
    flex-direction: column;

    h2 {
      margin: 0;
      margin-top: -6px;
      margin-bottom: 5px;
      font-family: "KIT65P";
      font-size: 36px;
      font-weight: normal;
      color: #000000;
    }
  }
}

.chart-container {
  margin-bottom: -10px !important;
}
</style>
