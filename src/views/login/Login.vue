<template>
    <div class="login">
        <a-form :form="form" @submit="handleSubmit">
            <a-tabs :tab-bar-style="{textAlign:'center'}" :activeKey="activeKey" @change="handleTabChange">
                <a-tab-pane tab="账户密码登录" key="1">
                    <a-alert type="error" closable v-show="error" :message="error" showIcon
                             style="margin-bottom: 24px;"></a-alert>
                    <a-form-item>
                        <a-input
                                v-decorator="['username',{rules:[{required:true,message:'请输入账户名',whitespace:true}]}]"
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

    import {mapMutations} from 'vuex'

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
                                let data = r.data.data
                                this.saveLoginData(data)
                                setTimeout(()=>{
                                    this.loading = false
                                },500)
                                this.$router.push('/')
                            }).catch(()=>{
                                this.error="连接异常"
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
            },
            ...mapMutations({
                setToken: 'account/setToken',
                setExpireTime: 'account/setExpireTime',
                setPermissions: 'account/setPermissions',
                setRoles: 'account/setRoles',
                setUser: 'account/setUser',
                setTheme: 'setting/setTheme',
                setLayout: 'setting/setLayout',
                setMultipage: 'setting/setMultipage',
                fixSiderbar: 'setting/fixSiderbar',
                fixHeader: 'setting/fixHeader',
                setColor: 'setting/setColor'
            }),
            saveLoginData(data){
                this.setToken(data.token)
                this.setExpireTime(data.exipreTime)
                this.setUser(data.user)
                this.setPermissions(data.permissions)
                this.setRoles(data.roles)
                this.setTheme(data.config.theme)
                this.setLayout(data.config.layout)
                this.setMultipage(data.config.multiPage === '1')
                this.fixSiderbar(data.config.fixSiderbar === '1')
                this.fixHeader(data.config.fixHeader === '1')
                this.setColor(data.config.color)
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
