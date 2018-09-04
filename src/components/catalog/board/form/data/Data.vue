<template lang="pug">

  section.panel.panel-data
    //- left
    div.data-fill
      //- line
      dropdown-categories(
        :categories="categories"
        :selectedCat="selectedCat"
        @getCategory="getCategory"
      )
      //- v-model="selectedCat"

      dropdown-brands(
        :brands="brands"
        :selectedBrand="selectedBrand"
        @getBrand="getBrand"
      )

      //- line
      div.data-line
        div.title Модель товара
        div.field
          input(
            v-model.trim="cardData.meta.model"
            type="text"
            placeholder="Введите модель товара").input

      //- line
      div.data-line
        div.title Артикул товара
        div.field
          input(
            v-model.trim="cardData.code"
            type="number"
            placeholder="Введите артикул товара").input

      //- line
      div.data-line
        div.title Отзыв в карточке товара
        div.field
          button.btn-string Выбрать

      //- line
      div.data-line.data-description
        div.title Описание товара
        div.field
          textarea(
            v-model.trim="cardData.description"
          ).textarea

      //- line
      div.data-line.data-cost
        div.title Стоимость от
        div.field
          input(
            v-model.trim="cardData.meta.price"
            type="number"
            placeholder="Стоимость от").input
          span.cost-desc руб. за 1 шт.

      //- line
      div.data-line
        div.title
        div.field
          label.check-label
            input(type="checkbox" v-model="cardData.stock").input-checkbox
            span.check-tip Товар в наличии

    //- right
    div.data-images
      uploader(
        :photo="cardData.photo"
        :cover="cardData.cover"
        @getUploadedImage="getUploadedImage"
        @getUploadedCoverImage="getUploadedCoverImage"
      )

</template>

<script>
  import DropdownCategories from '@/components/catalog/board/form/data/Dropdown-categories';
  import DropdownBrands from '@/components/catalog/board/form/data/Dropdown-brands';
  import Uploader from '@/components/catalog/board/form/uploader/Uploader';

  export default {
    name: 'form-basic-data',
    components: { DropdownCategories, DropdownBrands, Uploader },
    props: ['cardData'],

    data() {
      return {
        categories: [
          {
            id: 1,
            name: 'Диски для внедорожников',
          },
          {
            id: 2,
            name: 'Диски для легковых',
          },
          {
            id: 3,
            name: 'Комплектующие',
          },
          {
            id: 4,
            name: 'Свет',
          },
          {
            id: 5,
            name: 'Тюнинг',
          },
          {
            id: 6,
            name: 'Шины',
          },
        ],
        selectedCat: {},

        brands: [
          {
            id: 1,
            name: 'BMW',
          },
          {
            id: 2,
            name: 'Audi',
          },
          {
            id: 3,
            name: 'Hummer',
          },
          {
            id: 4,
            name: 'Cherry',
          },
          {
            id: 5,
            name: 'Infinity',
          },
          {
            id: 6,
            name: 'Mersedes',
          },
          {
            id: 7,
            name: 'Opel',
          },
          {
            id: 8,
            name: 'Lada',
          },
          {
            id: 9,
            name: 'Kia',
          },
          {
            id: 10,
            name: 'Ferrary',
          },
          {
            id: 11,
            name: 'Toyota',
          },
        ],
        selectedBrand: {},
      };
    },

    // Запись в selectedCat и в selectedBrand
    created() {
      this.selectedCat = { name: (this.cardData.category) ? this.cardData.category : 'Выберите категорию' };

      this.selectedBrand = { name: (this.cardData.meta.brand) ? this.cardData.meta.brand : '' };
    },

    methods: {
      getUploadedImage(data) {
        this.$emit('getUploadedImage', data);
      },

      getUploadedCoverImage(data) {
        this.$emit('getUploadedCoverImage', data);
      },

      getCategory(cat) {
        this.selectedCat = cat;
        this.$emit('getCategory', cat);
      },

      getBrand(brand) {
        this.selectedBrand = brand;
        this.$emit('getBrand', brand);
      },
    },
  };

</script>

<style lang="scss">

  .panel-data {
    padding: 80px 0 30px;

    &::after {
      content: '';
      display: table;
      clear: both;
    }

    .data-fill {
      float: left;
      width: 800px;
      margin-right: 60px;

      min-height: 50px;
      // background-color: lightgreen;
    }

    .data-images {
      float: left;
      width: calc(100% - 860px);

      // min-height: 50px;
      // background-color: lightblue;
      // outline: 1px solid red;
    }

    .data-line {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 48px;

      &:last-of-type {
        margin-bottom: 0;
      }

      .title {
        font-size: 17px;
        font-weight: bold;
        color: #5a595e;
      }

      .field {
        width: 360px;
        margin-left: 25px;
      }

      &.data-description {
        align-items: start;

        .title {
          margin-top: 13px;
        }
      }

      &.data-cost {
        .field {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .input {
          width: 230px;
        }

        .cost-desc {
          font-size: 19px;
          text-align: left;
          color: #141414;
        }
      }
    }
  }

</style>