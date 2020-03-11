<template>
  <div class="container">
    <div class="nav">
      <span class="nav-back"
        ><svgicon name="leftarrow" width="30" height="30"></svgicon
      ></span>
      <span class="nav-title">登录</span>
    </div>
    <div class="login-header">
      <span
        class="login-tip"
        :class="{ active: isSwitch === 1 }"
        @click="changeLogin(1)"
        >密码登录</span
      >
      <span class="ver-line"></span>
      <span
        class="login-tip"
        :class="{ active: isSwitch === 0 }"
        @click="changeLogin(0)"
      >
        验证码登录</span
      >
    </div>
    <div class="login-form">
      <div class="form-group">
        <span class="get-code">
          <span class="down">+{{ codeNumber }}</span
          ><svgicon name="down"></svgicon>
        </span>
        <input class="form-input" placeholder="请输入手机号" />
      </div>
      <template v-if="isSwitch === 1">
        <div class="form-group">
          <input
            v-model="pass"
            :type="passType"
            class="form-input"
            placeholder="请输入密码"
          />
          <span v-if="pass" class="form-group-eye">
            <svgicon
              v-if="passType === 'text'"
              name="visible"
              @click="showPass(0)"
            ></svgicon>
            <svgicon v-else name="invisible" @click="showPass(1)"></svgicon>
          </span>
        </div>
      </template>
      <template v-else>
        <div class="form-group">
          <input class="form-input" placeholder="请输入验证码" />
          <span class="get-veri">获取验证码</span>
        </div>
      </template>
      <button class="form-sub">登录</button>
    </div>
  </div>
</template>

<script>
import '@/assets/icons/leftarrow'
import '@/assets/icons/down'
import '@/assets/icons/visible'
import '@/assets/icons/invisible'
export default {
  name: 'Login',
  data() {
    return {
      isSwitch: 1,
      codeNumber: 86,
      pass: '',
      passType: 'password'
    }
  },
  methods: {
    changeLogin(val) {
      this.isSwitch = val
    },
    showPass(val) {
      if (val === 0) {
        this.passType = 'password'
      } else this.passType = 'text'
    }
  }
}
</script>
<style scoped>
.nav {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.nav-title {
  flex: 1 1;
  text-align: center;
  font-size: 17px;
  padding-right: 20px;
}
.login-header {
  display: flex;
  padding: 20px;
  margin-bottom: 30px;
}
.login-tip {
  font-size: 23px;
  font-weight: 500;
  line-height: 32px;
  color: #b1c0bc;
}
.ver-line {
  display: block;
  width: 2px;
  height: 32px;
  background-color: #d8d8d8;
  margin: 0 6px;
}
.active {
  color: #02b388;
}
.login-form {
  padding: 0 20px;
}
.form-group {
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
  border-bottom: 1px solid #d0e3de;
  margin-bottom: 15px;
}
.get-code {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ababab;
  flex: 0 0 60px;
}
.form-input {
  width: 100%;
  font-size: 15px;
}
.form-group-eye {
  color: #02b388;
}
.get-veri {
  flex: 0 0 100px;
  color: #02b388;
  text-align: right;
}

.form-sub {
  width: 100%;
  background: #02b388;
  margin-top: 65px;
  font-size: 16px;
  line-height: 22px;
  border-radius: 3px;
  color: white;
  padding: 10px 0;
}
</style>
