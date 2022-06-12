<template>
  <div class="container">
    <div class="maincontent">
      <div class="side_box">
        <div class="side_box_row">
          <div class="side_box_name">{{ $t("martialartview.name") }}</div>
          <div class="side_box_value">{{ $t("boxview.sidebox.name") }}</div>
        </div>
        <div class="side_box_row">
          <div class="side_box_name">{{ $t("martialartview.year") }}</div>
          <div class="side_box_value">{{ $t("boxview.sidebox.year") }}</div>
        </div>
        <div class="side_box_row">
          <div class="side_box_name">{{ $t("martialartview.author") }}</div>
          <div class="side_box_value">{{ $t("boxview.sidebox.author") }}</div>
        </div>
        <div class="side_box_row">
          <div class="side_box_name">{{ $t("martialartview.style") }}</div>
          <div class="side_box_value">{{ $t("boxview.sidebox.style") }}</div>
        </div>
        <div class="side_box_row">
          <div class="side_box_name">{{ $t("martialartview.type") }}</div>
          <div class="side_box_value">{{ $t("boxview.sidebox.type") }}</div>
        </div>
        <div class="side_box_row_last">
          <div class="side_box_name">{{ $t("martialartview.kind") }}</div>
          <div class="side_box_value">{{ $t("boxview.sidebox.kind") }}</div>
        </div>
      </div>
      <div class="section_title">
        {{ $t("martialartview.shortdescription") }}
      </div>
      <div class="section_description">
        {{ $t("boxview.shortdescription") }}
      </div>
      <div class="section_title">{{ $t("martialartview.content") }}</div>
      <div class="table_of_content">
        <div class="table_of_content_title">
          <div class="table_of_content_title_text">
            {{ $t("martialartview.content") }}
          </div>
          <div class="table_of_content_title_show" @click="show">
            {{ showhide }}
          </div>
        </div>
        <div class="table_of_content_row" :style="vis" @click="moveto(0)">
          1.{{ $t("martialartview.shortdescription") }}
        </div>
        <div class="table_of_content_row" :style="vis" @click="moveto('2')">
          2.{{ $t("martialartview.history") }}
        </div>
        <div class="table_of_content_row" :style="vis" @click="moveto('3')">
          3.{{ $t("martialartview.longdescription") }}
        </div>
        <div class="table_of_content_row" :style="vis" @click="moveto('4')">
          4.{{ $t("martialartview.funfact") }}
        </div>
        <div class="table_of_content_row" :style="vis" @click="moveto('5')">
          5.{{ $t("martialartview.characters") }}
        </div>
      </div>
      <img alt="box" class="img_box1" src="../assets/box.png" />
      <div class="section_title">{{ $t("martialartview.history") }}</div>
      <div class="section_description">
        {{ $t("boxview.history") }}
      </div>
      <div class="section_title">
        {{ $t("martialartview.longdescription") }}
      </div>
      <div class="section_description">
        {{ $t("boxview.longdescription") }}
      </div>
      <img alt="box Ali" class="img_box2" src="../assets/box2.png" />
      <div class="section_title">{{ $t("martialartview.funfact") }}</div>
      <div class="section_description">
        <p>
          {{ $t("boxview.funfact.one") }}
        </p>
        <p>
          {{ $t("boxview.funfact.two") }}
        </p>
        <p>
          {{ $t("boxview.funfact.three") }}
        </p>
        <p>
          {{ $t("boxview.funfact.four") }}
        </p>
      </div>
      <div class="section_title">{{ $t("martialartview.characters") }}</div>
      <div class="section_description">
        <p>
          {{ $t("boxview.characters.one") }}
        </p>
        <p>
          {{ $t("boxview.characters.two") }}
        </p>
        <p>
          {{ $t("boxview.characters.three") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      v: true,
      vis: { display: "flex" },
      showhide: "hide",
    };
  },
  methods: {
    show() {
      if (this.v == true) {
        this.vis = { display: "none" };
        this.v = false;
        this.showhide = "show";
      } else {
        this.vis = { display: "flex" };
        this.v = true;
        this.showhide = "hide";
      }
    },
    moveto(value) {
      setTimeout(() => {
        let el = this.$el.getElementsByClassName("section_title")[value];
        el.scrollIntoView();
      }, 0);
    },
  },
};
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
}
.side_box {
  display: flex;
  max-width: 30%;
  margin-right: 5%;
  margin-top: 25px;
  border: 2px solid #192371;
  border-top-width: 10px;
  border-bottom-width: 10px;
  background-color: rgba(0, 0, 0, 0);
  float: right;
  color: #3a3a3a;
  border-radius: 3px;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
}
.side_box_row {
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #192371;
  justify-content: space-between;
}
.side_box_row_last {
  display: flex;
  width: 100%;
  padding: 5px;
  justify-content: space-between;
}
.side_box_name {
  display: flex;
  margin-left: 2px;
  margin-right: 20px;
  font-weight: bold;
}

