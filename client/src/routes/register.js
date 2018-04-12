Vue.component('register', {
  name: 'register',
  template: `
    <div>
      <h2>Registration</h2>
      <br/>
      <form class="form" role="form">
        <div class="form-group">
          <p>Email: <span id='error'> {{erremail}} </span></p>
          <input id="regis_email" placeholder="Email" class="form-control form-control-sm" type="text" required="" v-model="email" v-bind:style="{ border: emailbordercolor }">
        </div>
        <div class="form-group">
            <p>Password: <span id='error'> {{errpassword}} </span></p>
            <input id="regis_pwd" placeholder="Password" class="form-control form-control-sm" type="password" required="" v-model="password" v-bind:style="{ border: passwordbordercolor }">
        </div>
        <div class="form-group">
            <p>Confirm Password: <span id='error'> {{errconfirmpassword}} </span></p>
            <input placeholder="Password" class="form-control form-control-sm" type="password" required="" v-model="confirmpassword" v-bind:style="{ border: confirmpasswordbordercolor }">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block" @click="regis">Register</button>
        </div>
      </form>
    </div>
  `,
  props: [],
  data: function () {
      return {
        email: '',
        emailbordercolor: '',
        erremail: '',
        password: '',
        passwordbordercolor: '',
        errpassword: '',
        confirmpassword: '',
        confirmpasswordbordercolor: '',
        errconfirmpassword: ''
      }
  },
  methods: {
    isEmailValid: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email)
    },
    validateEmail: function () {
      var isEmailValid = this.isEmailValid(this.email)
   
      if(!isEmailValid) {
        this.emailbordercolor = '2px solid red'
        this.erremail = 'email is invalid'
      } else {
        this.emailbordercolor = ''
        this.erremail = ''
      }
    },
    isPasswordValid: function (password) {
      var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
      return re.test(password)
    },
    validatePassword: function () {
      let isPasswordValid = this.isPasswordValid(this.password)

      if(!isPasswordValid) {
        this.passwordbordercolor = '2px solid red'
        this.errpassword = 'password is invalid'
      } else {
        this.passwordbordercolor = ''
        this.errpassword = ''
      }
    },
    validateConfirmPassword: function () {
      if(this.password != this.confirmpassword) {
        this.confirmpasswordbordercolor = '2px solid red'
        this.errconfirmpassword = 'password is different'
      } else {
        this.confirmpasswordbordercolor = ''
        this.errconfirmpassword = ''
      }
    },
    regis: function() {
      if(this.isEmailValid(this.email) && this.isPasswordValid(this.password)) {
        axios.post('http://localhost:3000/register', {
          email: this.email,
          password: this.password
        })
        .then(function (response) {
          console.log(response);
          alert('register success')
        })
        .catch(function (error) {
          console.log(error);
        });
      } else {
        alert('email atau password is not valid')
      }
    } 
  },
  watch: {
    email: function () {
      this.validateEmail()
    },
    password: function () {
      this.validatePassword()
    },
    confirmpassword: function () {
      this.validateConfirmPassword()
    }
  }
})