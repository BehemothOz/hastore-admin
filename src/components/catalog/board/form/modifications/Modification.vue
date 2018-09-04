<template lang="pug">

  div.row.row-data
    div.cell.cell-width(:title="modData.j")
      span(v-on:click="showEditField($event)").cell-span {{ modData.j }}
      input(
        v-model.trim="modData.j"
        type="text"
        @keyup.enter="hideEditFiled($event)"
        @blur="hideEditFiled($event)"
        class="cell-input")

    div.cell.cell-diameter(:title="modData.d")
      span(v-on:click="showEditField($event)").cell-span {{ modData.d }}
      input(
        v-model.trim="modData.d"
        type="text"
        @keyup.enter="hideEditFiled($event)"
        @blur="hideEditFiled($event)"
        class="cell-input")

    div.cell.cell-radius
      span(v-on:click="showEditField($event)" :title="modData.et").cell-span {{ modData.et }}
      input(
        v-model.trim="modData.et"
        type='text'
        @keyup.enter="hideEditFiled($event)"
        @blur="hideEditFiled($event)"
        class="cell-input")

      label.label-diff-width
        input(v-model="modData.difWidth" type="checkbox").input-diff-width
        span.icon-diff-width.tooltip-call
          span(v-if="modData.difWidth").tooltip.center Отменить разноширинность
          span(v-else).tooltip.center Выставить разноширинность

    div.cell.cell-holes(:title="modData.holes_n")
      span(v-on:click="showEditField($event)").cell-span {{ modData.holes_n }}
      input(
        v-model.trim="modData.holes_n"
        type="text"
        @keyup.enter="hideEditFiled($event)"
        @blur="hideEditFiled($event)"
        class="cell-input")

    div.cell.cell-pcd(:title="modData.pcd")
      span(v-on:click="showEditField($event)").cell-span {{ modData.pcd }}
      input(
        v-model.trim="modData.pcd"
        type="text"
        @keyup.enter="hideEditFiled($event)"
        @blur="hideEditFiled($event)"
        class="cell-input")

    div.cell.cell-dia(:title="modData.dia")
      span(v-on:click="showEditField($event)").cell-span {{ modData.dia }}
      input(
        v-model.trim="modData.dia"
        type="text"
        @keyup.enter="hideEditFiled($event)"
        @blur="hideEditFiled($event)"
        class="cell-input")

    div.cell.cell-art(:title="modData.code")
      span(v-on:click="showEditField($event)").cell-span {{ modData.code }}
      input(
        v-model.trim="modData.code"
        type="text"
        @keyup.enter="hideEditFiled($event)"
        @blur="hideEditFiled($event)"
        class="cell-input")

    div.cell.cell-color(:title="modData.color")
      span(v-on:click="showEditField($event)").cell-span {{ modData.color }}
      input(
        v-model.trim="modData.color"
        type="text"
        @keyup.enter="hideEditFiled($event)"
        @blur="hideEditFiled($event)"
        class="cell-input")

    div.cell.cell-preview

    div.cell.cell-price(:title="modData.price")
      span(v-on:click="showEditField($event)").cell-span {{ modData.price }}
      input(
        v-model.trim="modData.price"
        type="text"
        @keyup.enter="hideEditFiled($event)"
        @blur="hideEditFiled($event)"
        class="cell-input")

    div.cell.cell-prices(:title="modData.prices")
      span(v-on:click="showEditField($event)").cell-span {{ modData.prices }}
      input(
        v-model.trim="modData.prices"
        type="text"
        @keyup.enter="hideEditFiled($event)"
        @blur="hideEditFiled($event)"
        class="cell-input")

    div.cell.cell-stock
      label.label-stock
        input(v-model="modData.stock" type="checkbox").input-stock
        span.icon-stock.tooltip-call
          span(v-if="modData.stock").tooltip.right Отменить в наличии
          span(v-else).tooltip.right Сделать в наличии

    div.cell.cell-del
      button(v-on:click="deleteRowMod").btn-del.tooltip-call
        span.tooltip.right Удалить модификацию

</template>

