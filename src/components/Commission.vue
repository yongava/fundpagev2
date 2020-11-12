<template>
  <div v-if="info" class="overview-wrapper">
    <div class="container">
      <h2>ค่าธรรมเนียม</h2>

      <h4>ค่าธรรมเนียมที่เรียกเก็บจากผู้ถือหน่วยลงทุน</h4>

      <div v-if="info && commissionFee.length" class="grid-table">
        <table style="width:100%">
          <tr>
            <th></th>
            <th>สูงสุดไม่เกิน</th>
            <th>เก็บจริง</th>
            <th>หน่วย</th>
          </tr>
          <tr v-for="item of commissionFee" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.max | toFixed }}</td>
            <td>{{ item.actual | toFixed }}</td>
            <td>{{ item.unit }}</td>
          </tr>
        </table>
      </div>

      <h4>ค่าธรรมเนียมที่เรียกเก็บจากกองทุน</h4>

      <div v-if="info && fundFee.length" class="grid-table">
        <table style="width:100%">
          <tr>
            <th></th>
            <th>สูงสุดไม่เกิน</th>
            <th>เก็บจริง</th>
            <th>หน่วย</th>
          </tr>
          <tr v-for="item of fundFee" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.max | toFixed }}</td>
            <td>{{ item.actual | toFixed }}</td>
            <td>{{ item.unit }}</td>
          </tr>
        </table>
      </div>

      <p>{{ info.commissionFee.annotation }}</p>
    </div>

    <div class="footer-container">
      <a target="_blank" :href="info.factSheetURL">Fund Fact Sheet</a>
      <a target="_blank" :href="`https://www.scbam.com/th/fund/morningstar/fund-information/${info.fundCode}`">ข้อมูลเพิ่มเติม</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Commission",
  props: ['info'],
  computed: {
    commissionFee() {
      return this.feeMap('commissionFee');
    },
    fundFee() {
      return this.feeMap('fundFee');
    }
  },
  methods: {
    feeMap(fee) {
      return this.info[fee].name.map((item, i) => {
        return {
          name: item,
          max: this.info[fee].maximumFees[i],
          actual: this.info[fee].actualFees[i],
          unit: this.info[fee].unit[i]
        }
      });
    }
  },
  filters: {
    toFixed(value) {
      return Number(value).toFixed(2);
    }
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
    margin-bottom: 12px;
    padding: 12px;
    box-shadow: 0px 3px 6px #00000009;
    display: flex;
    flex-direction: column;

    h2 {
      margin: 0;
      font-size: 36px;
      font-family: "kitbold";
      font-style: "medium";
      font-weight: medium;
      color: #000000;
    }

    p {
      margin: 0;
      font-size: 12px;
      margin-top: 16px;
      margin-bottom: 16px;
      color: #a0a0a0;
      font-family: "psl";
    }
  }

  button, a {
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
    font-family: "kitbold";
    font-size: 28px;
    cursor: pointer;
    text-decoration: none;

    &:last-child {
      margin-top: 14px;
    }
  }

  table {
    width: 100%;

    tr {
      text-align: left;
      border-bottom: 1px solid #A0A0A0;

      td {
        font-family: 'kitbold';
        font-size: 16px;
        color: #666666;
        text-align: center;
        padding: 3px;
        &:first-child {
          text-align: left;
        }

        &:last-child {
          text-align: right;
        }
      }
    }
  }

  tr th {
    font-family: 'kitbold';
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
    font-family: "kitbold";
    font-style: "medium";
    font-weight: medium;
    color: #000000;
    opacity: 0.8;
  }
}

.container:last-child {
  margin-bottom: 150px;
}

.footer-container {
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: calc(100% - 24px);
  margin: 0 -24px !important;
  background: #F1F3F8;
  border-radius: 10px;
  margin-bottom: 12px;
  padding: 12px;
}
</style>
