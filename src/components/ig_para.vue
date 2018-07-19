<template>
    <div>{{this.$route.query.id}}</div>
</template>
<script>
export default {
    data() {
        return {
            para: ""
        };
    },
    created() {
        // this.para=

    },
    mounted(){
        // sessionStorage.setItem("para",this.para)
    }
};
</script>
<style>
</style>


