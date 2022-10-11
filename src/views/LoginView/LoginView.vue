<style lang="scss" src="./LoginView.scss"></style>
<script lang="ts" src="./LoginView.ts"></script>

<template>
  <div class="login-page">
    <div class="logo-container">
      <img src="@/assets/appicon-color.png" alt="app-icon" />
    </div>
    <div class="form-action">
      <InputBox
        inputType="text"
        fieldId="userName"
        inputFor="user-name"
        :value="userName"
        placeholder="Mobile Number/Email id"
        @input="handleInputAction"
      />
      <InputBox
        inputType="password"
        fieldId="password"
        inputFor="password"
        :value="password"
        placeholder="Password"
        @input="handleInputAction"
      />
      <div class="forgot-password">
        <p>Forgot Password</p>
      </div>
      <button @click="formSubmitHandler" class="btn btn-primary">LOGIN</button>
    </div>
    <div class="social-login">
      <button class="social-login-button">
        <font-awesome-icon icon="fa-brands fa-facebook-f" class="facebook" />
      </button>
      <button class="social-login-button">
        <font-awesome-icon
          icon="fa-brands fa-google-plus-g"
          class="google-plus"
        />
      </button>
    </div>
    <div class="login-page-footer">
      <p>
        Don’t have an account?
        <span class="color-text" @click="registerLinkHandler">Register</span>
      </p>
    </div>
  </div>
</template>
