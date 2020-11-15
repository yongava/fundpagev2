<template>
  <div v-if="info" class="overview-wrapper">
    <div>
      <button v-if="info.typeName != 'normal'" @click="setComponent" class="mini">มีปันผล</button>
      <h2>{{ info.fundCode }}</h2>
      <p class="info">{{ info.description }}</p>
      <div class="further-info">
        <div class="left-block">
          <div class="divided">
            <span>NAV</span>
            <span>{{ info.nav | toFixed(4) }}</span>
          </div>
          <div class="divided">
            <span>YTD</span>
            <span :class="info.ytd >= 0 ? 'up' : 'down'">
              <span v-html="info.ytd >= 0 ? '&#9650;' : '&#9660;'"></span>
              {{ info.ytd | toFixed(2) }}%
            </span>
          </div>
          <p class="miniinfo">as of {{ getDate(info.navDate) }}</p>
          <div class="divided">
            <span class="column">
              {{ info.aum | toLocale }}
              <p class="miniinfo">มูลค่าทรัพย์สินสุทธิ (บาท)</p>
              </span>
          </div>
        </div>
        <div class="rank">
          <span :style="{ opacity: `${this.riskOpacity}` }">{{ info.risk }}</span>
          <p>{{ riskText }}</p>
        </div>
      </div>
    </div>
    <div class="chart-container">
      <h2>ผลการดำเนินงาน</h2>
      <br>

      <div id="chart">
        <VueApexCharts
            type="line"
            height="350"
            :options="options"
            :series="series"
        ></VueApexCharts>
      </div>


    </div>
    <div class="footer-container">
      <a target="_blank" :href="`https://info.scb.co.th/scbeasy/easy_app_link.html?URI=scbeasy://mutualfunds/discover/${info.fundCode}`" class="footer">
        ซื้อกองทุน {{ info.fundCode }}
      </a>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Overview",
  props: ['info'],
  components: {
    VueApexCharts,
  },
  data() {
    return {
      options: {
        chart: {
          id: "chart",
          height: 350,
          type: 'line',
          toolbar: {
            show: false,
            tools: {
              download: false,
            },
          },
          zoom: {
            enabled: false
          }
        },
        colors: [],
        stroke: {
          width: 3,
          curve: 'smooth',
        },
        xaxis: {
          categories: [],
        }
      },
      series: []
    };
  },
  computed: {
    riskOpacity() {
      let opacity = 0;
      switch (this.info.risk) {
        case '1':
          opacity = 0.2;
          break;
        case '2': case '3':
          opacity = 0.4;
          break;
        case '4': case '5':
          opacity = 0.6;
          break;
        case '6': case '7':
          opacity = 0.8;
          break;
        default:
          opacity = 1;
      }
      return opacity;
    },
    riskText() {
      let text = '';
      switch (this.info.risk) {
        case '1': case '2':
          text = 'ความเสี่ยงต่ำ';
          break;
        case '3': case '4':
          text = 'ความเสี่ยงปานกลางค่อนข้างต่ำ';
          break;
         case '5':
          text = 'ความเสี่ยงปานกลางค่อนข้างสูง';
          break;
        case '6': case '7':
          text = 'ความเสี่ยงสูง';
          break;
        default:
          text = 'ความเสี่ยงสูงมาก';
      }
      return text;
    }
  },
  watch: {
    info(val) {
      if (val) {
        this.initChart();
      }
    }
  },
  filters: {
    toFixed(value, fix) {
      return Number(value).toFixed(fix);
    },
    toLocale(value) {
      return Number(value).toLocaleString('en');
    }
  },
  methods: {
    getDate(str) {
      return (new Date(str)).toLocaleDateString('ru').replaceAll('.', '-');
    },
    setComponent() {
      this.$emit('setComponent', 'Dividend');
    },
    initChart() {
      const data = this.info.navChart.map(item => ({
        name: item.name,
        data: item.price.map(val => val.value)
      }));

      const colors = this.info.navChart.map(item => item.color);
      const date = this.info.navChart[0].price.map(val => (new Date(val.date)).toDateString().slice(4, 10));

      this.series = [
        ...this.series,
        ...data
      ];

      this.options = {
        ...this.options,
        ...{
          colors,
          xaxis: {
            categories: date,
            tickAmount: 10,
            labels: {
              offsetX: 13,
              offsetY: 25,
              show: true,
              rotate: 45,
              hideOverlappingLabels: true,
              showDuplicates: false,
              trim: true,
            }
          }
        }
      }
    }
  },
  mounted() {
    if (this.info) {
      this.initChart();
    }
  }
};
</script>

