<script lang="ts">
  /* Components */
  import H2 from "@/components/H2.svelte"
  import H3 from "@/components/H3.svelte"
  /* Const */
  import DOCUMENT from '@/const/sections/document'
</script>

<section id="document" class="document">
  <H3>{DOCUMENT.TITLE_SUB}</H3>
  <H2>{DOCUMENT.TITLE_MAIN}</H2>
  <ul class="documentContainer">
    <li class="documentItem">
      <iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/f889fcb4c9c14d11ba70c452d9b48a92" title="Web技術 で デスクトップアプリ !!? 〜 Electron のすすめ〜" allowfullscreen={true} style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: 100%;" data-ratio="1.78343949044586"></iframe>
    </li>
    <li class="documentItem">
      <iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/42112e4ab6914128b284f6815b1a35e9" title="ブロックチェーンを活用したスキル証明技術.pdf" allowfullscreen={true} style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: 100%;" data-ratio="1.7777777777777777"></iframe>
    </li>
  </ul>
</section>

<style>
  .document {
    width: 100%;
    min-height: 100vh;
    padding: 120px 10% 80px;
    text-align: center;
  }

  .documentContainer {
    margin: 40px 0;
  }

  .documentItem {
    margin: 0 auto;
    width: 60vw; /* 1.78 : 1 */
    height: 34vw;
  }
  .documentItem:not(:first-child) {
    margin-top: 60px;
  }
</style>