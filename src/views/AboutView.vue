<template>
  <div class="container">
    <div class="maincontent">
      <div class="section_title" id="first">{{ $t("aboutview.how") }}</div>
      <div class="section_text">
        {{ $t("aboutview.howtext") }}
      </div>
      <div class="section_title">{{ $t("aboutview.plugins") }}</div>
      <div class="section_text">
        {{ $t("aboutview.pluginstext") }}
      </div>
      <div class="section_title">{{ $t("aboutview.color") }}</div>
      <div class="section_text">
        {{ $t("aboutview.colortext") }}
      </div>
      <div class="section_title">{{ $t("aboutview.extras") }}</div>
      <div class="section_text">
        {{ $t("aboutview.extrastext") }}
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.maincontent {
  min-height: 80vh;
  width: 80vw;
  /*border: 2px solid rgba(245, 104, 104, 0.815);*/
  border-top: 0px;
  margin-left: 10%;
  background-color: #b7bde1;
  color: #3a3a3a;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  flex-wrap: wrap;
}
.section_title {
  display: flex;
  font-weight: bold;
  font-size: 2rem;
  padding: 20px;
  color: #192371;
  justify-content: center;
  text-align: center;
}

.section_text {
  display: flex;
  padding: 10%;
  padding-top: 0px;
  padding-bottom: 10px;
  justify-content: center;
  font-size: 1.3rem;
  text-align: center;
}
#first {
  padding-top: 10%;
}
@media (max-width: 640px) {
  .maincontent {
    min-height: 100vh;
    width: 100%;
    /*border: 2px solid rgba(245, 104, 104, 0.815);*/
    border-top: 0px;
    margin-left: 0%;
    background-color: #b7bde1;
    color: #3a3a3a;
    flex-wrap: wrap;
  }
}
</style>
