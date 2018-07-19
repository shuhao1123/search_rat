<template>
  <div>
    <div style="width:100%;background:#004182">
      <nav class="navbar navbar-default nav_top" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-collapse">
              <span class="sr-only">切换导航</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <span @click="add_class('0')">
              <router-link to="/" class="navbar-brand">搜索鼠</router-link>
            </span>
          </div>
          <div class="collapse navbar-collapse navbar-right " id="example-navbar-collapse">
            <ul class="nav navbar-nav">
              <li @click="add_class('1')" :class="{active:1==a_index}">
                <router-link to="/warn">店铺预警</router-link>
              </li>
              <li @click="add_class('2')" :class="{active:2==a_index}">
                <router-link to="/traffic_control">流量把控</router-link>
              </li>
              <li class="dropdown" :class="{active:3==a_index}">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
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
              <li @click="add_class('4')" :class="{active:4==a_index}">
                <router-link to="/Locate">客群定位</router-link>
              </li>
              <li @click="add_class('5')" :class="{active:5==a_index}">
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
            a_index: ""
        };
    },
    mounted() {
        // window.onresize = function() {
        //   console.log($(".navbar").width())
        //     if ($(".navbar").width() < 750) {
        //         $(".dropdown")
        //             .siblings()
        //             .click(function() {
        //                 $(".navbar-toggle").click();
        //             });
        //         $(".dropdown li").click(function() {
        //             $(".navbar-toggle").click();
        //         });
        //     }
        // };

        // navbar 选品定价二级导航缓存
        $(".dropdown").click(function() {
            $(this)
                .siblings()
                .removeClass("active");
            sessionStorage.setItem("key", 3);
        });
        // navbar 选品定价二级导航点击给父元素添加样式
        $(".dropdown")
            .find("ul li")
            .click(function() {
                $(".dropdown").addClass("active");
            });
        $(".dropdown")
            .siblings()
            .click(function() {
                $(this)
                    .addClass("active")
                    .siblings()
                    .removeClass("active");
            });
        this.a_index = sessionStorage.getItem("key");
    },
    methods: {
        add_class(index) {
            (this.a_index = index), sessionStorage.setItem("key", this.a_index);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav_top {
    width: 80%;
    margin: auto;
}
@media (max-width: 992px) {
    .nav_top {
        width: 100%;
    }
}
/* navbar */
.navbar-default {
    background-color: #004182;
    border-color: #004182;
}

/* title */
.navbar-default .navbar-brand {
    color: #fff;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
    color: #00c1de;
}
/* link */
.navbar-default .navbar-nav > li > a {
    color: #fff;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
    color: #00c1de;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
    color: #fff;
    background-color: #118df0;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
    color: #fff;
    background-color: #118df0;
}
/* caret */
.navbar-default .navbar-nav > .dropdown > a .caret {
    border-top-color: #fff;
    border-bottom-color: #fff;
}
.navbar-default .navbar-nav > .dropdown > a:hover .caret,
.navbar-default .navbar-nav > .dropdown > a:focus .caret {
    border-top-color: #00c1de;
    border-bottom-color: #00c1de;
}
.navbar-default .navbar-nav > .open > a .caret,
.navbar-default .navbar-nav > .open > a:hover .caret,
.navbar-default .navbar-nav > .open > a:focus .caret {
    border-top-color: #00c1de;
    border-bottom-color: #00c1de;
}
/* mobile version */
.navbar-default .navbar-toggle {
    border-color: #fff;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
    background-color: #118df0;
}
.navbar-default .navbar-toggle .icon-bar {
    background-color: #ccc;
}
@media (max-width: 767px) {
    .navbar-default .navbar-nav .open .dropdown-menu > li > a {
        color: #fff;
    }
    .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
    .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
        color: #00c1de;
    }
}
</style>
