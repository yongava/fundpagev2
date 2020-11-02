<template>
  <div v-if="info" class="overview-wrapper">
    <div>
      <button v-if="info.dividendInfo.dividends.length" class="mini">มีปันผล</button>
      <h2>{{ info.fundCode }}</h2>
      <p class="info">{{ info.description }}</p>
      <div class="further-info">
        <div class="left-block">
          <div class="divided">
            <span>NAV</span>
            <span>{{ info.nav }}</span>
          </div>
          <div class="divided">
            <span>YTD</span>
            <span :class="info.ytd >= 0 ? 'up' : 'down'">{{ info.ytd }}%</span>
          </div>
          <p class="miniinfo">as of {{ info.navDate }}</p>
          <div class="divided">
            <span>
              7,664,259,312.00
              <p class="miniinfo">มูลค่าทรัพย์สินสุทธิ (บาท)</p>
              </span>
          </div>
        </div>
        <div class="rank">
          <span :style="{ opacity: `${this.riskOpacity}` }">{{ info.risk }}</span>
          <p>ความเสี่ยงสูง</p>
        </div>
      </div>
    </div>
    <div class="chart-container">
      <h2>ผลการดำเนินงาน</h2>
      <br>
      <img src="https://ava-scbam.s3-ap-southeast-1.amazonaws.com/webview-nav/SCBCHA.png" alt="" width="100%">
      <!-- <VueApexCharts
        width="500"
        type="line"
        :options="options"
        :series="series"
      ></VueApexCharts> -->

    </div>
    <div class="footer-container">
      <button class="footer">ซื้อกองทุน SCBCHA</button>
    </div>
  </div>
</template>

<script>
// import VueApexCharts from "vue-apexcharts";

export default {
  name: "Overview",
  props: ['info'],
  computed: {
    riskOpacity() {
      let opacity = 0;
      switch (this.info.risk) {
        case 1:
          opacity = 0.2;
          break;
        case 2: case 3:
          opacity = 0.4;
          break;
        case 4: case 5:
          opacity = 0.6;
          break;
        case 6: case 7:
          opacity = 0.8;
          break;
        default:
          opacity = 1;
      }
      return opacity;
    }
  }
//   components: {
//     VueApexCharts,
//   },
//   data() {
//     return {
//       options: {
//         chart: {
//           id: "vuechart-example",
//         },
//         xaxis: {
//           categories: [
//             "Jan'20",
//             "Feb'20",
//             "March'20",
//             "Apr'20",
//             "May'20",
//             "Jun'20",
//             "Jul'20",
//             "Aug'20",
//           ],
//         },
//       },
//       series: [
//         {
//           name: "SCBCHA",
//           data: [30, 40, 45, 57, 49, 60, 70, 91],
//         },
//         {
//           name: "เกณฑ์มาตรฐาน",
//           data: [30, 41, 45, 50, 49, 62, 70, 91],
//         },
//       ],
//       colors: ["#77B6EA", "#545454"],
//     };
//   },
};
// </script>

<style scoped lang="scss">
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

  > div {
    background: #fff;
    border-radius: 5px;
    margin-bottom: 12px;
    margin-top: 5px;
    padding: 12px;
    box-shadow: 0px 3px 6px #00000009;

    h2 {
      font-size: 36px;
      font-weight: medium;
      margin-bottom: 5px;
      line-height: 20px;
      font-family: "kitbold";
      font-style: "medium";
      color: #525252;
    }

    p.info {
      margin: 0;
      margin-bottom: 32px;
      color: #a0a0a0;
    }

    p.miniinfo {
      margin: 0;
      font-size: 16px;
      margin-bottom: 16px;
      color: #a0a0a0;
    }

    .further-info {
      display: flex;
      align-items: center;
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

          span {
            font-size: 24px;
            font-family: "kitbold";
          }
        }
      }

      .rank {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        span {
          background: #4d227b;
          height: 40px;
          border-radius: 20px;
          width: fit-content;
          padding: 0 30px;
          font-size: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        p {
          margin: 0;
          color: #a0a0a0;
        }
      }
    }
  }
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

button.footer {
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
  font-size: 18px;
  width: 100%;
  outline: none;
  border: none;
  font-size: 18px;

  button {
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
    font-size: 18px;
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
</style>
