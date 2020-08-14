<template>
    <div class="category">
        <items-detail></items-detail>
        <add-to-cart></add-to-cart>
        <div class="category-title">
            <ul>
                <li :class="choosedIndex == 0 ? 'is-active':''" @click='changeActiveStyle(0)'>全部</li>
                <li v-for="(item,index) in goodsList" :key="item+index" @click='changeActiveStyle(index+1)' :class="choosedIndex == index+1 ? 'is-active':''">
                    {{item.goods.type}}
                </li>
            </ul>
        </div>
        <!-- <mt-tab-container v-model="active">
            <mt-tab-container-item id="全部">
                <mt-cell v-for="(val,inx) in allGoodsItem"  :key='val+inx' class="clearfix">
                    <div class="item-info">
                        <img :src="val.img[0]" alt="" class='item-img'>
                        <span class="item-name">{{val.name}}</span>
                    </div>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item :id="item.goods.type" v-for="(item,index) in goodsList" :key="item+index">
                <mt-cell v-for="(val,inx) in item.goods.list"  :key='val+inx' class="clearfix">
                    <div class="item-info">
                        <img :src="val.img[0]" alt="" class='item-img'>
                        <span class="item-name">{{val.name}}</span>
                    </div>
                </mt-cell>
            </mt-tab-container-item>
        </mt-tab-container> -->
        <div class="category-content">
            <ul>
                <li v-for="(val,inx) in allGoodsItem"  :key='val+inx' class="clearfix content-box" v-show="choosedIndex == 0">
                    <div class="item-info" @click='enterDetailPages(val)'>
                        <img :src="val.img[0]" alt="" class='item-img'>
                        <span class="item-name">{{val.name}}</span>
                    </div>
                </li>
            </ul>
            <ul v-for="(item,index) in goodsList" :key="item+index" v-show="choosedIndex == index+1">
                <li v-for="(val,inx) in item.goods.list"  :key='val+inx' class="content-box clearfix">
                    <div class="item-info" @click='enterDetailPages(val)'>
                        <img :src="val.img[0]" alt="" class='item-img'>
                        <span class="item-name">{{val.name}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
import "mint-ui/lib/style.css"
import itemsDetail from '../components/common/itemsDetail'
import addToCart from '../components/common/addToCart'

export default {
    name:'category',
    data(){
        return{
            goodsList:[],
            // active:'全部',
            choosedIndex:0,
            allGoodsItem:[],
        }
    },
    mounted(){
        this.$axios.get('/data.json')
        .then(res=>{
            this.goodsList=res.data.goodsList;
            this.allGoodsItem=res.data.allItem;
        })
        .catch(err=>{
            console.log(err);
            alert('加载数据失败');
        });
        
    },
    components:{
        itemsDetail,
        addToCart
    },
    methods:{
        changeActiveStyle(index){
            this.choosedIndex = index;
            
        },
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

<style>
li{
    list-style:none;
}
.clearfix {
  overflow: auto;
}
.category{
    height: 100vh;
    background-color: white;

}
.category-title{
    float: left;
    height: 100%;

    border-right: 1px solid #ddd;
}
.category-title li{
    font-size: 14px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    width: 100px;
    border-bottom: 1px solid #ddd;
}
.content-box{
    border-bottom:1px solid #ddd ;
}
.item-img{
    width: 50px;
    height: 50px;
    padding-top:10px ;
    padding-left:10px ;
    border-radius: 50%;
}
.item-name{
    vertical-align: top;
    padding: 5px;
}
.item-info{
    height: 70px;
    padding-left: 5px;
    color: #000;
    line-height: 70px;
}


/* .mint-cell-title{
    flex:0!important;
}
.mint-cell-wrapper{
    border-bottom:1px solid #ddd ;
    padding:8px;
    flex:0!important;
} */

.is-active{
    color: red;
}
</style>