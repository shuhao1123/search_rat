<template>
    <div>
        <div><img src="./../assets/ejd9qJo8XP.jpg" style="width:100%"></div>

        <div style="width:95%;margin:20px auto">
            <div class="container-fluid">
                <div class="row table table-bordered">
                    <div class="col-md-3 col-sm-4" v-for="(item,index) in data" :key="index">
                        <img :src=item[1] style="width:100%">
                        <p style="height:50px;line-height:25px;">{{item[0]}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [
                [
                    "Java并发编程与高并发解决方案",
                    "https://img1.mukewang.com/szimg/5aaa55850001a3ef10800600.jpg"
                ],
                [
                    "玩转算法面试 从真题到思维全面提升算法思维",
                    "https://img2.mukewang.com/szimg/5a1f65a900015d1505400300.jpg"
                ],
                [
                    "Spring Cloud微服务实战",
                    "https://img3.mukewang.com/5b20d7dd000124da06000338-240-135.jpg"
                ],
                [
                    "Java生产环境下性能监控与调优详解",
                    "https://img2.mukewang.com/szimg/5b384772000132c405400300.jpg"
                ]
            ]
        };
    }
};
</script>
<style scoped>
.row {
    padding: 10px;
}
.row div {
    line-height: 30px;
}
</style>
