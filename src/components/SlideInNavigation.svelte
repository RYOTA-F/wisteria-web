<script lang="ts">
  import { CLASS_NAME } from '../const/slideInNavigation'
  let isOpen = false
</script>

<nav id={CLASS_NAME.TARGET}>
  <div id="g-nav-list"><!--ナビの数が増えた場合縦スクロールするためのdiv※不要なら削除-->
    <ul>
      <li><a href="#">Top</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Service</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>

<style>
  #g-nav {
    /*position:fixed;にし、z-indexの数値を大きくして前面へ*/
    position:fixed;
    z-index: -1;
    /*ナビのスタート位置と形状*/
    top:0;
    right: -120%;
    width:100%;
    height: 100vh;/*ナビの高さ*/
    background:#999;
      /*動き*/
    transition: all 0.6s;
  }

  /*アクティブクラスがついたら位置を0に*/
  #g-nav.active {
    right: 0;
  }
  #g-nav.active #g-nav-list{
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100vh;/*表示する高さ*/
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  /*ナビゲーション*/
  #g-nav ul {
    /*ナビゲーション天地中央揃え*/
    position: absolute;
    z-index: 999;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }

  /*リストのレイアウト設定*/
  #g-nav li{
    list-style: none;
    text-align: center;
  }

  #g-nav li a{
    color: #333;
    text-decoration: none;
    padding: 10px;
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: bold;
  }
</style>