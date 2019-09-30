<template>
    <div>
        <sub-banner maintitle="Welcome to Ave" subtext="Sign in or register"></sub-banner>
        <section class="signup">
            <div class="form container">
                <div class="form__col">
                    <form class="form__col--left" @submit.prevent="SubmitForm">
                        <legend class="form__header">Sign In</legend>
                        <input type="email" class="form__input-box" id="email" v-validate="'required|email'" name="signin email" placeholder="Your Email..">
                            <span class="form__input--error" v-show="errors.has('signin email')">{{ errors.first('signin email') }}</span>
                        <input class="form__input-box" type="password" id="password" v-validate="'required|min:6'" name="password" placeholder="Your Password..">
                            <span class="form__input--error">{{errors.first('password')}}</span>
                        <div class="form__block">
                            <button class="btn btn-border" type="submit">Sign in</button>
                            <a href="#" class="form__reset">Forgot your Password <i class="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </form>
                </div>
                <div class="form__col">
                    <form class="form__col--right" action="sign-up.html" method="post">
                        <legend class="form__header">Register</legend>
                        <input type="email" class="form__input-box" id="remail" v-validate="'required|email'" name="register email" placeholder="Your Email..">
                        <span class="form__input--error" v-show="errors.has('register email')">{{ errors.first('register email') }}</span>
                        <input class="form__input-box" type="password" id="registerpassword" v-validate="'required|min:6'" name="registerpassword" placeholder="Your Password..">
                            <span class="form__input--error">{{errors.first('registerpassword')}}</span>
                        <input class="form__input-box" type="password" id="confirmpassword" v-validate="'required|confirmed:registerpassword'" name="confirmpassword" placeholder="Confirm Password..">
                            <span class="form__input-error">{{errors.first('confirmpassword')}}</span>
                        <div class="form__updates">
                            <label class="checkbox">
                                <input type="checkbox" class="checkbox__input" id="exclusive" value="exclusive_register" name="user_exclusive">
                                <span class="checkbox__value"></span>
                                <p>Sign up for exclusive updates, discounts, new arrivals, contests, and more!</p>   
                            </label>  
                        </div>
                        <div class="form__block">
                            <button class="btn btn-border" type="submit">Create Account</button>  
                            <p class="form__create">By clicking ‘Create Account’, you agree to our <a href="#" class="form__policy">Privacy Policy <i class="fas fa-long-arrow-alt-right"></i></a></p>
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

