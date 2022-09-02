<template>
    <div class="container-contact">  
        <div class="contact-title">联系方式</div>
        <div class="contact-box">
            <div class="contact-item" v-for="item in list">
                <img :src="item.img" class="contact-icon">
                <div style="margin-top:10px ;">{{item.name}}</div>
                <div style="margin-top:10px ;">{{item.info}}</div>
            </div>

            <!-- <img src="../images/微信.png" class="contact-icon">
            <img src="../images/手机.png" class="contact-icon">
            <img src="../images/邮箱.png" class="contact-icon">
            <img src="../images/地点.png" class="contact-icon"> -->
        </div>
    </div>
</template>


<script>
    export default{
        data() {
            return {
                list:[
                    {img:require('../images/微信.png'),name:'微信',info:'B517819'},
                    {img:require('../images/手机.png'),name:'手机',info:'15605158520'},
                    {img:require('../images/邮箱.png'),name:'邮箱',info:'874000540@qq.com'},
                    {img:require('../images/地点.png'),name:'地点',info:'江苏·无锡·梁溪'}
                ]
            }
        },
    }
</script>

<style>
    .container-contact{
        width: 100%;
        height: 100%;
        color: white;
        font-size: 30px;
        font-weight: 600;
        /* border: 1px solid red; */
    }

    .contact-title{
        margin: 30px 30px 0 30px;
        display: flex;
        justify-content: flex-start;
        /* border: 1px solid skyblue; */
    }
    .contact-box{
        margin: 40px;
        /* border: 1px solid yellow; */
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .contact-icon{
        width: 40px;
        height: 40px;
    }
    .contact-item{
        width: 400px;
        height: 200px;
        margin: 20px;
        border: 2px solid rgb(102, 245, 102);
        border-radius: 30px;
        font-size: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 3px 3px 3px rgb(150, 150, 150);
    }
</style>