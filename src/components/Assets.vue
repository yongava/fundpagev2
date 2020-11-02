<template>
    <div class="overview-wrapper">
        <div>
            <h2>Hold Assets</h2>
            <div>
                <Chart></Chart>
            </div>
        </div>
    </div>
</template>

<script>
    import Chart from "./Chart";
    export default {
        name: "Assets",
        components: {Chart},
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
        }
    }
</style>
