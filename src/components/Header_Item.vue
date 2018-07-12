<template>
  <div>
    <div style="width:100%;background:#222">
      <nav class="navbar navbar-inverse nav_top" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-collapse">
              <span class="sr-only">切换导航</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">搜索鼠</a>
          </div>
          <div class="collapse navbar-collapse" id="example-navbar-collapse">
            <ul class="nav navbar-nav">
              <li @click="add_class('1')" :class="{active:1==a_index}">
                <router-link to="/store_warn">店铺预警</router-link>
              </li>
              <li @click="add_class('2')" :class="{active:2==a_index}">
                <router-link to="/traffic_control">流量把控</router-link>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown"  @click="add_class('3')" :class="{active:3==a_index}">
                  选品定价
                  <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link to="/item_pricing">单品定价</router-link>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">EJB</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">Jasper Report</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">分离的链接</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">另一个分离的链接</a>
                  </li>
                </ul>
              </li>
              <li  @click="add_class('4')" :class="{active:4==a_index}">
                <router-link to="/Locate">客群定位</router-link>
              </li>
              <li  @click="add_class('5')" :class="{active:5==a_index}">
                <router-link to="/echarts">搜索绩效</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data() {
        return {
          a_index: ''
        };
    },
    methods: {
        add_class(index) {
            this.a_index = index;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav_top {
    width: 90%;
    margin: auto;
}
@media (max-width: 992px) {
    .nav_top {
        width: 100%;
    }
}
</style>
