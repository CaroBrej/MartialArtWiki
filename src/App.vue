<template>
  <div class="container">
    <div class="navbar">
      <NavBar />
    </div>
    <div class="mobile__navbar">
      <NavBarMobile />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/Nav-bar.vue";
import NavBarMobile from "@/components/Nav-bar-mobile.vue";
export default {
  components: {
    NavBar,
    NavBarMobile,
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  background-color: #5d71e2;
  min-height: 100vh;
  width: 100%;
  padding-bottom: 30px;
}
.mobile__navbar {
  display: none;
}
.navbar {
  display: flex;
}

@media (max-width: 640px) {
  .mobile__navbar {
    display: flex;
  }
  .navbar {
    display: none;
  }
  .container {
    background-color: rgb(59, 57, 54);
    min-height: 100vh;
    width: 100vw;
    color: white;
  }
}
</style>
