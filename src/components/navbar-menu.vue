<template>
  <div
    class="container d-flex position-relative mt-2 p-3 border-orange"
    id="navbar"
  >
    <b-nav class="nav text-center d-flex justify-content-center w-full w-100">
      <b-nav-item
        class="nav-link text-white fs-6"
        role="button"
        v-for="link in menu"
        :key="link"
      >
        {{ link.name }}
      </b-nav-item>
    </b-nav>
    <div
      class="buttonset position-absolute top-0 end-0 d-flex align-items-center h-100 me-4"
    >
      <div v-click-outside="onClickOutside" class="select position-absolute border-yellow">
        <a
          v-on:click="this.langDropdown = !this.langDropdown"
          class="d-flex align-items-center cursor-pointer"
        >
          <div class="d-flex">
            <img src="../assets/img/navbar/Union.svg" alt="" class="w-100" />
          </div>
          <p class="ms-1 mb-0">{{ selectedLang }}</p>
        </a>
        <div
          v-on:click="switchLang()"
          v-if="this.langDropdown"
          class="text-end mt-2"
        >
          <a class="mb-0 text-end">{{ otherLang }}</a>
        </div>
      </div>
      <button class="me-3 border-yellow text-white">LOG IN</button>
      <button class="btn-orange">SIGN UP</button>
      <div
        v-on:click="this.showMenu = !this.showMenu"
        role="button"
        class="d-none"
        id="burger"
      >
        <svg
          v-if="!this.showMenu"
          width="22"
          height="14"
          viewBox="0 0 22 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.66667 14H20.3333C20.975 14 21.5 13.475 21.5 12.8333C21.5 12.1917 20.975 11.6667 20.3333 11.6667H1.66667C1.025 11.6667 0.5 12.1917 0.5 12.8333C0.5 13.475 1.025 14 1.66667 14ZM1.66667 8.16667H20.3333C20.975 8.16667 21.5 7.64167 21.5 7C21.5 6.35833 20.975 5.83333 20.3333 5.83333H1.66667C1.025 5.83333 0.5 6.35833 0.5 7C0.5 7.64167 1.025 8.16667 1.66667 8.16667ZM0.5 1.16667C0.5 1.80833 1.025 2.33333 1.66667 2.33333H20.3333C20.975 2.33333 21.5 1.80833 21.5 1.16667C21.5 0.525 20.975 0 20.3333 0H1.66667C1.025 0 0.5 0.525 0.5 1.16667Z"
            fill="white"
          />
        </svg>
        <svg
          v-else
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.1667 2.47825L15.5217 0.833252L9.00004 7.35492L2.47837 0.833252L0.833374 2.47825L7.35504 8.99992L0.833374 15.5216L2.47837 17.1666L9.00004 10.6449L15.5217 17.1666L17.1667 15.5216L10.645 8.99992L17.1667 2.47825Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
  <div
    v-if="showMenu"
    class="container-fluid d-flex justify-content-center position-absolute start-0 px-0 w-100"
    id="BurgerMenu"
  >
    <div class="container d-flex flex-column px-0">
      <b-nav class="d-flex flex-column mb-5">
        <b-nav-item
          class="burger-link border-orange  w-100 text-white fs-5 mb-2 py-3 px-4"
          role="button"
          v-for="link in menu"
          :key="link"
        >
          {{ link.name }}
        </b-nav-item>
      </b-nav>
      <button class="py-3 px-4 text-white border-yellow mb-2">LOG IN</button><button class="py-3 px-4 btn-orange">SIGN UP</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      langDropdown: false,
      selectedLang: "RU",
      otherLang: "EN",
      menu: [
        { name: "About us", link: "#" },
        { name: "Brands", link: "#" },
        { name: "Commissions", link: "#" },
        { name: "News", link: "#" },
        { name: "Contact us", link: "#" },
        { name: "Careers", link: "#" },
      ],
    };
  },
  mounted() {
    this.$watch(
      () => this.showMenu,
      (val) => document.body.classList.toggle("no-overflow", val),
      { immediate: true }
    );
  },
  methods: {
    switchLang() {
      if (this.selectedLang === "RU") {
        this.selectedLang = "EN";
        this.otherLang = "RU";
      } else {
        this.selectedLang = "RU";
        this.otherLang = "EN";
      }
      this.langDropdown = false;
    },
    onClickOutside() {
      this.langDropdown = false;
    },
  },
};
</script>
