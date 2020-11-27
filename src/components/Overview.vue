<template>
  <div v-if="info" class="overview-wrapper">
    <div>
      <button
        v-if="info.typeName != 'normal'"
        @click="setComponent"
        class="mini"
      >
        {{info.typeName}}
      </button>
      <h2>{{ info.fundCode }}</h2>
      <p class="info">{{ info.description }}</p>
      <div class="further-info">
        <div class="left-block">
          <table
            style="
              width: 100%;
              font-family: 'KIT45P';
              font-weight: normal;
              align-items: baseline;
              font-size: 24px;
            "
          >
            <tr class="table__tr">
              <td class="table__td"><span>NAV</span></td>
              <td class="table__td">
                <span>{{ info.nav | toFixed(4) }}</span>
              </td>
            </tr>
            <tr class="table__tr">
              <td class="table__td"><span>YTD</span></td>
              <td class="table__td">
                <span :class="info.ytd >= 0 ? 'up' : 'down'">
                  {{ info.ytd | toFixed(2) }}%
                  <span v-html="info.ytd >= 0 ? '&#9650;' : '&#9660;'"></span>
                </span>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <p class="miniinfo">as of {{ getDate(info.navDate) }}</p>
              </td>
            </tr>
          </table>

          <div class="divided">
            <span class="column">
              {{ info.aum | toLocale }}
              <p class="miniinfo">มูลค่าทรัพย์สินสุทธิ (บาท)</p>
            </span>
          </div>
        </div>
        <div class="rank">
          <span :style="{ opacity: `${this.riskOpacity}` }">{{
            info.risk
          }}</span>
          <p>{{ riskText }}</p>
        </div>
      </div>
    </div>
    <div>
      <h2>ผลการดำเนินงาน</h2>
      <br />

      <div id="chart" class="chart-container">
        <VueApexCharts
          type="line"
          height="350"
          :options="options"
          :series="series"
        ></VueApexCharts>
      </div>
    </div>
    <div class="footer-container" style="margin-bottom: 0px">
      <a
        target="_blank"
        :href="info.factSheetURL"
        class="footer"
      >
        ซื้อกองทุน {{ info.fundCode }}
      </a>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Overview",
  props: ["info"],
  components: {
    VueApexCharts,
  },
  data() {
    return {
      options: {
        chart: {
          id: "chart",
          height: 350,
          type: "line",
          toolbar: {
            show: false,
            tools: {
              download: false,
            },
          },
          zoom: {
            enabled: false,
          },
        },
        colors: [],
        stroke: {
          width: 3,
          curve: "smooth",
        },
        xaxis: {
          categories: [],
        },
      },
      series: [],
    };
  },
  computed: {
    riskOpacity() {
      let opacity = 0;
      switch (this.info.risk) {
        case "1":
          opacity = 0.2;
          break;
        case "2":
        case "3":
          opacity = 0.4;
          break;
        case "4":
        case "5":
          opacity = 0.6;
          break;
        case "6":
        case "7":
          opacity = 0.8;
          break;
        default:
          opacity = 1;
      }
      return opacity;
    },
    riskText() {
      let text = "";
      switch (this.info.risk) {
        case "1":
        case "2":
          text = "ความเสี่ยงต่ำ";
          break;
        case "3":
        case "4":
          text = "ความเสี่ยงปานกลางค่อนข้างต่ำ";
          break;
        case "5":
          text = "ความเสี่ยงปานกลางค่อนข้างสูง";
          break;
        case "6":
        case "7":
          text = "ความเสี่ยงสูง";
          break;
        default:
          text = "ความเสี่ยงสูงมาก";
      }
      return text;
    },
  },
  watch: {
    info(val) {
      if (val) {
        this.initChart();
      }
    },
  },
  filters: {
    toFixed(value, fix) {
      return Number(value).toFixed(fix);
    },
    toLocale(value) {
      return Number(value).toLocaleString("en");
    },
  },
  methods: {
    getDate(str) {
      return new Date(str).toLocaleDateString("ru").replaceAll(".", "-");
    },
    setComponent() {
      this.$emit("setComponent", "Dividend");
    },
    initChart() {
      const data = this.info.navChart.map((item) => ({
        name: item.displayName,
        data: item.price.map((val) => val.value),
      }));

      const colors = this.info.navChart.map((item) => item.color);
      const date = this.info.navChart[0].price.map((val) =>
        new Date(val.date).toDateString().slice(4, 10)
      );

      this.series = [...this.series, ...data];

      this.options = {
        ...this.options,
        ...{
          colors,
          xaxis: {
            categories: date,
            tickAmount: 10,
            labels: {
              offsetX: 13,
              offsetY: 20,
              show: true,
              rotate: 45,
              hideOverlappingLabels: true,
              showDuplicates: false,
              trim: true,
              style: {
                colors: ["#525252"],
                fontSize: "10px",
              },
            },
            axisTicks: {
              show: true,
              color: "#525252",
              height: 0,
              offsetX: 0,
              offsetY: 0,
            },
          },
          yaxis: {
            labels: {
              offsetX: -15,
              style: {
                colors: ["#525252"],
                fontSize: "10px",
              },
            },
          },
        },
        grid: {
          borderColor: '#f0f0f0',
          row: {
            opacity: 0.1,
          },
          column: {
            opacity: 0.1,
          },
          padding: {
            right: 20,
            left: -10,
            bottom: 5,
          },
          xaxis: {
            lines: {
              show: true,
            },
          },
        },
        chart: {
          height: "300px",
          width: "100%",
          offsetY: -20,
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
  margin-top: -5px;

  > div {
    background: #fff;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 10px;

    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;

    box-shadow: 0px 3px 6px #00000009;

    a {
      // font-family: "kitbold";
      font-size: 28px;
    }
    h2 {
      margin-top: 6px;
      margin-bottom: 5px;
      line-height: 20px;
      color: #000000;
      font-family: "KIT65P";
      font-size: 36px;
      font-weight: normal;
    }

    p.info {
      margin: 0 0 30px;
      color: #a0a0a0;
      font-size: 18px;
      font-family: "KIT55P";
      font-weight: normal;
    }

    p.miniinfo {
      font-size: 16px;
      margin: 0 0 16px;
      color: #a0a0a0;
      font-family: "KIT55P";
      font-weight: normal;
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
          width: 60%;
          align-items: left;

          > span {
            font-size: 24px;
            display: flex;
            align-items: baseline;
            font-family: "KIT45P";
            font-weight: normal;
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
        margin-top: 1px;
        // margin-left: -25px;

        span {
          margin-top: 10px;
          margin-right: 0px;
          background: #4b2885;
          height: 44px;
          border-radius: 21.75px;
          width: 60px;
          font-size: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: "KIT75F";
          font-style: "bold";
        }

        p {
          margin: 0;
          margin-top: 5px;
          font-size: 14px;
          color: #a0a0a0;
          font-family: "KIT55P";
          font-weight: normal;
          text-align: -webkit-center;
        }
      }
    }
  }
}

.column {
  flex-direction: column;
}

.chart-container {
  margin-bottom: -10px !important;
}

.footer-container {
  background: #f1f3f8 !important;
  position: fixed;
  bottom: 0;

  // margin: 0 -20px !important;
  margin-top: 0px;
  margin-left: -18px;
  margin-right: -20px;

  width: 375px;
}
/* On screens that are 600px wide or less, */
@media screen and (max-width: 400px) {
  .footer-container {
    width: calc(100% - 20px);
  }
}
a.footer {
  // position: fixed;
  // left: 0;
  bottom: 0;
  width: 100%;

  outline: none;
  border: none;

  border-radius: 10px;

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
  font-family: "KIT65P";
  font-weight: normal;

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
  color: #2f9463;
}

.down {
  color: #e64c66;
}

.mini {
  margin-top: 5px;
  margin-right: 7px;
  border: 1px solid #4f2a81;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  height: 21px;
  width: 55px;
  font-size: 12px;
  line-height: 18px;
  color: #4f2a81;
  font-family: "KIT65P";
  font-weight: normal;
  float: right;
  cursor: pointer;
}

.table {
  &__tr {
    display: flex;
    align-items: baseline;
  }

  &__td {
    &:first-child {
      padding-right: 10px;
    }

    &:last-child {
      flex: 1;
    }
  }
}
</style>
