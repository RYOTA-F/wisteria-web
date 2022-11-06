<script lang="ts">
  import ContentItem from "../components/ContentItem.svelte";

  import H2 from "../components/H2.svelte";
  import H3 from "../components/H3.svelte";
  import ABOUT from '../const/about'

  const onClick = () => console.log('移動')
</script>

<section id="about" class="about">
  <H3>{ABOUT.TITLE_SUB}</H3>
  <H2>{ABOUT.TITLE_MAIN}</H2>
  <p class="description">{ABOUT.DESCRIPTION}</p>

  <div class="itemContainer">
    <ContentItem onClick={onClick} />
    <ContentItem onClick={onClick} />
  </div>
</section>

<style>
  .about {
    width: 100%;
    padding: 180px 10%;
    text-align: center;
    background-color: #f1f1f1;
  }

  .description {
    margin-top: 24px;
    white-space: pre-wrap;
    line-height: 1.8;
  }

  .itemContainer {
    display: flex;
    justify-content: space-around;
    margin: 44px auto;
  }
</style>