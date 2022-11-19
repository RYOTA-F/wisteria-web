<script lang="ts">
  import CareerItem from "../components/CareerItem.svelte";

  const items = ['test1', 'test2','test3','test4', 'test5', 'test6', 'test7']
</script>

<section id="career" class="career">
  {#each items as item}
    <div class="carrerItem test">
      <CareerItem text={item} />
    </div>
  {/each}
</section>

<style>
  .career {
    padding-bottom: 200px;
  }

  .carrerItem {
    margin: 200px auto 0;
    width: 60%;

    width: 500px;
    height: 400px;
  }
</style>