<template>
  <div class="login-bgc">
    <div class="login-table">
      <div class="login-title">
        <h3>用户登录</h3>
        <el-tooltip
          class="box-item"
          effect="light"
          content="国际化"
          placement="bottom"
        >
          <i class="iconfont icon-zhongyingwen"></i>
        </el-tooltip>
      </div>
      <el-form ref="LoginRef" :rules="loginRules" :model="loginForm">
        <el-form-item prop="username">
          <span class="icon1">
            <el-icon color="#c0c0c0"><Avatar /> </el-icon
          ></span>
          <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item prop="password">
          <span class="icon1">
            <el-icon color="#c0c0c0"><SetUp /></el-icon>
          </span>
          <el-input :type="inputType" v-model="loginForm.password" />
          <span class="icon2" @click="handlePassword">
            <!-- 睁眼 -->
            <el-icon v-if="inputType == 'password'"><Hide /></el-icon>
            <!-- 闭眼 -->
            <el-icon v-else><View /></el-icon>
          </span>
        </el-form-item>
        <div class="dl">
          <el-button type="primary" @click="handleLoginSubmit(LoginRef)">
            登录
          </el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import router from '../../router'
import { reactive, ref } from 'vue'
import User from '../../api/user'
import md5 from 'md5'
import { useStore } from 'vuex'
const store = useStore()
const inputType = ref('password')
const LoginRef = ref()
const loginForm = reactive({
  username: 'super-admin',
  password: '123456'
})

// 验证格式
const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    { required: true, message: '密码为必填项', trigger: 'blur' },
    { min: 6, max: 6, message: '请输入六位数密码', trigger: 'blur' }
  ]
})

// 计算属性
// const passwordIconStatus = computed(() => {
//   return inputType.value === 'password' ? 'Hide' :   'View'
// })

// 方法

// 点击眼睛显示与隐藏
const handlePassword = () => {
  // 通过三木表达式的方法切换输入框类型
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
}

// 点击登录按钮
const handleLoginSubmit = async (LoginRef) => {
  if (!LoginRef) return
  await LoginRef.validate(async (valid) => {
    if (valid) {
      loginForm.password = md5(loginForm.password)
      const response = await User.login(loginForm)
      const tokens = response.data.data.token
      store.dispatch('user/GETtoken', tokens)
      if (response.data.code === 200) {
        router.push('/')
      }
    } else {
      alert('2')
    }
  })
}
</script>
<style lang="scss">
//页面背景
.login-bgc {
  height: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
  //  登录布局
  .login-table {
    position: relative;
    width: 520px;
    padding: 0 35px;
    margin: 158px auto;
    overflow: hidden;
    // 登录标题布局
    .login-title {
      position: relative;
      h3 {
        text-align: center;
        color: white;
        font-size: 26px;
        margin-bottom: 30px;
      }
      i {
        font-size: 26px;
        color: #827f7f;
        position: absolute;
        top: 5px;
        right: 0;
        padding: 3px;
        border-radius: 4px;
        background-color: #fff;
      }
    }
    .el-form-item {
      //输入框样式
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      background: rgba(0, 0, 0, 0.1);
      .icon1 {
        //图标
        font-size: 18px;
        margin-left: 12px;
      }
      .icon2 {
        color: white;
        font-size: 18px;
        margin-left: 20px;
      }
      .el-input {
        height: 47px;
        width: 85%;
        .el-input__wrapper {
          background-color: transparent;
          border: 0;
          box-shadow: none;
        }
        .input__wrapper:hover {
          border: 0;
        }
        input {
          color: white;
        }
      }
    }
    .dl {
      width: 520px;
      .el-button {
        width: 100%;
        height: 36px;
        font-size: 16px;
      }
    }
  }
}
</style>