<script>
  export default {
    name: 'modification',
    props: ['mod'],

    data() {
      return {
        modData: {
          j: '',
          d: '',
          et: '',
          holes_n: '',
          pcd: '',
          dia: '',
          code: '',
          color: '',
          price: '',
          prices: '',
          stock: false,
          difWidth: false,
        },
      };
    },

    created() {
      if (this.mod.empty === true) {
        const emptyRow = this.modData;
        emptyRow.id = this.mod.id;
        this.$emit('initEmptyRowMod', emptyRow);
      } else {
        this.modData = this.mod;
      }
    },

    methods: {
      showEditField(e) {
        e.target.classList.add('hide');
        e.target.nextElementSibling.classList.add('show');
        e.target.nextElementSibling.focus();
      },

      hideEditFiled(e) {
        e.target.classList.remove('show');
        e.target.previousElementSibling.classList.remove('hide');
      },

      deleteRowMod() {
        this.$emit('deleteRowMod', this.modData.id);
      },
    },
  };
</script>

<style lang="scss" scoped>

  // Строка для данных
  .row-data {
    .cell {
      height: 43px;
      padding: 0;
      border-bottom: solid 1px #d7d7d7;

      .cell-span {
        display: block;
        min-height: 16px;
        padding: 12px 6px;
        font-size: 14px;
        line-height: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;

        &.hide {
          display: none;
        }
      }

      .cell-input {
        display: none;
        width: 100%;
        padding: 0 6px;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        line-height: 16px;
        font-weight: 600;
        color: #434343;
        border: none;

        &.show {
          display: block;
        }
      }
    }

    .cell-art {
      font-weight: bold;
    }

    // price
    .cell-price {
      font-size: 16px;
      font-weight: bold;
      color: #0e1824;
    }

    // preview TEMP!
    .cell-preview {
      background: url('~@/assets/img/icons/table/ic_img.svg') no-repeat center;
    }

    // icon stock
    .cell-stock {
      position: relative;

      .label-stock {
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 22px;
        height: 22px;
        margin-top: -11px;
        margin-left: -11px;
      }

      .input-stock {
        display: none;

        &:checked + .icon-stock {
          background-image: url('~@/assets/img/icons/table/ic_stock-true.svg');
        }
      }

      .icon-stock {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url('~@/assets/img/icons/table/ic_stock-false.svg');
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
      }
    }

    // icon diff-width 
    .cell-radius {
      position: relative;
      padding-right: 24px;

      .label-diff-width {
        position: absolute;
        top: 50%;
        right: 5px;
        display: block;
        width: 14px;
        height: 14px;
        margin-top: -7px;

        &:hover .icon-diff-width{
          opacity: 1;
        }

        .input-diff-width {
          display: none;

          &:checked + .icon-diff-width {
            background-image: url('~@/assets/img/icons/table/ic_radius-true.svg');
            opacity: 1;
          }
        }

        .icon-diff-width {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: url('~@/assets/img/icons/table/ic_radius.svg');
          background-repeat: no-repeat;
          background-position: center;
          cursor: pointer;

          opacity: 0.5;
        }
      }
    }

    // icon delete
    .cell-del {
      position: relative;

      .btn-del {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('~@/assets/img/icons/trash.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-color: transparent;
        border: none;
        cursor: pointer;

        &:hover {
          background-image: url('~@/assets/img/icons/trash-active-red.svg');

          .tooltip {
            top: -24px;
          }
        }

        .tooltip {
          right: 1px;
        }
      }
    }

    .tooltip-call {
      position: relative;

      &:hover .tooltip {
        top: -33px;
        opacity: 1;
        visibility: visible;
      }
    }
  }

  // tooltip
  .tooltip {
    position: absolute;
    top: -40px;
    
    padding: 5px 6px;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    background-color: black;
    border-radius: 3px;
    z-index: 1;
    white-space: nowrap;

    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;

    &.right {
      right: -10px;
    }

    &.center {
      left: 50%;
      transform: translateX(-50%);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      border-width: 5px;
      border-style: solid;
      border-color: #000 transparent transparent transparent;
    }

    &.right::after {
      right: 17px;
    }

    &.center::after {
      left: 50%;
      margin-left: -4px;
    }
  }

</style>
