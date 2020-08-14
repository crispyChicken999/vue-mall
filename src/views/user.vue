<template>
    <div class="user-page">
        <div class="user-title">
            <img src="../assets/img/user-logo.png" alt="">
            <div class="user-info">
                <p>作者：脆皮鸡Nick</p>
                <a href="https://github.com/Nicholspp/vue-mall">项目地址</a>
            </div>
        </div>
        <div class="order-list">
            <div class="order-title"><span>全部订单：</span></div>
            <div class="order-detail">
                <div class="no-order " v-show="orderList.length==0">暂无订单 <a href="/">快去逛逛吧!></a></div>
                <ul>
                    <li v-for="(item,index) in orderList" :key='item+index' class="item-list">
                        <div class="order-item-title">订单{{index+1}}</div>
                        <div class="more-detail">
                            <span class="order-info-title">订单详情</span>
                            <div class="more-detail-box"  v-for="(val,index) in item" :key="index+val">
                                <span>商品： {{val.name}}</span>
                                <span>单价： ￥{{val.price}}</span>
                                <span>数量： {{val.num}}件</span>
                            </div>
                            <span>合计：￥{{item.totel}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>

export default {
    name:'user',
    components:{
        
    },
    computed:{
        orderList(){
            return this.$store.state.paidList;
        }
    }
}
</script>

<style>
.user-page{
    background-color: #f2f2f2;
    height: 90vh;
}
.user-title{
    display: flex;
    width: 100%;
    height: 100px;
    background-color:#17a8f6;
    align-items: center;
}
.user-title img {
    width: 60px;
    height: 60px;
    border: 1px solid rgb(189, 189, 189);
    background-color: white;
    border-radius: 50%;
    margin-left:10px ;
    /* align-items: center; */
}
.user-info {
    margin-left: 10px;
}
.user-info a,.user-info p{
    line-height: 25px;
    font-size: 16px;
    text-decoration: none;
    color: white;
    text-shadow: 2px 1px 5px #000;
}
.order-list{
    background-color: white;
    width: 95%;
    margin:15px auto;
    border-radius: 15px;
    box-shadow: 2px 2px 3px #ddd;
}
.order-title{
    box-sizing: border-box;
    height: 32px;
    padding-left: 18px;
    border-bottom: 1px solid rgb(233, 233, 233);
}
.order-title span {
    font-size: 14px;
    font-weight: 700;
    line-height: 32px;
}
.order-detail{
    padding:0px  18px ;
}
.order-item-title{
    font-size: 14px;
    margin-top: 5px;
}
.item-list{
    padding-bottom: 10px;
    border-bottom: 1px dashed #ccc;
}
.item-list:last-child{
    border: 0px!important;
}
.more-detail-box{
    display: flex;
}

.more-detail-box span{
    flex:1;
}
.no-order{
    position: relative;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    overflow: auto;
    
}
.clearfix {
  overflow: auto;
}
.no-order a{
    position: absolute;
    right: 5px;
    color: red;
    text-decoration: none;
    font-size: 14px;
    
}
.footer{
    height: 60px;
}
</style>