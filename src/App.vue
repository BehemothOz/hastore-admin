<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderNav from '@/components/Header';

  export default {
    name: 'app',
    components: { HeaderNav },
  };
</script>

<style lang="scss">

/*-------------------*/
/** Элементы формы **/

  .input {
    width: 100%;
    height: 50px;
    padding: 0 11px;
    font-size: 19px;
    color: #5b5a5f;
    border-radius: 4px;
    border: solid 1px #bfbfbf;
  }

  .input:hover,
  .input:focus {
    border: solid 1px #717274;
  }

  .input-search {
    height: 36px;
    padding-left: 42px;
    font-size: 15px;
    background-image: url('~@/assets/img/icons/ic_search.svg');
    background-repeat: no-repeat;
    background-position: 14px center;
  }

  .textarea {
    width: 100%;
    height: 240px;
    padding: 11px;
    font-size: 19px;
    color: #5b5a5f;
    border-radius: 4px;
    border: solid 1px #bfbfbf;
    resize: none;
  }

  .textarea:hover,
  .textarea:focus {
    border: solid 1px #717274;
  }

  .input[type="text"]::-webkit-input-placeholder,
  .input[type="text"]::-moz-placeholder {
      color: #9c9c9c;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      margin: 0; 
  }

  .check-label {
    padding-left: 25px;
  }

  .input-checkbox {
    display: none;
  }

  .check-tip {
    position: relative;
    margin-left: 4px;
    font-size: 17px;
    font-weight: bold;
    color: #5a595e;
    cursor: pointer;
  }

  .check-tip::before {
    content: '';
    top: 4px;
    left: -28px;
    position: absolute;
    width: 14px;
    height: 14px;
    border: 1px solid #bfbfbf;
    border-radius: 2px;
    cursor: pointer;
  }

  .input-checkbox:checked + .check-tip::before {
    background: url('~@/assets/img/icons/ic_check.svg') no-repeat center;
    background-color: #54a5e0;
    background-size: 80%;
    border-color: #54a5e0;
  }

</style>
