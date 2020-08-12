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
import img1 from '../../assets/img/banner_1.jpg'
import img2 from '../../assets/img/banner_2.jpg'
import img3 from '../../assets/img/banner_3.jpg'
import img4 from '../../assets/img/banner_4.jpg'
import img5 from '../../assets/img/banner_5.jpg'
export default {
    name:'banner',
    data(){
        return{
            imgList:[
                img1,img2,img3,img4,img5
            ]
        }
    },
    props:{
        
    }

}
</script>

<style scoped>
  .swipe{
      height: 200px;
      width: 100%;
  }
  img{
      height: 100%;
      width: 100%;
  }
</style>