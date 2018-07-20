<template>
    <div class="swiper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in src1" :key="index"><img :src="item"></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            src1: [
                require("./../assets/496efd5414ce543a6bf12d4cf83532c6.jpg"),
                require("./../assets/40a6232c9b4e3ddd72afe18ea11f9a12.jpg"),
                require("./../assets/9dd6736bb90966289613b9ec85a47853.jpg")
            ]
        };
    },
    beforeMount() {},
    created() {
        if ($("#app").width() < 750) {
            this.src1 = [
                require("./../assets/swiper3.jpg"),
                require("./../assets/swiper2.jpg"),
                require("./../assets/swiper1.jpg")
            ];
        }
    },
    mounted() {
        var mySwiper = new Swiper(".swiper-container", {
            autoplay: 3000, //可选选项，自动滑动
            autoplayDisableOnInteraction: false,
            // initialSlide: 2, //设定初始化时slide的索引。
            grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
            loop: true,
            pagination: ".swiper-pagination",
            paginationClickable: true,
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true //修改swiper的父元素时，自动初始化swiper
        });
    }
};
</script>
<style scoped>
.swiper,
.swiper-slide {
}
.swiper img {
    width: 100%;
}
</style>


