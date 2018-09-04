<template lang="pug">

  div.page.catalog-page
    div(v-if="toggleShowPage").container.toggle-container
      h1.page-title {{ title }}

      div.inner-container
        //- catalog
        div.content
          board(
            :catalogCards="catalogCards"
            @showPageCatalog="showPageCatalog"
            @showCreateForm="showCreateForm"
            @showEditForm="showEditForm"
            @deleteCard="deleteCard"
          )

        //- Menu categories
        aside.aside
          categories(
            :categories="categories"
          )

    main-form(
      v-if="toggleShowForm"
      :card="card"
      @createCard="createCard"
      @udpateCard="udpateCard"
    )

</template>

<script>
  import Board from '@/components/catalog/board/Board';
  import Categories from '@/components/catalog/categories/Category-list';
  import MainForm from '@/components/catalog/board/form/Form';
  // import { getCatalogItems } from '@/api';

  const catalogJson = require('../catalog.js');
  const categoriesJson = require('../categories.js');

  export default {
    name: 'catalog',
    components: { Board, Categories, MainForm },

    data() {
      return {
        title: 'Каталог',

        toggleShowPage: true,
        toggleShowForm: false,

        catalogCards: catalogJson,

        card: null,

        categories: categoriesJson,
      };
    },

    // created() {
    //   getCatalogItems();
    // },

    methods: {
      // Переключение состояния страницы
      showPageCatalog() {
        this.toggleShowPage = !this.toggleShowPage;
        this.toggleShowForm = !this.toggleShowForm;
      },

      // Показать форму создания товара
      showCreateForm() {
        this.card = null;
        this.showPageCatalog();
      },

      // Показать форму с редактируемым товаром
      showEditForm(card) {
        this.card = card;
        this.showPageCatalog();
      },


      //--------------
      // Cards methods
      //---

      // Create
      createCard(newCard) {
        const newCatalogCards = this.catalogCards.slice();

        newCatalogCards.unshift(newCard);
        this.catalogCards = newCatalogCards;

        this.showPageCatalog();
      },

      // Update
      udpateCard(card) {
        const catalogCards = this.catalogCards.slice();
        catalogCards.forEach((el, index, array) => {
          if (el.id === card.id) {
            array.splice(index, 1, card);
          }
        });

        this.catalogCards = catalogCards;
        this.showPageCatalog();
      },

      // Delete
      deleteCard(cardId) {
        const catalogCards = this.catalogCards.slice();
        const newCatalogCards = catalogCards.filter(el => el.id !== cardId);

        this.catalogCards = newCatalogCards;
      },
    },
  };
</script>

<style lang="scss" scoped>

  .inner-container {
    &:after {
      content: '';
      display: table;
      clear: both;
    }

    .content {
      float: left;
      width: calc(100% - 303px - 15px);
      margin-right: 15px;
    }

    .aside {
      float: left;
      width: 303px;
      // background-color: #fff;
    }
  }

</style>
