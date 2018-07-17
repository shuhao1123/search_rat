<template>
    <div id="index_global">
        <div class="ig_img"><img src="https://img.alicdn.com/tfs/TB1EGNRRVXXXXazXVXXXXXXXXXX-271-123.png"></div>
        <h3>{{caption}}</h3>
        <h4>{{about}}</h4>
    </div>
</template>
<script>
export default {
    data(){
        return{
            caption:"全球领先、安全、稳定的云计算产品",
            about:'计算、存储、网络、安全、大数据、人工智能、惠普科技助您飞跃发展'
        }
    }
};
</script>
<style scoped>
.ig_img{
    margin: 30px auto 10px;
}
.ig_img img{
    width: 130px;
}
#index_global{
    text-align: center
}
</style>


