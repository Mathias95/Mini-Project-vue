<template>
    <div>
        <sub-banner maintitle="Welcome to Ave" subtext="Sign in or register"></sub-banner>
        <section class="signup-section">
            <div class="signup-container">
                <div class="form-col">
                    <form class="form-left" @submit.prevent="SubmitForm">
                        <legend class="form-header">Sign In</legend>
                        <input type="email" class="input-box" id="email" v-validate="'required|email'" name="signin email" placeholder="Your Email..">
                        <span class="input-error" v-show="errors.has('signin email')">{{ errors.first('signin email') }}</span>
                        <input class="input-box" type="password" id="password" v-validate="'required|min:6'" name="password" placeholder="Your Password..">
                          <span class="input-error">{{errors.first('password')}}</span>
                        <div class="form-btn">
                            <button class="btn btn-border" type="submit">Sign in</button>
                            <a href="#" class="form-link">Forgot your Password <i class="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </form>
                </div>
                <div class="form-col">
                    <form class="form-right" action="sign-up.html" method="post">
                        <legend class="form-header">Register</legend>
                        <input type="email" class="input-box" id="remail" v-validate="'required|email'" name="register email" placeholder="Your Email..">
                        <span class="input-error" v-show="errors.has('register email')">{{ errors.first('register email') }}</span>
                        <input class="input-box" type="password" id="register-password" name="user_register_password" placeholder="Your Password..">
                        <input class="input-box" type="password" id="confirm-password" name="user_confirm_password" placeholder="Confirm Password..">
                        <div class="updates">
                            <label class="checkbox-container">
                                <input type="checkbox" id="exclusive" value="exclusive_register" name="user_exclusive">
                                <span class="check"></span>
                                <p>Sign up for exclusive updates, discounts, new arrivals, contests, and more!</p>   
                            </label>  
                        </div>
                        <div class="form-btn">
                            <button class="btn btn-border" type="submit">Create Account</button>  
                            <p>By clicking ‘Create Account’, you agree to our <a href="#" class="form-link">Privacy Policy <i class="fas fa-long-arrow-alt-right"></i></a></p>
                        </div>    
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// @ is an alias to /src
import SubBanner from '@/components/SubBanner.vue';

export default {
    name: 'signup',
    components: {
      SubBanner
  }
}
</script>

