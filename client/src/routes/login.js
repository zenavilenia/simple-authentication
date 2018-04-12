Vue.component('login', {
  name: 'login',
  template: `
    <form>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email">
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd">
      </div>
      <div class="checkbox">
        <label><input type="checkbox"> Remember me</label>
      </div>
      <button type="submit" class="btn btn-default" @click="signin">Submit</button>
    </form>
  `,
  data: function () {
    return {

    }
  },
  methods: {
    signin: function() {
      axios.post('http://localhost:3000/signin', {
        email: this.email,
        password: this.password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
})