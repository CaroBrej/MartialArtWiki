<template>
  <nav>
    <router-link class="home_button" to="/" @click="reset">{{
      $t("navbar.home")
    }}</router-link>
    <div class="navmenu">
      <img
        class="menuimg"
        @click="menushow"
        alt="menu button"
        src="../assets/navbarmenu.png"
      />
    </div>
    <div class="scroll__menu" :style="vis">
      <router-link to="/" @click="reset">{{ $t("navbar.home") }}</router-link>
      <router-link to="/about" @click="reset">{{
        $t("navbar.about")
      }}</router-link>
      <select
        v-model="MartialArt"
        @change="onChange($event)"
        class="martial_art"
      >
        <option disabled hidden value="">{{ $t("navbar.martialart") }}</option>
        <option class="nav-list" value="karate">Karate</option>
        <option class="nav-list" value="box">{{ $t("navbar.box") }}</option>
        <option class="nav-list" value="bjj">BJJ</option>
        <option class="nav-list" value="judo">Judo</option>
        <option class="nav-list" value="kickboxing">KickBoxing</option>
      </select>
      <select v-model="$i18n.locale" class="language">
        <option
          class="nav-list"
          v-for="(locale, i) in locales"
          :key="`locale-${i}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      opened: false,
      vis: { display: "none" },
      locales: ["pl", "en"],
      MartialArt: "",
    };
  },
  methods: {
    menushow() {
      if (this.opened == true) {
        this.opened = false;
        this.vis = { display: "none" };
      } else {
        this.opened = true;
        this.vis = { display: "flex" };
      }
    },
    onChange(event) {
      switch (event.target.value) {
        case "karate":
          this.$router.push({ path: "/karate" });
          break;
        case "box":
          this.$router.push({ path: "/box" });
          break;
        case "bjj":
          this.$router.push({ path: "/bjj" });
          break;
        case "judo":
          this.$router.push({ path: "/judo" });
          break;
        case "kickboxing":
          this.$router.push({ path: "/kickboxing" });
          break;
      }
    },
    reset() {
      this.MartialArt = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  max-height: 5vh;
  top: 0;
  font-size: 1.7rem;
  background-color: #000bac;
}

a {
  text-decoration: none;
  color: white;
  margin-right: 5%;
  width: 100%;
}

.navmenu {
  display: flex;
  width: 30%;
  justify-content: end;
  margin-right: 5%;
}

.menuimg {
  height: 90%;
  align-self: center;
}

.scroll__menu {
  height: 100vh;
  width: 70%;
  padding: 20px;
  display: flex;
  position: fixed;
  text-align: center;
  flex-direction: column;
  background-color: rgba(104, 149, 245, 1);
  row-gap: 10px;
  z-index: 10;
}
.language {
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border: 0px;
  font-size: 1.7rem;
  text-align: center;
  align-self: center;
  min-width: 10%;
}

.nav-list {
  color: white;
  background-color: #000bac;
}

.martial_art {
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border: 0px;
  font-size: 1.7rem;
  text-align: center;
  align-self: center;
  min-width: 30%;
}
.home_button {
  display: flex;
  align-self: center;
  font-size: 2rem;
  margin-left: 5px;
}
</style>
