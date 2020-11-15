<template>
  <div class="overview-wrapper">
    <div>
      <h2>ข้อมูลการปันผล</h2>
      <div v-if="info && info.dividendInfo.dividends.length" class="grid-table">
        <table style="width:100%">
          <tr>
            <th>วันที่ปิดสมุด</th>
            <th>วันที่จ่ายปันผล</th>
            <th>บาท/หน่วย</th>
          </tr>
          <br>
          <tr v-for="item of info.dividendInfo.dividends" :key="item.dividendRate">
            <td>{{ item.closeBookDate | toDate }}</td>
            <td>{{ item.paymentDate | toDate }}</td>
            <td>{{ item.dividendRate | toFixed }}</td>
          </tr>
        </table>
      </div>
      <div class="empty" v-else-if="info && !info.dividendInfo.dividends.length">ไม่มีประวัติการจ่ายปันผล</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dividend",
  props: ['info'],
  filters: {
    toDate(value) {
      return (new Date(value)).toLocaleDateString().replaceAll('/', '-');
    },
    toFixed(value) {
      return Number(value).toFixed(4);
    }
  }
}
</script>

<style scoped lang="scss">
.overview-wrapper {
  width: 100%;
  height: 100%;

  > div {
    background: #fff;
    border-radius: 5px;
    
    margin-bottom: 12px;
    padding: 12px;
    box-shadow: 0px 3px 6px #00000009;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h2 {
      margin-top: 11px;
      margin-bottom: 30px;
      line-height: 20px;
      font-family: "KIT65P";
      font-size: 28px;
      color: #000000;
    }

    .grid-table {
      width: 100%;
    }
  }

  table {
    width: 100%;

    tr {
      text-align: left;
      border-bottom: 1px solid #A0A0A0;

      td {

        font-family: "kitbold";
        font-style: "medium";
        font-weight: medium;
        font-size: 16px;
        color: #666666;
        padding: 3px;
        &:nth-of-type(2) {
          padding-left: 7%;
        }
        &:last-child {
          text-align: right;
        }
      }
    }
  }

  tr th {
    font-family: "kitbold";
    font-style: "medium";
    font-weight: medium;
    text-align: left;
    font-size: 20px;
    color: #666666;
    &:nth-of-type(2) {
      padding-left: 7%;
    }
    &:last-child {
    text-align: right;
    }
  }

}

.empty {
  width: 100%;
  text-align: center;
  padding: 36px 0 62px;
  font-family: "kitbold";
  font-style: "medium";
  font-weight: medium;
  color: #666666;
  font-size: 20px;
  line-height: 55px;
}
</style>
