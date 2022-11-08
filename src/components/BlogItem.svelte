<script lang="ts">
  export let title: string
  export let url: string
  export let imageSrc: string
</script>

<a href={url} target="_brank">
  <div class="imageContainer">
    <img src={imageSrc} alt="Route53" class="image" />
  </div>
  <div class="title">{title}</div>
</a>

<style>
  .imageContainer {
    height: 160px;
    margin: 0 auto;
    overflow: hidden;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    border-radius: 5px 5px 0 0;
  }

  .image {
    transition: 0.3s all;
  }
  .image:hover {
    transform: scale(1.1,1.1);
    transition: 0.3s all;
    opacity: 0.5;
  }

  .title {
    min-height: 90px;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 0 0 4px 4px;
    color: #fff;
    background-color: rgba(94, 108, 119, 0.6);
    white-space: pre-wrap;
  }
</style>