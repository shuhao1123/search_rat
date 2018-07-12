<template>
    <div style="width:90%;margin:20px auto">
        <div class="container-fluid">
            <div class="row table table-bordered">
                <div class="col-md-2 col-sm-4" v-for="(item,index) in data" :key="index">{{item}}</div>
                <!-- <div class="col-md-2 col-sm-4">.col-md-2</div>
                <div class="col-md-2 col-sm-4">.col-md-3</div>
                <div class="col-md-2 col-sm-4">.col-md-4</div>
                <div class="col-md-2 col-sm-4">.col-md-5</div>
                <div class="col-md-2 col-sm-4">.col-md-6</div>
                <div class="col-md-2 col-sm-4">.col-md-7</div>
                <div class="col-md-2 col-sm-4">.col-md-8</div>
                <div class="col-md-2 col-sm-4">.col-md-9</div>
                <div class="col-md-2 col-sm-4">.col-md-10</div>
                <div class="col-md-2 col-sm-4">.col-md-11</div>
                <div class="col-md-2 col-sm-4">.col-md-12</div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [
                "店铺预警",
                "流量把控",
                "选品定价",
                "客群定位",
                "搜索绩效",
                "搜索鼠",
                "店铺预警",
                "流量把控",
                "选品定价",
                "客群定位",
                "搜索绩效",
                "搜索鼠",
                "店铺预警",
                "流量把控",
                "选品定价",
                "客群定位",
                "搜索绩效",
                "搜索鼠"
            ]
        };
    }
};
</script>
<style scoped>
.row{
    padding: 10px
}
.row div{
    line-height: 30px;
}
</style>
