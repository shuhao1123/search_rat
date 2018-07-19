<template>
    <div>{{para}}</div>
</template>
<script>
export default {
    data() {
        return {
            para: ""
        };
    },
    created() {
        this.para=this.$route.query.id
        sessionStorage.setItem(para,this.para)
    },
    mounted(){

    }
};
</script>
<style>
</style>


