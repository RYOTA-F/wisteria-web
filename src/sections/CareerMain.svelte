<script lang="ts">
  import { onMount } from "svelte"

  import H2 from "../components/H2.svelte";
  import H3 from "../components/H3.svelte";
  import CareerItem from "../components/CareerItem.svelte";
  import CAREER from '../const/career'
  // import { scrollIntoItem } from '../lib/gsap/scrollTorigger'

  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  const scrollIntoItem = (className: string) => {
    gsap.to(`.${className}`, {
      x: '0px',
      duration: 1,

      scrollTrigger: {
        trigger: `.${className}`,
        start: 'center bottom',
      },
    })
  }
  onMount(() => {
    CAREER.ITEMS.forEach((_, i) => {
      scrollIntoItem(`${CAREER.SCROLL_IN_CLASS_NAME}${i}`)
    })
  })
</script>

<section id="career_main" class="careerMain">
  <H3>{CAREER.TITLE_SUB}</H3>
  <H2>{CAREER.TITLE_MAIN}</H2>
  {#each CAREER.ITEMS as item, i}
    <div class="carrerItem {CAREER.SCROLL_IN_CLASS_NAME}{i}">
      <CareerItem text={item.name} />
    </div>
  {/each}
</section>

<style>
  .careerMain {
    max-width: 100%;
    padding: 100px 10%;
    overflow: hidden;
    padding-bottom: 200px;
    text-align: center;
  }

  .carrerItem {
    transform: translateX(1000px);

  }
  .carrerItem:not(:first-child) {
    margin-top: 20px;
  }
</style>