<template>
    <div class="container">
        <div class="content">
            <div class="top">
                <div class="header">
                    <img alt="logo" class="logo" src="@/assets/logo.png"/>
                    <span class="title"></span>
                </div>
                <div class="desc"></div>
            </div>
            <component :is="componentName" class="main-content"></component>
        </div>
    </div>
</template>

<script>
    import Login from './Login'

    export default {
        name: "Common",
        components: {Login},
        data () {
            return {
                componentName : 'Login'
            }
        }
    }
</script>

<style lang="less" scoped>
    .container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: auto;
        background: #f0f2f5 url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg') no-repeat center 110px;
        background-size: 100%;
        .content{
            padding: 32px 0;
            flex: 1;
            .top{
                width: 200px;
                margin: 0 auto;
            }
            .main-content {
                width: 368px;
                margin: 0 auto;
            }
        }
    }
</style>
