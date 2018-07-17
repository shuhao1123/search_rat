<template>
  <div id="app">
    <header-nav></header-nav>
    <index_global></index_global>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Header_Item from "./components/Header_Item";
import Index_Global from "./components/index_global"
export default {
    components: {
        "header-nav": Header_Item,
        "index_global":Index_Global
    }
};

</script>

<style>
</style>
