<template>
  <div class="login-container">
    <el-from class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <!-- 用户名 -->
      <el-item>
        <span class="icon-container">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input placeholder="username" name="username" type="text"></el-input>
        <span class="show-pwd">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
      </el-item>
      <!-- 密码 -->
      <el-item>
        <span class="icon-container">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input placeholder="password" name="password" type="text"></el-input>
        <span class="show-pwd">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
      </el-item>
      <!-- 登录按钮 -->
      <el-button type="primary" style="width: 100%; margin-top: 30px"
        >Login in</el-button
      >
    </el-from>
  </div>
</template>

<script setup>
import { Avatar } from '@element-plus/icons'
import {} from 'vue'
</script>
