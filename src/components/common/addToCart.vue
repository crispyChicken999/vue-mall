<template>
<div class="addCart" v-if="this.$store.state.cartStatus">
    <div class="cart-mask" @click="exitCartComponent"></div>
    <div class="mainbox">
        <div class="detail">
            <div class="imgHolder"><img :src="item.img[0]" alt="无图片"></div>
            <div class="info">
                <div class="name">{{item.name}}</div>
                <div class="price">￥{{item.price}}元</div>
            </div>
            <div class="count">
                <i class="iconfont" @click="minusNum">&#xe624;</i>
                <span class="num"> {{num}} </span>
                <i class="iconfont" @click="addNum">&#xe603;</i>
            </div>
        </div>
        <div class="cart-button">
            <div class="totel">
                合计: <span>￥{{item.price}}</span>
            </div>
            <div class="buynow" @click="buynow(item)">
                立即购买
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'add-to-cart',
    data() {
        return {
            num: 1
        }
    },
    computed: {
        item() {
            return this.$store.state.nowChoosedItem;
        }
    },
    methods: {
        exitCartComponent() {
            this.$store.commit('exitCartComponent');
        },
        exitDetailPages() {
            this.$store.commit('exitDetailPages');
        },
        addNum() {
            if (this.num <= 99) {
                this.num++;
            }
        },
        minusNum() {
            if (this.num > 0) {
                this.num--;
            }
        },
        buynow(item) {
            let obj = Object.assign({}, item, {
                'num': this.num
            })
            this.$store.commit('CartComponentBuyNow', {
                'obj': obj,
                'item': item
            });
            this.exitCartComponent();
            this.exitDetailPages();
            this.$store.state.goodStatus = false;
            this.$router.push('/cart');
        },
    }
}
</script>

<style>
.addCart {
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    z-index: 5;
    width: 100%;
}

.cart-mask {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
}

.mainbox {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: white;
}

.detail {
    display: flex;
}

.detail .imgHolder {

    width: 60px;
    height: 60px;
    margin: 0 10px;
}

.detail .imgHolder img {
    border-radius: 50%;
}

.info {
    margin-top: 10px;
}

.info .name {
    font-size: 12px;
}

.info .price {
    font-size: 12px;
    color: red;
}

.count {
    position: absolute;
    right: 5px;
    line-height: 60px;
}

.count span {
    font-size: 20px;
}

.count i {
    font-style: normal;
    font-family: 'iconfont';
    font-size: 20px;
    color: rgb(49, 159, 202);
}

.cart-button {
    display: flex;
    justify-content: space-around;
    height: 40px;

}

.cart-button .totel {
    line-height: 40px;
    font-size: 14px;
    width: 50%;
    text-indent: 2em;
}

.cart-button .totel span {
    color: red;
    font-size: 14px;
}

.cart-button .buynow {
    line-height: 40px;
    background-color: rgb(219, 6, 6);
    width: 50%;
    text-align: center;
    color: white;
    font-size: 14px;
}

@font-face {
    font-family: 'iconfont';
    /* project id 2004081 */
    src: url('//at.alicdn.com/t/font_2004081_ca5ki9afaxg.eot');
    src: url('//at.alicdn.com/t/font_2004081_ca5ki9afaxg.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_2004081_ca5ki9afaxg.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_2004081_ca5ki9afaxg.woff') format('woff'),
        url('//at.alicdn.com/t/font_2004081_ca5ki9afaxg.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_2004081_ca5ki9afaxg.svg#iconfont') format('svg');
}
</style>
