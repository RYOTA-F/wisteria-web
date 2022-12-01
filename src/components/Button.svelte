<script lang="ts">
  /* Props */
  export let onClick: () => void
  export let href: string | undefined = undefined
</script>

<a href={href} target="__brank">
  <button on:click={onClick} class="button">
    <span class="button__inner">
      <slot />
    </span>
  </button>
</a>

<style>
  .button {
    padding: 16px 40px;
    color: #fff;
    background-color: #709dd8;
    border-radius: 9999px;
    position: relative;
  }
  .button:hover {
    cursor: pointer;
    color: #709dd8;
    background-color: #fff;
    transition: 0.5s;
  }

  .button__inner {
    margin: 0 30px;
  }
  .button__inner:after {
    position: absolute;
    display: block;
    content: "";
    height: 12px;
    width: 12px;
    top: 50%;
    right: 24px;
    margin-top: -6px;
    border-bottom: 4px solid #fff;
    border-left: 4px solid #fff;
    transform: rotate(225deg);
    transition: border-color .3s,transform .3s;
    transition: border-color .3s;
  }

  @media screen and (max-width: 600px) {
    .button {
      padding: 12px 30px;
    }
    .button__inner {
      margin: 0;
    }

    .button__inner:after {
      display: none;
    }
  }
</style>