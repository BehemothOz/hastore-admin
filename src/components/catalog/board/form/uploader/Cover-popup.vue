<template lang="pug">

  div.popup-crop-overlay
    div.popup-crop
      div.popup-crop-header
        h2.title Кадрирование изображения
        span(v-on:click="cancelPopupCrop").popup-crop-close

      div.popup-crop-body
        cover-crop(
          :src="src"
          @getCropper="getCropper"
        )

      div.popup-crop-footer
        button(v-on:click="rotate").btn.btn-rotate Перевернуть
        button(v-on:click="cancelPopupCrop").btn.btn-white Отмена
        button(v-on:click="getPreviewCover").btn.btn-green Сохранить

</template>

<script>
  import CoverCrop from '@/components/catalog/board/form/uploader/Cover-crop';

  export default {
    name: 'cover-popup',
    components: { CoverCrop },
    props: ['src'],

    data() {
      return {
        cropper: null,
      };
    },

    methods: {
      getCropper(cropper) {
        this.cropper = cropper;
      },

      rotate() {
        this.cropper.rotate(45);
      },

      cancelPopupCrop() {
        this.$emit('cancelPopupCrop');
      },

      getPreviewCover() {
        const previewSize = { width: 90, height: 90 };
        const canvas = this.cropper.getCroppedCanvas(previewSize);
        // console.log(this.cropper.getCropBoxData());
        this.$emit('getPreviewCover', canvas.toDataURL());
      },
    },
  };
</script>

<style lang="scss">
  .popup-crop-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
    z-index: 9998;
    overflow-y: auto;
  }

  .popup-crop {
    position: absolute;
    top: 30px;
    left: 50%;
    width: 570px;
    margin-left: -285px;
    margin-bottom: 30px;
    background-color: #fff;
    border: solid 1px #e8e8e8;
    border-radius: 4px;
    box-shadow: 0 1px 0 0 #bbbbbb;
  }

  .popup-crop-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 30px;
    background-color: #f7f7f7;
    border-bottom: 1px solid #e8e8e8;

    .title {
      margin: 0;
      font-size: 19px;
      color: #9fa0a7;
    }

    .popup-crop-close {
      display: block;
      width: 11px;
      height: 11px;
      background: url('~@/assets/img/icons/ic_close.svg') no-repeat center;
      cursor: pointer;
    }
  }

  .popup-crop-body {
    height: 400px;
    padding: 30px;

    .inner-body {
      height: 100%;
    }

    .image-crop {
      max-width: 100%;
      width: 100%;
      height: 100%;
    }
  }

  .popup-crop-footer {
    display: flex;
    align-items: center;
    padding: 30px;
    border-top: 1px solid #e8e8e8;

    .btn:last-of-type {
      margin-left: 8px;
    }

    .btn-rotate {
      position: relative;
      margin-right: auto;
      padding-left: 27px;
      font-size: 15px;
      font-weight: 600;
      color: #5a595e;
      background-color: transparent;
      border: none;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 23px;
        background: url('~@/assets/img/icons/ic_rotate.svg') no-repeat center;
        background-size: contain;
      }
    }
  }
</style>