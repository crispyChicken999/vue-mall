<template>
<div class="swipe">
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in imgList" :key="item+index">
            <img :src="item" :alt="index">
            <!-- <img src="../../assets/img/banner_1.jpg" alt=""> -->
        </mt-swipe-item>
    </mt-swipe>

</div>
</template>

<script>
export default {
    name: 'banner',
    props: {
        imgList: {
            type: Array
        }
    }
}
</script>

<style>
.swipe {
    width: 100%;
}

img {
    height: 100%;
    width: 100%;
}
</style>
