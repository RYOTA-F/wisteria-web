<script lang="ts">
  import { onMount } from "svelte"
  import CareerItem from "../components/CareerItem.svelte";

  onMount(() => {
    let slideConts = document.querySelectorAll('.carrerItem');
    let slideContsRect: any = [];
    let slideContsTop: number[] = [];
    let windowY = window.pageYOffset; // ウィンドウのスクロール位置を取得
    let windowH = window.innerHeight; // ウィンドウの高さを取得
    let remainder = 100; // ちょっとはみ出させる部分
    // 要素の位置を取得
    for (let i = 0; i < slideConts.length; i++) {
      slideContsRect.push(slideConts[i].getBoundingClientRect());
    }
    for (let i = 0; i < slideContsRect.length; i++) {
      slideContsTop.push(slideContsRect[i].top + windowY);
    }
    // ウィンドウがリサイズされたら、ウィンドウの高さを再取得
    window.addEventListener('resize', function () {
      windowH = window.innerHeight;
    });
    // スクロールされたら
    window.addEventListener('scroll', function () {
      // スクロール位置を取得
      windowY = window.pageYOffset;

      for (let i = 0; i < slideConts.length; i++) {
        // 要素が画面の下端にかかったら
        if(windowY > slideContsTop[i] - windowH + remainder) {
          // .showを付与
          slideConts[i].classList.add('show');
        } else {
          // 逆に.showを削除
          slideConts[i].classList.remove('show');
        }
      }
    });
  })
</script>

<section id="career" class="career">
  <div class="carrerItem test">
    <CareerItem text={'test'} />
  </div>
  <div class="carrerItem">
    <CareerItem text={'test'} />
  </div>
  <div class="carrerItem">
    <CareerItem text={'test'} />
  </div>
  <div class="carrerItem">
    <CareerItem text={'test'} />
  </div>
  <div class="carrerItem">
    <CareerItem text={'test'} />
  </div>
  <div class="carrerItem slideContsL">
    <CareerItem text={'test'} />
  </div>
</section>

<style>
  .career {
    width: 800px;
    padding-top: 80px;
    padding-bottom: 200px;

    position: relative;
    overflow: hidden;
    margin: 0 auto;
    width: 800px;
    margin: 0 auto;
  }

  .carrerItem {
    margin: 200px auto 0;
    width: 60%;

    width: 500px;
    height: 400px;
    transition: .5s;
  }

  .slideContsL {
    transform: translate(-800px, 0);
  }
  .slideContsR {
    transform: translate(800px, 0);
  }
  .slideContsL.show {
    transform: translate(-50px, 0) !important;
  }
  .slideContsR.show {
    transform: translate(50px, 0) !important;
  }
</style>