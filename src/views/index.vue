<template>
    <div class="container">
        <search-bar></search-bar>
        <banner v-bind:imgList="imgList" id="index-banner"></banner>
        <items-detail></items-detail>
        <add-to-cart></add-to-cart>
        <div class="mian-section" >
            <ul class="small-item clearfix">
                <li v-for="(item,index) in typeList" :key="item+index">
                    <a :href="item.link">
                        <img :src="item.url" alt="" >
                        <span>{{item.name}}</span>
                    </a>
                </li>
                </ul>
            <div class="goods-item clearfix" v-for="(item,index) in goodsList" :key="item+index">
                <div class="title">
                    <b>{{item.goods.type}}</b>
                    <span>P{{index+1}}</span>
                </div>
                <ul class="large-item">
                    <li v-for="(val,index) in item.goods.list" :key="val+index" >
                        <img :src="val.img[0]" alt="" class="item-image" @click="enterDetailPages(val)">
                        <span @click="enterDetailPages(val)">￥{{val.price}}</span >
                        <b @click="enterDetailPages(val)">{{val.name}}</b>
                        <i class='iconfont' @click="enterCartComponent(val)">&#xe607;
                            <!-- <img src="../assets/img/shopcar.png" class="shop-car"> -->
                        </i>
                    </li>
                </ul>
            </div>
            <div class="footer"></div>
        </div>
    </div>
</template>

<script>
import img1 from '../assets/img/banner_1.jpg'
import img2 from '../assets/img/banner_2.jpg'
import img3 from '../assets/img/banner_3.jpg'
import img4 from '../assets/img/banner_4.jpg'
import img5 from '../assets/img/banner_5.jpg'
import banner from '../components/common/banner'
import itemsDetail from '../components/common/itemsDetail'
import addToCart from '../components/common/addToCart'
import searchBar from '../components/common/searchBar'
export default {
    name:'index',
    data(){
        return{
            imgList:[img1,img2,img3,img4,img5],
            typeList:[],
            goodsList:[],
            
        }
    },
    mounted(){
        this.$axios.get('/data.json')
        .then(res=>{
            this.typeList=res.data.typeList;
            this.goodsList=res.data.goodsList;
        })
        .catch(err=>{
            console.log(err);
            alert('加载数据失败');
        })
    },
    components:{
        banner,
        searchBar,
        itemsDetail,
        addToCart
    },
    methods:{
        enterDetailPages(val){
            this.$store.state.goodStatus = !this.$store.state.goodStatus;
            if(this.$store.state.goodStatus == true){
                document.querySelector('body').setAttribute('style','position:fixed');
            }
            this.$store.state.nowChoosedItem = val;
        },
        enterCartComponent(val){
            this.$store.state.cartStatus = !this.$store.state.cartStatus;
            this.$store.state.nowChoosedItem = val;
            if(this.$store.state.cartStatus == true){
                // document.querySelector('body').setAttribute('style','overflow:hidden');
            }
        }
    }
}
</script>

<style scoped>
@font-face {
  font-family: 'iconfont';  /* project id 2002865 */
  src: url('//at.alicdn.com/t/font_2002865_vbd8mtr0rfm.eot');
  src: url('//at.alicdn.com/t/font_2002865_vbd8mtr0rfm.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2002865_vbd8mtr0rfm.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2002865_vbd8mtr0rfm.woff') format('woff'),
  url('//at.alicdn.com/t/font_2002865_vbd8mtr0rfm.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2002865_vbd8mtr0rfm.svg#iconfont') format('svg');
}
.container{
    width: 100%; 
    overflow-y:auto ;
} 
#index-banner{
    height: 200px;
}
.footer {
    width: 100%;
    height: 60px;
}
/*
.container::-webkit-scrollbar{
    width:0px;
    height:0px;
} */

.clearfix {
  overflow: auto;
}
.small-item{
    padding-bottom: 5px;
}
.small-item li{
    float: left;
    padding:5px 0px;
    list-style: none;
    height: 56px;
    width: 20%;
    text-align: center;
}
.small-item li::after{
    display:'block';
    clear:both;
}
.small-item li img{
    height: 40px;
    width: 40px;
}
.small-item li span {
    display: block;
    margin:0 auto;
    
}
.small-item li a {
    text-decoration: none;
}
.goods-item{
    /* margin: 5px 0px; */
    line-height: 36px;
}

.goods-item .title {
    position: relative;
    height: 36px;
    background-color: white;
    border-bottom: 1px solid rgb(223, 223, 223);
}

.goods-item .title b {
    position: absolute;
    top: 0px;
    left: 20px;
    font-size: 15px;
    font-weight: 700;
    color: #000;
}
.goods-item .title b::before{
    content: '';
    width: 4px;
    height: 12px;
    display: inline-block;
    margin-left:-9px;
    margin-right: 9px;
    background-color: rgb(206, 0, 0);
}
.goods-item .title span{
    position: absolute;
    top: 0px;
    right: 5px;
    font-size: 15px;
    font-weight: 700;
    color: #000;

}
.goods-item ul li{
    float: left;
    box-sizing: border-box;
    /* position: relative; */
    list-style: none;
    width: 50%;
    height: 164px;
    border-bottom: 1px solid rgb(223, 223, 223);
}
.large-item li{
    position: relative;
}
.large-item li:first-child {
    border-right:1px solid rgb(223, 223, 223);
}
.large-item li .item-image{
    width: 100%;
    height: 100px;
    text-align: center;
    margin: 10px auto;
}
.large-item li i{
    position: absolute;
    bottom: 5px;
    right: 16px;
    font-family: 'iconfont';
    font-size: 20px;
}
.large-item li b {
    position: absolute;
    bottom: 0px;
    left: 10px;
    font-size: 14px;
}
.large-item li span {
    position: absolute;
    bottom: 15px;
    left: 7px;
    font-size: 15px;
    color: red;
}
</style>

