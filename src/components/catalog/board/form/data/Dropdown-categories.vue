<template lang="pug">

  div.data-line
    div.title Категория
    div.field
      div.dropdown.dropdown-cat

        div(v-on:click="toggle").dropdown-label {{ selectedCat.name }}

        ul(v-if="opened").dropdown-items
          li(
            v-for="cat in categories"
            v-on:click="getCategory(cat)"
          ).dropdown-item {{ cat.name }}

</template>

<script>
  export default {
    name: 'dropdown-categories',
    props: ['categories', 'selectedCat'],

    data() {
      return {
        opened: false,
      };
    },

    methods: {
      getCategory(cat) {
        this.$emit('getCategory', cat);
        this.opened = false;
      },

      toggle() {
        this.opened = !this.opened;
      },
    },
  };
</script>

<style lang="scss">

  .dropdown {
    position: relative;
    width: 100%;

    &:hover .dropdown-label,
    &:hover .dropdown-items {
      border: solid 1px #717274;
    }

    .dropdown-label {
      width: 100%;
      height: 50px;
      padding: 0 11px;
      font-size: 19px;
      line-height: 45px;
      color: #5b5a5f;
      background-color: #fff;
      border-radius: 4px;
      border: solid 1px #bfbfbf;
      cursor: pointer;
    }

    .dropdown-items {
      position: absolute;
      top: 51px;
      width: 360px;
      max-height: 289px;
      border-radius: 4px;
      background-color: #fff;
      border: solid 1px #bfbfbf;
      padding: 0;
      overflow-y: auto;
      z-index: 100;

      .dropdown-item {
        display: block;
        padding: 11px 14px 13px;
        font-size: 17px;
        color: #5a595e;
        cursor: pointer;

        &:hover {
          background-color: #eeeaea;
        }
      }
    }
  }

</style>
