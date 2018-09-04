<template lang="pug">

  nav.nav
    div.container
      ul.nav__list
        li.nav__item
          router-link(
            to="/"
            class="nav__link") Главная

        li.nav__item
          router-link(
            :to="{ name: 'сatalog' }"
            class="nav__link") Каталог

        li.nav__item
          router-link(
            :to="{ name: 'guide' }"
            class="nav__link") Style Giude

</template>

<script>
  export default {
    name: 'header-nav',
  };
</script>

<style scoped>
  .nav {
    background-color: #3e4c5a;
  }

  .nav__list::after {
    content: '';
    display: table;
    clear: both;
  }

  .nav .nav__item {
    float: left;
    display: block;
  }

  .nav .nav__item:first-of-type {
    margin-left: -20px;
  }

  .nav .nav__link {
    display: block;
    padding: 17px 20px 20px;
    font-size: 15px;
    line-height: 21px;
    font-weight: bold;
    text-decoration: none;
    color: #fef8ff
  }

  .nav .nav__link:hover {
    background-color: rgba(255, 255, 255, .14);
  }

  .nav .router-link-exact-active {
    background-color: rgba(255, 255, 255, .14);
  }

</style>