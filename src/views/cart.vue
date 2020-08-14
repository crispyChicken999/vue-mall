<template>
    <!-- <items-detail></items-detail> -->
    <div class="cart">
        <div class="cart-title">
            购物车
        </div>
        <div class="no-item" v-if="cartItem.length==0">
            <img src="../assets/img/empty.jpg" alt="">
        </div>
        <div class="have-item" v-else>
            <ul>
                <li v-for="(item,index) in cartItem" :key="item+index+1" class="cart-item">
                    <i :class="item.isChecked == false?'icon-gouxuan check-btn':'icon-gouxuan1 check-btn' " @click='changeChecked(index)'></i>
                    <img :src="item.img[0]" alt="">
                    <span>{{item.name}}</span>
                    <div class="count-price">
                        <div class="single">单价：<b>￥{{item.price}}</b> </div>
                        <div class="all">合计：<b>￥{{item.price*item.num}}</b></div>
                    </div>
                    <div class="del-btn" @click="delItem(index)">删除</div>
                    <div class="num-box">
                        <i class="iconfont" @click="minusNum(index)">&#xe620;</i>
                        <span :key="item.num*index">{{item.num}}</span>
                        <i class="iconfont" @click="addNum(index)">&#xe60d;</i>
                    </div>
                </li>
            </ul>
            <div class="footer"></div>
            <div class="handle">
                <i :class="isSelectAll == false?'icon-gouxuan check-btn':'icon-gouxuan1 check-btn' " @click='changeAllChecked()'></i>
                <span>合计：￥{{totel}}</span>
                <div @click="paynow">                    
                    <span class="oder" >结算</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { MessageBox,Toast} from 'mint-ui';
export default {
    name:'cart',
    data(){
        return{
            isSelectAll:false,
            totel:0,
            
        }
    },
    computed:{
        cartItem(){
            return this.$store.state.cartItem;
        }
    },
    mounted(){
        // let obj = Object.assign({}, item, { 'num': this.num })
        let temp = [];
        for(var i=0;i<this.$store.state.cartItem.length;i++){
            let obj = Object.assign({}, this.$store.state.cartItem[i], { 'isChecked': false });
            temp.push(obj);
        }
        this.$store.state.cartItem = temp;
    },
    methods:{
        addNum(index){
                this.$store.state.cartItem[index].num++;
                
                // console.log(this.$store.state.cartItem);
                // console.log(this.$store.state.cartItem);
                this.calTotel();
        },
        minusNum(index){
            if(this.$store.state.cartItem[index].num>0){
                this.$store.state.cartItem[index].num--;
            }
            this.calTotel();
        },
        delItem(index){
            this.$store.state.cartItem.splice(index,1);
            this.calTotel();
        },
        changeChecked(index){
            
            let flag = 0;
            this.$store.state.cartItem[index].isChecked = !this.$store.state.cartItem[index].isChecked;
            for(var i = 0;i<this.$store.state.cartItem.length;i++){
                if(this.$store.state.cartItem[i].isChecked == false){
                    flag = 0;
                    break;
                }
                flag=1;
            }
            if(flag == 1){
                this.isSelectAll = true;
            }else{
                this.isSelectAll = false;
            }
            this.calTotel();
        },
        changeAllChecked(){
            this.isSelectAll = !this.isSelectAll;
            if(this.isSelectAll == true){
                for(var i=0;i<this.$store.state.cartItem.length;i++){
                    this.$store.state.cartItem[i].isChecked = true;
                }
            }else{
                for(var j=0;j<this.$store.state.cartItem.length;j++){
                    this.$store.state.cartItem[j].isChecked = false;
                }
            }
            this.calTotel();

        },
        calTotel(){
            let sum = 0;
            for(var i=0;i<this.$store.state.cartItem.length;i++){
                if(this.$store.state.cartItem[i].isChecked == true){
                    sum += this.$store.state.cartItem[i].num * this.$store.state.cartItem[i].price;
                }
            }
            this.totel = sum;
            sum = 0;
        },
        paynow(){
            let tempArray = [];
            for(var i=0;i<this.$store.state.cartItem.length;i++){
                if(this.$store.state.cartItem[i].isChecked == true){
                    tempArray.push(this.$store.state.cartItem[i]);
                }
            }
            if(tempArray.length!=0){
                MessageBox.confirm('是否提交订单？ 共'+this.totel+'元')
                .then(() => {
                    Toast({
                        message: '提交成功！',
                        position: 'bottom',
                        duration: 3000
                    });
                    for(var i=0;i<this.$store.state.cartItem.length;i++){
                        if(this.$store.state.cartItem[i].isChecked == true){
                            this.$store.state.cartItem.splice(i,1);
                            i--;
                        }
                    }
                    // let obj = Object.assign({}, tempArray, { 'totel': this.totel })
                    let obj = tempArray;
                    obj.totel = this.totel;
                    console.log(obj);
                    console.log(tempArray);
                    this.$store.state.paidList.push(obj);
                    this.$router.push('/user');
                    console.log('已支付订单');
                    console.log(this.$store.state.paidList);
                    console.log('购物车内容');
                    console.log(this.$store.state.cartItem);
                })
                .catch(()=>{
                    Toast({
                        message: '您已取消提交！',
                        position: 'bottom',
                        duration: 3000
                    });
                    // console.log(err);
                });
            }else{
                Toast({
                        message: '您还未选择商品',
                        position: 'bottom',
                        duration: 3000
                    });
            }
            
            
        }
    }
}
</script>

