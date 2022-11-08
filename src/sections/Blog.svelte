<script lang="ts">
  import H2 from "../components/H2.svelte";
  import H3 from "../components/H3.svelte";
  import BlogItem from "../components/BlogItem.svelte";

  import BLOG from "../const/blog";
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
</section>

<style>
  .blog {
    width: 100%;
    min-height: calc(100vh - 80px);
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
</style>