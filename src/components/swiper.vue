<template>
    <div class="swiper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="./../assets/40a6232c9b4e3ddd72afe18ea11f9a12.jpg"></div>
                <div class="swiper-slide"><img src="./../assets/lMQYnywEXD.jpg"></div>
                <div class="swiper-slide"><img src="./../assets/9dd6736bb90966289613b9ec85a47853.jpg"></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    mounted() {
        var mySwiper = new Swiper(".swiper-container", {
            autoplay: 3000, //可选选项，自动滑动
            autoplayDisableOnInteraction : false,
            // initialSlide: 2, //设定初始化时slide的索引。
            grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
            loop: true,
            pagination: ".swiper-pagination",
            paginationClickable :true,
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