<style>
.footer{
    height: 100px;
}

.cart-title{
    /* width: 100%; */
    height: 40px;
    padding-left: 5px;
    /* text-align: center; */
    line-height: 40px;
    font-size: 16px;
    color: white;
    background-color: #1296db;
}
.no-item img{
    width: 100%;
    vertical-align: middle;
}
.have-item{
    height: 80vh;
}
.check-btn {
    margin-left: 10px;
    font-family: 'iconfont';
    font-style: normal;
}
.cart-item {
    height: 50px;
    background-color: white;
    border-bottom: 1px solid #ddd;
}
.cart-item img{
    float: left;
    margin-top:5px ;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.cart-item span{
    float: left;
    font-size: 14px;
    line-height: 50px;

}
.cart-item .count-price{
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    
}
.cart-item .count-price b{
    color: red;
}
.cart-item i {
    line-height: 50px;
    float: left;
    font-family: 'iconfont';
    font-style: normal;
    font-size: 18px;
    color:#1296db;
}
.del-btn {
    float: right;
    background-color: red;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: white;
}
.num-box{
    float: right;
    
}
.num-box i{
    padding: 0 3px;
}
.handle{
    position: fixed;
    bottom: 60px;
    left: 0px;
    width: 100%;
    height: 40px;
    border-top: 1px solid #ddd;
    line-height: 40px;
    background-color: white;
}
.handle i {
    float: left;
    font-size: 18px;
    color:#1296db;
}
.handle div{
    float: right;
    width: 50%;
    text-align: center;
    color: white;
    background-color: red;
}
@font-face {
  font-family: 'iconfont';  /* project id 2005306 */
  src: url('//at.alicdn.com/t/font_2005306_ej6m8b2uok.eot');
  src: url('//at.alicdn.com/t/font_2005306_ej6m8b2uok.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2005306_ej6m8b2uok.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2005306_ej6m8b2uok.woff') format('woff'),
  url('//at.alicdn.com/t/font_2005306_ej6m8b2uok.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2005306_ej6m8b2uok.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-jia:before {
  content: "\e60d";
}

.icon-jian:before {
  content: "\e620";
}

.icon-gouxuan:before {
  content: "\e65c";
}

.icon-gouxuan1:before {
  content: "\e605";
}
</style>