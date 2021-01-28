<template>
  <div v-if="info" class="overview-wrapper">
    <div class="container">
      <h2>ค่าธรรมเนียม</h2>

      <h4>ค่าธรรมเนียมที่เรียกเก็บจากผู้ถือหน่วยลงทุน</h4>
      <div v-if="info && fundFee.length" class="grid-table">
        <table class="commission-table" style="width: 100%">
          <tr>
            <th id="_th0"></th>
            <th id="_th1">สูงสุดไม่เกิน</th>
            <th id="_th2">เก็บจริง</th>
            <th id="_th3">หน่วย</th>
          </tr>
          <tr v-for="item of fundFee" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.max | toFixed }}</td>
            <td>{{ item.actual | toFixed }}</td>
            <td>{{ item.unit }}</td>
          </tr>
        </table>
      </div>

      <h4>ค่าธรรมเนียมที่เรียกเก็บจากกองทุน</h4>

      <div v-if="info && commissionFee.length" class="grid-table">
        <table class="commission-table" style="width: 100%">
          <tr>
            <th id="_th0"></th>
            <th id="_th1">สูงสุดไม่เกิน</th>
            <th id="_th2">เก็บจริง</th>
            <th id="_th3">หน่วย</th>
          </tr>
          <tr v-for="item of commissionFee" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.max | toFixed }}</td>
            <td>{{ item.actual | toFixed }}</td>
            <td>{{ item.unit }}</td>
          </tr>
        </table>
      </div>

      <p v-if="info.commissionFee.annotation.length" > หมายเหตุ :<br />{{ info.commissionFee.annotation }}</p>
    </div>

    <div style="height: 50px">
    </div>

    <div class="footer-container">
      <a target="_blank" :href="info.factSheetURL">Fund Fact Sheet</a>
      <a target="_blank" :href="info.webURL">ข้อมูลเพิ่มเติม</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Commission",
  props: ["info"],
  computed: {
    commissionFee() {
      return this.feeMap("commissionFee");
    },
    fundFee() {
      return this.feeMap("fundFee");
    },
  },
  methods: {
    feeMap(fee) {
      return this.info[fee].name.map((item, i) => {
        return {
          name: item,
          max: this.info[fee].maximumFees[i],
          actual: this.info[fee].actualFees[i],
          unit: this.info[fee].unit[i],
        };
      });
    },
  },
  filters: {
    toFixed(value) {
      return Number(value).toFixed(2);
    },
  },
  mounted(){
    const urlParams = new URLSearchParams(window.location.search);
    const fundCode = urlParams.get("FundCode");
    const userID = urlParams.get("UserID");
    this.$mixpanel.track('Commission', {
        fundCode: fundCode,
        userID: userID
    });
  }
};
</script>

<style scoped lang="scss">
.overview-wrapper {
  width: 100%;
  height: 100%;

  > .container {
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
      font-family: "KIT65P";
      font-size: 36px;
      font-weight: normal;
      color: #000000;
    }

    p {
      margin: 0;
      font-size: 12px;
      margin-top: 16px;
      margin-bottom: 16px;
      color: #a0a0a0;
      font-family: "psl";
      font-weight: normal;
    }
  }

  button,
  a {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #72559a;
    border-radius: 10px;
    width: 100%;
    outline: none;
    border: none;
    font-size: 28px;
    font-family: "KIT65P";
    font-weight: normal;
    cursor: pointer;
    text-decoration: none;

    &:last-child {
      margin-top: 5px;
      margin-bottom: 20px !important;
    }
    
    width: calc(100% - 20px);
  }

  table {
    width: 100%;

    tr {
      text-align: left;
      border-bottom: 1px solid #A0A0A0;

      td {
        font-family: "KIT55P";
        font-weight: normal;
        font-size: 16px;
        color: #666666;
        text-align: center;
        padding: 0px;
        &:first-child {
          text-align: left;
          //width: 85px;
        }

        &:last-child {
          text-align: right;
        }
      }
    }
  }

  tr th {
    font-family: "KIT55P";
    font-weight: normal;
    font-size: 18px;
    color: #666666;
    text-align: center;
    &:last-child {
      text-align: right;
    }
  }

  h4 {
    margin: 18px 0 5px;
    padding: 5px 10px;
    background: #F0F3F7;
    border-radius: 3px;
    font-size: 21px;
    line-height: 25px;
    font-family: "KIT65P";
    font-weight: normal;
    color: #000000;
    opacity: 0.8;
  }
}

.container:last-child {
  margin-bottom: 150px;
}

.commission-table th#_th0 {
    width: 28%;
}
.commission-table th#_th1 {
    width: 22%;
}
.commission-table th#_th2 {
    width: 15%;
}
.commission-table th#_th3 {
    width: 35%;
}

.footer-container {
  background: #f1f3f8 !important;
  position: fixed;
  bottom: 0;
  margin-top: 0px;
  margin-left: 0px;
  margin-bottom: 0px;
  width: calc(100% - 20px);
}

@media screen and (max-height: 700px) {
  .container{
    height: calc(100vh + 30px) !important;
  }
}

</style>
