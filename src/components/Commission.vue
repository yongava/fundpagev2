<template>
  <div v-if="info" class="overview-wrapper">
    <div class="container">
      <h2>ค่าธรรมเนียม</h2>
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
  props: ['info']
};
</script>

<style scoped lang="scss">
.overview-wrapper {
  width: 100%;
  height: 100%;

  > .container {
    background: #fff;
    border-radius: 10px;
    margin-bottom: 12px;
    padding: 12px;
    box-shadow: 0px 3px 6px #00000009;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 36px;
      font-weight: bolder;
      margin: 0 0 18px;
      font-family: 'kitbold';
      color: #333333;
    }

    p {
      margin: 0;
      font-size: 16px;
      margin-bottom: 16px;
      color: #a0a0a0;
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
      border-bottom: 1px solid #a0a0a0;

      td {
        font-size: 22px;
      }

      td:last-child {
        font-family: "kitbold";
      }
    }
  }

  tr th {
    font-family: "kitbold";
    text-align: left;
    font-size: 24px;
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
