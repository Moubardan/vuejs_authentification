
<template>
  <div class="container">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">{{ user.displayName }}</h5>
        <p class="card-text">{{ user.email }}</p>
        <button type="submit" class="btn btn-danger" @click="logout()">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  data() {
    return {
      user: '',
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = '';
      }
    });
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push("/login");
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
