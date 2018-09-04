<template lang="pug">
  div.image-container
    h3.title-image Фотографиии товара

    form.images-form
      div.images-list

        cover-uploader(
          v-show="coverImage.crop === false"
          @addUploadedCoverImage="addUploadedCoverImage"
        )

        image-box(
          v-if="coverImage.crop === true"
          :image="coverImage"
          @deleteCoverImage="deleteCoverImage"
        )

        image-box(
          v-for="image in images"
          :image="image"
          :key="image.id"
          @deleteImage="deleteImage"
        )

        image-uploader(
          :imagesLength="imagesLength"
          @addUploadedImage="addUploadedImage"
        )

        cover-popup(
          v-if="showCoverPopup"
          :src="coverImage.src"
          @getPreviewCover="getPreviewCover"
          @cancelPopupCrop="cancelPopupCrop"
        )

</template>

<script>
  import CoverUploader from '@/components/catalog/board/form/uploader/Cover-uploader';
  import ImageUploader from '@/components/catalog/board/form/uploader/Image-uploader';
  import ImageBox from '@/components/catalog/board/form/uploader/Image-box';
  import CoverPopup from '@/components/catalog/board/form/uploader/Cover-popup';

  export default {
    name: 'uploader',
    components: { CoverUploader, ImageUploader, ImageBox, CoverPopup },
    props: ['photo', 'cover'],

    data() {
      return {
        showCoverPopup: false,
        images: [],
        coverImage: {
          cover: true,
          crop: false,
        },
      };
    },

    created() {
      this.images = this.photo;
      this.coverImage = Object.assign({}, this.coverImage, this.cover);
    },

    computed: {
      imagesLength() {
        return !(this.images.length >= 5);
      },
    },

    methods: {

      /*
       * @param { string } image / base64
       * @param { oblect } data
      */
      addUploadedImage(image, data) {
        if (this.images.length <= 4) {
          const images = this.images.slice();
          const newImage = {};

          newImage.id = this.generateRandomId();
          newImage.src = image;
          newImage.data = data;

          images.push(newImage);
          this.images = images;

          this.$emit('getUploadedImage', this.images);
        }
      },

      /*
       * @param { string } image / base64
       * @param { oblect } data
      */
      addUploadedCoverImage(image, data) {
        const cover = this.coverImage;

        cover.id = this.generateRandomId();
        cover.src = image;
        cover.data = data;
        this.showCoverPopup = true;
      },

      /*
       * @param { string } image / base64
      */
      getPreviewCover(image) {
        this.coverImage.src = image;
        this.coverImage.crop = true;
        this.showCoverPopup = false;

        this.$emit('getUploadedCoverImage', this.coverImage);
      },

      /*
       * @param { number } id removed image
      */
      deleteImage(id) {
        console.log('Удаляем фото');
        const images = this.images.slice();
        const newImages = images.filter(image => image.id !== id);

        this.images = newImages;

        this.$emit('getUploadedImage', this.images);
      },

      /*
       * @param { number } id removed Cover Image
      */
      deleteCoverImage(id) {
        console.log('Удаляем обложку');
        console.log(id);
        this.coverImage.crop = false;

        this.$emit('getUploadedCoverImage', {});
      },

      /*
       * @return { number }
      */
      generateRandomId() {
        return Math.floor((1 + Math.random()) * 0x10000);
      },

      cancelPopupCrop() {
        this.showCoverPopup = false;
      },
    },
  };
</script>

<style lang="scss">

  .image-container {
    min-width: 220px;
    max-width: 316px;
    padding: 15px 11px;
    border-radius: 4px;
    background: #f3f3f3;

    .title-image {
      margin: 0;
      margin-bottom: 15px;
      padding: 0 4px;
      font-size: 17px;
      font-weight: bold;
      color: #5a595e;
    }
  }

  .images-list {
    position: relative;
    display: flex;
    flex-wrap: wrap;

    // &::after {
    //   content: '';
    //   display: table;
    //   clear: both;
    // }

    &::before {
      content: 'Обложка';
      position: absolute;
      top: 100px;
      left: 22px;
      font-size: 12px;
      color: #5a595e;
    }
  }

  .box {
    // float: left;
    width: 90px;
    height: 90px;
    margin: 0 4px;
    border: solid 1px #e8e8e8;
    border-radius: 4px;
    background-color: #fbfbfa;

    &.cover-box {
      margin-bottom: 40px;
    }
  }

  .upload-cover-box,
  .upload-box {
    padding-top: 20px;
    text-align: center;

    .input-image {
      display: none;
    }

    .add-image {
      font-size: 12px;
      color: #5a595e;
      cursor: pointer;
    }
  }

  .upload-cover-box {
    position: relative;
    margin-bottom: 40px;
  }

</style>