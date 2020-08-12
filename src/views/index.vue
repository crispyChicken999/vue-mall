<template>
    <div class="container">
        <banner></banner>
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
                <li v-for="(val,index) in item.goods.list" :key="val+index">
                    <img :src="val.img[0]" alt="" class="item-image">
                    <span>￥{{val.price}}</span>
                    <b>{{val.name}}</b>
                    <i>
                        <img src="../assets/img/shopcar.png" class="shop-car">
                    </i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import banner from '../components/common/banner'

export default {
    data(){
        return{
            typeList:[],
            goodsList:[]
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
        banner
    }
}
</script>

<style  scoped>
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
    position: relative;
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
.large-item li i .shop-car {
    position: absolute;
    bottom: 5px;
    right: 10px;
    width: 20px;
    height: 20px;
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

