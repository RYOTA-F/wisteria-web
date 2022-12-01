<script lang="ts">
  /* Components */
  import H2 from "@/components/H2.svelte";
  import H3 from "@/components/H3.svelte";
  import Icon from '@/components/Icon.svelte'
  import ContentItem from "@/components/ContentItem.svelte";
  /* Const */
  import SERVICE from "@src/const/sections/service";
</script>

<section id="service" class="service">
  <H3>{SERVICE.TITLE_SUB}</H3>
  <H2>{SERVICE.TITLE_MAIN}</H2>

  <p class="description">{SERVICE.DESCRIPTION}</p>

  <div class="itemContainer">
    {#each SERVICE.CONTENTS as content}
      <div class="contentWrapper">
        <ContentItem >
          <H3>{content.TITLE}</H3>
          <div class="iconsContainer">
            {#each content.ICONS as icon}
              <div class="itemIcon">
                <Icon type={icon} />
              </div>
            {/each}
          </div>
          <p class="itemDescription">{content.DESCRIPTION}</p>
        </ContentItem>
      </div>
    {/each}

  </div>
</section>

<style>
  .service {
    width: 100%;
    min-height: calc(100vh - 80px);
    padding: 120px 10% 80px;
    text-align: center;
    background-color: #e3e9fd;
  }

  .description {
    margin-top: 24px;
    white-space: pre-wrap;
    line-height: 1.8;
  }

  .itemContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 42px auto;
    padding: 0 10%;
  }

  .contentWrapper {
    min-width: 45%;
    margin: 10px;
  }

  .iconsContainer {
    display: flex;
    padding: 0 10px;
  }
  .itemIcon {
    width: 100px;
    height: 100px;
    margin: 16px auto 0;
    padding: 16px;
    border-radius: 50%;
    align-items: center;
    background-color: rgba(173, 205, 236, 0.2);
  }
</style>