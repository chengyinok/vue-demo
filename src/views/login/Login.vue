<template>
    <div class="login">
        <a-form :form="form" @submit="handleSubmit">
            <a-tabs :tab-bar-style="{textAlign:'center'}" :activeKey="activeKey" @change="handleTabChange">
                <a-tab-pane tab="账户密码登录" key="1">
                    <a-alert type="success" closable message="error" showIcon
                             style="margin-bottom: 24px;"></a-alert>
                    <a-form-item>
                        <a-input
                                v-decorator="['name',{rules:[{required:true,message:'请输入账户名',whitespace:true}]}]"
                                size="large" placeholder="用户名">
                            <a-icon slot="prefix" type="user"/>
                        </a-input>
                    </a-form-item>
                    <a-form-item>
                        <a-input
                                v-decorator="['password',{rules:[{required:true,message:'请输入密码',whitespace:true}]}]"
                                size="large" type="password" placeholder="密码">
                            <a-icon slot="prefix" type="lock"/>
                        </a-input>
                    </a-form-item>
                </a-tab-pane>
                <a-tab-pane tab="手机号登录" key="2">
                    <a-form-item>
                        <a-input size="large">
                            <a-icon slot="prefix" type="mobile"/>
                        </a-input>
                    </a-form-item>
                    <a-form-item>
                        <a-row :gutter="8">
                            <a-col :span="16">
                                <a-input size="large">
                                    <a-icon slot="prefix" type="mail"/>
                                </a-input>
                            </a-col>
                            <a-col :span="8">
                                <a-button size="large" style="width: 100%">获取验证码</a-button>
                            </a-col>
                        </a-row>
                    </a-form-item>
                </a-tab-pane>
            </a-tabs>
            <a-form-item>
                <a-button :loading="loading" size="large" type="primary" style="width: 100%" html-type="submit">
                    登录
                </a-button>

            </a-form-item>
            <div>
                <a href="">注册账户</a>
            </div>
        </a-form>
    </div>
</template>

<script>

    export default {
        name: "Login",
        data() {
            return {
                loading: false,
                error: '',
                activeKey: '1'
            }
        },
        beforeCreate() {
            this.form = this.$form.createForm(this)
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                if (this.activeKey === '1') {
                    this.form.validateFields((errors, values) => {
                        if(!errors){
                            this.loading = true;
                            this.$post('login',values).then((r)=>{
                                // let data = r.data.data
                                setTimeout(()=>{
                                    this.loading = false
                                },500)
                                // this.$router.push('/')
                            }).catch(()=>{
                                setTimeout(()=>{
                                    this.loading = false
                                },500)
                            })
                        }
                    })
                }
                if (this.activeKey === '2') {
                    this.$message.warning('暂未开发')
                }
            },
            handleTabChange(val) {
                this.activeKey = val
            }
        }
    }
</script>

<style lang="less" scoped>
    .login {
    .icon {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.2);
        margin-left: 16px;
        vertical-align: middle;
        cursor: pointer;
        transition: color 0.3s;

    &:hover {
         color: #1890ff;
     }
    }
    }
</style>