<template>
    <div class="container-advantage">
        <div class="advantage-title">图集</div>
        <div style="width:80% ;margin:20px auto;border-radius: 30px;overflow: hidden;">
            <el-carousel trigger="click"  interval="2000"  height="500px" >
                <el-carousel-item v-for="item in imglist" :key="item">
                  <img :src="item" class="bannerImg">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>

</template>


<script>
    export default{
        data() {
            return {
                imglist:[
                   require('../images/wuxi.jpg'),
                   require('../images/wuxinight.jpg'),
                   require('../images/lihu1.jpg'),
                   require('../images/lihu2.jpg')
                ]
            }
        },
    }
</script>

<style>
    .container-advantage {
        color: white;
        font-size: 40px;
        font-weight: 600;
        height: 100%;
        width: 100%;
    }
    .advantage-title{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    .bannerImg{
        width: 100%;
        height: 100%;
        border-radius: 30px;
    }
</style>