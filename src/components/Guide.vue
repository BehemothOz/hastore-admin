<template>
<div class="guide-container">

<!-- Кнопки -->
<section class="guide-block">
  <h1 class="guide-title">Кнопки</h1>
  <div class="guide-example">
    <button class="btn btn-green">green</button><button class="btn btn-white">transparent</button>
  </div>
  <div class="guide-code">
    <pre>
      <code class="html">
<span class="comment">//- Зеленая кнопка</span>
<span class="tag">button</span><span class="class">.btn.btn-green</span>

<span class="comment">//- Прозрачная кнопка</span>
<span class="tag">button</span><span class="class">.btn.btn-white</span>
      </code>
    </pre>
  </div>
</section>

<!-- Элементы формы -->
<section class="guide-block">
  <h1 class="guide-title">Элементы формы</h1>
  <div class="guide-example form">
    <input class="input input-search" type="text" name="" placeholder="Поиск по названию или артикулу">
    <input class="input" type="text" name="">
    <textarea class="textarea"></textarea>
    <label class="check-label">
      <input class="input-checkbox" type="checkbox" name="" checked>
      <span class="check-tip">active</span>
    </label>
    <label class="check-label">
      <input class="input-checkbox" type="checkbox" name="">
      <span class="check-tip">no active</span>
    </label>
  </div>
  <div class="guide-code">
    <pre>
      <code class="html">
<span class="comment">//- input search</span>
<span class="tag">input</span><span class="attr">(type=<span class="class">"text"</span><span class="attr">)</span></span><span class="class">.input.input-search</span>

<span class="comment">//- input</span>
<span class="tag">input</span><span class="attr">(type=<span class="class">"text"</span><span class="attr">)</span></span><span class="class">.input</span>

<span class="comment">//- textarea</span>
<span class="tag">textarea</span><span class="class">.textarea</span>

<span class="comment">//- checkbox</span>
<span class="tag">label</span><span class="class">.check-label</span>
  <span class="tag">input</span><span class="attr">(type=<span class="class">"checkbox"</span><span class="attr">)</span></span><span class="class">.input-checkbox</span>
  <span class="tag">span</span><span class="class">.check-tip</span>
      </code>
    </pre>
  </div>
</section>

<!-- Выпадающее меню -->
<section class="guide-block">
  <h1 class="guide-title">Выпадающее меню</h1>
  <div class="guide-example">
    <div></div>
  </div>
  <div class="guide-code">
    <pre>
      <code class="html">

      </code>
    </pre>
  </div>
</section>

</div>
</template>

<script>
export default {
  name: 'guide',
};
</script>

<style lang="scss" scoped>

  .guide-block {
    width: 800px;
    margin: 0 auto 40px;
  }

  .guide-example {
    position: relative;
    padding: 45px 15px 15px;
    background-color: #fff;
    border-radius: 4px 4px 0 0;
    border: 1px solid #ddd;

    & > button {
      margin-right: 5px;
    }

    &.form > * {
      margin-bottom: 15px;
    }

    &.form > label {
      margin-right: 15px;
    }
  }

  .guide-example::before {
    content: "Пример";
    position: absolute;
    top: 15px;
    left: 15px;
    font-size: 12px;
    font-weight: 700;
    color: rgb(187, 187, 187);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .guide-code {
    padding: 9px 14px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #f7f7f9;
    border: 1px solid #e1e1e8;
    border-top: 0;
  }

  pre {
    margin: 0;
    word-break: break-all;
    word-wrap: break-word;
    white-space: nowrap;
  }

  code.html {
    background-color: transparent;
    border-radius: 0;
    white-space: pre;

    .comment {
      color: #999;
    }

    .tag {
      color: #2f6f9f;;
    }

    .attr {
      color: #4f9fcf;
    }

    .class {
      color: #d44950;
    }
  }

</style>