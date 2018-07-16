<template>
    <div id="echa" style="width:90%;height:500px;margin:20px auto">555</div>
</template>
<script>
// let echarts = require("echarts/lib/echarts");
// // 引入柱状图组件
// require("echarts/lib/chart/bar");
// // 引入提示框和title组件
// require("echarts/lib/component/tooltip");
// require("echarts/lib/component/title");

export default {
    mounted() {
        this.drawline();
    },
    methods: {
        drawline() {
            var myChart = echarts.init(document.getElementById("echa"));
            // 指定图表的配置项和数据
            var option = {
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        // show : true,
        // feature : {
        //     mark : {show: true},
        //     dataView : {show: true, readOnly: false},
        //     magicType: {show: true, type: ['line', 'bar']},
        //     restore : {show: true},
        //     saveAsImage : {show: true}
        // }
    },
    calculable : true,
    legend: {
        data:['蒸发量','降水量','平均温度']
    },
    xAxis : [
        {
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value',
            name : '水量',
            axisLabel : {
                formatter: '{value} ml'
            }
        },
        {
            type : 'value',
            name : '温度',
            axisLabel : {
                formatter: '{value} °C'
            }
        }
    ],
    series : [

        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'降水量',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
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
