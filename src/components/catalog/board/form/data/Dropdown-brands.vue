<template lang="pug">

  div.data-line
    div.title Марка
    div.field
      div.dropdown.dropdown-cat

        input(
          v-model="searchBrand"
          v-on:click="toggle($event)"
          placeholder="Выберите марку").dropdown-label

        ul(v-if="opened").dropdown-items
          li(
            v-for="brand in filteredBrands"
            v-on:click="getBrand(brand)"
            ).dropdown-item {{ brand.name }}

</template>

<script>
  export default {
    name: 'dropdown-brands',
    props: ['brands', 'selectedBrand'],

    data() {
      return {
        opened: false,
        searchBrand: '',
      };
    },

    created() {
      this.searchBrand = this.selectedBrand.name;
    },

    computed: {
      filteredBrands() {
        return this.brands.filter((brand) => {
          console.log(brand.name.toLowerCase().includes(this.searchBrand.toLowerCase()));
          return brand.name.toLowerCase().includes(this.searchBrand.toLowerCase());
        });
      },
    },

    methods: {
      getBrand(brand) {
        this.$emit('getBrand', brand);
        this.searchBrand = brand.name;
        this.opened = false;
      },

      toggle(e) {
        this.opened = !this.opened;
        e.target.select();
      },
    },
  };
</script>