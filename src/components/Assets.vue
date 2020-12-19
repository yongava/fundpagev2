<template>
  <div class="overview-wrapper">
    <div>
      <h2>สินทรัพย์ของกองทุน</h2>
      <div style="margin: auto" v-if="this.series.length">
        <VueApexCharts
          type="donut"
          :options="chartOptions"
          :series="series"
        ></VueApexCharts>
      </div>
      <div class="assets">
        <div class="asset" v-for="asset of assets" :key="asset.name">
          <div :style="{ background: asset.color }" class="color"></div>
          <span class="name">{{ asset.name }}</span>
          <span class="value">{{ asset.value }}%</span>
        </div>
      </div>

      <h4>สินทรัพย์ 5 อันดับแรก</h4>

      <div class="assets">
        <div class="asset" v-for="(asset, i) of topAssets" :key="asset.name">
          <span class="name">{{ i + 1 }}. {{ asset.name }}</span>
          <span class="value">{{ asset.value }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Assets",
  components: {
    VueApexCharts,
  },
  props: ["info"],
  data() {
    return {
      colors: [
        "#724F96",
        "#FCBD39",
        "#C7C5C6",
        "#F3A1B5",
        "#EA5A8D",
        "#AB5DA2",
      ],
      series: [],
      chartOptions: {
        chart: {
          type: "donut",
          offsetY: -20,
          animations: {
            enabled: false,
          },
        },
        legend: {
          show: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "100%",
                height: 300,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
        dataLabels: {
          formatter: function (val) {
            return val.toFixed(2) + "%";
          },
          style: {
            fontSize: "10px",
            colors: ["transparent"],
          },
          background: {
            enabled: true,
            borderColor: "transparent",
          },
          // enabled: false
        },
        plotOptions: {
          pie: {
            donut: {
              size: "65%",
            },
          },
        },
        tooltip: {
          enabled: false,
        },
        colors: [],
      },
    };
  },
  computed: {
    assets() {
      return this.info.fundAsset.names.map((item, i) => ({
        name: item,
        value: this.info.fundAsset.assetPctValue[i],
        color: this.colors[i],
      }));
    },
    topAssets() {
      return this.info.topAsset.names.map((item, i) => ({
        name: item,
        value: this.info.topAsset.assetPctValue[i],
      }));
    },
  },
  watch: {
    info(val) {
      console.log(this.info);
      if (val.fundAsset.length) {
        this.initChart();
      }
    },
  },
  methods: {
    initChart() {
      this.series = [...this.series, ...this.info.fundAsset.assetPctValue];
      this.chartOptions = {
        ...this.chartOptions,
        ...{
          colors: this.colors,
        },
      };
    },
  },
  mounted() {
    if (this.info) {
      this.initChart();
    }
  },
};
</script>

<style scoped lang="scss">
.overview-wrapper {
  width: 100%;
  height: 100%;

  > div {
    background: #fff;
    border-radius: 5px;
    margin-bottom: 10px;

    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    box-shadow: 0px 3px 6px #00000009;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h2 {
      margin: 0;
      margin-top: -6px;
      margin-bottom: 36px;
      font-family: "KIT65P";
      font-size: 36px;
      font-weight: normal;
      color: #000000;
    }
  }
}

.assets {
  width: 100%;

  .asset {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #eee;
    position: relative;
    color: #525252;
    font-size: 18px;

    &:last-child {
      border-bottom: none;
    }

    .color {
      height: 80%;
      top: 0;
      bottom: 0;
      margin: auto;
      position: absolute;
      width: 5px;
      border-radius: 2.5px;
    }

    .name {
      flex: 1;
      font-family: "KIT55P";
      font-weight: normal;
      &:nth-child(2) {
        padding-left: 16px;
      }
    }

    .value {
      font-family: "KIT55P";
      font-weight: normal;
      padding-left: 16px;
    }
  }
}

h4 {
  margin: 18px 0 5px;
  padding: 5px 10px;
  background: #f0f3f7;
  border-radius: 3px;
  font-size: 21px;
  line-height: 25px;
  font-family: "KIT65P";
  font-weight: normal;
  color: #000000;
  opacity: 0.8;
  opacity: 0.8;
  width: calc(100% - 18px);
}
</style>
