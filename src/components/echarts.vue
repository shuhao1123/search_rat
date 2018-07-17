<template>
    <div>
        <div id="echa" style="width:90%;height:500px;margin:20px auto"></div>
        <p>{{totelNumber}}</p>
    </div>
</template>
<script>
// let echarts = require("echarts/lib/echarts");
// // 引入柱状图组件
// require("echarts/lib/chart/bar");
// // 引入提示框和title组件
// require("echarts/lib/component/tooltip");
// require("echarts/lib/component/title");

export default {
    data() {
        return {
            totelNumber: [],
            gp: [
                ["2018/1/24", 2320.26, 2320.26, 2287.3, 2362.94],
                ["2018/1/25", 2300, 2291.3, 2288.26, 2308.38]
            ]
        };
    },
    computed: {},
    mounted() {
        //设置定时器，每3秒刷新一次
        // var len = this.totelNumber.length;
        var self = this;
        setInterval(getTotelNumber, 1000);
        function getTotelNumber() {
            var newArray = [];
            for (var i = 0; i < 30; i++) {
                newArray[i] = new Array();
                for (var j = 1; j < 5; j++) {
                    newArray[i][j] = Math.ceil(Math.random() * 5000) - 1;
                }
                newArray[i][0] = "2018/1/" + Number(i + 1);
            }
            self.totelNumber = newArray;
        }
        getTotelNumber();
        // this.drawline()
        setInterval(this.drawline, 1000);
    },
    methods: {
        drawline() {
            var myChart = echarts.init(document.getElementById("echa"));
            // 指定图表的配置项和数据
            var upColor = "#ec0000";
            var upBorderColor = "#8A0000";
            var downColor = "#00da3c";
            var downBorderColor = "#008F28";
            // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
            var data0 = splitData(this.totelNumber);
            function splitData(rawData) {
                var categoryData = [];
                var values = [];
                for (var i = 0; i < rawData.length; i++) {
                    categoryData.push(rawData[i].splice(0, 1)[0]);
                    values.push(rawData[i]);
                }
                return {
                    categoryData: categoryData,
                    values: values
                };
            }
            function calculateMA(dayCount) {
                var result = [];
                for (var i = 0, len = data0.values.length; i < len; i++) {
                    if (i < dayCount) {
                        result.push("-");
                        continue;
                    }
                    var sum = 0;
                    for (var j = 0; j < dayCount; j++) {
                        sum += data0.values[i - j][1];
                    }
                    result.push(sum / dayCount);
                }
                return result;
            }
            var option = {
                title: {
                    text: "上证指数",
                    left: 0
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "cross"
                    }
                },
                legend: {
                    data: ["日K", "MA5", "MA10", "MA20", "MA30"]
                },
                grid: {
                    left: "10%",
                    right: "10%",
                    bottom: "15%"
                },
                xAxis: {
                    type: "category",
                    data: data0.categoryData,
                    scale: true,
                    boundaryGap: false,
                    axisLine: { onZero: false },
                    splitLine: { show: false },
                    splitNumber: 20,
                    min: "dataMin",
                    max: "dataMax"
                },
                yAxis: {
                    scale: true,
                    splitArea: {
                        show: true
                    }
                },
                dataZoom: [
                    {
                        type: "inside",
                        start: 50,
                        end: 100
                    },
                    {
                        show: true,
                        type: "slider",
                        y: "90%",
                        start: 50,
                        end: 100
                    }
                ],
                series: [
                    {
                        name: "日K",
                        type: "candlestick",
                        data: data0.values,
                        itemStyle: {
                            normal: {
                                color: upColor,
                                color0: downColor,
                                borderColor: upBorderColor,
                                borderColor0: downBorderColor
                            }
                        },
                        markPoint: {
                            label: {
                                normal: {
                                    formatter: function(param) {
                                        return param != null
                                            ? Math.round(param.value)
                                            : "";
                                    }
                                }
                            },
                            data: [
                                {
                                    name: "XX标点",
                                    coord: ["2018/5/31", 2300],
                                    value: 2300,
                                    itemStyle: {
                                        normal: { color: "rgb(41,60,85)" }
                                    }
                                },
                                {
                                    name: "highest value",
                                    type: "max",
                                    valueDim: "highest"
                                },
                                {
                                    name: "lowest value",
                                    type: "min",
                                    valueDim: "lowest"
                                },
                                {
                                    name: "average value on close",
                                    type: "average",
                                    valueDim: "close"
                                }
                            ],
                            tooltip: {
                                formatter: function(param) {
                                    return (
                                        param.name +
                                        "<br>" +
                                        (param.data.coord || "")
                                    );
                                }
                            }
                        },
                        markLine: {
                            symbol: ["none", "none"],
                            data: [
                                [
                                    {
                                        name: "from lowest to highest",
                                        type: "min",
                                        valueDim: "lowest",
                                        symbol: "circle",
                                        symbolSize: 10,
                                        label: {
                                            normal: { show: false },
                                            emphasis: { show: false }
                                        }
                                    },
                                    {
                                        type: "max",
                                        valueDim: "highest",
                                        symbol: "circle",
                                        symbolSize: 10,
                                        label: {
                                            normal: { show: false },
                                            emphasis: { show: false }
                                        }
                                    }
                                ],
                                {
                                    name: "min line on close",
                                    type: "min",
                                    valueDim: "close"
                                },
                                {
                                    name: "max line on close",
                                    type: "max",
                                    valueDim: "close"
                                }
                            ]
                        }
                    },
                    {
                        name: "MA5",
                        type: "line",
                        data: calculateMA(5),
                        smooth: true,
                        lineStyle: {
                            normal: { opacity: 0.5 }
                        }
                    },
                    {
                        name: "MA10",
                        type: "line",
                        data: calculateMA(10),
                        smooth: true,
                        lineStyle: {
                            normal: { opacity: 0.5 }
                        }
                    },
                    {
                        name: "MA20",
                        type: "line",
                        data: calculateMA(20),
                        smooth: true,
                        lineStyle: {
                            normal: { opacity: 0.5 }
                        }
                    },
                    {
                        name: "MA30",
                        type: "line",
                        data: calculateMA(30),
                        smooth: true,
                        lineStyle: {
                            normal: { opacity: 0.5 }
                        }
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
