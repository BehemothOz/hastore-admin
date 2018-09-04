<template lang="pug">

  //- div.page.catalog-page
  div.container
    h1.page-title {{ title }}

    div.container-form
      form-basic-data(
        :cardData="cardData"
        @getCategory="getCategory"
        @getBrand="getBrand"

        @getUploadedImage="getUploadedImage"
        @getUploadedCoverImage="getUploadedCoverImage"
      )

      form-modifications(
        :modifications="cardData.mods"
        @addedRowMod="addedRowMod"
        @initEmptyRowMod="initEmptyRowMod"
        @deleteRowMod="deleteRowMod"
      )

      form-reviews(
        :reviews="cardData.reviews"
        @addedReview="addedReview"
        @updateReview="updateReview"
        @deleteReview="deleteReview"
      )

      section.panel.panel-buttons
        button(v-on:click="resetCard").btn.btn-white Отмена

        button(v-if="!editMode" v-on:click="createCard").btn.btn-green Создать
        button(v-else v-on:click="udpateCard").btn.btn-green Обновить

</template>

<script>
  // import axios from 'axios';
  import FormBasicData from '@/components/catalog/board/form/data/Data';
  import FormModifications from '@/components/catalog/board/form/modifications/Modifications';
  import FormReviews from '@/components/catalog/board/form/reviews/Reviews';

  export default {
    name: 'catalog-form',
    components: { FormBasicData, FormModifications, FormReviews },
    props: ['card'],

    data() {
      return {
        title: '',

        editMode: false, // Создание или редактирование
        beforeEditingCache: {},

        cardData: {
          category: '',
          code: '',
          name: '',
          description: '',
          stock: false,
          meta: {
            brand: '',
            model: '',
            price: '',
          },
          mods: [],
          photo: [],
          cover: {},
          reviews: [],
        },
      };
    },

    // Инициализируем data() при создании формы
    created() {
      if (this.card !== null) {
        this.title = 'Редактирование товара';
        this.cardData = this.card;
        this.editMode = true;
      } else {
        this.title = 'Создание товара';
      }

      // TODO Разобраться, почему не копируется объект meta вместе с CARD
      // Копирование объекта
      const cacheMetaCard = { meta: Object.assign({}, this.cardData.meta) };
      this.beforeEditingCache = Object.assign({}, this.cardData, cacheMetaCard);
    },

    methods: {
      getCategory(cat) {
        this.cardData.category = cat.name;
      },

      getBrand(brand) {
        this.cardData.meta.brand = brand.name;
      },

      getUploadedImage(data) {
        let foto = this.cardData.photo.slice();
        foto = data;
        this.cardData.photo = foto;
      },

      getUploadedCoverImage(data) {
        this.cardData.cover = data;
        console.log(data);
      },

      //-------------
      // Card methods
      //-------

      // Create
      createCard() {
        // const formData = new FormData();

        // for (let i = 0; i < this.cardData.photo.length; i += 1) {
        //   formData.append('foto', this.cardData.photo[i].data);
        // }

        // // console.log(Array.from(formData.entries()));
        // axios.post('/random/address', formData)
        //   .then(response => console.log(response))
        //   .catch(error => console.log(error.response.status));


        // ======================================================

        const newCard = this.cardData;
        newCard.id = this.generateRandomId();

        this.$emit('createCard', newCard);
      },

      // Update
      udpateCard() {
        this.$emit('udpateCard', this.cardData);
      },

      // Reset
      resetCard() {
        // const formData = new FormData();

        // [...Object.entries(this.cardData)].forEach((e) => {
        //   if (e[0] !== 'photo' && e[0] !== 'cover') {
        //     // console.log(e);
        //     formData.append(e[0], JSON.stringify(e[1]));
        //   }
        // });

        // axios.post('/random/address', formData).then(response => console.log(response));


        // ======================================================
        this.$emit('udpateCard', this.beforeEditingCache);
      },


      //---------------------
      // Modification methods
      //---------

      addedRowMod(newRowId) {
        const modifications = this.cardData.mods.slice();
        const newRowMod = { id: newRowId, empty: true };

        modifications.push(newRowMod);
        this.cardData.mods = modifications;
      },

      initEmptyRowMod(emptyRow) {
        const modifications = this.cardData.mods.slice();

        modifications.forEach((mod, index, array) => {
          if (mod.id === emptyRow.id) {
            array.splice(index, 1, emptyRow);
          }
        });

        this.cardData.mods = modifications;
      },

      deleteRowMod(id) {
        const modifications = this.cardData.mods.slice();
        const newModifications = modifications.filter(row => row.id !== id);

        this.cardData.mods = newModifications;
      },

      //----------------
      // Rewiews methods
      //-------

      // Add
      addedReview(review) {
        const reviews = this.cardData.reviews.slice();

        reviews.unshift(review);
        this.cardData.reviews = reviews;
      },

      // Update
      updateReview(review) {
        const reviews = this.cardData.reviews.slice();

        reviews.forEach((el, index, array) => {
          if (el.id === review.id) {
            array.splice(index, 1, review);
          }
        });

        this.cardData.reviews = reviews;
      },

      // Delete
      deleteReview(id) {
        const reviews = this.cardData.reviews.slice();
        const newReviews = reviews.filter(review => review.id !== id);

        this.cardData.reviews = newReviews;
      },


      //--------
      // Helpers
      //----
      generateRandomId() {
        return Math.floor((1 + Math.random()) * 0x10000);
      },
    },
  };
</script>

<style lang="scss">

  .panel {
    margin-bottom: 20px;
    background-color: #fff;
    box-shadow: 0 1px 0 0 #b3b3b3;
    border: solid 1px #e5e0e0;
    border-radius: 4px;

    &:nth-last-child(2) {
      margin-bottom: 0;
      border-radius: 4px 4px 0 0;
    }
  }

  .panel-head {
    display: flex;
    justify-content: space-between;
    padding: 30px;
  }

  .panel-title {
    margin: 0;
    font-size: 17px;
    font-weight: bold;
    color: #5a595e;
  }

  .panel-buttons {
    margin-bottom: 0;
    padding: 35px 30px;
    border-top: none;
    border-radius: 0 0 4px 4px;
    text-align: right;

    button:last-of-type {
      margin-left: 8px;
    }
  }

</style>