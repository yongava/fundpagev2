<template>
    <div class="overview-wrapper">
        <div>
            <h2>ข้อมูลการปันผล</h2>
            <div class="grid-table">
                <table style="width:100%">
                    <tr>
                        <th>วันที่ปิดสมุด</th>
                        <th>วันที่จ่ายปันผล</th>
                        <th>บาท/หน่วย</th>
                    </tr>
                    <br>
                    <tr>
                        <td>08 ก.ค. 2019</td>
                        <td>18 ก.ค. 2019</td>
                        <td>0.2600</td>
                    </tr>
                    <tr>
                        <td>09 ม.ค. 2019</td>
                        <td>19 ม.ค. 2018</td>
                        <td>0.1000</td>
                    </tr>
                    <tr>
                        <td>10 ม.ค. 2018</td>
                        <td>19 ม.ค. 2018</td>
                        <td>0.6000</td>
                    </tr>
                    <tr>
                        <td>12 ก.ค. 2017</td>
                        <td>24 ก.ค. 2017</td>
                        <td>0.1200</td>
                    </tr>
                    <tr>
                        <td>11 ม.ค. 2017</td>
                        <td>20 ม.ค. 2017</td>
                        <td>0.2000</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dividend",
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
                td:last-child {
                    font-family: 'kitbold';
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
