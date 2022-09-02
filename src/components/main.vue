<template>
    <div class="bgImg">
        <div class="title">包桢-个人简历</div>
        <div class="container">
            <div class="container-left">
                <div v-for="(item,index) in menulist" class="list-item" @click="foo(item,index)" :class="{select:selectIndex==index}">
                    <img :src="item.icon" class="list-img">
                    <div class="list-text">{{item.msg}}</div>
                </div>
            </div>
            <div class="container-right">
                <router-view></router-view>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                selectIndex:0,
                menulist:[
                    {icon:require('../images/my.png'),msg:'我的简介',path:'my'},
                    {icon:require('../images/skill.png'),msg:'相关技能',path:'skill'},
                    {icon:require('../images/about.png'),msg:'关于项目',path:'about'},
                    {icon:require('../images/advantage.png'),msg:'城市风光',path:'advantage'},
                    {icon:require('../images/contact.png'),msg:'联系方式',path:'contact'},
                ]
            }
        },

        methods: {
            foo(item,index){
                // 路由跳转
                this.$router.push({path:`/${item.path}`})
                // 单选
                this.selectIndex = index;
                // window.name是一个字符串类型本地存储
                window.name = index;


                // localStorage.setItem('btc',index)
                
            },

        },
        mounted() {
            console.log(window.name);
            this.selectIndex = window.name;

            // this.selectIndex = localStorage.getItem('btc')
            
        },

        destoryed() {
            
        },
    }



</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    .bgImg {
        width: 100vw;
        height: 100vh;
        background-image: url(../images/bg2.jpeg);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title {
        font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        font-size: 40px;
        font-weight: 600;
        color: white;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container {
        /* margin: auto; */
        width: 80%;
        height: 70%;
        /* background-color: aqua; */
        margin-top: 60px;
        display: flex;
    }

    .container-left {
        flex: 1;
        background-color: rgb(59, 59, 59,0.9);
        border-radius: 30px;
        transition: all 0.25s ease-in 0s;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .container-right {
        margin-left: 20px;
        flex: 3;
        background-color: rgb(59, 59, 59,0.85);
        border-radius: 30px;
        transition: all 0.25s ease-in 0s;
    }

    .container-left:hover {
        -webkit-box-shadow: 0px 10px 10px rgb(102, 245, 102);
        -moz-box-shadow: 0px 10px 10px rgb(102, 245, 102);
        box-shadow: 0px 10px 10px rgb(102, 245, 102);
        transform: translateY(-5px);
    }

    .container-right:hover {
        -webkit-box-shadow: 0px 10px 10px rgb(102, 245, 102);
        -moz-box-shadow: 0px 10px 10px rgb(102, 245, 102);
        box-shadow: 0px 10px 10px rgb(102, 245, 102);
        transform: translateY(-5px);
    }
    .list-text{
        color: white;
        font-size: 25px;
        font-weight: 600;
        margin-left: 30px;
        transition: all 0.25s ease-in 0s;
    }
    .list-img{
        width: 25px;
        height: 25px;
        transition: all 0.25s ease-in 0s;
    }
    .list-item{
        border-radius: 10px;
        width:65% ;
        height:80px;
        background-color:rgb(102, 245, 102,0.5) ;
        display: flex;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;
        transition: all 0.25s ease-in 0s;
        cursor: pointer;
    }
    /* hover动效 */
    .list-item:hover{
        background-color:rgb(102, 245, 102);
        width:70% ;
        height:110px;
    }
    .list-item:hover .list-text{
        font-size: 32px;
    }
    .list-item:hover .list-img{
        width: 32px;
        height: 32px;
    }
    /* 单选点击 */
    .select{
        background-color:rgb(102, 245, 102);
        width:70% ;
        height:110px;
    }
    .select .list-text{
        font-size: 32px;
    }
    .select .list-img{
        width: 32px;
        height: 32px;
    }
</style>