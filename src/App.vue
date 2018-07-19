<template>
  <div id="app">
    <header-nav></header-nav>
    <!-- <router-view/> -->
    <div style="width:100%;height:80px;clear:both"></div>
  </div>
</template>

<script>
import Header_Item from "./components/Header_Item";
export default {
    components: {
        "header-nav": Header_Item,
    }
};

</script>

<style>
</style>
