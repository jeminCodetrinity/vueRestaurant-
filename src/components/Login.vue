<template>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="section login-page container-fluid">
    <div class="row aligh-item-center">
        <div class="col-sm-3 p-0">
            <div class="login-form">
                <div class="logo">
                    <a href="index.html" class="">
                        <img src="../assets/Restaurant.png" alt="logo" class="img">
                    </a>
                </div>
                <div class="page-heading">
                    <h2>Login your account</h2>
                </div>
                <div class="login-form-items">
                    <div class="items">
                        <label for="">Email Address</label>
                        <div class="input">
                            <input type="text" v-model="email" placeholder="Email Address">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="items">
                        <label for="">Password</label>
                        <div class="input">
                            <input type="password" v-model="password" placeholder="Enter your password">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="form-signin">
                        <button class="btn" v-on:click="login">Login Now</button>
                    </div>
                    <div class="or-option">
                        <p>or</p>
                    </div>
                    <div class="form-signup">
                        <router-link class="btn" to="/sign-up">Register Now</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-9">
            <div class="login-extra">
                <img src="../assets/login.svg" alt="">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
            console.log(result.data.length);
            if (result.status == 200 && result.data.length != 0) {
                localStorage.setItem('signUp', JSON.stringify(result.data[0]));
                this.$router.push({
                    name: 'Home'
                });
            }
        }
    },
    mounted() {
        let login = localStorage.getItem('signUp');
        if (login) {
            this.$router.push({
                name: 'Home'
            });
        }
    }
}
</script>

<style>
.img {
    width: 100px;
    height: 100px;
}

.login-page {
    background-color: #F1F3F6;
}

.login-page .login-form {
    background-color: #fff;
    box-shadow: 0px 12px 50px rgba(0, 0, 0, 0.1);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.login-page .login-form form {
    width: 100%;
    padding: 0 30px;
}

.login-page .login-form .logo {
    padding: 30px 0;
}

.login-page .login-form .page-heading {
    text-align: center;
    padding: 10px 0;
}

.login-page .login-form .page-heading h2 {
    font-size: 20px;
    font-weight: 700;
}

.items {
    margin-top: 20px;
    margin-bottom: 5px;
}

.items label {
    font-size: 16px;
    color: #555555;
    margin-bottom: 8px;
}

.items .input {
    background-color: #f1f3f6;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
}

.items .input i {
    width: 50px;
    height: 50px;
    background-color: #FD7401;
    color: #fff;
    display: grid;
    place-content: center;
    font-size: 24px;
}

.items .input input {
    background-color: transparent;
    border: 0;
    padding: 10px;
    width: calc(100% - 50px);
}

.forgot-password {
    text-align: right;
}

.forgot-password a {
    color: #1E2772;
    font-size: 14px;
}

.form-signin {
    text-align: center;
    margin: 15px 0;
}

.form-signin .btn {
    background-color: #FD7401;
    width: 100%;
    color: #fff;
    font-size: 16px;
    padding: 10px;
    box-shadow: 0px 8px 12px rgba(253, 116, 1, 0.3);
}

.or-option {
    text-align: center;
    position: relative;
    margin-bottom: 20px;
}

.or-option:before {
    width: 100%;
    height: 1px;
    background-color: #C2C2C2;
    position: absolute;
    top: 15px;
    left: 0;
    content: "";
    z-index: 1;
}

.or-option:after {
    width: 40px;
    height: 30px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    content: "";
    z-index: 2;
}

.or-option p {
    padding: 5px;
    text-transform: uppercase;
    color: #C2C2C2;
    font-size: 14px;
    margin-bottom: 0;
    z-index: 3;
    position: relative;
    display: block;
    width: 100%;
    z-index: 3;
}

.form-signup {
    text-align: center;
}

.form-signup .btn {
    background-color: #fff;
    width: 100%;
    color: #FD7401;
    font-size: 16px;
    padding: 10px;
    border: 1px solid #FD7401;
}

.login-extra {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}
</style>
