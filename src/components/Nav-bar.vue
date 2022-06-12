<template>
  <nav>
    <div class="navmain">
      <div class="home" @click="reset">
        <router-link to="/">{{ $t("navbar.home") }}</router-link>
      </div>
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
    </div>
    <div class="navmenu">
      <router-link to="/about" @click="reset">{{
        $t("navbar.about")
      }}</router-link>
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
  name: "LocaleSwitcher",
  data() {
    return {
      locales: ["pl", "en"],
      MartialArt: "",
    };
  },
  methods: {
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
  width: 80vw;
  margin-left: 10%;
  margin-top: 5%;
  top: 0;
  font-size: 1.7rem;
  background-color: #000bac;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

a {
  text-decoration: none;
  color: white;
  margin-right: 5%;
}

.navmenu {
  display: flex;
  justify-content: end;
  color: white;
  border-left: 2px solid rgba(104, 149, 245, 0.815);
  padding-left: 12px;
}

.navmain {
  margin-left: 1%;
  display: flex;
  color: white;
}

.language {
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border: 0px;
  font-size: 1rem;
  border-left: 2px solid rgba(104, 149, 245, 0.815);
}

.nav-list {
  color: white;
  background-color: #000bac;
}

.martial_art {
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border: 0px;
  font-size: 1.5rem;
  padding-right: 5px;
  border-right: 2px solid rgba(104, 149, 245, 0.815);
}
.home {
  margin-right: 5px;
  padding-right: 5px;
  border-right: 2px solid rgba(104, 149, 245, 0.815);
}
</style>
