<template>
  <div class="overview-wrapper">
    <div class="container">
      <h2>ค่าธรรมเนียม</h2>
    </div>
    <div class="container">
      <p>
        หมายเหตุ : Overall Rating 5 ดาว จาก MorningStar ประเภท Thailand Fund
        Equity Large-Cap , ณ 31 ส.ค. 2563 @สงวนลิขสิทธิ์ 2018 บริษัท
        มอร์นิ่งสตาร์ รีเสิรซ์ ประเทศไทย ข้อมูลนี้ (1)
        เป็นกรรมสิทธิ์ของบริษัทมอร์นิ่งสตาร์ และ/หรือ ผู้ให้บริการข้อมูล (2)
        ขอสงวนสิทธิ์ในการลอกเลียน หรือ เผยแพร่ (3)
        ขอสงวนสิทธิ์ที่จะไม่รับผิดชอบต่อความถูกต้อง ครบถ้วน และความเสียหายต่างๆ
        ที่เกิดขึ้นทุกกรณีจากการนำข้อมูลไปใช้อ้างอิง
        ผลการดำเนินงานในอดีตมิได้เป็นสิ่งยืนยันถึงผลการดำเนินงานในอนาคต
      </p>
    </div>

    <div class="footer-container">
      <button>Fund Fact Sheet</button>
      <button>ข้อมูลเพิ่มเติม</button>
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
    align-items: flex-start;

    h2 {
      font-size: 36px;
      font-weight: bolder;
      margin: 0;
      margin-bottom: 36px;
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

  button {
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
    font-size: 18px;

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
