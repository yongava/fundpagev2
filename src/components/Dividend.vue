<template>
    <div class="overview-wrapper">
        <div>
            <h2>Dividend History</h2>
            <div class="grid-table">
                <table style="width:100%">
                    <tr>
                        <th>วันที่ปิดสมุด</th>
                        <th>วันที่จ่ายปันผล</th>
                        <th>บาท/หน่วย</th>
                    </tr>
                    <tr>
                        <td>08 ก.ค. 2019</td>
                        <td>8 ก.ค. 2019</td>
                        <th>0.2600</th>
                    </tr>
                    <tr>
                        <td>08 ก.ค. 2019</td>
                        <td>8 ก.ค. 2019</td>
                        <th>0.2600</th>
                    </tr>
                    <tr>
                        <td>08 ก.ค. 2019</td>
                        <td>8 ก.ค. 2019</td>
                        <th>0.2600</th>
                    </tr>
                    <tr>
                        <td>08 ก.ค. 2019</td>
                        <td>8 ก.ค. 2019</td>
                        <th>0.2600</th>
                    </tr>
                    <tr>
                        <td>08 ก.ค. 2019</td>
                        <td>8 ก.ค. 2019</td>
                        <th>0.2600</th>
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
                font-weight: bolder;
                margin: 0;
                margin-bottom: 36px;
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
