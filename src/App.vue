<template>
  <div id="app">
    <div class="box-menu">
      <router-link to='/'>
        <div class="main-button">
          <img src="./assets/img/home.png" alt=""><span>首页</span>
        </div>
      </router-link>
      <router-link to='/category'>
        <div class="main-button">
          <img src="./assets/img/category.png" alt=""><span>分类</span>
        </div>
      </router-link>
      <router-link to='/cart'>
        <div class="main-button">
          <img src="./assets/img/shopcar.png" alt=""><span>购物车</span>
        </div>
      </router-link>
      <router-link to='/user'>
        <div class="main-button">
          <img src="./assets/img/user.png" alt=""><span>我的</span>
        </div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data(){
    return{

    }
  },
  components:{
    
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input, button, textarea,select{
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-weight: normal;
    /* color: #666; */
    border: none;
    vertical-align: baseline;
    /* overflow:auto; */
}

.box-menu{
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: white;
  box-shadow: 1px -2px 7px 0px #ccc;
}
.box-menu .main-button {
  float: left;
  width: 25%;
  padding-top: 5px;
  text-align: center;
}
.box-menu .main-button img{
  width: 32px;
  height: 32px;
}
.box-menu .main-button span {
  display: block;
}
#app{
  background-color: rgba(236, 236, 236, 0.438);
}
</style>