.side_box_value {
  display: flex;
  margin-right: 2px;
}
.section_title {
  display: flex;
  font-weight: bold;
  font-size: 1.3rem;
  margin-left: 2%;
  padding: 20px;
  padding-bottom: 10px;
  padding-left: 10px;
  color: #192371;
}

.section_description {
  font-size: 1rem;
  overflow-wrap: break-word;
  margin-left: 2%;
  padding: 10px;
  flex-wrap: wrap;
}

.table_of_content {
  display: flex;
  max-width: 20%;
  margin-left: calc(2% + 10px);
  border: 1px inset #19237149;
  background-color: rgba(0, 0, 0, 0);
  color: #3a3a3a;
  border-radius: 3px;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
}
.table_of_content_row {
  display: flex;
  border-top: 1px inset #19237149;
  padding: 2px;
}
.table_of_content_row:hover {
  display: flex;
  border-top: 1px inset #19237149;
  padding: 2px;
  color: blue;
  background-color: #7b89f0d2;
}
.table_of_content_title {
  display: flex;
  justify-content: space-between;
  padding: 2px;
}

.table_of_content_title_text {
  display: flex;
  margin-left: 5px;
  font-weight: bold;
  padding: 2px;
}
.table_of_content_title_show {
  display: flex;
  margin-right: 5px;
  font-size: 0.8rem;
  text-decoration: underline;
  color: blue;
  padding: 2px;
}
.img_box1 {
  width: 30%;
  float: right;
  margin-right: 5%;
}
.img_box2 {
  width: 30%;
  float: right;
  margin-right: 5%;
}
p {
  margin-top: 5px;
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
  }
  .side_box {
    display: none;
    max-width: 30%;
    margin-right: 5%;
    margin-top: 25px;
    min-height: 20vh;
    border: 2px solid #192371;
    border-top-width: 10px;
    border-bottom-width: 10px;
    background-color: rgba(0, 0, 0, 0);
    color: #3a3a3a;
    border-radius: 3px;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
  }
  .table_of_content {
    display: flex;
    max-width: 80%;
    margin-left: calc(2% + 10px);
    border: 1px inset #19237149;
    background-color: rgba(0, 0, 0, 0);
    color: #3a3a3a;
    border-radius: 3px;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
  }
  .img_box1 {
    display: none;
  }
  .img_box2 {
    display: none;
  }
}
@media (max-width: 1400px) {
  .img_box1 {
    width: 40%;
    float: right;
    margin-right: 5%;
  }
  .img_box2 {
    width: 40%;
    float: right;
    margin-right: 5%;
  }
}
@media (max-width: 900px) {
  .img_box1 {
    width: 55%;
    float: right;
    margin-right: 5%;
  }
  .img_box2 {
    width: 55%;
    float: right;
    margin-right: 5%;
  }
}
</style>