<style scoped lang="scss">
@font-face {
  font-family: "kitbold";
  src: local("kit"), url(/assets/fonts/kitbold.ttf) format("truetype");
}

@font-face {
  font-family: "KIT55P";
  src: local("KIT55P"), url(/assets/fonts/KIT55P.ttf) format("truetype");
}

@font-face {
  font-family: "KIT65P";
  src: local("KIT65P"), url(/assets/fonts/KIT65P.ttf) format("truetype");
}

@font-face {
  font-family: "KIT75F";
  src: local("KIT75F"), url(/assets/fonts/KIT75F.ttf) format("truetype");
}

.overview-wrapper {
  width: 100%;
  height: 100%;
  margin-top: 0px;
  overflow-y: scroll;

  > div {
    background: #fff;
    border-radius: 5px;
    margin-bottom: 12px;
    margin-top: 5px;
    padding: 12px;
    box-shadow: 0px 3px 6px #00000009;

    a{
      font-family: "kitbold";
      font-style: "medium";
      font-size: 28px;
    }
    h2 {
      font-size: 36px;
      font-weight: medium;
      margin-top: 6px;
      margin-bottom: 5px;
      line-height: 20px;
      font-family: "kitbold";
      color: #000000;
    }

    p.info {
      margin: 0 0 32px;
      color: #a0a0a0;
      font-size: 18px;
      font-family: "kitbold";
      font-style: "roman";
    }

    p.miniinfo {
      font-size: 16px;
      margin: 0 0 16px;
      color: #a0a0a0;
      font-family: "kitbold";
      font-style: "roman";
    }

    .further-info {
      display: flex;
      align-items: flex-start;
      justify-content: center;

      .left-block {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;

        .divided {
          display: flex;
          justify-content: space-between;
          width: 50%;
          align-items: left;

          > span {
            font-size: 24px;
            font-family: "kitbold";
            font-style: "medium";
            display: flex;
            align-items: baseline;

            > span {
              font-size: 14px;
            }
          }
        }
      }

      .rank {

        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        margin-right: 5px;
        margin-top: 5px;

        span {
          margin-top: 10px;
          background: #4B2885;
          height: 44px;
          border-radius: 21.75px;
          width: 70px;
          font-size: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: "kitbold";
          font-style: "bold";
        }

        p {
          margin: 0;
          font-size: 14px;
          color: #a0a0a0;
          font-family: "kitbold";
          font-style: "roman";
          text-align: center;
        }
      }
    }
  }
}

.column {
  flex-direction: column;
}

.chart-container {
  margin-bottom: 90px !important;
}

.footer-container {
  background: #F1F3F8 !important;
  margin: 0 -24px !important;
  position: fixed;
  bottom: 0;
  width: calc(100% - 24px);
}

a.footer {
  // position: fixed;
  // left: 0;
  bottom: 0;
  width: 100%;

  outline: none;
  border: none;

  border-radius: 10px;
  // padding: 12px;

  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #72559a;
  line-height: 33px;
  text-align: center;
  text-decoration: none;
  font-size: 28px;
  font-family: "kitbold";
  font-style: "medium";
  font-weight: medium;

  a {
    height: 50px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #72559a;
    border-radius: 10px;
    width: 100%;
    outline: none;
    border: none;
    // font-size: 18px;
    font-size: 28px;
    font-family: "kitbold";
    font-style: "medium";
    font-weight: medium;
  }
}

::v-deep .apexcharts-canvas {
  width: 330px !important;
}

::v-deep .apexcharts-svg {
  width: 330px !important;
}

.up {
  color: #2F9463;
}

.down {
  color: #E64C66;
}

.mini {
  margin-top: 30px;
  margin-right: 7px;
  border: 1px solid #4F2A81;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  height: 19px;
  width: 60px;
  font-size: 12px;
  line-height: 18px;
  color: #4F2A81;
  font-family: 'kitbold';
  font-weight: 700;
  float: right;
  cursor: pointer;
}
</style>
