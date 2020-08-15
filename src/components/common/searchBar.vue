<template>
<div class="search-bar">
    <i class="iconfont" @click='alertMessage'>&#xe67d;</i>
    <input type="text" name="" id="" v-model="value" @keyup.enter="alertMessage" placeholder="请输入想购买的商品...">
</div>
</template>

<script>
import {
    MessageBox
} from 'mint-ui';
export default {
    data() {
        return {
            value: null
        }
    },
    methods: {
        alertMessage() {
            if (this.value != null) {
                MessageBox('提示', '您的搜索内容是:' + this.value + '!');
            } else {
                MessageBox('提示', '您还没有输入内容!')
            }
        }
    }
}
</script>

<style scoped>
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

.search-bar {
    position: absolute;
    top: 10px;
    left: 5%;
    z-index: 2;
    width: 90%;
    margin: 0 auto;
}

.search-bar i {
    position: absolute;
    top: 6px;
    left: 9px;
    font-family: 'iconfont';
    text-decoration: none;
    font-style: normal;
    font-size: 20px;
    color: white;
}

.search-bar input {
    width: 100%;
    height: 36px;
    border-radius: 10px;
    text-indent: 33px;
    background-color: rgba(238, 238, 238, 0.726);
    color: white;

}

.search-bar input:focus {
    outline: none;
}
</style>
