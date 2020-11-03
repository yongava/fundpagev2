<template>
  <div class="overview-wrapper">
    <div>
      <h2>ข้อมูลการปันผล</h2>
      <div v-if="info && info.dividendInfo.dividends" class="grid-table">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Dividend",
  props: ['info'],
  filters: {
    toDate(value) {
      return (new Date(value)).toLocaleDateString();
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
    border-radius: 10px;
    margin-bottom: 12px;
    padding: 12px;
    box-shadow: 0px 3px 6px #00000009;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h2 {
      font-size: 36px;
      font-weight: medium;
      margin-bottom: 30px;
      line-height: 20px;
      font-family: "kitbold";
      font-style: "medium";
      color: #525252;
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
        font-size: 18px;
        color: #666666;
      }
    }
  }

  tr th {
    font-family: 'kitbold';
    text-align: left;
    font-size: 20px;
    color: #666666;
  }
}
</style>
