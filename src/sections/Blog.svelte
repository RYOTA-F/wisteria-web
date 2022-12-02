<script lang="ts">
  /* Components */
  import H2 from "@/components/H2.svelte"
  import H3 from "@/components/H3.svelte"
  import BlogItem from "@/components/BlogItem.svelte"
  import Button from "@/components/Button.svelte"
  /* Const */
  import BLOG, { BUTTON } from "@/const/sections/blog"
</script>

<section id="blog" class="blog">
  <H3>{BLOG.TITLE_SUB}</H3>
  <H2>{BLOG.TITLE_MAIN}</H2>
  <div class="blogContainer">
    {#each BLOG.CONTENTS as content}
      <div class="blogItem">
        <BlogItem title={content.TITLE} url={content.URL} imageSrc={`/images/${content.IMAGE_SRC}`} />
      </div>
    {/each}
  </div>
  <div class="buttonContainer">
    <Button href={BUTTON.HREF} onClick={BUTTON.ON_CLICK}>{BUTTON.TEXT}</Button>
  </div>
</section>

<style>
  .blog {
    width: 100%;
    min-height: 100vh;
    padding: 120px 10% 80px;
    text-align: center;
  }

  .blogContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 10%;
  }

  .blogItem {
    width: 30%;
    margin-top: 40px;
  }

  .buttonContainer {
    margin-top: 40px;
  }

  @media screen and (max-width: 600px) {
    .blog {
      padding: 40px 20px;
    }

    .blogContainer {
      display: block;
      padding: 0 10px;
    }

    .blogItem {
      width: 100%;
      margin-top: 20px;
    }
  }
</style>