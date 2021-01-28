<template>
  <div id="app">
    <div class="main-wrapper">
      <ul class="navigation">
        <li
          v-for="(item, index) in navigation"
          :key="index"
          @click="setComponent(item.component)"
          :class="[currentComponent === item.component ? 'active' : '']"
        >
          {{ item.name }}
        </li>
      </ul>
      <v-touch @swipeleft="swipe('left')" @swiperight="swipe('right')">
        <div class="content-wrapper">
          <component
            :is="currentComponent"
            :info="info"
            @setComponent="setComponent"
          ></component>
        </div>
      </v-touch>
    </div>
    <modal name="disclaimer" height="100%" width="100%">
      <div class="modal-container">
        <div class="modal-content">
          <h2>คำชี้แจงที่สำคัญ (Disclaimer)</h2>
          <p>
            ผู้ลงทุนที่สนใจจะเข้าเยี่ยมชม หรือสืบค้นข้อมูลกองทุนรวม และ/หรือ
            ข้อมูลต่าง ๆ ภายใต้บริการ SCBAM Line OA Official
            ของบริษัทหลักทรัพย์จัดการกองทุน ไทยพาณิชย์ จำกัด (“บริษัทจัดการ”)
            ผ่านระบบปฏิบัติการ LINE Application
            ตกลงยอมรับเงื่อนไขและข้อกำหนดต่าง ๆ ดังต่อไปนี้
            <br /><br />
            1. กองทุนรวมเป็นนิติบุคคลแยกต่างหากจากบริษัทจัดการ ดังนั้น
            บริษัทจัดการจึงไม่มีภาระผูกพันในการชดเชยผลขาดทุนของกองทุนรวม ทั้งนี้
            ผลการดำเนินงานของกองทุนรวมไม่ได้ขึ้นอยู่กับสถานะทางการเงินหรือผลการดำเนินงานของบริษัทจัดการแต่อย่างใด
            <br /><br />
            2. การลงทุนในหน่วยลงทุนมิใช่การฝากเงินและมีความเสี่ยงของการลงทุน
            ผู้ลงทุนอาจได้รับเงินลงทุนคืนมากกว่าหรือน้อยกว่าเงินลงทุนเริ่มแรกก็ได้
            และในกรณีที่มีเหตุการณ์ไม่ปกติ
            ผู้ลงทุนอาจไม่ได้รับชำระเงินค่าขายคืนหน่วยลงทุนภายในระยะเวลาที่กำหนด
            หรืออาจไม่สามารถขายคืนหน่วยลงทุนได้ตามที่มีคำสั่งไว้
            <br /><br />
            3. การลงทุนย่อมมีความเสี่ยง
            ผู้สนใจลงทุนควรศึกษาข้อมูลในหนังสือชี้ชวน
            และคู่มือภาษีเกี่ยวกับการลงทุนในกองทุนรวมเพื่อการออม
            หรือกองทุนรวมเพื่อการเลี้ยงชีพให้เข้าใจก่อนซื้อหน่วยลงทุน
            และเก็บไว้เป็นข้อมูลเพื่อใช้อ้างอิงในอนาคต
            หากต้องการทราบข้อมูลเพิ่มเติม
            ผู้ลงทุนสามารถติดต่อขอรับหนังสือชี้ชวนส่วนข้อมูลโครงการได้ที่สำนักงานของบริษัทจัดการ
            หรือสำนักงานของผู้สนับสนุนการขายและรับซื้อคืนหน่วยลงทุนทุกแห่งที่ได้รับการแต่งตั้งจากบริษัทจัดการ
            <br /><br />
            4.
            ผลการดำเนินงานในอดีตของกองทุนมิได้เป็นสิ่งยืนยันถึงผลการดำเนินงานในอนาคต
            <br /><br />
            5. การที่สำนักงานคณะกรรมการ ก.ล.ต.
            ได้อนุมัติให้จัดตั้งและจัดการกองทุนรวมตามรายละเอียดในหนังสือ
            ชี้ชวนที่ได้ ปรากฏอยู่ในระบบปฏิบัติการ LINE Application นี้
            มิได้เป็นการแสดงว่าคณะกรรมการ ก.ล.ต. และสำนักงานคณะกรรมการ ก.ล.ต.
            ได้รับรองถึงความถูกต้องของข้อมูลในหนังสือชี้ชวน
            และมิได้ประกันราคาเสนอขายหน่วยลงทุนแต่อย่างใด
            <br /><br />
            6.
            บริษัทจัดการอาจลงทุนในหลักทรัพย์หรือทรัพย์สินอื่นเพื่อบริษัทจัดการเช่นเดียวกันกับที่บริษัทจัดการลงทุนในหลักทรัพย์
            หรือทรัพย์สินอื่นเพื่อกองทุนรวมตามหลักเกณฑ์ที่สำนักงานคณะกรรมการ
            ก.ล.ต.กำหนด ทั้งนี้
            ผู้สนใจจะลงทุนในกองทุนรวมที่ต้องการทราบรายละเอียดข้อมูลการลงทุนเพื่อบริษัทจัดการ
            ผู้ลงทุนสามารถติดต่อขอดูข้อมูลได้ที่สำนักงานของบริษัทจัดการ
            หรือสำนักงานของผู้สนับสนุนการขายและรับซื้อคืนหน่วยลงทุนทุกแห่งที่ได้รับการแต่งตั้งจากบริษัทจัดการ
            และสำนักงานคณะกรรมการ ก.ล.ต.
            <br /><br />
            7.
            บริษัทจัดการอนุญาตให้พนักงานลงทุนในหลักทรัพย์เพื่อตนเองได้โดยจะต้องปฏิบัติตามจรรยาบรรณและประกาศต่าง
            ๆ ที่สมาคมบริษัทจัดการลงทุนกำหนด
            และจะต้องเปิดเผยการลงทุนดังกล่าวให้บริษัทจัดการทราบเพื่อที่บริษัทจัดการจะสามารถกำกับและดูแลการซื้อขายหลักทรัพย์ของพนักงานได้
            <br /><br />
            8. ผู้ลงทุนสามารถตรวจสอบข้อมูลที่อาจจะมีผลต่อการตัดสินใจลงทุน เช่น
            รายงานการทำธุรกรรมกับบุคคล ที่เกี่ยวข้อง (Connected person)
            และรายงานการลงทุนตามอัตราส่วนที่กำหนดในวัตถุประสงค์การลงทุน เป็นต้น
            ได้ที่สำนักงานคณะกรรมการ ก.ล.ต.
            หรือผ่านเครือข่ายทางอินเทอร์เน็ตหรือเว็บไซด์ของสำนักงานคณะกรรมการ
            ก.ล.ต. (http://www.sec.or.th)
            <br /><br />
            9. การวัดผลการดำเนินงานของกองทุนรวมที่ปรากฏในระบบปฏิบัติการ LINE
            Application
            ได้ถูกจัดทำขึ้นตามมาตรฐานการวัดผลการดำเนินงานของสมาคมบริษัทจัดการลงทุน
            <br /><br />
            10. ในการเผยแพร่ข้อมูลและเอกสารต่าง ๆ ที่ปรากฏในระบบปฏิบัติการ LINE
            Application นี้
            บริษัทจัดการได้รวบรวมและจัดทำขึ้นภายใต้เจตนาสุจริตบนพื้นฐานของแหล่งข้อมูลที่น่าเชื่อถือ
            เพื่อประโยชน์และเป็นการอำนวยความสะดวกให้แก่ผู้ลงทุนเท่านั้น
            อย่างไรก็ตาม บริษัทจัดการไม่สามารถรับรองและรับประกันถึงความถูกต้อง
            ความครบถ้วนสมบูรณ์
            และความน่าเชื่อถือของข้อมูลและเอกสารดังกล่าวไม่ว่าในกรณีใด ๆ
            ทั้งสิ้น ทั้งนี้
            หากผู้ลงทุนต้องการใช้ข้อมูลและเอกสารที่ปรากฏในระบบปฏิบัติการ LINE
            Application นี้เพื่อดำเนินการอย่างใดอย่างหนึ่ง
            ถือว่าเป็นการตัดสินใจและยอมรับความเสี่ยงของผู้ลงทุนเอง
            โดยบริษัทจัดการไม่ต้องรับผิดชอบในความเสียหายใด ๆ ที่เกิดขึ้น
            รวมทั้งผู้ลงทุนควรใช้ด้วยความรอบคอบ และ/หรือ
            ใช้ข้อมูลจากแหล่งข้อมูลอื่น ๆ ประกอบการพิจารณาด้วย
            <br /><br />
            11. บริษัทจัดการขอสงวนสิทธิ์ในข้อมูลและเอกสารต่าง ๆ
            ที่ปรากฏในระบบปฏิบัติการ LINE Application นี้
            โดยห้ามมิให้ผู้ใดเผยแพร่ ทำซ้ำ ดัดแปลง ลอกเลียนแบบ เผยแพร่ อ้างอิง
            ไม่ว่าทั้งหมดหรือบางส่วน หรือใช้วิธีการใดก็ตาม
            เว้นแต่จะได้รับอนุญาตจากบริษัทจัดการ
            <br /><br />
            12. บริษัทจัดการ และผู้บริหาร
            รวมถึงพนักงานเจ้าหน้าที่ของบริษัทจัดการขอสงวนสิทธิ์ที่จะไม่รับผิดชอบต่อความเสียหายในทุกกรณีที่เกิดขึ้นกับข้อมูล
            หรือระบบสื่อสารของผู้เข้าเยี่ยมชมหรือผู้ลงทุน
            อันเนื่องมาจากการเข้ามาใช้บริการผ่านระบบปฏิบัติการ LINE Application
            นี้
            <br /><br />
            13.
            ผู้ลงทุนสามารถค้นหาข้อมูลกองทุนได้ตามรูปแบบและวิธีการที่บริษัทจัดการกำหนด
            ทั้งนี้ ระบบปฏิบัติการ LINE Application
            จะแสดงเฉพาะข้อมูลกองทุนของบริษัทจัดการเท่านั้น
            <br /><br />
            14. ผู้ลงทุนสามารถดูข้อมูลต่าง ๆ เช่น ข้อมูลกองทุนแยกตามหมวดหมู่,
            ข้อมูลสัดส่วนของประเภททรัพย์สินที่ลงทุน,
            ข้อมูลชื่อสินทรัพย์และการลงทุนสูงสุด 5 อันดับแรก
            (อันดับสามารถเปลี่ยนแปลงได้), การจัดอันดับกองทุนรวมจาก Morningstar
            Research (Thailand) Ltd. (“มอร์นิ่งสตาร์ฯ”) (โดยจะแสดงเฉพาะอันดับ 4
            และ 5 ดาว เท่านั้น), ค่าธรรมเนียม, กราฟการดำเนินงาน,
            ประวัติการจ่ายเงินปันผล,
            ข้อมูลการแนะนำพอร์ตการลงทุนตามความเสี่ยงของลูกค้า (Wealth Advisory),
            ข่าวสาร และบทความ เป็นต้น ทั้งนี้
            ตามหลักเกณฑ์และเงื่อนไขที่บริษัทจัดการกำหนด
            <br /><br />
            15. ผู้ลงทุนสามารถดูรายละเอียดข้อมูลกองทุน (เช่น ชื่อกองทุน,
            ระดับความเสี่ยงของกองทุน, ประเภทกองทุน มูลค่าทรัพย์สินสุทธิ, ฯลฯ)
            โดยจะแสดงเฉพาะข้อมูลกองทุนของบริษัทจัดการเท่านั้น ทั้งนี้
            ผู้ลงทุนสามารถดูข้อมูลในส่วนของหนังสือชี้ชวนส่วนสรุปข้อมูลสำคัญของกองทุน
            และช่วงระยะเวลาที่เปิดซื้อขายหน่วยลงทุนได้
            <br /><br />
            16. บริษัทจัดการอาจจะทำการแก้ไขหนังสือชี้ชวนส่วนสรุปข้อมูลสำคัญได้
            โดยบริษัทจัดการไม่ได้รับรองความถูกต้องครบถ้วน
            และความสมบูรณ์ของข้อมูลดังกล่าว และไม่ต้องรับผิดชอบในความเสียหายใด ๆ
            ที่เกิดขึ้นจากการใช้ข้อมูลดังกล่าวไม่ว่าโดยทางตรงหรือทางอ้อม
            <br /><br />
            17. เพื่อให้เป็นไปตามเงื่อนไขของมอร์นิ่งสตาร์ฯ
            ในการอนุญาตให้บริษัทจัดการเผยแพร่ข้อมูลใด ๆ
            ที่จัดทำโดยมอร์นิ่งสตาร์ฯ ผู้ลงทุนตกลงยอมรับในข้อจำกัดการใช้ข้อมูล
            (Restrictions) คำชี้แจงสำคัญ (Disclaimers) และข้อจำกัดความรับผิดชอบ
            (Limitation of Liability) ของมอร์นิ่งสตาร์ฯ
            ซึ่งรวมถึงแต่ไม่จำกัดเพียงข้อความดังต่อไปนี้
            <br /><br />
            “© มอร์นิ่งสตาร์ฯ ขอสงวนสิทธิ์ทั้งหมดในข้อมูล การวิเคราะห์
            และข้อเสนอแนะ (“ข้อมูล”) ซึ่งข้อมูลดังกล่าวนั้น (1)
            รวมถึงข้อมูลที่เป็นของมอร์นิ่งสตาร์ฯ
            และผู้ให้บริการข้อมูลของมอร์นิ่งสตาร์ฯ เป็นเจ้าของ (2)
            ไม่สามารถทำซ้ำ หรือ เผยแพร่ เว้นแต่ได้รับอนุญาตเป็นการเฉพาะ (3)
            ไม่ถือเป็นการให้คำแนะนำการลงทุน (4)
            สามารถใช้เพื่อวัตถุประสงค์เป็นการให้ข้อมูลเท่านั้น (5)
            ไม่ได้รับรองความถูกต้อง ครบถ้วน หรือ เหมาะสมแก่เวลา และ (6)
            อาจได้รับมาจากข้อมูลกองทุนที่เผยแพร่มาจากวันเวลาที่หลากหลาย
            โดยมอร์นิ่งสตาร์ฯ ไม่รับผิดชอบในการตัดสินใจในการลงทุน ความเสียหาย
            หรือความสูญเสียอื่นใด ที่เกี่ยวข้องกับข้อมูลหรือการใช้ข้อมูลดังกล่าว
            กรุณาตรวจสอบข้อมูลทั้งหมดก่อนที่จะใช้และอย่าตัดสินใจลงทุน
            เว้นแต่ตามคำแนะนำของผู้เชี่ยวชาญทางการเงิน ทั้งนี้
            ผลการดำเนินงานในอดีตไม่ได้เป็นสิ่งยืนยันถึงผลการดำเนินงานในอนาคต
            มูลค่าและรายได้ที่ได้รับมาจากการลงทุนอาจลดลงหรือเพิ่มขึ้นได้”
            <br /><br />
            18. ในกรณีที่ผู้ลงทุนใช้บริการ SCBAM Line OA Official
            โดยไม่ได้สมัครใช้บริการฯ
            ผู้ลงทุนตกลงให้บริษัทจัดการเก็บรวบรวมและใช้ข้อมูลตามที่ท่านระบุไว้ในระบบปฏิบัติการ
            LINE Application นี้ เพื่อการพัฒนาระบบ การวิเคราะห์ข้อมูล
            โดยผู้ลงทุนไม่จำเป็นต้องระบุข้อมูลส่วนบุคคลของผู้ลงทุนไว้ในระบบปฏิบัติการ
            LINE Application นี้
            และหากผู้ลงทุนได้ระบุข้อมูลส่วนบุคคลในส่วนนี้มาด้วยแล้ว
            ผู้ลงทุนตกลงให้บริษัทจัดการเก็บรวบรวมและใช้ข้อมูลส่วนบุคคลดังกล่าว
            เพื่อการพัฒนาระบบ การวิเคราะห์ข้อมูล ด้วย
            <br /><br />
            19. เพื่อประโยชน์ของผู้ลงทุน
            บริษัทจัดการอาจส่งข้อมูลข่าวสารในเชิงพาณิชย์ เช่น
            ข้อมูลผลิตภัณฑ์และบริการต่าง ๆ ข้อมูลทางการตลาด
            และรายการส่งเสริมการขาย เป็นต้น
            ไปยังบัญชีการเป็นผู้ใช้บริการระบบปฏิบัติการ LINE Application
            ของผู้ลงทุน
            โดยผู้ลงทุนสามารถบอกเลิกหรือปฏิเสธการรับข้อมูลดังกล่าวได้ตามช่องทางที่บริษัทจัดการกำหนด
            <br /><br />
            20. บริษัทจัดการมีสิทธิที่จะแก้ไข ปรับปรุง
            หรือเปลี่ยนแปลงเงื่อนไขและข้อกำหนดนี้ และ/หรือ ข้อมูลใด ๆ
            ที่ปรากฏในระบบปฏิบัติการ LINE Application
            นี้เมื่อใดก็ได้โดยไม่จำเป็นต้องแจ้งให้ทราบล่วงหน้า แต่อย่างใด
            <br /><br />
            ข้าพเจ้าได้อ่านและตกลงยอมรับเงื่อนไขและข้อกำหนดต่าง ๆ
            ที่ปรากฏข้างต้นแล้ว
          </p>
        </div>
      </div>
    </modal>
    <button v-if="disclaimer" class="hide-modal-btn" @click="hideModal">
      ยอมรับ
    </button>
  </div>
</template>

<script>
import Overview from "./components/Overview";
import Performance from "./components/Performance";
import Dividend from "./components/Dividend";
import Assets from "./components/Assets";
import Commission from "./components/Commission";

export default {
  name: "App",
  components: {
    Overview,
    Performance,
    Dividend,
    Assets,
    Commission,
  },
  data() {
    return {
      userID: null,
      fundCode: null,
      disclaimer: false,
      currentComponent: "Overview",
      navigation: [
        {
          name: "ภาพรวม",
          component: "Overview",
        },
        {
          name: "ผลตอบแทน",
          component: "Performance",
        },
        {
          name: "สินทรัพย์",
          component: "Assets",
        },
        {
          name: "ค่าธรรมเนียม",
          component: "Commission",
        },
      ],
      info: null,
      access: null,
    };
  },
  methods: {
    statTrack() {
      const urlParams = new URLSearchParams(window.location.search);
      const fundCode = urlParams.get("FundCode");
      const userID = urlParams.get("UserID");

      this.$mixpanel.track("Change Page", {
        fundCode: fundCode,
        userID: userID,
      });
      console.log("Change Page");
    },
    async hideModal() {
      this.$modal.hide("disclaimer");
      this.disclaimer = false;
      const { data } = await this.axios.post(
        `/user/disclaimer?token=${this.userID}`
      );
      this.access = data;
    },
    async getData(fundCode, userID) {
      this.userID = userID;
      this.fundCode = fundCode;
      if (fundCode) {
        const { data } = await this.axios.get(
          `/fund_info/${fundCode}?token=${userID}`
        );
        this.info = data.data;
        if (this.info.isShowDisclaimer) {
          this.$modal.show("disclaimer");
          this.disclaimer = true;
        } else {
          this.disclaimer = false;
        }

        if (this.info.typeName == "มีปันผล") {
          this.navigation.splice(2, 0, {
            name: "ปันผล",
            component: "Dividend",
          });
        }
      }
    },
    swipe(direction) {
      let index = this.navigation.findIndex(
        (item) => item.component === this.currentComponent
      );
      index = direction === "right" ? index - 1 : index + 1;
      this.setComponent(
        this.navigation[index]
          ? this.navigation[index].component
          : this.currentComponent
      );
    },
    setComponent(component) {
      this.currentComponent = component;
    },
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const fundCode = urlParams.get("FundCode");
    const userID = urlParams.get("UserID");
    const searchMsg = urlParams.get("Msg");
    const codeLists = urlParams.get("FundCodeList");

    this.getData(fundCode, userID);

    // this.$mixpanel.track("Log_in", {
    //   fundCode: fundCode,
    //   userID: userID,
    //   msg: searchMsg,
    //   selectedFundCode: fundCode,
    //   fundCodes: codeLists,
    // });

    var qs = require("qs");
    var data = qs.stringify({
      userId: userID,
      msg: searchMsg,
      fundCodes: codeLists,
      selectedFundCode: fundCode,
    });
    var config = {
      method: "post",
      url: "https://scbam-lineoa-line.ava.fund/stats",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    this.axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    // this.$modal.show("disclaimer");
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "kit35f";
  src: local("kit35f"), url(./assets/fonts/kit35f.ttf) format("truetype");
}

@font-face {
  font-family: "KIT45P";
  src: local("KIT45P"), url(./assets/fonts/KIT55P.TTF) format("truetype");
}

@font-face {
  font-family: "KIT55P";
  src: local("KIT55P"), url(./assets/fonts/KIT55P.TTF) format("truetype");
}

@font-face {
  font-family: "KIT65P";
  src: local("KIT65P"), url(./assets/fonts/KIT65P.TTF) format("truetype");
}

@font-face {
  font-family: "KIT75F";
  src: local("KIT75F"), url(./assets/fonts/KIT75F.TTF) format("truetype");
}

@font-face {
  font-family: "kitbold";
  src: local("kitbold"), url(./assets/fonts/kitbold.ttf) format("truetype");
}

@font-face {
  font-family: "PSLxText";
  src: local("psl"), url(./assets/fonts/PSLxText.ttf) format("truetype");
}

body,
html {
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
  background: #f1f3f8;
}

.main-wrapper {
  height: 100vh;

  ul.navigation {
    display: flex;
    align-items: center;
    height: fit-content;
    justify-content: flex-start;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 0px;
    padding-right: 0px;
    padding-left: 18px;
    overflow-y: scroll;
    height: 50px;

    li {
      margin-right: 10px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border-radius: 18px;
      padding: 0 5px;
      min-width: fit-content;
      font-weight: bolder;
      font-size: 16px;
      color: #a0a0a0;
      font-weight: bold;
      transform: 0.3s all ease;
      font-family: "KIT65P";
      font-weight: normal;
      cursor: pointer;

      &.active {
        background: #f8b103;
        color: #fff;
      }
    }
  }

  .content-wrapper {
    margin: 0 20px 70px;
    height: fit-content;
    min-height: calc(100vh - 82px);
  }
}

::-webkit-scrollbar {
  display: none;
}
.modal-container {
  margin-top: 22px;
  width: 92%;
  height: 87%;
  margin-left: auto;
  margin-right: auto;
  background: white;
}
.modal-content {
  height: 96%;
  overflow: scroll;
  padding: 16px 16px 0px 16px;

  h2 {
    margin: 0;
    font-size: 28px;
    font-family: "KIT65P";
    font-weight: normal;
    color: #000000;
  }
  p {
    font-size: 12px;
    color: #707070;
    font-family: "psl";
    font-weight: normal;
    align-content: stretch;
    margin-bottom: 25px;
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
    background: #72559a;
    border-radius: 10px;
    width: 100%;
    outline: none;
    border: none;
    font-size: 28px;
    font-family: "KIT65P";
    font-weight: normal;
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
  background: #72559a;
  border-radius: 10px;
  width: calc(100% - 33px);
  // margin: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 18px;
  // margin-right: 15px;
  outline: none;
  border: none;
  font-size: 28px;
  font-family: "kitbold";
  font-style: "bold";
  font-weight: bold;
}

.vm--modal {
  // left: 12px !important;
  // width: calc(100% - 24px) !important;
  // height: calc(100% - 110px) !important;
  box-shadow: none !important;
  background: #f1f3f8 !important;
}

.vm--overlay {
  background: #f1f3f8 !important;
}
</style>