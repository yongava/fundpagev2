<template>
    <div class="overview-wrapper">
        <div>
            <h2>ค่าธรรมเนียม</h2>
        </div>
        <div class="grid-table">
                <table style="width:100%">
                    <tr>
                        <th>วันที่ปิดสมุด</th>
                        <th>วันที่จ่ายปันผล</th>
                        <th>บาท/หน่วย</th>
                    </tr>
                    <tr>
                        <th>ค่าธรรมเนียมการขาย</th>
                        <th>0.54</th>
                        <th>0.00</th>
                        <td> ของมูลค่าซื้อขาย</td>
                    </tr>

                </table>
            </div>
        
        <button>Fund Fact Sheet</button>
    </div>
</template>

<script>
    export default {
        name: "Commission",
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
            h2 {
                font-size: 36px;
                font-weight: bolder;
                margin: 0;
                margin-bottom: 36px;
            }
        }
        button {
            height: 50px;
            margin-top: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            background: #72559A;
            border-radius: 10px;
            width: 100%;
            outline: none;
            border: none;
            font-size: 18px;
        }
        table {
            width: 100%;
            tr {
                text-align: left;
                border-bottom: 1px solid #A0A0A0;
                td {
                    font-size: 22px;
                }
                td:last-child {
                    font-family: 'kitbold';
                }
            }
        }
        tr th {
            font-family: 'kitbold';
            text-align: left;
            font-size: 24px;
        }
    }
</style>
