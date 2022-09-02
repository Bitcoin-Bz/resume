<template>
    <div class="my-container">
        <!-- <img src="../images/avatar.jpg" class="my-item"> -->
        <img src="../images/avatar2.jpg" class="my-img">
        <div class="my-box">
            <div class="my-item" v-for="item in list">
                <div>{{item.name}}&nbsp;:&nbsp;</div>
                <div>{{item.info}}</div>
            </div>
        </div>
        <!-- <img src="../images/avatar3.jpg" class="my-item"> -->
        <!-- <img src="../images/avatar4.jpg" class="my-item"> -->
        <!-- <div class="my-item"></div>
        <div class="my-item"></div>
        <div class="my-item"></div> -->
    </div>
</template>

<script>
    export default{
        data() {
            return {
                list:[
                    {name:'姓名',info:'包桢'},
                    {name:'性别',info:'男'},
                    {name:'出生年月',info:'1997-08-06'},
                    {name:'籍贯',info:'江苏·无锡'},
                    {name:'现居地',info:'江苏·无锡'},
                    {name:'民族',info:'汉'},
                    {name:'政治面貌',info:'共青团员'},
                    {name:'学历',info:'统招本科'},
                    {name:'毕业院校',info:'南京师范大学中北学院'},
                    {name:'专业',info:'信息管理与信息系统'},
                    {name:'语言等级',info:'英语CET6'},
                    {name:'其他证书',info:'证券从业资格证 , 基金从业资格证'},   
                ]
            }
        },
    }
</script>

<style>
    .my-container{
        height: 100%;
        width: 100%;
        display:flex;
    }
    .my-img{
        margin: 30px 30px 0 30px;
        width: 100px;
        height: 100px;
        border: 10px solid rgb(102, 245, 102);
        border-radius: 50%;
    }
    .my-box{
        flex: 1;
        /* background-color: rgb(102, 245, 102,0.4); */
        border-radius: 0 30px 30px 0;
        /* border: 1px solid skyblue; */
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .my-item{
        font-family: '微软雅黑';
        font-size: 25px;
        font-weight: 400;
        color: white;
        display: flex;
        align-items: center;
        padding-left: 30px;
        border-bottom: 1px dotted rgb(102, 245, 102);
    }
</style>