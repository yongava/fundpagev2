<template>
  <div id="app">
    <div class="main-wrapper">
      <ul class="navigation">
        <li v-for="(item, index) in navigation" :key="index" @click="currentComponent = item.component" :class="[ currentComponent === item.component ? 'active' : '' ]">{{ item.name }}</li>
      </ul>
      <div class="content-wrapper">
        <component :is="currentComponent" :info="info"></component>
      </div>
    </div>
    <modal name="disclaimer" height="90%" width="90%">
      <div class="modal-content">
        <h2>คำชี้แจงที่สำคัญ (Disclaimer)</h2>
        <p>ผู้ลงทุนที่สนใจจะเข้าเยี่ยมชม หรือสืบค้นข้อมูลกองทุนรวม และ/หรือ ข้อมูลต่าง ๆ ภายใต้บริการ SCBAM Line OA Official ของบริษัทหลักทรัพย์จัดการกองทุน ไทยพาณิชย์ จำกัด (“บริษัทจัดการ”) ผ่านระบบปฏิบัติการ LINE Application ตกลงยอมรับเงื่อนไขและข้อกำหนดต่าง ๆ ดังต่อไปนี้
          <br><br>
          1. กองทุนรวมเป็นนิติบุคคลแยกต่างหากจากบริษัทจัดการ ดังนั้น บริษัทจัดการจึงไม่มีภาระผูกพันในการชดเชยผลขาดทุนของกองทุนรวม ทั้งนี้ ผลการดำเนินงานของกองทุนรวมไม่ได้ขึ้นอยู่กับสถานะทางการเงินหรือผลการดำเนินงานของบริษัทจัดการแต่อย่างใด
          <br><br>
          2. การลงทุนในหน่วยลงทุนมิใช่การฝากเงินและมีความเสี่ยงของการลงทุน ผู้ลงทุนอาจได้รับเงินลงทุนคืนมากกว่าหรือน้อยกว่าเงินลงทุนเริ่มแรกก็ได้ และในกรณีที่มีเหตุการณ์ไม่ปกติ ผู้ลงทุนอาจไม่ได้รับชำระเงินค่าขายคืนหน่วยลงทุนภายในระยะเวลาที่กำหนด หรืออาจไม่สามารถขายคืนหน่วยลงทุนได้ตามที่มีคำสั่งไว้
          <br><br>
          ข้าพเจ้าได้อ่านและตกลงยอมรับเงื่อนไขและข้อกำหนดต่าง ๆ ที่ปรากฏข้างต้นแล้ว
        </p>
      </div>
    </modal>
    <button v-if="disclaimer" class="hide-modal-btn" @click="hideModal">ยอมรับ</button>
  </div>
</template>

<script>
import Overview from "./components/Overview";
import Performance from "./components/Performance";
import Dividend from "./components/Dividend";
import Assets from "./components/Assets";
import Commission from "./components/Commission";

export default {
  name: 'App',
  components: {
    Overview,
    Performance,
    Dividend,
    Assets,
    Commission
  },
  data() {
    return {
      disclaimer: true,
      currentComponent: 'Overview',
      navigation: [
        {
          name: 'ภาพรวม',
          component: 'Overview'
        },
        {
          name: 'ผลตอบแทน',
          component: 'Performance'
        },
        {
          name: 'ปันผล',
          component: 'Dividend'
        },
        {
          name: 'สินทรัพย์',
          component: 'Assets'
        },
        {
          name: 'ค่าธรรมเนียม',
          component: 'Commission'
        },
      ],
      info: null,
      access: null
    }
  },
  methods: {
    hideModal() {
      this.$modal.hide('disclaimer');
      this.disclaimer = false;
    },
    async getData(fundCode, userID) {
      if (fundCode) {
        const { data } = await this.axios.get(`/fund_info/${fundCode}`);
        this.info = data.data;
      }
      if (userID) {
        const { data } = await this.this.axios.post(`/user/disclaimer?token=${userID}`);
        this.access = data;
      }
    }
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const fundCode = urlParams.get('FundCode');
    const userID = urlParams.get('UserID');

    this.getData(fundCode, userID);

    this.$modal.show('disclaimer');
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: "kit";
    src: local("kit"),
    url(./assets/fonts/kit35f.ttf) format("truetype");
  }

  @font-face {
    font-family: "kitbold";
    src: local("kit"),
    url(./assets/fonts/kitbold.ttf) format("truetype");
  }

  body, html {
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
  #app {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    font-family: "kit";
    font-weight: bold;
    background: #F1F3F8;
  }
  .main-wrapper {
    height: 100vh;
    ul.navigation {
      display: flex;
      align-items: center;
      height: fit-content;
      justify-content: flex-start;
      margin: 0;
      padding: 16px 24px;
      overflow-y: scroll;
      height: 50px;
      li {
        margin-right: 12px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        border-radius: 18px;
        padding: 0 24px;
        min-width: fit-content;
        font-weight: bolder;
        font-size: 20px;
        color: #A0A0A0;
        font-weight: bold;
        transform: 0.3s all ease;
        font-family: "kitbold";
        cursor: pointer;
        &.active {
          background: #F8B103;
          color: #fff;
        }
      }
    }
    .content-wrapper {
      margin: 0 24px;
      height: fit-content;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .modal-content {
    height: 100%;
    overflow: scroll;
    padding: 16px;
    h2 {
      font-size: 32px;
      margin: 0;
    }
    p {
      font-size: 22px;
      color: #707070;
    }

    button {
      // position: fixed;
      height: 50px;
      margin-top: 24px;
      margin-left: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: #502A81;
      border-radius: 10px;
      width: 100%;
      outline: none;
      border: none;
      font-size: 18px;
    }
  }

  .hide-modal-btn {
    z-index: 999;
    position: absolute;
    bottom: 0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #502A81;
    border-radius: 10px;
    width: calc(100% - 24px);
    margin: 12px;
    outline: none;
    border: none;
    font-size: 18px;
  }

  .vm--modal {
    left: 12px !important;
    width: calc(100% - 24px) !important;
    height: calc(100% - 110px) !important;
    box-shadow: none !important;
  }

  .vm--overlay {
    background: #F1F3F8 !important;
  }
</style>
