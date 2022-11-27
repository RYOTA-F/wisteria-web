<script lang="ts">
  import H2 from "../components/H2.svelte";
  import H3 from "../components/H3.svelte";
  import Icon from '../components/Icon.svelte'
  import ContentItem from "../components/ContentItem.svelte";

  import ABOUT from '../const/about'

  // TODO: :GA
  const onClick = () => {}
</script>

<section id="about" class="about">
  <H3>{ABOUT.TITLE_SUB}</H3>
  <H2>{ABOUT.TITLE_MAIN}</H2>
  <p class="description">{ABOUT.DESCRIPTION}</p>

  <div class="itemContainer">
    {#each ABOUT.CONTENTS as content}
      <ContentItem href={content.BUTTON_LINK} buttonText={content.BUTTON_TEXT} onClick={onClick}>
        <H3>{content.TITLE}</H3>
        <div class="itemIcon">
          <img src={`icons/${content.ICON_TYPE}.svg`} alt={content.ICON_TYPE} />
        </div>
        <p class="itemDescription">{content.DESCRIPTION}</p>
      </ContentItem>
    {/each}
  </div>
</section>

<style>
  .about {
    width: 100%;
    min-height: calc(100vh - 80px);
    padding: 120px 10% 80px;
    text-align: center;
    background-color: rgba(241, 241, 241, 0.5);
  }

  .description {
    margin-top: 24px;
    white-space: pre-wrap;
    line-height: 1.8;
  }

  .itemContainer {
    display: flex;
    justify-content: space-around;
    margin: 52px auto;
    padding: 0 10%;
  }

  .itemIcon {
    max-height:150px;
    max-width: 150px;
    margin: 16px auto 0;
    overflow: hidden;
  }


  .itemDescription {
    margin-top: 24px;
  }
</style>