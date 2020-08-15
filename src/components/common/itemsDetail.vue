<template>
<div class="item-detail" v-if="this.$store.state.goodStatus">
    <add-to-cart></add-to-cart>
    <div class="title">
        <i class="iconfont" @click="exitDetailPages">&#xe622;</i>
        <span>商品详情</span>
    </div>
    <div class="banner">
        <banner :imgList='item.img' id="details-banner"></banner>
    </div>
    <div class="name">
        <p>{{item.name}}</p>
    </div>
    <div class="explain">
        <p>{{item.explain}}</p>
    </div>
    <div class="price">
        <p>￥{{item.price}}</p>
    </div>
    <div class="itemsInfo">
        <span class="mainInfo">商品详情</span>
        <span class="comment">评价</span>
    </div>
    <div class="info">
        <img src="../../assets/img/noInfo.png" alt="">
    </div>
    <div class="button">
        <div class="add-to-cart" @click="enterCartComponent(item)">加入购物车</div>
        <div class="buynow" @click='buynow(item)'>立即购买</div>
    </div>
</div>
</template>

<script>
import img1 from '../../assets/img/banner_1.jpg'
import img2 from '../../assets/img/banner_2.jpg'
import img3 from '../../assets/img/banner_3.jpg'
import img4 from '../../assets/img/banner_4.jpg'
import img5 from '../../assets/img/banner_5.jpg'
import addToCart from './addToCart'
import banner from './banner'
export default {
    name: 'item-detail',
    data() {
        return {
            imgListExample: [img1, img2, img3, img4, img5],

        }
    },
    computed: {
        item() {
            return this.$store.state.nowChoosedItem;
        }
    },
    components: {
        banner,
        addToCart
    },
    methods: {
        enterCartComponent(val) {
            this.$store.commit('enterCartComponent', val);
        },
        exitDetailPages() {
            this.$store.commit('exitDetailPages');
        },
        exitCartComponent() {
            this.$store.commit('exitCartComponent');

        },
        buynow(item) {
            let obj = Object.assign({}, item, {
                'num': 1
            })
            this.$store.commit('itemBuyNow', {
                'item': item,
                'obj': obj
            });
            this.exitCartComponent();
            this.exitDetailPages();
            this.$store.state.goodStatus = false;
            this.$store.state.cartStatus = false;
            this.$router.push('/cart');
        }
    }
}
</script>

<style>
.item-detail {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    transform: none;
    overflow: hidden;
    background-color: white;
}

.item-detail .title {
    position: relative;
    background-color: #1296db;
    height: 40px;
    text-align: center;
}

.item-detail .title i {
    position: absolute;
    top: 9px;
    left: 12px;
    font-family: 'iconfont';
    font-style: normal;
    font-size: 18px;
    color: white;
}

.item-detail .title span {
    display: inline-block;
    margin-top: 8px;
    font-size: 16px;
    color: white;
    font-weight: 700;
}

.item-detail #details-banner {
    width: 100%;
    height: 40vh;
}

.item-detail .name p {
    font-size: 22px;
    padding-left: 10px;
    padding-top: 5px;
}

.item-detail .explain p {
    font-size: 14px;
    padding-left: 10px;
    padding-top: 5px;
}

.item-detail .price p {
    font-size: 16px;
    font-weight: 700;
    padding-left: 8px;
    padding-top: 2px;
    color: red;
}

.item-detail .itemsInfo {
    background-color: rgba(241, 241, 241, 0.767);
    margin-top: 15px;
    height: 40px;
    text-align: center;
}

.item-detail .itemsInfo .mainInfo {
    display: inline-block;
    padding-right: 25%;
    margin-top: 12px;
    border-right: 1px solid rgb(172, 172, 172);
}

.item-detail .itemsInfo .comment {
    display: inline-block;
    margin-top: 12px;
    padding-left: 25%;
}

.info img {
    margin-top: 12px;
}

.button {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.button .add-to-cart {
    float: left;
    width: 50%;
    height: 8vh;
    font-size: 16px;
    line-height: 8vh;
    background-color: #1296db;
    color: #fff;
    text-align: center;
}

.button .buynow {
    float: right;
    height: 8vh;
    width: 50%;
    color: #fff;
    font-size: 16px;
    line-height: 8vh;
    background-color: #e8380d;
    text-align: center;
}

@font-face {
    font-family: 'iconfont';
    /* project id 2002865 */
    src: url('//at.alicdn.com/t/font_2002865_vbd8mtr0rfm.eot');
    src: url('//at.alicdn.com/t/font_2002865_vbd8mtr0rfm.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_2002865_vbd8mtr0rfm.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_2002865_vbd8mtr0rfm.woff') format('woff'),
        url('//at.alicdn.com/t/font_2002865_vbd8mtr0rfm.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_2002865_vbd8mtr0rfm.svg#iconfont') format('svg');
}
</style>
