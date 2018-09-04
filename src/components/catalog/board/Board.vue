<template lang="pug">

  section.catalog-board

    //- Search field
    div.board-search
      button(v-on:click="showCreateForm").btn.btn-green.btn-add + Добавить товар

      div.search
        input(type="text" v-model="searchCard").input.input-search

    //- List cat
    board-list(
      :filteredCatalogCard="filteredCatalogCard"
      @showEditForm="showEditForm"
      @deleteCard="deleteCard"
    )

</template>

<script>
  import BoardList from '@/components/catalog/board/Board-list';

  export default {
    name: 'board',
    components: { BoardList },
    props: ['catalogCards'],

    data() {
      return {
        searchCard: '',
      };
    },

    computed: {
      filteredCatalogCard() {
        return this.catalogCards.filter((card) => {
          console.log(card.name.toLowerCase().includes(this.searchCard.toLowerCase()));
          return card.name.toLowerCase().includes(this.searchCard.toLowerCase());
        });
      },
    },

    methods: {
      showCreateForm() {
        this.$emit('showCreateForm');
      },

      showEditForm(card) {
        this.$emit('showEditForm', card);
      },

      deleteCard(cardId) {
        this.$emit('deleteCard', cardId);
      },
    },
  };
</script>

<style lang="scss" scoped>

  .catalog-board {
    padding: 0 25px;
    background-color: #fff;
    box-shadow: 0 1px 0 0 #b3b3b3;
    border: solid 1px #e5e0e0;
    border-radius: 4px;
  }

  .board-search {
    padding: 30px 15px;

    .search {
      display: inline-block;
      vertical-align: middle;
      width: 677px;
    }
  }

  .btn-add {
    margin-right: 8px;
  }

</style>
