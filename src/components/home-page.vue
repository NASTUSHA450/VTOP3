<template>
  <div
    class="container-fluid position-relative d-flex justify-content-center px-0"
  >
    <div
      class="container d-flex justify-content-center position-relative"
      id="banner"
    >
      <div
        class="banner-context text-white w-100 d-flex justify-content-between align-items-center"
      >
        <div>
          <h1>Lorem IPSU<br /><span>OPEN</span></h1>
          <p class="mt-3 mb-5">Maybe You Maybe Me.</p>
          <button class="btn-orange w-100 p-3">PARTNER</button>
        </div>

        <div>
          <h1 class="blub text-center">BLUB</h1>
          <div class="blub-box px-3">
            <div class="blub-scroll p-4">
              <div v-for="box in blubContent" :key="box" class="box mb-3">
                <p class="mb-1 box-text text-start text-white">{{ box.text }}</p>
                <span>{{ box.data }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="running-lines-vertical d-flex position-absolute bottom-0 left-0"
    >
      <div class="line" id="line1"></div>
      <div class="mx-3 line" id="line2"></div>
      <div class="line" id="line3"></div>
    </div>
    <div class="running-lines-horizontal position-absolute left-0 w-100 ">
      <div class="line-hor"></div>
      <div class="my-3 line-hor"></div>
      <div class="line-hor"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage",

  data() {
    return {
      timer: null,
      x: 0,
      blubContent: [
        {
          text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
          data: "10.02.2023",
        },
        {
          text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
          data: "10.02.2023",
        },
        {
          text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
          data: "10.02.2023",
        },
        {
          text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
          data: "10.02.2023",
        },
        {
          text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
          data: "10.02.2023",
        },
        {
          text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
          data: "10.02.2023",
        },
      ],
      windowWidth: window.innerWidth,
    };
  },

  methods: {
    move() {
      this.x = this.x + 1;
      let lines = document.getElementsByClassName("line");
      let linesHor = document.getElementsByClassName("line-hor");
      for (let i = 0; i < lines.length; i++) {
        if (i == 1) {
          lines[i].style.backgroundPositionY = -this.x + "px";
        } else {
          lines[i].style.backgroundPositionY = this.x + "px";
        }
      }
      for (let i = 0; i < linesHor.length; i++) {
        if (i == 1) {
          linesHor[i].style.backgroundPositionX = -this.x + "px";
        } else {
          linesHor[i].style.backgroundPositionX = this.x + "px";
        }
      }
    },
    handleWindowSizeChange() {
      this.windowWidth = window.innerWidth;
    },
    setPosition() {},
  },
  mounted() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    this.timer = setInterval(() => {
      this.move();
    }, 50);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  },
};
</script>
<style lang="scss">
</style>
