<template>
    <div id="echa" style="width:90%;height:500px;margin:20px auto">555</div>
</template>
<script>
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
    mounted() {
        this.drawline();
    },
    methods: {
        drawline() {
            var myChart = echarts.init(document.getElementById("echa"));
            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: "搜"
          
                },
                tooltip: {},
                legend: {
                    data: ["销量"]
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [
                    {
                        name: "销量",
                        type: "bar",
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            };
            myChart.setOption(option);
            window.onresize = function() {
                myChart.resize();
            };
        }
    }
};
</script>
<style>
</style>
